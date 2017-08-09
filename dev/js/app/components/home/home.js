require.config({
    baseUrl: "",
    waitSeconds: 10
});

require(['js/lib/domReady', "js/app/router/RouterMain", "js/app/common/Navigation", "js/app/common/GetHTML"], function(domReady, RouterMain, Navigation, GetHTML) {
	Navigation.init();
    domReady(function() {
        console.log('dom are ready');
        RouterMain.init();
    });

    console.log('init app');
});
