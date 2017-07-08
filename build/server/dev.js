const WebpackServerBaseBuilder = require('./base');
class ServerDevBuilder extends WebpackServerBaseBuilder {
  constructor() {
    super();
    this.setDevMode();
  }
}

module.exports = new ServerDevBuilder().create();
