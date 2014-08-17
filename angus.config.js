'use strict';

module.exports = {

    bower: {
        packages: [
            'angular',
            'http://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.js',
            'https://github.com/dmauro/Keypress/archive/2.0.3.tar.gz',
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

                // Bug in bower makes us read it as index.js
                // https://github.com/bower/bower/issues/561
                'three/index.js',

                'underscore/underscore.js'
            ]
        }
    },

    usesAngularJS: true,

    testRunner: 'none',

    cssCompiler: 'less'
};
