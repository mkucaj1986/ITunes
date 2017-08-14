define('js/app/common/redux/index', [
    './appStore',
    './modules/app/index'
], function(appStore, app) {

    var state = {
        store: appStore,
        app: app
    };

    return state;
});
