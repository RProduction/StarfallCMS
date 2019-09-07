'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, { request, response }) {
    // send exception of 404 NOT FOUND for every not found error
    if(error.name === 'ModelNotFoundException'){
      Logger.error('404 NOT FOUND');
      return response.notFound('404 NOT FOUND');
    }
    else if(error.name === 'InvalidSessionException' || 
      error.name === 'InvalidApiToken'
    ){
      Logger.error('Need Right Authorization');
      return response.unauthorized('Need Right Authorization');
    }

    return super.handle(error, {request, response});
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
    Logger.error(error.name);
    Logger.error(error);
  }
}

module.exports = ExceptionHandler
