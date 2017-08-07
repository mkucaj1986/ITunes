require.config({
    baseUrl: "./js/app",
    waitSeconds: 10
});

require(["router/RouterMain", "common/Navigation", "common/Header", "home/homeSearch"], function(RouterMain, Navigation, AppHeader, homeSearch) {
    Navigation.init();
    AppHeader.init('iTunes App Ready');
    RouterMain.init();
    homeSearch.init();
});
