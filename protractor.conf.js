// @AngularClass

'use strict';

exports.config = {
    baseUrl: 'http://localhost:8080/',

    specs: [
        'test/bootstrap/**/*.js',
        'test/pages/**/*.e2e.js',
        'test/stories/**/*.e2e.js'
    ],
    exclude: [
        // 'test/pages/dataset/account/login/**/*.e2e.js',
        'test/pages/dataset/account/logout/**/*.e2e.js',
        'test/pages/dataset/order/**/*.e2e.js',
        'test/pages/dataset/sidebar/**/*.e2e.js',
        //'test/pages/dataset/sidebar/**/*.e2e.js',
        //'test/pages/invoicePayment/**/*.e2e.js',
        'test/pages/oSearchFilter/**/*.e2e.js',
        //'test/pages/purchaseHistory/**/*.e2e.js',
        //'test/pages/revieworder/**/*.e2e.js',
        //'test/pages/viewBasket/**/*.e2e.js',
        'test/pages/support/**/*.e2e.js',
    ],

    framework: 'jasmine',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000,
        print: function() {}
    },

    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        var SpecReporter = require('jasmine-spec-reporter');

        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'summary',
            //displayStacktrace: 'none', // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displayFailuresSummary: true, // display summary of all failures after execution
            displayPendingSummary: true, // display summary of all pending specs after execution
            displaySuccessfulSpec: true, // display each successful spec
            displayFailedSpec: true, // display each failed spec
            displayPendingSpec: false, // display each pending spec
            displaySpecDuration: false, // display each spec duration
            displaySuiteNumber: false, // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }))


        var reporters = require('jasmine-reporters');
        var junitReporter = new reporters.JUnitXmlReporter({
            savePath: 'test-results',
            filePrefix: 'e2e-test-result',
            consolidateAll: true,
            modifySuiteName: function(generatedSuiteName, suite) {
                // this will produce distinct suite names for each capability,
                // e.g. 'firefox.login tests' and 'chrome.login tests'
                return 'e2e ' + generatedSuiteName;
            }
        });
        jasmine.getEnv().addReporter(junitReporter);
    }
}