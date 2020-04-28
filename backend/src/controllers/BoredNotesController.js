const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const {note} = request.body;
        const user_id = request.headers.authorization;
        date = new Date();
        const [id] = await connection('borednotes').insert({
            note,
            date,
            user_id
        });
        
        return response.json({id});
    },

    async delete(request, response) {
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const note = await connection('borednotes')
        .where('id',id)
        .select('user_id')
        .first();

        if(note.user_id != user_id) {
            return response.status(401).json({ error: 'Operação não permitida' });
        }

        await connection('borednotes').where('id', id).delete();

        return response.status(204).send();
    }
}