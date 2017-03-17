(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"东标__atlas_", frames: [[0,0,1334,646],[0,1296,752,646],[0,648,1334,646]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.setsgdsdg = function() {
	this.spriteSheet = ss["东标__atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.setwegetw = function() {
	this.spriteSheet = ss["东标__atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.背景图 = function() {
	this.spriteSheet = ss["东标__atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ArnFdQAygKBPgsQCdhXCQipQCQioHWh+QDsg/DPge");
	this.shape.setTransform(74.9,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(-1.8,0,153.3,74.2), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ABQrnIAAFUQhAC7guDqQhfHXBWD3");
	this.shape.setTransform(10.3,74.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,-2.2,20.6,152.5), null);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Al0EaQhJhhA4iYQA5iXCbh0QCah1ChgOQCggOBLBiQBJBig4CXQg6CXiaB1QiaB0ihAOQgTACgSAAQiFAAhBhWg");
	this.shape.setTransform(41.3,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(-0.1,0,82.9,73.6), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4).p("AGdgmQhFCciqB7QiqB6iqARQirAQhIhkQhIhkBFieQBFicCqh6QCqh7CqgQQCrgQBIBkQBIBkhFCdg");
	this.shape.setTransform(46.6,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AmZEoQhIhkBFieQBFicCqh6QCqh7CqgQQCrgQBIBkQBIBkhFCeQhFCciqB6QiqB7iqAPQgYADgWAAQiHAAg+hWg");
	this.shape_1.setTransform(46.6,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(-0.1,-1.7,97.9,83.3), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkoCzQAjAOA8gIQB6gPCChqQCDhpA6hsQAcg2ADggQAzBEgwBrQgvBoh1BZQhzBYh4ANQgUACgRAAQhbAAgrg5g");
	this.shape.setTransform(29.7,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,59.4,47.3), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("Almj5QA5AoByBkQA5AyAtAqQCWBZCuBzQFdDlB2B7QhyghiMgdQkZg5iDAbQkuidlJi3IiIiFICkn7QAcA4AoA/QBQB+A5Ang");
	this.shape.setTransform(73.9,56);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,147.8,111.9), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("APjFRQhEBfiGApQieAwifhIQiNhAiugZQiigQgqgKQgMgDgWAFQgkAIgOACQhTALh4gnQgvglhIgxQiRhiiJg+QiCjbi2lWIUgB9QBsAOBiAUQE9BBB2BpQCBBzAMCdQAJCEhBBdg");
	this.shape.setTransform(106.2,50.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0.1,213,100.3), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("Ai6xdQATCLCDELQBPCiCkEfQBWCXB3GBQBREHAFAOQAtCMAfA+QA8B5CVDhQBLBxA+BZQghBLhNAwQiaBgjZiEQmKp7hoijQgWgihjh4QhoiAhChgQjilKhIltIkHlqQgZidAnicQBQk4FDAHQBGAhBJA8QCTB5ASCEg");
	this.shape.setTransform(93,147.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(-0.1,0,186.3,294.9), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AAkGQQgvgWgYgFQgsgKhBAHQg6AGhbAXQiXAmgBAAQi2AphxgwIgcqTQArAlA9AZQB6AzBag2QBag2AZhzQANg5gGgvIDlCrIECCGQEPCOA9AyIB0AEQB4ALAUAfQAUAgAEBsQACA1gCAwQgxAZhVAZQiqAzi0ABQiWABhjgsg");
	this.shape.setTransform(78,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,156.3,93.2), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Ak5DuQgng0BAhrQBAhpCBhjQCBhiB4ghQB4ghAoA1QAoA0hBBqQhABqiBBiQiBBjh4AgQguANgjAAQg2AAgZggg");
	this.shape.setTransform(32.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(-0.1,-0.1,65.8,54), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AnegpQB5gJC2AHQFrAOE0BN");
	this.shape_1.setTransform(48,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(-2.1,0,102,14), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AI5OeIkyoEQhkhihkiPQjHkfAAjnQhRjni2i+QhbhfhKgx");
	this.shape_1.setTransform(57.8,93.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(-1,-0.3,117.9,188.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Al7EMQgTgcgFglIgBgeQAtARBLgBQCWgCCVheQC8h1BBioQAghUgFg8IAOgBQASACAPALQAyAjANBxQAFAtguBQQguBPhOBQQi/DFjBAcQgmAFghAAQh1AAgvhGg");
	this.shape.setTransform(40.6,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0.1,0.1,81.1,67.6), null);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8MICIiiD/Ih7AMID6mHIiXAPIAPg+IIBgyIgPA+IjxAYIg0BRIBegJIhcGLIhzAMgA2CK1IgmhLIAujHIgVACIAPg/IAVgCIAShLIBdgKIgRBMIAjgDIARhMIBfgKIgRBNIAUgCIgOA/IgVACIgwDOIhGBSIA2BtIhxALIgQgjIghAoIhzALgA0bGaIgoCqIANAZIAVgaIApisgAxcEEID1gXIh8IWIj1AYgAwEE8IhfGXIAogDIBemYgAryIjICEgNIitDbIiGANgA6EGnIBxgLIAGE+IhyALgApaH/IkFAZIAOg7IDHgUIAYhnIhNAHIgmBRIhxALIBljTIBxgLIggBDIA8gGIAUhXIBzgLIgTBXICugRIgOA+IivARIgYBnIDIgTIgPA8IiIANIgmCoICUgPIglA+IjyAYgAjSKCIBkgKIAKgvIjTAVIANg4IDTgVIAGgZIBZghIkDAaIANg1IHDgsIgOA2IitBAIDOgUIgMA4IjPAUIgXBnIi4ASgAHMINIh3hCICngQIAwAaIBdg3IkzAeIAJgnIghADIAdh7IA1gEIgMhPIBygKIAKBOIAzgGIgMhOIBxgLIALBPIATgCIA8hVIB1gLIg8BUIAxgEIgdB6IgZADIgMAyIilBiICoBaIipAQIhdgyIh4BGIioARgAG7FOIgLArIEmgdIALgrgANoIVIF+glIAUhVIlpAjIANg6IFpgjIAThUIl4AlIANg6IC/gSIAujIIBtgKIguDHIC8gSIhPFXIntAvgAamAvIibAOIAPg+IIPgyIgOA+IkAAZIhuHZIh1ALgAjNEVIHTgtIghCQInTAugAhrE/IgJAmID3gYIAJgmgAcqCFIB2gMIAmEVIh3ALgAjXDKIDMgTIgFgjIB5gLIAEAiIDGgUIgNA5IoJAygAPSBJIBygMIAZCJIhyALgAGECCIF/glIAQgWIB5gMIg1BSIngAugAVaAiIBzgLIhcCUIh0ALgA9DgWIg6AGICgjDIhsALIAQhEICXgPIArg1Ig+AHIAOg3Ih8ALIARhFIB7gMIAMg5ICFgNIgNA6IBqgLIANg6ICIgMIgOA5IB2gLIgQBEIh2AMIgMA3IiIANIANg3IhqAKIgKAqIBdgJIg2BDIEzgeIgQBFIlfAhIhKBdIF0gkIg6D9IoWA0gA64g7IgaBxIELgaIAahygAweklIgtAEICcknICLgOIiMEEIAegCIhbGGIiDANgAtngDIhwAKIBuk6IB1gLIhhEbIAsgFIBZl9IB8gMIhqHGIidAPgAkLk8IhFAHIChjgIhnAJIARhGICLgOIAwhCICWgPIgxBDIFaghIgRBGIl+AlIgxBFIGCglIhpHEIjxAXIgPhBICJgOIANg7IkQAbIgeCAIiHANgAiPkaIgNA8IEQgaIAPg9gAhymWIgNA7IERgbIAOg7gApclNIB1gLIgoE0Ih3AMgAHQjaIA7kAIg1AEIARhJIC3gSIhQFbIANAKIBRjvIB0gLIhRDvIhzAMIAmAZIGNgnIg2BLIl5AlIg8gqIgkAzIiRAOgAS2kLIB8oUIJNg6IgvDMInLAtIgLAxIHWguIhZGBIjUAUIgNgvIjRAUIA1jkIEdgbIgxDQIAggDIA5j4IlVAiIg1DnIgtBYIiHANgAXemOIgVBdIA0gGIAWhcgAWlrmIgQBAIFDgfIAPhAgAMyngIiYAPIAQhHICZgPIAyjZICCgMIgyDZICRgOIgQBHIiRAOIg/EPIiDAMgAO6nVIBygLIgbDqIhzALgAr6paICDgNIgmBGID4gYIgoCvIh8AMIAYhlIiVAOIhBB6IiDAMgALUrZIBygLIgLCpIh0ALgAIOrdICLgOIAbCbIiJANgAQYr5IBvgKIhBCuIhxALg");
	this.shape.setTransform(218,100.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件64, new cjs.Rectangle(9,15.2,417.9,171.5), null);


(lib.元件63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AAAG8QiBgBhOhMQhPhNABhyQAAhUAsg5QArg5BPgUQhCgYggguQgggtABg/QAAheBFhBQBEhABwAAQByABBFBDQBFBCAABfQgBA8gfAtQghAshAAZQBQAaApA5QApA6AABRQgBBvhOBMQhPBLh+AAIgCAAgAh9A1QgyAyAABLQgBAtAWArQAVArArAYQAqAXAwAAQBNAAAygwQAygyAAhLQAAhNgygzQg0gzhMAAQhLAAgxAxgAhik8QgpAnAAA2QgBA+AoAnQAnAoA/AAQA9AAApgmQAngnAAg4QAAg7gogoQgogog9gBQg8AAgoAng");
	this.shape.setTransform(238.9,70.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("AgBG8Qh+gBhHhbQhVhsABj0QABiaAgheQAgheA/gyQA/gzBdAAQBGABA1AdQA0AcAjA1QAiA1ATBNQATBMgBCAQAACZggBeQggBeg/AzQg+AyheAAIgBAAgAh0klQg3BQgCDVQgBDWAyBHQAyBHBJAAQBJAAAyhGQAzhHABjWQABjVgyhHQgyhHhKAAQhJAAgsA9g");
	this.shape_1.setTransform(171.3,70.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCCC").s().p("AgBG8Qh+gBhHhbQhVhsABj0QABiaAgheQAgheA/gyQA/gzBdAAQBGABA1AdQA0AcAjA1QAiA1ATBNQATBMgBCAQAACZggBeQggBeg/AzQg+AyheAAIgBAAgAh0klQg3BQgCDVQgBDWAyBHQAyBHBJAAQBJAAAyhGQAzhHABjWQABjVgyhHQgyhHhKAAQhJAAgsA9g");
	this.shape_2.setTransform(103.8,70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("ABLGyIABjQIl4gCIABhiIGOowIBXABIgDIyIB2AAIgBBiIh1AAIgBDQgAjCB/IEPABIACmGg");
	this.shape_3.setTransform(34.4,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件63, new cjs.Rectangle(0.1,0,276.1,142.1), null);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AE/BOQgsgQgugZQhpg4gMg4QgDgqgFgdQgIg5gYggQg0hGhihNIhZg/IgEA3QgHBDgNA6QgqC5heAZIARBFQAZBUAmBLQB4DtDHAsQAMgNAPggQAehBANhkIAQgfQAVglAXgdQBBhTA0AOQAGABAFAD");
	this.shape.setTransform(15.4,20.9,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(-1.6,-1.4,33.5,50.9), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AAYCmQhBASgdiAQgMgzABgyQABg0ANgZQAohKA6AvQAeAXAVAn");
	this.shape.setTransform(19.3,36.1,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(2).p("AC/pjQByBCBaB4IBEC4QBAC8gVAZQgUAagKAuQgFAYgBASIgLBpIAjBFQAfBHgRALQgRALggABIgbgCIgCArQgHAsgfADIAQAbQAHAhgmAcIgFAPQgFATAGAVQAHAdgVAZQgZAeg5AKQg/AKh9g1QiAg3huhZIg1jDQiiiMhZhYQgWgWgQg4QgSg7gDhHQgIizBOh7QBOh5Bsg+QBog7B1AEQB0ADBuBBg");
	this.shape_1.setTransform(24.1,31.9,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(-1,-3.2,50.4,72.4), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(3).p("Ap/snQAai3Beh+QA3hJBvglQB5goCCAYQCUAcB6BuQCNB/BYDeQBGCygNDFQgHBigVA/IAvBHQA4BbAoBhQCAE6hLELQhmFvifCpQhPBUg7AKQhihkhwjEQjdmIhCniQhLg2hThlQimjLgmjrQgYiXAViQg");
	this.shape.setTransform(44.7,86.1,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(-2.9,-4.5,93.8,182.1), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AoImBQgOBGBJgCQAogCBKg1QAVgPB2hhQBZhIAzgbQBIgnAqAUIArBbQA1BwA3BmQCyFECEBmQCEBmAPCiQAHBQgTA8QhnAsiNAVQkZAri5hsQhfg3hLhFQgFgFhbhfQgrgtghgLQgrgNhDAYQg4ATgqhmQglhZAAhYQAAg7BXjYIAwhyQABgFABgFQAGgZAQgeIAOgZg");
	this.shape.setTransform(45.2,42,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(-2.1,-1,93.5,86.6), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(5).p("ACGuMIgYAyQgdBAgcBNQhaD0gwEJQgcCZASFAQAKChAPCCIg8Fo");
	this.shape.setTransform(23.7,81.9,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AlGDHIALgzIAHgZQADgNAEgMIAghiQAuhxArhKQAKgTARgaIAcgrIA4hNIFIgEIAYBQIBCDTIgLAtIh7j2QhfAFh8gFQiBBChpDnQhCCRgrC1QAEhNARhRg");
	this.shape_1.setTransform(50.4,66.6,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AmgDeQAalvCXlxQAwAUC0CCIDqgFIDIiCIh7ILIhGkvIi7gDIiugCIgKAAIgGAHQgxBCgOAVIgdAtQgQAbgKATIgZAvIgXAxIgUAwIgSAzQggBegQBxQgMBlAGBQIgGAfQgShuANi3g");
	this.shape_2.setTransform(54.1,59.3,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AiCCrQgwgugmg6IgcgwIAok7QA4DhDKCaQBlBOBaAgIgeBkQgcAEgcAAQifAAiCh+g");
	this.shape_3.setTransform(17.1,185.3,0.688,0.688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32FFEB").s().p("AAtExQjMhXhsjgIA3lUIAgBMQArBbAzBPQCkD8C+AhIgoCiIgFAAQhPAAhjgqg");
	this.shape_4.setTransform(23.4,153.7,0.688,0.688);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(2).p("Agz2EQCxjACkAAQCwAABYCQQAjA5AMBCQALA+gMAuQgOA6h6IIQiFIYhgDkQhgDkixJzQhZE5hGEMQhbAzhgAFQjBAJgYjkQgVjNBWocQA6lpACgMQAai0gGg+QgEglgTh5QgShxgGhKQgUjwBDjHQBCjGBniYQAggvAhglIAZgcQA5hgBZhgg");
	this.shape_5.setTransform(41.7,110.4,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(-1,-1,87.4,222.9), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(5).p("AnRs9Ig9A6QhHBMgyBXQigEWBwEZQBxEYIcEWQENCKD3BTIEdBf");
	this.shape.setTransform(61.8,65.4,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AH3LvIhakYQk/hYkBjEQkZjUgvjkQgiimBRizQAZg3AigzIAdgn");
	this.shape_1.setTransform(66.4,66.3,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("ABrJQQoVj+iMlIQhvkCCfkjQAyhbBHhUIA9hBIBzBVIgfAoQglA1gbA9QhWDAApDCQBBE0GiD7QDSB+DEBAIBVC5Qjvg9kLh/g");
	this.shape_2.setTransform(52.7,62.2,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(2).p("AlMtiQlnixhuA5IguAkQg4AxgyBBQigDNgnEYQgoEcBaCzQAeA7AwA3QAZAcAlAnQBNBhCIBnQDQCeDnBEQFkBpHXCPIB5AVQCPATBugKQFhgehkkuQhlkulrkIQhxhTh+hDIhog1IlNo+Qichji0hZg");
	this.shape_3.setTransform(80.2,68.9,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(-1.5,-1,163,139.7), null);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AgUgzIgShSIAYgBQAbACASATQATASggB1QgRA7gTA3QANhYgPhjg");
	this.shape.setTransform(105.6,93.3,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AhyHiQAkg9AVjxIAOjkQg4hRgxjlIgmjUQAYBLCECmQBBBTA9BEIBaGtQAHBehiB6QgxA9gxArg");
	this.shape_1.setTransform(22.4,155.9,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AjhB4QAPgoA+g3QB9htDthLIAMAlQhVAahaAwQixBfgTBxg");
	this.shape_2.setTransform(65.2,45.2,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AgRC4Qhii+hUg3QAZgzA1g/QBoh9CIg+IAfA2QAiA7AQAaQgLAQgPAdQgfA5gYBCQhNDQAVDSQgghUgwhfg");
	this.shape_3.setTransform(74.7,67.3,0.688,0.688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AB4lKQgKAegbBOQgXBDAAAZIAZBoQAeBwAZArQAgA4BYCQQAABGglAtQhLBai7h9QhrhHgziEQgdhLgUiDQgIg5gDg3IgCgsQAxgdA5g1QByhpAnhyIAEATQAHAWALATQAkA9A+AGg");
	this.shape_4.setTransform(97.1,31.5,0.688,0.688);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(2).p("AqnugQB1iLBbgmQBrguD6hRQEEhWA2gFIAGBUQALBmAaBaQBWEhDXA/QB3AkAohMQAUgmgEgtIAWgIQAbgIAbABQBWACAwBTQAwBTg9CZQgfBMgoA7IgFA9QgJBLgQBHQg0DjhyBpQi2CogqAcIgsDAIgkCIQgxChhDCBQjXGak5hIQk5hIiBh4QgpglgRgmIgJgeQhLqSgXhcQgFgUgMhrQgQiIgGh/QgUmHBJhzQB8jABZhrg");
	this.shape_5.setTransform(65.4,111.8,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件54, new cjs.Rectangle(-1.2,-3.3,134.3,207.4), null);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Egh0ADUIDvgaIi4H0IjvAZgAvlJCIhUAJIBRimICGgNIhNCdIiGCKIguAEgA9WBsID4gbIAbidIklAgIAWiBIEmgfIAaiZIj7AbIAVh+IJWhBIDThVIhsDGIjlAZIgbCZIEkggIh2CLIjFAVIgbCdIEegfIhiIzIkUAeIBKmwIjbAYIg0EuIDkiHIkLELIkHAcgAHhn6IDNgXIihOjIj3D6gAqWgiIAAAAIgnhhIEageIiBItICpgSIiBCGIkYAfgAA3AwIDfgYIi2C2IAqgEIBWDmIjAAVIgyiEIibCbIjkAYgAMDAEIh2ANIAShlIB6gOIAkjMIg/AHIAShoIA/gGIAYiQIDMAmIgOBSIELgcIg2EzIBngLIhVBtIkyAiIgeA0IB0gNIB5E0IjBAVIhejmIiSEBIjCAVgAQKlEIgkDMIA9gHIAkjMgAVigRIDHgWIhVFNIjHAWgAYSC2IB/gOIA0ktIlqAoIAkgyIBBmhIKuhLIC/hLIhNCkIpjBDIgtEBICHgPIAjjLIDvgaIgjDLIFKgkIhdBxIkAAcIhGGWIk8AjgAjAAEIiyATIAUhsICqiqIieARIARhkIDEgWIAihXIDLgXIggBYIErghIhoBuIjlAZIizCzIA2gGIBlhkIDYgYIneHaIjXAYgEAgRgBcIDDgVIgzFJIjGAWgEgiZgB0IDzgaIAxEYIjtAagAFak7IBMgIIg5EdIhIAIgAKxmCIBLgIIg2ETIhIAHgEghhgHdIDygbIA9ErIjxAagAqclAIEegdIgcCBIkcAdg");
	this.shape.setTransform(234.9,71.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(0,0,469.8,142.3), null);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(1.5).p("Egp7gDKQADAFlKDEQlJDDADAEUAAEAAHAyOgADUAn/gABANrgABIrAmS");
	this.shape.setTransform(333.7,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件52, new cjs.Rectangle(-1,-1,669,42.6), null);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(180.6,81.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,1,428.1,161.4);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AAAG8QiBgBhOhMQhPhNABhyQAAhUAsg5QArg5BPgUQhCgYggguQgggtABg/QAAheBFhBQBEhABwAAQByABBFBDQBFBCAABfQgBA8gfAtQghAshAAZQBQAaApA5QApA6AABRQgBBvhOBMQhPBLh+AAIgCAAgAh9A1QgyAyAABLQgBAtAWArQAVArArAYQAqAXAwAAQBNAAAygwQAygyAAhLQAAhNgygzQg0gzhMAAQhLAAgxAxgAhik8QgpAnAAA2QgBA+AoAnQAnAoA/AAQA9AAApgmQAngnAAg4QAAg7gogoQgogog9gBQg8AAgoAng");
	this.shape.setTransform(238.9,70.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("AgBG8Qh+gBhHhbQhVhsABj0QABiaAgheQAgheA/gyQA/gzBdAAQBGABA1AdQA0AcAjA1QAiA1ATBNQATBMgBCAQAACZggBeQggBeg/AzQg+AyheAAIgBAAgAh0klQg3BQgCDVQgBDWAyBHQAyBHBJAAQBJAAAyhGQAzhHABjWQABjVgyhHQgyhHhKAAQhJAAgsA9g");
	this.shape_1.setTransform(171.3,70.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCCC").s().p("AgBG8Qh+gBhHhbQhVhsABj0QABiaAgheQAgheA/gyQA/gzBdAAQBGABA1AdQA0AcAjA1QAiA1ATBNQATBMgBCAQAACZggBeQggBeg/AzQg+AyheAAIgBAAgAh0klQg3BQgCDVQgBDWAyBHQAyBHBJAAQBJAAAyhGQAzhHABjWQABjVgyhHQgyhHhKAAQhJAAgsA9g");
	this.shape_2.setTransform(103.8,70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("AgJG8QhygBhLhEQhMhFgKhsIBrgOQASBbAsAoQAsAoBAAAQBKABA0g0QA0g0AAhNQAAhKgvgvQgwgwhKgBQgdAAgtAMIAMhdIARABQBDABA3gkQA3gjAAhKQAAg6gngnQgogng9AAQg/AAgpAmQgqAngMBPIhrgUQAUhrBGg6QBGg8BnABQBGAAA8AgQA7AeAgA1QAfA1AAA7QAAA4gfAvQgeAtg8AcQBNASArA3QAqA4AABUQgBByhTBPQhTBOh8AAIgDAAg");
	this.shape_3.setTransform(36.4,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,276.1,142.1);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.setwegetw();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,752,206.8);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhEIMIBZlIIjHAAIA3heICqAAIARg+IiiAAIAahfIAwAAIAjiEICpAAIgkCFIBCAAIAkiFICqAAIgmCFIAoAAIgaBeIiaAAIgQA+ICQAAIgZBfIiRAAIiCHhgA/MIfIB3mzIEIAAIh1GzgEguYAIfIChmzIEOABIihGygEgoNAIcIgaiLICrAAIBymLInqAAIA4g9ICTolIOgABIELhKIiADRIs7AAIhgFSIC2AAIBNkLIFCAAIhMELIHAAAIiOCIIlaAAIiaIWgEAmBAIQIBZlJIBmAAIh4iHIjJAAIiXCGIBkABIhfFJIjmAAIBPkMIiPgBIDYjDIiYAAIBxmkIOhABIhzGjIiQAAICiDEIiLAAIhJEMgEAnQgAfICGAAIAShEIiGAAgEAiOgAgICHABIAShEIiHAAgEAn7gC/ICHAAIAShFIiHAAgEAi6gDAICHAAIAShEIiHgBgAWKIQIA4jOIlDAAIBalNIKIAAIhbFOIiTgBIgdBuICWAAIhLBggAV6DnIDEAAIAMgpIjFAAgAWZB0IDFAAIAKgmIjFAAgARpIPIA5ixIDJAAIg4CygAMiINIAbhjIAVAAICIoGIg3AAIA5hiIAYAAIAyi2IDUBCIgfB0IAoAAIgbBiIgoAAIiFIGIAuAAIgmBjgACCILIBSkmIBzABIhPEmgAjYILIBdkmIBzABIhZEmgAHqILICDnlIgoAAIh/HlIisAAIDktPIFgAAICBgwIhTCQIj/AAIguCpIEkABIgaBhIgsgBIiEHlgA0IIKIgih7IDAABIAchmInFgBIAhh5IHFABIAPg4ID6g0IpfgBIAfhyIQhABIghB2ImYBoIIeAAIhdB5IniAAIg9DggATxgvIAaheIBEAAIAWhNIgsAAIAahgIC0AAIASg6IDVAAIgSA6IC1AAIgaBgIgoAAIgTBOIA8AAIgaBdgAYIiMIB3AAIARhOIh0AAgAofhdIA2jHIoZgBIgWBSIH9AGIobBwIkrgBIBVk7IRsABIhUE7gAgQjXIAYhdICIAAIAThCIC/AAIgRBCICNAAIgZBegA2QnIIBJh7IICABIAghOIEbAAIgeBOIInAAIh7B7g");
	this.shape.setTransform(296.9,67.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,593.7,135.5);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkoHIIHHnIInHnHIAAiKIJRJRIpRJSg");
	this.shape.setTransform(29.7,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件40, new cjs.Rectangle(0,0,59.4,118.8), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AmpDGIiKiKQABABgEkCIPvAAIB+B+IAAENIj5AAIrnAAg");
	this.shape.setTransform(56.7,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(0,0,113.3,39.6), null);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AM6i5IlPJSIwwBcIA2hmIErgaIAUiWIjUATIhNhcIEvgbIASiFIkGAXIAIg+IhqAJIEFlvIH0gsICrFLIhqAJIgIA+IjeATIgTCFIEIgXIhABpIjVASIgVCVIFPgdIGRrMImfAkIgthiIPghXIBqBdImvAmIhLCHIDHgRIhmLtIkJDigAiFk9IiUDaIGyglIhcjGgAsNIRIhXAHIBYirICNgLIhVCjIiPCMIgwAEgEglUAIGIB6gkIA6mnIhkAIIATiKIBkgIIAvlcIh1AKIAUiNIHPgnIgTCLIhDAGIgwFdIAxgFIgSCKIgxAEIgzFzIBIgXIgSCIIniCLgA8AgQIDfgTIhbJ0IjhATgA2yhxIl5AgIATiOIOKhOIhtCVIiTANIhUJYIEkgZIhABoIoUAugAWunXIhYhPIQShbIh6OAIlAAcIgphbICcgOIBfq7In3AsIhsMbIjdATgAR2ieIDBgRIg1GSIjDAQgAaWj8IGegkIg5GfIijAOIAqk9IhUAHIgeDeIBVgTIhpB0IieANgAaWmdIHLgnIgNBhInLAngA7HplIMQhEIhiCTIrBA9g");
	this.shape.setTransform(240.8,68.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件37, new cjs.Rectangle(0,0,481.6,136.4), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhXBoQgMhggHhoIgFhVQBRibBQhuQBMhngSAwQhLFFAeFEQAPCiAeBiIhaBuQhDhqgmk0g");
	this.shape.setTransform(37.1,46.5,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AhZDEIgthRQAfh8A6jDIAyiqQgMFqBGCqQAiBUAmANIg8B4QhjhRhBhig");
	this.shape_1.setTransform(25,68.9,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(2).p("ADBliIAHBGQACBXgXBYQhNEXkzCx");
	this.shape_2.setTransform(63.6,40,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(2).p("AHxtBIATAPQAZAUAZAdQBRBcA7CJQA7CKATBhQAJAxgDAVIAKANQALASAJAZQAdBSgGB7QgFBkgSCFQgIBsAgBuQAbBCgeBGQg9CLkfATQkAAQhVjIQgag/gGhNIgBhAIgVkHQhoBvhkB6QjHD0AaA7QASAmAoBwQAfBSAJAHQg8gjh3ghQjxhCjqA0IB3h5QCBiIAuhPQAYgpAjhwQAIgYA9jSQBklSBMiGQBcijCfiUQCEh6BYgnQAdgNAggYQARgNAegWQAwghAsAfQAuAhANAiQAGARgCALg");
	this.shape_3.setTransform(46.7,52.7,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-1,99.8,109.7);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkmCQIBag8IAKizIg8iWIAtgMQA6gOBAgKQDJghC1ATQg3AFgxAHQg1AIgyAKQg1ALgwAPQg9ASgmAYIgGAEIgCBRIgGBJQgDAkgGAiIgIAjQgFATgIAJIgHAKIAHAIQAeAmA0AyQAqAnAxAlIApAbQklhsg7gzg");
	this.shape.setTransform(165.6,56.5,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("Ag1EBQgpgigtgtQgjgigkgsQAGgKAFgSQAEgNAFgZQAHgiADgnQAGhHAAhHQAbgRA6gVQAigMBAgSQAsgMA4gOIBmgXQhLAZhOAgQidA+gTAfIgeEDIAdA4QAsBFBNA/QgdgVgagVg");
	this.shape_1.setTransform(170.3,56.6,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(4.6).p("AyrglIAYgfQAhgmAtggQCPhnDOgHQDOgGItDLQEWBkDuBmIDmhkIG4DI");
	this.shape_2.setTransform(82.2,29.6,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AJdCyQjrhuhkgZIjGg5QiGgnjtgrQjzgrjVBrQhDAhg3AsIgqAmIhkizIAwgdQA+gkBBgdQDSheCvACQCvADE+BhQCfAwB8AwQEoBFDpB4QB0A8A6AuIjIBKQhigyh1g3g");
	this.shape_3.setTransform(64.9,15.8,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3).p("AE9lKQDCAjCVBwQA4AqAkAsQAhAmAEAWQAQBQgCA9QgFBsg8AhQg7Ahh8AaIhvAUQieAHikAFQlGAKgegKQgQgGj8gSQjsgRgGgSQgHgUgWglIgVgiIA4gUQBAgbAjgkQBxhwjXiZIA6gwQBJgvBOAAQAIAACdAIQBdAEBYgMQBKgLCTgxQCQgmCKAZg");
	this.shape_4.setTransform(273.3,59.7,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(3.2).p("ACYj+QBCAeA6APQDVA4CVAtQChAxAWASQAVAQAMAqQAMAsgFAsQgPB0h3AAQg0gBhCACQiEAEhHAPQhBAOhnAcQh+AjgnAKQjEAwiggGQikgGiHg+QgqgUgjgWIhYg9QhAhKgghhQhAjACghsQAsgLAxgVQA+gbAVgHQBwglDiAGQCQAECFA8QAkARBIAig");
	this.shape_5.setTransform(191,56.4,0.558,0.558);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#32FFEB").ss(3.2).p("ABJnJQBKAPBMAUQD0BCCxBiQBUAvFLCeQDPBiASAqQAIATAnBBQAmBGANA2QApCri1BeQhZAAhiAUQgdAGiFAhQhdAYg8AFQhUAHhOgTQiOgjooh2IoMhwImJAAQgogRg1ghQhrhDhBhVQjSkQETliIA3giQBFgpBKggQDvhmDLAUQDMATDfBSQBvApBGAlg");
	this.shape_6.setTransform(77.5,36.3,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,321.1,82.1);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("ACHAtQiHgxjgAxICWiVIB0AMQB/AaA4A+IAABtQgWgjhEgZg");
	this.shape.setTransform(36.3,64.1,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("Ai9h7QCJgsDSASQBoAIBOASIgeCLQjag3jtBbQhKAdhEAoIg0Ajg");
	this.shape_1.setTransform(26.3,83.3,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(3.2).p("AmfLwQBCgYB5giQB9g4CBhoQEDjSAVj2QAYkLA+jRQAUhBAVg0IARgmQgTg1gegzQg9hng8AHQguAxheBUQiqCah0CdQhZB5hRChQhqDQgVDUQgMB5AQBNQADARgNBVQgGBKAogPg");
	this.shape_2.setTransform(25.2,93.4,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(3.2).p("AC/nrQipBFhEA/QhFA/g6AyIgsAlQgqAFg+APQh7AeheAzQhZAsg4AdQhnA0hFAuQjNCLgLCXQgNC2D1AOQCdAJDMg2IBEACQBWAABVgEQEOgPCjg/QCMg2BQgsQA/gjA7gSQDPg/B/g3QDnhjgghAQgZhJgVg7Qgphwg7hNQi3jxmJAXQhHAWhVAig");
	this.shape_3.setTransform(63.1,105.1,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3.2).p("AAECvQhhgPhNg3QhBgvgcgzQgohJANhsIATAHQAWAJATAPQA8AvAABSIAMgLQAPgNASgHQA6gWBDArQBXA4BpARQA0AJAjgDQgKAPgWAWQgtAqg/AfQgvAYhYgOg");
	this.shape_4.setTransform(53.1,53.2,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(1.2).p("AichNQgXATgQAYQggAvAhAaQAmAfCMAHQCJAHApgYQAhgUAMgUQAGgKgBgG");
	this.shape_5.setTransform(65.1,56.9,0.558,0.558);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#32FFEB").ss(3.2).p("AgqnSQBnAqBkAyQFCCfCgCtIA7BKQA9BRAGAhQAHAjgbBWQgYBJgNAVQgNAUhSAvIhPArQgwAPg7AOQh2Adg1AAQg6AAkTg5Qkag7hMgfQg0gVhAgvQhTg+g2hMQibjXB9j5QBvjfD5gQQB9gIBmAlg");
	this.shape_6.setTransform(74.8,29.6,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-1.5,140.2,143.9);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ApDAwIBkiVICzAMQDdAGDRgcIAeAbQApAhAxAeQCdBhC8Al");
	this.shape.setTransform(137.9,107.5,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("AoLhfIBkCVIAggIQApgIAwgCQCZgICbA4IAwgOQA+gRA+gJQDJggCNAv");
	this.shape_1.setTransform(145.4,52.4,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AOIGxIgWgPQh5giiyADQiZACgwATQgfAMgNgFIgGgHQhIhPjeh8Qi5hohGgXQhig1hVglQikhLh6AGQh9AGjZDHQhEA+hFBKIg4A+IhahBQgbgMAri0IAwiwIhjj6IAKgqQAHgjBGAEQAwADB3AcQCaAlA4ALQB9AWBSgHQCdgNCzB0QBZA5A5A9QBCAND7CnQB+BUBxBRQDYgND0AqQB6AVBPAXIBphFQBuhCAaAUQAMAJAWAuQAXAxAZBHQhPAFhWAJQitAUglAZQgbASgXAAQgJAAgJgDg");
	this.shape_2.setTransform(96,24.3,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AzzGdQiRghhIhUICCn8IAAjmIBkAAIAIBDQAPBIAlAfIBBBHQBRBWBUBJQEODqDIAZIEXggQEugtB2g/IAjgKQAtgKAyAAQAOAAB+AOQBwAMB2gGQBrgFBMgbQA+gWAtAEQAgADBDAiQAoAUBbAwQC0BcBQgRIAAADQgdBLgaA1QgYAwgJAGQgKAHgvgZIhmg8QiXhagvALQg0ANi9gFIizgIQgVgDglABQhJAChOAVQl9BpmYAQQiAAFhzgFIhagFQgvAfhdAVQhTAThaAAQhzAAiAgeg");
	this.shape_3.setTransform(86.8,106.9,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32FFEB").s().p("AigArIgWgrIBGhPIBpA8QB0A6BKABQgwAAg+AFQh+AKhFAZIgDAAQgNAAgWglg");
	this.shape_4.setTransform(63.9,63.8,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(3.2).p("Az4tWQgjDoA+BiIhzFWQhxFtANB2IAABzIgzBiQg2B2gSBpQg3FRFPBMQDlA1C7gqQBdgVAvgfIBaAFQBzAFCAgFQGZgQF8hpQBOgVBJgCQAlgBAVADICzAIQC9AFA0gNQAvgLCXBaQBcA2AKAGQAvAZAKgHQANgIAkhQQAphaAlhyQBok8AAj8QAAkBhUkiQgghugjhTQgghLgRgNQgagThuBBIhpBGQhOgYh6gVQj0gqjZANQhxhRh+hUQj7iohBgNQg6g8hZg6QiyhzieANQhSAHh8gXQg5gKiaglQh3gdgwgDQhGgEgHAkQgFAagXBeQgXBigMBKg");
	this.shape_5.setTransform(88.9,65.8,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-1.7,182.9,140.6);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AAXENIAyigQgKgogZhPQgIgcgegoIgdgiIjShQIBagjQByglB2gGIgGAHQgOAFgOAKQgPAMgNAUQgJANgKAZIgLApIAAAEIADADQAbAbAYAmQAXAkAOAlQADAJAIAfQAHAiAAAHQAEAegGA1IgBAPIANgFQAcgJAigVQAdgUAYgWIAPgQQg9BRgzAtQg4AzgjAAQgIAAgGgCg");
	this.shape.setTransform(164.4,38.2,0.558,0.558);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AghCKQgBgPgGgdQgKghgDgJQgPgogZgkQgYgkgfgbIAIgkQAJgaAGgMQAMgVAMgMQALgKAMgGQgkA0gQA6IAdAnQAfAqAJATQAZA4ALBJQAFAkAAAZIArgVQA5giBFhMIgQAWIgWAYIgXAYIgZAWQgfAZgXANQgYAOgUAIQAFgogDghg");
	this.shape_1.setTransform(173,35.3,0.558,0.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(4.6).p("A0RjcIB4BFQCeBRC4A8QJMC/J6hbICbB9IBSgUQBngXBhgPQE5gyCWAr");
	this.shape_2.setTransform(86.4,43.9,0.558,0.558);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AGuD0QkggGmZiAQiAgnh8gwIhkgmQg6AFhEgBQiKgCg4ggIBajIIAGASQAJAVAUATQBBA8CWAMIBlArQCFAyCZAkQHmB4H6gyICgCCQgSAKhIAJQhqANivAAQhBAAhKgCg");
	this.shape_3.setTransform(60.2,50.1,0.558,0.558);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AApj/QBkgjBlAQQB5AUCABMQB8BKARA4QAOAtgiA+IgkA2QhhAQhoAUQjOAogcAXQgcAWiKAXIiGASQAqgfAWgyQAthjhihaQgtgpjNAVIjEAdQgVgLgMgdQgYg9AuhgQAkhNB2gPQAqgFArAEQAlAEAOAIQAmAUA5ARQBNAXAzgGQAYgDAmgPQBEgbADAAg");
	this.shape_4.setTransform(193.8,21.9,0.558,0.558);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(2).p("AFckRQBgBVgJBgQgsAmgvAuQhfBbgTAlQgkBIhgBHQh/Bfh7gXQhJgNhFgyQhIg1glhIQhdizCxixIBHgiQBdgmBqgSQBpgTBsgMQA1gGAhgDIAfARQAlAWAeAbg");
	this.shape_5.setTransform(165.4,37.2,0.558,0.558);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#32FFEB").ss(2).p("AMzjAQCIAzBVANQCgAaBTA5QAEACAxAnQAbAUAYAIIAUAJQAXAOATAVQA7BDgNB2QgOB7hwAuQhKAfhbgJQiQgNhqAPQhEAKhkAhQhxAlhCANQh5AZifAAQmjAAkgg2QiTgbhpgqQgjgOitg1QiigxgmgJQhUAAhCgCQh/gCgmgmQghghgthtQg2iGgIh7QgKigBLhnQBch/DWgfQExgtF9BNQC/AnCCAvIBhAMQB2AQBuATQFiA/CKBPg");
	this.shape_6.setTransform(83.5,31.5,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-1,233.2,64.9);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("Ah9JbQivgqhSiAQhTiCAlibQAch0BOg+QBMhABzgDQhSg2gdhIQgdhIAVhVQAfiBByhCQBwhCCaAlQCbAlBJByQBJBwgfCBQgUBSg5AzQg6AyhgAMQBkA9AnBcQAlBdgaBuQglCXiEBOQhWAyhmAAQg5AAg9gPgAiqAfQhUA0gZBlQgPA/AQBBQAPBBAzAuQAzAuBCAQQBoAZBTgzQBUgzAZhnQAZhpg1hVQg1hWhpgZQghgHgfAAQhBAAg4AigAgPnQQhEAogSBKQgUBUApBCQAqBDBVAVQBUAUBDgoQBBgoAThNQAThQgqhDQgqhEhSgUQgcgGgaAAQg0AAgsAag");
	this.shape.setTransform(349.9,172.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCCC").s().p("AiQJcQirgphEiSQhSiwBQlMQAzjSBKh1QBJh2BngxQBkgxCBAfQBfAXA+A4QA/A3AeBUQAdBTACBuQACBugqCvQgyDQhKB2QhJB1hmAyQg/AehHAAQgvAAgygMgAhAm0QhlBahGEjQhGEiAtBxQAtBxBkAYQBkAYBbhRQBbhQBFkjQBGkjgshwQguhxhmgYQgZgGgYAAQhGAAg7A1g");
	this.shape_1.setTransform(259.6,150.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCCC").s().p("AiQJcQirgphEiSQhSiwBQlMQAzjSBKh1QBJh2BngxQBkgxCBAfQBfAXA+A4QA/A3AeBUQAdBTACBuQACBugqCvQgyDQhKB2QhJB1hmAyQg/AehHAAQgvAAgygMgAhAm0QhlBahGEjQhGEiAtBxQAtBxBkAYQBkAYBbhRQBbhQBFkjQBGkjgshwQguhxhmgYQgZgGgYAAQhGAAg7A1g");
	this.shape_2.setTransform(167.7,128.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("AnxHKQALg1AegsQAxhIBVg+QBUg9CUhJQDmhuBahMQBahMAUhTQAUhWgvhKQgwhKhjgYQhpgZhNAvQhOAwgcBwIiRg0QA4ijB5g/QB4hACoApQCqAoBNB3QBMB1ghCMQgRBHguA+QgtA+hVA6QhWA8i8BfQicBOgvAeQguAegiAiIJDCLIghCMg");
	this.shape_3.setTransform(71.2,109.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,0,420.9,281.5);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,189.9).s().p("A0uUuQololAAsJQAAsIIlomQImolMIAAQMJAAIlIlQImImAAMIQAAMJomIlQolImsJAAQsIAAomomg");
	this.shape.setTransform(187.6,187.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375.1,375.1);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhoNAyeMAAAhk7MDQbAAAMAAABk7g");
	this.shape.setTransform(667,323);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1334,646);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(923.3,311.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(666.6,229.2,513.3,164.3);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AjKCyQA6gkAxgtQCbiNAQihICuAVQgZBFg3BSQhtChiSA9IikASg");
	this.shape.setTransform(46.6,72.7,0.517,0.517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AiICHQAugnAjgoQBxh+gfheICVABIgCAkQgFArgQApQg0CAiPAyIiFAeg");
	this.shape_1.setTransform(62.8,71.7,0.517,0.517);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(2).p("AE4gUQgBADgCACIADgFIAAAAQAGgKAEgNQAKghgNgTQgNgUgTgGQgNgEgjAAIAUgMQAUgPAAgNQAAhQgUAAIiagEAkOgtQgIAKgKARQgWAggLAjQglBvBJBSIAkgCQAugCArAGQBIAKAwgHQBQgNBjg8IBJgDQBLgIAMgTQANgSgFgXIgIgTIAXgZQAUgegNgZQgMgXgFgB");
	this.shape_2.setTransform(86.9,64.3,0.517,0.517);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(2).p("Aj1A5IBChgQBJhkAfgNIAygHQA2gKAZgNQAXgLAXAVQAkAhASAHQAXAJAsAKQAcAGgFAFQgFAZgSARQghAfhegNIgygUQgIANgMALQgYAXgZgHIAGAYQAFAegBAcQgFBahLAl");
	this.shape_3.setTransform(85.6,58.9,0.517,0.517);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AmzsIQBPhDCBA1QCAA1BLB+QA7BmgbB8QgRBSg1BQQgOAVgLBBQgGAmgQBeQgnC/hkBgQgxAvgaAmIgQAcIEagUQCdgLBpAUQA7AMC7AJQDrALAIABQA9AFAFBLQABAUgNBiQgEAkgcAOIgaAGQgSAAkNA9QkbBBiOAIQicAKj2gBIjXgDQgQAAgUgEQgpgHgYgQQgYgRAHihQANi8AEg9QAGhLA4jpIA3jZQgIkOA8iaQAqhpBehPg");
	this.shape_4.setTransform(36,41.7,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(-4.2,-1.3,113.9,90.3), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AlGrBQgzArgFCEQgHCcA/DlIgGA2QgFBFADBGQAKDkBYCoQBaCuBXBFQApAgA9APQA1AOARhUQACgKgNi8QgNivAYgvQAZgyBGh9QAjg+Aeg0IA7hEQA5hOgGgsQgGgrgdgiIgbgZIhEA+QgygegyglQhkhLAAgmQAAgVAphrQAkhdgRgdQgUgHgZgIQgygPgYAAQgZAAgoAPIgjAPQgogMgwgGQhfgNglAfg");
	this.shape.setTransform(18,34.5,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(-1.2,-1,38.3,76.6), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("AmyvOIgLBAQgKBRAGBUQASEMCkDFQCRCvEhE/QDmEJA3CMIAAFo");
	this.shape.setTransform(44.8,58.8,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(4.6).p("Ah+kIIAgAuQAnA7AjA+QBvDEAgCc");
	this.shape_1.setTransform(67.2,112,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AD3JYQhmiNhNhUQiBiKhchnQisjAh+iwQifjfA7lGQAShmAmhjIAihQICgC+QhKDoA2DcQBHEmEnEGQDiDKCrEJQBWCEAoBcIAADwQjWk+hriTg");
	this.shape_2.setTransform(36.3,53.2,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(3.2).p("AuuvDQgkEZBcDmQBVDTC9CeIDRDMQDZDcAsBLQAjA8CqDcQDrEuCfDaIAEAcQAJAjAVAbQBCBWCggQQCOgPA3hHQA3hIgWiOQgTh3gCgHIABAQQgtjVhgkdQjBo5kAlqQAMhtAEhnQAJjNgkg/Qghg4g/hFQhahhhrhFQk2jKltBTQhBAPhFA5QiMBxgaDNg");
	this.shape_3.setTransform(44.7,64.6,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-1.5,-6.5,95.6,145.8), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Ah8EBQAHhyAIhQQAEgvAGgvQAGgxAIgvQAPhiAZhVIClhCIALBdQgKgDgXAFQgtAHg9AfQgsBmgkDRQgYCNgSCog");
	this.shape.setTransform(20.7,29.7,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AiOBPQgZnDAyiEICLBuIB4geIAJBWIi1AzIgCAEQggBWgTBoIgPBfIgJBiQgHBiABBhQACBoAHBHIgDAjQgXjIgMjig");
	this.shape_1.setTransform(19.3,27.9,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AgiCNQgygTg2gcIgsgYIgNj0QDHCMBlAlQAyASALgJIAeCMQgfAXgyAAQg9AAhYgig");
	this.shape_2.setTransform(17.7,119,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AAzFAQiugwgghxIhAn3IAgBEQAsBSAxBFQCcDgCfAXIAADgQhSgChYgYg");
	this.shape_3.setTransform(15.2,91.2,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(4.6).p("ABBO1QgSkEgajIQhGosgKisQgXmPBJkz");
	this.shape_4.setTransform(10.7,47.4,0.469,0.469);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32FFEB").ss(3.2).p("AhE2eQCYhYCcCXIAqFXQAoGLgNEGQgGB/gVDlQgMCAgYEGQgoHTAhCIQA1DZgeB6QgeB5hxAeQhhAahLhGQgYgWgTgdIgOgZQgFihgMjMQgWmZgfjYQgFgog5lFQgsj+gPivQgvoXCelaIAggqQAqgwAwgbg");
	this.shape_5.setTransform(14.6,69,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-2.3,-1.5,38.2,148.7), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(3.2).p("Aq7g6IgSAqQgSA2AGA/QALBvAhBqQAsCPA0AAQAmAADEhJQDQhNBOgKQD2ghCdhDQEziDBZkMQgPgjgSgjQgmhGgTAAQhhAjhaAfQiyA+g3gSQgsgPjchsQjShmgZgFQgfgGgWARIgRATIgGBfQgCBpASAyQgMAFgPAKQgeAUgNAZQgUA3gRAbQggAxgzgMQgygMhBgZg");
	this.shape.setTransform(34.3,21.6,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-1.5,-1.5,77.2,53.5), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhvBGIjGi7IBBAXQBQAcBHASQDjA4A4g3IB4B3QguAahMANQgqAHgqAAQhrAAhsgwg");
	this.shape.setTransform(46,88.8,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("ADIByQisAAi1g5Ii2irIAtATQA6AWBAAPQDLAuC6gtIAjA8QAqBDAmAiQgwALhRAAIgHgBg");
	this.shape_1.setTransform(32.9,74.7,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(3.2).p("AlQgjIBKB+QBRCBAmAGIBKAlQBPAlAhgGQAhgFANgRQAHgIAAgIIAvAFQAygFANgyIhuhkIBuBGIASgBQAVgDAQgHQAygWgZg5IighQICqA8IANgDQAPgEALgJQAggbgfg4Qg8hGgKgeQgGgSgTgJIgZgNQgcgggagcQgzg2gZgGQgVgFh1APQh1APgOgFQgNgEghAQQgkARgeAdQhSBRApBjg");
	this.shape_2.setTransform(69.6,104.3,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(3.2).p("AMyqCQgeB/h3BOQhOA0hnAXQgbAGg7ArQhLA5gtAfQizB7iaAAQhMAAgxAKIgjAKQBrB3BiC4QAzBiA/CKQAfA+CICbQBJBTBuB4QAtAzg3BAQgOAQhWBFQgfAZghgKIgagPQhJhJidiUQjWjLiHh0QiDhxitjXIiSjAQgNgNgNgRQgcgmgGgfQgHggCDh7QBHhECHh1QA+g4DhiPQBxhHBkg8QDJjeCnhMQBzg0CIAKQByAIA+COQA+CNgmCfg");
	this.shape_3.setTransform(39,51.3,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-4.5,-7.9,100.5,127.6), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AhDBcQA0jZgyheICLhGIARAeQATAmAKArQAhCJhFCCIjVDJQAkhaAahsg");
	this.shape.setTransform(107.3,22.8,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AgLgrQAUhmAMhvIAHhZIAggPQAtgUA/gZQBLDngjCxQgSBZggAqQhaBTiYBmQhMA0g6AjQCLh8BElFg");
	this.shape_1.setTransform(76,43.8,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(3).p("AhijrQjiAhgvAJQloBBhhCFQhxCagBC5QAABOAVA7QAWA7AjAXQAWANBHAFQApADBhAFQCLAMDqhIQD5hMCVhxQBohQEXkGQEKj8BNg1QA3gnAShAQAQg8gZgyQgag2g7gMQhDgOhYAuQhbAxh3A8QjvB2iMAzQg0AUiRAVg");
	this.shape_2.setTransform(64.9,40.6,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-2.1,-1.5,140,84.3), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AB6iDQgfgrgsgaQhVg0g7BbQgUAdgDBDQgEBBAOBCQAPBJAdAoQAhAvArgH");
	this.shape.setTransform(8.4,55.8,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(2).p("AFbshQB7BUBKCSQBNCWANC/Ig1D0Qg9D3goANQgnANgsAsIh4CSIgTBNQgZBNgaAAIhGAAQgMAZgUAVQgmAqgjgSIACAMQAAAPgEANQgOAog8AEQgHAEgJAJQgRARgJAaQgMAlgpAMQgwAQhEgeQhSgjheiUQhpimgii+IA/jLQgOAFgWgNQgrgagohcQgVibAki2QBIltEciDQCnhNCfAIQCYAIB8BVg");
	this.shape_1.setTransform(44,61.6,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-2.8,-1,91.5,127.8), null);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(543.8,330.1,1,0.19,1.5,0,0,187.7,187.8);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(347.6,314.5,1,0.19,8.2,0,0,187.6,187.8);

	this.instance_2 = new lib.元件22("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.6,328.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_3 = new lib.元件22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.7,356.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_4 = new lib.元件22("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(690.4,337.1,1,0.19,0,0,0,187.6,187.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["东标__atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-393.2,-341)).s().p("Egy+AZ4IlD+aIJRzwMAoygGVMAhbAHOIclVwIicYWQwyhVwxJQg");
	this.shape.setTransform(431.7,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,0,877.9,392.1), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(155.7,189.8,0.688,0.688,0,0,0,73.4,108.9);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.Path_2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83,122.8,0.688,0.688,0,0,0,64.2,21.4);
	this.instance_1.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Ai8CHQA3gFBBgxQB/hfAujWIBUCKIgGAvQgKA4gbAxQhVCbjUAMg");
	this.shape.setTransform(206.8,259.2,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AjQDhQDpgiArkgQAOhbgHhoIgKhXIB+FKQBBC7ipCLQhUBHhhAgg");
	this.shape_1.setTransform(192.5,230.2,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AhAB8Qhuj2hkggQBWgGCIgvQBCgYAzgXIBahuIAQAgIAlBRQgdALgbAQQghARgaASQg9AoguAqIgHAGIAZE6IALBmIgEmRQAzgeA2grQARgOAigfQAbgaAPgSIAQAiQBDCZgXgLQgTgKg5hhQgkASgpAoIgpApQgKAGgCALIgmGsQgih2g3h7g");
	this.shape_2.setTransform(145.1,138.4,0.688,0.688);

	this.instance_2 = new lib.Path_19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.8,306.7,0.688,0.688,0,0,0,92.5,62.1);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.Path_21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(179,195.8,0.688,0.688,0,0,0,107.6,163.2);
	this.instance_3.alpha = 0.699;

	this.instance_4 = new lib.Path_23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(82,105.2,0.688,0.688,0,0,0,120.9,66.1);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.Path_25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.4,47.1,0.688,0.688,0,0,0,88.9,71);
	this.instance_5.alpha = 0.82;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(-1.2,-1.8,303.9,329.9), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件27();
	this.instance.parent = this;
	this.instance.setTransform(153.7,68.6,0.941,1,0,0,0,87.8,68.6);
	this.instance.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.instance_1 = new lib.元件28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.4,92.2,0.941,1,0,0,0,56.8,70.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-14.7,282.2,195.9);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(543.8,330.1,1,0.19,1.5,0,0,187.7,187.8);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(347.6,314.5,1,0.19,8.2,0,0,187.6,187.8);

	this.instance_2 = new lib.元件22("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.6,328.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_3 = new lib.元件22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.7,356.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_4 = new lib.元件22("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(690.4,337.1,1,0.19,0,0,0,187.6,187.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["东标__atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-393.2,-341)).s().p("Egy+AZ4IlD+aIJRzwMAoygGVMAhbAHOIclVwIicYWQwyhVwxJQg");
	this.shape.setTransform(431.7,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,877.9,392.1);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件47("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(479.5,103.4,1,1,0,0,0,376,103.4);

	this.instance_1 = new lib.元件47("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(237.5,103.4,1,1,0,0,0,376,103.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,0,994,206.8);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件40();
	this.instance.parent = this;
	this.instance.setTransform(88.9,29,0.197,0.197,0,0,0,29.7,59.4);

	this.instance_1 = new lib.元件40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.1,29,0.197,0.197,0,0,0,29.7,59.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("Ag0BeQgXgOgMgZQgMgYAAgcQAAgzAcgeQAcgeArABQAdAAAYANQAXAOANAZQALAZABAfQgBAfgNAZQgMAZgYANQgYANgbABQgcgBgYgOgAgyg/QgUAUAAAuQgBAmAVAWQAUAWAeAAQAgAAATgWQAVgWAAgpQAAgZgJgSQgIgUgRgKQgRgLgUAAQgdAAgWAVg");
	this.shape.setTransform(56.9,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AgtBfQgZgNgNgZQgNgZAAgfQAAgeANgaQAMgbAZgNQAYgNAeABQAXAAASAHQATAHAKAOQAKANAGAVIgZAGQgFgQgHgIQgHgKgNgFQgNgGgQAAQgSAAgOAGQgOAGgIAKQgJAJgEALQgJATAAAXQAAAcAKATQAKASASAJQATAKAUgBQASABARgIQARgGAJgIIAAgoIg+AAIAAgXIBZAAIAABNQgUAQgWAIQgWAJgXAAQgegBgZgNg");
	this.shape_1.setTransform(33.9,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_2 = new lib.元件39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.6,29.8,1,1,0,0,0,56.6,19.8);
	this.instance_2.alpha = 0.219;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32FFEB").ss(1.5).p("AodjFQPtAAABAAQB9B9ABABQAAEMAAABQAAAAvgAAQABAAiLiKQABABgDkCg");
	this.shape_2.setTransform(56.2,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(-3.6,6.3,119.9,44.3), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["东标__atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-393.2,-341)).s().p("Egy+AZ4IlD+aIJRzwMAoygGVMAhcAHOIckVwIicYWQwxhVwyJQg");
	this.shape.setTransform(393.2,341);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 2
	this.instance = new lib.元件22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(505.3,475.1,1,0.19,1.5,0,0,187.7,187.8);

	this.instance_1 = new lib.元件22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(309.1,459.5,1,0.19,8.2,0,0,187.6,187.8);

	this.instance_2 = new lib.元件22("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.1,473.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_3 = new lib.元件22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(433.2,501.5,1,0.19,0,0,0,187.6,187.6);

	this.instance_4 = new lib.元件22("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(651.9,482.1,1,0.19,0,0,0,187.6,187.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,145,877.9,392);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(10.9,67.9,0.469,0.469,0,0,0,14.6,79.5);
	this.instance.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(2).p("AlCyGIg8AyIgQAyQgRBAgIBIQgcDmBFDbIhgEjQhiFHgGC1QgGC1ARCyQAJBYAKA1IgFAzQgEA/AGA4QAUC0BxAyQBzAzBZgOQAegEAggOQARgHAbgMQAfgNAmhkIAfhhQBHifBMjDQCWmFAMi0QAGhTBTiuQB2j4AYhBQBGi9gQiLQgUiuibh8QkZjhkaBYQhYAbhOA3g");
	this.shape.setTransform(27.4,5.3,0.469,0.469,0,0,0,0,-115.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(-1,-2.7,57.8,122.5), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AkGBDQBegrBHgcQAngQAsgQIBUgfQBageBNgQQBUBKArAjIhJARIhdhCQhmAHi7A8Qh/AqiSA6g");
	this.shape.setTransform(82.2,24.7,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AlSCcQB7hQBwhDQFojXCBgPIgeCiIBTByIhIARQg3g9g/hAIgDgDIgFABQhUAKhdAeQgmALgvASQgjANgxAVQhQAihTAtQhNAqg/AoIgeANg");
	this.shape_1.setTransform(82.1,21.1,0.469,0.469);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(69,21.1,0.469,0.469,0,0,0,76.9,42.1);
	this.instance.alpha = 0.699;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AjTAkQgogggggmIgYghICXhIQBCBXDNA2QBnAcBaAKIjmBkQiiAAh/hog");
	this.shape_2.setTransform(20.7,48.1,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("AiBB8Qi0g1hkiCIC0haIAzAZQBBAeBJAZQDnBPDbAAIl8CMQhFAAhagag");
	this.shape_3.setTransform(39.9,40.5,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(2).p("AOuqRQBMAPA2AjQCrBuh6EKQgkAdg1AdQhsA6hXAAQhRAAkLCDQlaCqhMAcQnHCrheAnQl7CdgzBTQhzgWhMg4QiZhxDCipIGLjAQGajRBLhYQBbhqBehGQBihIB+g0QBqgrEbhJQCNgkB4gcg");
	this.shape_4.setTransform(54.9,31.2,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-1,-1,111.8,66.4), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件60();
	this.instance.parent = this;
	this.instance.setTransform(64.7,33,1,1,0,0,0,24.2,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:64,y:34.8},7).to({x:64.7,y:33},8).wait(1));

	// 图层 2
	this.instance_1 = new lib.元件61();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.6,60.3,1,1,0,0,0,15.1,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:50.9,y:62.1},7).to({x:51.6,y:60.3},8).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FFEB").ss(4.6).p("ABuqXICWCtIAKGhQhYCYhvCnQjdFPh3BL");
	this.shape.setTransform(23.2,152.2,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32FFEB").s().p("AAAgoIgghhIAWAAQAYAFANAZQAMAZgKB3QgEA0gHAxQAIhNgahlg");
	this.shape_1.setTransform(55,95.8,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("ABsB/IgljXQgfhXhsh4IhmhnIAWhuICEBtQCEBwAHARQAMAbgECbIAUCeQAUCoAAArQAAAsgdBgQgOAwgPAoQAbiLggjzg");
	this.shape_2.setTransform(65.6,92.1,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32FFEB").s().p("Am1RJIDKkKQDIkTgHgsQgGgsgRixIgRipQhakXhalAIAjgGQApgIAmgNQB5gqAghOQAvhuAHiTQAIiqhBgzIGBiaIAzBtQgvAug/BYQh+CwhVDSQgfBNA0ErQAbCWAgCFIgHDFQgDDaAPBuQgyBwhSCQQikEgijCcg");
	this.shape_3.setTransform(20.5,121,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3.2).p("AFb0NQE1DKAsBXQAsBYACBpQABA0gHAjIAUCLQAUCZAABEQAABFhQDuQgoB1goBpIgSC0QgZDIglBkQgeBQhfDjQhTDMgMBPQgJA4gqA5QgxBEhKAiQjEBdkNiyQkAiohpicQghgxgOgpIgHggIBoiKQBpiQAGggQAGgfgChcIgEhXQg4iCg8ilQh3lIgVisQgVirB5lcQAmhtAwhyIAohcICThgQClhhBYgHQBXgGA+gUQAggKAOgIg");
	this.shape_4.setTransform(36.9,122.2,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3.2,92.8,201.4);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(156.5,82.2,1,1,0,0,0,62.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-37,x:154,y:100.7},4).to({rotation:-59,x:153,y:86.7},5).to({regY:17.6,rotation:-74,x:153.2,y:83.8},4).to({regY:17.5,rotation:-38.3,x:155.1,y:102.8},6).to({regX:62.2,rotation:-14,x:155.2,y:78.7},6).to({regX:62.3,scaleX:1,scaleY:1,rotation:-7,x:156,y:80.5},2).wait(1));

	// 图层 3
	this.instance_1 = new lib.元件15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190,83.2,1,1,-8,0,0,22.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:22.8,rotation:7.5,x:181.6,y:105.3},4).to({regX:22.9,regY:13.3,rotation:30.6,x:185.1,y:89.3},5).to({rotation:38,x:182.1,y:79.2},4).to({rotation:45.6,y:108.3},6).to({rotation:6.8,x:184.2,y:80.1},6).to({regX:23,regY:13.4,rotation:-3,x:187.1,y:81.8},2).wait(1));

	// 图层 4
	this.instance_2 = new lib.元件10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.5,184.3,1,1,0,0,0,27.3,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:27.4,regY:16.8,rotation:8.5,x:149.6,y:191.5},4).to({regY:16.7,rotation:54,x:156,y:187.6},5).to({regY:16.6,rotation:45.2,x:156.1},4).to({regY:16.7,rotation:0.2,y:213.7},6).to({regX:27.5,rotation:-4.3,x:160.2,y:191.2},6).to({regX:27.6,rotation:-2,x:155.1,y:187.8},2).wait(1));

	// 图层 5
	this.instance_3 = new lib.元件14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.2,193,1,1,0,0,0,31.4,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:8.8,rotation:-21.2,x:144.3,y:200},4).to({regX:31.5,rotation:-51.2,x:151.7,y:193},5).to({regX:31.6,scaleX:1.13,scaleY:1.13,rotation:-36.2,x:153.9,y:184.8},4).to({scaleX:1.05,scaleY:1.05,rotation:-31.7,x:156.8,y:217.1},6).to({rotation:13.3,x:156.9,y:192.2},6).to({regX:31.7,scaleX:1.02,scaleY:1.02,rotation:6.5,x:150.6,y:192.7},2).wait(1));

	// 图层 6
	this.instance_4 = new lib.元件12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120.2,292,1,1,9.2,0,0,102.4,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:102.5,regY:9.8,rotation:17.9,x:177,y:308.9},4).to({rotation:-31.5,x:230,y:277.5},5).to({regX:102.4,regY:9.9,scaleX:1.13,scaleY:1.13,rotation:-88.1,x:206.8,y:295.6},4).to({regY:10.1,scaleX:1.05,scaleY:1.05,rotation:-35.7,x:199.8,y:320.3},6).to({regX:102.5,rotation:-15.7,x:116,y:295.7},6).to({regX:102.6,regY:10.2,scaleX:1.02,scaleY:1.02,rotation:-3.3,x:118.3,y:294.1},2).wait(1));

	// 图层 7
	this.instance_5 = new lib.元件13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(18.9,320.4,1,1,8.7,0,0,22.9,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:17.4,x:72.5,y:321.4},4).to({regY:14.4,rotation:-42.3,x:171.7,y:365.2},5).to({regX:22.8,scaleX:1.13,scaleY:1.13,rotation:-99.3,x:253.1,y:405.4},4).to({regY:14.6,scaleX:1.05,scaleY:1.05,rotation:-78.6,x:145.4,y:416.6},6).to({regX:22.7,regY:14.7,rotation:-20.6,x:31.9,y:366.2},6).to({scaleX:1.02,scaleY:1.02,rotation:-6,x:25.4,y:343.3},2).wait(1));

	// 图层 10
	this.instance_6 = new lib.元件8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(207.7,422,1,1,0,0,0,14.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:14.9,rotation:23.8,x:138.5,y:417.8},4).to({rotation:49.5,x:36.2,y:396.8},5).to({regX:15,regY:20.1,rotation:80.6,x:3.6,y:354.1},4).to({regY:19.9,rotation:105.1,x:86.8,y:332.1},6).to({regX:15.1,scaleX:1,scaleY:1,rotation:71.9,x:116.4,y:388.3},2).to({scaleX:1,scaleY:1,rotation:38.6,x:183.9,y:419.4},2).to({scaleX:1,scaleY:1,rotation:5.2,x:259.5,y:410.2},2).to({regX:15.2,regY:20,rotation:2.5,x:233.8,y:416.2},2).wait(1));

	// 图层 8
	this.instance_7 = new lib.元件9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(199.2,295.4,1,1,0,0,0,14.2,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:14.4,rotation:23.3,x:183.9,y:298},4).to({regX:14.3,rotation:34.5,x:101.2,y:290},5).to({regX:14.5,rotation:65.6,x:114.6,y:296.5},4).to({regY:6.7,rotation:90.1,x:211.6,y:325.5},6).to({regX:14.6,rotation:-16,x:218.6,y:292.2},6).to({scaleX:1,scaleY:1,rotation:-7.8,x:209,y:293.8},2).wait(1));

	// 图层 1
	this.instance_8 = new lib.元件11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(176,96.8,1,1,-2,0,0,43.6,97.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:43.5,regY:97.5,rotation:0,x:172.4,y:116.5},4).to({y:100},5).to({y:93},4).to({y:119},6).to({regX:43.6,rotation:-3.2,x:172.5,y:94.1},6).to({regY:97.4,rotation:-2,x:176,y:95.8},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-5.3,299.7,459.1);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(38,36.5,0.688,0.688,0,0,0,55.3,49.6);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.3,29.3,0.688,0.688,0,0,0,47.4,40.1);
	this.instance_1.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FFEB").s().p("AmYEPQgbgjAIg1IANgvQgDAMABAKQAAAfAYAgQBCBYCagTQCZgTCVhyQCXhyA8iOQA7iOhChXQgVgcgbgIIAFAAQAzAJAdAaQBfBXg5CiQg5CjiwCFQiyCIigAPQgUACgTAAQiFAAhKhigAD2lwQAOgBAMACIAOADg");
	this.shape.setTransform(30.5,29,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32FFEB").ss(3.8).p("AhGAhQAVAaAhAEQAgADAagVQAZgUADgfQAEgfgSgZ");
	this.shape_1.setTransform(68.3,77.5,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32FFEB").s().p("AAWCdIgXgCIh2iiQgXgdADglQAEgmAdgYQAfgZAnAFQAnAFAXAgIBxCbQAIBahKAXQgVAHgaAAIgEAAg");
	this.shape_2.setTransform(18.8,10.8,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#32FFEB").ss(4).p("AEPjnQAfBIgwBnQgxBohpBPQhnBQhuATQhsATg9gw");
	this.shape_3.setTransform(76.3,91.4,0.688,0.688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#32FFEB").ss(3.5).p("ACKltQChgOBKBiQBKBig5CXQg5CXiaB1QibB0igAOQihAOhKhiQhKhhA5iYQA5iXCah0QCah1ChgOg");
	this.shape_4.setTransform(67.1,79.5,0.688,0.688);

	this.instance_2 = new lib.Path_30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.5,100.1,0.688,0.688,0,0,0,45.1,38.1);
	this.instance_2.alpha = 0.441;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32FFEB").s().p("AlnERQg0hEBFiAQBFh/CVhyQCUhxCPgfQCOggAzBEQA0BEhFCAQhFCAiVBwQiUBxiPAgQgtAKgkAAQhNAAgjgugACOkSQh4AiiBBiQiCBjhBBpQg/BqAnA0QAnA0B4ggQB4ghCBhiQCDhjBAhpQA/hqgng1QgYggg4AAQgiAAgtAMg");
	this.shape_5.setTransform(26.4,22.1,0.688,0.688);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32FFEB").s().p("AlZGLQg9gagjgyQgqg5gChMQgChNAmhWQAkhQBBhNQBBhMBWg+QBihHBqgnQBqgnBfAAQBNAAA+AbQA8AaAjAyQAqA5ABBNQADBNgmBWQgkBQhBBMQhCBNhWA+QhhBGhqAnQhpAnhgAAQhOAAg8gbgAAWlZQhlAlheBEQiqB6hFCdQhFCdBIBkQAeArA2AWQAzAVBDAAQBYAABigkQBlglBehEQCqh6BFicQBFiehIhkQgegqg2gWQgzgWhDAAQhYAAhiAkg");
	this.shape_6.setTransform(36.4,35.7,0.688,0.688);

	this.instance_3 = new lib.Path_34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47.3,44.5,0.688,0.688,0,0,0,65.1,54.2);
	this.instance_3.alpha = 0.301;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#32FFEB").ss(3.8).p("AD8m8Qg/BfhtBgQjZC+joAAIg7EbIAUAtQAZA1AaAoQBTCBA6gyQAQgOBcg8QB2hNBFgxQCdhuBMhGQB+h0gJhKQgHgEgIgIQgQgPgEgWQgEgqgFgXQgJgpgfgNQgbgLgEgZQgGglgTgZQgagjgIgJg");
	this.shape_7.setTransform(47.3,68.9,0.688,0.688,0,0,0,0,0.3);

	this.instance_4 = new lib.Path_40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.7,88.8,0.688,0.688,0,0,0,55.8,51.6);
	this.instance_4.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_7},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,100.3,110.4), null);


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(63.6,18.6,1,1,0,0,0,65.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-3.7,119.7,44);


(lib.元件46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(449.1,47,1,0.522,0,0,0,379.3,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-6.8,994,108);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件38();
	this.instance.parent = this;
	this.instance.setTransform(63.6,18.6,1,1,0,0,0,65.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-3.7,119.7,44);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AilJhQiRhRh+gFQgogCggAHIgYAGIifgxIA4tTIFAj9QH2g2AAAAQHpDGABgBIAPMAIisCsIm3DTIgBAAIj1hCgAqzHlIAAAAIAAAAIAAAAg");
	mask.setTransform(101.7,43.9);

	// 图层 4
	this.instance = new lib.元件26();
	this.instance.parent = this;
	this.instance.setTransform(242.6,187.6,1,1,0,0,0,10,31.4);
	this.instance.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.1,regY:31.5,scaleX:0.96,x:242.7,y:187.7},16).wait(5).to({regX:10,regY:31.4,scaleX:1,x:242.6,y:187.6},14).wait(8).to({regX:10.1,regY:31.5,scaleX:0.96,x:242.7,y:187.7},12).wait(6).to({regX:10,regY:31.4,scaleX:1,x:242.6,y:187.6},10).wait(11));

	// 图层 2
	this.instance_1 = new lib.元件29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260.7,130.1,1,1,0,0,0,27.2,32.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:27.3,regY:32.3,rotation:-32.2,x:260.8},16).wait(5).to({regX:27.2,regY:32.2,rotation:0,x:260.7},14).wait(8).to({regX:27.3,regY:32.3,rotation:-32.2,x:260.8},12).wait(6).to({regX:27.2,regY:32.2,rotation:0,x:260.7},10).wait(11));

	// 图层 5
	this.instance_2 = new lib.元件30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.8,90.2,0.941,1,0,0,0,69.4,90.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.7,x:130.5,y:76},16).wait(5).to({rotation:0,x:121.8,y:90.2},14).wait(8).to({rotation:6.7,x:130.5,y:76},12).wait(6).to({rotation:0,x:121.8,y:90.2},10).wait(11));

	// 图层 3
	this.instance_3 = new lib.元件51("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(243.8,155.3,1,1,0,0,0,228.3,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:6.7,x:244,y:154.8},16).wait(5).to({startPosition:0},0).to({rotation:0,x:243.8,y:155.3},14).wait(8).to({startPosition:0},0).to({rotation:6.7,x:244,y:154.8},12).wait(6).to({startPosition:0},0).to({rotation:0,x:243.8,y:155.3},10).wait(11));

	// 图层 1
	this.instance_4 = new lib.元件52();
	this.instance_4.parent = this;
	this.instance_4.setTransform(262.7,221.8,1,1,0,0,0,333.6,20.3);
	this.instance_4.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(82));

	// 图层 10
	this.instance_5 = new lib.元件46("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(200.7,231.4,1,1,0,0,0,385.9,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254,-27,994,305.9);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(122.5,90.7,1,1,0,0,0,26.6,90.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 图层 1
	this.instance_1 = new lib.元件4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.8,118.8,1,1,0,0,0,67.8,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0,198.3,160.9);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(164,406.5,1,1,35.5,0,0,10.3,143.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.2,rotation:-6.5,x:163.9,startPosition:12},16).wait(6).to({startPosition:17},0).to({regX:10.3,rotation:35.5,x:164,startPosition:0},19).wait(15));

	// 图层 5
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.7,217.9,1,1,0,0,0,6.8,91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:6.9,rotation:6.1,x:210.6,y:225.9},16).wait(6).to({regX:6.8,rotation:0,x:192.7,y:217.9},19).wait(15));

	// 图层 4
	this.instance_2 = new lib.元件58();
	this.instance_2.parent = this;
	this.instance_2.setTransform(139,328.2,1,1,0,0,0,44,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:44.1,regY:86.6,rotation:6.1,x:145.3,y:329.8},16).wait(6).to({regX:44,regY:86.5,rotation:0,x:139,y:328.2},19).wait(15));

	// 图层 7
	this.instance_3 = new lib.元件54();
	this.instance_3.parent = this;
	this.instance_3.setTransform(155.8,288.6,1,1,0,0,0,66,100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:6.1,x:166.1,y:292.1},16).wait(6).to({rotation:0,x:155.8,y:288.6},19).wait(15));

	// 图层 8
	this.instance_4 = new lib.元件55();
	this.instance_4.parent = this;
	this.instance_4.setTransform(117.8,405,1,1,0,0,0,43.3,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:43.4,rotation:-7.2,x:118.7,y:404.9},16).wait(6).to({regX:43.3,rotation:0,x:117.8,y:405},19).wait(15));

	// 图层 9
	this.instance_5 = new lib.元件56();
	this.instance_5.parent = this;
	this.instance_5.setTransform(198.3,582.3,1,1,0,0,0,42.6,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:201.3,y:575.6},16).wait(6).to({x:198.3,y:582.3},19).wait(15));

	// 图层 10
	this.instance_6 = new lib.元件57();
	this.instance_6.parent = this;
	this.instance_6.setTransform(228.3,740.2,1,1,0,0,0,84.9,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:85,regY:78.5,rotation:11.2,x:215,y:740.4},16).wait(6).to({regX:84.9,regY:78.4,rotation:0,x:228.3,y:740.2},19).wait(15));

	// 图层 1
	this.instance_7 = new lib.元件59();
	this.instance_7.parent = this;
	this.instance_7.setTransform(174.9,418.6,1,1,0,0,0,19.9,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.95},16).wait(6).to({scaleX:1},19).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73,125.1,384.7,622.3);


// stage content:
(lib.东标 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_110 = function() {
		this.stop();
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.play();
		}
	}
	this.frame_185 = function() {
		this.stop();
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		//this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		//function fl_ClickToGoToAndPlayFromFrame_6()
		//{
			//this.play();
		//}
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			console.log(666);
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(110).call(this.frame_110).wait(75).call(this.frame_185).wait(90));

	// 图层 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EioKBa0MAAAi1nMFQUAAAMAAAC1ngEhl5A0VMDQbAAAMAABhk7MjQcAAAg");
	this.shape.setTransform(652.2,311.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},271).wait(4));

	// 图层 18
	this.button_4 = new lib.元件41();
	this.button_4.parent = this;
	this.button_4.setTransform(1261,592.9,1,1,0,0,0,54.2,18.3);
	this.button_4.alpha = 0;
	this.button_4._off = true;
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.元件41(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(100).to({_off:false},0).to({x:1236,alpha:1},8).wait(2).to({x:1250,alpha:0},7).to({_off:true},2).wait(100).to({_off:false,x:1260},0).to({x:1236,alpha:1},7).to({_off:true},45).wait(4));

	// 图层 26
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(581.2,324,1.178,1.178,0,0,0,134.2,225.3);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208).to({_off:false},0).to({x:607.2,alpha:1},6,cjs.Ease.get(1)).to({_off:true},57).wait(4));

	// 图层 25
	this.instance_1 = new lib.元件64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(967.7,318.1,1.388,1.388,0,0,0,216.9,100.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(194).to({_off:false},0).to({x:882.7,y:328.1,alpha:1},6,cjs.Ease.get(1)).wait(6).to({regX:216.8,regY:100.7,scaleX:1,scaleY:1,x:998.6,y:383.8},6,cjs.Ease.get(1)).to({_off:true},59).wait(4));

	// 图层 22
	this.instance_2 = new lib.元件44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1129.8,238,0.805,0.805,-4.9,0,0,296.9,67.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(214).to({_off:false},0).to({x:1055.8,y:245,alpha:1},7,cjs.Ease.get(1)).to({_off:true},50).wait(4));

	// 图层 28
	this.instance_3 = new lib.元件62();
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.4,341,1,1,0,0,0,438.9,196);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(194).to({_off:false},0).to({_off:true},77).wait(4));

	// 图层 29
	this.instance_4 = new lib.元件63();
	this.instance_4.parent = this;
	this.instance_4.setTransform(292.1,177.9,1,1,0,0,0,164.5,76.8);
	this.instance_4.alpha = 0.121;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({_off:true},77).wait(4));

	// logo
	this.instance_5 = new lib.元件65();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1248,592.9,1,1,0,0,0,54.2,18.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).to({x:1236,alpha:1},8).to({_off:true},20).wait(73));

	// 图层 4
	this.instance_6 = new lib.元件53();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1118,234.1,1,1,0,0,0,234.9,71.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145).to({_off:false},0).to({x:1058,y:242.2,alpha:1},7,cjs.Ease.get(1)).wait(6).to({regX:235,regY:71.2,scaleX:1.05,scaleY:1.05,rotation:-1.7,x:1058.1},3).to({rotation:2.5,x:1058,y:242.3},3).to({rotation:-1.7,x:1058.1,y:242.2},3).to({rotation:2.5,x:1058,y:242.3},3).to({rotation:-1.7,x:1058.1,y:242.2},3).to({rotation:2.5,x:1058,y:242.3},3).to({regX:234.9,regY:71.1,scaleX:1,scaleY:1,rotation:0,y:242.2},5).wait(8).to({x:1124.1,y:234.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},8).wait(71));

	// 图层 5
	this.instance_7 = new lib.元件1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(669.1,348.8,0.818,0.818,0,0,0,278.9,450.2);
	this.instance_7.alpha = 0;
	this.instance_7.shadow = new cjs.Shadow("rgba(50,255,235,1)",0,0,12);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(141).to({_off:false},0).to({x:685.1,alpha:1},7,cjs.Ease.get(1)).wait(39).to({x:713.1,alpha:0},7).to({_off:true},8).wait(73));

	// 图层 6
	this.instance_8 = new lib.元件50("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(951,324.2,1.455,1.455,0,0,0,215.5,80.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({_off:false},0).to({x:848,y:334,alpha:1},7,cjs.Ease.get(1)).wait(4).to({startPosition:0},0).to({regX:215.3,regY:80.3,scaleX:1,scaleY:1,x:1052.6,y:378.8},6,cjs.Ease.get(1)).wait(44).to({startPosition:0},0).to({x:1122.6,y:371.8,alpha:0},7).to({_off:true},8).wait(75));

	// 图层 2
	this.instance_9 = new lib.元件48("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(92.4,341.1,0.95,0.95,0,0,0,438.9,196.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).to({regY:196,scaleX:1,scaleY:1,x:116.4,y:341,alpha:1},7).wait(59).to({startPosition:0},0).to({regY:196.1,scaleX:1.05,scaleY:1.05,x:178.4,y:353.1,alpha:0},7).to({_off:true},79).wait(4));

	// 图层 3
	this.instance_10 = new lib.元件49("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(274.1,177.9,1,1,0,0,0,164.5,76.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(124).to({_off:false},0).to({x:292.1,alpha:0.121},6).wait(56).to({startPosition:0},0).to({x:316.1,alpha:0},7).to({_off:true},79).wait(3));

	// 图层 11
	this.instance_11 = new lib.元件37();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1124.4,149,1,1,0,0,0,240.8,68.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).to({x:1016.9,y:159,alpha:1},6,cjs.Ease.get(1)).wait(8).to({regY:68.4,scaleX:1.05,scaleY:1.05,rotation:-3.5,y:159.1},3).to({regY:68.3,rotation:3},3).to({rotation:0,x:1016.8,y:159},3).to({rotation:3,x:1016.9,y:159.1},3).to({rotation:0,x:1016.8,y:159},3).to({x:1016.9},3).to({regY:68.2,scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(34).to({x:1203,y:141,alpha:0},6,cjs.Ease.get(1)).to({_off:true},6).wait(149));

	// 图层 19
	this.instance_12 = new lib.元件16("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(1022.5,349.5,1.244,1.244,0,0,0,956.8,319.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).to({x:928.5,y:359.5,alpha:1},7,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({regX:956.9,regY:319.7,scaleX:0.95,scaleY:0.95,x:1045.5,y:313.4},6).wait(77).to({startPosition:0},0).to({x:1225.6,y:291.4,alpha:0},6,cjs.Ease.get(1)).to({_off:true},9).wait(149));

	// 图层 15
	this.instance_13 = new lib.元件24();
	this.instance_13.parent = this;
	this.instance_13.setTransform(729.5,442.5,1.1,1.1,0,0,0,269.9,118.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({_off:false},0).to({x:745.5,alpha:1},11,cjs.Ease.get(1)).wait(71).to({regY:118.6,y:442.4,mode:"synched",startPosition:75,loop:false},0).to({x:777.5,alpha:0,startPosition:81},6).to({_off:true},2).wait(154));

	// 图层 10
	this.instance_14 = new lib.元件17("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(255,323,0.907,0.907,0,0,0,667,323);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1,x:383,alpha:1},10).wait(103).to({startPosition:0},0).to({scaleX:1.05,scaleY:1.05,x:455,y:349.9,alpha:0},6,cjs.Ease.get(1)).to({_off:true},152).wait(4));

	// 图层 16
	this.instance_15 = new lib.元件23("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(268.3,178,0.714,0.714,-13.2,0,0,248.4,157.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).to({x:292.3,alpha:0.121},8).wait(99).to({startPosition:0},0).to({x:318.3,alpha:0},6).to({_off:true},151).wait(4));

	// 图层 14
	this.instance_16 = new lib.元件21("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(667,323,1,1,0,0,0,667,323);
	this.instance_16.alpha = 0.129;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},271).wait(4));

	// 图层 20
	this.instance_17 = new lib.背景图();
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},271).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243,52.9,2152.5,1162.3);
// library properties:
lib.properties = {
	width: 1334,
	height: 646,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/东标__atlas_.png", id:"东标__atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;