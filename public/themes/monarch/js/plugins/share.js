/*! Facebook, Google, Pinterest, Twitter, Tumblr share buttons */
!function(t){t(function(){t("div.shareinit").each(function(e){function a(t){for(var e=document.getElementsByTagName("script"),a=new RegExp("^(.*/|)("+t+")([#?]|$)"),r=0,n=e.length;n>r;r++){var o=String(e[r].src).match(a);if(o)return o[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/)?o[1]:0==o[1].indexOf("/")?o[1]:(b=document.getElementsByTagName("base"),b[0]&&b[0].href?b[0].href+o[1]:document.location.pathname.match(/(.*[\/\\])/)[0]+o[1])}return null}function r(){var e=t(window).scrollTop();u>e+p?v.css({top:u-e}):v.css({top:p})}var n=t(this),o=n.attr("data-url"),l=n.attr("data-title"),i=n.attr("data-image"),s=n.attr("data-description"),c=n.attr("data-path"),h=n.attr("data-zero-counter"),u=n.attr("data-top1"),p=1*n.attr("data-top2"),d=n.attr("data-margin");if(o||(o=location.href),h||(h=0),c||(c=a("share.js")),l||(l=document.title),!s){var m=t('meta[name="description"]').attr("content");s=void 0!==m?m:""}u||(u=150),p||(p=20),d||(d=0),o=encodeURIComponent(o),l=encodeURIComponent(l),l=l.replace(/\'/g,"%27"),i=encodeURIComponent(i),s=encodeURIComponent(s),s=s.replace(/\'/g,"%27");var w="u="+o;"null"!=i&&""!=i&&(w="s=100&p[url]="+o+"&p[title]="+l+"&p[summary]="+s+"&p[images][0]="+i);var f=new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/share.php?m2w&'+w+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Facebook\"",'"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url='+o+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Google+\"",'"#" data-count="pin" onclick="window.open(\'http://pinterest.com/pin/create/button/?url='+o+"&media="+i+"&description="+l+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=300, toolbar=0, status=0');return false\" title=\"Share on Pinterest\"",'"#" data-count="tumb" onclick="window.open(\'http://www.tumblr.com/share?v=3&u='+o+"&t="+l+"&s="+s+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=450, height=440, toolbar=0, status=0');return false\" title=\"Share on Tumblr\"",'"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text='+l+"&url="+o+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Twitter\""),g="";for(j=0;j<f.length;j++){var k="";g+='<span class="share-item"><a rel="nofollow" href='+f[j]+' target="_blank"><i class="ion-android-share-alt"></i></a></span>'+k}n.html('<span id="share">'+g+"</span>");var v=t("#share");r(),t(window).scroll(function(){r()})})})}(jQuery);