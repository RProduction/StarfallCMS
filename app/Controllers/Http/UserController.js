'use strict'

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const User = use('App/Models/User');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const FIRST_BOOT = 0;
const CREATOR = 1;
const USER = 2;
const NOT_AUTHORIZED = -1;

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
                return FIRST_BOOT;
            }

            const user = await auth.getUser();
            return user.is_creator ? CREATOR : USER;
        }
        catch(error){
            Logger.warning("Not logged in");
            Logger.warning(error);
            return NOT_AUTHORIZED;
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
        if(status === NOT_AUTHORIZED || status === USER){
            Logger.warning("Cannot add user");
            return response.internalServerError('Cannot add user');
        }

        const {password, username} = request.post();
        
        try{
            Logger.info(`username: ${username}, password: ${password}`);
            Logger.info('create new user');

            const user = new User();
            user.username = username;
            user.password = password;
            user.is_creator = status === FIRST_BOOT;
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
    async delete({response, params}){
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
    async signin(ctx){
        const {request, auth, response} = ctx;
        const {username, password} = request.post();

        try{
            Logger.info(`username: ${username}, password: ${password}`);
            await auth.attempt(username, password);

            // sign in state
            const status = await this.status(ctx);
            return response.ok({msg: 'succeed login', status: status});
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
