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
    Route.delete(':user', 'UserController.delete').middleware(['auth', 'authCreator']);
    Route.post('signin', 'UserController.signin').validator('signin');
    Route.post('signout', 'UserController.signout');
}).prefix('user');

// routes group with creator only auth
// routes for Projects
Route.group(function(){
    Route.post('', 'ProjectController.add').validator('project');
    Route.delete(':project', 'ProjectController.delete');
    Route.post(':project/rename', 'ProjectController.rename').validator('project');
    Route.post(':project/img', 'ProjectController.img').validator('projectImg');

}).prefix('project').middleware(['auth', 'authCreator']);

// routes group with creator and manager only auth
// routes for Entity
Route.group(function(){
    Route.post(':project', 'EntityController.add').validator('entity');
    Route.delete(':entity', 'EntityController.delete');
    Route.post(':entity/rename', 'EntityController.rename').validator('entity');
}).prefix('entity').middleware(['auth']);

// routes group with all auth
// routes for Document
Route.group(function(){
    Route.get(':entity', 'DocumentController.index');
    Route.post(':entity', 'DocumentController.add');
    Route.post(':document/modify', 'DocumentController.modify');
    Route.delete('', 'DocumentController.delete');
}).prefix('document').middleware('auth');

// routes for Storage
Route.group(function(){
    Route.get('', 'StorageController.index');
    Route.post('', 'StorageController.upload');
    Route.post(':folder', 'StorageController.folder');
    Route.post('move', 'StorageController.move');
    Route.post('rename', 'StorageController.rename');
    Route.delete('', 'StorageController.delete');
}).prefix('storage/:project').middleware('auth');

// routes group for public access
// need to attempt sign in using project name as uid and public key as password
Route.group(function(){
    // storage
    // use for download or file streaming
    Route.get('', 'StorageController.stream');

}).prefix('api/storage/:project').middleware(['auth:api', 'authApi']);

Route.group(function(){
    // documents
    Route.get(':entity', 'DocumentController.index');
    Route.post(':entity', 'DocumentController.add');
    Route.post(':document/modify', 'DocumentController.modify');
    Route.delete('', 'DocumentController.delete');
}).prefix('api/document/:project').middleware(['auth:api', 'authApi']);

Route.any('#/*', ()=>{});