/**
 * Created by kanglewang on 17/3/22.
 */
require.config({
    baseUrl: 'js',
    // waitSeconds: 1,
    paths: {
        angular: "lib/angular.min"
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require(['app'], function(app){
    angular.bootstrap(document, ['app']);
});

