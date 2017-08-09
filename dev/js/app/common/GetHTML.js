/*jshint esversion: 6 */

define('js/app/common/GetHTML', [], function() {

    class GetPartials {
        constructor() {
            this.html = '';
        }

        fetchHtml(url) {
            var myHeaders = new Headers();
            var myInit = {
                method: 'GET',
                headers: myHeaders,
            };
            myHeaders.set("Content-Type", "text/html");

            var myRequest = new Request(url, myInit);

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
