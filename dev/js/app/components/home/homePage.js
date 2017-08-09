/*jshint esversion: 6 */

define('js/app/components/home/homePage', [], function() {

    class homePage {
        constructor() {
        }

        init() {
        	console.log('ok');
        	const link = document.querySelector('.search-btn');
        	link.addEventListener('click', function(e) {
        	    e.preventDefault();
        	    console.log('click');
        	});

        }

    }

    return new homePage();


});
