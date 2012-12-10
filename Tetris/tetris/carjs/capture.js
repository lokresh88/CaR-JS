/*****************
 * 
 * Capture And Replay through JS -->CARJS
 * Captures - Event Based model ..
 * All Keyboard presses, Mouse Clicks, SetTimeOut and Intervals,Ajax & Math.Random()
 * Uses LocalStorage for Logging
 * Use LocalStorage.clear() -- for Flusshing
 * Each Session gets unique Id created which serves as the key for the Log
 * 
 * Use the console to view logs. utils at the bottom available for printing these logs.
 */


//useful utility
// Array Remove - By John Resig (MIT Licensed)
function $$arrRemove(arr, index) {
	  var origLength = arr.length;
		var rest = arr.slice(parseFloat(index) + 1 );
	  arr.length = index;
	  arr.push.apply(arr, rest);	
	  console.log(origLength - arr.length);
	  if(origLength - arr.length != 1) throw Error('CarJS error: problem with arrRemove:(');
};


(function (){
///	jQuery.post('http://DebugMonitor/carjs/delete_log.jsp');
	// set of constants for the events being handled ..

	// Constants ...
	$CAR_EVENT_KEYUP = 4;
	$CAR_EVENT_KEYDOWN = 2;
	$CAR_EVENT_KEYPRESS = 1;
	$CAR_EVENT_CLICK = 3;	
	$CAR_EVENT_SETTIMEOUTDEFFN=10;
	$CAR_EVENT_SETTIMEOUTANONFN=11;
	

	// Setup Global ID -- key for Log Event
	var GLOBAL_SSD = $.jStorage.get("ssd");
	if(GLOBAL_SSD==null){
		GLOBAL_SSD=1000;
	}else{
		GLOBAL_SSD++;
	}
	$.jStorage.set("ssd",GLOBAL_SSD);
	$$counter = 0; 	//global counter for objects
	$$rcounter = 0 ; // for randoms generated
	$$ssID = GLOBAL_SSD; // Session ID ...
	logEntryArr = [];
	logTimeOutCalls = {};
	$.jStorage.set("UserId"+"_"+$$ssID,logEntryArr);
	localStorage.setItem("UserId"+"_"+$$ssID, JSON.stringify(logTimeOutCalls));
	localStorage.setItem("randoms"+"_"+$$ssID, JSON.stringify(logTimeOutCalls));
	
	// construct the json formation..
	var stoutMap = {};
	var stoutCnt = 0;	
	$$map = []; 	//global map of objects which are used for logging parameters of functions
	$$setTIMap = [];
	$$oldST = setTimeout;
	$$oldSI = setInterval;
	
	
	// Instrument the fn on the On the Fly..
	setTimeout = function(ptr, time){
		/*if(ptr.name!=null && ptr.name!=""){
			stoutMap[$$counter] = ptr.toString();
			$$logEventEntryFns($CAR_EVENT_SETTIMEOUTDEFFN,ptr.name,false,true);
		}else{
			stoutMap[$$counter] = ptr.toString();
			$$logEventEntryFns($CAR_EVENT_SETTIMEOUTANONFN,ptr.toString(),true,true);
		}
		return $$oldST(ptr, time);*/

		// Fn Name -- got so its a defined one
				if (ptr.name != null && ptr.name != "") {
			var instrPtr = function instrumentedVersion() {
				$$logEventEntryFns($CAR_EVENT_SETTIMEOUTDEFFN, ptr.toString(),
						true, false);
				ptr();
			};
			return $$oldST(instrPtr, time);
		}
				// For Anon Fns ...
		var instrPtr = function instrumentedVersion() {
			$$logEventEntryFns($CAR_EVENT_SETTIMEOUTDEFFN, ptr.toString(),
					true, false);
			ptr();
		};
		return $$oldST(instrPtr, time);
			
		/*
		 * var instrPtr = function instrumentedVersion() {
		 * $$logEventEntryFns($CAR_EVENT_SETTIMEOUTANONFN,ptr.toString(),true,false);
		 * ptr(); }; return $$oldST(instrPtr, time);
		 */
	};
	
	// Instrument the fn on the On the Fly..
	// Convert SI to ST Type .. We do it this way in replay for full control !!!
	setInterval = function(ptr, time){
		/*if(ptr.name!=null && ptr.name!=""){
			stoutMap[$$counter] = ptr.toString();
			$$logEventEntryFns($CAR_EVENT_SETTIMEOUTDEFFN,ptr.name,false,false);
			
		}else{
			stoutMap[$$counter] = ptr.toString();
			$$logEventEntryFns($CAR_EVENT_SETTIMEOUTANONFN,ptr.toString(),true,false);			
		}
		return $$oldSI(ptr, time);*/

		// Fn Name -- got so its a defined one
				if (ptr.name != null && ptr.name != "") {
			var instrPtr = function instrumentedVersion() {
				$$logEventEntryFns($CAR_EVENT_SETTIMEOUTDEFFN, ptr.toString(),
						true, false);
				ptr();
			};
			return $$oldSI(instrPtr, time);
		}

		// For Anon Fns ...
		var instrPtr = function instrumentedVersion() {
			$$logEventEntryFns($CAR_EVENT_SETTIMEOUTDEFFN, ptr.toString(),
					true, false);
			ptr();
		};
		return $$oldSI(instrPtr, time);
	
		/*var instrPtr = function instrumentedVersion() {
			$$logEventEntryFns($CAR_EVENT_SETTIMEOUTANONFN,ptr.toString(),true,false);	
		    ptr();
			};
	return $$oldSI(instrPtr, time);*/
	};
	
	$$currFunc = null;
	$$currArgs = null;
	$$currFuncTime = null;
	$$oldRand = Math.random;
	
	// Log and use the Sequence in replay
	Math.random = function(){
		var val = $$oldRand();
		var logEntryArr = JSON.parse(localStorage.getItem("randoms"+"_"+$$ssID));
		logEntryArr[$$rcounter++]=val;
		localStorage.setItem("randoms"+"_"+$$ssID,JSON.stringify(logEntryArr));
		return val;
	};
	
	$$randCache = "";
	$$funcCache = [];
	$$logheader = 0;

	// Unused for now !!
	//sends the log in cache every so many milliseconds and clears cache
	$$oldSI(function(){
		$$sendLog();
		//reset the cache to empty
		$$funcCache = [];
		$$randCache = "";
	}, 100);
	
	
	// The listeners
	$(document).click(function(event) {
		$$logEventEntry($CAR_EVENT_CLICK, event);
	});

	$(document).keypress(function(event) {
		$$logEventEntry($CAR_EVENT_KEYPRESS, event);
	});

	$(document).keydown(function(event) {
		$$logEventEntry($CAR_EVENT_KEYDOWN, event);
	});
	
	$(document).keyup(function(event) {
		$$logEventEntry($CAR_EVENT_KEYUP, event);
	});
		
	
})();



