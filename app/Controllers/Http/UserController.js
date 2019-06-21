'use strict'

const User = use('App/Models/User');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class UserController {
    
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    */
    async add({request}){
        const {email, password, username, authority} = request.post();
        const user = new User();
        user.username = username;
        user.email = email;
        user.password = password;
        user.authority = authority;

        try{
            Logger.info(`email: ${email}, password: ${password}, username: ${username}, authority: ${authority}`);
            Logger.info('create new user');
            await user.save();
        }
        catch(error){
            Logger.warning('Fail to create new user');
            Logger.warning(error);
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    */
    async delete({request}){
        const {email} = request.post();
        try{
            Logger.info(`delete user ${email}`);
            await Database.table('users').where('email', email).delete();
        }
        catch(error){
            Logger.warning('Fail to delete user');
            Logger.warning(error);
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    async login({request, auth}){
        const {email, password} = request.post();

        try{
            Logger.info(`login email: ${email}, password: ${password}`);
            await auth.attempt(email, password);
        }
        catch(error){
            Logger.warning('Fail to login');
            Logger.warning(error);
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    async logout({auth}){
        try{
            Logger.info(`logout`);
            await auth.logout();
        }
        catch(error){
            Logger.warning('Fail to logout');
            Logger.warning(error);
        }
    }
}

module.exports = UserController
