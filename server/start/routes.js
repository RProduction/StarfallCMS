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
}).middleware('auth');

Route.group(function(){
    // routes for User Authentication
    Route.get('status', 'UserController.status');
    Route.post('', 'UserController.add').validator('signup');
    Route.delete(':id', 'UserController.delete').middleware(['auth', 'authCreator']);
    Route.post('signin', 'UserController.signin').validator('signin');
    Route.post('signout', 'UserController.signout');
}).prefix('user');

// routes group with creator only auth
// routes for Projects
Route.group(function(){
    Route.post('', 'ProjectController.add').validator('project');
    Route.delete(':id', 'ProjectController.delete');
    Route.post(':id/rename', 'ProjectController.rename').validator('project');
    Route.post(':id/img', 'ProjectController.img').validator('projectImg');

}).prefix('project').middleware(['auth', 'authCreator']);

// routes group with creator and manager only auth
// routes for Entity
Route.group(function(){
    Route.post(':id', 'EntityController.add').validator('entity');
    Route.delete(':id', 'EntityController.delete');
    Route.post(':id/rename', 'EntityController.rename').validator('entity');
}).prefix('entity').middleware(['auth']);

// routes group with all auth
// routes for Document
Route.group(function(){
    Route.get(':id', 'DocumentController.index');
    Route.post(':id', 'DocumentController.add');
    Route.post(':id/modify', 'DocumentController.modify');
    Route.delete('', 'DocumentController.delete');
}).prefix('document').middleware('auth');

// routes for Storage
Route.group(function(){
    Route.get(':id', 'StorageController.index');
    Route.post(':id', 'StorageController.upload');
    Route.post(':id/folder', 'StorageController.folder');
    Route.post(':id/move', 'StorageController.move');
    Route.post(':id/rename', 'StorageController.rename');
    Route.delete(':id', 'StorageController.delete');
}).prefix('storage').middleware('auth');

// routes group for public access
// need KEY API
Route.group(function(){

}).prefix('api');

Route.any('#/*', ()=>{});