const WebpackServerBaseBuilder = require('./base');
class ServerProdBuilder extends WebpackServerBaseBuilder {
  constructor() {
    super();
    this.createDefinePlugin({ PROD: true });
  }
}

module.exports = new ServerProdBuilder().create();