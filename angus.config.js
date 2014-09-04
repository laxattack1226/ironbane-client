'use strict';

module.exports = {

    bower: {
        packages: [
            'angular',
            'threejs',
            'Keypress',
            'underscore',
            'angular-ui-router',
            'hammerjs'
        ],

        filesNeeded: {
            js: [
                'angular/angular.js',
                'angular-ui-router/release/angular-ui-router.js',
                'Keypress/keypress.js',
                'hammerjs/hammer.min.js',
                'threejs/build/three.js',
                'underscore/underscore.js'
            ]
        }
    },

    usesAngularJS: true,

    testRunner: 'none',

    cssCompiler: 'less'
};
