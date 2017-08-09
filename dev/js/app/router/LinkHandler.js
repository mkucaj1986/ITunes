/*jshint esversion: 6 */

define('router/LinkHandler', [
    'common/Navigation'
], function(Navigation) {

    class LinkHandler {
        constructor() {
            this.link = 'link';
            this.navigatePath = this.navigatePath;
        }

        findLinks() {
            var vm = this;
            const links = document.querySelectorAll('[iTune-router]');

            if (links.length) {
                links.forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const location = e.target.getAttribute("path");
                        vm.navigatePath(location);
                    });
                });
            }
        }

        navigatePath(location) {
            const xhr = new XMLHttpRequest();
            const url = '/views/' + location + '.html';
            if (window.history.replaceState) {
                //prevents browser from storing history with each change:
                if (Navigation.navItems[0].name === location) {
                    window.history.pushState({}, location, '/');
                } else {
                    window.history.pushState({}, location, location);
                }
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    //do something with xhr.responseText
                    document.querySelector('#App').innerHTML = xhr.response;
                }
            };
            xhr.open('GET', url, false);
            xhr.setRequestHeader('Content-Only', 1);
            xhr.send();
        }
    }

    return new LinkHandler();


});
