const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const {note, date} = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('thankyounotes').insert({
            note,
            date,
            user_id
        });

        return response.json({id});
    },

    async delete(request, response) {
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const note = await connection('thankyounotes')
        .where('id',id)
        .select('user_id')
        .first();

        if(note.user_id != user_id) {
            return response.status(401).json({ error: 'Operação não permitida' });
        }

        await connection('thankyounotes').where('id', id).delete();

        return response.status(204).send();
    }
}