'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class UserController {
    
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async add({request, response}){
        const {email, password, username, authority} = request.post();
        
        try{
            Logger.info(`email: ${email}, password: ${password}, username: ${username}, authority: ${authority}`);
            Logger.info('create new user');

            const user = new User();
            user.username = username;
            user.email = email;
            user.password = password;
            user.authority = authority;
            const trx = await Database.beginTransaction();
            await user.save(trx);
            await trx.commit();

            response.ok('succeed create new user');
        }
        catch(error){
            Logger.warning('Fail to create new user');
            Logger.warning(error);
            response.internalServerError('Fail to create new user');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async delete({request, response}){
        const {email} = request.post();
        
        try{
            Logger.info(`delete user ${email}`);
            const user = await User.findByOrFail('email', email);
            await user.delete();
            response.ok('delete user');
        }
        catch(error){
            Logger.warning('Fail to delete user');
            Logger.warning(error);
            response.internalServerError('Fail to delete user');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async login({request, auth, response}){
        const {email, password} = request.post();

        try{
            Logger.info(`login email: ${email}, password: ${password}`);
            await auth.attempt(email, password);
            response.ok('succeed login');
        }
        catch(error){
            Logger.warning('Fail to login');
            Logger.warning(error);
            response.internalServerError('Fail to login');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    async logout({auth, response}){
        try{
            Logger.info(`logout`);
            await auth.logout();
            response.ok('succeed logout');
        }
        catch(error){
            Logger.warning('Fail to logout');
            Logger.warning(error);
            response.internalServerError('Fail to logout');
            return;
        }
    }
}

module.exports = UserController
