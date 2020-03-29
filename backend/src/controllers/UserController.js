const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, reponse) {
        const { name, email, password } = request.body;

        await connection('users').insert({
            name,
            email,
            password,
        });

        return response.json({ name });
    }
};