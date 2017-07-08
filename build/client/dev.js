const WebpackWebClientBaseBuilder = require('./base');
class ClientDevBuilder extends WebpackWebClientBaseBuilder {
  constructor() {
    super();
    this.setDevMode();
    this.setDevTool(false);
    this.setCssExtract(false);
  }
}
module.exports = new ClientDevBuilder().create();