import { Sequelize } from 'sequelize';

const db = new Sequelize( 'curso_node', 'testing_curso_node', '123456',  {
	host: 'localhost',
	dialect: 'mysql',
	// logging: false
});

export default db;