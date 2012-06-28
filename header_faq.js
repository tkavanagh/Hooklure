<!-- Begin FLASH sub logo

// NOTE: If you use a ' add a slash before it like this \'



var headercolor		= "000000"	// LOGO HEADER COLOR
var flashwidth		= "380"		// WIDTH OF THE FLASH LOGO
var flashheight		= "60"		// HEIGHT OF THE FLASH LOGO
var linecolor		= "0000FF"	// LINE UNDER THE FLASH COLOR
var lineheight		= "1"		// HEIGHT OF THE LINE




document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#'+headercolor+'"><tr><td>');
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" id="faqlogo" ALIGN="">');
document.write('<PARAM NAME=movie VALUE="faqlogo.swf">');
document.write('<PARAM NAME=quality VALUE=high>');
document.write('<PARAM NAME=wmode VALUE=transparent>');
document.write('<PARAM NAME=bgcolor VALUE=#'+headercolor+'>');
document.write('<EMBED src="faqlogo.swf" quality=high wmode=transparent bgcolor=#'+headercolor+'  WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" NAME="faqlogo" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">');
document.write('</EMBED>');
document.write('</OBJECT><br>');
document.write('</td></tr><tr><td bgcolor="#'+linecolor+'" height="'+lineheight+'">');
document.write('<img src="picts/spacer.gif" height="'+lineheight+'" WIDTH="10"><br>');
document.write('</tr></td></table>');

//  End -->