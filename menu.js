<!-- // START MENU CODE

// NOTE: If you use a ' add a slash before it like this \'


StartMenu()


// MENU OPTIONS - you will find more options in the corporatestyle.css

MFL		= 0; 					// MENU DISTANCE FROM EDGE
MFT		= 64; 					// MENU DISTANCE FROM TOP
ALIGN		= "left"				// MENU LEFT OR RIGHT
TMH		=  20;					// TOP MENU HEIGHT
TMFS		= "12";					// TOP MENU FONT SIZE
TMFW		= "bold";				// TOP MENU FONT WEIGHT bold/normal
TMFF		= " arial, verdana, helvetica, sans";	// TOP MENU FONT FACE
TMC		= "FFFFFF";				// TOP MENU OFF FONT COLOR
TMBC		= "0000FF";				// TOP MENU OFF BACKGROUND COLOR
TMHC		= "000000";				// TOP MENU HOVER TEXT COLOR
TMHBC		= "F5CF7C";				// TOP MENU HOVER BACKGROUND COLOR
MO		=  TMH-2;				// Y MENU OVERLAP CHANGE NUMBER VALUE
SUBshift	=  0;					// SHIFT SUBMENU RIGHT



// START SUBMENU OPTIONS - you will find more options in the corporatestyle.css


SMH		= 22;					// SUB MENU HEIGHT
SMFS		= "9";					// SUB MENU FONT SIZE
SMFW		= "normal";				// SUB MENU FONT WEIGHT bold/normal
SMFF		= "arial,MS Sans Serif,sans-serif";	// SUB MENU FONT FACE
SMC		= "000000";				// SUB MENU OFF FONT COLOR
SMBC		= "FFFFFF";				// SUB MENU OFF BACKGROUND COLOR
SMHC		= "000000";				// SUB MENU HOVER TEXT COLOR
SMHBC		= "FFD854";				// SUB MENU HOVER BACKGROUND COLOR


SubMenu()




// START MENU NUMBER 1 COPY AND PASTE A GROUP TO ADD A NEW TOP LEVEL SEE NOTE BELOW




Top_Width[0]=100; Sub_Menu_Width[0]=150;
m[0]='Company';n[0]='http://www.hooklure.com/index.htm';st[0]="";s[0]=""
+l+"http://www.hooklure.com/index.htm"+r+" Home "+c
+l+"http://www.hooklure.com/about.htm"+r+" About Us "+c
+l+"http://www.hooklure.com/testimonials.htm"+r+" Testimonials "+c
+l+"http://www.hooklure.com/privacy.htm"+r+" Privacy Policy "+c





Top_Width[1]=100; Sub_Menu_Width[1]=150;
m[1]='Products';n[1]='http://www.hooklure.com/Trout_Flies.htm';st[1]="";s[1]=""
+l+"http://www.hooklure.com/Trout_Flies.htm"+r+" Trout Flies "+c
+l+"http://www.hooklure.com/Bass_Flies_and_Pike_Flies.htm"+r+" Bass and Pike Flies "+c
+l+"http://www.hooklure.com/Pike_Lures_Walleye_Lures_Musky_Lures.htm"+r+" Pike, Walleye, Musky Lures "+c
+l+"http://www.hooklure.com/Salmon_Flies.htm"+r+" Salmon Flies "+c
+l+"http://www.hooklure.com/Bottle_Cap_Fishing_Lures.htm"+r+" Bottle Cap Fishing Lures "+c






Top_Width[2]=100; Sub_Menu_Width[2]=150;
m[2]='Pictures';n[2]='http://www.hooklure.com/Customer_Picture_Gallery.htm';st[2]="";s[2]=""
+l+"http://www.hooklure.com/Customer_Picture_Gallery.htm"+r+" Customer Gallery "+c
+l+"http://www.hooklure.com/Kids_and_Family_Gallery.htm"+r+" Kids & Family Gallery "+c






Top_Width[3]=100;Sub_Menu_Width[3]=150;
m[3]='Contact';n[3]='http://www.hooklure.com/contact.htm';st[3]="";s[3]=""
+l+"http://www.hooklure.com/contact.htm"+r+" Contact Us "+c







// IF YOU ADD ANOTHER TOP LEVEL MENU YOU MUST ADD TO THE BOTTOM OF THIS LIST

ADJ[0]=MFL;
ADJ[1]=(Top_Width[0])+MFL;
ADJ[2]=(Top_Width[0]+Top_Width[1])+MFL;
ADJ[3]=(Top_Width[0]+Top_Width[1]+Top_Width[2])+MFL;
ADJ[4]=(Top_Width[0]+Top_Width[1]+Top_Width[2]+Top_Width[3])+MFL;

