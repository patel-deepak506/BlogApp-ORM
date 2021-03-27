const { Model } = require('objection');
const knex = require('../config/config');
Model.knex(knex);
 
// it is connect objection to database by orm
class Users extends Model {
    static get tableName() {
        return 'users';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username','email',"password"],
            properties: {
                id: { type: 'integer' },
                username: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
            }
        }
    } 
}
module.exports = Users;