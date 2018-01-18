var url = window.location.pathname;
var UrlParts = window.location.pathname.split( '/' );
var UrlLastItem = UrlParts.pop ();
console.log(UrlLastItem);