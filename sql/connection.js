const mysql = require('mysql')
const password = require('../config')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.68.38.219',
        user: 'root',
        password: password,
        database: 'Basketball-app'
      })
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;