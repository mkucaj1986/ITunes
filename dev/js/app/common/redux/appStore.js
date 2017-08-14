define('js/app/common/redux/appStore', [
    'js/lib/Redux/redux.min',
    './appReducer'
], function(redux, appReducer) {

    let store = redux.createStore(appReducer);
    return store;

});
