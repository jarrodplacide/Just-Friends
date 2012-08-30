/* Author: Jarrod Placide-Raymond <royaltyclubvp@royalty-club.com>
 * Company: Royalty Club <http://royalty-club.com>
 * Last Modified:
 */
$(window).load(function() {
	$('#home #slider').nivoSlider({
		effect : 'fade',
		pauseTime : 3500,
		controlNav : false,
		pauseOnHover : true,
		randomStart : true
	});
	
	$('#costume_section #slider').nivoSlider({
		effect: 'fold',
		pauseTime: 3500,
		controlNav: true,
		controlNavThumbs: true,
		directionNav: true,
		pauseOnHover: true
	});
});

$(document).ready(function() {
	//Facebook SDK
	( function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id))
				return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=438941196150056";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	//Twitter SDK
	! function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = "//platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
		}
	}(document, "script", "twitter-wjs");
	//Fancybox
	$('a.fancybox').fancybox({
		type : 'image',
		fitToView: true,
		aspectRatio: true,
		loop: false,
		helpers: {
			title : {
				type: 'inside',	
			},
			buttons: {}
		}
	});
});

