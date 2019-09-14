'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Entity = use('App/Models/Entity');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Document = use('App/Models/Document');
/** @type {import('@adonisjs/framework/src/Logger')} */
const Logger = use('Logger');

/** @type {import('@adonisjs/websocket/src/Ws')} */
const Ws = use('Ws');
/** @type {import('@adonisjs/websocket/src/Channel')} */
const channel = Ws.getChannel('document');

// return [[key, value], ...]
function GenerateQueryArray(stringQuery, jsonField){
    let res = [];
    const queries = stringQuery.split(',').filter(value => value.length !== 0);
    for(const query of queries){
        const [key, value] = query.split(':', 2).map(value => value.trim());
        // create right key format for query
        // key has format of key.key.key
        let newKey = '';
        key.split('.').filter(value => value.length !== 0).forEach((value, index) => {
            newKey = index === 0 && key.length === 1 ? 
            `${jsonField}->>'${value}'` : index === 0 && key.length > 1 ?
            `${jsonField}->'${value}'` :
            `${newKey}->>'${value}'`;
        });

        res.push([newKey, value]);
    }

    return res;
}

class DocumentController {
    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // get all document data in table
    // need parameter entity id as collection name
    // can only be called from StarfallCMS and api authenticated
    // have get query consisting of limit, offset, sort, search
    // limit: number
    // offset: number
    // orderBy: key: desc/asc, ...
    // search: key: value, ...
    // will always return array
    async index({response, request, params}){
        const {limit, offset, orderBy, search} = request.get();
        Logger.info(`fetch documents in entity with id ${params.entity}`);
        const entity = await Entity.findOrFail(params.entity);
        let documents;

        try{
            let query = entity.documents();
            if(limit) query.limit(limit);
            if(offset) query.offset(offset);
            if(orderBy){
                GenerateQueryArray(orderBy, 'data').forEach(
                    ([key, value]) => query.orderByRaw(`${key} ${value}`)
                );
            }
            if(search){
                GenerateQueryArray(search, 'data').forEach(
                    ([key, value]) => query.whereRaw(`${key} LIKE '%${value}%'`)
                );
            }

            documents = await query.fetch();
        }catch(err){
            Logger.warning(`fail to fetch documents in entity with id ${params.entity}`);
            Logger.warning(err);
            return response.internalServerError(`fail to fetch documents in entity with id ${params.entity}`);
        }

        return response.json(documents);
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // add new document into table of
    // need parameter entity id as collection name
    // can only be called from StarfallCMS only(must be login)
    // accept data
    async add({request, response, params}){
        let {data} = request.post();

        Logger.info(`add new document into entity ${params.entity}`);
            
        // find entity first then add new document
        const entity = await Entity.findOrFail(params.entity);
        const document = new Document();
        document.data = data;

        try{
            await entity.documents().save(document);
        }
        catch(error){
            Logger.warning('Fail to add new document');
            Logger.warning(error);
            return response.internalServerError('Fail to add new document');
        }

        const topic = channel.topic('document');
        if(topic){
            topic.broadcast('add', document);
        }

        return response.ok('succeed adding new document');
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    */
    // change existing document data
    // need parameter document id
    // can only be called from StarfallCMS only(must be login)
    // accept data
    async modify({request, response, params}){
        let {data} = request.post();

        Logger.info(`modify existing document with id: ${params.document}`);

        // then save using entity
        const document = await Document.findOrFail(params.document);
        document.data = data;

        try{
            await document.save();
        }
        catch(error){
            Logger.warning('Fail to modify document');
            Logger.warning(error);
            return response.internalServerError('Fail to modify document');
        }

        const topic = channel.topic('document');
        if(topic){
            topic.broadcast('modify', {
                id: document.id, 
                data: JSON.parse(document.data),
                updated_at: document.updated_at
            });
        }

        return response.ok('succeed modify existing document');
    }

    /**
    * @param {object} ctx
    * @param {import('@adonisjs/framework/src/Response')} ctx.response
    * @param {import('@adonisjs/framework/src/Request')} ctx.request
    */
    // delete documents
    // will receive post data of array of id
    // can only be called from StarfallCMS only(must be login)
    async delete({request, response}){
        const {ids} = request.post();

        try{
            if(ids.length === 0) throw 'No documents to be deleted';
        }catch(err){
            return response.notFound(err);
        }

        Logger.info(`delete documents`);
        try{
            await Document.query().whereIn('id', ids).delete();
        }
        catch(error){
            Logger.warning('Fail to delete document');
            Logger.warning(error);
            return response.internalServerError('Fail to delete documents');
        }

        const topic = channel.topic('document');
        if(topic){
            topic.broadcast('delete', {ids: ids});
        }

        return response.ok('succeed deleting documents');
    }
}

module.exports = DocumentController
