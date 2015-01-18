Package.describe({
  name: 'googlesignin',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('googlesignin.js' , 'client');
  api.addFiles('signincallback.js' , 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('googlesignin');
  api.addFiles('googlesignin-tests.js');
});
