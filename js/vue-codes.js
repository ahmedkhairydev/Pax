/*global $, alert, console, Vue*/
$(function () {
    'use strict';
    
    new Vue({
        el: "#nav",
        data: {
            logo: 'Pax',
            template: 'Template',
            navbar: [
                {text: 'Home', url: '#home', scroll: 'home'},
                {text: 'About Us', url: '#about_us', scroll: 'about_us'},
                {text: 'Our Team', url: '#team', scroll: 'team'},
                {text: 'Portifolio', url: '#portifolio', scroll: 'portifolio'},
                {text: 'contact', url: '#contact', scroll: 'contact'}
            ]
        }
    });

    
});