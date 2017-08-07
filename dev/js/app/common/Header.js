/*jshint esversion: 6 */

define([

], function($) {

    class AppHeader {
        constructor() {
            this.mainBox = document.querySelector("#App");
            this.header = document.createElement("h1");
        }

        init(headerTxt) {
            this.displayHeader(headerTxt);
        }

        displayHeader(headerTxt) {
            const vm = this;
            const App = document.querySelector(".App");
            App.appendChild(vm.header);
            vm.header.innerHTML = headerTxt;
        }
    }

    return new AppHeader();

});
