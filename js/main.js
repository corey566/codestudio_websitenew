(function ($) {
  "use strict";

	/*---------------------
    Preloader
  ---------------------*/
	$(document).ready(function () {
		$("#loading").fadeOut(500);
	});

	/*---------------------
    Home Two Menu
  ---------------------*/
  if ($('.header-two').length) {
		$('.header-two .navbar-toggler').on('click', function () {
      $('.header-two').toggleClass("active");
    });
    $('.header-two .navbar-nav .menu-item-has-children').on('click', function () {
      $(this).children('.sub-menu').slideToggle();
    });
  }

	/*---------------------
    Mobile Menu Dropdown
  ---------------------*/
  if ($(window).width() < 992 && $('.header-one .navbar-collapse').length) {
		$('.header-one .navbar-toggler').on('click', function () {
      $('.header-one .navbar-collapse').toggleClass("is-active");
    });
		$('.header-one .navbar-toggler').on('click', function () {
      $(this).toggleClass("is-active");
    });
    $('.header-one .navbar-nav .menu-item-has-children').on('click', function () {
      $(this).children('.sub-menu').slideToggle();
    });
  }
	
  /*----------------------------
    Text
  ------------------------------ */
	if ($('.text-fill').length) {
		var controller = new ScrollMagic.Controller();
		$('.text-fill').each(function(){
			var words = $(this).text();
			var total = words;
			$(this).empty();
			$(this).append($("<span /> ").text(words));
		});
		$('.text-fill span').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height()*2;

			var maskFillText = gsap.to($this, {duration: 1, backgroundSize:"200% 100%", ease:Linear.easeNone});

			var maskFillTextScene = new ScrollMagic.Scene({
				triggerElement: $this[0],
				triggerHook: 0.8,
				duration:$thisHeight
			})
			.setTween(maskFillText)
			.addTo(controller);

			if ($("body").hasClass("smooth-scroll")) {
				maskFillTextScene.refresh();
			}
		});
	}

	/*----------------------------
    Data Background JS
  ------------------------------ */
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});

	/*----------------------------
    Reset All ScrollTriggers
  ------------------------------ */
	$(window).on('load', function() {
    ScrollTrigger.refresh();
  });
	ScrollTrigger.getAll().forEach(trigger => trigger.kill());

	/*---------------------
    Logo Carousel
  ---------------------*/
  if ($('.brand').length) {
    var LogoSlider=$('.brand__slider');
    LogoSlider.slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
			autoplaySpeed: 0,
			centerMode: false,
			speed: 2000,
      loop:true,
			initialSlide: 1,
			arrows: false,
			draggable:false,
			focusOnSelect:false,
			pauseOnFocus:false,
			pauseOnHover:false,
      pauseOnHover: false,
			cssEase: 'linear',
      responsive: [
				{
          breakpoint: 1440,
          settings: {
            slidesToShow: 4
          }
        },
				{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    var LogoSliderBottom=$('.brand__info-top');
    LogoSliderBottom.slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
			autoplaySpeed: 0,
			centerMode: false,
			speed: 2000,
      loop:true,
			initialSlide: 1,
			arrows: false,
      draggable:false,
			focusOnSelect:false,
			pauseOnFocus:false,
			pauseOnHover:false,
			cssEase: 'linear',
      responsive: [
				{
          breakpoint: 1440,
          settings: {
            slidesToShow: 4
          }
        },
				{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    var LogoSliderBottom=$('.brand__info-bottom');
    LogoSliderBottom.slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
			autoplaySpeed: 0,
			centerMode: false,
			speed: 2000,
      loop:true,
			initialSlide: 1,
			arrows: false,
      draggable:false,
			focusOnSelect:false,
			pauseOnFocus:false,
			pauseOnHover:false,
			cssEase: 'linear',
			rtl: true,
      responsive: [
				{
          breakpoint: 1440,
          settings: {
            slidesToShow: 4
          }
        },
				{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  $(window).on('load', function () {
    if ($('.brand').length) {

      var maxHeightContent = 0;
      $('.brand__logo').each(function () {
        if (maxHeightContent < $(this).height()) {
          maxHeightContent = $(this).height();
        }
      });

      $('.brand__logo').css('height', maxHeightContent);
    }
  });

	/*---------------------
    Home Two Hero Draggable Element
  ---------------------*/
	if ($('.hero-two__lists').length) { 
    $('.hero-two__list').draggable({ 
			scroll: true, 
			cursor: "move",
			containment: ".hero-two__lists"
    });
  }

	/*---------------------
    Counter
  ---------------------*/
  var timer = $('.timer');
  if (timer.length) {
    timer.appear(function () {
      timer.countTo();
    });
  }

	/*----------------------------
    About Video
  ------------------------------ */
	if ($(".about__video").length) {
		var playerAbc = new Plyr('#about-video__player');
		jQuery(".about-video__overlay-play").on("click", function () {
			playerAbc.play();
		});
		playerAbc.on("play", function (e) {
			jQuery(".about-video__overlay").css("display", "none");
		});

		const videoContainer = document.getElementById("about__video");
		const playButton = document.getElementById("about-video__overlay-play");

		videoContainer.addEventListener("mousemove", function (event) {
			const containerRect = videoContainer.getBoundingClientRect();
			const mouseX = event.clientX - containerRect.left;
			const mouseY = event.clientY - containerRect.top;

			const buttonWidth = playButton.offsetWidth;
			const buttonHeight = playButton.offsetHeight;
			const buttonX = mouseX - buttonWidth / 2;
			const buttonY = mouseY - buttonHeight / 2;

			const maxButtonX = containerRect.width - buttonWidth;
			const maxButtonY = containerRect.height - buttonHeight;
			playButton.style.left = Math.min(Math.max(buttonX, 0), maxButtonX) + "px";
			playButton.style.top = Math.min(Math.max(buttonY, 0), maxButtonY) + "px";
		});

		videoContainer.addEventListener("mouseleave", function () {
			setTimeout(function () {
				playButton.style.left = "50%";
				playButton.style.top = "50%";
				playButton.style.transform = "translate(-50%, -50%) scale(1)";
				playButton.style.transition = "all 0.3s ease-out";
			}, 50);
		});
		videoContainer.addEventListener("mouseover", function () {
			playButton.style.transition = "transform ease-out 0.3s";
			playButton.style.transform = "scale(1.2)";
		});
	}

  /*----------------------------
    Service Accordion
  ------------------------------ */
	if ($(".services").length) {
		$(".services .service__single > .service__content").hide();
		$(".services > .service__item:first-child .service__content").show();

		$(".service__item .service__heading").on('click', function() {
			if ($(this).parent().parent().hasClass("active")) {
				$(this).parent().parent().removeClass("active").find(".service__content").slideUp(500);
			} else {
				$(".service__item.active .service__content").slideUp(500);
				$(".service__item.active").removeClass("active");
				$(this).parent().parent().addClass("active").find(".service__content").slideDown(500);
			}
			return false;
		});
	}

	/*----------------------------
    Portfolio Hover
  ------------------------------ */
	if ($(".project__hovers").length) {
		$('.project__hover a').each(function() {
			$(this).on('mouseenter', function() {
				if ($(this).data('title')) {
					$('.project__hover-title').html('<div class="project__hover-ticker-box"><span class="project__hover-ticker">' + $(this).data('title') + '</span>' + '<span class="project__hover-ticker">' + $(this).data('title') + '</span>' + '<span class="project__hover-ticker">' + $(this).data('title') + '</span></div>' + '<div class="project__hover-ticker-box"><span class="project__hover-ticker">' + $(this).data('title') + '</span>' + '<span class="project__hover-ticker">' + $(this).data('title') + '</span>' + '<span class="project__hover-ticker">' + $(this).data('title') + '</span></div>');
					$('.project__hover-title').addClass('appear');
				}
				$(document).on('mousemove', function(e) {
					$('.project__hover-title').css({
						left: e.clientX + 2,
						top: e.clientY + 2
					});
				});
			});
			$(this).on('mouseleave', function() {
				$('.project__hover-title').removeClass('appear');
			});
		});
	}

  /*----------------------------
    Services
  ------------------------------ */
  /**
    * Initialize main helper object
  **/
	if($(".award__items").length){
		var PTFJS = {
			window: jQuery(window),
			document: jQuery(document),
			html: jQuery('html'),
			body: jQuery('body'),
			is_safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
			is_firefox: navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
			is_chrome: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
			is_ie10: navigator.appVersion.indexOf('MSIE 10') !== -1,
			transitionEnd: 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
			animIteration: 'animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration',
			animationEnd: 'animationend webkitAnimationEnd',
			getMousePos: function (e) {
				var posx = 0;
				var posy = 0;
				if (!e) e = window.event;
				if (e.pageX || e.pageY) {
					posx = e.pageX;
					posy = e.pageY;
				} else if (e.clientX || e.clientY) {
					posx = e.clientX + PTFJS.body.scrollLeft() + PTFJS.document.scrollLeft();
					posy = e.clientY + PTFJS.body.scrollTop() + PTFJS.document.scrollTop();
				}
				return {
					x: posx,
					y: posy
				};
			}
		};

		function ptf_image_tooltip() {

			$('.ptf-hover-reveal').remove();

			$('[data-tooltip-image]').each(function (index) {

				var $this = $(this),
					size = $this.data('tooltip-size') ? $this.data('tooltip-size').split('x') : false;

				PTFJS.body.append('<div class="ptf-hover-reveal"><div class="ptf-hover-reveal__inner"><div class="ptf-hover-reveal__img" style="background-image: url(' + $this.data('tooltip-image') + ');"></div></div></div>');

				if (size) {
					PTFJS.body.find('.ptf-hover-reveal').css({
						'width': size[0] + 'px',
						'height': size[1] + 'px'
					});
				}

				var reveal = PTFJS.body.find('.ptf-hover-reveal').eq(index),
					revealInner = reveal.find('.ptf-hover-reveal__inner'),
					revealImg = reveal.find('.ptf-hover-reveal__img'),
					revealImgWidth = revealImg.outerWidth(),
					revealImgHeight = revealImg.outerHeight();

				function position_element(ev) {

					var mousePos = PTFJS.getMousePos(ev),
						docScrolls = {
							left: PTFJS.body.scrollLeft() + PTFJS.document.scrollLeft(),
							top: PTFJS.body.scrollTop() + PTFJS.document.scrollTop()
						};

					gsap.set(reveal, {
						top: mousePos.y - revealImgHeight * 0.5 - docScrolls.top + 'px',
						left: mousePos.x - revealImgWidth * 0.25 - docScrolls.left + 'px'
					});

				}

				function mouse_enter(ev) {
					position_element(ev);
					show_image();
				}

				function mouse_move(ev) {
					requestAnimationFrame(function () {
						position_element(ev);
					});
				}

				function mouse_leave() {
					hide_image();
				}

				$this.on('mouseenter', mouse_enter);
				$this.on('mousemove', mouse_move);
				$this.on('mouseleave', mouse_leave);

				function show_image() {
					gsap.killTweensOf(revealInner);
					gsap.killTweensOf(revealImg);

					gsap.timeline({
						onStart: function () {
							gsap.set(reveal, {
								opacity: 1
							});
							gsap.set($this, {
								zIndex: 1000
							});
						}
					})
					.fromTo(revealInner, 1, {
						x: '-100%',
					}, {
						x: '0%',
						ease: Quint.easeOut,
					})
					.fromTo(revealImg, 1, {
							x: '100%',
						}, {
							x: '0%',
							ease: Quint.easeOut,
						},
						'-=1');

				}

				function hide_image() {
					gsap.killTweensOf(revealInner);
					gsap.killTweensOf(revealImg);
					gsap.timeline({
						onStart: function () {
							gsap.set($this, {
								zIndex: 999
							});
						},
						onComplete: function () {
							gsap.set($this, {
								zIndex: ''
							});
							gsap.set(reveal, {
								opacity: 0
							});
						}
					})
					.to(revealInner, 0.5, {
						x: '100%',
						ease: Quint.easeOut,
					})
					.to(revealImg, 0.5, {
						x: '-100%',
						ease: Quint.easeOut,
					}, '-=0.5');
				}

			});
		}

		ptf_image_tooltip();
	}

	/*----------------------------
    Team
  ------------------------------ */	
	$(document).ready(function () {
		if ($(".team__block").length) {
			gsap.registerPlugin(ScrollTrigger);
			const teamSections = gsap.utils.toArray(".team__members");
			const teamSectionWidth = $(".team__block").width();    
			teamSections.forEach((section) => {
				let teamPanel = Array.from(section.querySelectorAll(".team__member"));
				let tlTeam = gsap.timeline({
					scrollTrigger: {
						start: 'center center',
						pin: true,
						scrub: 1,
						trigger: section,
						invalidateOnRefresh: true,
						end: () => "+=" + (section.scrollWidth - teamSectionWidth)
					}
				});
				tlTeam.to(
					teamPanel,
					{
						x: () => -(section.scrollWidth - teamSectionWidth) + "px",
						duration: 1,
						ease: "none"
					},
					0.05
				);
				tlTeam.to({}, { duration: 0.1 });
			});
		}
	});
	
  /*----------------------------
    Review
  ------------------------------ */
	if ($('.review__block').length) {
    var ReviewSlider=$('.review__items');
    ReviewSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
			autoplaySpeed: 0,
			speed: 4000,
      infinite: true,
			arrows: false,
      swipeToSlide: false,
      pauseOnHover: true,
			draggable: false,
			touchMove: false,
			cssEase: 'linear',
      responsive: [
				{
          breakpoint: 1800,
          settings: {
            slidesToShow: 3
          }
        },
				{
          breakpoint: 1440,
          settings: {
            slidesToShow: 2
          }
        },
				{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
	}

	/*----------------------------
    Hero Bottom Thumbnail
  ------------------------------ */
	if ($(".hero-bottom").length) {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
			trigger: ".hero-bottom",				
				start: "top top",
				end: "+=120%",
				scrub: true,
				pin: true
			}
		});
		tl.to(".hero-bottom__thumbnail", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: "none"
		});
	}

	/*----------------------------
    Company Info
  ------------------------------ */
	if ($(".company-info__lists").length) {
		function setboxHeight() {
		var setboxWidth = $('.company-info__list').width();
			$('.company-info__list').css('height' , setboxWidth);
		}
		setboxHeight();
		$(window).resize(function() {
			setboxHeight();
		});
	}

	/*----------------------------
    Gallery
  ------------------------------ */
	if ($(".gallery__block").length) {
    gsap.registerPlugin(ScrollTrigger);
    const gallerySections = gsap.utils.toArray(".gallery__lists");
    const gallerySectionWidth = $(".gallery__block").width();    
    gallerySections.forEach((section, index) => {
			let galleryPanel = Array.from(section.querySelectorAll(".gallery__list"));
			let tlGallery = gsap.timeline({
				scrollTrigger: {
					id: `gallerySectionTrigger-${index}`,
					start: 'center center',
					pin: true,
					scrub: 1,
					trigger: section,
					invalidateOnRefresh: true,
					end: () => "+=" + (section.scrollWidth - gallerySectionWidth)
				}
			});
			tlGallery.to(
				galleryPanel,
				{
					x: () => -(section.scrollWidth - gallerySectionWidth) + "px",
					duration: 1,
					ease: "none"
				},
				0.05
			);
			tlGallery.to({}, { duration: 0.1 });
    });
  }

	/*----------------------------
    Project
  ------------------------------ */
	if ($(".project__heading-block").length) {
    gsap.registerPlugin(ScrollTrigger);
    const projectSections = gsap.utils.toArray(".project__heading");
    const projectSectionWidth = $(".project__heading-block").width();    
    projectSections.forEach((section, index) => {
			let projectPanel = Array.from(section.querySelectorAll(".project__heading h2"));
			let tlProject = gsap.timeline({
				scrollTrigger: {
					id: `projectSectionTrigger-${index}`,
					start: 'top bottom-=1',
					scrub: 1,
					trigger: section,
					invalidateOnRefresh: true,
					end: () => "+=" + (section.scrollWidth - projectSectionWidth)
				}
			});
			tlProject.to(
				projectPanel,
				{
					x: () => -(section.scrollWidth - projectSectionWidth) + "px",
					duration: 1,
					ease: "none"
				},
				0.05
			);
			tlProject.to({}, { duration: 0.1 });
    });
  }
	
  /*----------------------------
    FAQ Accordion
  ------------------------------ */
	if ($(".faq__block").length) {
		$(".faq__block .faq__single > .faq__content").hide();
		$(".faq__block > .faq__item:first-child .faq__content").show();
		$(".faq__block > .faq__item:first-child").addClass("active");

		$(".faq__item .faq__heading").on('click', function() {
			if ($(this).parent().parent().hasClass("active")) {
				$(this).parent().parent().removeClass("active").find(".faq__content").slideUp(500);
			} else {
				$(".faq__item.active .faq__content").slideUp(500);
				$(".faq__item.active").removeClass("active");
				$(this).parent().parent().addClass("active").find(".faq__content").slideDown(500);
			}
			return false;
		});
	}
		
  /*----------------------------
    Testimonial
  ------------------------------ */
	$(document).ready(function () {
		if($(".testimonial__block").length){
			gsap.registerPlugin(ScrollTrigger);
			const testimonialSections = gsap.utils.toArray(".testimonial__items");
			const testimonialSectionWidth = $(".testimonial__block").width();		
			testimonialSections.forEach((section, index) => {
				let testimonialPanel = Array.from(section.querySelectorAll(".testimonial__item"));		
				let tlTestimonial = gsap.timeline({
					scrollTrigger: {
						id: `testimonialSectionTrigger-${index}`,
						start: 'center center',
						pin: true,
						scrub: 1,
						trigger: section,
						invalidateOnRefresh: true,
						end: () =>
							"+=" + (section.scrollWidth - testimonialSectionWidth)
					}
				});
				tlTestimonial.to(
					testimonialPanel,
					{
						x: () =>
							-(section.scrollWidth - testimonialSectionWidth) + "px",
						duration: 1,
						ease: "none"
					},
					0.05
				);
				tlTestimonial.to({}, { duration: 0.1 });
			});
		}
	});

	/*----------------------------
    CTA
  ------------------------------ */
	$(document).ready(function () {
		var windowWidth = $(window).innerWidth();
		if (windowWidth >= 768) {
			if ($(".cta__info").length) {
				gsap.registerPlugin(ScrollTrigger);
				const ctaTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: ".cta__info",
						start: "top top",
						end: "bottom bottom",
						scrub: true,
						pin: true,
					}
				});
				ctaTimeline.from(".cta__info", { opacity: 1, y: 0, duration: 0 });
			}
		}
	});
	
	/*----------------------------
    Testimonial Heading
  ------------------------------ */
	$(document).ready(function () {
		if ($(".testimonial__heading-block").length) {
			gsap.registerPlugin(ScrollTrigger);
			const testimonialSections = gsap.utils.toArray(".testimonial__heading");
			const testimonialSectionWidth = $(".testimonial__heading-block").width();    
			testimonialSections.forEach((section, index) => {
				let testimonialPanel = Array.from(section.querySelectorAll(".testimonial__heading h2"));
				let tlTestimonial = gsap.timeline({
					scrollTrigger: {
						id: `testimonialSectionTrigger-${index}`,
						start: 'top bottom-=1',
						scrub: 1,
						trigger: section,
						invalidateOnRefresh: true,
						end: () => "+=" + (section.scrollWidth - testimonialSectionWidth)
					}
				});
				tlTestimonial.to(
					testimonialPanel,
					{
						x: () => -(section.scrollWidth - testimonialSectionWidth) + "px",
						duration: 1,
						ease: "none"
					},
					0.05
				);
				tlTestimonial.to({}, { duration: 0.1 });
			});
		}
	});

	/*----------------------------
    Blog Heading
  ------------------------------ */
	$(document).ready(function () {
		if ($(".blog__heading-block").length) {
			gsap.registerPlugin(ScrollTrigger);
			const blogSections = gsap.utils.toArray(".blog__heading");
			const blogSectionWidth = $(".blog__heading-block").width();    
			blogSections.forEach((section, index) => {
				let blogPanel = Array.from(section.querySelectorAll(".blog__heading h2"));
				let tlBlog = gsap.timeline({
					scrollTrigger: {
						id: `blogSectionTrigger-${index}`,
						start: 'top bottom-=1',
						scrub: 1,
						trigger: section,
						invalidateOnRefresh: true,
						end: () => "+=" + (section.scrollWidth - blogSectionWidth)
					}
				});
				tlBlog.to(
					blogPanel,
					{
						x: () => -(section.scrollWidth - blogSectionWidth) + "px",
						duration: 1,
						ease: "none"
					},
					0.05
				);
				tlBlog.to({}, { duration: 0.1 });
			});
		}
	});

	/*----------------------------
    Team Heading
  ------------------------------ */
	$(document).ready(function () {
		if ($(".team__heading-block").length) {
			gsap.registerPlugin(ScrollTrigger);
			const teamSections = gsap.utils.toArray(".team__heading");
			const teamSectionWidth = $(".team__heading-block").width();    
			teamSections.forEach((section, index) => {
				let teamPanel = Array.from(section.querySelectorAll(".team__heading h2"));
				let tlTeam = gsap.timeline({
					scrollTrigger: {
						id: `teamSectionTrigger-${index}`,
						start: 'top bottom-=1',
						scrub: 1,
						trigger: section,
						invalidateOnRefresh: true,
						end: () => "+=" + (section.scrollWidth - teamSectionWidth)
					}
				});
				tlTeam.to(
					teamPanel,
					{
						x: () => -(section.scrollWidth - teamSectionWidth) + "px",
						duration: 1,
						ease: "none"
					},
					0.05
				);
				tlTeam.to({}, { duration: 0.1 });
			});
		}
	});

	/*---------------------
    Ticker
  ---------------------*/
  if ($('.ticker').length) {
    var LogoSlider=$('.ticker__carousel');
    LogoSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
			autoplaySpeed: 0,
			centerMode: false,
			speed: 5000,
      loop: true,
			initialSlide: 1,
			arrows: false,
			draggable:false,
			focusOnSelect:false,
			pauseOnFocus:false,
			pauseOnHover:false,
      pauseOnHover: false,
			cssEase: 'linear',
    });
	}
	
	/*----------------------------
    Hero Video Parallax
  ------------------------------ */
	$(document).ready(function () {
		var windowWidth = $(window).innerWidth();
		if (windowWidth >= 768) {
			if ($(".discover").length) {
				gsap.registerPlugin(ScrollTrigger);
				const tlDiscover = gsap.timeline({
					scrollTrigger: {
					trigger: ".discover",				
						start: "top 80%",
						end: "+=100%",
						scrub: true,
					}
				});
				tlDiscover.from(".discover", {
					scale: 0.75,
					ease: "none",
				});
				tlDiscover.from(".discover__thumbnails-top img:nth-child(1)", {
					scale: 0.5,
					opacity: 0.3,
					translateX: '4vw',
					translateY: '4vw',
					ease: "none"
				});
				tlDiscover.from(".discover__thumbnails-top img:nth-child(2)", {
					scale: 0.5,
					opacity: 0.3,
					translateX: '0%',
					translateY: '4vw',
					ease: "none"
				});
				tlDiscover.from(".discover__thumbnails-top img:nth-child(3)", {
					scale: 0.5,
					opacity: 0.3,
					translateX: '-4vw',
					translateY: '4vw',
					ease: "none"
				});
				tlDiscover.from(".discover__thumbnails-bottom img:nth-child(1)", {
					scale: 0.5,
					opacity: 0.3,
					translateX: '4vw',
					translateY: '4vw',
					ease: "none"
				});
				tlDiscover.from(".discover__thumbnails-bottom img:nth-child(2)", {
					scale: 0.5,
					opacity: 0.3,
					translateX: '0%',
					translateY: '4vw',
					ease: "none"
				});
				tlDiscover.from(".discover__thumbnails-bottom img:nth-child(3)", {
					scale: 0.5,
					opacity: 0.3,
					translateX: '-4vw',
					translateY: '4vw',
					ease: "none"
				});
			}
		}
	});
    
  /*--------------------------
    Choose
  --------------------------*/
	var chooseProgress = $('.choose__progress');
  if(chooseProgress.length) {
		chooseProgress.appear(function () {
			//fire whatever you what 
			$('#bar1').barfiller( {
				barColor: '#1A1919', duration: 2000
			});
			$('#bar2').barfiller( {
				barColor: '#1A1919', duration: 2200
			});
			$('#bar3').barfiller( {
				barColor: '#1A1919', duration: 2000
			});
    });
  }

	/*----------------------------
    About Video
  ------------------------------ */
	if ($(".service-details__video").length) {
		var playerAbcService = new Plyr('#service-details__video-player');
		$(".service-details__video-overlay-play .play").on("click", function () {
			playerAbcService.play();
			$(this).parent().addClass("play-toggle");
		});
		$(".service-details__video-overlay-play .pause").on("click", function () {
			playerAbcService.pause();
			$(this).parent().removeClass("play-toggle");
		});

		const videoContainerService = document.getElementById("service-details__video");
		const playButtonService = document.getElementById("service-details__video-overlay-play");

		videoContainerService.addEventListener("mousemove", function (event) {
			const containerRect = videoContainerService.getBoundingClientRect();
			const mouseX = event.clientX - containerRect.left;
			const mouseY = event.clientY - containerRect.top;

			const buttonWidth = playButtonService.offsetWidth;
			const buttonHeight = playButtonService.offsetHeight;
			const buttonX = mouseX - buttonWidth / 2;
			const buttonY = mouseY - buttonHeight / 2;

			const maxButtonX = containerRect.width - buttonWidth;
			const maxButtonY = containerRect.height - buttonHeight;
			playButtonService.style.left = Math.min(Math.max(buttonX, 0), maxButtonX) + "px";
			playButtonService.style.top = Math.min(Math.max(buttonY, 0), maxButtonY) + "px";
		});

		videoContainerService.addEventListener("mouseleave", function () {
			setTimeout(function () {
				playButtonService.style.left = "50%";
				playButtonService.style.top = "50%";
				playButtonService.style.transform = "translate(-50%, -50%) scale(1)";
				playButtonService.style.transition = "all 0.3s ease-out";
			}, 50);
		});
		videoContainerService.addEventListener("mouseover", function () {
			playButtonService.style.transition = "transform ease-out 0.3s";
			playButtonService.style.transform = "scale(1.2)";
		});
	}

	/*----------------------------
    Portfilio
  ------------------------------ */
	var pixelsAnimation = document.querySelectorAll('.pixels-animation');
			
	pixelsAnimation.forEach(function(pixelAnimation) {
		var pixelsBlock = document.createElement('div');
		pixelsBlock.className = 'pixels-block';
		pixelAnimation.appendChild(pixelsBlock);
	});
	function calculatePixelBox() {
		var windowWidth = window.innerWidth;
		var pixelsPerRow = 0;
		
		// Define breakpoints and corresponding pixels per row
		if (windowWidth >= 1920) {
			pixelsPerRow = 14;
		} else if (windowWidth >= 1600) {
			pixelsPerRow = 18;
		} else if (windowWidth >= 1280) {
			pixelsPerRow = 16;
		} else if (windowWidth >= 1024) {
			pixelsPerRow = 14;
		} else if (windowWidth >= 768) {
			pixelsPerRow = 12;
		} else {
			pixelsPerRow = 10;
		}
		
		// Assuming pixels are square, calculate pixel size in pixels
		var pixelSize = windowWidth / pixelsPerRow;
		
		var pixelsBlocks = document.querySelectorAll('.pixels-block');
		
		pixelsBlocks.forEach(function(block) {
		// Clear previous pixels if any
		block.innerHTML = '';
		
		// Calculate the size of the parent .pixels-animation element
		var parentWidth = block.parentElement.offsetWidth;
		var parentHeight = block.parentElement.offsetHeight;
		
		// Calculate the number of pixels needed to cover the parent element
		var cols = Math.ceil(parentWidth / pixelSize);
		var rows = Math.ceil(parentHeight / pixelSize);
		rows += 1; // Increment rows by 1
		
		// Calculate pixel size in percentage relative to wrapper width
		var pixelSizePercent = (100 / cols) + '%';
		
		// Create and append the pixel elements
		for (var i = 0; i < rows * cols; i++) {
			var pixelBox = document.createElement('div');
			pixelBox.className = 'pixel-box';
			pixelBox.style.width = pixelSizePercent;
			block.appendChild(pixelBox);
			}
		});
	}
	calculatePixelBox();
	
	// Recalculate on window resize
	window.addEventListener('resize', calculatePixelBox);

  gsap.registerPlugin(ScrollTrigger);
	gsap.utils.toArray('.pixels-animation').forEach((pixelBlock) => {
		const pixelAnimation = pixelBlock.querySelectorAll(".pixel-box");
		
		gsap.to(pixelAnimation, {				
			scrollTrigger: {
				trigger: pixelBlock,
				start: "top 60%",
			},
			duration: 0.2,
			opacity: 0, 
			delay: function() {
				return gsap.utils.random(0, 0.6);
			},
			ease: Power4.easeOut, 
			onComplete: function() {												
				pixelBlock.querySelectorAll(".pixels-block").forEach(pixelbox => {
					pixelbox.remove(); 
				});
			}
		});
	});

	/*----------------------------
    Portfilio Two
  ------------------------------ */
	if( $('.project__slices').length ){        
		var numberOfDivs = 13;  
		function addCurtainRowsToContainer(container, curtainColor) {
			var heightPercentage = 100 / numberOfDivs;        
			for (var i = 0; i < numberOfDivs; i++) {
				var newDiv = $('<div class="project__slice-row"></div>');
				newDiv.css('top', heightPercentage * i + '%');
				newDiv.css('height', heightPercentage + '%');
				newDiv.css('background-color', curtainColor);
				container.append(newDiv);
			}
		}        
		$('.project__slice-block').each(function() {
			var curtainColor = $(this).data('curtain-color');
			addCurtainRowsToContainer($(this), curtainColor);
		});        
		gsap.utils.toArray('.project__slice').forEach((thumbAnimation, index) => {          
			const curtainAnimation = thumbAnimation.querySelectorAll(".project__slice-row");              
			gsap.to(curtainAnimation, {				
				scrollTrigger: {
					trigger: thumbAnimation,
					start: "top 100%",
					onEnter: function() {
						thumbAnimation.classList.add('animated');
						setTimeout( function(){	
							gsap.to($(".portfolio__items .project__slice.animated .project__slice-row"), {duration: 0.7, scaleY:0, opacity:0, stagger:0.1, delay:0.5, ease:Power2.easeOut});	
						} , 300 );
					},
				},
				duration: 0.7,
				stagger: {
					each: 0.01, 
					from: "start",
				},
				scaleY:0,
				delay: 0.15,
				ease:Power4.easeOut, onComplete: function() {												
						thumbAnimation.querySelectorAll(".project__slice-block").forEach(curtain => {
							curtain.remove(); 
					});
				}
			});
		});  
	}

	/*----------------------------
    Portfolio Filter
  ------------------------------ */
  if ($('.portfolio__list').length) {
    $('.portfolio__list-navbar button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
    $('.portfolio__list .work__items').imagesLoaded(function () {
      // filter items on button click
      $('.portfolio__list-navbar').on('click', 'button', function () {
        var filterValue=$(this).attr('data-filter');
        $grid.isotope( {
          filter: filterValue
        });
      });
      // init Isotope
      var $grid=$('.portfolio__list .work__items').isotope( {
        itemSelector: '.work__items .work__item', 
        percentPosition: true, 
        masonry: {
          isFitWidth: true
        }
      });
    });
  }

	/*----------------------------
    Blog Filter
  ------------------------------ */
  if ($('.blog__grid-two').length) {
    $('.blog__items-navbar button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
    $('.blog__grid-two .blog__items').imagesLoaded(function () {
      // filter items on button click
      $('.blog__items-navbar').on('click', 'button', function () {
        var filterValue=$(this).attr('data-filter');
        $grid.isotope( {
          filter: filterValue
        });
      });
      // init Isotope
      var $grid=$('.blog__grid-two .blog__items').isotope( {
        itemSelector: '.blog__items .blog__item', 
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.blog__grid-two .blog__items-sizer',
          isFitWidth: true
        }
      });
    });
  }
  


})(jQuery);