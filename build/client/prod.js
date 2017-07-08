const WebpackWebClientBaseBuilder = require('./base');
class ClientProdBuilder extends WebpackWebClientBaseBuilder {
  constructor() {
    super();
    this.setCssExtract(true);
    this.setManifest(true);
    this.createBuildConfig(true);
    this.createDefinePlugin({ PROD: true });
  }
}

module.exports = new ClientProdBuilder().create();
