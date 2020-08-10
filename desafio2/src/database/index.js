import Sequelize from "sequelize";
import databaseConfig from "../config/database";
// import User from "../app/models/User";

// const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // models.map(model => modelinit(this.connection));
  }
}
export default new Database();
