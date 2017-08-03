define([
    "jquery",

], function($) {

    function HomeHeader() {
        this.mainBox = document.querySelector("#App");
        this.header = document.createElement("h1");
    }

    HomeHeader.prototype.render = function() {
        var vm = this;
        var App = document.querySelector(".App");
        var headerTxt = 'iTunes App Ready';

        App.appendChild(vm.header); 
        vm.header.innerHTML = headerTxt;
    };

    HomeHeader.prototype.init = function() {
        this.render();
    };

    return new HomeHeader();
});
