const createUserAccount = require('./createUserAccount')
const createDatabase = require('./createDatabase')
const createUserTable = require('./createUserTable')
const userLogin = require('./userLogin')

// Re-export all modules in a single object
// this help mey code look organized

module.exports = {
    createUserAccount,
    createDatabase,
    createUserTable,
    userLogin,
};
