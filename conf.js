exports.config = {
    directConnect: true,
      capabilities: {
      'browserName': 'chrome'
    },
      framework: 'jasmine',
      specs: ['whatsapp.js'],
      jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };