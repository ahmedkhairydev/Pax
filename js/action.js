/*global $, alert, console, window*/
$(function () {
    'use strict';
    
    $(".button-collapse").sideNav();
    $(".rslides").responsiveSlides({
        prevText: "<div class='arrow-circle left valign-wrapper'><span></span></div>",
        nextText: "<div class='arrow-circle right valign-wrapper'><span></span></div>",
        nav: true,
        pager: true
    });
    
    $("ul.rslides_tabs li a").text('');
    
    
    $('ul#nav-mobile li a').click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - $('nav').height()
        }, 1500);
    });
    
    $('ul#mobile-demo li a').click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - $('nav').height()
        }, 1500);
    });
    
    $('button a').click(function(e) {
        e.preventDefault();
    });
    
    
    
    
    var section = $('section'),
        footer = $('footer'),
        header = $('header'),
        h1 = $('#home h1'),
        h3 = $('#home h3'),
        button = $('#home button'),
        frame = $('.video img'),
        iframe = $('.video iframe'),
        tl = new TimelineMax({paused: true}),
        ground = $('.ground'),
        loader = $('#loader'),
        dot = $('.dot'),
        svg = $('svg'),
        tlLoader = new TimelineMax({repeat: 1, onComplete: loadContent});
    
    
    tl
        .set(header, {display: 'block'})
        .set(ground, {zIndex: 0, background: 'inherit'})
        .set(section, {display: 'block'}, '-= 1')
        .set(footer, {display: 'block'}, '-= 1')
        .from(h1, .75, {autoAlpha:0, y: -50, ease:Bounce.easeOut})
        .to(h3, .75, {text:"we are the best and we know it!", ease:Power1.easeOut})
        .from(button, .75, {autoAlpha:0, ease:Power1.easeOut})
        .from(frame, .75, {y: 200, autoAlpha:0, ease:Power1.easeOut})
        .from(iframe, .75, {autoAlpha:0, ease:Power1.easeOut});
        
    
    tlLoader
        .staggerFromTo(dot, .3,
                      {y:0, autoAlpha: 0},
                      {y:20, autoAlpha: 1, ease:Back.easeInOut},
                      0.05)
        .fromTo(loader, 0.3,
               {autoAlpha: 1, scale: 1.3},
               {autoAlpha: 0, scale: 1, ease:Power0.easeNone},
               0.9);
    
    function loadContent(){
        var tlLoaderOut = new TimelineMax({onComplete: contentIn});
        
        tlLoaderOut
            .set(dot, {backgroundColor: '#2b4d66'})
            .to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease:Power0.easeNone})
            .staggerFromTo(dot, .3,
                      {y:0, autoAlpha: 0},
                      {y:20, autoAlpha: 1, ease:Back.easeInOut},
                      0.05, 0)
            .to(loader, 0.3, {y: -150, autoAlpha: 0, ease:Back.easeIn}, '+=0.3');
    }
    
    function contentIn(){
        tl.play();
    }
    
    $.jScrollability([
        {
            'selector': '.how-we-work h1',
            'start': 'self',
            'end': 'parent',
            'fn': function($el,pcnt) {
                $el.css({'margin-top': ((1 - pcnt) * 100) + 'px'});

                tl.from('.how-we-work p', .5, {autoAlpha: pcnt, x: ((1 - pcnt) * 150) + 'px'});
                tl.from('.how-we-work svg', .5, {autoAlpha: pcnt, x: ((1 - pcnt) * -150) + 'px'});
                tl.from('.how-we-work button', .5, {autoAlpha: pcnt, y: ((1 - pcnt) * 100) + 'px'});
            }
        },
        {
            'selector': '.meetOurTeam h1',
            'start': 'self',
            'end': 'parent',
            'fn': function($el,pcnt) {
                $el.css({'margin-top': ((1 - pcnt) * 100) + 'px'});

                tl.from('.meetOurTeam .team div:first-child', .5, {autoAlpha: pcnt, x: ((1 - pcnt) * -150) + 'px'});
                tl.from('.meetOurTeam .team div:last-child', .5, {autoAlpha: pcnt, x: ((1 - pcnt) * 150) + 'px'});
                tl.from('.meetOurTeam .team div:nth-child(2)', .5, {autoAlpha: pcnt, x: ((1 - pcnt) * -50) + 'px'});
                tl.from('.meetOurTeam .team div:nth-child(3)', .5, {autoAlpha: pcnt, x: ((1 - pcnt) * 50) + 'px'});
                tl.from('.meetOurTeam button', .5, {autoAlpha: pcnt, y: ((1 - pcnt) * 100) + 'px'});
            }
        }
    ]);
    
    
    // Scroll Animation
    $(window).scroll(function () {
        
        // Change background attachment
        
        var wScroll = $(this).scrollTop();
        
        // Chance Background-Attachment to initial
        if(wScroll > $('section.creativity').offset().top - $(window).height() + $('section.creativity').height()){
            $('section.creativity').css({'background-attachment': 'initial', 'background-size': 'cover'});
        } else {
            $('section.creativity').css({'background-attachment': 'fixed', 'background-size': 'contain'});
        }
        
        // Change Background-Attachment to fixed and Background-Position to top
        if(wScroll > $('section.creativity').offset().top){
            $('section.creativity').css({'background-attachment': 'fixed', 'background-position-y': 'top', 'background-size': 'contain'});
        } else {
            $('section.creativity').css({'background-position-y': 'bottom'});
        }
        
        // Chance Background-Attachment to initial
        if(wScroll > $('section.map').offset().top - $(window).height() + $('section.map').height()){
            $('section.map').css({'background-attachment': 'initial', 'background-size': 'cover'});
        } else {
            $('section.map').css({'background-attachment': 'fixed', 'background-size': 'contain'});
        }
        
        // Change Background-Attachment to fixed and Background-Position to top
        if(wScroll > $('section.map').offset().top){
            $('section.map').css({'background-attachment': 'fixed', 'background-position-y': 'top', 'background-size': 'contain'});
        } else {
            $('section.map').css({'background-position-y': 'bottom'});
        }
        
        //Append UP Button
        if ($(this).scrollTop() >= '1000') {
            $('.fixed-action-btn a').show().removeClass('scale-out').addClass('scale-in');
        } else {
            $('.fixed-action-btn a').removeClass('scale-in').addClass('scale-out');
        }
        //----------------------------------
        //Scroll To Top
        $('.fixed-action-btn').click(function () {
            $('body, html').stop().animate({scrollTop: $('body, html').offset().top}, 1500);
        });
        //----------------------------------
    });
});