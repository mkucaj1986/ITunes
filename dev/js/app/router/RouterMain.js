/*jshint esversion: 6 */

define([

], function($) {

    class RouterMain {
        constructor() {
            this.router = 'router Init';
        }

        init() {
            var vm = this;
            console.log(vm.router);
        }
    }

    return new RouterMain();

});
