
exports.up = function(knex) {
    return knex.schema
    .createTable('thankyounotes', function (table) {
        table.increments('id');
        table.string('note', 420).notNullable();
        table.date('date').notNullable();
        
        table.integer('user_id').unsigned().notNullable();

        table.foreign('user_id').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('thankyounotes')
};
