$(document).ready(function($) {
	"use strict";
	
	var windowWidth = window.innerWidth;
	
	menuMobile();
	menuMobileCheck();
	matchCol();
	
	/*-- SLIDER --*/
	var getSlider = $(".bxslider").bxSlider({
		mode: "fade",
		adaptiveHeight: true,
		captions: false,
		pager: true,
		controls: false,
		auto: true,
		autoControls: true,
		prevText:"",
		nextText:"",
		onSlideAfter: function() {
			$(".bx-start").trigger("click");
		}
	});
	/*-- SLIDER END --*/
	
	/*-- WORKS CAROUSEL --*/
	var owl1 = $("#owl-works");
	owl1.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : false,
	  navigation : true,
	  navigationText: false
	});
	/*-- WORKS CAROUSEL END --*/
	
	/*-- CLIENTS CAROUSEL --*/
	var owl2 = $("#owl-clients");
	owl2.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false,
	  navigationText: false,
	  autoHeight : true
	});
	/*-- CLIENTS CAROUSEL END --*/
	
	/*-- CLIENTS CAROUSEL BIG --*/
	var owl2big = $("#owl-clients-big");
	owl2big.owlCarousel({
	  items : 4,
	  itemsDesktop : [1400,4],
	  itemsDesktopSmall : [1100,4],
	  itemsTablet: [600,2],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false,
	  navigationText: false,
	  autoHeight : true
	});
	/*-- CLIENTS CAROUSEL BIG END --*/
	
	/*-- TESTIMONIALS CAROUSEL --*/
	var owl3 = $("#owl-testimonials");
	owl3.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false,
	  navigationText: false,
	  autoPlay: true,
	  autoHeight : false
	});
	/*-- TESTIMONIALS CAROUSEL END --*/
	
	/*-- BLOG CAROUSEL --*/
	var owl4 = $("#owl-blog");
	owl4.owlCarousel({
	  items : 3,
	  itemsDesktop : [1400,3],
	  itemsDesktopSmall : [1100,2],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : false,
	  navigation : true,
	  navigationText: false
	});
	/*-- BLOG CAROUSEL END --*/
	
	/*-- TEAM CAROUSEL --*/
	var owl5 = $("#owl-team");
	owl5.owlCarousel({
	  items : 4,
	  itemsDesktop : [1400,4],
	  itemsDesktopSmall : [1100,3],
	  itemsTablet: [600,2],
	  itemsMobile : [400,1],
	  pagination : false,
	  navigation : true,
	  navigationText: false
	});
	/*-- TEAM CAROUSEL END --*/
	
	/*-- BLOG GALLERY CAROUSEL --*/
	var owl6 = $("#owl-blog-gallery");
	owl6.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false,
	  navigationText: false,
	  autoPlay: true
	});
	/*-- BLOG GALLERY CAROUSEL END --*/
	
	/*-- GALLERY CAROUSEL --*/
	var owl7 = $("#owl-gallery");
	owl7.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : false,
	  navigation : false,
	  navigationText: false,
	  autoPlay: true
	});
	/*-- GALLERY CAROUSEL END --*/
	
	/*-- TEAM HALF --*/
	$(".team-half-detail div:first, .team-half-list .team-member:first").addClass("active");
	
	$(".team-half-list .team-member a").click(function(e){
		e.preventDefault();
		$(".team-half-list .team-member, .team-half-detail .active").removeClass("active");
		$(this).parent(".team-member").addClass("active");
		var currentMember = $(this).attr("href");
		$(currentMember).addClass("active animated fadeIn");
		
		if( windowWidth < 991 ) {
			$("html,body").animate({scrollTop: $(".team-half").offset().top}, 800);
		}
	});
	/*-- TEAM HALF END --*/
	
	/*-- MASONRY --*/
	var getMasonry = $('.masonry-list');
	getMasonry.imagesLoaded(function () {
		getMasonry.masonry({
			itemSelector: '.masonry-item',
			columnWidth: '.grid-sizer',
			isAnimated: true
		});
	});
	/*-- MASONRY END --*/
	
	/*-- FIT VIDEO --*/
	$(".video-full").fitVids();
	/*-- FIT VIDEO END --*/
	
	/*-- PRETTY PHOTO --*/
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
	/*-- PRETTY PHOTO END --*/
	
	/*-- COUNT TO --*/
	$(".countTo").countTo();
	/*-- COUNT TO END --*/
	
	/*-- BACK TOP --*/
	$(".site-back-top").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop: 0}, 800);
		return false;
	});
	/*-- BACK TOP END --*/
	
	/*-- SCROLL COMMENT FORM --*/
	$(".leave-new").click(function(e){
		e.preventDefault();
		var element = $(".comment-form").offset();
		$("html, body").animate({scrollTop: element.top}, 800);
		return false;
	});
	/*-- SCROLL COMMENT FORM END --*/
	
	/*-- GOOGLE MAP --*/
	$(".google-map").width("100%").height("500px").gmap3({
		map:{
			options: {
			center:[51.5209564,0.157134],
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		},
		marker:{
			latLng:[51.5209564,0.157134],
			callback: function(){
				$(this).css("border", "10px solid #ffffff");
			}
		}
	});
	
	$(".google-map-big").width("100%").height("400px").gmap3({
		map:{
			options: {
			center:[51.5209564,0.157134],
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		},
		marker:{
			latLng:[51.5209564,0.157134]
		}
	});
	/*-- GOOGLE MAP END --*/
	
	/*--STELLAR--*/
	$.stellar({
	  horizontalScrolling: false
	});
	/*--STELLAR END--*/	
	
	/*-- BACK TOP --*/
	function backTop() {
		if ($(window).scrollTop() > 40 && windowWidth > 991) {
			$(".site-back-top").fadeIn();
		}
		else{
			$(".site-back-top").fadeOut();
		}
	}
	/*-- BACK TOP END --*/
	
	/*-- STICKY HEADER --*/
	function stickyHeader() {
		$(".site-sticky #site-header .header-inner").removeAttr("style");
		
		if ($(window).scrollTop() > 40) {
			
			$(".site-sticky #site-header").addClass("fixed");
			$(".site-sticky #site-header .header-search").hide();
			
			if(windowWidth > 991) {
				$(".site-sticky #site-header .header-inner").css("padding-top","20px");
				$(".site-sticky #site-header .header-logo").css("top","-40px");
			}
		}
		else{
			$(".site-sticky #site-header").removeClass("fixed");
			$(".site-sticky #site-header .header-search").removeAttr("style");
			
			if(windowWidth > 991) {
				$(".site-sticky #site-header .header-inner").removeAttr("style");
				$(".site-sticky #site-header .header-logo").css("top",- $(window).scrollTop());
			}
		}
	}
	/*-- STICKY HEADER END --*/
	
	/*-- MATCH HEIGHT --*/
	function matchCol() {
		if( windowWidth > 991 ) {
			var byRow = $(".row").hasClass("col-half");
			$(".col-half").each(function() {
				$(this).children(".half").matchHeight(byRow);
			});
		}
		else{
			$(".half").matchHeight("remove");
		}
	}
	/*-- MATCH HEIGHT END --*/
	
	/*-- MENU MOBILE --*/
	function menuMobile() {
		var copyMenu = $(".header-menu").clone();
		var copySearch = $(".header-search").clone();
		var copyAddress = $(".footer-middle .address-list").clone().removeClass("nav-default text-small");
		var copySocial = $(".footer-middle .social-icons").clone().removeClass("nav-default pull-right");
		$(copyMenu).appendTo(".site-nav");
		$(copySearch).appendTo(".site-nav");
		$(copyAddress).appendTo(".site-nav");
		$(copySocial).appendTo(".site-nav");
		
		/* open menu */
		$('.header-nav').on('click', function(e){
			e.preventDefault();
			var menu = $(".site-nav");
			
			if( $(menu).is(':visible') ) {
				$(this).removeClass("active");
				$(menu).animate({ 'left': '-250px' }, 'slow', function(){
					$(menu).hide();
				});
			}
			else{
				$("body,html").animate({scrollTop: 0}, 800);
				$(this).addClass("active");
				$(menu).show();
				$(menu).animate({ 'left': '0px' }, 'slow');
			}
		});
		
		/* check submenu */
		$(".site-nav ul li").each(function(index, elementItem){
			if($(this).find("ul").length != 0) {
				$(elementItem).addClass("sub");
			}
		});
		
		/* open sub menu */
		$(".site-nav .sub > a").click(function(e){
			e.preventDefault();
			
			$(".site-nav .sub ul").slideUp("normal");
			$(".site-nav .sub a").removeClass("opened");
			
			var elementSub = $(this).siblings("ul");
			
			if(elementSub.is(":visible")) {
				elementSub.slideUp("normal");
				$(this).removeClass("opened");
			}
			if((!elementSub.is(":visible"))) {
				elementSub.slideDown("normal");
				$(this).addClass("opened");
			}
		});
	}
	/*-- MENU MOBILE END --*/
	
	/*-- MENU MOBILE CHECK --*/
	function menuMobileCheck() {
		if( windowWidth < 991 ) {
			$("body").css("position","relative");
		}
		else{
			$("body").removeAttr("style");
			$(".site-nav").removeAttr("style");
			$(".header-nav").removeClass("active");
			$(".site-nav .sub ul").slideUp("normal");
			$(".site-nav .sub a").removeClass("opened");
		}
	}
	/*-- MENU MOBILE CHECK END --*/
	
	/*-- WINDOW SCROLL --*/
	$(window).scroll(function () {
		stickyHeader();
		backTop();
	});
	/*-- WINDOW SCROLL END --*/
	
	/*-- WINDOW LOAD --*/
	$(window).load(function() {
		$(".site-loader").delay(100).fadeOut("slow");
		
		$(".nav-one a,a[href='#home'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:".nav-one a",
			scrollEasing:"easeInOutCubic",
			scrollSpeed:500,
			offset:70,
			onComplete:function(){
				
				if(windowWidth < 992) {
					$(".site-nav").animate({ 'left': '-250px' }, 'slow', function(){
						$(".site-nav").hide();
					});
					$(".header-nav").removeClass("active");
				}
			}
		});
	});
	/*-- WINDOW LOAD END --*/
	
	/*-- WINDOW RESIZE --*/
	$(window).resize(function() {
		windowWidth = window.innerWidth;
		stickyHeader();
		backTop();
		matchCol();
		menuMobileCheck();
	});
	/*-- WINDOW RESIZE END --*/
	
});