require.config({
    baseUrl: "./js/app",
    waitSeconds: 10
});

require(["router/RouterMain", "common/Navigation"], function(RouterMain, Navigation) {
    Navigation.init();
    RouterMain.init();
});
