define([
    "jquery",

], function($) {

    function homeSearch() {
        this.searchWrapper = document.createElement("div");
        this.searchBox = document.createElement("input");
    }

    homeSearch.prototype.render = function() {
        var vm = this;
        var App = document.querySelector(".App");
        
        App.appendChild(vm.searchWrapper); 
        vm.searchWrapper.className += "search-box-wrapp";
        vm.searchBox.placeholder = "Type to find iTune..";
        vm.searchWrapper.appendChild(vm.searchBox); 
    };

    homeSearch.prototype.init = function() {
        this.render();
    };

    return new homeSearch();
});
