/*global define*/
define([
  'nex',
  'handlebars',
  'text!./homeTemplate.html',
  'js/app/views/layout/layout',
], function(Nex, Handlebars, homeTemplate, Layout) {
  'use strict';

  return Nex.defineComponent('home-page', {
    template: Handlebars.compile(homeTemplate),

    layout: Layout,

    render: function render() {
      this.html(this.template(this));
      return this;
    }
  });
});
