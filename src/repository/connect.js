import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
  host: process.env.mysql_host,
  user: process.env.mysql_user,
  password: process.env.mysql_pass,
  database: process.env.mysql_db,
  typeCast: function (field, next) {

    if (field.type === 'TINY' && field.length === 1) {
      return (field.string() === '1');
    }
    else if (field.type.includes('DECIMAL')) {
      return Number(field.string());
    }
    else {
      return next();
    }

  }
})

console.log('acesso liberado no ' + process.env.mysql_db)
export default con