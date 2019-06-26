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

// routes group with all auth
Route.group(function(){
    // routes for users
    Route.get('user', 'UserController.index');

    // routes for Projects
    Route.get('project', 'ProjectController.index');

    // routes for Entity
    Route.get('entity', 'EntityController.index');
    Route.get('entity/:id', 'EntityController.entities');

}).prefix('api').middleware('authAll');

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
    Route.post('', 'ProjectController.add');
    Route.delete(':id', 'ProjectController.delete');
    Route.post(':id/rename', 'ProjectController.rename');

}).prefix('api/project').middleware('authNonUser');

// routes group with creator and manager only auth
// routes for Entity
Route.group(function(){
    Route.post(':id', 'EntityController.add');
    Route.delete(':id', 'EntityController.delete');
    Route.post(':id/rename', 'EntityController.rename');

}).prefix('api/entity').middleware('authNonUser');

// routes group for public access
// need KEY API
Route.group(function(){

}).prefix('api');