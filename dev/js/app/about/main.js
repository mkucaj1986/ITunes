require.config({
    baseUrl: "./js/app",
    waitSeconds: 10
});

require(["router/RouterMain", "common/Navigation", "common/Header"], function(RouterMain, Navigation, AppHeader) {
    Navigation.init();
    AppHeader.init('About Page');
    RouterMain.init();
    homeSearch.init();
});
