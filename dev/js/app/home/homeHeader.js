/*jshint esversion: 6 */

define([

], function($) {

    class HomeHeader {
        constructor() {
            this.mainBox = document.querySelector("#App");
            this.header = document.createElement("h1");
            this.routerLink = document.createElement("Router");
            this.ulEl = document.createElement("ul");
            this.listEl = document.createElement("li");
        }

        init() {
            this.displayHeader();
            this.buildNav('Home');
        }

        buildNav(linkName) {
            const vm = this;
            const Nav = document.querySelector("#Nav");

            vm.listEl.classList.add(linkName);
            Nav.appendChild(vm.ulEl);
            const uLElement = document.querySelector("#Nav ul");
            uLElement.appendChild(vm.listEl);
            const liElement = document.querySelector('.' + linkName);
            liElement.appendChild(vm.routerLink);
            vm.routerLink.innerHTML = linkName;
        }

        displayHeader() {
            const vm = this;
            const App = document.querySelector(".App");
            
            const headerTxt = 'iTunes App Ready';
            App.appendChild(vm.header);
            vm.header.innerHTML = headerTxt;
        }
    }

    return new HomeHeader();

});
