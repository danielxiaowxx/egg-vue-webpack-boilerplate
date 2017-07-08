const path = require('path');
const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../base');
class WebpackWebClientBaseBuilder extends WebpackBaseBuilder(VueWebpack.WebpackClientBuilder) {
  constructor() {
    super();
    this.setManifest(true);
    this.createBuildConfig();
    this.setHtmlEntry('app/web/page/html', {
      template: path.join(this.baseDir, 'app/web/view/layout.html'),
      htmlDir: 'html'
    });
    this.addPack('pack/lib', [path.join(this.baseDir, 'app/web/asset/js/common.js'), path.join(this.baseDir, 'app/web/asset/js/monitor.js')]);
    this.addPack('pack/common', [path.join(this.baseDir, 'app/web/asset/js/common.js')]);
    this.addPack('pack/monitor', [path.join(this.baseDir, 'app/web/asset/js/monitor.js')]);
  }
}
module.exports = WebpackWebClientBaseBuilder;