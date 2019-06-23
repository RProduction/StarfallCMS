'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class ProjectController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // get all projects data including name and public_key
    // can only be called from StarfallCMS only(must be login)
    async index({response, auth}){
        try{
            await auth.check();
        }
        catch(error){
            Logger.info(`Need to be authorized to get projects`);
            response.unauthorized('Need to be authorized to get projects');
            return;
        }

        response.json(await Project.all());
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new project
    // only creator can add new project
    async add({request, auth, response}){
        try{
            const user = await auth.getUser();
            Logger.info(user.authority);
            if(user === undefined || user === null || user.authority !== 'Creator') throw('');
        }
        catch(error){
            Logger.warning(`Need right authorization to add new project`);
            response.unauthorized('Need right authorization to add new project');
            return;
        }

        const {project_name} = request.post();

        try{
            Logger.info(`create new project ${project_name}`);

            const project = new Project();
            project.project_name = project_name;
            const trx = await Database.beginTransaction();
            await project.save(trx);
            await trx.commit();

            Logger.info(`${project_name}: ${project.public_key}`);
            response.ok('succeed create new project');
        }
        catch(error){
            Logger.warning('Fail to create new project');
            Logger.warning(error);
            response.internalServerError('Fail to create new project');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete existing project
    // only creator can delete existing project
    async delete({request, auth, response}){
        try{
            const user = await auth.getUser();
            if(user === undefined || user === null || user.authority !== 'Creator') throw('');
        }
        catch(error){
            Logger.warning(`Need right authorization to delete existing project`);
            response.unauthorized('Need right authorization to delete existing project');
            return;
        }

        const {project_name} = request.post();

        try{
            Logger.info(`delete project ${project_name}`);
            await Project.findByOrFail('project_name', project_name).delete();
            response.ok('succeed delete');
        }
        catch(error){
            Logger.warning('Fail to delete project');
            Logger.warning(error);
            response.internalServerError('Fail to delete project');
            return;
        }
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * @param {import('@adonisjs/auth/src/Auth')} ctx.auth
    */
    // rename existing project
    // only creator can rename existing project
    async rename({request, auth, response}){
        try{
            const user = await auth.getUser();
            if(user === undefined || user === null || user.authority !== 'Creator') throw('');
        }
        catch(error){
            Logger.warning(`Need right authorization to rename existing project`);
            response.unauthorized('Need right authorization to rename existing project');
            return;
        }

        const {project_name, new_name} = request.post();

        try{
            Logger.info(`rename project ${project_name} into ${new_name}`);
            
            const project = await Project.findByOrFail('project_name', project_name);
            project.project_name = new_name;
            const trx = await Database.beginTransaction();
            await project.save(trx);
            await trx.commit();

            response.ok('succeed rename project');
        }
        catch(error){
            Logger.warning('Fail to rename project');
            Logger.warning(error);
            response.internalServerError('Fail to rename project');
            return;
        }
    }
}

module.exports = ProjectController
