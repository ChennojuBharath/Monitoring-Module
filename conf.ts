import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config: Config = {
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
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './Reports',
            screenshotsFolder: './screenshots',
            takeScreenshotsOnlyOnFailures: true
        }))
    },
    params: {
        baseUrl: 'http://rvmonitoringuat.walkingtree.tech/'

    },
    specs: ['Specs/**/login.spec.js',
        'Specs/**/assets.spec.js',
        'Specs/**/Carddetails.spec.js',
        'Specs/**/aids3d.spec.js',
        'Specs/**/ladder.spec.js',
        'Specs/**/others.spec.js',
        'Specs/**/logout.spec.js'
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub'
}