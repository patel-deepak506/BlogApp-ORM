const { Model } = require('objection');
const knex = require('../config/config');
Model.knex(knex);
 
// it is connect objection to database by orm
class Users extends Model {
    static get tableName() {
        return 'blogs';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title','description'],
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                description: { type: 'string' },
                author: { type: 'string' },
                date: { type: 'date' }
            }
        }
    } 
}
module.exports = Users;