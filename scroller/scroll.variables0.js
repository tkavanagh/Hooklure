var LOOK = {
	// scroller box size: [width, height]
	'size': [150, 178]
},

BEHAVE = {
	// autoscroll - true, on-demand - false
	'auto': true,
	// vertical - true, horizontal - false
	'vertical': true,
	// scrolling speed, pixels per 40 milliseconds;
	// for auto mode use negative value to reverse scrolling direction
	'speed': 1
},

// a data to build scroll window content
ITEMS = [
	{	// file to get content for item from; if is set 'content' property doesn't matter
		// only body of HTML document is taken to become scroller item content
		// note: external files require time for loading 
		// it is RECOMMENDED to use content property to speed loading up
		// please, DON'T forget to set ALL IMAGE SIZES 
		// in either external file or in 'content' string for scroller script 
		// to be able to estimate item sizes
		'file': '../scroller/scroller3.html',
		'content': '',
		'pause_b': 2,
		'pause_a': 1
	},
	{
		'file': '../scroller/scroller2.html',
		'content': '',
		'pause_b': 2,
		'pause_a': 1
	},
	{
		'file': '../scroller/scroller1.html',
		'content': '',
		'pause_b': 2,
		'pause_a': 1
	}
]