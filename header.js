<!-- Begin HEADER OPTIONS CODE

// NOTE: If you use a ' add a slash before it like this \'

// ONLY USE lowercase FOR ALL OPTIONS


// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON


var showflash		= "yes"			// SHOW THE FLASH ANIMATION
var flashcolor		= "000000"		// FLASH BACKGROUND COLOR
var color		= "000000"		// HEADER BACKGROUND COLOR

var stripes	 	= "yes"			// SHOW STRIPES
var stripecolor 	= "000000"		// STRIPE COLOR
var showimage	 	= "no"			// SHOW HEADER IMAGE
var imagename		= "picts/main.jpg"	// HEADER IMAGE TO SHOW
var imageheight		= "100"			// HEIGHT OF THE IMAGE (IN PIXELS)


var spacer1		= "0"			// FIRST SPACER HEIGHT
var spacer2		= "0"			// SECOND SPACER HEIGHT

var flashheight		= "60"			// HEIGHT OF THE FLASH (IN PIXELS)
var flashwidth		= "900"			// WIDTH OF THE FLASH (IN PIXELS)



// COPYRIGHT 2006 © Hook Lure
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE





document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" BGCOLOR="#'+color+'"><tr><td>');

// START FLASH ANIMATION
   if (showflash == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" BGCOLOR="#'+flashcolor+'"><tr><td align="left">');
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" id="logo">');
document.write('<PARAM NAME=movie VALUE="logo.swf">');
document.write('<PARAM NAME=quality VALUE=high> <PARAM NAME=bgcolor VALUE=#'+flashcolor+'>');
document.write('<EMBED src="logo.swf" quality=high bgcolor=#'+flashcolor+'  WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" NAME="logo" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">');
document.write('</EMBED>');
document.write('</OBJECT><br>');
document.write('</td></tr></table>');
}


// FIRST SPACER
document.write('<IMG SRC="picts/spacer.gif" height="'+spacer1+'" width="10"><br>');



// FIRST STRIPE
   if (stripes == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#'+stripecolor+'"><tr><td>');
document.write('<IMG SRC="picts/spacer.gif" border="0" width="10" height="1"><br>');
document.write('</td></tr></table>');
}


// JPG PICTURE AREA
   if (showimage == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" background="'+imagename+'"><tr><td>');
document.write('<IMG SRC="picts/spacer.gif" border="0" width="10" height="'+imageheight+'"><br>');
document.write('</td></tr></table>');
}


// SECOND STRIPE
   if (stripes == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#'+stripecolor+'"><tr><td>');
document.write('<IMG SRC="picts/spacer.gif" border="0" width="10" height="1"><br>');
document.write('</td></tr></table>');
}



// SECOND SPACER
document.write('<IMG SRC="picts/spacer.gif" height="'+spacer2+'" width="10"><br>');

document.write('</td></tr></table>');

//  End -->