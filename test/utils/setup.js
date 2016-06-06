var jsdom = require('jsdom');
var jquery = require('jquery');

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
var win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;
global.jQuery = global.$ = jquery;
// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);

function propagateToGlobal (window) {
    for (var key in window) {
        if (!window.hasOwnProperty(key)) continue;
        if (key in global) continue;

        global[key] = window[key]
    }
}