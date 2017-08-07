/*jshint esversion: 6 */

define('router/LinkHandler', function() {

    class LinkHandler {
        constructor() {
            this.link = 'link';
            this.navigatePath = this.navigatePath;
        }

        findLinks() {
            var vm = this;
            const links = document.querySelectorAll('[iTune-router]');

            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const location = e.target.getAttribute("path");
                    vm.navigatePath(location);
                });
            });
            console.log(links);
        }

        navigatePath(location) {
            const _hash = '#';
            return window.location.href = '/'
                .replace(/#$/, '')
                .replace(new RegExp(this._hash + '.*$'), '') + location + '.html';
        }
    }

    return new LinkHandler();


});
