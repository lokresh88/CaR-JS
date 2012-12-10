
(function () {
	/*alert = $$devnull;
	prompt = $$devnull;
	confirm = $$devnull; //TODO: log the return value of confirm

	$$setTIMap = [];
	$$oldST = setTimeout;
	$$oldSI = setInterval;

	setTimeout = function(ptr, time){
		$$setTIMap.push(ptr);
	}

	setInterval = function(ptr, time){
		$$setTIMap.push(ptr);
	}

	randValues = [];
	currRandIt = 0;
	Math.random = function() {
		var val =  randValues[currRandIt++];
		return val;
	};*/

	$CAR_EVENT_KEYUP = 4;
	$CAR_EVENT_KEYDOWN = 2;
	$CAR_EVENT_KEYPRESS = 1;
	$CAR_EVENT_CLICK = 3;
	
	$$counter = 0; // global counter for objects
	$$map = []; // global map of objects
	var GLOBAL_SSD = $.jStorage.get("ssd");
	$$ssID = GLOBAL_SSD; // Session ID ..

	var $$calls = []; //TODO: change name to calls
	$$logEntryArr = $.jStorage.get("UserId"+"_"+$$ssID);
	$$logEntryStepCount = 0;
	console.log($$logEntryArr);
	
	$$logTimeOuts = JSON.parse(localStorage.getItem("UserId"+"_"+$$ssID));
	console.log($$logTimeOuts);
	
	
	/*if($$counter<2){
	 var e = jQuery.Event("click", { keyCode: event.which });
	 console.log(getElementsByXPath(document,getElementXPath(event.target)));
	  jQuery(getElementsByXPath(document,getElementXPath(event.target))).trigger( e ); 
	}*/
	
	
	/*jQuery.ajax({
		url: '../carjs/gimmerands.jsp',
		async:   false,
		success: function(data){
			randValues = data.split(',');
		},
		type: 'POST'
	});*/
/*	jQuery.post('../carjs/gimmefuncs.jsp', function(data) {
		data = data.trim();
		var rows = data.split("__");
		for ( var i = 0; i < rows.length; i++) {
			rows[i] = jQuery.trim(rows[i]);
			if (rows[i]) {
				unJSONrow = JSON.parse(rows[i]);

				var funcName = unJSONrow[0];
				var funcArgs = unJSONrow[1];
				var funcTime = unJSONrow[2];
				var call = [];
				call.push(funcName)
				for ( var j = 0; j < funcArgs.length; j++) {
					call.push(funcArgs[j]);
				}

				$$calls.push(call);
			}
		}*/
		jQuery(function(){ //onload
			$$executor = new Executor($$calls);
			$$popup = window.open('carjs/controller.html','controller','height=150,width=250')
			if ($$popup.focus) {$$popup.focus()};
		});

})();

function $$devnull() {
	// do nothing

}



function getElementsByXPath(doc, xpath)
{
var nodes = [];

try {
var result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
for (var item = result.iterateNext(); item; item = result.iterateNext())
nodes.push(item);
}
catch (exc)
{
// Invalid xpath expressions make their way here sometimes. If that happens,
// we still want to return an empty set without an exception.
}

return nodes;
};




/**
* Gets an XPath for an element which describes its hierarchical location.
*/
getElementXPath = function(element)
{
if (element && element.id)
return '//*[@id="' + element.id + '"]';
else
return this.getElementTreeXPath(element);
};

getElementTreeXPath = function(element)
{
var paths = [];

// Use nodeName (instead of localName) so namespace prefix is included (if any).
for (; element && element.nodeType == 1; element = element.parentNode)
{
var index = 0;
for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling)
{
// Ignore document type declaration.
if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
continue;

if (sibling.nodeName == element.nodeName)
++index;
}

var tagName = element.nodeName.toLowerCase();
var pathIndex = (index ? "[" + (index+1) + "]" : "");
paths.splice(0, 0, tagName + pathIndex);
}

return paths.length ? "/" + paths.join("/") : null;
};



