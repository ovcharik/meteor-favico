Package.describe({
  summary: "Make a use of your favicon with badges, images or videos",
  version: "0.3.5",
  git: "https://github.com/ovcharik/meteor-favico"
});

Package.on_use(function (api) {
  api.add_files('vendor/favico.js', "client");
  api.add_files('export.js', "client");

  if (api.export) {
    api.export('Favico', "client");
  }
});

Package.on_test(function (api) {
  api.use(['ovcharik:favico', 'underscore', 'tinytest', 'test-helpers'], ['client']);
  api.add_files(['favico-tests.js'], ['client']);
});
