// ./test/helpers/setup.js

// Setup browser environment
require('browser-env')();
const jquery = require('jquery');
const LocalStorage = require('node-localstorage').LocalStorage;

const localStorage = new LocalStorage('./lapp');
window.localStorage = localStorage;
global.localStorage = localStorage;

window.jQuery = jquery;
global.jQuery = jquery;

const hooks = require('require-extension-hooks');
const Vue = require('vue');

// Setup Vue.js to remove production tip
Vue.config.productionTip = false;

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push();