function $$logEventEntry(style,event){
	var logEntry = {Type:"event",count:$$counter,DE:1,elem:getElementXPath(event.target),event:style,keyCode:event.keyCode,which:event.which,xPos:event.pageX,yPos:event.pageY};
	
	// jstorage .. can be used but currently using localstorage
	/*var logEntryArr = $.jStorage.get("UserId_"+$$ssID);
	logEntryArr.push(logEntry);
	$.jStorage.set("UserId"+"_"+$$ssID,logEntryArr);*/
	
	var logEntryArr = JSON.parse(localStorage.getItem("UserId"+"_"+$$ssID));
	logEntryArr[$$counter++]=logEntry;
	localStorage.setItem("UserId"+"_"+$$ssID,JSON.stringify(logEntryArr));
	console.log(logEntry);
}

function $$logEventEntryFns(style,fnname,anon,stimeout){	
	var logEntry = {Type:"fn",count:$$counter,DE:0,fnName:fnname,Anon:anon,timeout:stimeout};
	var logEntryArr = JSON.parse(localStorage.getItem("UserId"+"_"+$$ssID));
	logEntryArr[$$counter++]=logEntry;
	localStorage.setItem("UserId"+"_"+$$ssID,JSON.stringify(logEntryArr));
	console.log(logEntry);
}


