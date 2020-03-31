const connection = require('../database/connection');

module.exports = {
    async indexThankYouNotes(request, response) {
        const user_id = request.headers.authorization;
        const tnotes = await connection('thankyounotes')
            .where('user_id', user_id)
            .select('*');

        return response.json(tnotes);
    },

    async indexBoredNotes(request, response) {
        const user_id = request.headers.authorization;

        const bnotes = await connection('borednotes')
            .where('user_id', user_id)
            .select('*');

        return response.json(bnotes);
    }
}