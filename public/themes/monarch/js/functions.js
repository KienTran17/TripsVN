/* global localizeJsText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

( function( $ ) {
// start template

	var $body, $window, $sidebar, adminbarOffset, top = false,
	    bottom = false, windowWidth, windowHeight, lastWindowPos = 0,
	    topOffset = 0, bodyHeight, sidebarHeight, resizeTimer,
	    secondary, button;

	function initMainNavigation( container ) {
		// Add dropdown toggle that display child menu items.
		container.find( '.menu-item-has-children > a' ).after( '<button class="dropdown-toggle" aria-expanded="false">' + localizeJsText.expand + '</button>' );

		// Toggle buttons and submenu items with active children menu items.
		container.find( '.current-menu-ancestor > button' ).addClass( 'toggle-on' );
		container.find( '.current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );

		container.find( '.dropdown-toggle' ).click( function( e ) {
			var _this = $( this );
			e.preventDefault();
			_this.toggleClass( 'toggle-on' );
			_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );
			_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
			_this.html( _this.html() === localizeJsText.expand ? localizeJsText.collapse : localizeJsText.expand );
		} );
	}
	initMainNavigation( $( '.main-navigation' ) );

	// Re-initialize the main navigation when it is updated, persisting any existing submenu expanded states.
	$( document ).on( 'customize-preview-menu-refreshed', function( e, params ) {
		if ( 'primary' === params.wpNavMenuArgs.theme_location ) {
			initMainNavigation( params.newContainer );

			// Re-sync expanded states from oldContainer.
			params.oldContainer.find( '.dropdown-toggle.toggle-on' ).each(function() {
				var containerId = $( this ).parent().prop( 'id' );
				$( params.newContainer ).find( '#' + containerId + ' > .dropdown-toggle' ).triggerHandler( 'click' );
			});
		}
	});

	secondary = $( '#secondary' );
	button = $( '.site-branding' ).find( '.secondary-toggle' );

	// Enable menu toggle for small screens.
	( function() {
		var menu, widgets, social;
		if ( ! secondary.length || ! button.length ) {
			return;
		}

		// Hide button if there are no widgets and the menus are missing or empty.
		menu    = secondary.find( '.nav-menu' );
		widgets = secondary.find( '#widget-area' );
		social  = secondary.find( '#social-navigation' );
		if ( ! widgets.length && ! social.length && ( ! menu.length || ! menu.children().length ) ) {
			button.hide();
			return;
		}

		button.on( 'click.monarch', function() {
			secondary.toggleClass( 'toggled-on' );
			secondary.trigger( 'resize' );
			$( this ).toggleClass( 'toggled-on' );
			if ( $( this, secondary ).hasClass( 'toggled-on' ) ) {
				$( this ).attr( 'aria-expanded', 'true' );
				secondary.attr( 'aria-expanded', 'true' );
			} else {
				$( this ).attr( 'aria-expanded', 'false' );
				secondary.attr( 'aria-expanded', 'false' );
			}
		} );
	} )();

	/**
	 * @summary Add or remove ARIA attributes.
	 * Uses jQuery's width() function to determine the size of the window and add
	 * the default ARIA attributes for the menu toggle if it's visible.
	 * @since Monarch 1.1
	 */
	function onResizeARIA() {
		if ( 955 > $window.width() ) {
			button.attr( 'aria-expanded', 'false' );
			secondary.attr( 'aria-expanded', 'false' );
			button.attr( 'aria-controls', 'secondary' );
		} else {
			button.removeAttr( 'aria-expanded' );
			secondary.removeAttr( 'aria-expanded' );
			button.removeAttr( 'aria-controls' );
		}
	}

	// Sidebar scrolling.
	function resize() {
		windowWidth = $window.width();

		if ( 955 > windowWidth ) {
			top = bottom = false;
			$sidebar.removeAttr( 'style' );
		}
	}

	function scroll() {
		var windowPos = $window.scrollTop();

		if ( 955 > windowWidth ) {
			return;
		}

		sidebarHeight = $sidebar.height();
		windowHeight  = $window.height();
		bodyHeight    = $body.height();

		if ( sidebarHeight + adminbarOffset > windowHeight ) {
			if ( windowPos > lastWindowPos ) {
				if ( top ) {
					top = false;
					topOffset = ( $sidebar.offset().top > 0 ) ? $sidebar.offset().top - adminbarOffset : 0;
					$sidebar.attr( 'style', 'top: ' + topOffset + 'px;' );
				} else if ( ! bottom && windowPos + windowHeight > sidebarHeight + $sidebar.offset().top && sidebarHeight + adminbarOffset < bodyHeight ) {
					bottom = true;
					$sidebar.attr( 'style', 'position: fixed; bottom: 0;' );
				}
			} else if ( windowPos < lastWindowPos ) {
				if ( bottom ) {
					bottom = false;
					topOffset = ( $sidebar.offset().top > 0 ) ? $sidebar.offset().top - adminbarOffset : 0;
					$sidebar.attr( 'style', 'top: ' + topOffset + 'px;' );
				} else if ( ! top && windowPos + adminbarOffset < $sidebar.offset().top ) {
					top = true;
					$sidebar.attr( 'style', 'position: fixed;' );
				}
			} else {
				top = bottom = false;
				topOffset = ( $sidebar.offset().top > 0 ) ? $sidebar.offset().top - adminbarOffset : 0;
				$sidebar.attr( 'style', 'top: ' + topOffset + 'px;' );
			}
		} else if ( ! top ) {
			top = true;
			$sidebar.attr( 'style', 'position: fixed;' );
		}

		lastWindowPos = windowPos;
	}

	function resizeAndScroll() {
		resize();
		scroll();
	}

	$( document ).ready( function() {
		$body          = $( document.body );
		$window        = $( window );
		$sidebar       = $( '#sidebar' ).first();
		adminbarOffset = $body.is( '.admin-bar' ) ? $( '#wpadminbar' ).height() : 0;

		$window
			.on( 'scroll.monarch', scroll )
			.on( 'load.monarch', onResizeARIA )
			.on( 'resize.monarch', function() {
				clearTimeout( resizeTimer );
				resizeTimer = setTimeout( resizeAndScroll, 500 );
				onResizeARIA();
			} );
		$sidebar.on( 'click.monarch keydown.monarch', 'button', resizeAndScroll );

		resizeAndScroll();

		for ( var i = 1; i < 6; i++ ) {
			setTimeout( resizeAndScroll, 100 * i );
		}
	} );

	$(document).ready(function($) {

		// HC-Sticky User Panel
		$('.user-panel').hcSticky({
		  noContainer: true,
		  responsive: true,
		  wrapperClassName: "wrapper-sticky-user-panel"
		});
		// HC-Sticky Sidebars
		 $('.sidebars-sticky .sidebars').hcSticky({
		   noContainer: true,
		   responsive: true,
		   wrapperClassName: "wrapper-sticky-sidebars"
		 });
		// HC-Sticky Sidebar
		 $('.sidebars-sticky .sidebar').hcSticky({
		   noContainer: true,
		   responsive: true,
		   wrapperClassName: "wrapper-sticky-sidebar"
		 });
		// HC-Sticky Header Panel
		$('.header-panel').hcSticky({
		  noContainer: true,
		  responsive: true,
		  wrapperClassName: "wrapper-sticky-header-panel",
		  offResolutions: [-768]
		});
		// HC-Sticky fix
		function hcStickyFix() {
		    $('.content.with-sb,.content.fullwidth').css({
		        minHeight: $('.header-panel').height() + 'px'
		    });
		}
		hcStickyFix();
		$(window).resize( hcStickyFix );

		// Smooth Scrolling
		// $('a[href*="#"]').click(function() {
		// 	elementClick = jQuery(this).attr('href')
		// 	destination = jQuery(elementClick).offset().top;
		// 	jQuery('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1100);
		// 	return false;
		// });

		// jQuery CSS Customizable Scrollbar
	 // $('.scrollbar-inner').scrollbar({"scrollx": "false"});

		// Header Mobile Button
		$('.header-panel-toggle.mobile').click(function(){
		    $('.header-panel-scroll').toggleClass('open');
		});

		// jQuery flexMenu
		function flexMenuInit() {
			$('#item-nav .nav.nav-pills').flexMenu();
		};
		flexMenuInit();

	    // Visual Composer Theme Elements
		setInterval( function() {
			// jQuery(".page-template-page-visual-composer .woocommerce ul.products li.product a > img").each(function() {
			// 	jQuery(this).wrap("<div class='image-overlay'></div>");
			// });
			jQuery(".widget h2.widgettitle").each(function() {
				jQuery(this).replaceWith(jQuery("<h4 class='widget-title clearfix'><span>" + this.innerHTML + "</span></h4>"));
			});
		}, 10 );

		// BuddyPress Cover Description
		$('.groupdescr').click(function(){
		    $('#popover-groupdescr').toggleClass('show');
		});

		//Scroll Up Button
		$(window).scroll(function(){
		    if ($(this).scrollTop() > 100) {
		        $('.scrollup').fadeIn();
		    } else {
		        $('.scrollup').fadeOut();
		    }
		});
		$('.scrollup').click(function(){
		    $("html, body").animate({ scrollTop: 0 }, 800);
		    return false;
		});

		// Widget Categories & Archive Num Class
		$('.widget_categories li, .widget_archive li').each(function() {
		    var $contents = $(this).contents();
		    if ($contents.length > 1) {
		        $contents.eq(1).wrap('<span class="count"></span>');

		        $contents.eq(1).each(function() {});
		    }
		}).contents();

		// Widget Count
		$('.widget li .count').each(function() {
		    $(this).html($(this).text().replace(/\)/gi, ""));
		    $(this).html($(this).text().replace(/\(/gi, ""));
		});

		// Modal Center
		function centerModals($element) {
		  var $modals;
		  if ($element.length) {
		    $modals = $element;
		  } else {
		    $modals = $('.modal-vcenter:visible');
		  }
		  $modals.each( function(i) {
		    var $clone = $(this).clone().css('display', 'block').appendTo('body');
		    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
		    top = top > 0 ? top : 0;
		    $clone.remove();
		    $(this).find('.modal-content').css("margin-top", top);
		  });
		}
		$('.modal-vcenter').on('show.bs.modal', function(e) {
		  centerModals($(this));
		});
		$(window).on('resize', centerModals);

		// Bootstrap Tooltips
		$('[data-toggle="tooltip"]').tooltip();

		// Nanobar
		var nanobar = new Nanobar({ bg: '#cd0000', id: 'nanobar' });
		nanobar.go(0);
		nanobar.go(100);

		// Header Panel Menu Padding Bottom
		function setFooterHeight() {
		  $('.header-panel.fixed .header-panel-scroll').css({
		    marginBottom: $('#footer').height() + 'px'
		  });
		};
		setFooterHeight();

		// Show On Scroll Animation
		var ShowOnScrollInit = {
		  init: function(){
		    var $window           = $(window),
		        win_height_padded = $window.height() * 1.1,
		        isTouch           = Modernizr.touch;
		    if (isTouch) { $('.ShowOnScroll').addClass('animated'); }
		    $window.on('scroll', ShowOnScroll);
		    function ShowOnScroll() {
		      var scrolled = $window.scrollTop(),
		          win_height_padded = $window.height() * 1.1;
		      $(".ShowOnScroll:not(.animated)").each(function () {
		        var $this     = $(this),
		            offsetTop = $this.offset().top;
		        if (scrolled + win_height_padded > offsetTop) {
		            $this.addClass('animated');
		        }
		      });
		    }
		    ShowOnScroll();
		  } // end init
		};
		ShowOnScrollInit.init();

		$('.bbp-body .hentry, .bbp-pagination, .bbp-header, .bbp-reply-header, .bbp-header, .bbp-form, .bbp-no-reply, .comment-list .comment, .rtmedia-popup, .activity-list .activity-item, .post-navigation .nav-next, .post-navigation .nav-previous, .bbp-body .bp_members.type-bp_members.hentry').each(function() { $(this).addClass('ShowOnScroll'); });

		// Masonry Members $ Groups
		var msnryInit = {
		    init: function(){
		        imagesLoaded( document.querySelector('.wrapper'), function() {
		          // Theme Masonry
		          $('.masonry').masonry({
		            itemSelector: '.elem',
		            singleMode: true,
		            isResizable: true,
		          });
		          // BuddyPress rtMedia Masonry
		          $('.masonry').masonry({
		            itemSelector: '.masonry-brick',
		            singleMode: true,
		            isResizable: true,
		          });
		          // Social Articles
		          $('#articles-container').masonry({
		            itemSelector: '.article-container',
		            singleMode: true,
		            isResizable: true,
		          });
		          ShowOnScrollInit.init();
		          // Jetpack Infinite Scroll
		          $(document.body).on('post-load', function() {
		              setInterval( function() {
		                // Masonry Reload
		                jQuery('.masonry').masonry( 'reloadItems' );
		                jQuery('.masonry').masonry( 'layout' );
		                // Video & Audio Posts
		                $(".format-video iframe").each(function(){
		                  $(this).first().addClass("iframe");
		                });
		                $(".format-audio iframe").each(function(){
		                  $(this).first().addClass("iframe");
		                });
		              }, 300 );
		          });
		        });
		  }
		};
		msnryInit.init();
		$("body").on('masonry-trigger', function() {
		  msnryInit.init();
		});
		$('.page-numbers').click(function() {
		  msnryInit.init();
		});
		$('#pag-bottom .page-numbers').click(function() {
		  $("html, body").animate({ scrollTop: 0 }, 900);
		});

	    // Header Layout Button
	    jQuery('.social .layout-button').click(function(){
	        if ( jQuery('html').hasClass('mini-panel') ) {
	        	jQuery('html').removeClass('mini-panel');
	        	msnryInit.init();
	        	flexMenuInit();
	        	monarch_set_cookie( 'layout_btn_cookie', 'open', -1 );
	        } else {
	        	jQuery('html').addClass('mini-panel');
	        	msnryInit.init();
	        	flexMenuInit();
	        	monarch_set_cookie( 'layout_btn_cookie', 'close', 365 );
	        }
	    	// Visual Composer Relayout
	        if (typeof vc_js == 'function') { 
			  window.vc_js();
			}
	    });

	    // Sidebar Layout Button
	    jQuery('.blog .layout-button').click(function(){
	        if ( jQuery('html').hasClass('sidebar-open') ) {
	        	jQuery('html').removeClass('sidebar-open');
	        	msnryInit.init();
	        	flexMenuInit();
	        	monarch_set_cookie( 'sidebar_btn_cookie', 'open', -1 );
	        } else {
	        	jQuery('html').addClass('sidebar-open');
	        	msnryInit.init();
	        	flexMenuInit();
	        	monarch_set_cookie( 'sidebar_btn_cookie', 'close', 365 );
	        }
	    	// Visual Composer Relayout
	        if (typeof vc_js == 'function') { 
			  window.vc_js();
			}
	    });

		// Animation after load - Jetpack Infinite Scroll items
		$(document.body).on('post-load', function() {
			setInterval( function() {
		    	ShowOnScrollInit.init();
			}, 300 );
		});

		// Social Articles Ajax
		$('#more-articles-button').click(function() {
			setInterval( function() {
				// Masonry Reload
				jQuery('#articles-container').masonry( 'reloadItems' );
				jQuery('#articles-container').masonry( 'layout' );
			}, 300 );
		});

		// Video & Audio Posts
		$(".format-video iframe, .format-audio iframe").each(function(){
		  $(this).first().addClass("iframe");
		});

		// Modal Login Placeholder
		jQuery('#loginform #user_pass').attr( 'placeholder', localizeJsText.password );
		jQuery('#loginform #user_login').attr( 'placeholder', localizeJsText.username );

		/* jQuery Masonry for BuddyPress Filter: BuddyPress Filter the current content list (groups/members/blogs/topics) */
		bp_filter_request = function bp_filter_request( object, filter, scope, target, search_terms, page, extras, caller, template ) {
		  if ( 'activity' === object ) {
		    return false;
		  }

		  if ( null === scope ) {
		    scope = 'all';
		  }

		  /* Save the settings we want to remain persistent to a cookie */
		  jq.cookie( 'bp-' + object + '-scope', scope, {
		    path: '/'
		  } );
		  jq.cookie( 'bp-' + object + '-filter', filter, {
		    path: '/'
		  } );
		  jq.cookie( 'bp-' + object + '-extras', extras, {
		    path: '/'
		  } );

		  /* Set the correct selected nav and filter */
		  jq('.item-list-tabs li').each( function() {
		    jq(this).removeClass('selected');
		  });
		  jq('#' + object + '-' + scope + ', #object-nav li.current').addClass('selected');
		  jq('.item-list-tabs li.selected').addClass('loading');
		  jq('.item-list-tabs select option[value="' + filter + '"]').prop( 'selected', true );

		  if ( 'friends' === object || 'group_members' === object ) {
		    object = 'members';
		  }

		  if ( bp_ajax_request ) {
		    bp_ajax_request.abort();
		  }

		  bp_ajax_request = jq.post( ajaxurl, {
		    action: object + '_filter',
		    'cookie': bp_get_cookies(),
		    'object': object,
		    'filter': filter,
		    'search_terms': search_terms,
		    'scope': scope,
		    'page': page,
		    'extras': extras,
		    'template': template
		  },
		  function(response)
		  {
		    /* animate to top if called from bottom pagination */
		    if ( caller === 'pag-bottom' && jq('#subnav').length ) {
		      var top = jq('#subnav').parent();
		      jq('html,body').animate({scrollTop: top.offset().top}, 'slow', function() {
		        jq(target).fadeOut( 100, function() {
		          jq(this).html(response);
		          jq(this).fadeIn(100, function(){
		            jq("body").trigger('masonry-trigger');
		          });
		        });
		      });

		    } else {
		      jq(target).fadeOut( 100, function() {
		        jq(this).html(response);
		        jq(this).fadeIn(100, function(){
		            jq("body").trigger('masonry-trigger');
		          });
		      });
		    }

		    jq('.item-list-tabs li.selected').removeClass('loading');
		  });
		}
		// end bp_filter_request

		// jQuery iCheck
		$('input').iCheck();

		// jQuery iCheck for WP-Polls: Poll Process Successfully
		poll_process_success = function poll_process_success(data) {
		  jQuery(document).ready(function($) {
		    $('#polls-' + poll_id).replaceWith(data);
		    jQuery('input').iCheck();
		    if(pollsL10n.show_loading) {
		      $('#polls-' + poll_id + '-loading').hide();
		    }
		    if(pollsL10n.show_fading) {
		      $('#polls-' + poll_id).fadeTo('def', 1);
		      set_is_being_voted(false);
		    } else {
		      set_is_being_voted(false);
		    }
		  });
		}

		// jQuery iCheck for BuddyPress: Delete Groups
		$('#group-settings-form .iCheck-helper').click(function(){
		  if ( document.getElementById('delete-group-button').disabled==true ) {
		    document.getElementById('delete-group-button').disabled=false;
		  } else {
		    document.getElementById('delete-group-button').disabled=true;
		  }
		});

		// jQuery iCheck for BuddyPress: Delete Members
		$('#account-delete-form .iCheck-helper').click(function(){
		  if ( document.getElementById('delete-account-button').disabled==true ) {
		    document.getElementById('delete-account-button').disabled=false;
		  } else {
		    document.getElementById('delete-account-button').disabled=true;
		  }
		});

		// jQuery iCheck for BuddyPress: Selecting/Deselecting all notifications & Selecting/Deselecting all messages
		$('.bulk-select-all .iCheck-helper').click(function() {
			$('.notification-check, .message-check').iCheck('toggle');
		});

	});

// end template
} )( jQuery );