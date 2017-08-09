/*jshint esversion: 6 */

define('common/Navigation', [
    'config/Router'
], function(Router) {

    class Navigation {
        constructor() {
            this.ulEl = document.createElement("ul");

            this.navItems = Router.router;
        }

        init() {
            this.navItems.forEach(link => {
                this.buildNav(link.name);
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
            href.value = linkName + '.html';
            path.value = linkName;
            routerLink.setAttributeNode(path);
            routerLink.setAttributeNode(href);
            routerLink.setAttributeNode(iTuneRouter);
        }
    }

    return new Navigation();

});
