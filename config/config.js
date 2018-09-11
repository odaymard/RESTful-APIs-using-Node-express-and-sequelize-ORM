var dotenv = require('dotenv');
dotenv.load();

module.exports = {
  development: { 
    use_env_variable:'DATABASE_URL_DEV',
    dialect:'mysql'
  },
  test: {
    use_env_variable:'DATABASE_URL_TEST',  
    dialect:'mysql'
  },
  production: {
    use_env_variable:'DATABASE_URL',
    dialect:'mysql'
  }
};


