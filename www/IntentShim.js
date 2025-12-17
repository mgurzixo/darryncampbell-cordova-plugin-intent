var argscheck = require("cordova/argscheck"),
    channel = require("cordova/channel"),
    utils = require("cordova/utils"),
    exec = require("cordova/exec"),
    cordova = require("cordova");

console.warn('[IntentShim] loaded');

/**
 * This represents a thin shim layer over the Android Intent implementation
 * @constructor
 */
function IntentShim() {
    var me = this;
}

IntentShim.prototype.ACTION_SEND = "android.intent.action.SEND";
IntentShim.prototype.ACTION_VIEW = "android.intent.action.VIEW";
IntentShim.prototype.ACTION_INSTALL_PACKAGE = "android.intent.action.INSTALL_PACKAGE";
IntentShim.prototype.ACTION_UNINSTALL_PACKAGE = "android.intent.action.UNINSTALL_PACKAGE";
IntentShim.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
IntentShim.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
IntentShim.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
IntentShim.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";
IntentShim.prototype.ACTION_CALL = "android.intent.action.CALL";
IntentShim.prototype.ACTION_SENDTO = "android.intent.action.SENDTO";
//  StartActivityForResult
IntentShim.prototype.ACTION_GET_CONTENT = "android.intent.action.GET_CONTENT";
IntentShim.prototype.ACTION_PICK = "android.intent.action.PICK";
IntentShim.prototype.RESULT_CANCELED = 0; //  Activity.RESULT_CANCELED
IntentShim.prototype.RESULT_OK = -1; //  Activity.RESULT_OK

IntentShim.prototype.startActivity = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.startActivity] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.startActivity", arguments);
    exec(
        function() {
            console.log('[IntentShim.startActivity] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.startActivity] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "startActivity", [params]
    );
};

IntentShim.prototype.startActivityForResult = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.startActivityForResult] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.startActivityForResult", arguments);
    exec(
        function() {
            console.log('[IntentShim.startActivityForResult] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.startActivityForResult] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "startActivityForResult", [params]
    );
};

IntentShim.prototype.sendBroadcast = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.sendBroadcast] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.sendBroadcast", arguments);
    exec(
        function() {
            console.log('[IntentShim.sendBroadcast] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.sendBroadcast] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "sendBroadcast", [params]
    );
};

IntentShim.prototype.startService = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.startService] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.startService", arguments);
    exec(
        function() {
            console.log('[IntentShim.startService] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.startService] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "startService", [params]
    );
};

IntentShim.prototype.queryIntentActivities = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.queryIntentActivities] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.queryIntentActivities", arguments);
    exec(
        function() {
            // console.log('[IntentShim.queryIntentActivities] successCallback:', arguments);
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            // console.log('[IntentShim.queryIntentActivities] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "queryIntentActivities", [params]
    );
};

IntentShim.prototype.registerBroadcastReceiver = function (params, callback) {
    // console.log('[IntentShim.registerBroadcastReceiver] called with params:', params);
    argscheck.checkArgs("of", "IntentShim.registerBroadcastReceiver", arguments);
    exec(
        function() {
            console.log('[IntentShim.registerBroadcastReceiver] callback');
            if (callback) callback.apply(null, arguments);
        },
        null,
        "IntentShim", "registerBroadcastReceiver", [params]
    );
};

IntentShim.prototype.unregisterBroadcastReceiver = function () {
    // console.log('[IntentShim.unregisterBroadcastReceiver] called');
    argscheck.checkArgs("", "IntentShim.unregisterBroadcastReceiver", arguments);
    exec(null, null, "IntentShim", "unregisterBroadcastReceiver", []);
};

IntentShim.prototype.onIntent = function (callback) {
    // console.log('[IntentShim.onIntent] called');
    argscheck.checkArgs("f", "IntentShim.onIntent", arguments);
    exec(
        function() {
            console.log('[IntentShim.onIntent] callback');
            if (callback) callback.apply(null, arguments);
        },
        null,
        "IntentShim", "onIntent", [callback]
    );
};

IntentShim.prototype.onActivityResult = function (callback) {
    // console.log('[IntentShim.onActivityResult] called');
    argscheck.checkArgs("f", "IntentShim.onActivityResult", arguments);
    exec(
        function() {
            console.log('[IntentShim.onActivityResult] callback');
            if (callback) callback.apply(null, arguments);
        },
        null,
        "IntentShim", "onActivityResult", [callback]
    );
};

IntentShim.prototype.getIntent = function (successCallback, failureCallback) {
    // console.log('[IntentShim.getIntent] called');
    argscheck.checkArgs("ff", "IntentShim.getIntent", arguments);
    exec(
        function() {
            // console.log('[IntentShim.getIntent] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.getIntent] failureCallback:', err);
            if (failureCallback) failureCallback.apply(null, arguments);
        },
        "IntentShim", "getIntent", []
    );
};

IntentShim.prototype.sendResult = function (params, callback) {
    // console.log('[IntentShim.sendResult] called with params:', params);
    argscheck.checkArgs("of", "IntentShim.sendResult", arguments);
    exec(
        function() {
            console.log('[IntentShim.sendResult] callback');
            if (callback) callback.apply(null, arguments);
        },
        null,
        "IntentShim", "sendResult", [params]
    );
};

IntentShim.prototype.realPathFromUri = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.realPathFromUri] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.realPathFromUri", arguments);
    exec(
        function() {
            console.log('[IntentShim.realPathFromUri] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.realPathFromUri] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "realPathFromUri", [params]
    );
};

IntentShim.prototype.extractGpsFromFile = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.extractGpsFromFile] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.extractGpsFromFile", arguments);
    exec(
        function() {
            // console.log('[IntentShim.extractGpsFromFile] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.extractGpsFromFile] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "extractGpsFromFile", [params]
    );
};

IntentShim.prototype.myPathFromUri = function (params, successCallback, errorCallback) {
    // console.log('[IntentShim.myPathFromUri] called with params:', params);
    argscheck.checkArgs("off", "IntentShim.myPathFromUri", arguments);
    exec(
        function() {
            console.log('[IntentShim.myPathFromUri] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        function(err) {
            console.log('[IntentShim.myPathFromUri] errorCallback:', err);
            if (errorCallback) errorCallback.apply(null, arguments);
        },
        "IntentShim", "myPathFromUri", [params]
    );
};

IntentShim.prototype.packageExists = function (packageName, successCallback) {
    // console.log('[IntentShim.packageExists] called with packageName:', packageName);
    argscheck.checkArgs("sf", "IntentShim.packageExists", arguments);
    exec(
        function() {
            console.log('[IntentShim.packageExists] successCallback');
            if (successCallback) successCallback.apply(null, arguments);
        },
        null,
        "IntentShim", "packageExists", [packageName]
    );
};

window.intentShim = new IntentShim();
window.plugins = window.plugins || {};
window.plugins.intentShim = window.intentShim;
