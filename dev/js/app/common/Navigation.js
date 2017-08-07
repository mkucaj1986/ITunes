/*jshint esversion: 6 */

define([

], function() {

    class Navigation {
        constructor() {
            this.ulEl = document.createElement("ul");

            this.navItems = [
                'home',
                'about',
                'contact'
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
            const routerLink = document.createElement("a");
            const path = document.createAttribute("path");
            const href = document.createAttribute("href");
            const iTuneRouter = document.createAttribute("iTune-router");

            Nav.appendChild(vm.ulEl);
            const uLElement = document.querySelector("#Nav ul");
            uLElement.appendChild(listEl);
            if (listEl.classList.length === 0) {
                listEl.classList.add(linkName);
            }
            const liElement = document.querySelector('.' + linkName);
            liElement.appendChild(routerLink);
            routerLink.innerHTML = linkName;

            if (linkName === 'home') {
                href.value = 'index.html';
                path.value = 'index';
            } else {
                href.value = linkName + '.html';
                path.value = linkName;
            }
            routerLink.setAttributeNode(path);
            routerLink.setAttributeNode(href);
            routerLink.setAttributeNode(iTuneRouter);
        }
    }

    return new Navigation();

});
