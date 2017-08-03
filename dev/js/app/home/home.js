require.config({
    baseUrl: "./js/app",
    paths: {
        jquery: "../lib/jquery",
    },
    waitSeconds: 10
});

require(["home/HomeHeader", "home/homeSearch"], function(HomeHeader, homeSearch) {
    HomeHeader.init();
    homeSearch.init();
});
