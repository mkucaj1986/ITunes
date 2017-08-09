require.config({
    baseUrl: "",
    waitSeconds: 10
});

require(["js/app/router/RouterMain", "js/app/common/Navigation", "js/app/common/GetHTML"], function(RouterMain, Navigation, GetHTML) {
    Navigation.init();
    RouterMain.init();
});
