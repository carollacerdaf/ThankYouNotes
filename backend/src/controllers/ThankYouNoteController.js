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
}