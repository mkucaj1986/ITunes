/*jshint esversion: 6 */

define([

], function($) {

    class BuildHeader {
        constructor() {
            this.mainBox = document.querySelector("#App");
            this.header = document.createElement("h1");
            this.ulEl = document.createElement("ul");

            this.navItems = [
                'Home',
                'About',
                'Contact'
            ];
        }

        init() {
            this.displayHeader('iTunes App Ready');
            this.navItems.forEach(link => {
                this.buildNav(link);
            });
        }

        buildNav(linkName) {
            const vm = this;
            const Nav = document.querySelector("#Nav");
            const listEl = document.createElement("li");
            const routerLink = document.createElement("Router");
            const path = document.createAttribute("path");

            Nav.appendChild(vm.ulEl);
            const uLElement = document.querySelector("#Nav ul");
            uLElement.appendChild(listEl);
            if (listEl.classList.length === 0) {
                listEl.classList.add(linkName);
            }
            const liElement = document.querySelector('.' + linkName);
            liElement.appendChild(routerLink);
            routerLink.innerHTML = linkName;
            path.value = linkName;
            routerLink.setAttributeNode(path);
        }

        displayHeader(headerTxt) {
            const vm = this;
            const App = document.querySelector(".App");
            App.appendChild(vm.header);
            vm.header.innerHTML = headerTxt;
        }
    }

    return new BuildHeader();

});
