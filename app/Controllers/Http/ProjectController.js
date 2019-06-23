'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Entity = use('App/Models/Entity');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Project = use('App/Models/Project');

/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

class ProjectController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get all projects data including name and public_key
    // can only be called from StarfallCMS only(must be login)
    async index({response}){
        response.json(await Project.all());
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new project
    // only creator can add new project
    async add({request, response}){
        const {project_name} = request.post();

        try{
            Logger.info(`create new project ${project_name}`);

            const project = new Project();
            project.project_name = project_name;
            await project.save();

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
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // delete existing project
    // only creator can delete existing project
    async delete({request, response}){
        const {project_name} = request.post();

        try{
            Logger.info(`delete project ${project_name}`);
            // find project and all related entities
            const project = await Project.findByOrFail('project_name', project_name);
            let target = await project.entities().where('project_id', project.id).fetch();
            target = target.toJSON();
            
            // delete entities related to project
            for(let i=0; i<target.length; i++){
                const entity = await Entity.findOrFail(target[0].id);
                await entity.delete();
            }

            // delete project
            await project.delete();
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
    */
    // rename existing project
    // only creator can rename existing project
    async rename({request, response}){
        const {project_name, new_name} = request.post();

        try{
            Logger.info(`rename project ${project_name} into ${new_name}`);
            
            const project = await Project.findByOrFail('project_name', project_name);
            project.project_name = new_name;
            await project.save();

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