// Firefox --- get XPath of an Doc Element
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


function $$logEntry(whatWasThis, funcName, origArgs, origCallee) {
}


/*** OLD CODE -- FUNCTION BASED CAR ****/
/*	
	//inject a counter in that object for knowing that object's global counter value
	if (whatWasThis != window){	
		whatWasThis.$$counter = $$counter; 
		$$map[$$counter] = whatWasThis;	
		$$counter++;
	}
	//if this call was inside another function we don't need to log it
	if (!$$currFunc){ 
		$$currFunc = funcName;
		if ($$currFunc == "$$script$$"){
			//script scrope executing. Nothing to log here
			return;
		}
		if ($$setTIMap.length > 0){ 
			//there is a function waiting to be executed. 
			//Is it this fync that got fired by setTimtout or Interval?
			for (var i = 0; i < $$setTIMap.length; i++){
				if (origCallee == $$setTIMap[i]){
					//yes, this function was called from setTimeout or interval
					$$currFunc = "$$setTI_" + i + "_" + funcName; 
					$$arrRemove($$setTIMap, i);
					break;
				}
			}
		}
		var containsCallee = false;
		if (funcName.match(/\$\$anonym/)){
			containsCallee = true;
		}
		
		$$currArgs = $$processArgs(origArgs, containsCallee);
		$$currFuncTime = new Date().getTime();
	}
	//if (new Date().getTime() - start < 10000){
	/*	console.log(arguments); 
		//var isWin = (arguments[1].
		var row = ["Entry"];
		for (var i = 0; i < arguments.length - 1; i++){
			row.push(arguments[i]);
		}
		//$$log.push(row);
		checkAndSend(row);
	//}
	 	
}  */

function $$devnull() {
	// do nothing in replay
}


function $$processArgs(origArgs, containsCallee){
	//each argument is a row in the array output
	//this is obviously expensive. Let's see how this goes and then optimize it later
	var output = [];
	
	//if it was anonym prefixed method, then the original callee was also passed
	//else it wasn't. So we account for it.
	var argsLength = (containsCallee ? origArgs.length - 1: origArgs.length);
	for (var x = 0; x < argsLength; x++){
		var item = origArgs[x];
		var outputItem;
		var className = item.constructor.name;
		if (item == window){
			throw Error('CARJS error: this program sends window as param??');
		}
		else{
			//If it's a HTML element like HTMLAnchorElement, then in chrome you can 
			//check using item.constructor.name, but in Firefox you do a nodeType check
			var nodeType = item.nodeType;
			if ( (className && className.match(/HTML[a-zA-Z0-9]*Element$/i)) ||
					( nodeType && nodeType === 1)){
				var props = ["innerHTML","search","setAttribute","removeChild","addEventListener","style","length","className","appendChild"];
				var minObject = ""//$$addPropsFound(props, item);
				outputItem = ["$$element" + item.localName, minObject];
			}
			else{
				//should be user defined object
				var isPrimitive = (typeof item) in {'string':'', 'number':'', 'boolean':''};
				if (isPrimitive){
					outputItem = item;
				}
				else if (item.$$counter != undefined){
					//our instrumented object which has counter
					outputItem = "$$map" + item.$$counter; //$$ prefix implies it's a map id	
				}
				else if (item.altKey !== undefined && item.metaKey !== undefined){
					//className doesn't work across browsers for event obejcts. So I'm using
					//two properties found in KeyboardEvent and MouseEvent to check if it's that type
					
					var props = ["keyCode", "innerHTML","search","setAttribute","removeChild","addEventListener","style","length","className","appendChild",
					             "type", "bubbles", "cancelable", "which", "pageX",
									"pageY", "isChar", "getPreventDefault", "screenX", "screenY",
									"clientX", "clientY", "ctrlKey", "shiftKey", "altKey",
									"metaKey","keyIdentifier","x", "y", "X", "Y"];
					if (jQuery.inArray("keyCode", props) == -1) props.push("keyCode");
					var minObject = $$addPropsFound(props, item);
					minObject.target = item.target.id;
					minObject.type = item.type;
					outputItem = ["$$event", minObject];
				}
				else{
					//this object doesn' thave counter, nor is it an Event, nor is it an Element.
					throw Error("carjs ERROR: we have a problem logging object: " + item.toString().substring(0, 30));
				}
	
	
			}
		}
		output.push(outputItem);
	}
	return output;

}

