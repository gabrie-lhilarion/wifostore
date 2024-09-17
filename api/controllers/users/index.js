const createUserAccount = require('./createUserAccount')
const createDatabase = require('../database/createDatabase')
const createUserTable = require('./createUserTable')
const userLogin = require('./userLogin')

// Re-export all modules in a single object
// this makes my code look organized

module.exports = {
    createUserAccount,
    createDatabase,
    createUserTable,
    userLogin,
};
