/*jshint esversion: 6 */

define('js/app/router/LinkHandler', [
    'js/app/common/Navigation',
    'js/app/common/GetHTML',
    'js/app/config/RouterConfig'
], function(Navigation, GetPartials, config) {

    class LinkHandler {
        constructor() {
            this.link = 'link';
            this.navigatePath = this.navigatePath;
        }

        findLinks() {
            const vm = this;
            const links = document.querySelectorAll('[iTune-router]');

            if (links.length) {
                links.forEach(link => {
                    link.addEventListener('click', function(e) {
                        const location = e.target.getAttribute("path");
                        vm.navigatePath(location, config);
                        e.preventDefault();
                    });
                });
            }
        }

        navigatePath(location, config) {
            const xhr = new XMLHttpRequest();
            const url = config.componentsPath + '/' + location + '/' + location + '.html';

            if (window.history.replaceState) {
                //prevents browser from storing history with each change:
                if (Navigation.navItems[0].name === location) {
                    window.history.pushState({}, location, '/');
                } else {
                    window.history.pushState({}, location, '#/' + location);
                }
            }

            GetPartials.fetchHtml(url);
        }
    }

    return new LinkHandler();


});
