Package.describe({
  summary: "Make a use of your favicon with badges, images or videos",
  version: "0.3.5",
  git: "https://github.com/ovcharik/meteor-favico"
});

Package.on_use(function (api) {
  api.versionsFrom && api.versionsFrom("METEOR@0.9.0");

  api.add_files('vendor/favico.js', "client");
  api.add_files('main.js', "client");

  if (api.export) {
    api.export('Favico', "client");
  }
});
