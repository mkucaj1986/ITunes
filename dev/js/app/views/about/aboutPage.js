/*global define*/
define([
  'nex',
  'handlebars',
  'text!./aboutTemplate.html',
  'js/app/views/layout/layout'
], function(Nex, Handlebars, examplesTemplate, Layout) {
  'use strict';

  return Nex.defineComponent('examples-page', {
    template: Handlebars.compile(examplesTemplate),
    
    layout: Layout,

    render: function render() {
      this.html(this.template(this));
      return this;
    }
  });
});
