'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const User = use('App/Models/User');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class UserController {
    
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get all available users
    // can only be called from StarfallCMS only(must be login)
    async index({response}){
        return response.json(await User.all());
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // get status of authentication
    // will return message informing status
    // if first boot(no user yet) then 0
    // if not first boot and not login then -1
    // if not first boot and user login then 1
    // if not first boot and manager login then 2
    // if not first boot and creator login then 3
    async status({auth}){
        try{
            const usercount = await User.count();
            Logger.info(`User count ${usercount}`);
            if(!usercount){
                Logger.info("First boot");
                return 0;
            }

            const user = await auth.getUser();
            switch(user.authority){
                case 'Creator':
                    Logger.info("Creator Logged in");
                return 3;
                case 'Manager':
                    Logger.info("Manager Logged in");
                return 2;
                case 'User':
                    Logger.info("User Logged in");
                return 1;
            }
        }
        catch(error){
            Logger.warning("Not logged in");
            Logger.warning(error);
            return -1;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async add(ctx){
        const {request, response} = ctx;
        // check if first boot then allow add user as creator
        // can only add user from creator/manager/first boot
        const status = await this.status(ctx);
        if(status === -1 || status === 1){
            Logger.warning("Cannot add user");
            return response.internalServerError('Cannot add user');
        }

        const {password, username, authority} = request.post();
        
        try{
            Logger.info(`username: ${username}, password: ${password}, authority: ${authority}`);
            Logger.info('create new user');

            const user = new User();
            user.username = username;
            user.password = password;
            user.authority = authority;
            await user.save();

            return response.ok('succeed create new user');
        }
        catch(error){
            Logger.warning('Fail to create new user');
            Logger.warning(error);
            return response.internalServerError('Fail to create new user');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async delete({response, params, auth}){
        // check logged as creator or manager
        // can only delete user from creator/manager
        const status = await this.status(auth);
        if(status === -1 || status === 1 || status === 0){
            Logger.warning("Cannot delete user");
            return response.internalServerError('Cannot delete user');
        }

        const id = params.id;
        
        try{
            Logger.info(`delete user with id ${id}`);
            const user = await User.findOrFail(id);
            await user.delete();
            return response.ok('delete user');
        }
        catch(error){
            Logger.warning('Fail to delete user');
            Logger.warning(error);
            return response.internalServerError('Fail to delete user');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async signin({request, auth, response}){
        const {username, password} = request.post();

        try{
            Logger.info(`username: ${username}, password: ${password}`);
            await auth.attempt(username, password);
            return response.ok('succeed login');
        }
        catch(error){
            Logger.warning('Fail to login');
            Logger.warning(error);
            return response.internalServerError('Fail to login');
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async signout({auth, response}){
        try{
            Logger.info(`logout`);
            await auth.logout();
            return response.ok('succeed logout');
        }
        catch(error){
            Logger.warning('Fail to logout');
            Logger.warning(error);
            return response.internalServerError('Fail to logout');
        }
    }
}

module.exports = UserController
