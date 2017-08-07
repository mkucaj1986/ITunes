/*jshint esversion: 6 */

define([

], function($) {

    class HomeHeader {
        constructor() {
            this.mainBox = document.querySelector("#App");
            this.header = document.createElement("h1");
        }

        init() {
            var vm = this;
            var App = document.querySelector(".App");
            var headerTxt = 'iTunes App Ready';

            App.appendChild(vm.header); 
            vm.header.innerHTML = headerTxt;
        }
    }

    return new HomeHeader();

});
