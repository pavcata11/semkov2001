const sql = require('mssql')

const config = {
  server: 'mssql-90045-0.cloudclusters.net,17553',
  database: 'SemkovLtd',
  user: 'pavel',
  password: '6PINIer724++',
  options: {
    encrypt: false // ако използвате SSL, задайте стойността на това свойство на true
  }
}

async function connect() {
  try {
    await sql.connect(config)
    console.log('Connected to MSSQL')
  } catch (error) {
    console.log('Error:', error.message)
  }
}

module.exports = { sql, connect }

//Data Source=mssql-90045-0.cloudclusters.net,17553; Initial Catalog=SemkovLtd;User ID=pavel;Password=6PINIer724++";