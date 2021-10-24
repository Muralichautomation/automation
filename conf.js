// An example configuration file.
require('babel-register')({
  presets:[ 'es2015' ]
});
exports.config = {
  directConnect: true,
  

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    shardTestFiles: true,
    maxInstances: 1,
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['specs/redBusSpec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  }
};
