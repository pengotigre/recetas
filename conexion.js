const mysql = require('mysql');

const config = {
	host: 'wm1704.com',
	user: 'c21_wm1704',
	password: 'R91xzHA6zYuaq4t',
	database: 'c21_wm1704'
};

const pool = mysql.createPool(config);

module.exports = pool;
