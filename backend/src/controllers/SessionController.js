const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const { email, password } = request.body;

        const user = await connection('users')
        .where('email',email)
        .andWhere('password', password)
        .select('name', 'id')
        .first();

        if(!user){
            return response.status(400).json({error:"Nenhum Usuário encontrado"})
        }

        return response.json(user);
    }
}