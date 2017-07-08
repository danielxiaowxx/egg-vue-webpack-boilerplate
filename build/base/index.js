const path = require('path');
const baseDir = path.join(__dirname, '../../');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor() {
    super(baseDir);
    this.setEntry('app/web/page', ['app/web/page/html']);
    this.setBuildPath('public');
    this.setPublicPath('/public/');
    this.setCommonsChunk('vendor');
    this.addEntry('vendor', ['vue']);
    this.setAlias('asset', 'app/web/asset', true);
    this.setAlias('app', 'app/web/framework/vue/app', true);
    this.setAlias('component', 'app/web/component', true);
    this.setAlias('framework', 'app/web/framework', true);
    this.setAlias('store', 'app/web/store', true);
  }
};
module.exports = WebpackBaseBuilder;