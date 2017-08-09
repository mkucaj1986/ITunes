/*jshint esversion: 6 */
require.config({
    baseUrl: "",
    waitSeconds: 10
});

require(['js/lib/domReady', "js/app/config/RouterConfig" , "js/app/router/RouterMain", "js/app/common/Navigation", "js/app/common/GetHTML"], function(domReady, RouterConfig, RouterMain, Navigation, GetHTML) {
	const config = {
		routes: RouterConfig.routes,
		components: RouterConfig.componentsPath
	};
	
	Navigation.init();
	RouterMain.init(config);
    domReady(function() {
        console.log('dom are ready');
    });

    console.log('init app');
});
