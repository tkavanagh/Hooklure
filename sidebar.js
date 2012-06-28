<!-- Begin POP-UP SIZES AND OPTIONS CODE


// ONLY USE lowercase FOR ALL OPTIONS


// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON


var paragraph_1 	= "yes"		// SHOW THE 1ST PARAGRAPH
var paragraph_2 	= "no"		// SHOW THE 2ND PARAGRAPH
var showimage		= "yes"		// SHOW A SIDEBAR IMAGE
var showscroller	= "no"		// SHOW A SIDEBAR IMAGE
var spacing		= "20"		// SPACING BETWEEN ELEMENTS
var scrollspacing	= "38"		// NUDGE SIDEBAR DOWN
var bordercolor		= "000000"	// SCROLLER AND IMAGE BORDER COLOR

var showproducts	= "no"		// SHOW PRODUCTS BUTTON
var productsX		= "0"		// PRODUCTS BUTTON X LOCATION
var productsy		= "200"		// PRODUCTS BUTTON Y LOCATION
var productslink	= "Product Index.htm"	// PAGE LINK FOR THE PRODUCTS BUTTON

var showsearch		= "no"		// SHOW THE SEARCH FORM
var searchLR		= "left"	// SEARCH FORM LEFT OR RIGHT
var searchX		= "65"		// SEARCH FORM X LOCATION
var searchy		= "200"		// SEARCH FORM Y LOCATION
var searchcolor		= "000000"	// SEARCH FORM COLOR




// EDIT THE "scroll.variables0.js" FOR SCROLLER OPTIONS




// SEARCH FORM
   if (showsearch == "yes") {

document.write('<div id="search" style="'+searchLR+': '+searchX+'px; POSITION: absolute; TOP: '+searchy+'px; width: auto; z-index: 1;" class="printhide">')
document.write('<TABLE cellpadding="0" cellspacing="3" border="0" bgcolor="#'+searchcolor+'" width="147"><tr><td colspan="2">')
document.write('<img src="picts/sidebar-search.gif" border="0" width="147" height="20"><br>')
document.write('</td></tr><tr><td align="center">')
document.write('<form action="http://www.google.com/search" name="f" target="_blank" style="margin: 0px">')
document.write('<input type="hidden" name="any selected">')
document.write('<input size="15" name="q" value="" class="searchform">&nbsp;<input type=submit value="Go!" name="btnG" class="searchbutton"><br>')
document.write('</form>')
document.write('</td></tr></table>')
document.write('<img src="picts/spacer.gif" height="'+spacing+'" width="10"><br>')
document.write('</div>')
}



// NUDGE SPACER
document.write('<img src="picts/spacer.gif" height="'+scrollspacing+'" width="10"><br>')



// SCROLLER CODE

if (navigator.userAgent.indexOf('Safari') != -1)     
{
document.write('<br>')
}
else {

   if (showscroller == "yes") {

document.write('<TABLE cellpadding="0" cellspacing="0" border="1" bordercolor="#'+bordercolor+'" style="border-collapse:collapse"><tr><td>')
Tscroll_init (0)
document.write('</td></tr></table>')
document.write('<br><br>')

}
}




// START SIDEBAR AREA PARAGRAPH 1 EDIT THIS AREA

   if (paragraph_1 == "yes") {

document.write('<span class="sidebartitle">')

document.write('Your Pictures')

document.write('<br></span><span class="sidebartext"><p class="just">')

document.write('Send us your Hook Lure catch pictures and we will proudly post them in our Customer Gallery.  Include the story and which HookLure product you used.<br><p>E-Mail to:<br><a href="mailto:Pictures@HookLure.com"><u>Pictures@HookLure.com</u></a>')

document.write('</p>')

document.write('</span>')

document.write('<img src="picts/spacer.gif" height="'+spacing+'" width="10"><br>')

}
// END SIDEBAR AREA PARAGRAPH 1


// SMALL PICTURE AREA
   if (showimage == "yes") {

document.write('<br><TABLE cellpadding="0" cellspacing="0" border="1" bordercolor="#'+bordercolor+'" style="border-collapse: collapse"><tr><td>')
document.write('<a href="http://www.hooklure.com/Customer_Picture_Gallery.htm"><IMG SRC="picts/sidebar.jpg" border="0" width="150"></a><br>')
document.write('</td></tr></table>')
document.write('<img src="picts/spacer.gif" height="'+spacing+'" width="10"><br>')
}


// START SIDEBAR AREA PARAGRAPH 2 EDIT THIS AREA

   if (paragraph_2 == "yes") {

document.write('<span class="sidebartitle">')

document.write('Best Picture')

document.write('<BR></span><span class="sidebartext"><p class="just">')

document.write('Please send us your fishing pictures and we will do our best to publish them in our Customer Picture Gallery for you !')

document.write('</p>')

document.write('</span>')

document.write('<img src="picts/spacer.gif" height="'+spacing+'" width="10"><br>')
}
// END SIDEBAR AREA PARAGRAPH 2




// START PRODUCTS BUTTON

   if (showproducts == "yes") {
document.write('<div id="products" style="right: '+productsX+'px; POSITION: absolute; TOP: '+productsy+'px; width: auto; z-index: 1;" class="printhide">')
document.write('<TABLE cellpadding="0" cellspacing="0" border="0"><tr><td>')
document.write('<A HREF="'+productslink+'" ONMOUSEOVER="img_act(\'products\')" ONMOUSEOUT="img_inact(\'products\')"><img name="products" border="0" src="picts/products-off.gif"></a><br>')
document.write('</td></tr></table>')
document.write('</div>')
}

// END FILE