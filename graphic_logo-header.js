<!-- Begin HEADER OPTIONS CODE

// NOTE: If you use a ' add a slash before it like this \'

// ONLY USE lowercase FOR ALL OPTIONS


// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON


var showlogo		= "yes"			// SHOW THE LOGO
var color		= "000000"		// HEADER BACKGROUND COLOR

var stripes	 	= "yes"			// SHOW STRIPES
var stripecolor 	= "FFFFFF"		// STRIPE COLOR
var showimage	 	= "no"			// SHOW HEADER IMAGE
var imagename		= "picts/main.jpg"	// HEADER IMAGE TO SHOW
var imageheight		= "100"			// HEIGHT OF THE IMAGE (IN PIXELS)

var spacer1		= "5"			// FIRST SPACER HEIGHT
var spacer2		= "30"			// SECOND SPACER HEIGHT

var flashheight		= "75"			// HEIGHT OF THE FLASH (IN PIXELS)
var flashwidth		= "750"			// WIDTH OF THE FLASH (IN PIXELS)



// COPYRIGHT 2006 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE


document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" BGCOLOR="#'+color+'"><tr><td>');

// START LOGO
   if (showlogo == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" BGCOLOR="#'+color+'"><tr><td align="left">');
document.write('<a href="http://www.hooklure.com/index.html"><img src="picts/logo.jpg" border="0"></a><br>');
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