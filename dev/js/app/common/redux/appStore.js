define('js/app/common/redux/appStore', [
    'js/lib/Redux/redux.min',
    './appReducer',
    'js/lib/Redux/redux-devtools-extension/developmentOnly',
], function(redux, appReducer, composeWithDevTools) {
	const composeEnhancers = composeWithDevTools({ actionCreators });
    let store = redux.createStore(appReducer);
    return store;

});
