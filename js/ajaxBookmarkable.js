/*

Copyright 2010 , Shankar Ambady

This script detects any hash tags that are created in an ajax site and upon reloading the page, it refreshes the page with the hash parametes passed in as GET queries. 
It is then up to the server to process and use the passed in GET params.
This is useful for creating sites that have ajax loaded content but at the same time need to be bookmarkable.

USAGE:
<script>
	$.ajaxBookmarkable();
</script>



*/

	$.ajaxBookmarkable =  function() { /* checks for any "hash params in url and if so changed them into GET params and resubmits page */
	        if(window.location.hash.toString().match(/=/g)){
	            	var arr = window.location.hash.toString().split('\#');
	             	var linka = window.location.protocol + "//" + window.location.host + window.location.pathname;
	             	window.location.replace(linka + '?' + arr[1]);
	        }
			return false;
	}