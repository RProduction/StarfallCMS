'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers');


Route.group(function(){
    // routes for User Authentication
    Route.post('user/add', 'UserController.add');
    Route.post('user/delete', 'UserController.delete');
    Route.post('user/login', 'UserController.login');
    Route.post('user/logout', 'UserController.logout');
    
    // routes for Projects
    Route.get('project', 'ProjectController.index');
    Route.post('project/add', 'ProjectController.add');
    Route.post('project/delete', 'ProjectController.delete');
    Route.post('project/rename', 'ProjectController.rename');

    // routes for Entity
    Route.get('entity', 'EntityController.index');
    Route.post('entity/add', 'EntityController.add');
    Route.post('entity/delete', 'EntityController.delete');
    Route.post('entity/rename', 'EntityController.rename');

    // routes for get entity data
}).prefix('api');