// ----------------------------------------------------------------
// YOU DO NOT NEED TO EDIT BELOW THIS LINE 2006 Allwebco Design
// ----------------------------------------------------------------




MENU=m.length

for (i=0; i < MENU; i++){


// START WRITING TOP LEVEL MENUS


document.write("<div style='position:absolute;"+ALIGN+":"+ADJ[i]+";top:"+MFT+";width:"+Top_Width[i]+"' onmouseover='o["+i+"].ShowMenu()' onmouseout='o["+i+"].HideMenu()'>")



document.write("<a class='menu_TOP' style='height:"+TMH+"; color:#"+TMC+"; background-color:#"+TMBC+"; font-size:"+TMFS+"pt; font-weight:"+TMFW+"; font-family: "+TMFF+"; "+spn+"' onmouseover=\"this.style.backgroundColor='#"+TMHBC+"';this.style.color='"+TMHC+"'\"  onmouseout=\"this.style.backgroundColor='#"+TMBC+"';this.style.color='"+TMC+"'\" href='"+n[i]+"'>"+m[i]+"</a></div>")



}


for (i=0; i < MENU; i++){

// START WRITING SUB MENUS


document.write("<div id='SUB"+i+"' class='menu_DIV' style='position: absolute; "+ALIGN+":"+(ADJ[i]+SUBshift)+";top:"+(MFT+MO)+";width:"+Sub_Menu_Width[i]+";background-color:#"+SMBC+";' onmouseover='o["+i+"].ShowMenu()' onmouseout='o["+i+"].HideMenu()'>"+s[i]+"</div>")


}



function StartMenu()
{

var D6=window,Y7=document;
function DETECT()
{
this.ver=navigator.appVersion;
this.agent=navigator.userAgent;
this.dom=Y7.getElementById?1:0;
this.opera5=this.agent.indexOf("Opera 5")>-1;
this.ie4=(Y7.all && !this.dom && !this.opera5)?1:0;
this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom && !this.opera5)?1:0;
this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom && !this.opera5)?1:0;
this.ie7=(this.ver.indexOf("MSIE 7")>-1 && this.dom && !this.opera5)?1:0;
this.ie=this.ie4||this.ie5||this.ie6||this.ie7;
this.mac=this.agent.indexOf("Mac")>-1;
this.ns6=(this.dom && parseInt(this.ver)>=5)?1:0;
this.ns4=(Y7.layers && !this.dom)?1:0;
this.BWD=(this.ie6||this.ie5||this.ie4||this.ns4||this.ns6||this.opera5);
return this
}
BWD=new DETECT();z=0;b=0;
spn="";
if(BWD.opera5||BWD.ns6)
{
b=2
};
if(BWD.ie)
{
spn=" width: 100%"
}else{
z=6
}

} 


function SubMenu()
{




l="<a class='menu_SUB' style='height:"+SMH+"; color:#"+SMC+"; background-color:#"+SMBC+"; font-size:"+SMFS+"pt; font-weight:"+SMFW+"; font-family: "+SMFF+";"+spn+"' onmouseover=\"this.style.backgroundColor='#"+SMHBC+"';this.style.color='"+SMHC+"'\"  onmouseout=\"this.style.backgroundColor='#"+SMBC+"';this.style.color='"+SMC+"'\" href='";

r="'>";
blr="' target='_blank'>";
c="</a>";


m=new Array();n=new Array();s=new Array();Sub_Menu_Width=new Array();su=new Array();st=new Array();Top_Width=new Array();ADJ=new Array()

}


function lib_obj(obj,nest){nest=(!nest) ? "":'document.'+nest+'.';this.evnt=BWD.dom? document.getElementById(obj):BWD.ie4?document.all[obj]:BWD.ns4?eval(nest+"document.layers." +obj):0;this.css=BWD.dom||BWD.ie4?this.evnt.style:this.evnt;this.ref=BWD.dom||BWD.ie4?document:this.css.document;this.x=parseInt(this.css.top)||this.css.pixeltop||this.evnt.offsettop||0;this.y=parseInt(this.css.left)||this.css.pixelleft||this.evnt.offsetleft||0;return this}
function lib_doc_size(){this.x=0;this.x2=BWD.ie && document.body.offsetWidth-20||innerWidth||0;this.y=0;this.y2=BWD.ie && document.body.offsetHeight-5||innerHeight||0;this.x50=this.x2/2;this.y50=this.y2/2;return this;}
lib_obj.prototype.ShowMenu = function(){this.css.visibility="visible"}
lib_obj.prototype.HideMenu = function(){this.css.visibility="hidden"}
function libinit(){page=new lib_doc_size();o=new Array();for (i=0; i < MENU; i++){o[i]=new lib_obj('SUB'+i);o[i].HideMenu()}}
libinit()


// END MENU CODE -->
