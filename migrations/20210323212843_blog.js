
exports.up = async(knex)=>{
    await knex.schema.createTable('blogs',(table)=>{
        table.increments();
        table.string('title',100);
        table.text('description');
        table.string('author');
        table.date('date');
        table.bigInteger('user_id').notNullable().references('id').inTable('users');
    });
  
};

exports.down =async (knex)=>{
    await knex.schema.dropTable('blogs')
  
};