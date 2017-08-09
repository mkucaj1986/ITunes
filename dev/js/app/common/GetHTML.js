/*jshint esversion: 6 */
define('js/app/common/GetHTML', [], function() {
    class GetPartials {
        constructor() {
            this.html = '';
        }
        initModule(route) {
            const moduleName = route.component + '/' + route.moduleName;
            require([moduleName], function(Module) {
                Module.init();
            });
        }
        fetchHtml(url) {
            const myHeaders = new Headers();
            const myInit = {
                method: 'GET',
                headers: myHeaders,
            };
            myHeaders.set("Content-Type", "text/html");
            const myRequest = new Request(url, myInit);
            fetch(myRequest)
                .then(function(response) {
                    return response.text();
                })
                .then(function(html) {
                    document.querySelector('#App').innerHTML = html;
                }).catch(function(err) {
                    // error handler
                    console.log(err);
                });
        }
    }
    return new GetPartials();
});
