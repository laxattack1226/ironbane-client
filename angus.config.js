'use strict';

module.exports = {

    packages: [
        'angular',
        'http://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.js',
        'https://github.com/dmauro/Keypress/archive/2.0.3.tar.gz',
        'underscore',
        'angular-ui-router',
        'hammerjs'
    ],

    port: 9000,

    libIncludes: {
        js: [
            'angular/angular.js',
            'angular-ui-router/release/angular-ui-router.js',

            'Keypress/keypress.js',
            'hammerjs/hammer.min.js',

            // Bug in bower makes us read it as index.js
            // https://github.com/bower/bower/issues/561
            'three/index.js',

            'underscore/underscore.js'
        ],

        tpl: [],

        scss: []
    },

    // In addition to the default task list (core/defaultTasks.js), also execute these
    gruntTasksAdd: [
        'html2js',
        'ngconstant',
        'ngmin',
    ],

    gruntTasksIgnore: ['sass', 'sass_import_compiler'],

    // ngconstant will parse this object and allow you to access them in your app
    constants: {}
};
