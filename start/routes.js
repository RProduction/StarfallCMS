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
    Route.post('add', 'UserController.add');
    Route.delete(':id', 'UserController.delete');
    Route.post('login', 'UserController.login');
    Route.post('logout', 'UserController.logout');

    // routes for get entity data
}).prefix('api/user');

// routes group with creator only auth
// routes for Projects
Route.group(function(){
    Route.post('add', 'ProjectController.add');
    Route.post('delete', 'ProjectController.delete');
    Route.post('rename', 'ProjectController.rename');

}).prefix('api/project').middleware('authCreator');

// routes group with creator and manager only auth
// routes for Entity
Route.group(function(){
    Route.post('add', 'EntityController.add');
    Route.post('delete', 'EntityController.delete');
    Route.post('rename', 'EntityController.rename');

}).prefix('api/entity').middleware('authNonUser');

// routes group with all auth
Route.group(function(){
    // routes for Projects
    Route.get('project', 'ProjectController.index');

    // routes for Entity
    Route.get('entity', 'EntityController.index');

}).prefix('api').middleware('authAll');
