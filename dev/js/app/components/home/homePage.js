/*jshint esversion: 6 */

define('js/app/components/home/homePage', [], function() {

    class homePage {
        constructor() {
            this.search = this.search;
        }

        init() {
        	const link = document.querySelector('.search-btn');
            const vm = this;
        	link.addEventListener('click', function(e) {
        	    e.preventDefault();
                vm.search();
        	});

        }
        search(){
            const searchInput = document.querySelector('.search-input');
            const value = searchInput.value;
            console.log(value);
        }
    }

    return new homePage();


});
