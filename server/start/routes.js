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

// routes for User Authentication
const UserController = use('App/Controllers/Http/UserController');
Route.post('api/user/add', UserController.add);
Route.post('api/user/delete', UserController.delete);
Route.post('api/user/login', UserController.login);
Route.post('api/user/logout', UserController.logout);
