requirejs.config({
    baseUrl: "/example/jsui/bower_components",
    waitSeconds: 180,
    paths: {
        'jquery': 'jquery/jquery.min',
        'angular': 'angular/angular.min'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular'
        }
    }
});

//'angular-ui': 'lib/angular-ui',
//'angular-sortable': 'lib/sortable',
//'angular-grid': 'lib/angular-grid'
