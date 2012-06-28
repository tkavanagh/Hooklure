<!-- Begin POP-UP SIZES AND OPTIONS CODE


// ONLY USE lowercase FOR ALL OPTIONS


// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON


var slideshow_button 	= "no"		// SLIDESHOW BUTTON yes/no
var close_button 	= "yes"		// GALLERY CLOSE BUTTON ON/OFF
right_click_on		= "yes"		// GALLERY RIGHT CLICK PROTECTION ON
var viewerfaq	 	= "no"		// FAQ SECTION yes/FULL SCREEN OR no/POPUP MODE
var viewer	 	= "no"		// GALLERY yes/FULL SCREEN OR no/POPUP MODE


// OTHER OPTIONS YOU CAN CHANGE

var zoom	 	= "no"		// SHOW POPUP ZOOM LINKS
border_color		= "000000"	// GALLERY PICTURE OUTLINE COLOR
var background_colors	= "FFFFFF"	// BACKROUND COLOR OF THE GALLERY POPUP

var view_width 		= 700		// GALLERY POPUP WIDTH
var view_height 	= 500		// GALLERY POPUP HEIGHT
var slideshow_width 	= 700		// SLIDESHOW POPUP WINDOW WIDTH
var slideshow_height 	= 500		// SLIDESHOW POPUP WINDOW HEIGHT

var FAQ_width 		= 400		// FAQ POPUP HEIGHT
var FAQ_height 		= 450		// FAQ POPUP HEIGHT

var scrollbarS 		= "0"		// TURN ON POPUP SCROLLBARS "1" FOR ON "0" FOR OFF
var faqscrollbarS 	= "0"		// TURN ON FAQ SCROLLBARS "1" FOR ON "0" FOR OFF



// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// START POPUP CODE




function popUp(URL) {
   if (viewer == "no") {
var look='toolbar=0,scrollbars=' + scrollbarS + ',location=0,statusbar=0,menubar=0,resizable=1,width='+view_width+',height='+view_height+','
popwin=window.open("","",look)
}
else 
if (viewer == "yes") {
popwin=window.open("","")
}
popwin.document.open()
popwin.document.write('<html><head><title>Close Up</title>')
popwin.document.write('<link rel=StyleSheet href="corporatestyle.css" type="text/css" media="screen">')
   if (right_click_on == "yes") {
popwin.document.write('<META HTTP-EQUIV="imagetoolbar" CONTENT="no">')
popwin.document.write('<script language="JavaScript">')
popwin.document.write('function noRightClick() {')
popwin.document.write('if (event.button==2) {')
popwin.document.write('alert(\'You may not right mouse click this page.\')')
popwin.document.write('}')
popwin.document.write('}')
popwin.document.write('document.onmousedown=noRightClick')
popwin.document.write('</script>')
}
popwin.document.write('</head>')
popwin.document.write('<body bgcolor="#'+background_colors+'" leftmargin=0 rightmargin=0 topmargin=0 bottommargin=0 marginheight=0 marginwidth=0>')
popwin.document.write('<TABLE cellpadding=0 cellspacing=0 border=0 width="100%" height="100%" ><tr><td align="center">')
// ZOOM CODE
   if (zoom == "yes") {
browser_version= parseInt(navigator.appVersion);
browser_type = navigator.appName;
if (browser_type == "Microsoft Internet Explorer" && (browser_version >= 4) && (navigator.userAgent.indexOf("Windows") != -1)) {
popwin.document.write("<div id=\"ZOOM\">");
popwin.document.write("<a href=\"#\" onMouseOver=\"show.style.zoom='1.5'\" onMouseOut=\"show.style.zoom='1'\"><img src=\"picts/zoom-1.gif\" border=\"0\"></a>");
popwin.document.write("<a href=\"#\" onMouseOver=\"show.style.zoom='2.0'\" onMouseOut=\"show.style.zoom='1'\"><img src=\"picts/zoom-2.gif\" border=\"0\"></a>");
popwin.document.write("<a href=\"#\" onMouseOver=\"show.style.zoom='2.5'\" onMouseOut=\"show.style.zoom='1'\"><img src=\"picts/zoom-3.gif\" border=\"0\"></a>");
popwin.document.write("</div>");
}}
popwin.document.write('<br>')
popwin.document.write('<TABLE cellpadding="0" cellspacing="0" border="1" bordercolor="#' + border_color + '" style="border-collapse:collapse"><tr><td>')
popwin.document.write('<img src="'+URL+'" name="show">')
popwin.document.write('</td></tr></table>')
popwin.document.write('</td></tr><tr><td valign="bottom" align="center">')

popwin.document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td width="50%">')
   if (close_button == "yes") {
popwin.document.write('<br><form style="margin: 0px"><input type="button" value="Close" onClick=\'self.close()\' onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'" class="button-popups"></form>')
}
   if (slideshow_button == "yes" && close_button == "yes") {
popwin.document.write('</td><td td width="50%">')
}

   if (slideshow_button == "yes") {
popwin.document.write('<br><form action="slideshow.htm" style="margin: 0px"><input type="submit" value="Slideshow" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'" class="button-popups"></form>')
}
popwin.document.write('</td></tr></table>')
popwin.document.write('</td></tr></table>')
popwin.document.write('</body></html>')
popwin.document.close()
}



// START SLIDESHOW POPUP CODE


function popUpSlideshow(URL) {

day = new Date();
id = day.getTime();
   if (viewer == "no") {
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+slideshow_width+',height='+slideshow_height+'');");
}
else 
if (viewer == "yes") {
eval("page" + id + " = window.open(URL);");
}
}




// START FAQ POPUP



function popUpFAQ(URL) {
day = new Date();
id = day.getTime();
   if (viewerfaq == "no") {
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=' + faqscrollbarS + ',location=0,statusbar=0,menubar=0,resizable=1,width='+FAQ_width+',height='+FAQ_height+'');");
}
else 
if (viewerfaq == "yes") {
eval("page" + id + " = window.open(URL);");
}
}






//  End -->