function $$addPropsFound(foundProps, currArg){
	var myEvent = new Object();
	for (i in foundProps){
		var theProperty = foundProps[i];
		if (currArg[theProperty] != undefined){ //if current argument has the property
			myEvent[theProperty] = currArg[theProperty];
		}

	}
	return myEvent;

}
function $$logExit(funcName) {  
	
	var setTIregex = new RegExp("^\\$\\$setTI.*" + funcName.substr(2) + "$");	
	//had to take substr because otherwise have to escape the '$$' in funcName
	if ($$currFunc == funcName || ($$currFunc && $$currFunc.match(setTIregex))){
		if ($$currFunc != "$$script$$"){ //nothing to log if script scope
			
			$$funcCache.push([$$currFunc, $$currArgs, $$currFuncTime]);
			var data = JSON.stringify([ $$currFunc, $$currArgs, $$currFuncTime ]) + "__\n";		
			$(document).find("#testStorage").append(data);
			
			// use  jstorage -- expensive in terms of cost incourred ...
			/*if (data.length > 0) {*/
				//$.jStorage.set("UserId_"+$$STOREID, [$$currFunc, $$currArgs, $$currFuncTime]);
				//$$STOREID++;						
			/*}*/
		}
		
		//$$sendLog();
		$$currFunc = null;
		$$currArgs = null;
	}

	//return what was returned by original function
	return arguments[arguments.length - 1];
}

function $$sendLog(){
	/*if ($$randCache != ""){
		jQuery.ajax({
			url: "../carjs/log_rand.jsp",
			data: {log: $$randCache},
			async:   false, 
			type: "POST"
		});
	}*/
	
	// no need to send so frequently ..
	/*var data = "";
	for (var i = 0; i < $$funcCache.length; i++){
		data += JSON.stringify($$funcCache[i]) + "__\n";
	}
	if (data.length > 0){
		jQuery.ajax({
			url: "../carjs/log_func.jsp",
			data: {log: data},
			async:   false,
			type: "POST"
		});
	}*/
}

function $$sendLog1($$temp1,$$temp2) {
	if($$temp1 != ""){
		$.jStorage.set("RandId_"+$$STORERANDID, $$temp1);
		$$STORERANDID++;
	}
	
	var data = "";
	for ( var i = 0; i < $$temp2.length; i++) {
		data += JSON.stringify($$temp2[i]) + "__\n";
	}
	if (data.length > 0) {
		$.jStorage.set("UserId_"+$$STOREID, data);
		$$STOREID++;						
	}
	}
	




function sendCompleteLogs(){
	var randvuffer = "";
	var randvuffer = $(document).find("#randStorage").html();
	if (randvuffer.length>0) {
		jQuery.ajax({
			url : "../carjs/log_rand.jsp",
			data : {
				log : randvuffer
			},
			async : false,
			type : "POST"
		});
	}
	
	
	var bufferdatajs = $(document).find("#testStorage").html();
	//$.jStorage.set("UserId",bufferdatajs); // Use this to set the Log based upon User ID !!!!
	// cost high !
	/*	for(var i=0;i<$$STOREID;i++){
		bufferdatajs+=$.jStorage.get("UserId_"+i);
	}*/		
	
	jQuery.ajax({
		url : "../carjs/log_func.jsp",
		data : {
			log : bufferdatajs
		},
		async : false,
		type : "POST"
	});
	
//	$.jStorage.flush();																											

}

// Util for printing -- used for debugging ..
function getStoredLogs(){	
	var randvuffer=$.jStorage.get("UserId_"+$$ssID);
	for(var i=0;i<randvuffer.length;i++){
		//console.log(randvuffer[i]);
	}
}