function Executor($$calls){
	this.currI = 0;

	/*this.stepAll = function(){
		while(this.step());
	}

	this.stepNum = function(num){
		for (;num > 0; num--){
			if (!this.step()) break;	//break if the step didn't do anything aka nothing more to process from log
		}
	}*/

	//step does one step and returns if it did anything for that call
	this.step = function(){
		if (/*$$logEntryArr==null || $$logEntryStepCount>=$$logEntryArr.length ||*/ $$logTimeOuts==null || $$logEntryStepCount>=$$logTimeOuts.length) 
			return false;
			var logEntryJSOnObj = $$logTimeOuts[$$logEntryStepCount++];
			console.log(logEntryJSOnObj);
			
			if(logEntryJSOnObj.Type=="event"){
			
			if(getElementsByXPath(document,logEntryJSOnObj.elem).length>0){
				var taergetElm = getElementsByXPath(document,logEntryJSOnObj.elem)[0];
			var e = null;
			if(logEntryJSOnObj.event == $CAR_EVENT_CLICK){
				e = jQuery.Event("click");
				$(taergetElm).focusin();
			}else if(logEntryJSOnObj.event == $CAR_EVENT_KEYPRESS){
				e = jQuery.Event("keypress");
				e.which = logEntryJSOnObj.which;
				e.keyCode = logEntryJSOnObj.keyCode;
				e.bubbles=true;
				$(taergetElm).val($(taergetElm).val()+String.fromCharCode(logEntryJSOnObj.which));
			}else if(logEntryJSOnObj.event == $CAR_EVENT_KEYDOWN){
				e = jQuery.Event("keydown");
				e.which = logEntryJSOnObj.which;
				e.bubbles=true;
				e.keyCode = logEntryJSOnObj.keyCode;
			}else if(logEntryJSOnObj.event == $CAR_EVENT_KEYUP){
				e = jQuery.Event("keyup");
				e.which = logEntryJSOnObj.which;
				e.bubbles=true;
				e.keyCode = logEntryJSOnObj.keyCode;
			}
			$$popup.document.getElementById("stepinfo").innerHTML = $$logEntryStepCount;	
			$$popup.document.getElementById("stepDetail").innerHTML = JSON.stringify(logEntryJSOnObj,replacer);
			jQuery($(taergetElm)).trigger(e); 
			}
			}else if(logEntryJSOnObj.Type=="fn"){
				if(!logEntryJSOnObj.Anon){
					window[logEntryJSOnObj.fnName]();
				}else if(logEntryJSOnObj.Anon){
					//window['foo']()
					var func = new Function('logEntryJSOnObj.fnName');
					func();
				}
	}
	}
	
	function replacer(key, value) {
	    if (typeof value === 'number' && !isFinite(value)) {
	        return String(value);
	    }
	    return value;
	}
}
/*

function $$startEvalsing() {
	// the call row i construct in gimmelog ajax response if of the form
	// [function name, arg1, arg2...]
	var i = 0;
	outer:
		for ( ; i < $$calls.length; i++) {
			var call = $$calls[i];

			//process the arguments to the function call (note that the loop starts from 1)
			//this loop corrects the argument in place in 'call'. By correct I mean that
			//if some object like event needs to be created, it will create and put in 
			//in that place in array 'call'
			var dispatched = false;
			for ( var j = 1; j < call.length; j++) {
				if ($$checkType(call[j], 'string') && call[j].match(/^\$\$map/)) { 
					// if it's an argument that is a map counter
					var counter = call[j].substr(5);
					call[j] = $$map[counter];
				} else if ($$checkType(call[j], 'object')
						&& $$checkType(call[j][0], 'string')
						&& call[j][0].match(/^\$\$/)) {
					// system object like event or element that we need to recreate
					var objectType = call[j][0].substr(2);
					var originalCallObject = call[j];
					var target = originalCallObject[1].target;
					//TODO: cleanup to remove redundant statements in key and mouse events branches
					if (objectType.match(/event/i)){

						$$dispatchEvent(originalCallObject[1]);
						dispatched = true;
						break;

					}
					else if (objectType.match(/element/i)) {
						//because element will be logged as [$$eventa,] for anchor element ('$$event' prefix)
						//we remove the first 'event' prefix from it.
						objectType = objectType.substr(5); 
						call[j] = document.createElement(objectType);
						for ( var prop in originalCallObject[1]) {
							// overwrite properties from actual object captured
							call[j][prop] = originalCallObject[1][prop]; 
						}
					} else {
						alert("Cannot recreate object. Is not element or event: " + objectType);
					}
				}
			}
			if (dispatched) continue;
			var funcName = call[0];
			if (funcName.match(/^\$\$setTI/)){
				var info = funcName.split('_');
				var ptrIndex = info[1];
				var ptr = $$setTIMap[ptrIndex];
				$$arrRemove($$setTIMap, ptrIndex);
				var args = [];
				var k = 1;
				for (; k < call.length; k++){
					args.push(call[k]);
				}
				ptr.apply(this, args);
			}
			else{
				var callString = funcName + "(";
				for ( var j = 1; j < call.length; j++) {
					
					if (j < call.length - 1) {
						callString += "call[" + j + "],";
					} else {
						callString += "call[" + j + "]";
					}
				}
				callString += ")";
				eval(callString); //TODO: can I avoid eval and use call/apply?
			}
		}
}


function $$dispatchEvent(loggedObject) {
	var type = loggedObject.type;
	if (type.match(/key/i)){
		type = "KeyboardEvent";
	}
	else if (type.match(/click/i) || type.match(/mouse/i)){
		type = "MouseEvent";
	}
	else{
		alert('carjs error: unsupported event type');
	}

	var ev = document.createEvent(type);

	var target = loggedObject.target;
	delete loggedObject.target; //target should not get mixed up with event properties

	// since event parameters can only be set thru initEvent
	// I have to check which of the properties are modified and use that
	// else send the default value of that property to initEvent
	// It sucks that I can't do ev.type = "keydown"
	// props in order for initEvent are: (type, canBubble, cancelable, view,
	// detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey,
	// metaKey,
	// button, relatedTarget)
	var props;
	switch (type) {
	case 'MouseEvent':
		//mouse initevent api for FF and Chrome looks same according to spec of browsers
		props = {
			'type' : '',
			'bubbles' : false,
			'cancelable' : false,
			'view' : null,
			'detail' : 0,
			'screenX' : 0,
			'screenY' : 0,
			'clientX' : 0,
			'clientY' : 0,
			'ctrlKey' : false,
			'altKey' : false,
			'shiftKey' : false,
			'metaKey' : false,
			'button' : 0,
			'relatedTarget' : null
	};
		break;
	case 'KeyboardEvent':
		//possibly a webkit only fix
		if (loggedObject.keyCode == undefined){
			loggedObject.keyCode = loggedObject.keyIdentifier; //hopefully this property is present
		}


		//keyboard init*event in FF and chrome are different. So we need to do some 
		//work here. ARRRGGGH!


		if (jQuery.browser.webkit){
			props = {
					'type' : '',
					'bubbles' : false,
					'cancelable' : false,
					'view' : null,
					'keyCode' : 0,
					'location' : ""
			}
		}
		else if (jQuery.browser.mozilla){
			props = {
					type : '',
					bubbles : false,
					cancelable : false,
					view : null,
					ctrlKey : false,
					altKey : false,
					shiftKey : false,
					metaKey : false,
					keyCode : 0,
					charCode : 0
			}
		}

		break;
	default:
		alert("carjs: unsupported event type");
	}
	var propsArray = [];
	var i = 0;

	// better implementation is necessary. if location etc have to work
	// for keyboard event. Sadly it's not a direct match of initEVent arg to
	// event property name.
	// for now event type and keycode will work which is all i care for tetris
	for ( var prop in props) {
		if (prop == 'x' || prop == 'X') prop = "clientX"; //fix because 'x' is a property that doesn't exist in createEVent dom2 api
		if (prop == 'y' || prop == 'Y') prop = "clientY"; //fix because 'x' is a property that doesn't exist in createEVent dom2 api
		if (loggedObject[prop] != undefined) {
			props[prop] = loggedObject[prop];
		}
		propsArray[i++] = props[prop];
	}

	switch (type) {
	case 'MouseEvent':
		ev.initMouseEvent.apply(ev, propsArray);
		break;
	case 'KeyboardEvent':

		if (jQuery.browser.webkit){
			ev.initKeyboardEvent.apply(ev, propsArray); 
		}
		else{
			ev.initKeyEvent.apply(ev, propsArray); 
		}
		break;
	default:
		alert("unsupported event type");
	}
	if (target){
		document.getElementById(target).dispatchEvent(ev);
	}
	else{//assuming that target is document and hope someone takes it
		document.dispatchEvent(ev);
	}
}

function $$checkType(object, type) {
	// I wanted it to work irrespective of case
	// this function is a super complicated implementation of equalsIgnoreCase

	var regex = new RegExp(type, "i");
	if ((typeof object).match(regex))
		return true;
	else
		return false;
}

function $$logEntry(whatWasThis, funcName, origArgs) {
	
	if (whatWasThis != window) {
		whatWasThis.$$counter = $$counter;
		$$map[$$counter] = whatWasThis;
		$$counter++;
	}
}*/


