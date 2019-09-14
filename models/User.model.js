// const Sequelize = require('sequelize');

// var User = {
//     name: 'user',
//     constructor: function() {
//         console.log('New user model created!!');
//     },
//     options: {
//         id: {
//             type: Sequelize.BIGINT,
//             validate: {
//                 min: 1,
//             },
//             field: 'user_id'
//         },
//         user_name: {
//             type: Sequelize.STRING,
//             validate: {
//                 is: ['[A-Za-z]', 'i']
//             },
//             field: 'user_name'
//         },
//         email: {
//             type: Sequelize.STRING,
//             validate: {
//                 is: ['[A-Za-z]', 'i']
//             },
//             field: 'email'
//         },
//         password: {
//             type: Sequelize.STRING,
//             validate: {
//                 is: ['[A-Za-z]', 'i']
//             },
//             field: 'password'
//         },

//     }
// }

// const Repository = require('../database/repository');
// Repository.registerModel(User);

const Model = require('./Model');

class UserModel extends Model {
    getInstance() {
        return UserModel.instance;
    }

    setInstance(instance) {
        UserModel.instance = instance;
    }
}

class User2Model extends Model {

}

console.log(new UserModel({ name: 'usermodel' }))
console.log(new User2Model({ name: 'user2model' }))