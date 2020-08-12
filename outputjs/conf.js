"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    allScriptsTimeout: 25000,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        //isVerbose: false,
        showColors: true,
        //includeStackTrace: false,
        getPageTimeout: 15000,
        defaultTimeoutInterval: 250000,
        print: function () { }
    },
    onPrepare: () => {
        // Use `jasmine-spec-reporter` as the spec result reporter
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({ spec: { displayStacktrace: true } }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './Reports',
            screenshotsFolder: './screenshots',
            takeScreenshotsOnlyOnFailures: true
        }));
    },
    params: {
        baseUrl: 'http://rvmonitoringuat.walkingtree.tech/'
    },
    specs: ['Specs/**/login.spec.js',
        'Specs/**/assets.spec.js'
        // 'Specs/**/kitdetails.spec.js',
        // 'Specs/**/logout.spec.js'
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
