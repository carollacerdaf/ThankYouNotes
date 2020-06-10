const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async indexById(request, response) {
        
        const user = await connection('users').select('*')
        .where('id',request.params.id);

        return response.json(user);
    },


    async create(request, response) {
        const { name, email, password } = request.body;

        await connection('users').insert({
            name,
            email,
            password,
        });

        return response.json({ name });
    },

    async delete(request, response) {
        const {id} = request.body;

        await connection('users').where('id', id).delete();

        return response.status(204).send();
    }
};