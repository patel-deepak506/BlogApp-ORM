
exports.up = async(knex)=>{
   await knex.schema.createTable('users',(table)=>{
        table.increments();
        table.string('username',200).notNullable().unique();
        table.string('email',200).notNullable().unique();
        table.string('password',200).notNullable().unique();
    });
  
};

exports.down = async(knex)=>{
  await knex.schema.dropTableIfExists('users')
  
};
