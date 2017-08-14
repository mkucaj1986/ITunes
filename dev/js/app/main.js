/*jshint esversion: 6 */
require.config({
    baseUrl: "",
    waitSeconds: 10
});

require(['js/app/common/redux/index', 'js/lib/domReady', "js/app/config/RouterConfig", "js/app/router/RouterMain", "js/app/common/Navigation"], function(redux, domReady, RouterConfig, RouterMain, Navigation) {
    const config = {
        routes: RouterConfig.routes,
        components: RouterConfig.componentsPath
    };

    Navigation.init();
    RouterMain.init(config);
    debugger;   
    domReady(function() {
        console.log('dom are ready');
    });
});
