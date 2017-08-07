/*jshint esversion: 6 */

define([

], function() {

    class Navigation {
        constructor() {
            this.ulEl = document.createElement("ul");

            this.navItems = [
                'Home',
                'About',
                'Contact'
            ];
        }

        init() {
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
    }

    return new Navigation();

});
