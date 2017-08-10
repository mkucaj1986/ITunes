/*jshint esversion: 6 */

define('js/app/common/Navigation', [
    'js/app/config/RouterConfig'
], function(RouterConfig) {

    class Navigation {
        constructor() {
            this.ulEl = document.createElement("ul");
            this.navItems = RouterConfig.routes;
        }

        init() {
            this.navItems.forEach(link => {
                this.buildNav(link.name, link.path);
            });
        }

        buildNav(linkName, pathName) {
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
            href.value = linkName + '.html';
            path.value = pathName;
            routerLink.setAttributeNode(path);
            routerLink.setAttributeNode(href);
            routerLink.setAttributeNode(iTuneRouter);
        }
    }

    return new Navigation();

});
