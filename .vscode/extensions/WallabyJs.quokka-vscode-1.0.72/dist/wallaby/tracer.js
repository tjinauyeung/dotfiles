/*
 * Wallaby.js - v1.0.507
 * http://wallabyjs.com
 * Copyright (c) 2014-2017 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
!function(e){e.addEventListener&&(e.addEventListener("beforeunload",function(){if(!(e.$_$tracer&&e.$_$tracer._finished||e.navigator&&e.navigator.userAgent&&!/PhantomJS/.test(e.navigator.userAgent)&&!/Electron/.test(e.navigator.userAgent)&&!e.$_$tracer._startRequested))throw new Error("One of your tests is trying to unload window object.")}),e.$_$reportUnhanledPromises&&e.addEventListener("unhandledrejection",function(e){if(e&&e.reason){var t=new Error;throw e.reason.stack&&(t.stack=e.reason.stack),t.message="Unhandled promise rejection: "+(e.reason.message||e.reason),t}}));var t,n=/%[sdj%]/g;"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(e){var t=Array.prototype.slice.call(arguments,1),n=this,i=function(){},r=function(){return n.apply(this instanceof i?this:e||{},t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype||{},r.prototype=new i,r});var i=function(){var t=this;t._noOp=function(){},t._maxLogEntrySize=16384,t._undefined=e.undefined,t._setTimeout=e.setTimeout,t._Date=e.Date,t._Error=e.Error,t._JSONStringify=JSON.stringify,t._XMLHttpRequest=e.XMLHttpRequest,t._replacedConsoleLog=e.console.log=function(){t._suppressConsoleLog||t._doWhenReceiverIsReady(function(e){t._log.apply(t,e)},arguments)},e.console.warn=function(){t._doWhenReceiverIsReady(function(e){t._warn.apply(t,e)},arguments)},e.console.error=function(){t._doWhenReceiverIsReady(function(e){t._error.apply(t,e)},arguments)},e.console.dir=function(){t._doWhenReceiverIsReady(function(e){t._dir.apply(t,e)},arguments)},t._receiver=e.$_$receiver||new e.WebSocket("ws://127.0.0.1:"+e.$_$receiverPort),t._onReceiverReady=[function(){t._receiverReady=!0}],t._receiver.onopen=function(){for(var e=0,n=t._onReceiverReady.length;n>e;e++)t._onReceiverReady[e]()},t._receiver.onerror=function(e){throw new Error("Sandbox receiver error: "+e.message)},t.reset()};i.prototype={setGlobalErrorHandler:function(){var t=this;e.$_$reuseableTracer||(e.onerror=function(){t._globalBrowserError.apply(t,arguments)})},_globalBrowserError:function(){var e=this;e._doWhenReceiverIsReady(function(t){e._sendBrowserGlobalError.apply(e,t)},arguments)},reportDeclarationError:function(){var e=this;e._doWhenReceiverIsReady(function(t){e._sendDeclarationError.apply(e,t)},arguments)},initialSpecId:function(){return e.$_$initialSpecId},start:function(t){var n=this;if(t||!(n._delayStart||n._startRequested&&!e.$_$reuseableTracer))if(n.reset(),t)this._onStart=t,this._patchFrameworks();else{if(!this._onStart)throw new Error("Missing tracer start subscription");n._startRequested=!0,this._receiverReady?this._onStart():this._onReceiverReady.push(this._onStart)}},isInitialized:function(){return!!e.$_$coverage},statement:function(n,i){e.$_$coverage[n][i][this._spec]=t++},scopeStart:function(e){this._fileEncounter[e]||(this._fileEncounterSequence.push(e),this._fileEncounter[e]=1)},programScopeStartLoading:function(e){this._testFileIds[e]&&this._resetFileData(),this.scopeStart(e)},programScopeEndLoading:function(e){this._testFileIds[e]&&(this._saveCurrentTestLoadingSequence(),this._resetFileData())},_saveCurrentTestLoadingSequence:function(){this._fileEncounterSequence.length&&this._testLoadingSequence.push(this._fileEncounterSequence.slice())},entryFile:function(){return this._fileEncounterSequence[0]},started:function(t){t=t||{},t.loadingSequence=this._testLoadingSequence.slice(),this._resetLoadingData(),this._resetFileData(),e.$_$wp=this._original_$_$wp,e.$_$wpe=this._original_$_$wpe,this._send("started",t)},specStart:function(e,t){var n=this;this._doWhenReceiverIsReady(function(){n._sendWithHighPriority("preTest","string"==typeof t?t:n._format(t))}),this._spec=e,this._resetFileData()},specSyncStart:function(){this._specRangeStart=t},specSyncEnd:function(){this._specRangeEnd=t-1},specEnd:function(){this._spec=0;var e=this._specRangeStart,n=this._specRangeEnd;return this._specRangeStart=0,this._specRangeEnd=0,[e,n||t]},needToNotifySingleTestRun:function(){if(this._paused||this._onResumed||!this.hasSpecFilter()||e.$_$reuseableTracer)return!1;for(var t=e.$_$tests;"*"!==t;){var n=Object.keys(t);if(1!=n.length)return!1;t=t[n[0]]}return!0},notifySingleTestAfterEach:function(t){return this._paused||this._onResumed||e.$_$reuseableTracer?void t():(this._paused=!0,this._onResumed=t,void this._send("resume"))},resume:function(){this._paused&&(this._paused=!1,this._onResumed&&(this._onResumed(),delete this._onResumed))},paused:function(){return this._paused},hasSpecFilter:function(){return!!e.$_$tests&&"*"!==e.$_$tests},specFilter:function(t){var n=e.$_$tests[":?"];if(n&&n[":"+t[t.length-1]])return!0;for(var i=e.$_$tests,r=0,s=t.length;s>r;r++){var o=t[r];if(i=i[":"+o],!i)return!1;if("*"===i)return!0}return!1},complete:function(t){if(e.$_$coverage){var n,i;for(n=0,i=e.$_$coverage.length;i>n;n++){var s=e.$_$coverage[n];s&&s.length&&this._send("coverage",{id:n,ranges:s})}var o=Object.keys(r._autoTimeHits);for(n=0,i=o.length;i>n;n++){var a=r._autoTimeHits[o[n]];a.fileId&&this._sendLog("autoLog",a.value?this._formatTime(a.value)+"ms":"Σ "+this._formatTime(a.total)+"ms, μ "+this._formatTime(a.total/a.n)+"ms, ⋀ "+this._formatTime(a.min)+"ms, ⋁ "+this._formatTime(a.max)+"ms",a.context,a.fileId,a.rangeId)}this._send("complete",t),e.$_$reuseableTracer||(this._receiver.close(),this._finished=!0)}},_formatTime:function(e){return e.toFixed(3)},result:function(t){t.files=this._fileEncounterSequence,e.$_$reuseableTracer&&this._sendWithHighPriority("postTest"),this._send("test",t)},_patchFrameworks:function(){var t=this;if(!t._patchedFrameworks&&!e.$_$reuseableTracer){t._patchedFrameworks=!0;var n=e.requirejs&&"function"==typeof e.requirejs.load,i=e.System&&(e.System.fetch||e.System["import"]);if(t._shouldReportProgramScope=t._shouldReportProgramScope||n||i,n){var r=e.requirejs.load;e.requirejs.load=function(e,n,i){return r.call(this,e,n,t._urlWithFileData(i))}}if(i){var s=e.System.fetch;e.System.fetch=function(){var e=arguments[0]&&arguments[0].address;return e&&(arguments[0].address=t._urlWithFileData(e)),s.apply(this,arguments)};var o=e.fetch;o&&(e.fetch=function(){var e=arguments[0];return e&&(arguments[0]=t._urlWithFileData(e)),o.apply(this,arguments)});var a=e.System["import"];e.System["import"]=function(){var e=arguments[0];return e&&(arguments[0]=t._urlWithFileData(e)),a.apply(this,arguments)}}if(t._XMLHttpRequest){var l=t._XMLHttpRequest.prototype.open;t._XMLHttpRequest.prototype.open=function(e,n){arguments[1]=t._urlWithFileData(n),l.apply(this,arguments)}}t._Error&&!t._Error.captureStackTrace&&e.navigator&&e.navigator.userAgent&&/PhantomJS\/2/.test(e.navigator.userAgent)&&(t._Error.captureStackTrace=function(){})}},_urlWithFileData:function(e){var t=this;if(e&&~e.indexOf("wallabyFileId"))return e;for(var n=[],i=e.replace(/\\/g,"/").split("/"),r=0;r<i.length;r++)"."!==i[r]&&(".."===i[r]&&n.length&&".."!==n[n.length-1]?n.pop():n.push(i[r]));return e=n.join("/"),e=t._appendFileData(e)},_appendFileData:function(t){var n=this,i="/"===t.charAt(0)?t.substr(1):t,r=e.location&&e.location.host&&t.indexOf(e.location.host);r>=0&&(i=i.substr(r+e.location.host.length+1));var s=t.lastIndexOf("?");s>=0&&(i=i.substring(0,s));var o=i&&n._getFileMetadata(i);return o?t+(~s?"&":"?")+o.ts+"&wallabyFileId="+o.id:t},_getFileMetadata:function(t){return e.$_$files[t]||e.$_$files[t.split("\\").join("/")]},_doWhenReceiverIsReady:function(e,t){var n=this;n._receiverReady?e(t):n._onReceiverReady.push(function(){e(t)})},_log:function(){this._sendLog("log",this._format.apply(this,arguments))},_warn:function(){this._sendLog("warn",this._format.apply(this,arguments))},_error:function(){this._sendLog("error",this._format.apply(this,arguments))},_dir:function(e){this._sendLog("dir",this._inspect(e))},_debugLog:function(){this._sendLog("debugLog",this._format.apply(this,arguments))},_sendBrowserGlobalError:function(e,t,n){e=e&&e.toString()||"",t=t&&t.toString()||"",n=n&&n.toString()||"",this._send("globalError",{message:e,stack:e+"\nat "+t+":"+n})},_sendDeclarationError:function(e){this._send("globalError",{message:e.message,stack:e.stack,declaration:!0})},debugLog:function(){var e=this;e._doWhenReceiverIsReady(function(t){e._debugLog.apply(e,t)},arguments)},log:function(){var t=this;if(t._replacedConsoleLog!==e.console.log){for(var n=[],i=arguments.length-3,r=0;i>r;r++)n.push(arguments[r]);t._suppressConsoleLog=!0,e.console.log.apply(console,n),t._suppressConsoleLog=!1}t._doWhenReceiverIsReady(function(e){for(var n=[],i=e.length-3,r=0;i>r;r++)n.push(e[r]);t._sendLog("log",t._format.apply(t,n)||"",e[i],e[i+1],e[i+2])},arguments)},setAssertionData:function(e,t){try{var n=Object.prototype.toString.call(e.actual);e.showDiff===!0&&n==Object.prototype.toString.call(e.expected)&&void 0!==e.expected&&"[object Boolean]"!==n&&"[object Number]"!==n&&"[object Function]"!==n&&("string"!=typeof e.actual&&(e.actual=this._inspect(e.actual,5,1e3,!0),e.expected=this._inspect(e.expected,5,1e3,!0)),t.actual=e.actual,t.expected=e.expected),"UnexpectedError"===e.name&&e.getErrorMessage&&(t.formattedDiff=e.getErrorMessage("ansi").toString()),e.actual&&e.actual.stack&&"string"==typeof e.actual.stack&&(t.stack=t.stack||"",t.stack+="\nFrom actual error object:\n"+e.actual.stack)}catch(i){}return t},diff:function(e,t,n,i,r){var s=this;s._doWhenReceiverIsReady(function(){var o=s.setAssertionData({showDiff:!0,expected:e,actual:t},{});s._sendLog("diff","",n,i,r,o.expected,o.actual)},arguments)},_sendLog:function(e,t,n,i,r,s,o){var a=t?t.length:0;t&&a>this._maxLogEntrySize&&(t=t.slice(0,this._maxLogEntrySize)+"...\n(truncated, total length: "+a+")"),this._send("console",{type:e,text:t||"",spec:this._spec,file:i,range:r,context:n,expected:s,actual:o})},_send:function(e,t){this._receiver.send(this._JSONStringify(this._createMessage(e,t)))},_createMessage:function(t,n){return{type:t,data:n,session:e.$_$session}},_sendWithHighPriority:function(e,t){if(this._highPriorityReceiver){var n=this._createMessage(e,t);n._p="###wpm###",this._highPriorityReceiver.send(this._JSONStringify(n)+"\n")}else this._send(e,t)},_resetLoadingData:function(){this._testLoadingSequence=this._safeObject([])},_resetFileData:function(){this._fileEncounterSequence=this._safeObject([]),this._fileEncounter=this._safeObject([])},reset:function(){var e=this;t=1,e._formattingOpts={},e._autoConsoleHits={},e._autoTimeHits={},e._spec=0,e._specRangeStart=0,e._specRangeEnd=0,e._resetFileData()},_safeObject:function(e){return e.toJSON=this._undefined,e},_format:function(e){var t,i=this._formattingOpts.depth||2,r=this._formattingOpts.maxElementsPerLevel||5e3;if("string"!=typeof e){var s=[];for(t=0;t<arguments.length;t++)s.push(this._inspect(arguments[t],i,r));return s.join(" ")}t=1;for(var o=arguments,a=o.length,l=String(e).replace(n,function(e){if("%%"===e)return"%";if(t>=a)return e;switch(e){case"%s":return String(o[t++]);case"%d":return Number(o[t++]);case"%j":return JSON.stringify(o[t++]);default:return e}}),c=o[t];a>t;c=o[++t])l+=null===c||"object"!=typeof c?" "+c:" "+this._inspect(c,i,r);return l},_inspect:function(e,t,n,i){var r={seen:[],showHidden:!1,hideTypes:i,depth:t||2,stylize:function(e){return e},maxElementsPerLevel:n||5e3};return this._formatValue(r,e,r.depth)},_formatValue:function(e,t,n){var i=this,r=this._formatPrimitive(e,t);if(r)return r;var s=Object.keys(t),o=this._arrayToHash(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(t)),0===s.length){if("function"==typeof t){var a=t.name?": "+t.name:"";return e.stylize("[λ"+a+"]","special")}if(this._isRegExp(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(this._isDate(t))return e.stylize(Date.prototype.toString.call(t),"date");if(this._isError(t))return this._formatError(t)}var l="",c=!1,u=!1,d=!1,h=["{","}"],p=t&&t.constructor&&t.constructor.name||void 0;if(("Object"===p||e.hideTypes)&&(p=void 0),this._isArray(t)?(p=void 0,c=!0,h=["[","]"]):this._isSet(t)?u=!0:this._isMap(t)&&(d=!0),"function"==typeof t){var f=t.name?": "+t.name:"";l=" [λ"+f+"]"}if(this._isRegExp(t)&&(l=" "+RegExp.prototype.toString.call(t)),this._isDate(t)&&(l=" "+Date.prototype.toUTCString.call(t)),this._isError(t)&&(l=" "+this._formatError(t)),""===l&&p&&(h[0]=p+" "+h[0]),c||!this._isIterator(t)||d||u||(l=" [Iterator] "),!(0!==s.length||c&&0!=t.length||u||d))return h[0]+l+h[1];if(0>n)return this._isRegExp(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var _,g=!1;return s.length>e.maxElementsPerLevel&&(s.length=e.maxElementsPerLevel,c&&t&&(t=t.slice(0,e.maxElementsPerLevel)),g=!0),_=c?this._formatArray(e,t,n,o,s):u?this._formatSet(e,t,n,o,s,g):d?this._formatMap(e,t,n,o,s,g):s.map(function(r){return i._formatProperty(e,t,n,o,r,c)}),g&&_.push("..."),e.seen.pop(),this._reduceToSingleString(_,l,h)},_isArray:function(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===this._objectToString(e)},_isSet:function(t){return!!(t&&e.Set&&"[object Set]"===this._objectToString(t)&&t.forEach)},_isMap:function(t){return!!(t&&e.Map&&"[object Map]"===this._objectToString(t)&&t.forEach)},_isIterator:function(t){return!!(t&&e.Symbol&&e.Symbol.iterator&&"function"==typeof t[e.Symbol.iterator])},_isRegExp:function(e){return"object"==typeof e&&"[object RegExp]"===this._objectToString(e)},_isDate:function(e){return"object"==typeof e&&"[object Date]"===this._objectToString(e)},_isError:function(e){return"object"==typeof e&&("[object Error]"===this._objectToString(e)||e instanceof Error)},_objectToString:function(e){return Object.prototype.toString.call(e)},_reduceToSingleString:function(e,t,n){var i=0,r=e.reduce(function(e,t){return i++,t.indexOf("\n")>=0&&i++,e+t.length+1},0);return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]},_formatPrimitive:function(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");case"number":return e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean")}return null===t?e.stylize("null","null"):void 0},_formatError:function(e){return"["+Error.prototype.toString.call(e)+"]"},_formatSet:function(e,t,n,i,r,s){var o=this,a=[];t.forEach(function(t){if(!(a.length>e.maxElementsPerLevel)){var i=null===n?null:n-1,r=o._formatValue(e,t,i);a.push(r)}}),!s&&a.length>e.maxElementsPerLevel&&a.push("...");for(var l=0;l<r.length;l++)a.push(o._formatProperty(e,t,n,i,r[l],!1));return a},_formatMap:function(e,t,n,i,r,s){var o=this,a=[];t.forEach(function(t,i){if(!(a.length>e.maxElementsPerLevel)){var r=null===n?null:n-1,s=o._formatValue(e,i,r);s+=" => ",s+=o._formatValue(e,t,r),a.push(s)}}),!s&&a.length>e.maxElementsPerLevel&&a.push("...");for(var l=0;l<r.length;l++)a.push(o._formatProperty(e,t,n,i,r[l],!1));return a},_formatArray:function(e,t,n,i,r){for(var s=this,o=[],a=0,l=t.length;l>a;++a)this._hasOwnProperty(t,String(a))?o.push(this._formatProperty(e,t,n,i,String(a),!0)):o.push("");return r.forEach(function(r){r.match(/^\d+$/)||o.push(s._formatProperty(e,t,n,i,r,!0))}),o},_formatProperty:function(e,t,n,i,r,s){var o,a,l;if(l=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]},l.get?a=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(a=e.stylize("[Setter]","special")),this._hasOwnProperty(i,r)||(o="["+r+"]"),a||(e.seen.indexOf(l.value)<0?(a=null===n?this._formatValue(e,l.value,null):this._formatValue(e,l.value,n-1),a.indexOf("\n")>-1&&(a=s?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n"))):a=e.stylize("[Circular]","special")),"undefined"==typeof o){if(s&&r.match(/^\d+$/))return a;o=JSON.stringify(""+r),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+a},_arrayToHash:function(e){var t={};return e.forEach(function(e){t[e]=!0}),t},_hasOwnProperty:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},initLoadingPhase:function(){var t=this;this._resetLoadingData(),delete this._loadingSequence,this._testFileIds=this._safeObject({}),(e.$_$testFiles||[]).forEach(function(e){t._testFileIds[e.id]=1}),t._original_$_$wp=e.$_$wp,t._original_$_$wpe=e.$_$wpe,e.$_$wp=function(e){t._reportProgramScope("programScopeStart",e),t.programScopeStartLoading(e)},e.$_$wpe=function(e){t._reportProgramScope("programScopeEnd",e),t.programScopeEndLoading(e)}},_reportProgramScope:function(e,t){var n=this;this._shouldReportProgramScope&&this._doWhenReceiverIsReady(function(){n._sendWithHighPriority(e,t)})},_looksLikePromise:function(e){return e&&e.constructor&&"Promise"===e.constructor.name&&"function"==typeof e.then&&"function"==typeof e["catch"]},_looksLikeObservable:function(e){return e&&e.constructor&&~e.constructor.name.indexOf("Observable")&&"function"==typeof e.forEach},_autoLogValue:function(t,n,i,r,s,o){var a=this,l=e.$_$session;a._looksLikePromise(r)?r.then(function(r){e.$_$session===l&&a._autoLogResolvedValue(t,n,i,"then ",a._valueToFormat(r,s),o)}):a._looksLikeObservable(r)?r.forEach(function(r){e.$_$session===l&&a._autoLogResolvedValue(t,n,i,"",a._valueToFormat(r,s),o)}):a._autoLogResolvedValue(t,n,i,"",a._valueToFormat(r,s),o)},_valueToFormat:function(e,t){return"$_$ne"===t?e:t(e)},_autoLogResolvedValue:function(e,t,n,i,s,o){this._formattingOpts={maxElementsPerLevel:o?10:100},this._sendLog("autoLog",i+(r._format(s)||""),n,e,t),this._formattingOpts={}}};var r=new i;r.setGlobalErrorHandler();var s=function(e,t){return t-e};e.performance?r._time=function(){return e.performance.now()}:e.process&&e.process.hrtime?(r._time=function(){return e.process.hrtime()},s=function(e,t){return 1e3*(t[0]-e[0])+(t[1]-e[1])/1e6}):r._time=function(){return+new Date},r._logTime=function(e,t,n,i,o,a,l){var c=s(o,l),u=r._autoTimeHits[n];return u?(u.value&&(u.n=1,u.min=u.value,u.max=u.value,u.total=u.value,delete u.value),u.min=Math.min(u.min,c),u.max=Math.max(u.max,c),u.total+=c,u.n+=1):r._autoTimeHits[n]={value:c,context:i,fileId:e,rangeId:t},a},e.$_$w=function(e,t){r.statement(e,t)},e.$_$wp=function(e){r._reportProgramScope("programScopeStart",e),r.scopeStart(e)},e.$_$wpe=function(e){r._reportProgramScope("programScopeEnd",e)},e.$_$wf=function(e){r.scopeStart(e)},e.$_$wv=function(e,t,n,i,s,o,a){return a&&r._autoConsoleHits[n]||(r._doWhenReceiverIsReady(function(){r._autoLogValue(e,t,i,s,o,a)},arguments),r._autoConsoleHits[n]=1),s},e.$_$tracer=r,e.$_$coverage=e.$_$coverage||[];var o=function(e){return e.path},a=function(e){return e?e.replace(/\\/g,"/"):e},l=e.$_$testFiles&&(e.$_$testFiles||[]).map(o).map(a),c=e.$_$testFiles&&e.$_$testFiles.filter(function(e){return e.loaded}).map(o);r.initLoadingPhase(),e.wallaby={delayStart:function(){r._patchFrameworks(),r._delayStart=!0},start:function(){r._delayStart=!1,r.start()},_startWhenReceiverIsReady:function(e){r._shouldReportProgramScope=!0,r._doWhenReceiverIsReady(function(){e()})},tests:l,loadedTests:c,baseDir:e.$_$baseDir,slowTestThreshold:e.$_$slow||75}}(function(){return this}()||global);