/*jshint esversion: 6 */
define('js/app/common/GetHTML', [], function() {
    class GetPartials {
        constructor() {
            this.initModule = this.initModule;
        }
        initModule(route) {
            const moduleName = route.component + '/' + route.moduleName;
            require([moduleName], function(Module) {
                Module.init();
            });
        }
        fetchHtml(url, route) {
            const vm = this;
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
                    vm.initModule(route);
                }).catch(function(err) {
                    // error handler
                    console.log(err);
                });
        }
    }
    return new GetPartials();
});
