$(document).ready(function(){
	function changeImageSection () {
	var url = window.location.pathname;
	var UrlParts = window.location.pathname.split( '/' );
	var UrlLastItem = UrlParts.pop ();
	
	if (UrlLastItem == "about.html" || UrlLastItem == "about-en.html" ) {
		var wrapper = $(".w3l_banner_info");
		wrapper.addClass('image-about');
	}else {
		if(UrlLastItem == "portfolio.html" || UrlLastItem == "portfolio-en.html"){
			var wrapper = $(".w3l_banner_info");
			wrapper.addClass('image-portfolio');
		}else if (UrlLastItem == "tips.html" || UrlLastItem == "tips-en.html") {
			var wrapper = $(".w3l_banner_info");
			wrapper.addClass('image-tips');
		}else if (UrlLastItem == "contact.html" || UrlLastItem == "contact-en.html") {
			var wrapper = $(".w3l_banner_info");
			wrapper.addClass('image-contact');
		}
	}
}
	changeImageSection();   
});