const EasyWebpack = require('easywebpack');
const clientConfig = require('./client');
const serverConfig = require('./server');
const config = [clientConfig, serverConfig];
if (process.env.NODE_SERVER) {
  EasyWebpack.server(config);
} else {
  EasyWebpack.build(config);
}
