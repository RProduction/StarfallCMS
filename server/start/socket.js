'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/
/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

const Ws = use('Ws');

Ws.channel('project', ({ socket }) => {
    Logger.info(`user joined with ${socket.id} topic project`);
}).middleware(['auth']);

Ws.channel('entity', ({ socket }) => {
    Logger.info(`user joined with ${socket.id} topic entity`);
}).middleware(['auth']);

Ws.channel('document', ({ socket }) => {
    Logger.info(`user joined with ${socket.id} topic document`);
}).middleware(['auth']);