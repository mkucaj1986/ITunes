/*jshint esversion: 6 */
define('js/app/components/home/searchParams', [], function() {
    class homePage {
        constructor() {
        }
        buildUrl(songLimit, term) {
            if ('URLSearchParams' in window) {
                let url = '';
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set("limit", songLimit);
                searchParams.set("term", term);
                url = '/?' + searchParams.toString();
                window.history.pushState(window.location.pathname, window.location.pathname, url);
            }
        }
    }
    return new homePage();
});
