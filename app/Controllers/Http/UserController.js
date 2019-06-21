'use strict'

const User = use('App/Models/User');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

class UserController {
    
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    */
    async add({request}){
        const {email, password, username, authority} = request.all();
        const user = new User();
        user.username = username;
        user.email = email;
        user.password = password;
        user.authority = authority;

        await user.save();
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    */
    async delete({request}){
        const {email} = request.all();
        await Database.table('users').where('email', email).delete();
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    async login({request, auth}){
        const {email, password} = request.all();
        await auth.attempt(email, password);
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    async logout({auth}){
        await auth.logout();
    }
}

module.exports = UserController
