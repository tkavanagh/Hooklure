<!-- Begin


if (document.images) {


nexton = new Image();
nexton.src = "picts/next-on.gif"

nextoff = new Image();
nextoff.src = "picts/next-off.gif"

backon = new Image();
backon.src = "picts/back-on.gif"

backoff = new Image();
backoff.src = "picts/back-off.gif"

productson = new Image();
productson.src = "picts/products-on.gif"

productsoff = new Image();
productsoff.src = "picts/products-off.gif"

topon = new Image();
topon.src = "picts/top-on.gif"

topoff = new Image();
topoff.src = "picts/top-off.gif"


}

function img_act(imgName) {
if (document.images) {
imgOn = eval(imgName + "on.src");
document [imgName].src = imgOn;
}
}

function img_inact(imgName) {
if (document.images) {
imgOff = eval(imgName + "off.src");
document [imgName].src = imgOff;
}
}

// -->