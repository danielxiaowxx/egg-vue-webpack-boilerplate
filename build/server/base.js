const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../base');
class WebpackServerBaseBuilder extends WebpackBaseBuilder(VueWebpack.WebpackServerBuilder) {
  constructor() {
    super();
    this.setPrefix('');
    this.setBuildPath('app/view');
  }
}
module.exports = WebpackServerBaseBuilder;