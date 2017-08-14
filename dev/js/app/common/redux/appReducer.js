define([
    'js/lib/Redux/redux.min',
    './modules/app/reducers',
], function(redux, appReducers) {
    var combined = redux.combineReducers({
        app: appReducers.loading
    });

    return combined;
});
