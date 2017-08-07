/*jshint esversion: 6 */

define([

], function($) {

    class homeSearch {
        constructor() {
            this.searchWrapper = document.createElement("div");
            this.searchBox = document.createElement("input");
        }

        init() {
            var vm = this;
            var App = document.querySelector(".App");

            App.appendChild(vm.searchWrapper); 
            vm.searchWrapper.className += "search-box-wrapp";
            vm.searchBox.placeholder = "Type to find iTune..";
            vm.searchWrapper.appendChild(vm.searchBox); 
        }
    }

    return new homeSearch();
});
