require.config({
    baseUrl: "./js/app",
    waitSeconds: 10
});

require(["router/RouterMain","home/HomeHeader", "home/homeSearch"], function(RouterMain, HomeHeader, homeSearch) {
    RouterMain.init();
    HomeHeader.init();
    homeSearch.init();
});
