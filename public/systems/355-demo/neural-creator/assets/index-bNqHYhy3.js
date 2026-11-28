(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))s(C);new MutationObserver(C=>{for(const A of C)if(A.type==="childList")for(const p of A.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function b(C){const A={};return C.integrity&&(A.integrity=C.integrity),C.referrerPolicy&&(A.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?A.credentials="include":C.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function s(C){if(C.ep)return;C.ep=!0;const A=b(C);fetch(C.href,A)}})();function Pm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yc={exports:{}},y0={};var A2;function Rm(){if(A2)return y0;A2=1;var o=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),p=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),W=Symbol.for("react.view_transition"),D=Symbol.iterator;function G(h){return h===null||typeof h!="object"?null:(h=D&&h[D]||h["@@iterator"],typeof h=="function"?h:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,n0={};function v0(h,P,j){this.props=h,this.context=P,this.refs=n0,this.updater=j||B}v0.prototype.isReactComponent={},v0.prototype.setState=function(h,P){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,P,"setState")},v0.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function h0(){}h0.prototype=v0.prototype;function M0(h,P,j){this.props=h,this.context=P,this.refs=n0,this.updater=j||B}var l0=M0.prototype=new h0;l0.constructor=M0,K(l0,v0.prototype),l0.isPureReactComponent=!0;var o0=Array.isArray;function w(){}var J={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function H(h,P,j){var q=j.ref;return{$$typeof:o,type:h,key:P,ref:q!==void 0?q:null,props:j}}function A0(h,P){return H(h.type,P,h.props)}function I0(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function E0(h){var P={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(j){return P[j]})}var a0=/\/+/g;function Y(h,P){return typeof h=="object"&&h!==null&&h.key!=null?E0(""+h.key):P.toString(36)}function O(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(w,w):(h.status="pending",h.then(function(P){h.status==="pending"&&(h.status="fulfilled",h.value=P)},function(P){h.status==="pending"&&(h.status="rejected",h.reason=P)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function F(h,P,j,q,t0){var r0=typeof h;(r0==="undefined"||r0==="boolean")&&(h=null);var m0=!1;if(h===null)m0=!0;else switch(r0){case"bigint":case"string":case"number":m0=!0;break;case"object":switch(h.$$typeof){case o:case m:m0=!0;break;case d:return m0=h._init,F(m0(h._payload),P,j,q,t0)}}if(m0)return t0=t0(h),m0=q===""?"."+Y(h,0):q,o0(t0)?(j="",m0!=null&&(j=m0.replace(a0,"$&/")+"/"),F(t0,P,j,"",function(Y0){return Y0})):t0!=null&&(I0(t0)&&(t0=A0(t0,j+(t0.key==null||h&&h.key===t0.key?"":(""+t0.key).replace(a0,"$&/")+"/")+m0)),P.push(t0)),1;m0=0;var U=q===""?".":q+":";if(o0(h))for(var $=0;$<h.length;$++)q=h[$],r0=U+Y(q,$),m0+=F(q,P,j,r0,t0);else if($=G(h),typeof $=="function")for(h=$.call(h),$=0;!(q=h.next()).done;)q=q.value,r0=U+Y(q,$++),m0+=F(q,P,j,r0,t0);else if(r0==="object"){if(typeof h.then=="function")return F(O(h),P,j,q,t0);throw P=String(h),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return m0}function V(h,P,j){if(h==null)return h;var q=[],t0=0;return F(h,q,"","",function(r0){return P.call(j,r0,t0++)}),q}function X(h){if(h._status===-1){var P=h._result,j=P();j.then(function(q){(h._status===0||h._status===-1)&&(h._status=1,h._result=q,j.status===void 0&&(j.status="fulfilled",j.value=q))},function(q){(h._status===0||h._status===-1)&&(h._status=2,h._result=q,j.status===void 0&&(j.status="rejected",j.reason=q))}),h._status===-1&&(h._status=0,h._result=j)}if(h._status===1)return h._result.default;throw h._result}var x=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function i0(h){var P=J.T,j={};j.types=P!==null?P.types:null,J.T=j;try{var q=h(),t0=J.S;t0!==null&&t0(j,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(w,x)}catch(r0){x(r0)}finally{P!==null&&j.types!==null&&(P.types=j.types),J.T=P}}function d0(h){var P=J.T;if(P!==null){var j=P.types;j===null?P.types=[h]:j.indexOf(h)===-1&&j.push(h)}else i0(d0.bind(null,h))}var Q0={map:V,forEach:function(h,P,j){V(h,function(){P.apply(this,arguments)},j)},count:function(h){var P=0;return V(h,function(){P++}),P},toArray:function(h){return V(h,function(P){return P})||[]},only:function(h){if(!I0(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return y0.Activity=g,y0.Children=Q0,y0.Component=v0,y0.Fragment=b,y0.Profiler=C,y0.PureComponent=M0,y0.StrictMode=s,y0.Suspense=_,y0.ViewTransition=W,y0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,y0.__COMPILER_RUNTIME={__proto__:null,c:function(h){return J.H.useMemoCache(h)}},y0.addTransitionType=d0,y0.cache=function(h){return function(){return h.apply(null,arguments)}},y0.cacheSignal=function(){return null},y0.cloneElement=function(h,P,j){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var q=K({},h.props),t0=h.key;if(P!=null)for(r0 in P.key!==void 0&&(t0=""+P.key),P)!k.call(P,r0)||r0==="key"||r0==="__self"||r0==="__source"||r0==="ref"&&P.ref===void 0||(q[r0]=P[r0]);var r0=arguments.length-2;if(r0===1)q.children=j;else if(1<r0){for(var m0=Array(r0),U=0;U<r0;U++)m0[U]=arguments[U+2];q.children=m0}return H(h.type,t0,q)},y0.createContext=function(h){return h={$$typeof:p,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:A,_context:h},h},y0.createElement=function(h,P,j){var q,t0={},r0=null;if(P!=null)for(q in P.key!==void 0&&(r0=""+P.key),P)k.call(P,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(t0[q]=P[q]);var m0=arguments.length-2;if(m0===1)t0.children=j;else if(1<m0){for(var U=Array(m0),$=0;$<m0;$++)U[$]=arguments[$+2];t0.children=U}if(h&&h.defaultProps)for(q in m0=h.defaultProps,m0)t0[q]===void 0&&(t0[q]=m0[q]);return H(h,r0,t0)},y0.createRef=function(){return{current:null}},y0.forwardRef=function(h){return{$$typeof:Q,render:h}},y0.isValidElement=I0,y0.lazy=function(h){return{$$typeof:d,_payload:{_status:-1,_result:h},_init:X}},y0.memo=function(h,P){return{$$typeof:f,type:h,compare:P===void 0?null:P}},y0.startTransition=i0,y0.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},y0.use=function(h){return J.H.use(h)},y0.useActionState=function(h,P,j){return J.H.useActionState(h,P,j)},y0.useCallback=function(h,P){return J.H.useCallback(h,P)},y0.useContext=function(h){return J.H.useContext(h)},y0.useDebugValue=function(){},y0.useDeferredValue=function(h,P){return J.H.useDeferredValue(h,P)},y0.useEffect=function(h,P){return J.H.useEffect(h,P)},y0.useEffectEvent=function(h){return J.H.useEffectEvent(h)},y0.useId=function(){return J.H.useId()},y0.useImperativeHandle=function(h,P,j){return J.H.useImperativeHandle(h,P,j)},y0.useInsertionEffect=function(h,P){return J.H.useInsertionEffect(h,P)},y0.useLayoutEffect=function(h,P){return J.H.useLayoutEffect(h,P)},y0.useMemo=function(h,P){return J.H.useMemo(h,P)},y0.useOptimistic=function(h,P){return J.H.useOptimistic(h,P)},y0.useReducer=function(h,P,j){return J.H.useReducer(h,P,j)},y0.useRef=function(h){return J.H.useRef(h)},y0.useState=function(h){return J.H.useState(h)},y0.useSyncExternalStore=function(h,P,j){return J.H.useSyncExternalStore(h,P,j)},y0.useTransition=function(){return J.H.useTransition()},y0.version="19.3.0",y0}var C2;function Vc(){return C2||(C2=1,Yc.exports=Rm()),Yc.exports}var R=Vc();const r=Pm(R);var Bc={exports:{}},wt={},Hc={exports:{}},Uc={};var T2;function Ym(){return T2||(T2=1,(function(o){function m(O,F){var V=O.length;O.push(F);u:for(;0<V;){var X=V-1>>>1,x=O[X];if(0<C(x,F))O[X]=F,O[V]=x,V=X;else break u}}function b(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var F=O[0],V=O.pop();if(V!==F){O[0]=V;u:for(var X=0,x=O.length,i0=x>>>1;X<i0;){var d0=2*(X+1)-1,Q0=O[d0],h=d0+1,P=O[h];if(0>C(Q0,V))h<x&&0>C(P,Q0)?(O[X]=P,O[h]=V,X=h):(O[X]=Q0,O[d0]=V,X=d0);else if(h<x&&0>C(P,V))O[X]=P,O[h]=V,X=h;else break u}}return F}function C(O,F){var V=O.sortIndex-F.sortIndex;return V!==0?V:O.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var p=Date,Q=p.now();o.unstable_now=function(){return p.now()-Q}}var _=[],f=[],d=1,g=null,W=3,D=!1,G=!1,B=!1,K=!1,n0=typeof setTimeout=="function"?setTimeout:null,v0=typeof clearTimeout=="function"?clearTimeout:null,h0=typeof setImmediate<"u"?setImmediate:null;function M0(O){for(var F=b(f);F!==null;){if(F.callback===null)s(f);else if(F.startTime<=O)s(f),F.sortIndex=F.expirationTime,m(_,F);else break;F=b(f)}}function l0(O){if(B=!1,M0(O),!G)if(b(_)!==null)G=!0,o0||(o0=!0,I0());else{var F=b(f);F!==null&&Y(l0,F.startTime-O)}}var o0=!1,w=-1,J=5,k=-1;function H(){return K?!0:!(o.unstable_now()-k<J)}function A0(){if(K=!1,o0){var O=o.unstable_now();k=O;var F=!0;try{u:{G=!1,B&&(B=!1,v0(w),w=-1),D=!0;var V=W;try{n:{for(M0(O),g=b(_);g!==null&&!(g.expirationTime>O&&H());){var X=g.callback;if(typeof X=="function"){g.callback=null,W=g.priorityLevel;var x=X(g.expirationTime<=O);if(O=o.unstable_now(),typeof x=="function"){g.callback=x,M0(O),F=!0;break n}g===b(_)&&s(_),M0(O)}else s(_);g=b(_)}if(g!==null)F=!0;else{var i0=b(f);i0!==null&&Y(l0,i0.startTime-O),F=!1}}break u}finally{g=null,W=V,D=!1}F=void 0}}finally{F?I0():o0=!1}}}var I0;if(typeof h0=="function")I0=function(){h0(A0)};else if(typeof MessageChannel<"u"){var E0=new MessageChannel,a0=E0.port2;E0.port1.onmessage=A0,I0=function(){a0.postMessage(null)}}else I0=function(){n0(A0,0)};function Y(O,F){w=n0(function(){O(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return W},o.unstable_next=function(O){switch(W){case 1:case 2:case 3:var F=3;break;default:F=W}var V=W;W=F;try{return O()}finally{W=V}},o.unstable_requestPaint=function(){K=!0},o.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=W;W=O;try{return F()}finally{W=V}},o.unstable_scheduleCallback=function(O,F,V){var X=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?X+V:X):V=X,O){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=V+x,O={id:d++,callback:F,priorityLevel:O,startTime:V,expirationTime:x,sortIndex:-1},V>X?(O.sortIndex=V,m(f,O),b(_)===null&&O===b(f)&&(B?(v0(w),w=-1):B=!0,Y(l0,V-X))):(O.sortIndex=x,m(_,O),G||D||(G=!0,o0||(o0=!0,I0()))),O},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(O){var F=W;return function(){var V=W;W=F;try{return O.apply(this,arguments)}finally{W=V}}}})(Uc)),Uc}var S2;function Bm(){return S2||(S2=1,Hc.exports=Ym()),Hc.exports}var qc={exports:{}},Au={};var _2;function Hm(){if(_2)return Au;_2=1;var o=Vc();function m(d){var g="https://react.dev/errors/"+d;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)g+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+d+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(){}var s={d:{f:b,r:function(){throw Error(m(522))},D:b,C:b,L:b,m:b,X:b,S:b,M:b},p:0,findDOMNode:null},C=Symbol.for("react.portal"),A=Symbol.for("react.recoverable"),p=Symbol.for("react.optimistic_key");function Q(d,g,W){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:D==null?null:D===p?p:""+D,children:d,containerInfo:g,implementation:W}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,g){if(d==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Au.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Au.browser=function(d){return{$$typeof:A,_reason:d}},Au.createPortal=function(d,g){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(m(299));return Q(d,g,null,W)},Au.flushSync=function(d){var g=_.T,W=s.p;try{if(_.T=null,s.p=2,d)return d()}finally{_.T=g,s.p=W,s.d.f()}},Au.preconnect=function(d,g){typeof d=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(d,g))},Au.prefetchDNS=function(d){typeof d=="string"&&s.d.D(d)},Au.preinit=function(d,g){if(typeof d=="string"&&g&&typeof g.as=="string"){var W=g.as,D=f(W,g.crossOrigin),G=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;W==="style"?s.d.S(d,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:D,integrity:G,fetchPriority:B}):W==="script"&&s.d.X(d,{crossOrigin:D,integrity:G,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Au.preinitModule=function(d,g){if(typeof d=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var W=f(g.as,g.crossOrigin);s.d.M(d,{crossOrigin:W,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(d)},Au.preload=function(d,g){if(typeof d=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var W=g.as,D=f(W,g.crossOrigin);s.d.L(d,W,{crossOrigin:D,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Au.preloadModule=function(d,g){if(typeof d=="string")if(g){var W=f(g.as,g.crossOrigin);s.d.m(d,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:W,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(d)},Au.requestFormReset=function(d){s.d.r(d)},Au.unstable_batchedUpdates=function(d,g){return d(g)},Au.useFormState=function(d,g,W){return _.H.useFormState(d,g,W)},Au.useFormStatus=function(){return _.H.useHostTransitionStatus()},Au.version="19.3.0",Au}var N2;function Um(){if(N2)return qc.exports;N2=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),qc.exports=Hm(),qc.exports}var D2;function qm(){if(D2)return wt;D2=1;var o=Bm(),m=Vc(),b=Um();function s(u){var n="https://react.dev/errors/"+u;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+u+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(u){return!(!u||u.nodeType!==1&&u.nodeType!==9&&u.nodeType!==11)}function A(u){for(var n=u,e=n;e&&!e.alternate;)n=e,(n.flags&4098)!==0&&(u=n.return),e=n.return;for(;n.return;)n=n.return;return n.tag===3?u:null}function p(u){if(u.tag===13){var n=u.memoizedState;if(n===null&&(u=u.alternate,u!==null&&(n=u.memoizedState)),n!==null)return n.dehydrated}return null}function Q(u){if(u.tag===31){var n=u.memoizedState;if(n===null&&(u=u.alternate,u!==null&&(n=u.memoizedState)),n!==null)return n.dehydrated}return null}function _(u){if(A(u)!==u)throw Error(s(188))}function f(u){var n=u.alternate;if(!n){if(n=A(u),n===null)throw Error(s(188));return n!==u?null:u}for(var e=u,t=n;;){var l=e.return;if(l===null)break;var a=l.alternate;if(a===null){if(t=l.return,t!==null){e=t;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===e)return _(l),u;if(a===t)return _(l),n;a=a.sibling}throw Error(s(188))}if(e.return!==t.return)e=l,t=a;else{for(var c=!1,i=l.child;i;){if(i===e){c=!0,e=l,t=a;break}if(i===t){c=!0,t=l,e=a;break}i=i.sibling}if(!c){for(i=a.child;i;){if(i===e){c=!0,e=a,t=l;break}if(i===t){c=!0,t=a,e=l;break}i=i.sibling}if(!c)throw Error(s(189))}}if(e.alternate!==t)throw Error(s(190))}if(e.tag!==3)throw Error(s(188));return e.stateNode.current===e?u:n}function d(u){var n=u.tag;if(n===5||n===26||n===27||n===6)return u;for(u=u.child;u!==null;){if(n=d(u),n!==null)return n;u=u.sibling}return null}function g(u,n,e,t,l,a){for(;u!==null;){if((u.tag===5||u.tag===27||u.tag===6)&&e(u,t,l,a)||(u.tag!==22||u.memoizedState===null)&&(n||u.tag!==5&&u.tag!==27)&&g(u.child,n,e,t,l,a))return!0;u=u.sibling}return!1}function W(u){for(u=u.return;u!==null;){if(u.tag===3||u.tag===5||u.tag===27)return u;u=u.return}return null}function D(u){var n=!1;for(u=u.return;u!==null&&(u.tag===4&&(n=!0),!(u.tag===3||u.tag===5||u.tag===27));)u=u.return;return n}function G(u){var n=[null,null],e=W(u);return e===null||B(n,u,e.child,{foundSelf:!1}),n}function B(u,n,e,t){for(;e!==null;){if(e===n)t.foundSelf=!0;else if(e.tag===5||e.tag===27||e.tag===6){if(t.foundSelf)return u[1]=e,!0;u[0]=e}else if((e.tag!==22||e.memoizedState===null)&&B(u,n,e.child,t))return!0;e=e.sibling}return!1}function K(u){switch(u.tag){case 5:case 27:case 6:return u.stateNode;case 3:return u.stateNode.containerInfo;default:throw Error(s(559))}}var n0=null,v0=null;function h0(u,n,e){return u===e?!0:u===n?(n0=u,!0):!1}function M0(u,n,e){return u===e?(v0=u,!1):u===n?(v0!==null&&(n0=u),!0):!1}function l0(u){if(u===null)return null;do u=u===null?null:u.return;while(u&&u.tag!==5&&u.tag!==27&&u.tag!==3);return u||null}function o0(u,n,e){for(var t=0,l=u;l;l=e(l))t++;l=0;for(var a=n;a;a=e(a))l++;for(;0<t-l;)u=e(u),t--;for(;0<l-t;)n=e(n),l--;for(;t--;){if(u===n||n!==null&&u===n.alternate)return u;u=e(u),n=e(n)}return null}var w=Object.assign,J=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),I0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),a0=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),i0=Symbol.for("react.activity"),d0=Symbol.for("react.legacy_hidden"),Q0=Symbol.for("react.memo_cache_sentinel"),h=Symbol.for("react.view_transition"),P=Symbol.for("react.recoverable"),j=Symbol.iterator;function q(u){return u===null||typeof u!="object"?null:(u=j&&u[j]||u["@@iterator"],typeof u=="function"?u:null)}var t0=Symbol.for("react.client.reference");function r0(u){if(u==null)return null;if(typeof u=="function")return u.$$typeof===t0?null:u.displayName||u.name||null;if(typeof u=="string")return u;switch(u){case A0:return"Fragment";case E0:return"Profiler";case I0:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList";case i0:return"Activity";case h:return"ViewTransition"}if(typeof u=="object")switch(u.$$typeof){case H:return"Portal";case Y:return u.displayName||"Context";case a0:return(u._context.displayName||"Context")+".Consumer";case O:var n=u.render;return u=u.displayName,u||(u=n.displayName||n.name||"",u=u!==""?"ForwardRef("+u+")":"ForwardRef"),u;case X:return n=u.displayName||null,n!==null?n:r0(u.type)||"Memo";case x:n=u._payload,u=u._init;try{return r0(u(n))}catch{}}return null}var m0=Array.isArray,U=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y0={pending:!1,data:null,method:null,action:null},X0=[],cu=-1;function q0(u){return{current:u}}function w0(u){0>cu||(u.current=X0[cu],X0[cu]=null,cu--)}function g0(u,n){cu++,X0[cu]=u.current,u.current=n}var K0=q0(null),uu=q0(null),Z0=q0(null),iu=q0(null);function ou(u,n){switch(g0(Z0,n),g0(uu,u),g0(K0,null),n.nodeType){case 9:case 11:u=(u=n.documentElement)&&(u=u.namespaceURI)?Wf(u):0;break;default:if(u=n.tagName,n=n.namespaceURI)n=Wf(n),u=Qf(n,u);else switch(u){case"svg":u=1;break;case"math":u=2;break;default:u=0}}w0(K0),g0(K0,u)}function au(){w0(K0),w0(uu),w0(Z0)}function wu(u){var n=u.memoizedState;n!==null&&(Ge._currentValue=n.memoizedState,g0(iu,u)),n=K0.current;var e=Qf(n,u.type);n!==e&&(g0(uu,u),g0(K0,e))}function _u(u){uu.current===u&&(w0(K0),w0(uu)),iu.current===u&&(w0(iu),Ge._currentValue=Y0)}var u7,n7;function Nu(u){if(u7===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);u7=n&&n[1]||"",n7=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+u7+u+n7}var e7=!1;function Sn(u,n){if(!u||e7)return"";e7=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(n){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(Z){var v=Z}Reflect.construct(u,[],z)}else{try{z.call()}catch(Z){v=Z}z=!1;try{var M=Object.getOwnPropertyDescriptor(u.prototype,"props");Object.defineProperty(u.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new u}finally{z&&(M!==void 0?Object.defineProperty(u.prototype,"props",M):delete u.prototype.props)}}}else{try{throw Error()}catch(Z){v=Z}(z=u())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(Z){if(Z&&v&&typeof Z.stack=="string")return[Z.stack,v.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=t.DetermineComponentFrameRoot(),c=a[0],i=a[1];if(c&&i){var y=c.split(`
`),S=i.split(`
`);for(l=t=0;t<y.length&&!y[t].includes("DetermineComponentFrameRoot");)t++;for(;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;if(t===y.length||l===S.length)for(t=y.length-1,l=S.length-1;1<=t&&0<=l&&y[t]!==S[l];)l--;for(;1<=t&&0<=l;t--,l--)if(y[t]!==S[l]){if(t!==1||l!==1)do if(t--,l--,0>l||y[t]!==S[l]){var I=`
`+y[t].replace(" at new "," at ");return u.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",u.displayName)),I}while(1<=t&&0<=l);break}}}finally{e7=!1,Error.prepareStackTrace=e}return(e=u?u.displayName||u.name:"")?Nu(e):""}function kc(u,n){switch(u.tag){case 26:case 27:case 5:return Nu(u.type);case 16:return Nu("Lazy");case 13:return u.child!==n&&n!==null?Nu("Suspense Fallback"):Nu("Suspense");case 19:return Nu("SuspenseList");case 0:case 15:return Sn(u.type,!1);case 11:return Sn(u.type.render,!1);case 1:return Sn(u.type,!0);case 31:return Nu("Activity");case 30:return Nu("ViewTransition");default:return""}}function Du(u){try{var n="",e=null;do n+=kc(u,e),e=u,u=u.return;while(u);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var d7=Object.prototype.hasOwnProperty,Q7=o.unstable_scheduleCallback,Lu=o.unstable_cancelCallback,Kn=o.unstable_shouldYield,jn=o.unstable_requestPaint,Bu=o.unstable_now,Z2=o.unstable_getCurrentPriorityLevel,Jc=o.unstable_ImmediatePriority,Fc=o.unstable_UserBlockingPriority,Gt=o.unstable_NormalPriority,V2=o.unstable_LowPriority,$c=o.unstable_IdlePriority,X2=o.log,K2=o.unstable_setDisableYieldValue,Ye=null,Hu=null;function j7(u){if(typeof X2=="function"&&K2(u),Hu&&typeof Hu.setStrictMode=="function")try{Hu.setStrictMode(Ye,u)}catch{}}var Uu=Math.clz32?Math.clz32:J2,j2=Math.log,k2=Math.LN2;function J2(u){return u>>>=0,u===0?32:31-(j2(u)/k2|0)|0}var xt=256,Pt=262144,Rt=4194304;function _n(u){var n=u&42;if(n!==0)return n;switch(u&-u){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return u&-u;case 262144:case 524288:case 1048576:case 2097152:return u&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return u&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return u}}function Yt(u,n,e){var t=u.pendingLanes;if(t===0)return 0;var l=0,a=u.suspendedLanes,c=u.pingedLanes;u=u.warmLanes;var i=t&134217727;return i!==0?(t=i&~a,t!==0?l=_n(t):(c&=i,c!==0?l=_n(c):e||(e=i&~u,e!==0&&(l=_n(e))))):(i=t&~a,i!==0?l=_n(i):c!==0?l=_n(c):e||(e=t&~u,e!==0&&(l=_n(e)))),l===0?0:n!==0&&n!==l&&(n&a)===0&&(a=l&-l,e=n&-n,a>=e||a===32&&(e&4194048)!==0)?n:l}function Be(u,n){return(u.pendingLanes&~(u.suspendedLanes&~u.pingedLanes)&n)===0}function ui(u,n){(n&8)!==0&&(n|=n&32);var e=u.entangledLanes;if(e!==0)for(u=u.entanglements,e&=n;0<e;){var t=31-Uu(e),l=1<<t;n|=u[t],e&=~l}return n}function F2(u,n){switch(u){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(){var u=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),u}function ma(u){for(var n=[],e=0;31>e;e++)n.push(u);return n}function He(u,n){u.pendingLanes|=n,n!==268435456&&(u.suspendedLanes=0,u.pingedLanes=0,u.warmLanes=0)}function $2(u,n,e,t,l,a){var c=u.pendingLanes;u.pendingLanes=e,u.suspendedLanes=0,u.pingedLanes=0,u.warmLanes=0,u.expiredLanes&=e,u.entangledLanes&=e,u.errorRecoveryDisabledLanes&=e,u.shellSuspendCounter=0;var i=u.entanglements,y=u.expirationTimes,S=u.hiddenUpdates;for(e=c&~e;0<e;){var I=31-Uu(e),z=1<<I;i[I]=0,y[I]=-1;var v=S[I];if(v!==null)for(S[I]=null,I=0;I<v.length;I++){var M=v[I];M!==null&&(M.lane&=-536870913)}e&=~z}t!==0&&ei(u,t,0),a!==0&&l===0&&u.tag!==0&&(u.suspendedLanes|=a&~(c&~n))}function ei(u,n,e){u.pendingLanes|=n,u.suspendedLanes&=~n;var t=31-Uu(n);u.entangledLanes|=n,u.entanglements[t]=u.entanglements[t]|1073741824|e&261930}function ti(u,n){var e=u.entangledLanes|=n;for(u=u.entanglements;e;){var t=31-Uu(e),l=1<<t;l&n|u[t]&n&&(u[t]|=n),e&=~l}}function li(u,n){var e=n&-n;return e=(e&42)!==0?1:ga(e),(e&(u.suspendedLanes|n))!==0?0:e}function ga(u){switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=128;break;case 268435456:u=134217728;break;default:u=0}return u}function ya(u){return u&=-u,2<u?8<u?(u&134217727)!==0?32:268435456:8:2}function ai(){var u=$.p;return u!==0?u:(u=window.event,u===void 0?32:g2(u.type))}function ri(u,n){var e=$.p;try{return $.p=u,n()}finally{$.p=e}}var O7=Math.random().toString(36).slice(2),yu="__reactFiber$"+O7,zu="__reactProps$"+O7,kn="__reactContainer$"+O7,ci="__reactEvents$"+O7,ud="__reactListeners$"+O7,nd="__reactHandles$"+O7,ii="__reactResources$"+O7,Ue="__reactMarker$"+O7,Bt="__reactLoad$"+O7;function Ht(u){delete u[yu],delete u[zu],delete u[ud],delete u[nd]}function Nn(u){var n;if(n=u[yu])return n;for(var e=u.parentNode;e;){if(n=e[kn]||e[yu]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(u=Kf(u);u!==null;){if(e=u[yu])return e;u=Kf(u)}return n}u=e,e=u.parentNode}return null}function Jn(u){if(u=u[yu]||u[kn]){var n=u.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return u}return null}function qe(u){var n=u.tag;if(n===5||n===26||n===27||n===6)return u.stateNode;throw Error(s(33))}function Fn(u){var n=u[ii];return n||(n=u[ii]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function su(u){u[Ue]=!0}function oi(u){u[Bt]=void 0}var si=new Set,fi={};function Dn(u,n){$n(u,n),$n(u+"Capture",n)}function $n(u,n){for(fi[u]=n,u=0;u<n.length;u++)si.add(n[u])}var ed=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),di={},mi={};function td(u){return d7.call(mi,u)?!0:d7.call(di,u)?!1:ed.test(u)?mi[u]=!0:(di[u]=!0,!1)}var W0=!1;function gi(){var u=W0;return W0=!1,u}function Ut(u,n,e){if(td(n))if(e===null)u.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":u.removeAttribute(n);return;case"boolean":var t=n.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){u.removeAttribute(n);return}}u.setAttribute(n,e)}}function qt(u,n,e){if(e===null)u.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":u.removeAttribute(n);return}u.setAttribute(n,e)}}function w7(u,n,e,t){if(t===null)u.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":u.removeAttribute(e);return}u.setAttributeNS(n,e,t)}}function qu(u){switch(typeof u){case"bigint":case"boolean":case"number":case"string":case"undefined":return u;case"object":return u;default:return""}}function yi(u){var n=u.type;return(u=u.nodeName)&&u.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ld(u,n,e){var t=Object.getOwnPropertyDescriptor(u.constructor.prototype,n);if(!u.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,a=t.set;return Object.defineProperty(u,n,{configurable:!0,get:function(){return l.call(this)},set:function(c){e=""+c,a.call(this,c)}}),Object.defineProperty(u,n,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(c){e=""+c},stopTracking:function(){u._valueTracker=null,delete u[n]}}}}function ha(u){if(!u._valueTracker){var n=yi(u)?"checked":"value";u._valueTracker=ld(u,n,""+u[n])}}function hi(u){if(!u)return!1;var n=u._valueTracker;if(!n)return!0;var e=n.getValue(),t="";return u&&(t=yi(u)?u.checked?"true":"false":u.value),u=t,u!==e?(n.setValue(u),!0):!1}var ad=/[\n"\\]/g;function t7(u){return u.replace(ad,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ea(u,n,e,t,l,a,c,i){u.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?u.type=c:u.removeAttribute("type"),n!=null?c==="number"?(n===0&&u.value===""||u.value!=n)&&(u.value=""+qu(n)):u.value!==""+qu(n)&&(u.value=""+qu(n)):c!=="submit"&&c!=="reset"||u.removeAttribute("value"),n!=null?c==="number"&&u.value==n?pa(u,qu(u.value)):pa(u,qu(n)):e!=null?pa(u,qu(e)):t!=null&&u.removeAttribute("value"),l==null&&a!=null&&(u.defaultChecked=!!a),l!=null&&(u.checked=l&&typeof l!="function"&&typeof l!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?u.name=""+qu(i):u.removeAttribute("name")}function Ei(u,n,e,t,l,a,c,i){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(u.type=a),n!=null||e!=null){if(!(a!=="submit"&&a!=="reset"||n!=null)){ha(u);return}e=e!=null?""+qu(e):"",n=n!=null?""+qu(n):e,i||n===u.value||(u.value=n),u.defaultValue=n}t=t??l,t=typeof t!="function"&&typeof t!="symbol"&&!!t,u.checked=i?u.checked:!!t,u.defaultChecked=!!t,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(u.name=c),ha(u)}function pa(u,n){u.defaultValue!==""+n&&(u.defaultValue=""+n)}function ue(u,n,e,t){if(u=u.options,n){n={};for(var l=0;l<e.length;l++)n["$"+e[l]]=!0;for(e=0;e<u.length;e++)l=n.hasOwnProperty("$"+u[e].value),u[e].selected!==l&&(u[e].selected=l),l&&t&&(u[e].defaultSelected=!0)}else{for(e=""+qu(e),n=null,l=0;l<u.length;l++){if(u[l].value===e){u[l].selected=!0,t&&(u[l].defaultSelected=!0);return}n!==null||u[l].disabled||(n=u[l])}n!==null&&(n.selected=!0)}}function pi(u,n,e){if(n!=null&&(n=""+qu(n),n!==u.value&&(u.value=n),e==null)){u.defaultValue!==n&&(u.defaultValue=n);return}u.defaultValue=e!=null?""+qu(e):""}function bi(u,n,e,t){if(n==null){if(t!=null){if(e!=null)throw Error(s(92));if(m0(t)){if(1<t.length)throw Error(s(93));t=t[0]}e=t}e==null&&(e=""),n=e}e=qu(n),u.defaultValue=e,t=u.textContent,t===e&&t!==""&&t!==null&&(u.value=t),ha(u)}function ne(u,n){if(n){var e=u.firstChild;if(e&&e===u.lastChild&&e.nodeType===3){e.nodeValue=n;return}}u.textContent=n}var rd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vi(u,n,e){var t=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?u.setProperty(n,""):n==="float"?u.cssFloat="":u[n]="":t?u.setProperty(n,e):typeof e!="number"||e===0||rd.has(n)?n==="float"?u.cssFloat=e:u[n]=(""+e).trim():u[n]=e+"px"}function Ai(u,n,e){if(n!=null&&typeof n!="object")throw Error(s(62));if(u=u.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||n!=null&&n.hasOwnProperty(t)||(t.indexOf("--")===0?u.setProperty(t,""):t==="float"?u.cssFloat="":u[t]="",W0=!0);for(var l in n)t=n[l],n.hasOwnProperty(l)&&e[l]!==t&&(vi(u,l,t),W0=!0)}else for(var a in n)n.hasOwnProperty(a)&&vi(u,a,n[a])}function ba(u){if(u.indexOf("-")===-1)return!1;switch(u){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),id=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zt(u){return id.test(""+u)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":u}function v7(){}var va=null;function Aa(u){return u=u.target||u.srcElement||window,u.correspondingUseElement&&(u=u.correspondingUseElement),u.nodeType===3?u.parentNode:u}var ee=null,te=null;function Ci(u){var n=Jn(u);if(n&&(u=n.stateNode)){var e=u[zu]||null;u:switch(u=n.stateNode,n.type){case"input":if(Ea(u,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=u;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+t7(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var t=e[n];if(t!==u&&t.form===u.form){var l=t[zu]||null;if(!l)throw Error(s(90));Ea(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<e.length;n++)t=e[n],t.form===u.form&&hi(t)}break u;case"textarea":pi(u,e.value,e.defaultValue);break u;case"select":n=e.value,n!=null&&ue(u,!!e.multiple,n,!1)}}}var Ca=!1;function Ti(u,n,e){if(Ca)return u(n,e);Ca=!0;try{var t=u(n);return t}finally{if(Ca=!1,(ee!==null||te!==null)&&(Zl(),ee&&(n=ee,u=te,te=ee=null,Ci(n),u)))for(n=0;n<u.length;n++)Ci(u[n])}}function Ze(u,n){var e=u.stateNode;if(e===null)return null;var t=e[zu]||null;if(t===null)return null;e=t[n];u:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(u=u.type,t=!(u==="button"||u==="input"||u==="select"||u==="textarea")),u=!t;break u;default:u=!1}if(u)return null;if(e&&typeof e!="function")throw Error(s(231,n,typeof e));return e}var L7=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=!1;if(L7)try{var Ve={};Object.defineProperty(Ve,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",Ve,Ve),window.removeEventListener("test",Ve,Ve)}catch{Ta=!1}var k7=null,Sa=null,Vt=null;function Si(){if(Vt)return Vt;var u,n=Sa,e=n.length,t,l="value"in k7?k7.value:k7.textContent,a=l.length;for(u=0;u<e&&n[u]===l[u];u++);var c=e-u;for(t=1;t<=c&&n[e-t]===l[a-t];t++);return Vt=l.slice(u,1<t?1-t:void 0)}function Xt(u){var n=u.keyCode;return"charCode"in u?(u=u.charCode,u===0&&n===13&&(u=13)):u=n,u===10&&(u=13),32<=u||u===13?u:0}function Kt(){return!0}function _i(){return!1}function Mu(u){function n(e,t,l,a,c){this._reactName=e,this._targetInst=l,this.type=t,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var i in u)u.hasOwnProperty(i)&&(e=u[i],this[i]=e?e(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Kt:_i,this.isPropagationStopped=_i,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Kt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Kt)},persist:function(){},isPersistent:Kt}),n}var J7={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(u){return u.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jt=Mu(J7),Xe=w({},J7,{view:0,detail:0}),od=Mu(Xe),_a,Na,Ke,kt=w({},Xe,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(u){return u.relatedTarget===void 0?u.fromElement===u.srcElement?u.toElement:u.fromElement:u.relatedTarget},movementX:function(u){return"movementX"in u?u.movementX:(u!==Ke&&(Ke&&u.type==="mousemove"?(_a=u.screenX-Ke.screenX,Na=u.screenY-Ke.screenY):Na=_a=0,Ke=u),_a)},movementY:function(u){return"movementY"in u?u.movementY:Na}}),Ni=Mu(kt),sd=w({},kt,{dataTransfer:0}),fd=Mu(sd),dd=w({},Xe,{relatedTarget:0}),Da=Mu(dd),md=w({},J7,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=Mu(md),yd=w({},J7,{clipboardData:function(u){return"clipboardData"in u?u.clipboardData:window.clipboardData}}),hd=Mu(yd),Ed=w({},J7,{data:0}),Di=Mu(Ed),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(u){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(u):(u=vd[u])?!!n[u]:!1}function Ma(){return Ad}var Cd=w({},Xe,{key:function(u){if(u.key){var n=pd[u.key]||u.key;if(n!=="Unidentified")return n}return u.type==="keypress"?(u=Xt(u),u===13?"Enter":String.fromCharCode(u)):u.type==="keydown"||u.type==="keyup"?bd[u.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(u){return u.type==="keypress"?Xt(u):0},keyCode:function(u){return u.type==="keydown"||u.type==="keyup"?u.keyCode:0},which:function(u){return u.type==="keypress"?Xt(u):u.type==="keydown"||u.type==="keyup"?u.keyCode:0}}),Td=Mu(Cd),Sd=w({},kt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mi=Mu(Sd),_d=w({},J7,{submitter:0}),Nd=Mu(_d),Dd=w({},Xe,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),Md=Mu(Dd),Id=w({},J7,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=Mu(Id),Qd=w({},kt,{deltaX:function(u){return"deltaX"in u?u.deltaX:"wheelDeltaX"in u?-u.wheelDeltaX:0},deltaY:function(u){return"deltaY"in u?u.deltaY:"wheelDeltaY"in u?-u.wheelDeltaY:"wheelDelta"in u?-u.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=Mu(Qd),wd=w({},J7,{newState:0,oldState:0,source:0}),Ld=Mu(wd),zd=[9,13,27,32],Ia=L7&&"CompositionEvent"in window,je=null;L7&&"documentMode"in document&&(je=document.documentMode);var Gd=L7&&"TextEvent"in window&&!je,Ii=L7&&(!Ia||je&&8<je&&11>=je),Wi=" ",Qi=!1;function Oi(u,n){switch(u){case"keyup":return zd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wi(u){return u=u.detail,typeof u=="object"&&"data"in u?u.data:null}var le=!1;function xd(u,n){switch(u){case"compositionend":return wi(n);case"keypress":return n.which!==32?null:(Qi=!0,Wi);case"textInput":return u=n.data,u===Wi&&Qi?null:u;default:return null}}function Pd(u,n){if(le)return u==="compositionend"||!Ia&&Oi(u,n)?(u=Si(),Vt=Sa=k7=null,le=!1,u):null;switch(u){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ii&&n.locale!=="ko"?null:n.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Li(u){var n=u&&u.nodeName&&u.nodeName.toLowerCase();return n==="input"?!!Rd[u.type]:n==="textarea"}function zi(u,n,e,t){ee?te?te.push(t):te=[t]:ee=t,n=Jl(n,"onChange"),0<n.length&&(e=new jt("onChange","change",null,e,t),u.push({event:e,listeners:n}))}var ke=null,Je=null;function Yd(u){Sf(u,0)}function Jt(u){var n=qe(u);if(hi(n))return u}function Gi(u,n){if(u==="change")return n}var xi=!1;if(L7){var Wa;if(L7){var Qa="oninput"in document;if(!Qa){var Pi=document.createElement("div");Pi.setAttribute("oninput","return;"),Qa=typeof Pi.oninput=="function"}Wa=Qa}else Wa=!1;xi=Wa&&(!document.documentMode||9<document.documentMode)}function Ri(){ke&&(ke.detachEvent("onpropertychange",Yi),Je=ke=null)}function Yi(u){if(u.propertyName==="value"&&Jt(Je)){var n=[];zi(n,Je,u,Aa(u)),Ti(Yd,n)}}function Bd(u,n,e){u==="focusin"?(Ri(),ke=n,Je=e,ke.attachEvent("onpropertychange",Yi)):u==="focusout"&&Ri()}function Hd(u){if(u==="selectionchange"||u==="keyup"||u==="keydown")return Jt(Je)}function Ud(u,n){if(u==="click")return Jt(n)}function qd(u,n){if(u==="input"||u==="change")return Jt(n)}function Zd(u,n){return u===n&&(u!==0||1/u===1/n)||u!==u&&n!==n}var Zu=typeof Object.is=="function"?Object.is:Zd;function Fe(u,n){if(Zu(u,n))return!0;if(typeof u!="object"||u===null||typeof n!="object"||n===null)return!1;var e=Object.keys(u),t=Object.keys(n);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var l=e[t];if(!d7.call(n,l)||!Zu(u[l],n[l]))return!1}return!0}function Oa(u){if(u=u||(typeof document<"u"?document:void 0),typeof u>"u")return null;try{return u.activeElement||u.body}catch{return u.body}}function Bi(u){for(;u&&u.firstChild;)u=u.firstChild;return u}function Hi(u,n){var e=Bi(u);u=0;for(var t;e;){if(e.nodeType===3){if(t=u+e.textContent.length,u<=n&&t>=n)return{node:e,offset:n-u};u=t}u:{for(;e;){if(e.nextSibling){e=e.nextSibling;break u}e=e.parentNode}e=void 0}e=Bi(e)}}function Ui(u,n){return u&&n?u===n?!0:u&&u.nodeType===3?!1:n&&n.nodeType===3?Ui(u,n.parentNode):"contains"in u?u.contains(n):u.compareDocumentPosition?!!(u.compareDocumentPosition(n)&16):!1:!1}function qi(u){u=u!=null&&u.ownerDocument!=null&&u.ownerDocument.defaultView!=null?u.ownerDocument.defaultView:window;for(var n=Oa(u.document);n instanceof u.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)u=n.contentWindow;else break;n=Oa(u.document)}return n}function wa(u){var n=u&&u.nodeName&&u.nodeName.toLowerCase();return n&&(n==="input"&&(u.type==="text"||u.type==="search"||u.type==="tel"||u.type==="url"||u.type==="password")||n==="textarea"||u.contentEditable==="true")}var Vd=L7&&"documentMode"in document&&11>=document.documentMode,ae=null,La=null,$e=null,za=!1;function Zi(u,n,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;za||ae==null||ae!==Oa(t)||(t=ae,"selectionStart"in t&&wa(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),$e&&Fe($e,t)||($e=t,t=Jl(La,"onSelect"),0<t.length&&(n=new jt("onSelect","select",null,n,e),u.push({event:n,listeners:t}),n.target=ae)))}function Mn(u,n){var e={};return e[u.toLowerCase()]=n.toLowerCase(),e["Webkit"+u]="webkit"+n,e["Moz"+u]="moz"+n,e}var re={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionrun:Mn("Transition","TransitionRun"),transitionstart:Mn("Transition","TransitionStart"),transitioncancel:Mn("Transition","TransitionCancel"),transitionend:Mn("Transition","TransitionEnd")},Ga={},Vi={};L7&&(Vi=document.createElement("div").style,"AnimationEvent"in window||(delete re.animationend.animation,delete re.animationiteration.animation,delete re.animationstart.animation),"TransitionEvent"in window||delete re.transitionend.transition);function In(u){if(Ga[u])return Ga[u];if(!re[u])return u;var n=re[u],e;for(e in n)if(n.hasOwnProperty(e)&&e in Vi)return Ga[u]=n[e];return u}var Xi=In("animationend"),Ki=In("animationiteration"),ji=In("animationstart"),Xd=In("transitionrun"),Kd=In("transitionstart"),jd=In("transitioncancel"),ki=In("transitionend"),Ji=new Map,xa="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xa.push("scrollEnd");function m7(u,n){Ji.set(u,n),Dn(n,[u])}var kd=0;function z7(u,n){if(u.name!=null&&u.name!=="auto")return u.name;if(n.autoName!==null)return n.autoName;u=E7.identifierPrefix;var e=kd++;return u="_"+u+"t_"+e.toString(32)+"_",n.autoName=u}function Fi(u){if(u==null||typeof u=="string")return u;var n=null,e=Ne;if(e!==null)for(var t=0;t<e.length;t++){var l=u[e[t]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??u.default}function G7(u,n){return u=Fi(u),n=Fi(n),n==null?u==="auto"?null:u:n==="auto"?null:n}var Ft=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},l7=[],ce=0,Pa=0;function $t(){for(var u=ce,n=Pa=ce=0;n<u;){var e=l7[n];l7[n++]=null;var t=l7[n];l7[n++]=null;var l=l7[n];l7[n++]=null;var a=l7[n];if(l7[n++]=null,t!==null&&l!==null){var c=t.pending;c===null?l.next=l:(l.next=c.next,c.next=l),t.pending=l}a!==0&&$i(e,l,a)}}function ul(u,n,e,t){l7[ce++]=u,l7[ce++]=n,l7[ce++]=e,l7[ce++]=t,Pa|=t,u.lanes|=t,u=u.alternate,u!==null&&(u.lanes|=t)}function Ra(u,n,e,t){return ul(u,n,e,t),nl(u)}function Wn(u,n){return ul(u,null,null,n),nl(u)}function $i(u,n,e){u.lanes|=e;var t=u.alternate;t!==null&&(t.lanes|=e);for(var l=!1,a=u.return;a!==null;)a.childLanes|=e,t=a.alternate,t!==null&&(t.childLanes|=e),a.tag===22&&(u=a.stateNode,u===null||u._visibility&1||(l=!0)),u=a,a=a.return;return u.tag===3?(a=u.stateNode,l&&n!==null&&(l=31-Uu(e),u=a.hiddenUpdates,t=u[l],t===null?u[l]=[n]:t.push(n),n.lane=e|536870912),a):null}function nl(u){if(50<At)throw At=0,ql=null,Error(s(185));for(var n=u.return;n!==null;)u=n,n=u.return;return u.tag===3?u.stateNode:null}var ie={};function Jd(u,n,e,t){this.tag=u,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gu(u,n,e,t){return new Jd(u,n,e,t)}function Ya(u){return u=u.prototype,!(!u||!u.isReactComponent)}function x7(u,n){var e=u.alternate;return e===null?(e=Gu(u.tag,n,u.key,u.mode),e.elementType=u.elementType,e.type=u.type,e.stateNode=u.stateNode,e.alternate=u,u.alternate=e):(e.pendingProps=n,e.type=u.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=u.flags&1206910976,e.childLanes=u.childLanes,e.lanes=u.lanes,e.child=u.child,e.memoizedProps=u.memoizedProps,e.memoizedState=u.memoizedState,e.updateQueue=u.updateQueue,n=u.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=u.sibling,e.index=u.index,e.ref=u.ref,e.refCleanup=u.refCleanup,e}function uo(u,n){u.flags&=1206910978;var e=u.alternate;return e===null?(u.childLanes=0,u.lanes=n,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=e.childLanes,u.lanes=e.lanes,u.child=e.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=e.memoizedProps,u.memoizedState=e.memoizedState,u.updateQueue=e.updateQueue,u.type=e.type,n=e.dependencies,u.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),u}function el(u,n,e,t,l,a){var c=0;if(t=u,typeof t=="function")Ya(t)&&(c=1);else if(typeof t=="string")c=_m(u,e,K0.current)?26:u==="html"||u==="head"||u==="body"?27:5;else u:switch(t){case i0:return u=Gu(31,e,n,l),u.elementType=i0,u.lanes=a,u;case A0:return Qn(e.children,l,a,n);case I0:c=8,l|=24;break;case E0:return u=Gu(12,e,n,l|2),u.elementType=E0,u.lanes=a,u;case F:return u=Gu(13,e,n,l),u.elementType=F,u.lanes=a,u;case V:return u=Gu(19,e,n,l),u.elementType=V,u.lanes=a,u;case d0:case h:return u=l|32,u=Gu(30,e,n,u),u.elementType=h,u.lanes=a,u.stateNode={autoName:null,paired:null,clones:null,ref:null},u;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:c=10;break u;case a0:c=9;break u;case O:c=11;break u;case X:c=14;break u;case x:c=16,t=null;break u}c=29,e=Error(s(130,u===null?"null":typeof u,"")),t=null}return n=Gu(c,e,n,l),n.elementType=u,n.type=t,n.lanes=a,n}function Qn(u,n,e,t){return u=Gu(7,u,t,n),u.lanes=e,u}function Ba(u,n,e){return u=Gu(6,u,null,n),u.lanes=e,u}function no(u){var n=Gu(18,null,null,0);return n.stateNode=u,n}function Ha(u,n,e){return n=Gu(4,u.children!==null?u.children:[],u.key,n),n.lanes=e,n.stateNode={containerInfo:u.containerInfo,pendingChildren:null,implementation:u.implementation},n}var eo=new WeakMap;function a7(u,n){if(typeof u=="object"&&u!==null){var e=eo.get(u);return e!==void 0?e:(n={value:u,source:n,stack:Du(n)},eo.set(u,n),n)}return{value:u,source:n,stack:Du(n)}}var oe=[],se=0,tl=null,ut=0,r7=[],c7=0,F7=null,A7=1,C7="";function P7(u,n){oe[se++]=ut,oe[se++]=tl,tl=u,ut=n}function to(u,n,e){r7[c7++]=A7,r7[c7++]=C7,r7[c7++]=F7,F7=u;var t=A7;u=C7;var l=32-Uu(t)-1;t&=~(1<<l),e+=1;var a=32-Uu(n)+l;if(30<a){var c=l-l%5;a=(t&(1<<c)-1).toString(32),t>>=c,l-=c,A7=1<<32-Uu(n)+l|e<<l|t,C7=a+u}else A7=1<<a|e<<l|t,C7=u}function ll(u){u.return!==null&&(P7(u,1),to(u,1,0))}function Ua(u){for(;u===tl;)tl=oe[--se],oe[se]=null,ut=oe[--se],oe[se]=null;for(;u===F7;)F7=r7[--c7],r7[c7]=null,C7=r7[--c7],r7[c7]=null,A7=r7[--c7],r7[c7]=null}function lo(u,n){r7[c7++]=A7,r7[c7++]=C7,r7[c7++]=F7,A7=n.id,C7=n.overflow,F7=u}var fu=null,H0=null,C0=!1,$7=null,i7=!1,qa=Error(s(519));function un(u){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nt(a7(n,u)),qa}function ao(u){var n=u.stateNode,e=u.type,t=u.memoizedProps;switch(n[yu]=u,n[zu]=t,e){case"dialog":S0("cancel",n),S0("close",n);break;case"iframe":case"object":case"embed":S0("load",n);break;case"video":case"audio":for(e=0;e<Tt.length;e++)S0(Tt[e],n);break;case"source":S0("error",n);break;case"img":case"image":case"link":S0("error",n),S0("load",n);break;case"details":S0("toggle",n);break;case"input":S0("invalid",n),Ei(n,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":S0("invalid",n);break;case"textarea":S0("invalid",n),bi(n,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||t.suppressHydrationWarning===!0||Mf(n.textContent,e)?(t.popover!=null&&(S0("beforetoggle",n),S0("toggle",n)),t.onScroll!=null&&S0("scroll",n),t.onScrollEnd!=null&&S0("scrollend",n),t.onClick!=null&&(n.onclick=v7),n=!0):n=!1,n||un(u,!0)}function al(u){for(fu=u.return;fu;)switch(fu.tag){case 5:case 31:case 13:i7=!1;return;case 27:case 3:i7=!0;return;default:fu=fu.return}}function fe(u){if(u!==fu)return!1;if(!C0)return al(u),C0=!0,!1;var n=u.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=u.type,e=!(e!=="form"&&e!=="button")||vc(u.type,u.memoizedProps)),e=!e),e&&H0&&un(u),al(u),n===13){if(u=u.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));H0=Xf(u)}else if(n===31){if(u=u.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));H0=Xf(u)}else n===27?(n=H0,En(u.type)?(u=Ic,Ic=null,H0=u):H0=n):H0=fu?s7(u.stateNode.nextSibling):null;return!0}function On(){H0=fu=null,C0=!1}function Za(){var u=$7;return u!==null&&(Ru===null?Ru=u:Ru.push.apply(Ru,u),$7=null),u}function nt(u){$7===null?$7=[u]:$7.push(u)}var Va=q0(null),wn=null,R7=null;function nn(u,n,e){g0(Va,n._currentValue),n._currentValue=e}function Y7(u){u._currentValue=Va.current,w0(Va)}function rl(u,n,e){for(;u!==null;){var t=u.alternate;if((u.childLanes&n)!==n?(u.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),u===e)break;u=u.return}}function Xa(u,n,e,t){var l=u.child;for(l!==null&&(l.return=u);l!==null;){var a=l.dependencies;if(a!==null){var c=l.child;a=a.firstContext;u:for(;a!==null;){var i=a;a=l;for(var y=0;y<n.length;y++)if(i.context===n[y]){a.lanes|=e,i=a.alternate,i!==null&&(i.lanes|=e),rl(a.return,e,u),t||(c=null);break u}a=i.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=e,a=c.alternate,a!==null&&(a.lanes|=e),rl(c,e,u),c=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=e,c=l.alternate,c!==null&&(c.lanes|=e),rl(l.return,e,u),c=l.child,c=c!==null?c.sibling:null):c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===u){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function Ln(u,n,e,t){u=null;for(var l=n,a=!1;l!==null;){if(!a){if((l.flags&524288)!==0)a=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var i=l.type;Zu(l.pendingProps.value,c.value)||(u!==null?u.push(i):u=[i])}}else if(l===iu.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(u!==null?u.push(Ge):u=[Ge])}l=l.return}return u!==null&&Xa(n,u,e,t),n.flags|=262144,u!==null}function cl(u){for(u=u.firstContext;u!==null;){if(!Zu(u.context._currentValue,u.memoizedValue))return!0;u=u.next}return!1}function zn(u){wn=u,R7=null,u=u.dependencies,u!==null&&(u.firstContext=null)}function hu(u){return ro(wn,u)}function il(u,n){return wn===null&&zn(u),ro(u,n)}function ro(u,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},R7===null){if(u===null)throw Error(s(308));R7=n,u.dependencies={lanes:0,firstContext:n},u.flags|=524288}else R7=R7.next=n;return e}var Fd=typeof AbortController<"u"?AbortController:function(){var u=[],n=this.signal={aborted:!1,addEventListener:function(e,t){u.push(t)}};this.abort=function(){n.aborted=!0,u.forEach(function(e){return e()})}},$d=o.unstable_scheduleCallback,u1=o.unstable_NormalPriority,nu={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ka(){return{controller:new Fd,data:new Map,refCount:0}}function et(u){u.refCount--,u.refCount===0&&$d(u1,function(){u.controller.abort()})}function co(u,n){if((u.pendingLanes&4194048)!==0){var e=u.transitionTypes;for(e===null&&(e=u.transitionTypes=[]),u=0;u<n.length;u++){var t=n[u];e.indexOf(t)===-1&&e.push(t)}}}var tt=null;function n1(u){var n=u.transitionTypes;return u.transitionTypes=null,n}var lt=null,ja=0,Gn=0,de=null;function e1(u,n){if(lt===null){var e=lt=[];ja=0,Gn=fc(),de={status:"pending",value:void 0,then:function(t){e.push(t)}}}return ja++,n.then(io,io),n}function io(){if(--ja===0&&(tt=null,lt!==null)){de!==null&&(de.status="fulfilled");var u=lt;lt=null,Gn=0,de=null;for(var n=0;n<u.length;n++)(0,u[n])()}}function t1(u,n){var e=[],t={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return u.then(function(){t.status="fulfilled",t.value=n;for(var l=0;l<e.length;l++)(0,e[l])(n)},function(l){for(t.status="rejected",t.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),t}var oo=U.S;U.S=function(u,n){if(ef=Bu(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&e1(u,n),tt!==null)for(var e=We;e!==null;)co(e,tt),e=e.next;if(e=u.types,e!==null){for(var t=We;t!==null;)co(t,e),t=t.next;if(Gn!==0){t=tt,t===null&&(t=tt=[]);for(var l=0;l<e.length;l++){var a=e[l];t.indexOf(a)===-1&&t.push(a)}}}oo!==null&&oo(u,n)};var xn=q0(null);function ka(){var u=xn.current;return u!==null?u:B0.pooledCache}function ol(u,n){n===null?g0(xn,xn.current):g0(xn,n.pool)}function so(){var u=ka();return u===null?null:{parent:nu._currentValue,pool:u}}var me=Error(s(460)),Ja=Error(s(474)),sl=Error(s(542)),fl={then:function(){}};function fo(u){return u=u.status,u==="fulfilled"||u==="rejected"}function mo(u,n,e){switch(e=u[e],e===void 0?u.push(n):e!==n&&(n.then(v7,v7),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw u=n.reason,yo(u),u===void 0&&!("reason"in n)?Error(s(600)):u;default:if(typeof n.status=="string")n.then(v7,v7);else{if(u=B0,u!==null&&100<u.shellSuspendCounter)throw Error(s(482));u=n,u.status="pending",u.then(function(t){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=t}},function(t){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=t}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw u=n.reason,yo(u),u}throw Rn=n,me}}function Pn(u){try{var n=u._init;return n(u._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Rn=e,me):e}}var Rn=null;function go(){if(Rn===null)throw Error(s(459));var u=Rn;return Rn=null,u}function yo(u){if(u===me||u===sl)throw Error(s(483))}var ge=null,at=0;function dl(u){var n=at;return at+=1,ge===null&&(ge=[]),mo(ge,u,n)}function en(u,n){n=n.props.ref,u.ref=n!==void 0?n:null}function ml(u,n){throw n.$$typeof===J?Error(s(525)):(u=Object.prototype.toString.call(n),Error(s(31,u==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":u)))}function ho(u){function n(T,E){if(u){var N=T.deletions;N===null?(T.deletions=[E],T.flags|=16):N.push(E)}}function e(T,E){if(!u)return null;for(;E!==null;)n(T,E),E=E.sibling;return null}function t(T){for(var E=new Map;T!==null;)T.key===null?E.set(T.index,T):E.set(T.key,T),T=T.sibling;return E}function l(T,E){return T=x7(T,E),T.index=0,T.sibling=null,T}function a(T,E,N){return T.index=N,u?(N=T.alternate,N!==null?(N=N.index,N<E?(T.flags|=2,E):N):(T.flags|=134217730,E)):(T.flags|=1048576,E)}function c(T){return u&&T.alternate===null&&(T.flags|=134217730),T}function i(T,E,N,L){return E===null||E.tag!==6?(E=Ba(N,T.mode,L),E.return=T,E):(E=l(E,N),E.return=T,E)}function y(T,E,N,L){var u0=N.type;return u0===A0?(T=I(T,E,N.props.children,L,N.key),en(T,N),T):E!==null&&(E.elementType===u0||typeof u0=="object"&&u0!==null&&u0.$$typeof===x&&Pn(u0)===E.type)?(E=l(E,N.props),en(E,N),E.return=T,E):(E=el(N.type,N.key,N.props,null,T.mode,L),en(E,N),E.return=T,E)}function S(T,E,N,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=Ha(N,T.mode,L),E.return=T,E):(E=l(E,N.children||[]),E.return=T,E)}function I(T,E,N,L,u0){return E===null||E.tag!==7?(E=Qn(N,T.mode,L,u0),E.return=T,E):(E=l(E,N),E.return=T,E)}function z(T,E,N){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Ba(""+E,T.mode,N),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case k:return N=el(E.type,E.key,E.props,null,T.mode,N),en(N,E),N.return=T,N;case H:return E=Ha(E,T.mode,N),E.return=T,E;case x:return E=Pn(E),z(T,E,N)}if(m0(E)||q(E))return E=Qn(E,T.mode,N,null),E.return=T,E;if(typeof E.then=="function")return z(T,dl(E),N);if(E.$$typeof===Y)return z(T,il(T,E),N);ml(T,E)}return null}function v(T,E,N,L){var u0=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return u0!==null?null:i(T,E,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return N.key===u0?y(T,E,N,L):null;case H:return N.key===u0?S(T,E,N,L):null;case x:return N=Pn(N),v(T,E,N,L)}if(m0(N)||q(N))return u0!==null?null:I(T,E,N,L,null);if(typeof N.then=="function")return v(T,E,dl(N),L);if(N.$$typeof===Y)return v(T,E,il(T,N),L);ml(T,N)}return null}function M(T,E,N,L,u0){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return T=T.get(N)||null,i(E,T,""+L,u0);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case k:return T=T.get(L.key===null?N:L.key)||null,y(E,T,L,u0);case H:return T=T.get(L.key===null?N:L.key)||null,S(E,T,L,u0);case x:return L=Pn(L),M(T,E,N,L,u0)}if(m0(L)||q(L))return T=T.get(N)||null,I(E,T,L,u0,null);if(typeof L.then=="function")return M(T,E,N,dl(L),u0);if(L.$$typeof===Y)return M(T,E,N,il(E,L),u0);ml(E,L)}return null}function Z(T,E,N,L){for(var u0=null,N0=null,c0=E,f0=E=0,lu=null;c0!==null&&f0<N.length;f0++){c0.index>f0?(lu=c0,c0=null):lu=c0.sibling;var D0=v(T,c0,N[f0],L);if(D0===null){c0===null&&(c0=lu);break}u&&c0&&D0.alternate===null&&n(T,c0),E=a(D0,E,f0),N0===null?u0=D0:N0.sibling=D0,N0=D0,c0=lu}if(f0===N.length)return e(T,c0),C0&&P7(T,f0),u0;if(c0===null){for(;f0<N.length;f0++)c0=z(T,N[f0],L),c0!==null&&(E=a(c0,E,f0),N0===null?u0=c0:N0.sibling=c0,N0=c0);return C0&&P7(T,f0),u0}for(c0=t(c0);f0<N.length;f0++)lu=M(c0,T,f0,N[f0],L),lu!==null&&(u&&(D0=lu.alternate,D0!==null&&c0.delete(D0.key===null?f0:D0.key)),E=a(lu,E,f0),N0===null?u0=lu:N0.sibling=lu,N0=lu);return u&&c0.forEach(function(Cn){return n(T,Cn)}),C0&&P7(T,f0),u0}function e0(T,E,N,L){if(N==null)throw Error(s(151));for(var u0=null,N0=null,c0=E,f0=E=0,lu=null,D0=N.next();c0!==null&&!D0.done;f0++,D0=N.next()){c0.index>f0?(lu=c0,c0=null):lu=c0.sibling;var Cn=v(T,c0,D0.value,L);if(Cn===null){c0===null&&(c0=lu);break}u&&c0&&Cn.alternate===null&&n(T,c0),E=a(Cn,E,f0),N0===null?u0=Cn:N0.sibling=Cn,N0=Cn,c0=lu}if(D0.done)return e(T,c0),C0&&P7(T,f0),u0;if(c0===null){for(;!D0.done;f0++,D0=N.next())D0=z(T,D0.value,L),D0!==null&&(E=a(D0,E,f0),N0===null?u0=D0:N0.sibling=D0,N0=D0);return C0&&P7(T,f0),u0}for(c0=t(c0);!D0.done;f0++,D0=N.next())D0=M(c0,T,f0,D0.value,L),D0!==null&&(u&&(lu=D0.alternate,lu!==null&&c0.delete(lu.key===null?f0:lu.key)),E=a(D0,E,f0),N0===null?u0=D0:N0.sibling=D0,N0=D0);return u&&c0.forEach(function(xm){return n(T,xm)}),C0&&P7(T,f0),u0}function b0(T,E,N,L){if(typeof N=="object"&&N!==null&&N.type===A0&&N.key===null&&N.props.ref===void 0&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case k:u:{for(var u0=N.key;E!==null;){if(E.key===u0){if(u0=N.type,u0===A0){if(E.tag===7){e(T,E.sibling),L=l(E,N.props.children),en(L,N),L.return=T,T=L;break u}}else if(E.elementType===u0||typeof u0=="object"&&u0!==null&&u0.$$typeof===x&&Pn(u0)===E.type){e(T,E.sibling),L=l(E,N.props),en(L,N),L.return=T,T=L;break u}e(T,E);break}else n(T,E);E=E.sibling}N.type===A0?(L=Qn(N.props.children,T.mode,L,N.key),en(L,N),L.return=T,T=L):(L=el(N.type,N.key,N.props,null,T.mode,L),en(L,N),L.return=T,T=L)}return c(T);case H:u:{for(u0=N.key;E!==null;){if(E.key===u0)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){e(T,E.sibling),L=l(E,N.children||[]),L.return=T,T=L;break u}else{e(T,E);break}else n(T,E);E=E.sibling}L=Ha(N,T.mode,L),L.return=T,T=L}return c(T);case x:return N=Pn(N),b0(T,E,N,L)}if(m0(N))return Z(T,E,N,L);if(q(N)){if(u0=q(N),typeof u0!="function")throw Error(s(150));return N=u0.call(N),e0(T,E,N,L)}if(typeof N.then=="function")return b0(T,E,dl(N),L);if(N.$$typeof===Y)return b0(T,E,il(T,N),L);ml(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,E!==null&&E.tag===6?(e(T,E.sibling),L=l(E,N),L.return=T,T=L):(e(T,E),L=Ba(N,T.mode,L),L.return=T,T=L),c(T)):e(T,E)}return function(T,E,N,L){try{at=0;var u0=b0(T,E,N,L);return ge=null,u0}catch(c0){if(c0===me||c0===sl)throw c0;var N0=Gu(29,c0,null,T.mode);return N0.lanes=L,N0.return=T,N0}}}var Yn=ho(!0),Eo=ho(!1),tn=!1;function Fa(u){u.updateQueue={baseState:u.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $a(u,n){u=u.updateQueue,n.updateQueue===u&&(n.updateQueue={baseState:u.baseState,firstBaseUpdate:u.firstBaseUpdate,lastBaseUpdate:u.lastBaseUpdate,shared:u.shared,callbacks:null})}function ln(u){return{lane:u,tag:0,payload:null,callback:null,next:null}}function an(u,n,e){var t=u.updateQueue;if(t===null)return null;if(t=t.shared,(O0&2)!==0){var l=t.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),t.pending=n,n=nl(u),$i(u,null,e),n}return ul(u,t,n,e),nl(u)}function rt(u,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var t=n.lanes;t&=u.pendingLanes,e|=t,n.lanes=e,ti(u,e)}}function ur(u,n){var e=u.updateQueue,t=u.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var l=null,a=null;if(e=e.firstBaseUpdate,e!==null){do{var c={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};a===null?l=a=c:a=a.next=c,e=e.next}while(e!==null);a===null?l=a=n:a=a.next=n}else l=a=n;e={baseState:t.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:t.shared,callbacks:t.callbacks},u.updateQueue=e;return}u=e.lastBaseUpdate,u===null?e.firstBaseUpdate=n:u.next=n,e.lastBaseUpdate=n}var nr=!1;function ct(){if(nr){var u=de;if(u!==null)throw u}}function it(u,n,e,t){nr=!1;var l=u.updateQueue;tn=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var y=i,S=y.next;y.next=null,c===null?a=S:c.next=S,c=y;var I=u.alternate;I!==null&&(I=I.updateQueue,i=I.lastBaseUpdate,i!==c&&(i===null?I.firstBaseUpdate=S:i.next=S,I.lastBaseUpdate=y))}if(a!==null){var z=l.baseState;c=0,I=S=y=null,i=a;do{var v=i.lane&-536870913,M=v!==i.lane;if(M?(_0&v)===v:(t&v)===v){v!==0&&v===Gn&&(nr=!0),I!==null&&(I=I.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});u:{var Z=u,e0=i;v=n;var b0=e;switch(e0.tag){case 1:if(Z=e0.payload,typeof Z=="function"){z=Z.call(b0,z,v);break u}z=Z;break u;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=e0.payload,v=typeof Z=="function"?Z.call(b0,z,v):Z,v==null)break u;z=w({},z,v);break u;case 2:tn=!0}}v=i.callback,v!==null&&(u.flags|=64,M&&(u.flags|=8192),M=l.callbacks,M===null?l.callbacks=[v]:M.push(v))}else M={lane:v,tag:i.tag,payload:i.payload,callback:i.callback,next:null},I===null?(S=I=M,y=z):I=I.next=M,c|=v;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;M=i,i=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);I===null&&(y=z),l.baseState=y,l.firstBaseUpdate=S,l.lastBaseUpdate=I,a===null&&(l.shared.lanes=0),mn|=c,u.lanes=c,u.memoizedState=z}}function po(u,n){if(typeof u!="function")throw Error(s(191,u));u.call(n)}function bo(u,n){var e=u.callbacks;if(e!==null)for(u.callbacks=null,u=0;u<e.length;u++)po(e[u],n)}var rn=q0(null),gl=q0(0);function vo(u,n){u=Z7,g0(gl,u),g0(rn,n),Z7=u|n.baseLanes}function er(){g0(gl,Z7),g0(rn,rn.current)}function tr(){Z7=gl.current,w0(rn),w0(gl)}var Eu=q0(null),Su=null;function cn(u){var n=u.alternate;g0(pu,pu.current&1),g0(Eu,u),Su===null&&(n===null||rn.current!==null||n.memoizedState!==null)&&(Su=u)}function lr(u){g0(pu,pu.current),g0(Eu,u),Su===null&&(Su=u)}function Ao(u){u.tag===22?(g0(pu,pu.current),g0(Eu,u),Su===null&&(Su=u)):on()}function on(){g0(pu,pu.current),g0(Eu,Eu.current)}function Vu(u){w0(Eu),Su===u&&(Su=null),w0(pu)}var pu=q0(0);function ot(u,n){g0(Eu,Eu.current),g0(pu,n)}function ar(u){w0(pu),w0(Eu),Su===u&&(Su=null)}function yl(u){for(var n=u;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Dc(e)||Mc(e)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===u)break;for(;n.sibling===null;){if(n.return===null||n.return===u)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var B7=0,p0=null,P0=null,eu=null,hl=!1,ye=!1,Bn=!1,El=0,st=0,he=null,l1=0;function k0(){throw Error(s(321))}function rr(u,n){if(n===null)return!1;for(var e=0;e<n.length&&e<u.length;e++)if(!Zu(u[e],n[e]))return!1;return!0}function cr(u,n,e,t,l,a){return B7=a,p0=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=u===null||u.memoizedState===null?ls:as,Bn=!1,a=e(t,l),Bn=!1,ye&&(a=To(n,e,t,l)),Co(u),a}function Co(u){U.H=Sl;var n=P0!==null&&P0.next!==null;if(B7=0,eu=P0=p0=null,hl=!1,st=0,he=null,n)throw Error(s(300));u===null||tu||(u=u.dependencies,u!==null&&cl(u)&&(tu=!0))}function To(u,n,e,t){p0=u;var l=0;do{if(ye&&(he=null),st=0,ye=!1,25<=l)throw Error(s(301));if(l+=1,eu=P0=null,u.updateQueue!=null){var a=u.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}U.H=d1,a=n(e,t)}while(ye);return a}function a1(){var u=U.H,n=u.useState()[0];return n=typeof n.then=="function"?ft(n):n,u=u.useState()[0],(P0!==null?P0.memoizedState:null)!==u&&(p0.flags|=1024),n}function ir(){var u=El!==0;return El=0,u}function or(u,n,e){n.updateQueue=u.updateQueue,n.flags&=-2053,u.lanes&=~e}function sr(u){if(hl){for(u=u.memoizedState;u!==null;){var n=u.queue;n!==null&&(n.pending=null),u=u.next}hl=!1}B7=0,eu=P0=p0=null,ye=!1,st=El=0,he=null}function Iu(){var u={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return eu===null?p0.memoizedState=eu=u:eu=eu.next=u,eu}function $0(){if(P0===null){var u=p0.alternate;u=u!==null?u.memoizedState:null}else u=P0.next;var n=eu===null?p0.memoizedState:eu.next;if(n!==null)eu=n,P0=u;else{if(u===null)throw p0.alternate===null?Error(s(467)):Error(s(310));P0=u,u={memoizedState:P0.memoizedState,baseState:P0.baseState,baseQueue:P0.baseQueue,queue:P0.queue,next:null},eu===null?p0.memoizedState=eu=u:eu=eu.next=u}return eu}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ft(u){var n=st;return st+=1,he===null&&(he=[]),u=mo(he,u,n),n=p0,(eu===null?n.memoizedState:eu.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?ls:as),u}function bl(u){if(u!==null&&typeof u=="object"){if(typeof u.then=="function")return ft(u);if(u.$$typeof===P)return;if(u.$$typeof===Y)return hu(u)}throw Error(s(438,String(u)))}function fr(u){var n=null,e=p0.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var t=p0.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(n={data:t.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=pl(),p0.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(u),t=0;t<u;t++)e[t]=Q0;return n.index++,e}function H7(u,n){return typeof n=="function"?n(u):n}function vl(u){var n=$0();return dr(n,P0,u)}function dr(u,n,e){var t=u.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var l=u.baseQueue,a=t.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}n.baseQueue=l=a,t.pending=null}if(a=u.baseState,l===null)u.memoizedState=a;else{n=l.next;var i=c=null,y=null,S=n,I=!1;do{var z=S.lane&-536870913;if(z!==S.lane?(_0&z)===z:(B7&z)===z){var v=S.revertLane;if(v===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),z===Gn&&(I=!0);else if((B7&v)===v){S=S.next,v===Gn&&(I=!0);continue}else z={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},y===null?(i=y=z,c=a):y=y.next=z,p0.lanes|=v,mn|=v;z=S.action,Bn&&e(a,z),a=S.hasEagerState?S.eagerState:e(a,z)}else v={lane:z,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},y===null?(i=y=v,c=a):y=y.next=v,p0.lanes|=z,mn|=z;S=S.next}while(S!==null&&S!==n);if(y===null?c=a:y.next=i,!Zu(a,u.memoizedState)&&(tu=!0,I&&(e=de,e!==null)))throw e;u.memoizedState=a,u.baseState=c,u.baseQueue=y,t.lastRenderedState=a}return l===null&&(t.lanes=0),[u.memoizedState,t.dispatch]}function mr(u){var n=$0(),e=n.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=u;var t=e.dispatch,l=e.pending,a=n.memoizedState;if(l!==null){e.pending=null;var c=l=l.next;do a=u(a,c.action),c=c.next;while(c!==l);Zu(a,n.memoizedState)||(tu=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),e.lastRenderedState=a}return[a,t]}function So(u,n,e){var t=p0,l=$0(),a=C0;if(a){if(e===void 0)throw Error(s(407));e=e()}else e=n();var c=!Zu((P0||l).memoizedState,e);if(c&&(l.memoizedState=e,tu=!0),l=l.queue,hr(Do.bind(null,t,l,u),[u]),u=l.getSnapshot!==n||c||eu!==null&&(eu.memoizedState.tag&1)!==0,Ee(u?9:8,{destroy:void 0},No.bind(null,t,l,e,n),null),u){if(t.flags|=2048,B0===null)throw Error(s(349));a||(B7&127)!==0||_o(t,n,e)}return e}function _o(u,n,e){u.flags|=16384,u={getSnapshot:n,value:e},n=p0.updateQueue,n===null?(n=pl(),p0.updateQueue=n,n.stores=[u]):(e=n.stores,e===null?n.stores=[u]:e.push(u))}function No(u,n,e,t){n.value=e,n.getSnapshot=t,Mo(n)&&Io(u)}function Do(u,n,e){return e(function(){Mo(n)&&Io(u)})}function Mo(u){var n=u.getSnapshot;u=u.value;try{var e=n();return!Zu(u,e)}catch{return!0}}function Io(u){var n=Wn(u,2);n!==null&&Yu(n,u,2)}function gr(u){var n=Iu();if(typeof u=="function"){var e=u;if(u=e(),Bn){j7(!0);try{e()}finally{j7(!1)}}}return n.memoizedState=n.baseState=u,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H7,lastRenderedState:u},n}function Wo(u,n,e,t){return u.baseState=e,dr(u,P0,typeof t=="function"?t:H7)}function r1(u,n,e,t,l){if(Tl(u))throw Error(s(485));if(u=n.action,u!==null){var a={payload:l,action:u,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){a.listeners.push(c)}};U.T!==null?e(!0):a.isTransition=!1,t(a),e=n.pending,e===null?(a.next=n.pending=a,Qo(n,a)):(a.next=e.next,n.pending=e.next=a)}}function Qo(u,n){var e=n.action,t=n.payload,l=u.state;if(n.isTransition){var a=U.T,c={};c.types=a!==null?a.types:null,U.T=c;try{var i=e(l,t),y=U.S;y!==null&&y(c,i),Oo(u,n,i)}catch(S){yr(u,n,S)}finally{a!==null&&c.types!==null&&(a.types=c.types),U.T=a}}else try{a=e(l,t),Oo(u,n,a)}catch(S){yr(u,n,S)}}function Oo(u,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){wo(u,n,t)},function(t){return yr(u,n,t)}):wo(u,n,e)}function wo(u,n,e){n.status="fulfilled",n.value=e,Lo(n),u.state=e,n=u.pending,n!==null&&(e=n.next,e===n?u.pending=null:(e=e.next,n.next=e,Qo(u,e)))}function yr(u,n,e){var t=u.pending;if(u.pending=null,t!==null){t=t.next;do n.status="rejected",n.reason=e,Lo(n),n=n.next;while(n!==t)}u.action=null}function Lo(u){u=u.listeners;for(var n=0;n<u.length;n++)(0,u[n])()}function zo(u,n){return n}function Go(u,n){if(C0){var e=B0.formState;if(e!==null){u:{var t=p0;if(C0){if(H0){n:{for(var l=H0,a=i7;l.nodeType!==8;){if(!a){l=null;break n}if(l=s7(l.nextSibling),l===null){l=null;break n}}a=l.data,l=a==="F!"||a==="F"?l:null}if(l){H0=s7(l.nextSibling),t=l.data==="F!";break u}}un(t)}t=!1}t&&(n=e[0])}}return e=Iu(),e.memoizedState=e.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},e.queue=t,e=ns.bind(null,p0,t),t.dispatch=e,t=gr(!1),a=Ar.bind(null,p0,!1,t.queue),t=Iu(),l={state:n,dispatch:null,action:u,pending:null},t.queue=l,e=r1.bind(null,p0,l,a,e),l.dispatch=e,t.memoizedState=u,[n,e,!1]}function xo(u){var n=$0();return Po(n,P0,u)}function Po(u,n,e){if(n=dr(u,n,zo)[0],u=vl(H7)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var t=ft(n)}catch(c){throw c===me?sl:c}else t=n;n=$0();var l=n.queue,a=l.dispatch;return e!==n.memoizedState&&(p0.flags|=2048,Ee(9,{destroy:void 0},c1.bind(null,l,e),null)),[t,a,u]}function c1(u,n){u.action=n}function Ro(u){var n=$0(),e=P0;if(e!==null)return Po(n,e,u);$0(),n=n.memoizedState,e=$0();var t=e.queue.dispatch;return e.memoizedState=u,[n,t,!1]}function Ee(u,n,e,t){return u={tag:u,create:e,deps:t,inst:n,next:null},n=p0.updateQueue,n===null&&(n=pl(),p0.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=u.next=u:(t=e.next,e.next=u,u.next=t,n.lastEffect=u),u}function Yo(){return $0().memoizedState}function Al(u,n,e,t){var l=Iu();p0.flags|=u,l.memoizedState=Ee(1|n,{destroy:void 0},e,t===void 0?null:t)}function Cl(u,n,e,t){var l=$0();t=t===void 0?null:t;var a=l.memoizedState.inst;P0!==null&&t!==null&&rr(t,P0.memoizedState.deps)?l.memoizedState=Ee(n,a,e,t):(p0.flags|=u,l.memoizedState=Ee(1|n,a,e,t))}function Bo(u,n){Al(8390656,8,u,n)}function hr(u,n){Cl(2048,8,u,n)}function i1(u){p0.flags|=4;var n=p0.updateQueue;if(n===null)n=pl(),p0.updateQueue=n,n.events=[u];else{var e=n.events;e===null?n.events=[u]:e.push(u)}}function Ho(u){var n=$0().memoizedState;return i1({ref:n,nextImpl:u}),function(){if((O0&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Uo(u,n){return Cl(4,2,u,n)}function qo(u,n){return Cl(4,4,u,n)}function Zo(u,n){if(typeof n=="function"){u=u();var e=n(u);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return u=u(),n.current=u,function(){n.current=null}}function Vo(u,n,e){e=e!=null?e.concat([u]):null,Cl(4,4,Zo.bind(null,n,u),e)}function Er(){}function Xo(u,n){var e=$0();n=n===void 0?null:n;var t=e.memoizedState;return n!==null&&rr(n,t[1])?t[0]:(e.memoizedState=[u,n],u)}function Ko(u,n){var e=$0();n=n===void 0?null:n;var t=e.memoizedState;if(n!==null&&rr(n,t[1]))return t[0];if(t=u(),Bn){j7(!0);try{u()}finally{j7(!1)}}return e.memoizedState=[t,n],t}function pr(u,n,e){return e===void 0||(B7&1073741824)!==0&&(_0&261930)===0?u.memoizedState=n:(u.memoizedState=e,u=lf(),p0.lanes|=u,mn|=u,e)}function jo(u,n,e,t){return Zu(e,n)?e:rn.current!==null?(u=pr(u,e,t),Zu(u,n)||(tu=!0),u):(B7&106)===0||(B7&1073741824)!==0&&(_0&261930)===0?(tu=!0,u.memoizedState=e):(u=lf(),p0.lanes|=u,mn|=u,n)}function ko(u,n,e,t,l){var a=$.p;$.p=a!==0&&8>a?a:8;var c=U.T,i={};i.types=c!==null?c.types:null,U.T=i,Ar(u,!1,n,e);try{var y=l(),S=U.S;if(S!==null&&S(i,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var I=t1(y,t);dt(u,n,I,ku(u))}else dt(u,n,t,ku(u))}catch(z){dt(u,n,{then:function(){},status:"rejected",reason:z},ku())}finally{$.p=a,c!==null&&i.types!==null&&(c.types=i.types),U.T=c}}function o1(){}function br(u,n,e,t){if(u.tag!==5)throw Error(s(476));var l=Jo(u).queue;ko(u,l,n,Y0,e===null?o1:function(){return Fo(u),e(t)})}function Jo(u){var n=u.memoizedState;if(n!==null)return n;n={memoizedState:Y0,baseState:Y0,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:H7,lastRenderedState:Y0},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:H7,lastRenderedState:e},next:null},u.memoizedState=n,u=u.alternate,u!==null&&(u.memoizedState=n),n}function Fo(u){var n=Jo(u);n.next===null&&(n=u.alternate.memoizedState),dt(u,n.next.queue,{},ku())}function vr(){return hu(Ge)}function $o(){return $0().memoizedState}function us(){return $0().memoizedState}function s1(u){for(var n=u.return;n!==null;){switch(n.tag){case 24:case 3:var e=ku();u=ln(e);var t=an(n,u,e);t!==null&&(Yu(t,n,e),rt(t,n,e)),n={cache:Ka()},u.payload=n;return}n=n.return}}function f1(u,n,e){var t=ku();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Tl(u)?es(n,e):(e=Ra(u,n,e,t),e!==null&&(Yu(e,u,t),ts(e,n,t)))}function ns(u,n,e){var t=ku();dt(u,n,e,t)}function dt(u,n,e,t){var l={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Tl(u))es(n,l);else{var a=u.alternate;if(u.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var c=n.lastRenderedState,i=a(c,e);if(l.hasEagerState=!0,l.eagerState=i,Zu(i,c))return ul(u,n,l,0),B0===null&&$t(),!1}catch{}if(e=Ra(u,n,l,t),e!==null)return Yu(e,u,t),ts(e,n,t),!0}return!1}function Ar(u,n,e,t){if(t={lane:2,revertLane:fc(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Tl(u)){if(n)throw Error(s(479))}else n=Ra(u,e,t,2),n!==null&&Yu(n,u,2)}function Tl(u){var n=u.alternate;return u===p0||n!==null&&n===p0}function es(u,n){ye=hl=!0;var e=u.pending;e===null?n.next=n:(n.next=e.next,e.next=n),u.pending=n}function ts(u,n,e){if((e&4194048)!==0){var t=n.lanes;t&=u.pendingLanes,e|=t,n.lanes=e,ti(u,e)}}var Sl={readContext:hu,use:bl,useCallback:k0,useContext:k0,useEffect:k0,useImperativeHandle:k0,useLayoutEffect:k0,useInsertionEffect:k0,useMemo:k0,useReducer:k0,useRef:k0,useState:k0,useDebugValue:k0,useDeferredValue:k0,useTransition:k0,useSyncExternalStore:k0,useId:k0,useHostTransitionStatus:k0,useFormState:k0,useActionState:k0,useOptimistic:k0,useMemoCache:k0,useCacheRefresh:k0,useEffectEvent:k0},ls={readContext:hu,use:bl,useCallback:function(u,n){return Iu().memoizedState=[u,n===void 0?null:n],u},useContext:hu,useEffect:Bo,useImperativeHandle:function(u,n,e){e=e!=null?e.concat([u]):null,Al(4194308,4,Zo.bind(null,n,u),e)},useLayoutEffect:function(u,n){return Al(4194308,4,u,n)},useInsertionEffect:function(u,n){Al(4,2,u,n)},useMemo:function(u,n){var e=Iu();n=n===void 0?null:n;var t=u();if(Bn){j7(!0);try{u()}finally{j7(!1)}}return e.memoizedState=[t,n],t},useReducer:function(u,n,e){var t=Iu();if(e!==void 0){var l=e(n);if(Bn){j7(!0);try{e(n)}finally{j7(!1)}}}else l=n;return t.memoizedState=t.baseState=l,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:u,lastRenderedState:l},t.queue=u,u=u.dispatch=f1.bind(null,p0,u),[t.memoizedState,u]},useRef:function(u){var n=Iu();return u={current:u},n.memoizedState=u},useState:function(u){u=gr(u);var n=u.queue,e=ns.bind(null,p0,n);return n.dispatch=e,[u.memoizedState,e]},useDebugValue:Er,useDeferredValue:function(u,n){var e=Iu();return pr(e,u,n)},useTransition:function(){var u=gr(!1);return u=ko.bind(null,p0,u.queue,!0,!1),Iu().memoizedState=u,[!1,u]},useSyncExternalStore:function(u,n,e){var t=p0,l=Iu();if(C0){if(e===void 0)throw Error(s(407));e=e()}else{if(e=n(),B0===null)throw Error(s(349));(_0&127)!==0||_o(t,n,e)}l.memoizedState=e;var a={value:e,getSnapshot:n};return l.queue=a,Bo(Do.bind(null,t,a,u),[u]),t.flags|=2048,Ee(9,{destroy:void 0},No.bind(null,t,a,e,n),null),e},useId:function(){var u=Iu(),n=B0.identifierPrefix;if(C0){var e=C7,t=A7;e=(t&~(1<<32-Uu(t)-1)).toString(32)+e,n="_"+n+"R_"+e,e=El++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=l1++,n="_"+n+"r_"+e.toString(32)+"_";return u.memoizedState=n},useHostTransitionStatus:vr,useFormState:Go,useActionState:Go,useOptimistic:function(u){var n=Iu();n.memoizedState=n.baseState=u;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=Ar.bind(null,p0,!0,e),e.dispatch=n,[u,n]},useMemoCache:fr,useCacheRefresh:function(){return Iu().memoizedState=s1.bind(null,p0)},useEffectEvent:function(u){var n=Iu(),e={impl:u};return n.memoizedState=e,function(){if((O0&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}},as={readContext:hu,use:bl,useCallback:Xo,useContext:hu,useEffect:hr,useImperativeHandle:Vo,useInsertionEffect:Uo,useLayoutEffect:qo,useMemo:Ko,useReducer:vl,useRef:Yo,useState:function(){return vl(H7)},useDebugValue:Er,useDeferredValue:function(u,n){var e=$0();return jo(e,P0.memoizedState,u,n)},useTransition:function(){var u=vl(H7)[0],n=$0().memoizedState;return[typeof u=="boolean"?u:ft(u),n]},useSyncExternalStore:So,useId:$o,useHostTransitionStatus:vr,useFormState:xo,useActionState:xo,useOptimistic:function(u,n){var e=$0();return Wo(e,P0,u,n)},useMemoCache:fr,useCacheRefresh:us,useEffectEvent:Ho},d1={readContext:hu,use:bl,useCallback:Xo,useContext:hu,useEffect:hr,useImperativeHandle:Vo,useInsertionEffect:Uo,useLayoutEffect:qo,useMemo:Ko,useReducer:mr,useRef:Yo,useState:function(){return mr(H7)},useDebugValue:Er,useDeferredValue:function(u,n){var e=$0();return P0===null?pr(e,u,n):jo(e,P0.memoizedState,u,n)},useTransition:function(){var u=mr(H7)[0],n=$0().memoizedState;return[typeof u=="boolean"?u:ft(u),n]},useSyncExternalStore:So,useId:$o,useHostTransitionStatus:vr,useFormState:Ro,useActionState:Ro,useOptimistic:function(u,n){var e=$0();return P0!==null?Wo(e,P0,u,n):(e.baseState=u,[u,e.queue.dispatch])},useMemoCache:fr,useCacheRefresh:us,useEffectEvent:Ho};function Cr(u,n,e,t){n=u.memoizedState,e=e(t,n),e=e==null?n:w({},n,e),u.memoizedState=e,u.lanes===0&&(u.updateQueue.baseState=e)}var Tr={enqueueSetState:function(u,n,e){u=u._reactInternals;var t=ku(),l=ln(t);l.payload=n,e!=null&&(l.callback=e),n=an(u,l,t),n!==null&&(Yu(n,u,t),rt(n,u,t))},enqueueReplaceState:function(u,n,e){u=u._reactInternals;var t=ku(),l=ln(t);l.tag=1,l.payload=n,e!=null&&(l.callback=e),n=an(u,l,t),n!==null&&(Yu(n,u,t),rt(n,u,t))},enqueueForceUpdate:function(u,n){u=u._reactInternals;var e=ku(),t=ln(e);t.tag=2,n!=null&&(t.callback=n),n=an(u,t,e),n!==null&&(Yu(n,u,e),rt(n,u,e))}};function rs(u,n,e,t,l,a,c){return u=u.stateNode,typeof u.shouldComponentUpdate=="function"?u.shouldComponentUpdate(t,a,c):n.prototype&&n.prototype.isPureReactComponent?!Fe(e,t)||!Fe(l,a):!0}function cs(u,n,e,t){u=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,t),n.state!==u&&Tr.enqueueReplaceState(n,n.state,null)}function Hn(u,n){var e=n;if("ref"in n){e={};for(var t in n)t!=="ref"&&(e[t]=n[t])}if(u=u.defaultProps){e===n&&(e=w({},e));for(var l in u)e[l]===void 0&&(e[l]=u[l])}return e}function is(u){Ft(u)}function os(u){console.error(u)}function ss(u){Ft(u)}function _l(u,n){try{var e=u.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(t){setTimeout(function(){throw t})}}function fs(u,n,e){try{var t=u.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Sr(u,n,e){return e=ln(e),e.tag=3,e.payload={element:null},e.callback=function(){_l(u,n)},e}function ds(u){return u=ln(u),u.tag=3,u}function ms(u,n,e,t){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=t.value;u.payload=function(){return l(a)},u.callback=function(){fs(n,e,t)}}var c=e.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(u.callback=function(){fs(n,e,t),typeof l!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})})}function m1(u,n,e,t,l){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(n=e.alternate,n!==null&&Ln(n,e,l,!0),e=Eu.current,e!==null){switch(e.tag){case 31:case 13:case 19:return Su===null?Vl():e.alternate===null&&J0===0&&(J0=3),e.flags&=-257,e.flags|=65536,e.lanes=l,t===fl?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([t]):n.add(t),ic(u,t,l)),!1;case 22:return e.flags|=65536,t===fl?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([t]):e.add(t)),ic(u,t,l)),!1}throw Error(s(435,e.tag))}return ic(u,t,l),Vl(),!1}if(C0)return n=Eu.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,t!==qa&&(u=Error(s(422),{cause:t}),nt(a7(u,e)))):(t!==qa&&(n=Error(s(423),{cause:t}),nt(a7(n,e))),u=u.current.alternate,u.flags|=65536,l&=-l,u.lanes|=l,t=a7(t,e),l=Sr(u.stateNode,t,l),ur(u,l),J0!==4&&(J0=2)),!1;var a=Error(s(520),{cause:t});if(a=a7(a,e),vt===null?vt=[a]:vt.push(a),J0!==4&&(J0=2),n===null)return!0;t=a7(t,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,u=l&-l,e.lanes|=u,u=Sr(e.stateNode,t,u),ur(e,u),!1;case 1:if(n=e.type,a=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(gn===null||!gn.has(a))))return e.flags|=65536,l&=-l,e.lanes|=l,l=ds(l),ms(l,u,e,t),ur(e,l),!1;break;case 22:if(e.memoizedState!==null)return e.flags|=65536,!1}e=e.return}while(e!==null);return!1}var _r=Error(s(461)),tu=!1;function ru(u,n,e,t){n.child=u===null?Eo(n,null,e,t):Yn(n,u.child,e,t)}function gs(u,n,e,t,l){e=e.render;var a=n.ref;if("ref"in t){var c={};for(var i in t)i!=="ref"&&(c[i]=t[i])}else c=t;return zn(n),t=cr(u,n,e,c,a,l),i=ir(),u!==null&&!tu?(or(u,n,l),U7(u,n,l)):(C0&&i&&ll(n),n.flags|=1,ru(u,n,t,l),n.child)}function ys(u,n,e,t,l){if(u===null){var a=e.type;return typeof a=="function"&&!Ya(a)&&a.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=a,hs(u,n,a,t,l)):(u=el(e.type,null,t,n,n.mode,l),u.ref=n.ref,u.return=n,n.child=u)}if(a=u.child,!wr(u,l)){var c=a.memoizedProps;if(e=e.compare,e=e!==null?e:Fe,e(c,t)&&u.ref===n.ref)return U7(u,n,l)}return n.flags|=1,u=x7(a,t),u.ref=n.ref,u.return=n,n.child=u}function hs(u,n,e,t,l){if(u!==null){var a=u.memoizedProps;if(Fe(a,t)&&u.ref===n.ref)if(tu=!1,n.pendingProps=t=a,wr(u,l))(u.flags&131072)!==0&&(tu=!0);else return n.lanes=u.lanes,U7(u,n,l)}return Nr(u,n,e,t,l)}function Es(u,n,e,t){var l=t.children,a=u!==null?u.memoizedState:null;if(u===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((n.flags&128)!==0){if(a=a!==null?a.baseLanes|e:e,u!==null){for(t=n.child=u.child,l=0;t!==null;)l=l|t.lanes|t.childLanes,t=t.sibling;t=l&~a}else t=0,n.child=null;return ps(u,n,a,e,t)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},u!==null&&ol(n,a!==null?a.cachePool:null),a!==null?vo(n,a):er(),Ao(n);else return t=n.lanes=536870912,ps(u,n,a!==null?a.baseLanes|e:e,e,t)}else a!==null?(ol(n,a.cachePool),vo(n,a),on(),n.memoizedState=null):(u!==null&&ol(n,null),er(),on());return ru(u,n,l,e),n.child}function mt(u,n){return u!==null&&u.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ps(u,n,e,t,l){var a=ka();return a=a===null?null:{parent:nu._currentValue,pool:a},n.memoizedState={baseLanes:e,cachePool:a},u!==null&&ol(n,null),er(),Ao(n),u!==null&&Ln(u,n,t,!0),n.childLanes=l,null}function Nl(u,n){return n=Dl({mode:n.mode,children:n.children},u.mode),n.ref=u.ref,u.child=n,n.return=u,n}function bs(u,n,e){return Yn(n,u.child,null,e),u=Nl(n,n.pendingProps),u.flags|=2,Vu(n),n.memoizedState=null,u}function g1(u,n,e){var t=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,u===null){if(C0){if(t.mode==="hidden")return u=Nl(n,t),n.lanes=536870912,u.memoizedState={baseLanes:0,cachePool:null},mt(null,u);if(lr(n),(u=H0)?(u=Vf(u,i7),u=u!==null&&u.data==="&"?u:null,u!==null&&(n.memoizedState={dehydrated:u,treeContext:F7!==null?{id:A7,overflow:C7}:null,retryLane:536870912,hydrationErrors:null},e=no(u),e.return=n,n.child=e,fu=n,H0=null)):u=null,u===null)throw un(n);return n.lanes=536870912,null}return Nl(n,t)}var a=u.memoizedState;if(a!==null){var c=a.dehydrated;if(lr(n),l)if(n.flags&256)n.flags&=-257,n=bs(u,n,e);else if(n.memoizedState!==null)n.child=u.child,n.flags|=128,n=null;else throw Error(s(558));else if(tu||Ln(u,n,e,!1),l=(e&u.childLanes)!==0,tu||l){if(rn.current===null){if(t=B0,t!==null&&(c=li(t,e),c!==0&&c!==a.retryLane))throw a.retryLane=c,Wn(u,c),Yu(t,u,c),_r;Vl()}n=bs(u,n,e)}else u=a.treeContext,H0=s7(c.nextSibling),fu=n,C0=!0,$7=null,i7=!1,u!==null&&lo(n,u),n=Nl(n,t),n.flags|=134221824;return n}return u=x7(u.child,{mode:t.mode,children:t.children}),u.ref=n.ref,n.child=u,u.return=n,u}function pe(u,n){var e=n.ref;if(e===null)u!==null&&u.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(s(284));(u===null||u.ref!==e)&&(n.flags|=4194816)}}function Nr(u,n,e,t,l){return zn(n),e=cr(u,n,e,t,void 0,l),t=ir(),u!==null&&!tu?(or(u,n,l),U7(u,n,l)):(C0&&t&&ll(n),n.flags|=1,ru(u,n,e,l),n.child)}function vs(u,n,e,t,l,a){return zn(n),n.updateQueue=null,e=To(n,t,e,l),Co(u),t=ir(),u!==null&&!tu?(or(u,n,a),U7(u,n,a)):(C0&&t&&ll(n),n.flags|=1,ru(u,n,e,a),n.child)}function As(u,n,e,t,l){if(zn(n),n.stateNode===null){var a=ie,c=e.contextType;typeof c=="object"&&c!==null&&(a=hu(c)),a=new e(t,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Tr,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=t,a.state=n.memoizedState,a.refs={},Fa(n),c=e.contextType,a.context=typeof c=="object"&&c!==null?hu(c):ie,a.state=n.memoizedState,c=e.getDerivedStateFromProps,typeof c=="function"&&(Cr(n,e,c,t),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(c=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),c!==a.state&&Tr.enqueueReplaceState(a,a.state,null),it(n,t,a,l),ct(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),t=!0}else if(u===null){a=n.stateNode;var i=n.memoizedProps,y=Hn(e,i);a.props=y;var S=a.context,I=e.contextType;c=ie,typeof I=="object"&&I!==null&&(c=hu(I));var z=e.getDerivedStateFromProps;I=typeof z=="function"||typeof a.getSnapshotBeforeUpdate=="function",i=n.pendingProps!==i,I||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i||S!==c)&&cs(n,a,t,c),tn=!1;var v=n.memoizedState;a.state=v,it(n,t,a,l),ct(),S=n.memoizedState,i||v!==S||tn?(typeof z=="function"&&(Cr(n,e,z,t),S=n.memoizedState),(y=tn||rs(n,e,y,t,v,S,c))?(I||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=S),a.props=t,a.state=S,a.context=c,t=y):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{a=n.stateNode,$a(u,n),c=n.memoizedProps,I=Hn(e,c),a.props=I,z=n.pendingProps,v=a.context,S=e.contextType,y=ie,typeof S=="object"&&S!==null&&(y=hu(S)),i=e.getDerivedStateFromProps,(S=typeof i=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==z||v!==y)&&cs(n,a,t,y),tn=!1,v=n.memoizedState,a.state=v,it(n,t,a,l),ct();var M=n.memoizedState;c!==z||v!==M||tn||u!==null&&u.dependencies!==null&&cl(u.dependencies)?(typeof i=="function"&&(Cr(n,e,i,t),M=n.memoizedState),(I=tn||rs(n,e,I,t,v,M,y)||u!==null&&u.dependencies!==null&&cl(u.dependencies))?(S||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,M,y),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,M,y)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===u.memoizedProps&&v===u.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===u.memoizedProps&&v===u.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=M),a.props=t,a.state=M,a.context=y,t=I):(typeof a.componentDidUpdate!="function"||c===u.memoizedProps&&v===u.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===u.memoizedProps&&v===u.memoizedState||(n.flags|=1024),t=!1)}return a=t,pe(u,n),t=(n.flags&128)!==0,a||t?(a=n.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,u!==null&&t?(n.child=Yn(n,u.child,null,l),n.child=Yn(n,null,e,l)):ru(u,n,e,l),n.memoizedState=a.state,u=n.child):u=U7(u,n,l),u}function Cs(u,n,e,t){return On(),n.flags|=256,ru(u,n,e,t),n.child}var Dr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mr(u){return{baseLanes:u,cachePool:so()}}function Ir(u,n,e){return u=u!==null?u.childLanes&~e:0,n&&(u|=ju),u}function Ts(u,n,e){var t=n.pendingProps,l=!1,a=(n.flags&128)!==0,c;if((c=a)||(c=u!==null&&u.memoizedState===null?!1:(pu.current&2)!==0),c&&(l=!0,n.flags&=-129),c=(n.flags&32)!==0,n.flags&=-33,u===null){if(C0){if(l?cn(n):on(),(u=H0)?(u=Vf(u,i7),u=u!==null&&u.data!=="&"?u:null,u!==null&&(n.memoizedState={dehydrated:u,treeContext:F7!==null?{id:A7,overflow:C7}:null,retryLane:536870912,hydrationErrors:null},e=no(u),e.return=n,n.child=e,fu=n,H0=null)):u=null,u===null)throw un(n);return Mc(u)?n.lanes=32:n.lanes=536870912,null}return a=t.children,t=t.fallback,l?(on(),l=n.mode,a=Dl({mode:"hidden",children:a},l),t=Qn(t,l,e,null),a.return=n,t.return=n,a.sibling=t,n.child=a,t=n.child,t.memoizedState=Mr(e),t.childLanes=Ir(u,c,e),n.memoizedState=Dr,mt(null,t)):(cn(n),Wr(n,a))}var i=u.memoizedState;if(i!==null){var y=i.dehydrated;if(y!==null)return y1(u,n,a,c,t,y,i,e)}return l?(on(),l=t.fallback,a=n.mode,i=u.child,y=i.sibling,t=x7(i,{mode:"hidden",children:t.children}),t.subtreeFlags=i.subtreeFlags&1206910976,y!==null?l=x7(y,l):(l=Qn(l,a,e,null),l.flags|=2),l.return=n,t.return=n,t.sibling=l,n.child=t,mt(null,t),t=n.child,l=u.child.memoizedState,l===null?l=Mr(e):(a=l.cachePool,a!==null?(i=nu._currentValue,a=a.parent!==i?{parent:i,pool:i}:a):a=so(),l={baseLanes:l.baseLanes|e,cachePool:a}),t.memoizedState=l,t.childLanes=Ir(u,c,e),n.memoizedState=Dr,mt(u.child,t)):(cn(n),e=u.child,u=e.sibling,e=x7(e,{mode:"visible",children:t.children}),e.return=n,e.sibling=null,u!==null&&(c=n.deletions,c===null?(n.deletions=[u],n.flags|=16):c.push(u)),n.child=e,n.memoizedState=null,e)}function Wr(u,n){return n=Dl({mode:"visible",children:n},u.mode),n.return=u,u.child=n}function Dl(u,n){return u=Gu(22,u,null,n),u.lanes=0,u}function Ml(u,n,e){return Yn(n,u.child,null,e),u=Wr(n,n.pendingProps.children),u.flags|=2,n.memoizedState=null,u}function y1(u,n,e,t,l,a,c,i){if(e)return n.flags&256?(cn(n),n.flags&=-257,Ml(u,n,i)):n.memoizedState!==null?(on(),n.child=u.child,n.flags|=128,null):(on(),a=l.fallback,c=n.mode,l=Dl({mode:"visible",children:l.children},c),a=Qn(a,c,i,null),a.flags|=2,l.return=n,a.return=n,l.sibling=a,n.child=l,Yn(n,u.child,null,i),l=n.child,l.memoizedState=Mr(i),l.childLanes=Ir(u,t,i),n.memoizedState=Dr,mt(null,l));if(cn(n),Mc(a)){if(t=a.nextSibling&&a.nextSibling.dataset,t)var y=t.dgst;return t=y,t!==""&&(l=Error(s(419)),l.stack="",l.digest=t,nt({value:l,source:null,stack:null})),Ml(u,n,i)}if(tu||Ln(u,n,i,!1),t=(i&u.childLanes)!==0,tu||t){if(rn.current!==null)return Ml(u,n,i);if(t=B0,t!==null&&(l=li(t,i),l!==0&&l!==c.retryLane))throw c.retryLane=l,Wn(u,l),Yu(t,u,l),_r;return Dc(a)||Vl(),Ml(u,n,i)}return Dc(a)?(n.flags|=192,n.child=u.child,null):(u=c.treeContext,H0=s7(a.nextSibling),fu=n,C0=!0,$7=null,i7=!1,u!==null&&lo(n,u),n=Wr(n,l.children),n.flags|=134221824,n)}function Ss(u,n,e){u.lanes|=n;var t=u.alternate;t!==null&&(t.lanes|=n),rl(u.return,n,e)}function _s(u){for(var n=null;u!==null;){var e=u.alternate;e!==null&&yl(e)===null&&(n=u),u=u.sibling}return n}function Il(u,n,e,t,l,a){var c=u.memoizedState;c===null?u.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:l,treeForkCount:a}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=t,c.tail=e,c.tailMode=l,c.treeForkCount=a)}function Qr(u){var n=u.child;for(u.child=null;n!==null;){var e=n.sibling;n.sibling=u.child,u.child=n,n=e}}function Or(u,n,e){var t=n.pendingProps,l=t.revealOrder,a=t.tail;t=t.children;var c=pu.current;if(n.flags&128)return ot(n,c),null;var i=(c&2)!==0;if(i?(c=c&1|2,n.flags|=128):c&=1,ot(n,c),l==="backwards"&&u!==null?(Qr(u),ru(u,n,t,e),Qr(u)):ru(u,n,t,e),t=C0?ut:0,!i&&u!==null&&(u.flags&128)!==0)u:for(u=n.child;u!==null;){if(u.tag===13)u.memoizedState!==null&&Ss(u,e,n);else if(u.tag===19)Ss(u,e,n);else if(u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break u;for(;u.sibling===null;){if(u.return===null||u.return===n)break u;u=u.return}u.sibling.return=u.return,u=u.sibling}switch(l){case"backwards":e=_s(n.child),e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null,Qr(n)),Il(n,!0,l,null,a,t);break;case"unstable_legacy-backwards":for(e=null,l=n.child,n.child=null;l!==null;){if(u=l.alternate,u!==null&&yl(u)===null){n.child=l;break}u=l.sibling,l.sibling=e,e=l,l=u}Il(n,!0,e,null,a,t);break;case"together":Il(n,!1,null,null,void 0,t);break;case"independent":n.memoizedState=null;break;default:e=_s(n.child),e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null),Il(n,!1,l,e,a,t)}return n.child}function Ns(u,n,e){var t=n.pendingProps;return nn(n,n.type,t.value),ru(u,n,t.children,e),n.child}function U7(u,n,e){if(u!==null&&(n.dependencies=u.dependencies),mn|=n.lanes,(e&n.childLanes)===0)if(u!==null){if(Ln(u,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(u!==null&&n.child!==u.child)throw Error(s(153));if(n.child!==null){for(u=n.child,e=x7(u,u.pendingProps),n.child=e,e.return=n;u.sibling!==null;)u=u.sibling,e=e.sibling=x7(u,u.pendingProps),e.return=n;e.sibling=null}return n.child}function wr(u,n){return(u.lanes&n)!==0?!0:(u=u.dependencies,!!(u!==null&&cl(u)))}function h1(u,n,e){switch(n.tag){case 3:ou(n,n.stateNode.containerInfo),nn(n,nu,u.memoizedState.cache),On();break;case 27:case 5:wu(n);break;case 4:ou(n,n.stateNode.containerInfo);break;case 10:nn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,lr(n),null;break;case 13:var t=n.memoizedState;if(t!==null){if(t.dehydrated!==null)return cn(n),n.flags|=128,null;t=Ln(u,n,e,!1);var l=n.child.childLanes;return t||(e&l)!==0?Ts(u,n,e):(cn(n),u=U7(u,n,e),u!==null?u.sibling:null)}cn(n);break;case 19:if(n.flags&128)return Or(u,n,e);if(l=(u.flags&128)!==0,t=(e&n.childLanes)!==0,t||(Ln(u,n,e,!1),t=(e&n.childLanes)!==0),l){if(t)return Or(u,n,e);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ot(n,pu.current),t)break;return null;case 22:return n.lanes=0,Es(u,n,e,n.pendingProps);case 24:nn(n,nu,u.memoizedState.cache)}return U7(u,n,e)}function Ds(u,n,e){if(u!==null)if(u.memoizedProps!==n.pendingProps)tu=!0;else{if(!wr(u,e)&&(n.flags&128)===0)return tu=!1,h1(u,n,e);tu=(u.flags&131072)!==0}else tu=!1,C0&&(n.flags&1048576)!==0&&to(n,ut,n.index);switch(n.lanes=0,n.tag){case 16:u:{var t=n.pendingProps;if(u=Pn(n.elementType),n.type=u,typeof u=="function")Ya(u)?(t=Hn(u,t),n.tag=1,n=As(null,n,u,t,e)):(n.tag=0,n=Nr(null,n,u,t,e));else{if(u!=null){var l=u.$$typeof;if(l===O){n.tag=11,n=gs(null,n,u,t,e);break u}else if(l===X){n.tag=14,n=ys(null,n,u,t,e);break u}else if(l===Y){n.tag=10,n.type=u,n=Ns(null,n,e);break u}}throw n=r0(u)||u,Error(s(306,n,""))}}return n;case 0:return Nr(u,n,n.type,n.pendingProps,e);case 1:return t=n.type,l=Hn(t,n.pendingProps),As(u,n,t,l,e);case 3:u:{if(ou(n,n.stateNode.containerInfo),u===null)throw Error(s(387));t=n.pendingProps;var a=n.memoizedState;l=a.element,$a(u,n),it(n,t,null,e);var c=n.memoizedState;if(t=c.cache,nn(n,nu,t),t!==a.cache&&Xa(n,[nu],e,!0),ct(),t=c.element,a.isDehydrated)if(a={element:t,isDehydrated:!1,cache:c.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=Cs(u,n,t,e);break u}else if(t!==l){l=a7(Error(s(424)),n),nt(l),n=Cs(u,n,t,e);break u}else for(u=n.stateNode.containerInfo,u.nodeType===9?u=u.body:u=u.nodeName==="HTML"?u.ownerDocument.body:u,H0=s7(u.firstChild),fu=n,C0=!0,$7=null,i7=!0,e=Eo(n,null,t,e),n.child=e;e;)e.flags=e.flags&-3|134221824,e=e.sibling;else{if(On(),t===l){n=U7(u,n,e);break u}ru(u,n,t,e)}n=n.child}return n;case 26:return pe(u,n),u===null?(e=$f(n.type,null,n.pendingProps,null))?n.memoizedState=e:C0||(n.stateNode=Of(n.type,n.pendingProps,Z0.current,n)):n.memoizedState=$f(n.type,u.memoizedProps,n.pendingProps,u.memoizedState),null;case 27:return wu(n),u===null&&C0&&(t=n.stateNode=jf(n.type,n.pendingProps,Z0.current),fu=n,i7=!0,l=H0,En(n.type)?(Ic=l,H0=s7(t.firstChild)):H0=l),ru(u,n,n.pendingProps.children,e),pe(u,n),u===null&&(n.flags|=4194304),n.child;case 5:return u===null&&C0&&((l=t=H0)&&(t=sm(t,n.type,n.pendingProps,i7),t!==null?(n.stateNode=t,fu=n,H0=s7(t.firstChild),i7=!1,l=!0):l=!1),l||un(n)),wu(n),l=n.type,a=n.pendingProps,c=u!==null?u.memoizedProps:null,t=a.children,vc(l,a)?t=null:c!==null&&vc(l,c)&&(n.flags|=32),n.memoizedState!==null&&(l=cr(u,n,a1,null,null,e),Ge._currentValue=l),pe(u,n),ru(u,n,t,e),n.child;case 6:return u===null&&C0&&((u=e=H0)&&(e=fm(e,n.pendingProps,i7),e!==null?(n.stateNode=e,fu=n,H0=null,u=!0):u=!1),u||un(n)),null;case 13:return Ts(u,n,e);case 4:return ou(n,n.stateNode.containerInfo),t=n.pendingProps,u===null?n.child=Yn(n,null,t,e):ru(u,n,t,e),n.child;case 11:return gs(u,n,n.type,n.pendingProps,e);case 7:return t=n.pendingProps,pe(u,n),ru(u,n,t,e),n.child;case 8:return ru(u,n,n.pendingProps.children,e),n.child;case 12:return ru(u,n,n.pendingProps.children,e),n.child;case 10:return Ns(u,n,e);case 9:return l=n.type._context,t=n.pendingProps.children,zn(n),l=hu(l),t=t(l),n.flags|=1,ru(u,n,t,e),n.child;case 14:return ys(u,n,n.type,n.pendingProps,e);case 15:return hs(u,n,n.type,n.pendingProps,e);case 19:return Or(u,n,e);case 31:return g1(u,n,e);case 22:return Es(u,n,e,n.pendingProps);case 24:return zn(n),t=hu(nu),u===null?(l=ka(),l===null&&(l=B0,a=Ka(),l.pooledCache=a,a.refCount++,a!==null&&(l.pooledCacheLanes|=e),l=a),n.memoizedState={parent:t,cache:l},Fa(n),nn(n,nu,l)):((u.lanes&e)!==0&&($a(u,n),it(n,null,null,e),ct()),l=u.memoizedState,a=n.memoizedState,l.parent!==t?(l={parent:t,cache:t},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),nn(n,nu,t)):(t=a.cache,nn(n,nu,t),t!==l.cache&&Xa(n,[nu],e,!0))),ru(u,n,n.pendingProps.children,e),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),t=n.pendingProps,t.name!=null&&t.name!=="auto"?n.flags|=u===null?18882560:18874368:C0&&ll(n),u!==null&&u.memoizedProps.name!==t.name?n.flags|=4194816:pe(u,n),ru(u,n,t.children,e),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function q7(u){u.flags|=4}function Lr(u,n,e,t,l){var a;if((a=(u.mode&32)!==0)&&(a=e===null?t2(n,t):t2(n,t)&&(t.src!==e.src||t.srcSet!==e.srcSet)),a){if(u.flags|=16777216,(l&335544128)===l)if(u.stateNode.complete)u.flags|=8192;else if(of())u.flags|=8192;else throw Rn=fl,Ja}else u.flags&=-16777217}function Ms(u,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)u.flags&=-16777217;else if(u.flags|=16777216,!l2(n))if(of())u.flags|=8192;else throw Rn=fl,Ja}function Wl(u,n){n!==null&&(u.flags|=4),u.flags&16384&&(n=u.tag!==22?ni():536870912,u.lanes|=n,Te|=n)}function gt(u,n){if(!C0)switch(u.tailMode){case"visible":break;case"collapsed":for(var e=u.tail,t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n||u.tail===null?u.tail=null:u.tail.sibling=null:t.sibling=null;break;default:for(n=u.tail,e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?u.tail=null:e.sibling=null}}function U0(u){var n=u.alternate!==null&&u.alternate.child===u.child,e=0,t=0;if(n)for(var l=u.child;l!==null;)e|=l.lanes|l.childLanes,t|=l.subtreeFlags&1206910976,t|=l.flags&1206910976,l.return=u,l=l.sibling;else for(l=u.child;l!==null;)e|=l.lanes|l.childLanes,t|=l.subtreeFlags,t|=l.flags,l.return=u,l=l.sibling;return u.subtreeFlags|=t,u.childLanes=e,n}function E1(u,n,e){var t=n.pendingProps;switch(Ua(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U0(n),null;case 1:return U0(n),null;case 3:return e=n.stateNode,t=null,u!==null&&(t=u.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Y7(nu),au(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(u===null||u.child===null)&&(fe(n)?q7(n):u===null||u.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Za())),U0(n),null;case 26:var l=n.type,a=n.memoizedState;return u===null?(q7(n),a!==null?(U0(n),Ms(n,a)):(U0(n),Lr(n,l,null,t,e))):a?a!==u.memoizedState?(q7(n),U0(n),Ms(n,a)):(U0(n),n.flags&=-16777217):(u=u.memoizedProps,u!==t&&q7(n),U0(n),Lr(n,l,u,t,e)),null;case 27:if(_u(n),e=Z0.current,l=n.type,u!==null&&n.stateNode!=null)u.memoizedProps!==t&&q7(n);else{if(!t){if(n.stateNode===null)throw Error(s(166));return U0(n),n.subtreeFlags&=-33554433,null}u=K0.current,fe(n)?ao(n):(u=jf(l,t,e),n.stateNode=u,q7(n))}return U0(n),n.subtreeFlags&=-33554433,null;case 5:if(_u(n),l=n.type,u!==null&&n.stateNode!=null)u.memoizedProps!==t&&q7(n);else{if(!t){if(n.stateNode===null)throw Error(s(166));return U0(n),n.subtreeFlags&=-33554433,null}if(a=K0.current,fe(n))ao(n);else{var c=_t(Z0.current);switch(a){case 1:a=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:a=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":a=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":a=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":a=c.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof t.is=="string"?c.createElement("select",{is:t.is}):c.createElement("select"),t.multiple?a.multiple=!0:t.size&&(a.size=t.size);break;default:a=typeof t.is=="string"?c.createElement(l,{is:t.is}):c.createElement(l)}}a[yu]=n,a[zu]=t;u:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)a.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break u;for(;c.sibling===null;){if(c.return===null||c.return===n)break u;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=a;u:switch(vu(a,l,t),l){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break u;case"img":t=!0;break u;default:t=!1}t&&q7(n)}}return U0(n),n.subtreeFlags&=-33554433,Lr(n,n.type,u===null?null:u.memoizedProps,n.pendingProps,e),null;case 6:if(u&&n.stateNode!=null)u.memoizedProps!==t&&q7(n);else{if(typeof t!="string"&&n.stateNode===null)throw Error(s(166));if(u=Z0.current,fe(n)){if(u=n.stateNode,e=n.memoizedProps,t=null,l=fu,l!==null)switch(l.tag){case 27:case 5:t=l.memoizedProps}u[yu]=n,u=!!(u.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||Mf(u.nodeValue,e)),u||un(n,!0)}else u=_t(u).createTextNode(t),u[yu]=n,n.stateNode=u}return U0(n),null;case 31:if(e=n.memoizedState,u===null||u.memoizedState!==null){if(t=fe(n),e!==null){if(u===null){if(!t)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(557));u[yu]=n}else On(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;U0(n),u=!1}else e=Za(),u!==null&&u.memoizedState!==null&&(u.memoizedState.hydrationErrors=e),u=!0;if(!u)return n.flags&256?(Vu(n),n):(Vu(n),null);if((n.flags&128)!==0)throw Error(s(558))}return U0(n),null;case 13:if(t=n.memoizedState,u===null||u.memoizedState!==null&&u.memoizedState.dehydrated!==null){if(l=fe(n),t!==null&&t.dehydrated!==null){if(u===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[yu]=n}else On(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;U0(n),l=!1}else l=Za(),u!==null&&u.memoizedState!==null&&(u.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Vu(n),n):(Vu(n),null)}return Vu(n),(n.flags&128)!==0?(n.lanes=e,n):(e=t!==null,u=u!==null&&u.memoizedState!==null,e&&(t=n.child,l=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(l=t.alternate.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048)),e!==u&&e&&(n.child.flags|=8192),Wl(n,n.updateQueue),U0(n),null);case 4:return au(),u===null&&yc(n.stateNode.containerInfo),n.flags|=67108864,U0(n),null;case 10:return Y7(n.type),U0(n),null;case 19:if(ar(n),t=n.memoizedState,t===null)return U0(n),null;if(l=(n.flags&128)!==0,a=t.rendering,a===null)if(l)gt(t,!1);else{if(J0!==0||u!==null&&(u.flags&128)!==0)for(u=n.child;u!==null;){if(a=yl(u),a!==null){for(n.flags|=128,gt(t,!1),u=a.updateQueue,n.updateQueue=u,Wl(n,u),n.subtreeFlags=0,u=e,e=n.child;e!==null;)uo(e,u),e=e.sibling;return ot(n,pu.current&1|2),C0&&P7(n,t.treeForkCount),n.child}u=u.sibling}t.tail!==null&&Bu()>Hl&&(n.flags|=128,l=!0,gt(t,!1),n.lanes=4194304)}else{if(!l)if(u=yl(a),u!==null){if(n.flags|=128,l=!0,u=u.updateQueue,n.updateQueue=u,Wl(n,u),gt(t,!0),t.tail===null&&t.tailMode!=="collapsed"&&t.tailMode!=="visible"&&!a.alternate&&!C0)return U0(n),null}else 2*Bu()-t.renderingStartTime>Hl&&e!==536870912&&(n.flags|=128,l=!0,gt(t,!1),n.lanes=4194304);t.isBackwards?(a.sibling=n.child,n.child=a):(u=t.last,u!==null?u.sibling=a:n.child=a,t.last=a)}if(t.tail!==null){u=t.tail;u:{for(e=u;e!==null;){if(e.alternate!==null){e=!1;break u}e=e.sibling}e=!0}return t.rendering=u,t.tail=u.sibling,t.renderingStartTime=Bu(),u.sibling=null,a=pu.current,a=l?a&1|2:a&1,t.tailMode==="visible"||t.tailMode==="collapsed"||!e||C0?ot(n,a):(e=a,g0(Eu,n),g0(pu,e),Su===null&&(Su=n)),C0&&P7(n,t.treeForkCount),u}return U0(n),null;case 22:case 23:return Vu(n),tr(),t=n.memoizedState!==null,u!==null?u.memoizedState!==null!==t&&(n.flags|=8192):t&&(n.flags|=8192),t?(e&536870912)!==0&&(n.flags&128)===0&&(U0(n),n.subtreeFlags&6&&(n.flags|=8192)):U0(n),e=n.updateQueue,e!==null&&Wl(n,e.retryQueue),e=null,u!==null&&u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(e=u.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(n.flags|=2048),u!==null&&w0(xn),null;case 24:return e=null,u!==null&&(e=u.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),Y7(nu),U0(n),null;case 25:return null;case 30:return n.flags|=33554432,U0(n),null}throw Error(s(156,n.tag))}function p1(u,n){switch(Ua(n),n.tag){case 1:return u=n.flags,u&65536?(n.flags=u&-65537|128,n):null;case 3:return Y7(nu),au(),u=n.flags,(u&65536)!==0&&(u&128)===0?(n.flags=u&-65537|128,n):null;case 26:case 27:case 5:return _u(n),null;case 31:if(n.memoizedState!==null){if(Vu(n),n.alternate===null)throw Error(s(340));On()}return u=n.flags,u&65536?(n.flags=u&-65537|128,n):null;case 13:if(Vu(n),u=n.memoizedState,u!==null&&u.dehydrated!==null){if(n.alternate===null)throw Error(s(340));On()}return u=n.flags,u&65536?(n.flags=u&-65537|128,n):null;case 19:return ar(n),u=n.flags,u&65536?(n.flags=u&-65537|128,u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null),n.flags|=4,n):null;case 4:return au(),null;case 10:return Y7(n.type),null;case 22:case 23:return Vu(n),tr(),u!==null&&w0(xn),u=n.flags,u&65536?(n.flags=u&-65537|128,n):null;case 24:return Y7(nu),null;case 25:return null;default:return null}}function Is(u,n){switch(Ua(n),n.tag){case 3:Y7(nu),au();break;case 26:case 27:case 5:_u(n);break;case 4:au();break;case 31:n.memoizedState!==null&&Vu(n);break;case 13:Vu(n);break;case 19:ar(n);break;case 10:Y7(n.type);break;case 22:case 23:Vu(n),tr(),u!==null&&w0(xn);break;case 24:Y7(nu)}}function yt(u,n){try{var e=n.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var l=t.next;e=l;do{if((e.tag&u)===u){t=void 0;var a=e.create,c=e.inst;t=a(),c.destroy=t}e=e.next}while(e!==l)}}catch(i){G0(n,n.return,i)}}function sn(u,n,e){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var a=l.next;t=a;do{if((t.tag&u)===u){var c=t.inst,i=c.destroy;if(i!==void 0){c.destroy=void 0,l=n;var y=e,S=i;try{S()}catch(I){G0(l,y,I)}}}t=t.next}while(t!==a)}}catch(I){G0(n,n.return,I)}}function Ws(u){var n=u.updateQueue;if(n!==null){var e=u.stateNode;try{bo(n,e)}catch(t){G0(u,u.return,t)}}}function Qs(u,n,e){e.props=Hn(u.type,u.memoizedProps),e.state=u.memoizedState;try{e.componentWillUnmount()}catch(t){G0(u,n,t)}}function T7(u,n){try{var e=u.ref;if(e!==null){switch(u.tag){case 26:case 27:case 5:var t=u.stateNode;break;case 30:var l=u.stateNode,a=z7(u.memoizedProps,l);(l.ref===null||l.ref.name!==a)&&(l.ref=Rf(a)),t=l.ref;break;case 7:if(u.stateNode===null){var c=new Ju(u);g(u.child,!1,im,c,void 0,void 0),u.stateNode=c}t=u.stateNode;break;default:t=u.stateNode}typeof e=="function"?u.refCleanup=e(t):e.current=t}}catch(i){G0(u,n,i)}}function bu(u,n){var e=u.ref,t=u.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(l){G0(u,n,l)}finally{u.refCleanup=null,u=u.alternate,u!=null&&(u.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){G0(u,n,l)}else e.current=null}function Ql(u,n){if((u.tag===5||u.tag===27||u.tag===6)&&u.alternate===null&&n!==null)for(var e=0;e<n.length;e++)Zf(u.stateNode,n[e])}function Os(u){for(var n=u.return;n!==null&&(Gr(n)&&Zf(u.stateNode,n.stateNode),!zr(n));)n=n.return}function ht(u){for(var n=u.return;n!==null&&(Gr(n)&&om(u.stateNode,n.stateNode),!zr(n));)n=n.return}function zr(u){return u.tag===5||u.tag===3||u.tag===27}function Gr(u){return u&&u.tag===7&&u.stateNode!==null}function xr(u){var n=u.type,e=u.memoizedProps,t=u.stateNode;try{u:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break u;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(l){G0(u,u.return,l)}}function Pr(u,n,e){try{var t=u.stateNode;q1(t,u.type,e,n),t[zu]=n}catch(l){G0(u,u.return,l)}}function ws(u){return u.tag===5||u.tag===3||u.tag===26||u.tag===27&&En(u.type)||u.tag===4}function Rr(u){u:for(;;){for(;u.sibling===null;){if(u.return===null||ws(u.return))return null;u=u.return}for(u.sibling.return=u.return,u=u.sibling;u.tag!==5&&u.tag!==6&&u.tag!==18;){if(u.tag===27&&En(u.type)||u.flags&2||u.child===null||u.tag===4)continue u;u.child.return=u,u=u.child}if(!(u.flags&2))return u.stateNode}}function Yr(u,n,e,t){var l=u.tag;if(l===5||l===6)l=u.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(l),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=v7)),Ql(u,t),W0=!0;else if(l!==4&&(l===27&&(Ql(u,t),t=null,En(u.type)&&(e=u.stateNode,n=null)),u=u.child,u!==null))for(Yr(u,n,e,t),u=u.sibling;u!==null;)Yr(u,n,e,t),u=u.sibling}function Ol(u,n,e,t){var l=u.tag;if(l===5||l===6)l=u.stateNode,n?e.insertBefore(l,n):e.appendChild(l),Ql(u,t),W0=!0;else if(l!==4&&(l===27&&(Ql(u,t),t=null,En(u.type)&&(e=u.stateNode)),u=u.child,u!==null))for(Ol(u,n,e,t),u=u.sibling;u!==null;)Ol(u,n,e,t),u=u.sibling}function Ls(u){var n=u.stateNode,e=u.memoizedProps;try{for(var t=u.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);vu(n,t,e),n[yu]=u,n[zu]=e}catch(a){G0(u,u.return,a)}}var wl=!1,Xu=null;function zs(u){(u.tag===30||(u.subtreeFlags&33554432)!==0)&&(wl=!0)}var S7=null;function Gs(){var u=S7;return S7=null,u}var xu=0;function be(u,n,e,t,l){return xu=0,xs(u.child,n,e,t,l)}function xs(u,n,e,t,l){for(var a=!1;u!==null;){if(u.tag===5){var c=u.stateNode;if(t!==null){var i=Tc(c);t.push(i),i.view&&(a=!0)}else a||Tc(c).view&&(a=!0);wl=!0,xf(c,xu===0?n:n+"_"+xu,e),xu++}else(u.tag!==22||u.memoizedState===null)&&(u.tag===30&&l||xs(u.child,n,e,t,l)&&(a=!0));u=u.sibling}return a}function _7(u,n){for(;u!==null;)u.tag===5?Pf(u.stateNode,u.memoizedProps):(u.tag!==22||u.memoizedState===null)&&(u.tag===30&&n||_7(u.child,n)),u=u.sibling}function Ll(u){if((u.subtreeFlags&18874368)!==0)for(u=u.child;u!==null;){if((u.tag!==22||u.memoizedState===null)&&(Ll(u),u.tag===30&&(u.flags&18874368)!==0&&u.stateNode.paired)){var n=u.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var e=n.name;n=G7(n.default,n.share),n!=="none"&&(be(u,e,n,null,!1)||_7(u.child,!1))}u=u.sibling}}function Br(u,n){if(u.tag===30){var e=u.stateNode,t=u.memoizedProps,l=z7(t,e),a=G7(t.default,e.paired?t.share:t.enter);a!=="none"?be(u,l,a,null,!1)?(Ll(u),e.paired||n||De(u,t.onEnter)):_7(u.child,!1):Ll(u)}else if((u.subtreeFlags&33554432)!==0)for(u=u.child;u!==null;)Br(u,n),u=u.sibling;else Ll(u)}function Hr(u){if(Xu!==null&&Xu.size!==0){var n=Xu;if((u.subtreeFlags&18874368)!==0)for(u=u.child;u!==null;){if(u.tag!==22||u.memoizedState===null){if(u.tag===30&&(u.flags&18874368)!==0){var e=u.memoizedProps,t=e.name;if(t!=null&&t!=="auto"){var l=n.get(t);if(l!==void 0){var a=G7(e.default,e.share);if(a!=="none"&&(be(u,t,a,null,!1)?(a=u.stateNode,l.paired=a,a.paired=l,De(u,e.onShare)):_7(u.child,!1)),n.delete(t),n.size===0)break}}}Hr(u)}u=u.sibling}}}function Ur(u){if(u.tag===30){var n=u.memoizedProps,e=z7(n,u.stateNode),t=Xu!==null?Xu.get(e):void 0,l=G7(n.default,t!==void 0?n.share:n.exit);l!=="none"&&(be(u,e,l,null,!1)?t!==void 0?(l=u.stateNode,t.paired=l,l.paired=t,Xu.delete(e),De(u,n.onShare)):De(u,n.onExit):_7(u.child,!1)),Xu!==null&&Hr(u)}else if((u.subtreeFlags&33554432)!==0)for(u=u.child;u!==null;)Ur(u),u=u.sibling;else Xu!==null&&Hr(u)}function Ps(u){for(u=u.child;u!==null;){if(u.tag===30){var n=u.memoizedProps,e=z7(n,u.stateNode);n=G7(n.default,n.update),u.flags&=-5,n!=="none"&&be(u,e,n,u.memoizedState=[],!1)}else(u.subtreeFlags&33554432)!==0&&Ps(u);u=u.sibling}}function qr(u){if((u.subtreeFlags&18874368)!==0)for(u=u.child;u!==null;){if(u.tag!==22||u.memoizedState===null){if(u.tag===30&&(u.flags&18874368)!==0){var n=u.stateNode;n.paired!==null&&(n.paired=null,_7(u.child,!1))}qr(u)}u=u.sibling}}function zl(u){if(u.tag===30)u.stateNode.paired=null,_7(u.child,!1),qr(u);else if((u.subtreeFlags&33554432)!==0)for(u=u.child;u!==null;)zl(u),u=u.sibling;else qr(u)}function Rs(u){for(u=u.child;u!==null;)u.tag===30?_7(u.child,!1):(u.subtreeFlags&33554432)!==0&&Rs(u),u=u.sibling}function Zr(u,n,e,t,l,a,c){for(var i=!1;n!==null;){if(n.tag===5){var y=n.stateNode;if(a!==null&&xu<a.length){var S=a[xu],I=Tc(y);(S.view||I.view)&&(i=!0);var z;if(z=(u.flags&4)===0)if(I.clip)z=!0;else{z=S.rect;var v=I.rect;z=z.y!==v.y||z.x!==v.x||z.height!==v.height||z.width!==v.width}z&&(u.flags|=4),I.abs?I=!S.abs:(S=S.rect,I=I.rect,I=S.height!==I.height||S.width!==I.width),I&&(u.flags|=32)}else u.flags|=32;(u.flags&4)!==0&&xf(y,xu===0?e:e+"_"+xu,l),i&&(u.flags&4)!==0||(S7===null&&(S7=[]),S7.push(y,xu===0?t:t+"_"+xu,n.memoizedProps)),xu++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&c?u.flags|=n.flags&32:Zr(u,n.child,e,t,l,a,c)&&(i=!0));n=n.sibling}return i}function Ys(u,n){for(u=u.child;u!==null;){if(u.tag===30){var e=u.memoizedProps,t=u.stateNode,l=z7(e,t),a=G7(e.default,e.update),c;c=u.memoizedState,u.memoizedState=null,t=u;var i=u.child;xu=0,l=Zr(t,i,l,l,a,c,!1),(u.flags&4)!==0&&l&&De(u,e.onUpdate)}else(u.subtreeFlags&33554432)!==0&&Ys(u);u=u.sibling}}var du=!1,L0=!1,N7=!1,Vr=!1,Bs=typeof WeakSet=="function"?WeakSet:Set,mu=null,D7=!1,Et=!1,Gl=!1,Xr=!1;function b1(u,n,e){if(u=u.containerInfo,pc=xe,u=qi(u),wa(u)){if("selectionStart"in u)var t={start:u.selectionStart,end:u.selectionEnd};else u:{t=(t=u.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var a=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break u}var i=0,y=-1,S=-1,I=0,z=0,v=u,M=null;n:for(;;){for(var Z;v!==t||a!==0&&v.nodeType!==3||(y=i+a),v!==c||l!==0&&v.nodeType!==3||(S=i+l),v.nodeType===3&&(i+=v.nodeValue.length),(Z=v.firstChild)!==null;)M=v,v=Z;for(;;){if(v===u)break n;if(M===t&&++I===a&&(y=i),M===c&&++z===l&&(S=i),(Z=v.nextSibling)!==null)break;v=M,M=v.parentNode}v=Z}t=y===-1||S===-1?null:{start:y,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(bc={focusedElem:u,selectionRange:t},xe=!1,e=(e&335544064)===e,mu=n,n=e?9270:1024;mu!==null;){if(u=mu,e&&(t=u.deletions,t!==null))for(a=0;a<t.length;a++)e&&Ur(t[a]);if(u.alternate===null&&(u.flags&2)!==0)e&&zs(u),xl(e);else{if(u.tag===22){if(t=u.alternate,u.memoizedState!==null){t!==null&&t.memoizedState===null&&e&&Ur(t),xl(e);continue}else if(t!==null&&t.memoizedState!==null){e&&zs(u),xl(e);continue}}t=u.child,(u.subtreeFlags&n)!==0&&t!==null?(t.return=u,mu=t):(e&&Ps(u),xl(e))}}Xu=null}function xl(u){for(;mu!==null;){var n=mu,e=u,t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&t!==null){e=void 0,l=t.memoizedProps,t=t.memoizedState;var a=n.stateNode;try{var c=Hn(n.type,l);e=a.getSnapshotBeforeUpdate(c,t),a.__reactInternalSnapshotBeforeUpdate=e}catch(i){G0(n,n.return,i)}}break;case 3:if((l&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)Nc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:e&&t!==null&&(e=z7(t.memoizedProps,t.stateNode),l=n.memoizedProps,l=G7(l.default,l.update),l!=="none"&&be(t,e,l,t.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,mu=t;break}mu=n.return}}function Hs(u,n,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:M7(u,e),t&4&&yt(5,e);break;case 1:if(M7(u,e),t&4)if(u=e.stateNode,n===null)try{u.componentDidMount()}catch(c){G0(e,e.return,c)}else{var l=Hn(e.type,n.memoizedProps);n=n.memoizedState;try{u.componentDidUpdate(l,n,u.__reactInternalSnapshotBeforeUpdate)}catch(c){G0(e,e.return,c)}}t&64&&Ws(e),t&512&&T7(e,e.return);break;case 3:if(M7(u,e),t&64&&(u=e.updateQueue,u!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{bo(u,n)}catch(c){G0(e,e.return,c)}}break;case 27:n===null&&t&4&&Ls(e);case 26:case 5:M7(u,e),n===null&&t&4&&xr(e),t&512&&T7(e,e.return);break;case 12:M7(u,e);break;case 31:M7(u,e),t&4&&Vs(u,e);break;case 13:M7(u,e),t&4&&Xs(u,e),t&64&&(u=e.memoizedState,u!==null&&(u=u.dehydrated,u!==null&&(e=Q1.bind(null,e),dm(u,e))));break;case 22:if(t=e.memoizedState!==null||du,!t){var a=n!==null&&n.memoizedState!==null||L0;n=du,l=L0,du=t,(L0=a)&&!l?(t=2,(e.subtreeFlags&8772)!==0&&(t|=1),h7(u,e,t)):M7(u,e),du=n,L0=l}break;case 30:M7(u,e),t&512&&T7(e,e.return);break;case 7:t&512&&T7(e,e.return);default:M7(u,e)}}function Kr(u,n){for(u=u.child;u!==null;)Us(u,n),u=u.sibling}function Us(u,n){switch(u.tag){case 5:case 26:try{var e=u.stateNode;if(n){var t=e.style;typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"}else{var l=u.stateNode,a=u.memoizedProps.style,c=a!=null&&a.hasOwnProperty("display")?a.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(y){G0(u,u.return,y)}jr(u,n);break;case 6:try{u.stateNode.nodeValue=n?"":u.memoizedProps,W0=!0}catch(y){G0(u,u.return,y)}break;case 18:try{var i=u.stateNode;n?Gf(i,!0):Gf(u.stateNode,!1)}catch(y){G0(u,u.return,y)}break;case 22:case 23:u.memoizedState===null&&Kr(u,n);break;default:Kr(u,n)}}function jr(u,n){if(u.subtreeFlags&67108864)for(u=u.child;u!==null;){u:{var e=u,t=n;switch(e.tag){case 4:Us(e,t);break u;case 22:e.memoizedState===null&&jr(e,t);break u;default:jr(e,t)}}u=u.sibling}}function qs(u){var n=u.alternate;n!==null&&(u.alternate=null,qs(n)),u.child=null,u.deletions=null,u.sibling=null,u.tag===5&&(n=u.stateNode,n!==null&&Ht(n)),u.stateNode=null,u.return=null,u.dependencies=null,u.memoizedProps=null,u.memoizedState=null,u.pendingProps=null,u.stateNode=null,u.updateQueue=null}var V0=null,Pu=!1;function g7(u,n,e){for(e=e.child;e!==null;)Zs(u,n,e),e=e.sibling}function Zs(u,n,e){if(Hu&&typeof Hu.onCommitFiberUnmount=="function")try{Hu.onCommitFiberUnmount(Ye,e)}catch{}switch(e.tag){case 26:L0||bu(e,n),g7(u,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&!L0&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:L0||bu(e,n),ht(e);var t=V0,l=Pu;En(e.type)&&(V0=e.stateNode,Pu=!1),g7(u,n,e),kf(e.stateNode,e.type,e.memoizedProps),V0=t,Pu=l;break;case 5:L0||bu(e,n),ht(e);case 6:if(e.tag===6&&ht(e),t=V0,l=Pu,V0=null,g7(u,n,e),V0=t,Pu=l,V0!==null)if(Pu)try{(V0.nodeType===9?V0.body:V0.nodeName==="HTML"?V0.ownerDocument.body:V0).removeChild(e.stateNode),W0=!0}catch(a){G0(e,n,a)}else try{V0.removeChild(e.stateNode),W0=!0}catch(a){G0(e,n,a)}break;case 18:V0!==null&&(Pu?(u=V0,zf(u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,e.stateNode),Pe(u)):zf(V0,e.stateNode));break;case 4:t=V0,l=Pu,V0=e.stateNode.containerInfo,Pu=!0,g7(u,n,e),V0=t,Pu=l;break;case 0:case 11:case 14:case 15:sn(2,e,n),L0||sn(4,e,n),g7(u,n,e);break;case 1:L0||(bu(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function"&&Qs(e,n,t)),g7(u,n,e);break;case 21:g7(u,n,e);break;case 22:L0=(t=L0)||e.memoizedState!==null,g7(u,n,e),L0=t;break;case 30:bu(e,n),g7(u,n,e);break;case 7:L0||bu(e,n),g7(u,n,e);break;default:g7(u,n,e)}}function Vs(u,n){if(n.memoizedState===null&&(u=n.alternate,u!==null&&(u=u.memoizedState,u!==null))){u=u.dehydrated;try{Pe(u)}catch(e){G0(n,n.return,e)}}}function Xs(u,n){if(n.memoizedState===null&&(u=n.alternate,u!==null&&(u=u.memoizedState,u!==null&&(u=u.dehydrated,u!==null))))try{Pe(u)}catch(e){G0(n,n.return,e)}}function v1(u){switch(u.tag){case 31:case 13:case 19:var n=u.stateNode;return n===null&&(n=u.stateNode=new Bs),n;case 22:return u=u.stateNode,n=u._retryCache,n===null&&(n=u._retryCache=new Bs),n;default:throw Error(s(435,u.tag))}}function Pl(u,n){var e=v1(u);n.forEach(function(t){if(!e.has(t)){e.add(t);var l=O1.bind(null,u,t);t.then(l,l)}})}function Wu(u,n,e){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var a=t[l],c=u,i=n,y=i;u:for(;y!==null;){switch(y.tag){case 27:if(En(y.type)){V0=y.stateNode,Pu=!1;break u}break;case 5:V0=y.stateNode,Pu=!1;break u;case 3:case 4:V0=y.stateNode.containerInfo,Pu=!0;break u}y=y.return}if(V0===null)throw Error(s(160));Zs(c,i,a),V0=null,Pu=!1,c=a.alternate,c!==null&&(c.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ks(n,u,e),n=n.sibling}var y7=null;function Ks(u,n,e){var t=u.alternate,l=u.flags;switch(u.tag){case 0:case 11:case 14:case 15:if(l&4&&(t=u.updateQueue,t=t!==null?t.events:null,t!==null))for(var a=0;a<t.length;a++){var c=t[a];c.ref.impl=c.nextImpl}Wu(n,u,e),Qu(u),l&4&&(sn(3,u,u.return),yt(3,u),sn(5,u,u.return));break;case 1:Wu(n,u,e),Qu(u),l&512&&(L0||t===null||bu(t,t.return)),l&64&&du&&(u=u.updateQueue,u!==null&&(n=u.callbacks,n!==null&&(e=u.shared.hiddenCallbacks,u.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:if(a=y7,Wu(n,u,e),Qu(u),l&512&&(L0||t===null||bu(t,t.return)),l&4)if(l=t!==null?t.memoizedState:null,e=u.memoizedState,t===null)if(e===null)if(u.stateNode===null)if(du)u.stateNode=Of(u.type,u.memoizedProps,n.containerInfo,u);else{u:{n=u.type,e=u.memoizedProps,l=a.ownerDocument||a;n:switch(n){case"title":t=l.getElementsByTagName("title")[0],(!t||t[Ue]||t[yu]||t.namespaceURI==="http://www.w3.org/2000/svg"||t.hasAttribute("itemprop"))&&(t=l.createElement(n),l.head.insertBefore(t,l.querySelector("head > title"))),vu(t,n,e),t[yu]=u,su(t),n=t;break u;case"link":if(a=e2("link","href",l).get(n+(e.href||""))){for(c=0;c<a.length;c++)if(t=a[c],t.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&t.getAttribute("rel")===(e.rel==null?null:e.rel)&&t.getAttribute("title")===(e.title==null?null:e.title)&&t.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){a.splice(c,1);break n}}t=l.createElement(n),vu(t,n,e),l.head.appendChild(t);break;case"meta":if(a=e2("meta","content",l).get(n+(e.content||""))){for(c=0;c<a.length;c++)if(t=a[c],t.getAttribute("content")===(e.content==null?null:""+e.content)&&t.getAttribute("name")===(e.name==null?null:e.name)&&t.getAttribute("property")===(e.property==null?null:e.property)&&t.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&t.getAttribute("charset")===(e.charSet==null?null:e.charSet)){a.splice(c,1);break n}}t=l.createElement(n),vu(t,n,e),l.head.appendChild(t);break;default:throw Error(s(468,n))}t[yu]=u,su(t),n=t}u.stateNode=n}else du||wc(a,u.type,u.stateNode);else u.stateNode=n2(a,e,u.memoizedProps);else l!==e?(l===null?(n=t.stateNode,n===null||L0||n.parentNode.removeChild(n)):l.count--,e===null?du||wc(a,u.type,u.stateNode):n2(a,e,u.memoizedProps)):e===null&&u.stateNode!==null&&Pr(u,u.memoizedProps,t.memoizedProps);break;case 27:Wu(n,u,e),Qu(u),l&512&&(L0||t===null||bu(t,t.return)),t!==null&&l&4&&Pr(u,u.memoizedProps,t.memoizedProps);break;case 5:if(a=N7,N7=!1,Wu(n,u,e),N7=a,Qu(u),l&512&&(L0||t===null||bu(t,t.return)),u.flags&32){n=u.stateNode;try{ne(n,""),W0=!0}catch(I){G0(u,u.return,I)}}l&4&&u.stateNode!=null&&(n=u.memoizedProps,Pr(u,n,t!==null?t.memoizedProps:n)),l&1024&&(Vr=!0);break;case 6:if(Wu(n,u,e),Qu(u),l&4){if(u.stateNode===null)throw Error(s(162));n=u.memoizedProps,e=u.stateNode;try{e.nodeValue=n,W0=!0}catch(I){G0(u,u.return,I)}}break;case 3:if(W0=!1,$l=null,a=y7,y7=Nt(n.containerInfo),Wu(n,u,e),y7=a,Qu(u),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Pe(n.containerInfo)}catch(I){G0(u,u.return,I)}Vr&&(Vr=!1,js(u)),W0=!1;break;case 4:l=N7,N7=du,t=gi(),a=y7,y7=Nt(u.stateNode.containerInfo),Wu(n,u,e),Qu(u),y7=a,W0&&Et&&(Gl=!0),W0=t,N7=l;break;case 12:Wu(n,u,e),Qu(u);break;case 31:Wu(n,u,e),Qu(u),l&4&&(n=u.updateQueue,n!==null&&(u.updateQueue=null,Pl(u,n)));break;case 13:Wu(n,u,e),Qu(u),u.child.flags&8192&&u.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Bl=Bu()),l&4&&(n=u.updateQueue,n!==null&&(u.updateQueue=null,Pl(u,n)));break;case 22:a=u.memoizedState!==null,c=t!==null&&t.memoizedState!==null;var i=du,y=L0,S=N7;du=i||a,N7=S||a,L0=y||c,Wu(n,u,e),L0=y,N7=S,du=i,Qu(u),l&8192&&(n=u.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,!a||t===null||c||du||L0||(n=c||L0,e=du,t=L0,du=a||du,L0=n,fn(u,2),du=e,L0=t),!a&&N7||Kr(u,a)),l&4&&(n=u.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,Pl(u,e))));break;case 19:Wu(n,u,e),Qu(u),l&4&&(n=u.updateQueue,n!==null&&(u.updateQueue=null,Pl(u,n)));break;case 30:l&512&&(L0||t===null||bu(t,t.return)),l=gi(),a=Et,c=(e&335544064)===e,i=u.memoizedProps,Et=c&&G7(i.default,i.update)!=="none",Wu(n,u,e),Qu(u),c&&t!==null&&W0&&(u.flags|=4),Et=a,W0=l;break;case 21:break;case 7:l&512&&(L0||t===null||bu(t,t.return)),t&&t.stateNode!==null&&(t.stateNode._fragmentFiber=u);default:Wu(n,u,e),Qu(u)}}function Qu(u){var n=u.flags;if(n&2){try{for(var e,t=u.return;t!==null;){if(ws(t)){e=t;break}t=t.return}t=null;for(var l=u.return;l!==null;){if(Gr(l)){var a=l.stateNode;t===null?t=[a]:t.push(a)}if(zr(l))break;l=l.return}var c=t;if(e==null)throw Error(s(160));switch(e.tag){case 27:var i=e.stateNode,y=Rr(u);Ol(u,y,i,c);break;case 5:var S=e.stateNode;e.flags&32&&(ne(S,""),e.flags&=-33);var I=Rr(u);Ol(u,I,S,c);break;case 3:case 4:var z=e.stateNode.containerInfo,v=Rr(u);Yr(u,v,z,c);break;default:throw Error(s(161))}}catch(M){G0(u,u.return,M)}u.flags&=-3}n&4096&&(u.flags&=-4097)}function js(u){if(u.subtreeFlags&1024)for(u=u.child;u!==null;){var n=u;js(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,xe=!0,n.reset(),xe=!1),u=u.sibling}}function ve(u,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)ks(n,u),n=n.sibling;else Ys(n)}function ks(u,n){var e=u.alternate;if(e===null)Br(u,!1);else switch(u.tag){case 3:if(Xr=D7=!1,Gs(),ve(n,u),!D7&&!Gl){if(u=S7,u!==null)for(var t=0;t<u.length;t+=3){e=u[t];var l=u[t+1];Pf(e,u[t+2]),e=e.ownerDocument.documentElement,e!==null&&e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}u=n.containerInfo,u=u.nodeType===9?u.documentElement:u.ownerDocument.documentElement,u!==null&&u.style.viewTransitionName===""&&(u.style.viewTransitionName="none",u.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),u.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Xr=!0}S7=null;break;case 5:ve(n,u);break;case 4:t=D7,D7=!1,ve(n,u),D7&&(Gl=!0),D7=t;break;case 22:u.memoizedState===null&&(e.memoizedState!==null?Br(u,!1):ve(n,u));break;case 30:t=D7,l=Gs(),D7=!1,ve(n,u),D7&&(u.flags|=4);var a=u.memoizedProps,c=u.stateNode;n=z7(a,c),c=z7(e.memoizedProps,c);var i=G7(a.default,a.update);i==="none"?n=!1:(a=e.memoizedState,e.memoizedState=null,e=u.child,xu=0,n=Zr(u,e,n,c,i,a,!0),xu!==(a===null?0:a.length)&&(u.flags|=32)),(u.flags&4)!==0&&n?(De(u,u.memoizedProps.onUpdate),S7=l):l!==null&&(l.push.apply(l,S7),S7=l),D7=(u.flags&32)!==0?!0:t;break;default:ve(n,u)}}function M7(u,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hs(u,n.alternate,n),n=n.sibling}function fn(u,n){for(u=u.child;u!==null;){var e=u,t=n;switch(e.tag){case 0:case 11:case 14:case 15:sn(4,e,e.return),fn(e,t);break;case 1:bu(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Qs(e,e.return,l),fn(e,t);break;case 27:(t&2)!==0&&kf(e.stateNode,e.type,e.memoizedProps);case 5:bu(e,e.return),e.tag!==5&&e.tag!==27||ht(e),fn(e,t);break;case 6:ht(e);break;case 26:bu(e,e.return),l=e.stateNode,e.memoizedState!==null||l===null||L0||l.parentNode.removeChild(l),fn(e,t);break;case 22:e.memoizedState===null&&fn(e,t);break;case 30:bu(e,e.return),fn(e,t);break;case 7:bu(e,e.return);default:fn(e,t)}u=u.sibling}}function h7(u,n,e){for(e=(n.subtreeFlags&8772)!==0?e:e&-2,n=n.child;n!==null;){var t=n.alternate,l=u,a=n,c=a.flags,i=(e&1)!==0;switch(a.tag){case 0:case 11:case 15:h7(l,a,e),yt(4,a);break;case 1:if(h7(l,a,e),t=a,l=t.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(I){G0(t,t.return,I)}if(t=a,l=t.updateQueue,l!==null){var y=t.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)po(S[l],y)}catch(I){G0(t,t.return,I)}}i&&c&64&&Ws(a),T7(a,a.return);break;case 27:(e&2)!==0&&Ls(a);case 5:a.tag!==5&&a.tag!==27||Os(a),h7(l,a,e),i&&t===null&&c&4&&xr(a),T7(a,a.return);break;case 6:Os(a);break;case 26:y=a.stateNode,a.memoizedState!==null||y===null||du||wc(Nt(y.ownerDocument),a.type,y),h7(l,a,e),i&&t===null&&c&4&&xr(a),T7(a,a.return);break;case 12:h7(l,a,e);break;case 31:h7(l,a,e),i&&c&4&&Vs(l,a);break;case 13:h7(l,a,e),i&&c&4&&Xs(l,a);break;case 22:a.memoizedState===null&&h7(l,a,e),T7(a,a.return);break;case 30:h7(l,a,e),T7(a,a.return);break;case 7:T7(a,a.return);default:h7(l,a,e)}n=n.sibling}}function kr(u,n){var e=null;u!==null&&u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(e=u.memoizedState.cachePool.pool),u=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==e&&(u!=null&&u.refCount++,e!=null&&et(e))}function Jr(u,n){u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&et(u))}function o7(u,n,e,t){var l=(e&335544064)===e;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Js(u,n,e,t),n=n.sibling;else l&&Rs(n)}function Js(u,n,e,t){var l=(e&335544064)===e;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&zl(n);var a=n.flags;switch(n.tag){case 0:case 11:case 15:o7(u,n,e,t),a&2048&&yt(9,n);break;case 1:o7(u,n,e,t);break;case 3:o7(u,n,e,t),l&&Xr&&(u=u.containerInfo,u=u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,u.style.viewTransitionName==="root"&&(u.style.viewTransitionName=""),u=u.ownerDocument.documentElement,u!==null&&u.style.viewTransitionName==="none"&&(u.style.viewTransitionName="")),a&2048&&(a=null,n.alternate!==null&&(a=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==a&&(n.refCount++,a!=null&&et(a)));break;case 12:if(a&2048){o7(u,n,e,t),a=n.stateNode;try{var c=n.memoizedProps,i=c.id,y=c.onPostCommit;typeof y=="function"&&y(i,n.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(S){G0(n,n.return,S)}}else o7(u,n,e,t);break;case 31:o7(u,n,e,t);break;case 13:o7(u,n,e,t);break;case 23:break;case 22:c=n.stateNode,i=n.alternate,n.memoizedState!==null?(l&&i!==null&&i.memoizedState===null&&zl(i),c._visibility&2?o7(u,n,e,t):pt(u,n)):(l&&i!==null&&i.memoizedState!==null&&zl(n),c._visibility&2?o7(u,n,e,t):(c._visibility|=2,Ae(u,n,e,t,(n.subtreeFlags&10256)!==0||!1))),a&2048&&kr(i,n);break;case 24:o7(u,n,e,t),a&2048&&Jr(n.alternate,n);break;case 30:l&&(a=n.alternate,a!==null&&(_7(a.child,!0),_7(n.child,!0))),o7(u,n,e,t);break;default:o7(u,n,e,t)}}function Ae(u,n,e,t,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var a=u,c=n,i=e,y=t,S=c.flags;switch(c.tag){case 0:case 11:case 15:Ae(a,c,i,y,l),yt(8,c);break;case 23:break;case 22:var I=c.stateNode;c.memoizedState!==null?I._visibility&2?Ae(a,c,i,y,l):pt(a,c):(I._visibility|=2,Ae(a,c,i,y,l)),l&&S&2048&&kr(c.alternate,c);break;case 24:Ae(a,c,i,y,l),l&&S&2048&&Jr(c.alternate,c);break;default:Ae(a,c,i,y,l)}n=n.sibling}}function pt(u,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=u,t=n,l=t.flags;switch(t.tag){case 22:pt(e,t),l&2048&&kr(t.alternate,t);break;case 24:pt(e,t),l&2048&&Jr(t.alternate,t);break;default:pt(e,t)}n=n.sibling}}var Un=8192;function qn(u,n,e){if(u.subtreeFlags&Un)for(u=u.child;u!==null;)Fs(u,n,e),u=u.sibling}function Fs(u,n,e){switch(u.tag){case 26:qn(u,n,e),u.flags&Un&&(u.memoizedState!==null?Nm(e,y7,u.memoizedState,u.memoizedProps):(u=u.stateNode,(n&335544128)===n&&r2(e,u)));break;case 5:qn(u,n,e),u.flags&Un&&(u=u.stateNode,(n&335544128)===n&&r2(e,u));break;case 3:case 4:var t=y7;y7=Nt(u.stateNode.containerInfo),qn(u,n,e),y7=t;break;case 22:u.memoizedState===null&&(t=u.alternate,t!==null&&t.memoizedState!==null?(t=Un,Un=16777216,qn(u,n,e),Un=t):qn(u,n,e));break;case 30:if((u.flags&Un)!==0&&(t=u.memoizedProps.name,t!=null&&t!=="auto")){var l=u.stateNode;l.paired=null,Xu===null&&(Xu=new Map),Xu.set(t,l)}qn(u,n,e);break;default:qn(u,n,e)}}function $s(u){var n=u.alternate;if(n!==null&&(u=n.child,u!==null)){n.child=null;do n=u.sibling,u.sibling=null,u=n;while(u!==null)}}function bt(u){var n=u.deletions;if((u.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var t=n[e];mu=t,nf(t,u)}$s(u)}if(u.subtreeFlags&10256)for(u=u.child;u!==null;)uf(u),u=u.sibling}function uf(u){switch(u.tag){case 0:case 11:case 15:bt(u),u.flags&2048&&sn(9,u,u.return);break;case 3:bt(u);break;case 12:bt(u);break;case 22:var n=u.stateNode;u.memoizedState!==null&&n._visibility&2&&(u.return===null||u.return.tag!==13)?(n._visibility&=-3,Rl(u)):bt(u);break;default:bt(u)}}function Rl(u){var n=u.deletions;if((u.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var t=n[e];mu=t,nf(t,u)}$s(u)}for(u=u.child;u!==null;){switch(n=u,n.tag){case 0:case 11:case 15:sn(8,n,n.return),Rl(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,Rl(n));break;default:Rl(n)}u=u.sibling}}function nf(u,n){for(;mu!==null;){var e=mu;switch(e.tag){case 0:case 11:case 15:sn(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:et(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,mu=t;else u:for(e=u;mu!==null;){t=mu;var l=t.sibling,a=t.return;if(qs(t),t===e){mu=null;break u}if(l!==null){l.return=a,mu=l;break u}mu=a}}}var A1={getCacheForType:function(u){var n=hu(nu),e=n.data.get(u);return e===void 0&&(e=u(),n.data.set(u,e)),e},cacheSignal:function(){return hu(nu).controller.signal}},C1=typeof WeakMap=="function"?WeakMap:Map,O0=0,B0=null,T0=null,_0=0,z0=0,Ku=null,dn=!1,Ce=!1,Fr=!1,Z7=0,J0=0,mn=0,Zn=0,Yl=0,ju=0,Te=0,vt=null,Ru=null,$r=!1,Bl=0,ef=0,Hl=1/0,Ul=null,gn=null,j0=0,E7=null,Vn=null,I7=0,uc=0,nc=null,tf=null,Se=null,_e=null,Ne=null,At=0,ql=null;function ku(){return(O0&2)!==0&&_0!==0?_0&-_0:U.T!==null?fc():ai()}function lf(){if(ju===0)if((_0&536870912)===0||C0){var u=Pt;Pt<<=1,(Pt&3932160)===0&&(Pt=262144),ju=u}else ju=536870912;return u=Eu.current,u!==null&&(u.flags|=32),ju}function De(u,n){if(n!=null){var e=u.stateNode,t=e.ref;t===null&&(t=e.ref=Rf(z7(u.memoizedProps,e))),_e===null&&(_e=[]),_e.push(n.bind(null,t))}}function Yu(u,n,e){(u===B0&&(z0===2||z0===9)||u.cancelPendingCommit!==null)&&(Me(u,0),yn(u,_0,ju,!1)),He(u,e),((O0&2)===0||u!==B0)&&(u===B0&&((O0&2)===0&&(Zn|=e),J0===4&&yn(u,_0,ju,!1)),W7(u))}function af(u,n,e){if((O0&6)!==0)throw Error(s(327));var t=!e&&(n&127)===0&&(n&u.expiredLanes)===0||Be(u,n),l=t?_1(u,n):tc(u,n,!0),a=t;do{if(l===0){Ce&&!t&&yn(u,n,0,!1);break}else{if(e=u.current.alternate,a&&!T1(e)){l=tc(u,n,!1),a=!1;continue}if(l===2){if(a=n,u.errorRecoveryDisabledLanes&a)var c=0;else c=u.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){n=c;u:{var i=u;l=vt;var y=i.current.memoizedState.isDehydrated;if(y&&(Me(i,c).flags|=256),c=tc(i,c,!1),c!==2&&c!==6){if(Fr&&!y){i.errorRecoveryDisabledLanes|=a,Zn|=a,l=4;break u}a=Ru,Ru=l,a!==null&&(Ru===null?Ru=a:Ru.push.apply(Ru,a))}l=c}if(a=!1,l!==2)continue}}if(l===1){Me(u,0),yn(u,n,0,!0);break}u:{switch(t=u,a=l,a){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:yn(t,n,ju,!dn);break u;case 2:Ru=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Bl+300-Bu(),10<l)){if(yn(t,n,ju,!dn),Yt(t,0,!0)!==0)break u;I7=n,t.timeoutHandle=Cc(rf.bind(null,t,e,Ru,Ul,$r,n,ju,Zn,Te,dn,a,"Throttled",-0,0),l);break u}rf(t,e,Ru,Ul,$r,n,ju,Zn,Te,dn,a,null,-0,0)}}break}while(!0);W7(u)}function rf(u,n,e,t,l,a,c,i,y,S,I,z,v,M){u.timeoutHandle=-1;var Z=n.subtreeFlags,e0=(a&335544064)===a;if(z=null,(e0||Z&8192||(Z&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:v7},Xu=null,Fs(n,a,z),e0&&(Z=z,e0=u.containerInfo,e0=(e0.nodeType===9?e0:e0.ownerDocument).__reactViewTransition,e0!=null&&(Z.count++,Z.waitingForViewTransition=!0,Z=It.bind(Z),e0.finished.then(Z,Z))),Z=(a&62914560)===a?Bl-Bu():(a&4194048)===a?ef-Bu():0,Z=Dm(z,Z),Z!==null)){I7=a,u.cancelPendingCommit=Z(yf.bind(null,u,n,a,e,t,l,c,i,y,S,I,z,null,v,M)),yn(u,a,c,!S);return}yf(u,n,a,e,t,l,c,i,y,S,I,z)}function T1(u){for(var n=u;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var l=e[t],a=l.getSnapshot;l=l.value;try{if(!Zu(a(),l))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===u)break;for(;n.sibling===null;){if(n.return===null||n.return===u)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yn(u,n,e,t){n=ui(u,n),n&=~Yl,n&=~Zn,u.suspendedLanes|=n,u.pingedLanes&=~n,t&&(u.warmLanes|=n),t=u.expirationTimes;for(var l=n;0<l;){var a=31-Uu(l),c=1<<a;t[a]=-1,l&=~c}e!==0&&ei(u,e,n)}function Zl(){return(O0&6)===0?(Ct(0),!1):!0}function ec(){if(T0!==null){if(z0===0)var u=T0.return;else u=T0,R7=wn=null,sr(u),ge=null,at=0,u=T0;for(;u!==null;)Is(u.alternate,u),u=u.return;T0=null}}function Me(u,n){var e=u.timeoutHandle;return e!==-1&&(u.timeoutHandle=-1,X1(e)),e=u.cancelPendingCommit,e!==null&&(u.cancelPendingCommit=null,e()),I7=0,ec(),B0=u,T0=e=x7(u.current,null),_0=n,z0=0,Ku=null,dn=!1,Ce=Be(u,n),Fr=!1,Te=ju=Yl=Zn=mn=J0=0,Ru=vt=null,$r=!1,Z7=ui(u,n),$t(),e}function cf(u,n){p0=null,U.H=Sl,n===me||n===sl?(n=go(),z0=3):n===Ja?(n=go(),z0=4):z0=n===_r?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ku=n,T0===null&&(J0=1,_l(u,a7(n,u.current)))}function of(){var u=Eu.current;return u===null?!0:(_0&4194048)===_0?Su===null:(_0&62914560)===_0||(_0&536870912)!==0?u===Su:!1}function sf(){var u=U.H;return U.H=Sl,u===null?Sl:u}function ff(){var u=U.A;return U.A=A1,u}function Vl(){J0=4,dn||(_0&4194048)!==_0&&Eu.current!==null||(Ce=!0),(mn&134217727)===0&&(Zn&134217727)===0||B0===null||yn(B0,_0,ju,!1)}function tc(u,n,e){var t=O0;O0|=2;var l=sf(),a=ff();(B0!==u||_0!==n)&&(Ul=null,Me(u,n)),n=!1;var c=J0;u:do try{if(z0!==0&&T0!==null){var i=T0,y=Ku;switch(z0){case 8:ec(),c=6;break u;case 3:case 2:case 9:case 6:Eu.current===null&&(n=!0);var S=z0;if(z0=0,Ku=null,Ie(u,i,y,S),e&&Ce){c=0;break u}break;default:S=z0,z0=0,Ku=null,Ie(u,i,y,S)}}S1(),c=J0;break}catch(I){cf(u,I)}while(!0);return n&&u.shellSuspendCounter++,R7=wn=null,O0=t,U.H=l,U.A=a,T0===null&&(B0=null,_0=0,$t()),c}function S1(){for(;T0!==null;)df(T0)}function _1(u,n){var e=O0;O0|=2;var t=sf(),l=ff();B0!==u||_0!==n?(Ul=null,Hl=Bu()+500,Me(u,n)):Ce=Be(u,n);u:do try{if(z0!==0&&T0!==null){n=T0;var a=Ku;n:switch(z0){case 1:z0=0,Ku=null,Ie(u,n,a,1);break;case 2:case 9:if(fo(a)){z0=0,Ku=null,mf(n);break}n=function(){z0!==2&&z0!==9||B0!==u||(z0=7),W7(u)},a.then(n,n);break u;case 3:z0=7;break u;case 4:z0=5;break u;case 7:fo(a)?(z0=0,Ku=null,mf(n)):(z0=0,Ku=null,Ie(u,n,a,7));break;case 5:var c=null;switch(T0.tag){case 26:c=T0.memoizedState;case 5:case 27:var i=T0;if(c?l2(c):i.stateNode.complete){z0=0,Ku=null;var y=i.sibling;if(y!==null)T0=y;else{var S=i.return;S!==null?(T0=S,Xl(S)):T0=null}break n}}z0=0,Ku=null,Ie(u,n,a,5);break;case 6:z0=0,Ku=null,Ie(u,n,a,6);break;case 8:ec(),J0=6;break u;default:throw Error(s(462))}}N1();break}catch(I){cf(u,I)}while(!0);return R7=wn=null,U.H=t,U.A=l,O0=e,T0!==null?0:(B0=null,_0=0,$t(),J0)}function N1(){for(;T0!==null&&!Kn();)df(T0)}function df(u){var n=Ds(u.alternate,u,Z7);u.memoizedProps=u.pendingProps,n===null?Xl(u):T0=n}function mf(u){var n=u,e=n.alternate;switch(n.tag){case 15:case 0:n=vs(e,n,n.pendingProps,n.type,void 0,_0);break;case 11:n=vs(e,n,n.pendingProps,n.type.render,n.ref,_0);break;case 5:sr(n);var t=n;t===fu&&(C0?(al(t),t.tag===5&&t.stateNode!=null&&(H0=t.stateNode)):(al(t),C0=!0));default:Is(e,n),n=T0=uo(n,Z7),n=Ds(e,n,Z7)}u.memoizedProps=u.pendingProps,n===null?Xl(u):T0=n}function Ie(u,n,e,t){R7=wn=null,sr(n),ge=null,at=0;var l=n.return;try{if(m1(u,l,n,e,_0)){J0=1,_l(u,a7(e,u.current)),T0=null;return}}catch(a){if(l!==null)throw T0=l,a;J0=1,_l(u,a7(e,u.current)),T0=null;return}n.flags&32768?(C0||t===1?u=!0:Ce||(_0&536870912)!==0?u=!1:(dn=u=!0,(t===2||t===9||t===3||t===6)&&(t=Eu.current,t!==null&&t.tag===13&&(t.flags|=16384))),gf(n,u)):Xl(n)}function Xl(u){var n=u;do{if((n.flags&32768)!==0){gf(n,dn);return}u=n.return;var e=E1(n.alternate,n,Z7);if(e!==null){T0=e;return}if(n=n.sibling,n!==null){T0=n;return}T0=n=u}while(n!==null);J0===0&&(J0=5)}function gf(u,n){do{var e=p1(u.alternate,u);if(e!==null){e.flags&=32767,T0=e;return}if(e=u.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(u=u.sibling,u!==null)){T0=u;return}T0=u=e}while(u!==null);J0=6,T0=null}function yf(u,n,e,t,l,a,c,i,y,S,I,z){u.cancelPendingCommit=null;do Kl();while(j0!==0);if((O0&6)!==0)throw Error(s(327));if(n!==null){if(n===u.current)throw Error(s(177));u===B0&&(T0=B0=null,_0=0),Vn=n,E7=u,I7=e,nc=l,tf=t,D1(u,n,e,c,i,y,z)}}function D1(u,n,e,t,l,a,c){var i=n.lanes|n.childLanes;if(uc=i,i|=Pa,$2(u,e,i,t,l,a),_e=null,(e&335544064)===e?(Ne=n1(u),t=10262):(Ne=null,t=10256),(n.subtreeFlags&t)!==0||(n.flags&t)!==0?(u.callbackNode=null,u.callbackPriority=0,w1(Gt,function(){return cc(),null})):(u.callbackNode=null,u.callbackPriority=0),wl=!1,t=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||t){t=U.T,U.T=null,l=$.p,$.p=2,a=O0,O0|=4;try{b1(u,n,e)}finally{O0=a,$.p=l,U.T=t}}j0=1,wl?Se=$1(c,u.containerInfo,Ne,lc,ac,I1,rc,cc,M1):(lc(),ac(),rc())}function M1(u){if(j0!==0){var n=E7.onRecoverableError;n(u,{componentStack:null})}}function I1(){j0===3&&(j0=0,ks(Vn,E7),j0=4)}function lc(){if(j0===1){j0=0;var u=E7,n=Vn,e=I7,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=U.T,U.T=null;var l=$.p;$.p=2;var a=O0;O0|=4;try{Et=Gl=!1,Ks(n,u,e),e=bc;var c=qi(u.containerInfo),i=e.focusedElem,y=e.selectionRange;if(c!==i&&i&&i.ownerDocument&&Ui(i.ownerDocument.documentElement,i)){if(y!==null&&wa(i)){var S=y.start,I=y.end;if(I===void 0&&(I=S),"selectionStart"in i)i.selectionStart=S,i.selectionEnd=Math.min(I,i.value.length);else{var z=i.ownerDocument||document,v=z&&z.defaultView||window;if(v.getSelection){var M=v.getSelection(),Z=i.textContent.length,e0=Math.min(y.start,Z),b0=y.end===void 0?e0:Math.min(y.end,Z);!M.extend&&e0>b0&&(c=b0,b0=e0,e0=c);var T=Hi(i,e0),E=Hi(i,b0);if(T&&E&&(M.rangeCount!==1||M.anchorNode!==T.node||M.anchorOffset!==T.offset||M.focusNode!==E.node||M.focusOffset!==E.offset)){var N=z.createRange();N.setStart(T.node,T.offset),M.removeAllRanges(),e0>b0?(M.addRange(N),M.extend(E.node,E.offset)):(N.setEnd(E.node,E.offset),M.addRange(N))}}}}for(z=[],M=i;M=M.parentNode;)M.nodeType===1&&z.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<z.length;i++){var L=z[i];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}xe=!!pc,bc=pc=null}finally{O0=a,$.p=l,U.T=t}}u.current=n,j0=2}}function ac(){if(j0===2){j0=0;var u=E7,n=Vn,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=U.T,U.T=null;var t=$.p;$.p=2;var l=O0;O0|=4;try{Hs(u,n.alternate,n)}finally{O0=l,$.p=t,U.T=e}}j0=3}}function rc(){if(j0===4||j0===3){j0=0;var u=Se;Se=null,jn();var n=E7,e=Vn,t=I7,l=tf,a=(t&335544064)===t?10262:10256;if((e.subtreeFlags&a)!==0||(e.flags&a)!==0?j0=5:(j0=0,Vn=E7=null,hf(n,n.pendingLanes)),a=n.pendingLanes,a===0&&(gn=null),ya(t),e=e.stateNode,Hu&&typeof Hu.onCommitFiberRoot=="function")try{Hu.onCommitFiberRoot(Ye,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=U.T,a=$.p,$.p=2,U.T=null;try{for(var c=n.onRecoverableError,i=0;i<l.length;i++){var y=l[i];c(y.value,{componentStack:y.stack})}}finally{U.T=e,$.p=a}}if(l=_e,c=Ne,Ne=null,l!==null&&(_e=null,c===null&&(c=[]),u!==null))for(y=0;y<l.length;y++)e=(0,l[y])(c),e!==void 0&&u.finished.finally(e);(I7&3)!==0&&Kl(),W7(n),a=n.pendingLanes,(t&261930)!==0&&(a&42)!==0?n===ql?At++:(At=0,ql=n):(At=0,ql=null),Ct(0)}}function hf(u,n){(u.pooledCacheLanes&=n)===0&&(n=u.pooledCache,n!=null&&(u.pooledCache=null,et(n)))}function Kl(){return Se!==null&&(Se.skipTransition(),Se=null),lc(),ac(),rc(),cc()}function cc(){if(j0!==5)return!1;var u=E7,n=uc;uc=0;var e=ya(I7),t=U.T,l=$.p;try{$.p=32>e?32:e,U.T=null,e=nc,nc=null;var a=E7,c=I7;if(j0=0,Vn=E7=null,I7=0,(O0&6)!==0)throw Error(s(331));var i=O0;if(O0|=4,uf(a.current),Js(a,a.current,c,e),O0=i,Ct(0,!1),Hu&&typeof Hu.onPostCommitFiberRoot=="function")try{Hu.onPostCommitFiberRoot(Ye,a)}catch{}return!0}finally{$.p=l,U.T=t,hf(u,n)}}function Ef(u,n,e){n=a7(e,n),n=Sr(u.stateNode,n,2),u=an(u,n,2),u!==null&&(He(u,2),W7(u))}function G0(u,n,e){if(u.tag===3)Ef(u,u,e);else for(;n!==null;){if(n.tag===3){Ef(n,u,e);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(gn===null||!gn.has(t))){u=a7(e,u),e=ds(2),t=an(n,e,2),t!==null&&(ms(e,t,n,u),He(t,2),W7(t));break}}n=n.return}}function ic(u,n,e){var t=u.pingCache;if(t===null){t=u.pingCache=new C1;var l=new Set;t.set(n,l)}else l=t.get(n),l===void 0&&(l=new Set,t.set(n,l));l.has(e)||(Fr=!0,l.add(e),u=W1.bind(null,u,n,e),n.then(u,u))}function W1(u,n,e){var t=u.pingCache;t!==null&&t.delete(n),u.pingedLanes|=u.suspendedLanes&e,u.warmLanes&=~e,B0===u&&(_0&e)===e&&((J0===4||J0===3&&(_0&62914560)===_0&&300>Bu()-Bl)&&(O0&2)===0?Me(u,0):Yl|=e,Te===_0&&(Te=0)),W7(u)}function pf(u,n){n===0&&(n=ni()),u=Wn(u,n),u!==null&&(He(u,n),W7(u))}function Q1(u){var n=u.memoizedState,e=0;n!==null&&(e=n.retryLane),pf(u,e)}function O1(u,n){var e=0;switch(u.tag){case 31:case 13:var t=u.stateNode,l=u.memoizedState;l!==null&&(e=l.retryLane);break;case 19:t=u.stateNode;break;case 22:t=u.stateNode._retryCache;break;default:throw Error(s(314))}t!==null&&t.delete(n),pf(u,e)}function w1(u,n){return Q7(u,n)}var We=null,Qe=null,oc=!1,jl=!1,sc=!1,hn=0;function W7(u){u!==Qe&&u.next===null&&(Qe===null?We=Qe=u:Qe=Qe.next=u),jl=!0,oc||(oc=!0,z1())}function Ct(u,n){if(!sc&&jl){sc=!0;do for(var e=!1,t=We;t!==null;){if(u!==0){var l=t.pendingLanes;if(l===0)var a=0;else{var c=t.suspendedLanes,i=t.pingedLanes;a=(1<<31-Uu(42|u)+1)-1,a&=l&~(c&~i),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(e=!0,Cf(t,a))}else a=_0,a=Yt(t,t===B0?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(a&3)===0||Be(t,a)||(e=!0,Cf(t,a));t=t.next}while(e);sc=!1}}function L1(){bf()}function bf(){jl=oc=!1;var u=0;hn!==0&&V1()&&(u=hn);for(var n=Bu(),e=null,t=We;t!==null;){var l=t.next,a=vf(t,n);a===0?(t.next=null,e===null?We=l:e.next=l,l===null&&(Qe=e)):(e=t,(u!==0||(a&3)!==0)&&(jl=!0)),t=l}j0!==0&&j0!==5||Ct(u),hn!==0&&(hn=0)}function vf(u,n){for(var e=u.suspendedLanes,t=u.pingedLanes,l=u.expirationTimes,a=u.pendingLanes&-62914561;0<a;){var c=31-Uu(a),i=1<<c,y=l[c];y===-1?((i&e)===0||(i&t)!==0)&&(l[c]=F2(i,n)):y<=n&&(u.expiredLanes|=i),a&=~i}if(n=B0,e=_0,e=Yt(u,u===n?e:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),t=u.callbackNode,e===0||u===n&&(z0===2||z0===9)||u.cancelPendingCommit!==null)return t!==null&&t!==null&&Lu(t),u.callbackNode=null,u.callbackPriority=0;if((e&3)===0||Be(u,e)){if(n=e&-e,n===u.callbackPriority)return n;switch(t!==null&&Lu(t),ya(e)){case 2:case 8:e=Fc;break;case 32:e=Gt;break;case 268435456:e=$c;break;default:e=Gt}return t=Af.bind(null,u),e=Q7(e,t),u.callbackPriority=n,u.callbackNode=e,n}return t!==null&&t!==null&&Lu(t),u.callbackPriority=2,u.callbackNode=null,2}function Af(u,n){if(j0!==0&&j0!==5)return u.callbackNode=null,u.callbackPriority=0,null;var e=u.callbackNode;if(Kl()&&u.callbackNode!==e)return null;var t=_0;return t=Yt(u,u===B0?t:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),t===0?null:(af(u,t,n),vf(u,Bu()),u.callbackNode!=null&&u.callbackNode===e?Af.bind(null,u):null)}function Cf(u,n){if(Kl())return null;af(u,n,!0)}function z1(){K1(function(){(O0&6)!==0?Q7(Jc,L1):bf()})}function fc(){if(hn===0){var u=Gn;u===0&&(u=xt,xt<<=1,(xt&261888)===0&&(xt=256)),hn=u}return hn}function Tf(u){return u==null||typeof u=="symbol"||typeof u=="boolean"?null:typeof u=="function"?u:Zt(u)}function G1(u,n,e,t,l){if(n==="submit"&&e&&e.stateNode===l){var a=Tf((l[zu]||null).action),c=t.submitter;c&&(n=(n=c[zu]||null)?Tf(n.formAction):c.getAttribute("formAction"),n!==null&&(a=n,c=null));var i=new jt("action","action",null,t,l);u.push({event:i,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(hn!==0){var y=new FormData(l,c);br(e,{pending:!0,data:y,method:l.method,action:a},null,y)}}else typeof a=="function"&&(i.preventDefault(),y=new FormData(l,c),br(e,{pending:!0,data:y,method:l.method,action:a},a,y))},currentTarget:l}]})}}for(var dc=0;dc<xa.length;dc++){var mc=xa[dc],x1=mc.toLowerCase(),P1=mc[0].toUpperCase()+mc.slice(1);m7(x1,"on"+P1)}m7(Xi,"onAnimationEnd"),m7(Ki,"onAnimationIteration"),m7(ji,"onAnimationStart"),m7("dblclick","onDoubleClick"),m7("focusin","onFocus"),m7("focusout","onBlur"),m7(Xd,"onTransitionRun"),m7(Kd,"onTransitionStart"),m7(jd,"onTransitionCancel"),m7(ki,"onTransitionEnd"),$n("onMouseEnter",["mouseout","mouseover"]),$n("onMouseLeave",["mouseout","mouseover"]),$n("onPointerEnter",["pointerout","pointerover"]),$n("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tt));function Sf(u,n){n=(n&4)!==0;for(var e=0;e<u.length;e++){var t=u[e],l=t.event;t=t.listeners;u:{var a=void 0;if(n)for(var c=t.length-1;0<=c;c--){var i=t[c],y=i.instance,S=i.currentTarget;if(i=i.listener,y!==a&&l.isPropagationStopped())break u;a=i,l.currentTarget=S;try{a(l)}catch(I){Ft(I)}l.currentTarget=null,a=y}else for(c=0;c<t.length;c++){if(i=t[c],y=i.instance,S=i.currentTarget,i=i.listener,y!==a&&l.isPropagationStopped())break u;a=i,l.currentTarget=S;try{a(l)}catch(I){Ft(I)}l.currentTarget=null,a=y}}}}function S0(u,n){var e=n[ci];e===void 0&&(e=n[ci]=new Set);var t=u+"__bubble";e.has(t)||(_f(n,u,2,!1),e.add(t))}function gc(u,n,e){var t=0;n&&(t|=4),_f(e,u,t,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function yc(u){if(!u[kl]){u[kl]=!0,si.forEach(function(e){e!=="selectionchange"&&(R1.has(e)||gc(e,!1,u),gc(e,!0,u))});var n=u.nodeType===9?u:u.ownerDocument;n===null||n[kl]||(n[kl]=!0,gc("selectionchange",!1,n))}}function _f(u,n,e,t){switch(g2(n)){case 2:var l=Qm;break;case 8:l=Om;break;default:l=zc}e=l.bind(null,n,e,u),l=void 0,!Ta||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),t?l!==void 0?u.addEventListener(n,e,{capture:!0,passive:l}):u.addEventListener(n,e,!0):l!==void 0?u.addEventListener(n,e,{passive:l}):u.addEventListener(n,e,!1)}function hc(u,n,e,t,l){var a=t;if((n&1)===0&&(n&2)===0&&t!==null)u:for(;;){if(t===null)return;var c=t.tag;if(c===3||c===4){var i=t.stateNode.containerInfo;if(i===l)break;if(c===4)for(c=t.return;c!==null;){var y=c.tag;if((y===3||y===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;i!==null;){if(c=Nn(i),c===null)return;if(y=c.tag,y===5||y===6||y===26||y===27){t=a=c;continue u}i=i.parentNode}}t=t.return}Ti(function(){var S=a,I=Aa(e),z=[];u:{var v=Ji.get(u);if(v!==void 0){var M=jt,Z=u;switch(u){case"keypress":if(Xt(e)===0)break u;case"keydown":case"keyup":M=Td;break;case"focusin":Z="focus",M=Da;break;case"focusout":Z="blur",M=Da;break;case"beforeblur":case"afterblur":M=Da;break;case"click":if(e.button===2)break u;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Md;break;case Xi:case Ki:case ji:M=gd;break;case ki:M=Wd;break;case"scroll":case"scrollend":M=od;break;case"wheel":M=Od;break;case"copy":case"cut":case"paste":M=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Mi;break;case"submit":M=Nd;break;case"toggle":case"beforetoggle":M=Ld}var e0=(n&4)!==0,b0=!e0&&(u==="scroll"||u==="scrollend"),T=e0?v!==null?v+"Capture":null:v;e0=[];for(var E=S,N;E!==null;){var L=E;if(N=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||N===null||T===null||(L=Ze(E,T),L!=null&&e0.push(St(E,L,N))),b0)break;E=E.return}0<e0.length&&(v=new M(v,Z,null,e,I),z.push({event:v,listeners:e0}))}}if((n&7)===0){u:{if(M=u==="mouseover"||u==="pointerover",v=u==="mouseout"||u==="pointerout",M&&e!==va&&(Z=e.relatedTarget||e.fromElement)&&(Nn(Z)||Z[kn]))break u;(v||M)&&(Z=I.window===I?I:(M=I.ownerDocument)?M.defaultView||M.parentWindow:window,v?(M=e.relatedTarget||e.toElement,v=S,M=M?Nn(M):null,M!==null&&(b0=A(M),e0=M.tag,M!==b0||e0!==5&&e0!==27&&e0!==6)&&(M=null)):(v=null,M=S),v!==M&&(e0=Ni,L="onMouseLeave",T="onMouseEnter",E="mouse",(u==="pointerout"||u==="pointerover")&&(e0=Mi,L="onPointerLeave",T="onPointerEnter",E="pointer"),b0=v==null?Z:qe(v),N=M==null?Z:qe(M),Z=new e0(L,E+"leave",v,e,I),Z.target=b0,Z.relatedTarget=N,L=null,Nn(I)===S&&(e0=new e0(T,E+"enter",M,e,I),e0.target=N,e0.relatedTarget=b0,L=e0),b0=L,e0=v&&M?o0(v,M,Y1):null,v!==null&&Nf(z,Z,v,e0,!1),M!==null&&b0!==null&&Nf(z,b0,M,e0,!0)))}u:{if(v=S?qe(S):window,M=v.nodeName&&v.nodeName.toLowerCase(),M==="select"||M==="input"&&v.type==="file")var u0=Gi;else if(Li(v))if(xi)u0=qd;else{u0=Hd;var N0=Bd}else M=v.nodeName,!M||M.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?S&&ba(S.elementType)&&(u0=Gi):u0=Ud;if(u0&&(u0=u0(u,S))){zi(z,u0,e,I);break u}N0&&N0(u,v,S)}switch(N0=S?qe(S):window,u){case"focusin":(Li(N0)||N0.contentEditable==="true")&&(ae=N0,La=S,$e=null);break;case"focusout":$e=La=ae=null;break;case"mousedown":za=!0;break;case"contextmenu":case"mouseup":case"dragend":za=!1,Zi(z,e,I);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":Zi(z,e,I)}var c0;if(Ia)u:{switch(u){case"compositionstart":var f0="onCompositionStart";break u;case"compositionend":f0="onCompositionEnd";break u;case"compositionupdate":f0="onCompositionUpdate";break u}f0=void 0}else le?Oi(u,e)&&(f0="onCompositionEnd"):u==="keydown"&&e.keyCode===229&&(f0="onCompositionStart");f0&&(Ii&&e.locale!=="ko"&&(le||f0!=="onCompositionStart"?f0==="onCompositionEnd"&&le&&(c0=Si()):(k7=I,Sa="value"in k7?k7.value:k7.textContent,le=!0)),N0=Jl(S,f0),0<N0.length&&(f0=new Di(f0,u,null,e,I),z.push({event:f0,listeners:N0}),c0?f0.data=c0:(c0=wi(e),c0!==null&&(f0.data=c0)))),(c0=Gd?xd(u,e):Pd(u,e))&&(f0=Jl(S,"onBeforeInput"),0<f0.length&&(N0=new Di("onBeforeInput","beforeinput",null,e,I),z.push({event:N0,listeners:f0}),N0.data=c0)),G1(z,u,S,e,I)}Sf(z,n)})}function St(u,n,e){return{instance:u,listener:n,currentTarget:e}}function Jl(u,n){for(var e=n+"Capture",t=[];u!==null;){var l=u,a=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||a===null||(l=Ze(u,e),l!=null&&t.unshift(St(u,l,a)),l=Ze(u,n),l!=null&&t.push(St(u,l,a))),u.tag===3)return t;u=u.return}return[]}function Y1(u){if(u===null)return null;do u=u.return;while(u&&u.tag!==5&&u.tag!==27);return u||null}function Nf(u,n,e,t,l){for(var a=n._reactName,c=[];e!==null&&e!==t;){var i=e,y=i.alternate,S=i.stateNode;if(i=i.tag,y!==null&&y===t)break;i!==5&&i!==26&&i!==27||S===null||(y=S,l?(S=Ze(e,a),S!=null&&c.unshift(St(e,S,y))):l||(S=Ze(e,a),S!=null&&c.push(St(e,S,y)))),e=e.return}c.length!==0&&u.push({event:n,listeners:c})}var B1=/\r\n?/g,H1=/\u0000|\uFFFD/g;function Df(u){return(typeof u=="string"?u:""+u).replace(B1,`
`).replace(H1,"")}function Mf(u,n){return n=Df(n),Df(u)===n}function x0(u,n,e,t,l,a){switch(e){case"children":if(typeof t=="string")n==="body"||n==="textarea"&&t===""||ne(u,t);else if(typeof t=="number"||typeof t=="bigint")n!=="body"&&ne(u,""+t);else return;break;case"className":qt(u,"class",t);break;case"tabIndex":qt(u,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(u,e,t);break;case"style":Ai(u,t,a);return;case"data":if(n!=="object"){qt(u,"data",t);break}case"src":case"href":if(t===""&&(n!=="a"||e!=="href")){u.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){u.removeAttribute(e);break}t=Zt(t),u.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){u.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(e==="formAction"?(n!=="input"&&x0(u,n,"name",l.name,l,null),x0(u,n,"formEncType",l.formEncType,l,null),x0(u,n,"formMethod",l.formMethod,l,null),x0(u,n,"formTarget",l.formTarget,l,null)):(x0(u,n,"encType",l.encType,l,null),x0(u,n,"method",l.method,l,null),x0(u,n,"target",l.target,l,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){u.removeAttribute(e);break}t=Zt(t),u.setAttribute(e,t);break;case"onClick":t!=null&&(u.onclick=v7);return;case"onScroll":t!=null&&S0("scroll",u);return;case"onScrollEnd":t!=null&&S0("scrollend",u);return;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(e=t.__html,e!=null){if(l.children!=null)throw Error(s(60));a?.__html!==e&&(u.innerHTML=e)}}break;case"multiple":u.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":u.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){u.removeAttribute("xlink:href");break}e=Zt(t),u.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?u.setAttribute(e,t):u.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?u.setAttribute(e,""):u.removeAttribute(e);break;case"capture":case"download":t===!0?u.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?u.setAttribute(e,t):u.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?u.setAttribute(e,t):u.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?u.removeAttribute(e):u.setAttribute(e,t);break;case"popover":S0("beforetoggle",u),S0("toggle",u),Ut(u,"popover",t);break;case"xlinkActuate":w7(u,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":w7(u,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":w7(u,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":w7(u,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":w7(u,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":w7(u,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":w7(u,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":w7(u,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":w7(u,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Ut(u,"is",t);break;case"innerText":case"textContent":return;default:if(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")e=cd.get(e)||e,Ut(u,e,t);else return}W0=!0}function Ec(u,n,e,t,l,a){switch(e){case"style":Ai(u,t,a);return;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(e=t.__html,e!=null){if(l.children!=null)throw Error(s(60));a?.__html!==e&&(u.innerHTML=e)}}break;case"children":if(typeof t=="string")ne(u,t);else if(typeof t=="number"||typeof t=="bigint")ne(u,""+t);else return;break;case"onScroll":t!=null&&S0("scroll",u);return;case"onScrollEnd":t!=null&&S0("scrollend",u);return;case"onClick":t!=null&&(u.onclick=v7);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!fi.hasOwnProperty(e))u:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),a=e.slice(2,l?e.length-7:void 0),n=u[zu]||null,n=n!=null?n[e]:null,typeof n=="function"&&u.removeEventListener(a,n,l),typeof t=="function")){typeof n!="function"&&n!==null&&(e in u?u[e]=null:u.hasAttribute(e)&&u.removeAttribute(e)),u.addEventListener(a,t,l);break u}W0=!0,e in u?u[e]=t:t===!0?u.setAttribute(e,""):Ut(u,e,t)}return}W0=!0}function vu(u,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":S0("error",u),S0("load",u);var t=!1,l=!1,a;for(a in e)if(e.hasOwnProperty(a)){var c=e[a];if(c!=null)switch(a){case"src":t=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:x0(u,n,a,c,e,null)}}l&&x0(u,n,"srcSet",e.srcSet,e,null),t&&x0(u,n,"src",e.src,e,null);return;case"input":S0("invalid",u);var i=a=c=l=null,y=null,S=null;for(t in e)if(e.hasOwnProperty(t)){var I=e[t];if(I!=null)switch(t){case"name":l=I;break;case"type":c=I;break;case"checked":y=I;break;case"defaultChecked":S=I;break;case"value":a=I;break;case"defaultValue":i=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(137,n));break;default:x0(u,n,t,I,e,null)}}Ei(u,a,i,y,S,c,l,!1);return;case"select":S0("invalid",u),t=c=a=null;for(l in e)if(e.hasOwnProperty(l)&&(i=e[l],i!=null))switch(l){case"value":a=i;break;case"defaultValue":c=i;break;case"multiple":t=i;default:x0(u,n,l,i,e,null)}n=a,e=c,u.multiple=!!t,n!=null?ue(u,!!t,n,!1):e!=null&&ue(u,!!t,e,!0);return;case"textarea":S0("invalid",u),a=l=t=null;for(c in e)if(e.hasOwnProperty(c)&&(i=e[c],i!=null))switch(c){case"value":t=i;break;case"defaultValue":l=i;break;case"children":a=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:x0(u,n,c,i,e,null)}bi(u,t,l,a);return;case"option":for(y in e)e.hasOwnProperty(y)&&(t=e[y],t!=null)&&(y==="selected"?u.selected=t&&typeof t!="function"&&typeof t!="symbol":x0(u,n,y,t,e,null));return;case"dialog":S0("beforetoggle",u),S0("toggle",u),S0("cancel",u),S0("close",u);break;case"iframe":case"object":S0("load",u);break;case"video":case"audio":for(t=0;t<Tt.length;t++)S0(Tt[t],u);break;case"image":S0("error",u),S0("load",u);break;case"details":S0("toggle",u);break;case"embed":case"source":case"link":S0("error",u),S0("load",u);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in e)if(e.hasOwnProperty(S)&&(t=e[S],t!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:x0(u,n,S,t,e,null)}return;default:if(ba(n)){for(I in e)e.hasOwnProperty(I)&&(t=e[I],t!==void 0&&Ec(u,n,I,t,e,void 0));return}}for(i in e)e.hasOwnProperty(i)&&(t=e[i],t!=null&&x0(u,n,i,t,e,null))}var U1={};function q1(u,n,e,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,a=null,c=null,i=null,y=null,S=null,I=null;for(M in e){var z=e[M];if(e.hasOwnProperty(M)&&z!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":y=z;default:t.hasOwnProperty(M)||x0(u,n,M,null,t,z)}}for(var v in t){var M=t[v];if(z=e[v],t.hasOwnProperty(v)&&(M!=null||z!=null))switch(v){case"type":M!==z&&(W0=!0),a=M;break;case"name":M!==z&&(W0=!0),l=M;break;case"checked":M!==z&&(W0=!0),S=M;break;case"defaultChecked":M!==z&&(W0=!0),I=M;break;case"value":M!==z&&(W0=!0),c=M;break;case"defaultValue":M!==z&&(W0=!0),i=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,n));break;default:M!==z&&x0(u,n,v,M,t,z)}}Ea(u,c,i,y,S,I,a,l);return;case"select":M=c=i=v=null;for(a in e)if(y=e[a],e.hasOwnProperty(a)&&y!=null)switch(a){case"value":break;case"multiple":M=y;default:t.hasOwnProperty(a)||x0(u,n,a,null,t,y)}for(l in t)if(a=t[l],y=e[l],t.hasOwnProperty(l)&&(a!=null||y!=null))switch(l){case"value":a!==y&&(W0=!0),v=a;break;case"defaultValue":a!==y&&(W0=!0),i=a;break;case"multiple":a!==y&&(W0=!0),c=a;default:a!==y&&x0(u,n,l,a,t,y)}n=i,e=c,t=M,v!=null?ue(u,!!e,v,!1):!!t!=!!e&&(n!=null?ue(u,!!e,n,!0):ue(u,!!e,e?[]:"",!1));return;case"textarea":M=v=null;for(i in e)if(l=e[i],e.hasOwnProperty(i)&&l!=null&&!t.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:x0(u,n,i,null,t,l)}for(c in t)if(l=t[c],a=e[c],t.hasOwnProperty(c)&&(l!=null||a!=null))switch(c){case"value":l!==a&&(W0=!0),v=l;break;case"defaultValue":l!==a&&(W0=!0),M=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==a&&x0(u,n,c,l,t,a)}pi(u,v,M);return;case"option":for(var Z in e)v=e[Z],e.hasOwnProperty(Z)&&v!=null&&!t.hasOwnProperty(Z)&&(Z==="selected"?u.selected=!1:x0(u,n,Z,null,t,v));for(y in t)v=t[y],M=e[y],t.hasOwnProperty(y)&&v!==M&&(v!=null||M!=null)&&(y==="selected"?(v!==M&&(W0=!0),u.selected=v&&typeof v!="function"&&typeof v!="symbol"):x0(u,n,y,v,t,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var e0 in e)v=e[e0],e.hasOwnProperty(e0)&&v!=null&&!t.hasOwnProperty(e0)&&x0(u,n,e0,null,t,v);for(S in t)if(v=t[S],M=e[S],t.hasOwnProperty(S)&&v!==M&&(v!=null||M!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(137,n));break;default:x0(u,n,S,v,t,M)}return;default:if(ba(n)){for(var b0 in e)v=e[b0],e.hasOwnProperty(b0)&&v!==void 0&&!t.hasOwnProperty(b0)&&Ec(u,n,b0,void 0,t,v);for(I in t)v=t[I],M=e[I],!t.hasOwnProperty(I)||v===M||v===void 0&&M===void 0||Ec(u,n,I,v,t,M);return}}for(var T in e)v=e[T],e.hasOwnProperty(T)&&v!=null&&!t.hasOwnProperty(T)&&x0(u,n,T,null,t,v);for(z in t)v=t[z],M=e[z],!t.hasOwnProperty(z)||v===M||v==null&&M==null||x0(u,n,z,v,t,M)}function If(u){switch(u){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z1(){if(typeof performance.getEntriesByType=="function"){for(var u=0,n=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var l=e[t],a=l.transferSize,c=l.initiatorType,i=l.duration;if(a&&i&&If(c)){for(c=0,i=l.responseEnd,t+=1;t<e.length;t++){var y=e[t],S=y.startTime;if(S>i)break;var I=y.transferSize,z=y.initiatorType;I&&If(z)&&(y=y.responseEnd,c+=I*(y<i?1:(i-S)/(y-S)))}if(--t,n+=8*(a+c)/(l.duration/1e3),u++,10<u)break}}if(0<u)return n/u/1e6}return navigator.connection&&(u=navigator.connection.downlink,typeof u=="number")?u:5}var pc=null,bc=null;function _t(u){return u.nodeType===9?u:u.ownerDocument}function Wf(u){switch(u){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qf(u,n){if(u===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return u===1&&n==="foreignObject"?0:u}function Of(u,n,e,t){return e=_t(e).createElement(u),e[yu]=t,e[zu]=n,vu(e,u,n),su(e),e}function vc(u,n){return u==="textarea"||u==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ac=null;function V1(){var u=window.event;return u&&u.type==="popstate"?u===Ac?!1:(Ac=u,!0):(Ac=null,!1)}var Cc=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,Lf=typeof requestAnimationFrame=="function"?requestAnimationFrame:Cc,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(u){return wf.resolve(null).then(u).catch(j1)}:Cc;function j1(u){setTimeout(function(){throw u})}function En(u){return u==="head"}function zf(u,n){var e=n,t=0;do{var l=e.nextSibling;if(u.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"||e==="/&"){if(t===0){u.removeChild(l),Pe(n);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")Wc(u.ownerDocument.documentElement);else if(e==="head"){e=u.ownerDocument.head,Wc(e);for(var a=e.firstChild;a;){var c=a.nextSibling,i=a.nodeName;a[Ue]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&a.rel.toLowerCase()==="stylesheet"||e.removeChild(a),a=c}}else e==="body"&&Wc(u.ownerDocument.body);e=l}while(e);Pe(n)}function Gf(u,n){var e=u;u=0;do{var t=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(u===0)break;u--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||u++;e=t}while(e)}function xf(u,n,e){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,u.style.viewTransitionName=n,e!=null&&(u.style.viewTransitionClass=e),e=getComputedStyle(u),e.display==="inline"){if(n=u.getClientRects(),n.length===1)var t=1;else for(var l=t=0;l<n.length;l++){var a=n[l];0<a.width&&0<a.height&&t++}t===1&&(u=u.style,u.display=n.length===1?"inline-block":"block",u.marginTop="-"+e.paddingTop,u.marginBottom="-"+e.paddingBottom)}}function Pf(u,n){u=u.style,n=n.style;var e=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;u.viewTransitionName=e==null||typeof e=="boolean"?"":(""+e).trim(),e=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,u.viewTransitionClass=e==null||typeof e=="boolean"?"":(""+e).trim(),u.display==="inline-block"&&(n==null?u.display=u.margin="":(e=n.display,u.display=e==null||typeof e=="boolean"?"":e,e=n.margin,e!=null?u.margin=e:(e=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],u.marginTop=e==null||typeof e=="boolean"?"":e,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],u.marginBottom=n==null||typeof n=="boolean"?"":n)))}function k1(u,n,e){return e=e.ownerDocument.defaultView,{rect:u,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=u.bottom&&0<=u.right&&u.top<=e.innerHeight&&u.left<=e.innerWidth}}function Tc(u){var n=u.getBoundingClientRect(),e=getComputedStyle(u);return k1(n,e,u)}function J1(u){return u.documentElement.clientHeight}function F1(u){this.addEventListener("load",u),this.addEventListener("error",u)}function $1(u,n,e,t,l,a,c,i,y){var S=n.nodeType===9?n:n.ownerDocument;try{var I=S.startViewTransition({update:function(){var v=S.defaultView,M=v.navigation&&v.navigation.transition,Z=S.fonts.status;t();var e0=[];if(Z==="loaded"&&(J1(S),S.fonts.status==="loading"&&e0.push(S.fonts.ready)),Z=e0.length,u!==null)for(var b0=u.suspenseyImages,T=0,E=0;E<b0.length;E++){var N=b0[E];if(!N.complete){var L=N.getBoundingClientRect();if(0<L.bottom&&0<L.right&&L.top<v.innerHeight&&L.left<v.innerWidth){if(T+=a2(N),T>ua){e0.length=Z;break}N=new Promise(F1.bind(N)),e0.push(N)}}}if(0<e0.length)return v=Promise.race([Promise.all(e0),new Promise(function(u0){return setTimeout(u0,500)})]).then(l,l),(M?Promise.allSettled([M.finished,v]):v).then(a,a);if(l(),M)return M.finished.then(a,a);a()},types:e});S.__reactViewTransition=I;var z=[];return I.ready.then(function(){for(var v=S.documentElement.getAnimations({subtree:!0}),M=0;M<v.length;M++){var Z=v[M],e0=Z.effect,b0=e0.pseudoElement;if(b0!=null&&b0.startsWith("::view-transition")){z.push(Z),Z=e0.getKeyframes();for(var T=b0=void 0,E=!0,N=0;N<Z.length;N++){var L=Z[N],u0=L.width;if(b0===void 0)b0=u0;else if(b0!==u0){E=!1;break}if(u0=L.height,T===void 0)T=u0;else if(T!==u0){E=!1;break}delete L.width,delete L.height,L.transform==="none"&&delete L.transform}E&&b0!==void 0&&T!==void 0&&(e0.setKeyframes(Z),E=getComputedStyle(e0.target,e0.pseudoElement),E.width!==b0||E.height!==T)&&(E=Z[0],E.width=b0,E.height=T,E=Z[Z.length-1],E.width=b0,E.height=T,e0.setKeyframes(Z))}}c()},function(v){S.__reactViewTransition===I&&(S.__reactViewTransition=null);try{typeof v=="object"&&v!==null&&v.name==="InvalidStateError"&&(v.message==="View transition was skipped because document visibility state is hidden."||v.message==="Skipping view transition because document visibility state has become hidden."||v.message==="Skipping view transition because viewport size changed."||v.message==="Transition was aborted because of invalid state")&&(v=null),v!==null&&y(v)}finally{t(),l(),c()}}),I.finished.finally(function(){for(var v=0;v<z.length;v++)z[v].cancel();S.__reactViewTransition===I&&(S.__reactViewTransition=null),i()}),I}catch{return t(),l(),c(),null}}function Xn(u,n){this._scope=document.documentElement,this._selector="::view-transition-"+u+"("+n+")"}Xn.prototype.animate=function(u,n){return n=typeof n=="number"?{duration:n}:w({},n),n.pseudoElement=this._selector,this._scope.animate(u,n)},Xn.prototype.getAnimations=function(){for(var u=this._scope,n=this._selector,e=u.getAnimations({subtree:!0}),t=[],l=0;l<e.length;l++){var a=e[l].effect;a!==null&&a.target===u&&a.pseudoElement===n&&t.push(e[l])}return t},Xn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Rf(u){return{name:u,group:new Xn("group",u),imagePair:new Xn("image-pair",u),old:new Xn("old",u),new:new Xn("new",u)}}function Ju(u){this._fragmentFiber=u,this._observers=this._eventListeners=null}Ju.prototype.addEventListener=function(u,n,e){var t=null,l=null;if(!(e!=null&&typeof e!="boolean"&&(t=e.signal||null,t!==null&&t.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bf(a,u,n,e)===-1){var c=this,i=n;e!=null&&typeof e!="boolean"&&e.once===!0&&(i=function(y){c.removeEventListener(u,n,e),typeof n=="function"?n.call(this,y):n.handleEvent(y)}),t!==null&&(l=c.removeEventListener.bind(c,u,n,e),t.addEventListener("abort",l,{once:!0}),l=t.removeEventListener.bind(t,"abort",l)),t=Oe(e),a.push({type:u,listener:n,optionsOrUseCapture:e,attachedListener:i,cleanup:l}),g(this._fragmentFiber.child,!1,um,u,i,t)}this._eventListeners=a}};function um(u,n,e,t){return K(u).addEventListener(n,e,t),!1}Ju.prototype.removeEventListener=function(u,n,e){var t=this._eventListeners;if(t!==null&&(n=Bf(t,u,n,e),n!==-1)){var l=t[n];e=l.attachedListener;var a=l.cleanup;l=Oe(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,nm,u,e,l),t.splice(n,1),a!==null&&a()}};function nm(u,n,e,t){return K(u).removeEventListener(n,e,t),!1}function Oe(u){return u!=null&&typeof u!="boolean"&&(u.once===!0||u.signal instanceof AbortSignal)?{capture:u.capture,passive:u.passive}:u}function Yf(u){return u==null?"c=0":typeof u=="boolean"?"c="+(u?"1":"0"):"c="+(u.capture?"1":"0")}function Bf(u,n,e,t){if(u.length===0)return-1;t=Yf(t);for(var l=0;l<u.length;l++){var a=u[l];if(a.type===n&&a.listener===e&&Yf(a.optionsOrUseCapture)===t)return l}return-1}Ju.prototype.dispatchEvent=function(u){var n=W(this._fragmentFiber);if(n===null)return!0;n=K(n);var e=this._eventListeners;if(e!==null&&0<e.length||!u.bubbles){var t=n.nodeType===9?n.createComment(""):document.createTextNode("");if(e)for(var l=0;l<e.length;l++){var a=e[l];t.addEventListener(a.type,a.attachedListener,Oe(a.optionsOrUseCapture))}if(n.appendChild(t),u=t.dispatchEvent(u),e)for(l=0;l<e.length;l++)a=e[l],t.removeEventListener(a.type,a.attachedListener,Oe(a.optionsOrUseCapture));return n.removeChild(t),u}return n.dispatchEvent(u)},Ju.prototype.focus=function(u){g(this._fragmentFiber.child,!0,Hf,u,void 0,void 0)};function Hf(u,n){return u.tag===6?!1:(u=K(u),mm(u,n))}Ju.prototype.focusLast=function(u){var n=[];g(this._fragmentFiber.child,!0,Sc,n,void 0,void 0);for(var e=n.length-1;0<=e&&!Hf(n[e],u);e--);};function Sc(u,n){return n.push(u),!1}Ju.prototype.blur=function(){var u=W(this._fragmentFiber);u!==null&&(u=K(u),u=_t(u).activeElement,u!==null&&g(this._fragmentFiber.child,!1,em,u,void 0,void 0))};function em(u,n){return u.tag===6?!1:(u=K(u),u===n||u.contains(n)?(n.blur(),!0):!1)}Ju.prototype.observeUsing=function(u){this._observers===null&&(this._observers=new Set),this._observers.add(u),g(this._fragmentFiber.child,!1,tm,u,void 0,void 0)};function tm(u,n){return u.tag===6||(u=K(u),n.observe(u)),!1}Ju.prototype.unobserveUsing=function(u){var n=this._observers;if(n!==null&&n.has(u)){n.delete(u),g(this._fragmentFiber.child,!1,lm,u,void 0,void 0);for(var e=n=0;e<p7.length;e++){var t=p7[e];t.fragmentInstance===this&&t.observer===u?u.unobserve(t.instance):p7[n++]=t}p7.length=n}};function lm(u,n){return u.tag===6||(u=K(u),n.unobserve(u)),!1}var p7=[],_c=!1;function am(u,n,e){p7.push({fragmentInstance:u,observer:n,instance:e}),_c||(_c=!0,gm(function(){_c=!1;var t=p7;p7=[];for(var l=0;l<t.length;l++){var a=t[l];a.observer.unobserve(a.instance)}}))}Ju.prototype.getClientRects=function(){var u=[];return g(this._fragmentFiber.child,!1,rm,u,void 0,void 0),u};function rm(u,n){if(u.tag===6){u=u.stateNode;var e=u.ownerDocument.createRange();e.selectNodeContents(u),n.push.apply(n,e.getClientRects())}else u=K(u),n.push.apply(n,u.getClientRects());return!1}Ju.prototype.getRootNode=function(u){var n=W(this._fragmentFiber);return n===null?this:K(n).getRootNode(u)},Ju.prototype.compareDocumentPosition=function(u){var n=W(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var e=[];g(this._fragmentFiber.child,!1,Sc,e,void 0,void 0);var t=K(n);if(e.length===0){if(e=t,D(this._fragmentFiber)){u:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break u}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(e=n)}n=this._fragmentFiber;var l=t=e.compareDocumentPosition(u);return e===u?l=Node.DOCUMENT_POSITION_CONTAINS:t&Node.DOCUMENT_POSITION_CONTAINED_BY&&(e=G(n)[1],e===null?l=Node.DOCUMENT_POSITION_PRECEDING:(u=K(e).compareDocumentPosition(u),l=u===0||u&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=K(e[0]),l=K(e[e.length-1]);var a=D(this._fragmentFiber)?n.parentElement:t;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;t=a.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var c=n.compareDocumentPosition(u),i=l.compareDocumentPosition(u),y=c&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=t&&a&&c&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,n=t&&n===u||a&&l===u||y||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!t&&n===u||!a&&l===u?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:c,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||cm(n,this._fragmentFiber,e[0],e[e.length-1],u)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function cm(u,n,e,t,l){var a=Nn(l);if(u&Node.DOCUMENT_POSITION_CONTAINED_BY){if(e=!!a)u:{for(;a!==null;){if(a.tag===7&&(a===n||a.alternate===n)){e=!0;break u}a=a.return}e=!1}return e}if(u&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=l.ownerDocument,l===a||l===a.documentElement||l===a.body;u:{for(a=n,n=W(n);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==n&&a.alternate!==n)){a=!0;break u}a=a.return}a=!1}return a}return u&Node.DOCUMENT_POSITION_PRECEDING?((n=!!a)&&!(n=a===e)&&(n=o0(e,a,l0),n===null?n=!1:(g(n,!0,h0,a,e),a=n0,n0=null,n=a!==null)),n):u&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!a)&&!(n=a===t)&&(n=o0(t,a,l0),n===null?n=!1:(g(n,!0,M0,a,t),a=n0,v0=n0=null,n=a!==null)),n):!1}function Uf(u,n){var e=u.ownerDocument.createRange();e.selectNodeContents(u),u=e.getBoundingClientRect(),window.scrollTo(window.scrollX+u.left,n?window.scrollY+u.top:window.scrollY+u.bottom-window.innerHeight)}Ju.prototype.scrollIntoView=function(u){if(typeof u=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Sc,n,void 0,void 0);var e=u!==!1;if(n.length===0){var t=G(this._fragmentFiber);if(t=e?t[1]||t[0]||W(this._fragmentFiber):t[0]||t[1],t===null)return;if(t.tag===6){u=K(t),Uf(u,e);return}if(t=K(t),t.nodeType!==9){if(t.nodeType===11){e="host"in t?t.host:null,e!==null&&e.scrollIntoView(u);return}t.scrollIntoView(u)}}for(t=e?n.length-1:0;t!==(e?-1:n.length);){var l=n[t];l.tag===6?(l=K(l),Uf(l,e)):K(l).scrollIntoView(u),t+=e?-1:1}};function im(u,n){return u=K(u),qf(u,n),!1}function qf(u,n){u.reactFragments==null&&(u.reactFragments=new Set),u.reactFragments.add(n)}function Zf(u,n){var e=n._eventListeners;if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];u.addEventListener(l.type,l.attachedListener,Oe(l.optionsOrUseCapture))}u.nodeType!==3&&(e=n._observers,e!==null&&e.forEach(function(a){for(var c=0,i=0;i<p7.length;i++){var y=p7[i];(y.fragmentInstance!==n||y.observer!==a||y.instance!==u)&&(p7[c++]=y)}p7.length=c,a.observe(u)}),qf(u,n))}function om(u,n){var e=n._eventListeners;if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];u.removeEventListener(l.type,l.attachedListener,Oe(l.optionsOrUseCapture))}u.nodeType!==3&&(e=n._observers,e!==null&&e.forEach(function(a){typeof a.rootMargin=="string"?am(n,a,u):a.unobserve(u)}),u.reactFragments!=null&&u.reactFragments.delete(n))}function Nc(u){var n=u.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Nc(e),Ht(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}u.removeChild(e)}}function sm(u,n,e,t){for(;u.nodeType===1;){var l=e;if(u.nodeName.toLowerCase()!==n.toLowerCase()){if(!t&&(u.nodeName!=="INPUT"||u.type!=="hidden"))break}else if(t){if(!u[Ue])switch(n){case"meta":if(!u.hasAttribute("itemprop"))break;return u;case"link":if(a=u.getAttribute("rel"),a==="stylesheet"&&u.hasAttribute("data-precedence"))break;if(a!==l.rel||u.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||u.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||u.getAttribute("title")!==(l.title==null?null:l.title))break;return u;case"style":if(u.hasAttribute("data-precedence"))break;return u;case"script":if(a=u.getAttribute("src"),(a!==(l.src==null?null:l.src)||u.getAttribute("type")!==(l.type==null?null:l.type)||u.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&a&&u.hasAttribute("async")&&!u.hasAttribute("itemprop"))break;return u;default:return u}}else if(n==="input"&&u.type==="hidden"){var a=l.name==null?null:""+l.name;if(l.type==="hidden"&&u.getAttribute("name")===a)return u}else return u;if(u=s7(u.nextSibling),u===null)break}return null}function fm(u,n,e){if(n==="")return null;for(;u.nodeType!==3;)if((u.nodeType!==1||u.nodeName!=="INPUT"||u.type!=="hidden")&&!e||(u=s7(u.nextSibling),u===null))return null;return u}function Vf(u,n){for(;u.nodeType!==8;)if((u.nodeType!==1||u.nodeName!=="INPUT"||u.type!=="hidden")&&!n||(u=s7(u.nextSibling),u===null))return null;return u}function Dc(u){return u.data==="$?"||u.data==="$~"}function Mc(u){return u.data==="$!"||u.data==="$?"&&u.ownerDocument.readyState!=="loading"}function dm(u,n){var e=u.ownerDocument;if(u.data==="$~")u._reactRetry=n;else if(u.data!=="$?"||e.readyState!=="loading")n();else{var t=function(){n(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),u._reactRetry=t}}function s7(u){for(;u!=null;u=u.nextSibling){var n=u.nodeType;if(n===1||n===3)break;if(n===8){if(n=u.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return u}var Ic=null;function Xf(u){u=u.nextSibling;for(var n=0;u;){if(u.nodeType===8){var e=u.data;if(e==="/$"||e==="/&"){if(n===0)return s7(u.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}u=u.nextSibling}return null}function Kf(u){u=u.previousSibling;for(var n=0;u;){if(u.nodeType===8){var e=u.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return u;n--}else e!=="/$"&&e!=="/&"||n++}u=u.previousSibling}return null}function mm(u,n){function e(){t=!0}if(u.ownerDocument.activeElement===u)return!0;var t=!1;try{u.ownerDocument.addEventListener("focus",e,!0),(u.focus||HTMLElement.prototype.focus).call(u,n)}finally{u.ownerDocument.removeEventListener("focus",e,!0)}return t}function gm(u){Lf(function(){Lf(function(n){return u(n)})})}function jf(u,n,e){switch(n=_t(e),u){case"html":if(u=n.documentElement,!u)throw Error(s(452));return u;case"head":if(u=n.head,!u)throw Error(s(453));return u;case"body":if(u=n.body,!u)throw Error(s(454));return u;default:throw Error(s(451))}}function kf(u,n,e){for(var t in e){var l=e[t];e.hasOwnProperty(t)&&l!=null&&x0(u,n,t,null,U1,l)}e.dangerouslySetInnerHTML!=null&&(u.textContent=""),u.onclick===v7&&(u.onclick=null),Ht(u)}function Wc(u){for(var n=u.attributes;n.length;)u.removeAttributeNode(n[0]);Ht(u)}var f7=new Map,Jf=new Set;function Nt(u){if(typeof u.getRootNode=="function"){var n=u.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return u.nodeType===9?u:u.ownerDocument}var V7=$.d;$.d={f:ym,r:hm,D:Em,C:pm,L:bm,m:vm,X:Cm,S:Am,M:Tm};function ym(){var u=V7.f(),n=Zl();return u||n}function hm(u){var n=Jn(u);n!==null&&n.tag===5&&n.type==="form"?Fo(n):V7.r(u)}var we=typeof document>"u"?null:document;function Ff(u,n,e){var t=we;if(t&&typeof n=="string"&&n){var l=t7(n);l='link[rel="'+u+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),Jf.has(l)||(Jf.add(l),u={rel:u,crossOrigin:e,href:n},t.querySelector(l)===null&&(n=t.createElement("link"),vu(n,"link",u),su(n),t.head.appendChild(n)))}}function Em(u){V7.D(u),Ff("dns-prefetch",u,null)}function pm(u,n){V7.C(u,n),Ff("preconnect",u,n)}function bm(u,n,e){V7.L(u,n,e);var t=we;if(t&&u&&n){var l='link[rel="preload"][as="'+t7(n)+'"]';n==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+t7(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+t7(e.imageSizes)+'"]')):l+='[href="'+t7(u)+'"]';var a=l;switch(n){case"style":a=Le(u);break;case"script":a=ze(u)}if(!(f7.has(a)||(u=w({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:u,as:n},e),f7.set(a,u),t.querySelector(l)!==null||n==="style"&&t.querySelector(Dt(a))||n==="script"&&t.querySelector(Mt(a))))){var c=t.createElement("link");vu(c,"link",u),n==="style"&&(c[Bt]=!0,c.onload=c.onerror=function(){oi(c)}),su(c),t.head.appendChild(c)}}}function vm(u,n){V7.m(u,n);var e=we;if(e&&u){var t=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+t7(t)+'"][href="'+t7(u)+'"]',a=l;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=ze(u)}if(!f7.has(a)&&(u=w({rel:"modulepreload",href:u},n),f7.set(a,u),e.querySelector(l)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Mt(a)))return}t=e.createElement("link"),vu(t,"link",u),su(t),e.head.appendChild(t)}}}function Am(u,n,e){V7.S(u,n,e);var t=we;if(t&&u){var l=Fn(t).hoistableStyles,a=Le(u);n=n||"default";var c=l.get(a);if(!c){var i={loading:0,preload:null};if(c=t.querySelector(Dt(a)))i.loading=5;else{u=w({rel:"stylesheet",href:u,"data-precedence":n},e),(e=f7.get(a))&&Qc(u,e);var y=c=t.createElement("link");su(y),vu(y,"link",u),y._p=new Promise(function(S,I){y.onload=S,y.onerror=I}),y.addEventListener("load",function(){i.loading|=1}),y.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Fl(c,n,t)}c={type:"stylesheet",instance:c,count:1,state:i},l.set(a,c)}}}function Cm(u,n){V7.X(u,n);var e=we;if(e&&u){var t=Fn(e).hoistableScripts,l=ze(u),a=t.get(l);a||(a=e.querySelector(Mt(l)),a||(u=w({src:u,async:!0},n),(n=f7.get(l))&&Oc(u,n),a=e.createElement("script"),su(a),vu(a,"link",u),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},t.set(l,a))}}function Tm(u,n){V7.M(u,n);var e=we;if(e&&u){var t=Fn(e).hoistableScripts,l=ze(u),a=t.get(l);a||(a=e.querySelector(Mt(l)),a||(u=w({src:u,async:!0,type:"module"},n),(n=f7.get(l))&&Oc(u,n),a=e.createElement("script"),su(a),vu(a,"link",u),e.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},t.set(l,a))}}function $f(u,n,e,t){var l=(l=Z0.current)?Nt(l):null;if(!l)throw Error(s(446));switch(u){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(e=Le(e.href),n=Fn(l).hoistableStyles,t=n.get(e),t||(t={type:"style",instance:null,count:0,state:null},n.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){u=Le(e.href);var a=Fn(l).hoistableStyles,c=a.get(u);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(u,c),(a=l.querySelector(Dt(u)))?a._p||(c.instance=a,c.state.loading=5):(a=f7.get(u),a||(a={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},f7.set(u,a)),Sm(l,u,a,c.state))),n&&t===null)throw Error(s(528,""));return c}if(n&&t!==null)throw Error(s(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(e=ze(e),n=Fn(l).hoistableScripts,t=n.get(e),t||(t={type:"script",instance:null,count:0,state:null},n.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,u))}}function Le(u){return'href="'+t7(u)+'"'}function Dt(u){return'link[rel="stylesheet"]['+u+"]"}function u2(u){return w({},u,{"data-precedence":u.precedence,precedence:null})}function Sm(u,n,e,t){if(n=u.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Bt]!==!0){t.loading=1;return}}else n=u.createElement("link"),n[Bt]=!0,n.onload=n.onerror=oi.bind(null,n),vu(n,"link",e),su(n),u.head.appendChild(n);t.preload=n,n.addEventListener("load",function(){return t.loading|=1}),n.addEventListener("error",function(){return t.loading|=2})}function ze(u){return'[src="'+t7(u)+'"]'}function Mt(u){return"script[async]"+u}function n2(u,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var t=u.querySelector('style[data-href~="'+t7(e.href)+'"]');if(t)return n.instance=t,su(t),t;var l=w({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(u.ownerDocument||u).createElement("style"),su(t),vu(t,"style",l),Fl(t,e.precedence,u),n.instance=t;case"stylesheet":l=Le(e.href);var a=u.querySelector(Dt(l));if(a)return n.state.loading|=4,n.instance=a,su(a),a;t=u2(e),(l=f7.get(l))&&Qc(t,l),a=(u.ownerDocument||u).createElement("link"),su(a);var c=a;return c._p=new Promise(function(i,y){c.onload=i,c.onerror=y}),vu(a,"link",t),n.state.loading|=4,Fl(a,e.precedence,u),n.instance=a;case"script":return a=ze(e.src),(l=u.querySelector(Mt(a)))?(n.instance=l,su(l),l):(t=e,(l=f7.get(a))&&(t=w({},e),Oc(t,l)),u=u.ownerDocument||u,l=u.createElement("script"),su(l),vu(l,"link",t),u.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(t=n.instance,n.state.loading|=4,Fl(t,e.precedence,u));return n.instance}function Fl(u,n,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=t.length?t[t.length-1]:null,a=l,c=0;c<t.length;c++){var i=t[c];if(i.dataset.precedence===n)a=i;else if(a!==l)break}a?a.parentNode.insertBefore(u,a.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(u,n.firstChild))}function Qc(u,n){u.crossOrigin==null&&(u.crossOrigin=n.crossOrigin),u.referrerPolicy==null&&(u.referrerPolicy=n.referrerPolicy),u.title==null&&(u.title=n.title)}function Oc(u,n){u.crossOrigin==null&&(u.crossOrigin=n.crossOrigin),u.referrerPolicy==null&&(u.referrerPolicy=n.referrerPolicy),u.integrity==null&&(u.integrity=n.integrity)}var $l=null;function e2(u,n,e){if($l===null){var t=new Map,l=$l=new Map;l.set(e,t)}else l=$l,t=l.get(e),t||(t=new Map,l.set(e,t));if(t.has(u))return t;for(t.set(u,null),e=e.getElementsByTagName(u),l=0;l<e.length;l++){var a=e[l];if(!(a[Ue]||a[yu]||u==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var c=a.getAttribute(n)||"";c=u+c;var i=t.get(c);i?i.push(a):t.set(c,[a])}}return t}function wc(u,n,e){u=u.ownerDocument||u,u.head.insertBefore(e,n==="title"?u.querySelector("head > title"):null)}function _m(u,n,e){if(e===1||n.itemProp!=null)return!1;switch(u){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(u=n.disabled,typeof n.precedence=="string"&&u==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t2(u,n){return u==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function l2(u){return!(u.type==="stylesheet"&&(u.state.loading&3)===0)}function a2(u){return(u.width||100)*(u.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function r2(u,n){typeof n.decode=="function"&&(u.imgCount++,n.complete||(u.imgBytes+=a2(n),u.suspenseyImages.push(n)),u=Mm.bind(u),n.decode().then(u,u))}function Nm(u,n,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Le(t.href),a=n.querySelector(Dt(l));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=It.bind(u),n.then(u,u)),e.state.loading|=4,e.instance=a,su(a);return}a=n.ownerDocument||n,t=u2(t),(l=f7.get(l))&&Qc(t,l),a=a.createElement("link"),su(a);var c=a;c._p=new Promise(function(i,y){c.onload=i,c.onerror=y}),vu(a,"link",t),e.instance=a}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(u.count++,e=It.bind(u),n.addEventListener("load",e),n.addEventListener("error",e))}}var ua=0;function Dm(u,n){return u.stylesheets&&u.count===0&&ea(u,u.stylesheets),0<u.count||0<u.imgCount?function(e){var t=setTimeout(function(){if(u.stylesheets&&ea(u,u.stylesheets),u.unsuspend){var a=u.unsuspend;u.unsuspend=null,a()}},6e4+n);0<u.imgBytes&&ua===0&&(ua=62500*Z1());var l=setTimeout(function(){if(u.waitingForImages=!1,u.count===0&&(u.stylesheets&&ea(u,u.stylesheets),u.unsuspend)){var a=u.unsuspend;u.unsuspend=null,a()}},(u.imgBytes>ua?50:800)+n);return u.unsuspend=e,function(){u.unsuspend=null,clearTimeout(t),clearTimeout(l)}}:null}function c2(u){if(u.count===0&&(u.imgCount===0||!u.waitingForImages)){if(u.stylesheets)ea(u,u.stylesheets);else if(u.unsuspend){var n=u.unsuspend;u.unsuspend=null,n()}}}function It(){this.count--,c2(this)}function Mm(){this.imgCount--,c2(this)}var na=null;function ea(u,n){u.stylesheets=null,u.unsuspend!==null&&(u.count++,na=new Map,n.forEach(Im,u),na=null,It.call(u))}function Im(u,n){if(!(n.state.loading&4)){var e=na.get(u);if(e)var t=e.get(null);else{e=new Map,na.set(u,e);for(var l=u.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<l.length;a++){var c=l[a];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(e.set(c.dataset.precedence,c),t=c)}t&&e.set(null,t)}l=n.instance,c=l.getAttribute("data-precedence"),a=e.get(c)||t,a===t&&e.set(null,l),e.set(c,l),this.count++,t=It.bind(this),l.addEventListener("load",t),l.addEventListener("error",t),a?a.parentNode.insertBefore(l,a.nextSibling):(u=u.nodeType===9?u.head:u,u.insertBefore(l,u.firstChild)),n.state.loading|=4}}var Ge={$$typeof:Y,Provider:null,Consumer:null,_currentValue:Y0,_currentValue2:Y0,_threadCount:0};function Wm(u,n,e,t,l,a,c,i,y){this.tag=1,this.containerInfo=u,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ma(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.hiddenUpdates=ma(null),this.identifierPrefix=t,this.onUncaughtError=l,this.onCaughtError=a,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.transitionTypes=null,this.incompleteTransitions=new Map}function i2(u,n,e,t,l,a,c,i,y,S,I,z){return u=new Wm(u,n,e,c,y,S,I,z,i),n=1,a===!0&&(n|=24),a=Gu(3,null,null,n),u.current=a,a.stateNode=u,n=Ka(),n.refCount++,u.pooledCache=n,n.refCount++,a.memoizedState={element:t,isDehydrated:e,cache:n},Fa(a),u}function o2(u){return u?(u=ie,u):ie}function s2(u,n,e,t,l,a){l=o2(l),t.context===null?t.context=l:t.pendingContext=l,t=ln(n),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=an(u,t,n),e!==null&&(Yu(e,u,n),rt(e,u,n))}function f2(u,n){if(u=u.memoizedState,u!==null&&u.dehydrated!==null){var e=u.retryLane;u.retryLane=e!==0&&e<n?e:n}}function Lc(u,n){f2(u,n),(u=u.alternate)&&f2(u,n)}function d2(u){if(u.tag===13||u.tag===31){var n=Wn(u,67108864);n!==null&&Yu(n,u,67108864),Lc(u,67108864)}}function m2(u){if(u.tag===13||u.tag===31){var n=ku();n=ga(n);var e=Wn(u,n);e!==null&&Yu(e,u,n),Lc(u,n)}}var xe=!0;function Qm(u,n,e,t){var l=U.T;U.T=null;var a=$.p;try{$.p=2,zc(u,n,e,t)}finally{$.p=a,U.T=l}}function Om(u,n,e,t){var l=U.T;U.T=null;var a=$.p;try{$.p=8,zc(u,n,e,t)}finally{$.p=a,U.T=l}}function zc(u,n,e,t){if(xe){var l=Gc(t);if(l===null)hc(u,n,t,ta,e),y2(u,t);else if(Lm(l,u,n,e,t))t.stopPropagation();else if(y2(u,t),n&4&&-1<wm.indexOf(u)){for(;l!==null;){var a=Jn(l);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var c=_n(a.pendingLanes);if(c!==0){var i=a;for(i.pendingLanes|=2,i.entangledLanes|=2;c;){var y=1<<31-Uu(c);i.entanglements[1]|=y,c&=~y}W7(a),(O0&6)===0&&(Hl=Bu()+500,Ct(0))}}break;case 31:case 13:i=Wn(a,2),i!==null&&Yu(i,a,2),Zl(),Lc(a,2)}if(a=Gc(t),a===null&&hc(u,n,t,ta,e),a===l)break;l=a}l!==null&&t.stopPropagation()}else hc(u,n,t,null,e)}}function Gc(u){return u=Aa(u),xc(u)}var ta=null;function xc(u){if(ta=null,u=Nn(u),u!==null){var n=A(u);if(n===null)u=null;else{var e=n.tag;if(e===13){if(u=p(n),u!==null)return u;u=null}else if(e===31){if(u=Q(n),u!==null)return u;u=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;u=null}else n!==u&&(u=null)}}return ta=u,null}function g2(u){switch(u){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z2()){case Jc:return 2;case Fc:return 8;case Gt:case V2:return 32;case $c:return 268435456;default:return 32}default:return 32}}var Pc=!1,pn=null,bn=null,vn=null,Wt=new Map,Qt=new Map,An=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y2(u,n){switch(u){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Wt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function Ot(u,n,e,t,l,a){return u===null||u.nativeEvent!==a?(u={blockedOn:n,domEventName:e,eventSystemFlags:t,nativeEvent:a,targetContainers:[l]},n!==null&&(n=Jn(n),n!==null&&d2(n)),u):(u.eventSystemFlags|=t,n=u.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),u)}function Lm(u,n,e,t,l){switch(n){case"focusin":return pn=Ot(pn,u,n,e,t,l),!0;case"dragenter":return bn=Ot(bn,u,n,e,t,l),!0;case"mouseover":return vn=Ot(vn,u,n,e,t,l),!0;case"pointerover":var a=l.pointerId;return Wt.set(a,Ot(Wt.get(a)||null,u,n,e,t,l)),!0;case"gotpointercapture":return a=l.pointerId,Qt.set(a,Ot(Qt.get(a)||null,u,n,e,t,l)),!0}return!1}function h2(u){var n=Nn(u.target);if(n!==null){var e=A(n);if(e!==null){if(n=e.tag,n===13){if(n=p(e),n!==null){u.blockedOn=n,ri(u.priority,function(){m2(e)});return}}else if(n===31){if(n=Q(e),n!==null){u.blockedOn=n,ri(u.priority,function(){m2(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){u.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}u.blockedOn=null}function la(u){if(u.blockedOn!==null)return!1;for(var n=u.targetContainers;0<n.length;){var e=Gc(u.nativeEvent);if(e===null){e=u.nativeEvent;var t=new e.constructor(e.type,e);va=t,e.target.dispatchEvent(t),va=null}else return n=Jn(e),n!==null&&d2(n),u.blockedOn=e,!1;n.shift()}return!0}function E2(u,n,e){la(u)&&e.delete(n)}function zm(){Pc=!1,pn!==null&&la(pn)&&(pn=null),bn!==null&&la(bn)&&(bn=null),vn!==null&&la(vn)&&(vn=null),Wt.forEach(E2),Qt.forEach(E2)}function aa(u,n){u.blockedOn===n&&(u.blockedOn=null,Pc||(Pc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zm)))}var ra=null;function p2(u){ra!==u&&(ra=u,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ra===u&&(ra=null);for(var n=0;n<u.length;n+=3){var e=u[n],t=u[n+1],l=u[n+2];if(typeof t!="function"){if(xc(t||e)===null)continue;break}var a=Jn(e);a!==null&&(u.splice(n,3),n-=3,br(a,{pending:!0,data:l,method:e.method,action:t},t,l))}}))}function Pe(u){function n(y){return aa(y,u)}pn!==null&&aa(pn,u),bn!==null&&aa(bn,u),vn!==null&&aa(vn,u),Wt.forEach(n),Qt.forEach(n);for(var e=0;e<An.length;e++){var t=An[e];t.blockedOn===u&&(t.blockedOn=null)}for(;0<An.length&&(e=An[0],e.blockedOn===null);)h2(e),e.blockedOn===null&&An.shift();if(e=(u.ownerDocument||u).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],c=l[zu]||null;if(typeof a=="function")c||p2(e);else if(c){var i=null;if(a&&a.hasAttribute("formAction")){if(l=a,c=a[zu]||null)i=c.formAction;else if(xc(l)!==null)continue}else i=c.action;typeof i=="function"?e[t+1]=i:(e.splice(t,3),t-=3),p2(e)}}}function b2(){function u(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,l=null;return navigation.addEventListener("navigate",u),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",u),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Rc(u){this._internalRoot=u}ca.prototype.render=Rc.prototype.render=function(u){var n=this._internalRoot;if(n===null)throw Error(s(409));var e=n.current,t=ku();s2(e,t,u,n,null,null)},ca.prototype.unmount=Rc.prototype.unmount=function(){var u=this._internalRoot;if(u!==null){this._internalRoot=null;var n=u.containerInfo;s2(u.current,2,null,u,null,null),Zl(),n[kn]=null}};function ca(u){this._internalRoot=u}ca.prototype.unstable_scheduleHydration=function(u){if(u){var n=ai();u={blockedOn:null,target:u,priority:n};for(var e=0;e<An.length&&n!==0&&n<An[e].priority;e++);An.splice(e,0,u),e===0&&h2(u)}};var v2=m.version;if(v2!=="19.3.0")throw Error(s(527,v2,"19.3.0"));$.findDOMNode=function(u){var n=u._reactInternals;if(n===void 0)throw typeof u.render=="function"?Error(s(188)):(u=Object.keys(u).join(","),Error(s(268,u)));return u=f(n),u=u!==null?d(u):null,u=u===null?null:u.stateNode,u};var Gm={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{Ye=ia.inject(Gm),Hu=ia}catch{}}return wt.createRoot=function(u,n){if(!C(u))throw Error(s(299));var e=!1,t="",l=is,a=os,c=ss;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=i2(u,1,!1,null,null,e,t,null,l,a,c,b2),u[kn]=n.current,yc(u),new Rc(n)},wt.hydrateRoot=function(u,n,e){if(!C(u))throw Error(s(299));var t=!1,l="",a=is,c=os,i=ss,y=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.formState!==void 0&&(y=e.formState)),n=i2(u,1,!0,n,e??null,t,l,y,a,c,i,b2),n.context=o2(null),e=n.current,t=ku(),t=ga(t),l=ln(t),l.callback=null,an(e,l,t),e=t,n.current.lanes=e,He(n,e),W7(n),u[kn]=n.current,yc(u),new ca(n)},wt.version="19.3.0",wt}var M2;function Zm(){if(M2)return Bc.exports;M2=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(m){console.error(m)}}return o(),Bc.exports=qm(),Bc.exports}var Vm=Zm();const R0={company:"智造示范工厂科技有限公司",totalDocs:155,controlledItems:429,qualityRecords:81,effectiveRate:"100%",compiledAt:"2026-10-07",source:"受控文件台账与 ISO/IATF 程序文件库"},Tn=[{id:"qp:1",doc_code:"1",doc_name:".进料检验控制程序V1.4(1)",rev:"V1.4",department:"企业管理部",module:"qp",npi_phase:"MP",summary:'进料检验 QPP2009 · AI+《进料检验控制程序》两个月量化行动路径    *{box-sizing:border-box;margin:0;padding:0} body{font-family:"Microsoft YaHei","PingFang SC",sans-serif;background:#f0f3f9;color:#1f2937;line-height:1.6} .wrap{max-width:1180px;margin:0 auto;padding:28px 20px 60px} .hero{background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;border-radius:14p',citations:["QPRZ031","QPP200","QP550"],tags:["IQC"],raw_file:"1.进料检验控制程序V1.4(1).html",body_snippet:` 
   
 
 进料检验 QPP2009 · AI+《进料检验控制程序》两个月量化行动路径 
 
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:"Microsoft YaHei","PingFang SC",sans-serif;background:#f0f3f9;color:#1f2937;line-height:1.6}
.wrap{max-width:1180px;margin:0 auto;padding:28px 20px 60px}
.hero{background:linear-gradient(135deg,#1e3a8a,#2563eb);color:#fff;border-radius:14px;padding:30px 34px;margin-bottom:22px}
.hero h1{font-size:26px;letter-spacing:1px}
.hero p{opacity:.85;margin-top:8px;font-size:13px}
h2{font-size:19px;color:#1e3a8a;margin:34px 0 12px;padding-left:12px;border-left:5px solid #2563eb}
h3{font-size:15px;color:#1e3a8a;margin:18px 0 8px}
.card{background:#fff;border-radius:12px;padding:18px 20px;box-shadow:0 1px 4px rgba(15,23,42,.08);margin-bottom:14px}
.kpis{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:14px 0}
.kpi{background:#fff;border-radius:12px;padding:14px 8px;text-align:center;box-shadow:0 1px 4px rgba(15,23,42,.08)}
.kn{font-size:22px;font-weight:700;color:#1e3a8a} .kn small{font-size:12px;font-weight:400}
.kl{font-size:11px;color:#64748b;margin-top:4px}
.pipe{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:6px 0 2px}
.pipe span{background:#e8eefc`},{id:"cases8d:8D-20251204-01",doc_code:"8D-20251204-01",doc_name:"机柜底部非金属异物_8D报告",rev:"A.0",department:"品质保证部 (8D专家组)",module:"cases8d",npi_phase:"MP",summary:"8D根本原因与防呆举措：针对突发客诉质量异常，实施D3临时围堵保护客户，经鱼骨图与5-Why分析锁定人机料法环根因，落实D5纠正措施与D6防呆验证，修订现场SOP规避同类不良。",citations:[],tags:["8D"],raw_file:"8D-20251204-01_机柜底部非金属异物_8D报告.docx",body_snippet:`纠正措施报告 (8D Report)
报告编号
8D-20251204-01
投诉主题
A客户OBA检验发现机柜底部有非金属异物（漆皮），不良SN：XX25B0106547
投诉日期
2025-12-04
报告日期
2025-12-04
投诉数量
1台（不良SN：XX25B0106547）
不良比例
/（零星不良，库存60台无同类）
Date Code
/
客户名称
A客户
客户料号
0211XXXX-003
本厂料号
0211XXXX-003
责任部门
生产（PRD）、品质（QE）、工程（PE）
发出人
QE
核准人
D1 小组成立
组长
QE（品质）
成员
职责
部门
PRD（生产）
工装排查、现场改善与专项检验执行
生产部
PE（工程）
工装制作标准化、SOP优化与图纸完善
工程部
QE（品质）
SIP优化、MSA测试与培训赋能
品质部
D2 问题描述
What（什么问题）
一车间生产0211XXXX-003产品，A客户OBA检验发现机柜底部有非金属异物（漆皮）；不良SN：XX25B0106547。
Where（哪里发生）
机柜底部（工位7/8使用工装安装方通处）
When（何时发生）
2025-12-04
Who（谁发现）
A客户OBA检验发现
Why（为何是问题）
机柜底部存在非金属异物（漆皮），影响产品质量与外观，客户不接受。
How（如何发现）
A客户OBA检验时机柜底部发现非金属异物（漆皮）。
How Many（多少数量）
1台（不良SN：XX25B0106547）；排查库存60台，无同类问题，属零星不良。
IS（是什么情况）
机柜底部存在非金属异物（工装切口边脱落的漆皮）。
IS NOT（不是什么情况）
并非批量问题（库存60台无同类）；漆皮来源于工装涂层而非产品本身涂层；异物为非金属（漆皮），排除螺钉等金属多余物。
D3 临时围堵措施
局部紧急处置
排查结论
数量
排查记录
局部紧急处置
现场不良
发现风险
1台
排查库存60台
隔离并清洁不良机柜；库存实施底部异物检查（拍打法）（负责人：PRD/QE；完成日期：2025-12-04；恢复条件：排查完成无同类问题）
客户库存
无同类
60台
排查库存60台
库存60台全数排查，无同类问题（负责人：PRD/QE；完成日期：2025-12-04；恢复条件：无同类不良）
在途
待排查
/
/
在途机柜底部异物检查（负责人：PRD/QE；完成日期：2025-12-04；恢复条件：检查完成无同类）
公司库存
无同类
60台
库存排查无同类
公司库存60台排查无同类（已完成）
在制
发现风险
在制机柜
/
在制机柜增加底部异物检查（拍打法）（负责人：PRD/QE；完成日期：2025-12-04；恢复条件：检验执行无同类流出）
阻断不良继续产生（生产过程临时控制）
措施
负责人
完成日期
恢复条件
排查`},{id:"cases8d:8D-20251209-01",doc_code:"8D-20251209-01",doc_name:"机柜顶部拉钉脱落_8D报告",rev:"A.0",department:"品质保证部 (8D专家组)",module:"cases8d",npi_phase:"DVT",summary:"8D根本原因与防呆举措：针对突发客诉质量异常，实施D3临时围堵保护客户，经鱼骨图与5-Why分析锁定人机料法环根因，落实D5纠正措施与D6防呆验证，修订现场SOP规避同类不良。",citations:["GB126"],tags:["8D","IQC"],raw_file:"8D-20251209-01_机柜顶部拉钉脱落_8D报告.docx",body_snippet:`纠正措施报告 (8D Report)
报告编号
8D-20251209-01
投诉主题
A客户OBA检验发现机柜顶部拉钉脱落，不良SN：SXX25B01066111P52210480-001
投诉日期
2025-12-09
报告日期
2025-12-09
投诉数量
1台（不良SN：SXX25B01066111P52210480-001）
不良比例
/
Date Code
/
客户名称
A客户
客户料号
0211XXXX-003
本厂料号
0211XXXX-003
责任部门
品质（QE）、工程（PE）
发出人
QE
核准人
D1 小组成立
组长
QE（品质）
成员
职责
部门
QE（品质）
供应商反馈、SIP优化与检验方法三对齐
品质部
PE（工程）
SOP优化、拉钉检验方法明确
工程部
SQE / IQC
供应商改善跟进、来料长度与鼓头成形管控
品质部
D2 问题描述
What（什么问题）
一车间生产0211XXXX-003产品，A客户OBA检验发现机柜顶部拉钉脱落；不良SN：SXX25B01066111P52210480-001。
Where（哪里发生）
机柜顶部（顶盖组件，安装拉钉/铆钉处）
When（何时发生）
2025-12-09
Who（谁发现）
A客户OBA检验发现
Why（为何是问题）
机柜顶部拉钉脱落，导致顶盖组件紧固失效，客户不接受，须回溯根因并改善。
How（如何发现）
A客户OBA检验时发现机柜顶部拉钉脱落。
How Many（多少数量）
1台（不良SN：SXX25B01066111P52210480-001）。
IS（是什么情况）
机柜顶部拉钉脱落，钉体未形成合格的“开花”鼓头，紧固力不足。
IS NOT（不是什么情况）
并非安装方法问题：按SOP安装1PC机柜加强件到顶盖前段，用2颗GB12618-90-4X10-AL开口型圆头铆钉紧固；根因为拉钉来料钉体长度不足。
D3 临时围堵措施
局部紧急处置
排查结论
数量
排查记录
局部紧急处置
现场不良
发现风险
1台
排查在制/库存同批次拉钉
对在制及库存机柜顶部拉钉实施手指触摸法专项检查（负责人：QE/生产；完成日期：2025-12-09；恢复条件：专项检查完成，无松动拉钉流出）
客户库存
待排查
/
/
客户处同类机柜顶部拉钉排查（负责人：QE；完成日期：2025-12-09；恢复条件：排查完成无同类）
在途
待排查
/
/
在途机柜顶部拉钉检查（负责人：QE；完成日期：2025-12-09；恢复条件：检查完成无同类）
公司库存
待排查
/
/
公司库存机柜顶部拉钉检查（负责人：QE；完成日期：2025-12-09；恢复条件：检查完成无同类）
在制
发现风险
在制机柜
/
在制机柜拉钉增加手指触摸法检查（负责人：生产/QE；完成日期：2025-12-09；恢复条件：检验执行无松动流`},{id:"cases8d:8D-20251212-01",doc_code:"8D-20251212-01",doc_name:"机柜内顶部门磁线缆破损_8D报告",rev:"A.0",department:"品质保证部 (8D专家组)",module:"cases8d",npi_phase:"MP",summary:"8D根本原因与防呆举措：针对突发客诉质量异常，实施D3临时围堵保护客户，经鱼骨图与5-Why分析锁定人机料法环根因，落实D5纠正措施与D6防呆验证，修订现场SOP规避同类不良。",citations:["WM253"],tags:["8D"],raw_file:"8D-20251212-01_机柜内顶部门磁线缆破损_8D报告.docx",body_snippet:`纠正措施报告 (8D Report)
报告编号
8D-20251212-01
投诉主题
XXXX OBA检验发现机柜内顶部门磁线缆破损（不良SN：XXXX25B0106684）
投诉日期
2025-12-12
报告日期
2025-12-12
投诉数量
1台（不良SN：XXXX25B0106684）
不良比例
/（零星不良）
Date Code
/
客户名称
XXXX
客户料号
0211XXXX-001
本厂料号
0211XXXX-001
责任部门
生产、品质、工程
发出人
QE
核准人
D1 小组成立
组长
QE（品质）
成员
职责
部门
PRD（生产）
现场与库存排查、员工赋能与举手反馈管理
生产部
QE（品质）
供应商改善推进、SIP优化、MSA与三对齐
品质部
PE（工程）
SOP优化、CS物料检验标准完善
工程部
D2 问题描述
What（什么问题）
一车间生产0211XXXX-001产品，XXXX OBA检验发现机柜内顶部门磁线缆破损；不良SN：XXXX25B0106684。
Where（哪里发生）
机柜内顶部门磁线缆（走线位置在顶部内侧，较隐蔽）
When（何时发生）
2025-12-12
Who（谁发现）
XXXX OBA检验发现
Why（为何是问题）
机柜内顶部门磁线缆破损，影响产品外观与功能可靠性，客户不接受，须回溯根因并改善。
How（如何发现）
XXXX OBA检验时发现机柜内顶部门磁线缆破损。
How Many（多少数量）
1台（不良SN：XXXX25B0106684）；对现场与库存0211编码机柜进行排查。
IS（是什么情况）
机柜内顶部门磁线缆存在轻微破损（破损面积小、位置隐蔽），未被前道工序与检验拦截。
IS NOT（不是什么情况）
并非制程引入：拆包、拆扎带理线、安装、绑扎、测试全流程回放均无造成线缆破损的风险，判定为线缆来料不良。
D3 临时围堵措施
局部紧急处置
排查结论
数量
排查记录
局部紧急处置
现场不良
发现风险
在制机柜
对现场在制0211编码机柜排查
线缆外观（破损）专项检验并隔离确认（负责人：生产/品质；完成日期：2025-12-13；恢复条件：排查完成无同类不良）
客户库存
发现风险
客户库存机柜
客户库存排查并输出排查清单
对客户库存0211编码机柜排查，输出排查清单（负责人：品质；完成日期：2025-12-13；恢复条件：排查清单输出，无同类不良）
在途
发现风险
在途机柜
在途机柜排查
对在途机柜实施拦截排查（负责人：生产/品质；完成日期：2025-12-13；恢复条件：排查完成无同类不良）
公司库存
发现风险
公司库存机柜
库存0211编码机柜排查
对公司库存0211编码机柜实施排查（负责人：品质；完成日期：2025-12-13；恢复条件：排查完成无同类不良）
在制
发现风险
在制机柜
在制增加线缆`},{id:"cases8d:8D-20260316-01",doc_code:"8D-20260316-01",doc_name:"条码回传错误_8D报告",rev:"A.0",department:"品质保证部 (8D专家组)",module:"cases8d",npi_phase:"DVT",summary:"8D根本原因与防呆举措：针对突发客诉质量异常，实施D3临时围堵保护客户，经鱼骨图与5-Why分析锁定人机料法环根因，落实D5纠正措施与D6防呆验证，修订现场SOP规避同类不良。",citations:["XX261","XX263"],tags:["8D","BTS"],raw_file:"8D-20260316-01_BTS条码回传错误_8D报告.docx",body_snippet:`纠正措施报告 (8D Report)
报告编号
8D-20260316-01
投诉主题
A客户质量保证部反馈：EMS回传A客户的条码数据中存在小写字符，要求条码字符全部为大写
投诉日期
2026-03-16
报告日期
2026-03-16
投诉数量
42条（异常条码）
不良比例
0.07%（42/60520）
Date Code
/
客户名称
A客户
客户料号
/
本厂料号
0107XX-057
责任部门
IT、品质
发出人
QE
核准人
D1 小组成立
组长
QE（品质）
成员
职责
部门
IT（系统/接口）
BTS系统校验逻辑优化、数据排查与纠正
IT部
QC
回传数据批量校验、检查记录留存
品质部
QE
改善措施验证、横展与闭环管理
品质部
D2 问题描述
What（什么问题）
A客户质量保证部反馈，EMS回传A客户的条码数据中存在小写字符，客户要求条码字符全部为大写；不良SN：XX2610145618、XX2630033519、XX2630033518。
Where（哪里发生）
BTS系统数据回传环节（数据传输、接口解析及数据库存储过程）
When（何时发生）
2026-03-16（客户反馈日期）
Who（谁发现）
A客户质量保证部（发现并反馈）
Why（为何是问题）
依据A客户《DKBA 14042-2024.01 单板&模块类本体ID标签条码规范V1.6》3.1条，条码与明文中出现的数字、字母均为半角大写；存在小写字符即不符合客户规范。
How（如何发现）
客户质量保证部对回传数据校验时发现条码字符存在小写，反馈EMS厂家改善。
How Many（多少数量）
排查2026年机柜回传数据共60520条，发现42条异常条码，不良率约0.07%。
IS（是什么情况）
BTS系统回传客户的SN数据中存在小写字符（42条），不符合全大写要求。
IS NOT（不是什么情况）
并非BTS入库扫描环节引入：扫描录入均为大写，手动改小写系统报错无法录入，调取CCD实物照片为大写，入库环节无异常。
D3 临时围堵措施
局部紧急处置
排查结论
数量
排查记录
局部紧急处置
现场不良
发现风险
42条
排查2026年回传数据60520条
对42条异常条码完成纠正并重新回传客户（负责人：IT/QC/QE；完成日期：2026-03-17；恢复条件：异常条码全部纠正并经客户确认）
客户库存
不适用
/
/
/
在途
不适用
/
/
/
公司库存
不适用
/
/
/
在制
发现风险
新增回传数据
/
回传前实施人工批量校验，异常条码拦截并暂缓回传（负责人：IT；完成日期：2026-03-18；恢复条件：系统校验逻辑上线并验证有效）
阻断不良继续产生（生产过程临时控制）
措施
负责人
完成日期
恢复条件
立即排查2026年全部回传数据（60520条），对42条异常条码完成纠正并重`},{id:"qp:EHPQG039",doc_code:"EHPQG039",doc_name:"环安监视和测量控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r环安监视和测量控制程序\r\r\r文件类别\x07□质量  ■环境  ■职业健康安全",citations:["HPRZ039","HPQG039"],tags:["NPI"],raw_file:"EHPQG039 环安监视和测量控制程序A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r环安监视和测量控制程序\r\r\r文件类别\x07□质量  ■环境  ■职业健康安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07EHPQG039\x07\x07文件版本\x07A.0\x07页数\x07共 6页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘 丽 珊\r\r审 核 人 ：何 先 品\r\r批 准 人 ：李    洋    \r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r编制/修定日期：2025-04-16\x07发布日期：2025-04-21\x07\x07文件修订履历管理\x07\x07版本/版次\x07更改内容摘要\x07更改章节号\x07优化人\x07修订日期\x07\x07A.1\x07将编号“EHPRZ039”改为“EHPQG039”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-16\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的 \r了解和掌握环境安全管理体系各过程的运行情况，为体系的持续改进提供证据。\r2.0范围	\v适用于环境安全管理体系中的重大环境因素与危险源、运行控制、环境安全目标和指标、环境安全管理方案的执行以及与环境安全法律法规的符合情况。\r3.0定义\v环安绩效：环安目标、指标，环安管理方案运行及实施的效果和法律法规的遵守情况。\r4.0职责与权限 \r4.1各部门：负责本部门的重大环境因素与危险源的影响情况例行监测；\r4.2企业管理部：负责公司办公区域（不"},{id:"qp:HPQG036",doc_code:"HPQG036",doc_name:"危险源辨识与风险评价控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r危险源辨识与风险评价控制程序\r\r文件类别\x07□质量  □环境  ■职业健康安",citations:["HPRZ036"],tags:["NPI"],raw_file:"HPQG036 危险源辨识与风险评价控制程序A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r危险源辨识与风险评价控制程序\r\r文件类别\x07□质量  □环境  ■职业健康安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07HPRZ036\x07\x07文件版本\x07A.0\x07页数\x07共 8页\x07\x07\r  编制部门 ：企业管理部\r\r编制/修定：刘 丽 珊  \r\r审 核 人 ：何 先 品\r\r批 准 人 ：李    洋\r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                           \r编制/修定日期：2025-04-16                     发布日期：2025-04-21\r文件修订履历管理\x07\x07版本/版次\x07更改内容摘要\x07更改章节号\x07优化人\x07修订日期\x07\x07A.0\x07将编号“HPRZ036”改为“HPQG036”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-16\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r为了辩识和评价分析组织活动、产品和服务过程中的职业健康安全风险源,并确定重大风险，选择合理可靠的风险控制和削减措施，对其实施有效控制，制定本程序。\r2.0范围\r适用于本公司各部门生产活动及相关活动过程中的危险源辨识和风险评价的管理。\r3.0定义\r3.1事件：发生或"},{id:"qp:QPCG023",doc_code:"QPCG023",doc_name:"供应商开发管理程序",rev:"A.0",department:"采购部",module:"qp",npi_phase:"EVT",summary:"智造示范工厂科技有限公司Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                 供应商管理程序 文件类别 ■质量  □环安  □健康安全  □其他 文件等级 □一级文件  ■二级文件  □三级文件 文件编号 QPCG023 文件版本 B.8 页数 共20页 编制部门 ：采 购 部 编制/修定：林 兰 芽 审 核 人 ：潘 熙 奎 批 准 人 ：曾    珍 涉及部门： □总经办   ■品质部    ■财务部   □PMC 部    □工艺准备部    ■工程部   ■采购部    □物流部   ■业务部    □",citations:["ISO140","NGNG007","ISO900","QPCG024"],tags:["NPI","PCN","物料认证"],raw_file:"QPCG023 供应商管理程序B.8 .docx",body_snippet:` 智造示范工厂科技有限公司Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
供应商管理程序
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPCG023
文件版本
B.8
页数
共20页
编制部门 ：采 购 部
编制/修定：林 兰 芽
审 核 人 ：潘 熙 奎
批 准 人 ：曾    珍
涉及部门：
□总经办   ■品质部    ■财务部   □PMC 部    □工艺准备部   
■工程部   ■采购部    □物流部   ■业务部    □企业管理部□电源总装事业部    □逆变器事业部     □喷涂事业部     □储能事业部   
□微模块事业部      □新业务事业部     □结构事业部     □NPI工厂
编制/修定日期：2025-09-19                        发布日期：2025-09-26
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.5
更换文件编号，升了个版本
/
[质量专员]
2021-10-18
A.6
章节3.5增加了《供应商CSR协议》，优化了8.10 供应商风险异常沟通渠道及工作机制
8.10
[质量专员]
2022-07-30
A.7
1.合并原文件供应商开发管理程序，将供应商开发及管理章节进行细分说明
2.增加QSA和QPA稽查表单
11.0/
17.0
[质量专员]
2023-03-27
A.8
8.0条款里增加了关键物料与产品强电安全准入基线
17.0 不合作供应商淘汰申请
8.0/17.0
[质量专员]
2023-08-18
A.9
8.12条款增加供应商稽核分数考核应用
17 条款增加供应商分层分级稽核要求
8.12/17
[质量专员]
2023-12-01
A.10
8.12条款增加投诉，PCN违规，批量不合格考核
8.12
[质量专员]
2023-12-6
B.0
修订QPA、QSA、三防、强电体系稽查表
/
[质量专员]
2024-03-04
B.1
8.3条款里增加了审查供应商资质的真实性
3.29
[质量专员]
2024-4-1
B.2
新增《CSR稽查表》表单
/
[质量专员]
2024-06-24
B.3
12.0条款里增加了审查代理证真伪
12.0
[质量专员]
2024-07-24
B.4
15.条款里增加了供应商限制与退出机制/
8.15.0
[质量专员]
2024-12-16
B.5
12.0条款里增加品质部SQE供应商质量表现考核
15.0优化供应商考核结果规则
16.0增加供应商稽查规则
8.12./
8.15
8.16
[质量专员]
2025-02`},{id:"qp:QPCG024",doc_code:"QPCG024",doc_name:"采购控制程序",rev:"A.4",department:"采购部",module:"qp",npi_phase:"EVT",summary:`目的
为使本公司采购作业有所遵循，物料有所控制，达到提供适质、适价、适时、适量、适地采购职能，确保公司采购的物料均能符合要求条件。
2.0 范围
适用于本公司所有直接性生产物料及间接性生产物料
3.0 定义`,citations:["QPWL043","WICG002","QPCG023","QPPZ009","QPPZ027","WICG001"],tags:["IQC"],raw_file:"QPCG024采购控制程序.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
采购控制程序
文件类别
□质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPCG024
文件版本
A.4
页数
共 10页
编制部门 ：采购部  
编制/修定：[质量专员]
审 核 人 ：[质量专员]
批 准 人 ：曾珍
涉及部门：
□总经办   ■业务/PMC   □物流部   □设备部    ■工程部    ■品质部
□结构事业部      □逆变器事业部    □电源总装事业部    □微模块事业部
□人资部   ■采购部    ■财务部    □新业务开发部
                                                                       
编制/修定日期：2021-06-10               发布日期： 2021-06-20
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.4
更换文件编码，升级版本
1.0 目的
为使本公司采购作业有所遵循，物料有所控制，达到提供适质、适价、适时、适量、适地采购职能，确保公司采购的物料均能符合要求条件。
2.0 范围
适用于本公司所有直接性生产物料及间接性生产物料
3.0 定义
   3．1 采购价格审批小组：由采购部、工程部、研发部和财务部等各部门领导组成的小组
3．2新物料：第一次使用的没有价格认证的物料。
4.0 职责和权限
4.1 工程部：
4.1.1  BOM和图面制作
4.1.2  《新物料清单》提供
4.1.3  物料目标单价、EMS业务客户授权单价、转卖物料清单及单价的提供
4.1.4  关键物料和外委物料单价的成本核算
4.2 PMC物控组：
4.2.1 物料需求计划的申请。
4.2.2物料齐料进度跟进及采购交期的确认
4.2.3受控物料通知交货进度的管控
  4.3采购部
4.3.1采购供管员：新物料价格认证，物料品质异常的协助处理，预付款的申请和冲销，采购下单员无法处理的异常由采购员告之供管员协助处理。
4.3.2采购下单员：负责采购订单的制`},{id:"qp:QPGC025",doc_code:"QPGC025",doc_name:"工艺设计更改控制程序",rev:"A.9",department:"工程部",module:"qp",npi_phase:"EVT",summary:`目的
使本公司EC变更处于受控状态、EC变更得到有效执行、EC相关物料得到及时处理。
2.0 范围
适用于客户变更及本公司内部变更。
3.0 定义`,citations:[],tags:["PCN"],raw_file:"QPGC025工艺设计更改控制程序A.9.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                    
                                                                                                                                                             
                     
工艺设计更改控制程序
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPGC025
文件版本
A.9
页数
共16页
编制部门 ：工 程 部
编制/修定：罗 基 成
审 核 人 ：谢 岳 铭
批 准 人 ：周 伟 和
涉及部门：
□总经办     ■业务/PMC部   ■物流部       □设备部    ■工程部  
■品质部     □人资部       ■采购部       □财务部    □新业务开发部  
□结构事业部       ■逆变器事业部    ■电源总装事业部     ■微模块事业部
                                                                            
编制/修定日期：2025-                     发布日期：2024-08-07
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新版本发行
——
刘晓良
A.1
修改工作流程图及说明
7.0
[质量专员]
2018-08-20
A.2
1、对各部门职责与权限，新增时间管控及优化；2、修改工作流程图及流程说明，并对内容进行细化；3、修改附件及表单；
4.0/7.0/8.0/ 9.0
[质量专员]
2019-03-20
A.3
对工作流程第13项关联并通知生产增加财务（成本变更），PIE（SOP变更），品质SIP变更；
8.0-13
[质量专员]
2020-5-10
A.3
优化四级表单《客户设变追踪表》
版本00变更01
[质量专员]
2020-10-14
A.4
文件编号旧版换新
--
[质量专员]
2021-5-13
A.5
更新接收设变非法渠道：不接受研发口头/电话/邮件通知的变更
8.0
[质量专员]
2021-12-02
A.6
更新4.3/4.6职责权限、增加7.2流程图、更新8.0流程说明，优
化9.0四级表格并同步受控；
8.0
[质量专员]
2022-12-2
A.7
1、8.0流程步聚说明：00`},{id:"qp:QPGC026",doc_code:"QPGC026",doc_name:"NPI作业流程控制程序",rev:"A.2",department:"工程部",module:"qp",npi_phase:"EVT",summary:`目的
规范NPI产品各阶段的各项活动，指导公司相关部门按NPI要求开展工作，充分验证产品生产工艺可量产性，保
证产品量产稳定性。
2.0适用范围
适用于智造示范工厂科技有限公司结构件新产品。；适用范围
适用于智造示范工厂科技有限公司结构件新产品。
3.0定义
3.1 NPI: New Product Introduction（新产品导入）
3.2 TPI: Transfer Product Introduction（转产产品导入）`,citations:["QPGC025","NN018","WIGC045","WIPZ029"],tags:["NPI","FMEA","直通率"],raw_file:"QPGC026 NPI作业流程控制程序A.2.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
 文件封面                         
NPI作业流程控制程序
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPGC026
文件版本
A.2
页数
共19页
编制部门 ：工 程 部
编制/修定：黎    奇
审 核 人 ：黄 超 征
批 准 人 ：周 伟 和
涉及部门：
□总经办   ■业务/PMC    ■物流部    □设备部    ■工程部    ■品质部
■结构事业部      ■逆变器事业部   ■电源总装事业部   ■微模块事业部
□人事部   □采购部   □配送部    □财务部    □新业务开发部
编制/修定日期：2024-07-18                    发布日期：2024-07-24
  
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
修订日期
A.1
增加相似物料的评审.增加工程SOP相似物料的区分.增加仓库对相似物料的管控.增加生产装配对相似物料的装配管控.增加未通过FAI认证评审的成品物料管控；文件编码旧版换新。
4.0、4.6.、4.8
[质量专员]
2021-04-23
A.2
1.增加工程部在加工前完成过程PFMEA分析，输出《PFMEA报告》；
2.更改了部分执行角色职称，与组织架构对应；
3.新增上传资料要求：《外购件、工艺、原材料备案清单》、《PFEMA报告》、《可靠性报告》
8.1（两处）、6.0
[质量专员]
2024-07-18
1.0目的
规范NPI产品各阶段的各项活动，指导公司相关部门按NPI要求开展工作，充分验证产品生产工艺可量产性，保
证产品量产稳定性。
2.0适用范围
适用于智造示范工厂科技有限公司结构件新产品。
3.0定义
3.1 NPI: New Product Introduction（新产品导入）
3.2 TPI: Transfer Product Introduction（转产产品导入）
3.3 FAI: First Article Inspection（首样检验）
4.0 职责和权限
4.1工程部：负责产品导入过程中的商务事宜，将客户原图转化成公司内部工艺文件，客户要求的工程评审文件制作，与客户设计的对接及设计问题解决，过程PFEMA分析，与客户NPI流程、进度及产品题的沟通及解决.增加原生编码与衍生编码相似物料的评审，工程SOP增加相似物料的分类，未通过FAI评审的物料交货需要拆分PO数量到各品类的批量数量。NPI工程师监管项目的整体质量与进度，并作为客户联络总接口人，向客户通报项目加工计划与加工进度，并每周五向客户提供NPI周报。
4.2业务部：接收客户订`},{id:"qp:QPGC027",doc_code:"QPGC027",doc_name:"总装NPI作业流程控制程序",rev:"A.5",department:"工程部",module:"qp",npi_phase:"DVT",summary:`目的
规范总装NPI产品各阶段的各项动作，指引总装产品导入期间公司相关部门按总装NPI流程开展工作，充
分验证产品设计成熟度、生产工艺可量产性，保证产品量产稳定性。
2.0 范围
适用于智造示范工厂科技有限公司总装产品NPI导入、FAI认证。`,citations:["WIPZ009","QPPZ006"],tags:["NPI","8D","FMEA","BTS"],raw_file:"QPGC027 总装NPI（TPI）作业流程控制程序A.5.docx",body_snippet:`智造示范工厂科技有限公司  Smart Mfg Demo Factory Co., Ltd.
文件封面
总装 NPI/TPI作业流程控制程序
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPGC027
文件版本
A.5
页数
共 13 页
编制部门 ：工 程 部 编制/修定：罗 基 成 审 核 人 ： 刘 明 明
批 准 人 ：李    锋
涉及部门：
□总经办   □品质部    □财务部   □PMC 部    □工艺准备部   
□工程部   □采购部    □物流部   □业务部    □人力资源部
■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   
■微模块事业部      □新业务事业部     □结构事业部     □NPI工厂
编制/修定日期：2025-01-31                           发布日期：2025-02-07
文件编号：QPGC027
版本：A.5
智造示范工厂科技有限公司
编制部门：工程部
修订日期：2025-01-31
总装 NPI/TPI 作业流程控制 程序
页  数：第 2页，共 13 页
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
新发行
/
[质量专员]
2016-05-08
A.1
升级文件封面，文件编号及表单
/
[质量专员]
2021-11-17
A.2
增加章节 005：增加强电安全相关评审，008 输出安全物料清单
005/008
[质量专员]
2023-12-22
A.3
1.文件名称优化；
2.章节 002 优化将原 ERP 改为 PEBS 系统，追溯要求录入 BTS 系统，增加NPI 管理流程；章节 004 增加NPI 管理流程、8D 报告；
3.章节 005：增加FAI报告 EMS+电子流的作业内容，增加NPI 管理流程内容； 4.章节 006：明确 FAI 评审结论；章节 007：通过 EMS+电子流跟踪问题闭环； 5.章节 008：增加《量产成熟度评估报告》表单；新增 8.2 章节：NPI 流程  管理 IT 电子流填写说明.
002/005/006 /007
8.2
[质量专员]
2024-08-20
A.4
1.章节 8.1（002）增加 FAI -DFM 基线；2.章节 8.1（008）增加产品设计要 求；3.章节 9.0 增加“FAI -DFM 基线 ”表单。
002/008/9.0
[质量专员]
2024-11-02
A.5
1.章节 8.1（007）增加 FAI问题改善措施固化；
2.章节 8.1（008）PFMEA 的履历要求，项目复盘和改善机制；
3.增加涉及部门-微模块事业部；
4.更改8.1章节-002资料接收`},{id:"qp:QPGC030",doc_code:"QPGC030",doc_name:"新物料验证、替代导入流程控制文件",rev:"A.0",department:"工程部",module:"qp",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r文件封面                           \x07\x07\r新物料验证、替代导入流程控制文件\r文件类别\r■质量  □环安  □健康安全  □其他\r\r文件等级\r□一级文件  ■二级文件  □三级文件\r\r文件编号\rQPGC030\r\r文件版本\rA.0\r页数\r共9页\r\r\r\r编制部门 ：工 程 部\r\r编制/修定：黎    奇\r\r审 核 人 ：刘 政 国\r\r批 准 人 ：周 伟 和\r涉及部门：\r(总经办   (业务/PMC   (物流部    □设备部    ■工程部    ■品质部\r■结构事业部      ■逆变器事业部   (电源总装事业部   ■微模块事业部\r(人",citations:["WIGC030","WICG002","WIPZ008"],tags:["NPI","FMEA","IQC","物料认证"],raw_file:"QPGC030 新物料验证、替代导入流程控制文件A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r文件封面                           \x07\x07\r新物料验证、替代导入流程控制文件\r文件类别\r■质量  □环安  □健康安全  □其他\r\r文件等级\r□一级文件  ■二级文件  □三级文件\r\r文件编号\rQPGC030\r\r文件版本\rA.0\r页数\r共9页\r\r\r\r编制部门 ：工 程 部\r\r编制/修定：黎    奇\r\r审 核 人 ：刘 政 国\r\r批 准 人 ：周 伟 和\r涉及部门：\r(总经办   (业务/PMC   (物流部    □设备部    ■工程部    ■品质部\r■结构事业部      ■逆变器事业部   (电源总装事业部   ■微模块事业部\r(人事部   □采购部   □配送部    □财务部    (新业务开发部\r\r\r编制、修定日期：2024-07-22                         发布日期：2024-07-25\x07\x07文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07修订日期\x07\x07A.0\x07初版发行\x07/\x07[质量专员]\x072024-07-22\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\v建立新物料的验证、替代导入流程，确保各流程节点的输入输出标准明确，角色定义，并严格按照流程要求对物料执行验证，同时记录和保存验证过程的相关信息，并通过流程进行评审。\v\v2.0适用范围\v本体系文件适用于供应商的新产品的验证、替代。\v\v3.0定义 \v  3.1新物料：指供应商提供的供应链中尚未使用过的物料或产品。\v  3.2替代导入：指将新物料替代现有物料使用的过程。\v  3.3评审流程：指产品导入进行的评审过程。\v\v 4.0职责和权限\r   4.1供应商：提交样品，提供相关信息和文件。\r4.2工程部： 负责制定验证计划，包括验证目标、测试方法、验证时间计划等，提供技术支持和指导，确保验证过程的顺利进行。\r  4.3业务部：提供市场需求信息，协助采购、商务部门进行需求分析。\r  4.4 PMC部： 协调验证过程中的物料供应和排产安排，提供生产进度和物料需求信息。\r  4.5采购部：提出物料需求信息，协助业务部门进行需求分析，管理供应商的物料交付安排。\r  4.6商务部：提出物料需求信息，协商供应商的物料交付安排。\r  4.7品质部：参与验证过程，执行测试和记录结果，进行验证结果的评估和质量决策。\r  4.8生产部：提供相应的生产设备"},{id:"qp:QPKF044",doc_code:"QPKF044",doc_name:"项目开发控制程序",rev:"A.1",department:"开发部",module:"qp",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r项目开发控制程序\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07",citations:[],tags:["质量体系","受控规程"],raw_file:"QPKF044项目开发控制程序A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r项目开发控制程序\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPKF044\x07\x07文件版本\x07A.2\x07页数\x07共 7页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 健 荣\r\r审 核 人 ：贾 中 华\r\r批 准 人 ：邓    伟\r\r\r涉及部门：\r□总经办   □业务/PMC     □物流部     □设备部     ■工程部     ■品质部\r■结构事业部      □逆变器事业部    □电源总装事业部       ■微模块事业部\r□人资部   ■采购部       □财务部    ■新业务开发部\r\r编制/修定日期：2022-08-22\x07发布日期：2022-08-30\x07\x07\r\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07新版发行\x07/\x07[质量专员]\x072016-05-10\x07\x07A.1\x071.与项目管理控制程序进行合并，2.升级文件名称及文件 编号\x07/\x07[质量专员]\x072021-12-25\x07\x07A.2\x071、增加8.1.1章节内容；2、增加8.14章节内容；3增加2个表单；\r4、需要将《开发更改管理规范》。\x078.1.1、8.14\x07[质量专员]\x072022-08-22\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r规定产品设计或技术开发过程的主要活动内容及要求，规范项目开发管理流程。\r2.0范围\r适用于本公司新业务部新产品设计和技术开发。\r3.0定义\r3.1开发项目任务书：描述项目目标、开发要求的文档，开发项目启动的依据；\r3.2开发项目规格书：描述项目和产品规格及需求的文档；\r3.3开发项目方案书：描述项目和产品总体设计方案的文档。\r4.0职责\r4.1新业务-市场组：根据市场策"},{id:"qp:QPPZ014",doc_code:"QPPZ014",doc_name:"客户服务控制程序",rev:"A.2",department:"品质部",module:"qp",npi_phase:"EVT",summary:`目的
为了在整个产品实现过程确保产品信息得到有效的沟通，不断提升客户感知度，将所有客户活动有效结合，从而更好的服务客户而制定本程序。
2.0适用范围
适用于所有与客户交流的过程。
3.0定义；适用范围
适用于所有与客户交流的过程。
3.0定义
无
4.0. 职责和权限`,citations:["QPPZ023"],tags:["NPI","8D","IQC"],raw_file:"QPPZ014 客户服务控制程序 A.2.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
客户服务控制程序
文件类别
■质量  □环安   □其他 □QEH体系
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPPZ014
文件版本
A.2
页数
共8页
编制部门 ：品 质 部
编制/修定：李    晴
审 核 人 ：邹 文 兵
批 准 人 ：李    锋
涉及部门：
□总经办   ■品质部    □财务部   ■PMC 部    □工艺准备部   
■工程部  □采购部    ■物流部   ■业务部    ■人力资源部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   
■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                       
编制/修定日期：2025-01-17                     发布日期：2025-01-22
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
新版发行（将客户投诉控制程序、客户满意度调查作业规范合并，增加其他客户服务内容，形成新的控制程序）,删除原客户满意度调查表及汇总分析表。
/
[质量专员]
2021-05-20
A.1
优化7.4.6客户投诉分层分级处理机制。
7.4.6
[质量专员]
2024-05-27
A.2
此文件作废《客户满意度调查表》《客户满意度汇总分析表》《客户满意度调查表（质量版块）》《客户满意度调查改善跟踪表》，移至《QPPZ023 客户满意度调查管控程序A.2》文件
/
[质量专员]
2024-01-17
　
1.0目的
为了在整个产品实现过程确保产品信息得到有效的沟通，不断提升客户感知度，将所有客户活动有效结合，从而更好的服务客户而制定本程序。
2.0适用范围
适用于所有与客户交流的过程。
3.0定义
无
4.0. 职责和权限
4.1业务/PMC：负责满足客户产品需求确认，根据《合同订单评审控制程序》和《订单跟进及交付管理规范》跟踪产品`},{id:"qp:QPPZ016",doc_code:"QPPZ016",doc_name:"客户与供应商财产管制程序",rev:"A.2",department:"品质部",module:"qp",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r客户与供应商财产管理程序\r\r\r文件类别\x07■质量  □环安  □健康安全",citations:[],tags:["BTS"],raw_file:"QPPZ016客户与供应商财产管制程序A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r客户与供应商财产管理程序\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPPZ016\x07\x07文件版本\x07A.2\x07页数\x07共4页\x07\x07\r编制部门 ：品 质 部\r\r编制/修定：秦 天 华\r\r审 核 人 ：田    波\r\r批 准 人 ：李    锋\r\r涉及部门：\r□总经办   ■业务/PMC部   ■物流部   ■设备部    ■工程部    ■品质部\r■结构事业部    ■逆变器事业部    ■电源总装事业部    ■微模块事业部\r□人资部     ■采购部       □财务部   ■新业务开发部\r                                                                           \r编制/修定日期：2021-05-13                       发布日期：2021-05-17\r \r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07新版本发行\x07/\x07[质量专员]\x072016-05-08\x07\x07A.1\x07增加客户设备入网安全检测及入网清单管理内容。\x07 8.2.3、8.2.4\x07[质量专员]\x072020-12-04\x07\x07A.2\x071.优化文件封面；2.文件编号变更；3.表单编号升级。\x079.0\x07[质量专员]\x072021-05-13\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\r\f1.0目的\r通过对客户与供应商提供给我司财产的管理，确保客户与供应商财产得到识别、验证、保护和适宜的使用，并及时向客户报告其财产丢失、损坏和不适宜情况，以增强顾客对我司的满意和信任程度。\r2.0范围\r适用于本公司客户与供应商向我司提供的所有财产的管理。\r3.0定义\r3.1客户财产：是指"},{id:"qp:QPPZ019",doc_code:"QPPZ019",doc_name:"不合格品处理控制程序",rev:"A.0",department:"品质部",module:"qp",npi_phase:"PVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                                                                                                                                                                                                     不合格品控制程序 文件类别 ■质量  □环安  □健康安全  □其他 文件等级",citations:["WIRZ005","DKBA048"],tags:["NPI","8D","IQC"],raw_file:"QPPZ019 不合格品控制程序B.6.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
不合格品控制程序
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPPZ019
文件版本
B.6
页数
共 22页
编制部门 ：品 质 部
编制/修定：李    晴
审 核 人 ：邹 文 兵
批 准 人 ：李    锋
涉及部门：
□总经办      ■品质部    □财务部     ■PMC 部      □工艺准备部   
■工程部      ■采购部    ■物流部     □业务部      □人力资源部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     □储能事业部   
■微模块事业部      ■新业务事业部     ■结构事业部     □NPI工厂
编制/修定日期：2025-02-11
发布日期：2025-02-15
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新版本发行
/
[质量专员]
2016-05-06
A.1
增加8.6客户退换货处理内容
8.6
[质量专员]
2017-09-16
A.2
1.全面优化文件结构与流程图符合；2.增加异常分析的范畴与内容。
/
[质量专员]
2018-07-26
A.3
增加8.2.4节与8.7.5节内容。
8.2/8.7
[质量专员]
2018-09-19
A.4
优化全流程关于客户异常的处理内容及处理时效。
/
[质量专员]
2018-11-19
A.5
增加8.5.5问题层级定义，将原8.5.5改为8.5.6
8.5
[质量专员]
2019-10-28
A.6
1.增加客户端异常处理流程及内容
2.增加7.0客户异常处理流程图
3.增加8.3.7、8.4.2、8.5.7、8.9.8、8.10.2、8.11.6、8.14内容
7.0
8.0
[质量专员]
2020-05-26
A.7
增加条码锁定、不合格品标示及不合格品限量管理内容
8.1.9
8.2.5
8.2.6
[质量专员]
2020-08-13
A.8
增加不良朝市运作流程、优化文件封面，升级文件编号
附2
[质量专员]
2020-12-10
A.9
更改3`},{id:"qp:QPPZ020",doc_code:"QPPZ020",doc_name:"产品标识与可追溯控制程序",rev:"A.1",department:"品质部",module:"qp",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r产品标识与可追溯控制程序\r\r\r文件类别\r■质量  □环安  □健康安全",citations:["WI730"],tags:["IQC"],raw_file:"QPPZ020 产品标识与可追溯控制程序A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r产品标识与可追溯控制程序\r\r\r文件类别\r■质量  □环安  □健康安全  □其他\r\r文件等级\r□一级文件  ■二级文件  □三级文件\r\r文件编号\rQPPZ020\r\r文件版本\rA.2\r页数\r共 7页\r\r\r编制部门 ：品 质 部\r\r编制/修定：李    晴\r\r审 核 人 ：邹 文 兵\r\r批 准 人 ：李    锋\r\r涉及部门：\r□总经办   □业务/PMC   ■物流部   □设备部    □工程部     ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部   ■微模块事业部\r□人资部   □采购部       □财务部    □新业务开发部\r\r编制/修订日期：2024-08-14                            发布日期：2024-08-20\x07\x07文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07优化日期\x07\x07A.0\x07体系版本升级，文件全面优化\x07/\x07[质量专员]\x072016-05-10\x07\x07A.1\x071.增加产品整机条形码及包装箱条码。2.封面优化。\x078.5.7/8.5.8\x07[质量专员]\x072021-05-28\x07\x07A.2\x07版本升级，文件全面审视优化\x07/\x07[质量专员]\x072024-08-14\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的：\r对来料、制程、组装、交付各阶段的物料及产品进行标识管理，以识别其型号、名称、数量、状态、时效性等防止混淆，建立可信赖的生产作业流程，确保产品的可追溯性。\r2. 0范围：\r适用于公司内部所有原材料、半成品、成品在各个工序和区域（包括已出货到客户的产品）。\r3.0 定义：\r无\r4.0 职责和权限：\r4.1生产部：负责对其所生产的半成品、成品、转序品等，回收料和自检不合格品之状态进行标示。\r4.2品质部：负责查核产品标识的"},{id:"qp:QPPZ021",doc_code:"QPPZ021",doc_name:"PCN控制程序",rev:"A.9",department:"品质部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                   \r                                                                                                                                                             \r                     \rPCN控制程序\r\r\r文件类别\x07■质量  □环境  □职业健康与安全",citations:["QPPZ050"],tags:["NPI","PCN","IQC"],raw_file:"QPPZ021 PCN控制程序B.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                   \r                                                                                                                                                             \r                     \rPCN控制程序\r\r\r文件类别\x07■质量  □环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPPZ021\x07\x07文件版本\x07B.1\x07页数\x07共 12页\x07\x07\r编制部门 ：品 质 部\r\r编制/修定：刘 晓 璐\r\r审 核 人 ：邹 文 兵\r\r批 准 人 ：李    锋\r\r涉及部门：\r□总经办   ■品质部    □财务部   ■PMC 部    ■工艺准备部   \r■工程部   ■采购部    ■物流部   ■业务部    ■人力资源部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                           \r编制/修定日期：2025-09-19                    发布日期：2025-09-26\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.0\x07新版本发行\x07/\x07[质量专员]\x072016-05-10\x07\x07A.1\x07优化流程结构，增加部门权限\x07/\x07[质量专员]\x072017-12-20\x07\x07A.2\x07修改：PCN执行跟踪表QPPZ05000-C\x079.0\x07[质量专员]\x072020-12-25\x07\x07A.3\x07增加责任部门职能权限与相关部门提出PCN的要求\x074.0/8.3.1\x07[质量专员]\x072021-04-19\x07\x07A.4\x07优化工作流程说明内容，\x078.1/8.10/9.2\x07王雯雯\x072022-9-6\x07\x07A.5\x07优化文控职责，文控专员汇总输出月报表工作内容\x07全章节\x07[质量专员]\x072023-10-19\x07\x07A.6\x07根据客户最新PCN协议更新增加条款内容\x078.1.1/8.1.2\x07李可辉\x072023-12-29\x07\x07A.7\x07增加内部执行跟踪的要求管控\x078.8/8.9\x07[质量专员]\x072024-4-25\x07\x07A.8\x07增加客户要求的不得提交SPCN场景的特别要求\r增加对我司供应商，即标杆客户"},{id:"qp:QPPZ023",doc_code:"QPPZ023",doc_name:"客户满意度调查管控程序",rev:"A.3",department:"品质部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r客户满意度调查管理程序\r文件类别\x07■质量  □环安   □其他 □QEH体",citations:["QPPZ007","QPYW046","WIPZ014","QPPZ013"],tags:["NPI"],raw_file:"QPPZ023 客户满意度调查管控程序A.3.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r客户满意度调查管理程序\r文件类别\x07■质量  □环安   □其他 □QEH体系\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPPZ023\x07\x07文件版本\x07A.2\x07页数\x07共7页\x07\x07\r编制部门 ：品 质 部\r\r编制/修定：李    晴\r\r审 核 人 ：邹 文 兵\r\r批 准 人 ：李    锋\r\r涉及部门：\r□总经办   ■品质部    □财务部   ■PMC 部    □工艺准备部   \r■工程部   □采购部    ■物流部   ■业务部    ■人力资源部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂 \r                                                                      \r编制/修定日期：2025-01-17                     发布日期：2025-01-22\r\r\f\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07初版发行\x07/\x07[质量专员]\x072024-3-25\x07\x07A.1\x07修订客户满意度调查表\x07/\x07[质量专员]\x072024-4-10\x07\x07A.2\x07新增表单《客户满意度调查表》《客户满意度汇总分析表》《客户满意度调查表（质量版块）》《客户满意度调查改善跟踪表》\x07/\x07[质量专员]\x072025-01-17\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r\r1.0目的\r为更好的对顾客满意度进行调查，了解顾客对其要求已被满足的程度，内部反馈的信息收集，评价所建立的质量管理体系的有效性，并及时识别改进的机会而制定本程序。\r2.0适用范围\r适用于公司对顾客进行的满"},{id:"qp:QPQG001",doc_code:"QPQG001",doc_name:"文件控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"EVT",summary:`目的
为规范本公司的文件管理工作，确保体系文件的新增、修订、评审、审核、批准、发放、回收、作废等工作均得到控制，建立各类文件查询、使用的共享平台，逐步推进规范化管理，促进效率提升。
2.0 范围
适用于本公司所有文件、资料的管控，限内部体系文件、外来技术规范、法律法规、国标、图纸等。
3.0定义`,citations:["WIPZ001","QPPZ001","QPQC001"],tags:["NPI","BTS"],raw_file:"QPQG001 文件控制程序A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                    
                                                                                                                                                             
                     
文件控制程序
文件类别
■质量  ■环境  ■职业健康与安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPQG001
文件版本
A.0
页数
共16页
编制部门 ：企业管理部
编制/修订：李    晴
审 核 人 ：李    洋
批 准 人 ：李    锋
涉及部门：
■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   
■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   
■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                            
编制/修定日期：2025-04-01                            发布日期：2025-04-07
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
修订日期
A.0                                             
优化《一级、二级、三级文件样式》表单；
优化涉及部门，将“人力资源部”改为“企业管理部”；
将编号“QPPZ001”改为“QPQG001”,以及相关表单同步更改编号。
/
[质量专员]
2025-04-01
   
1.0目的
为规范本公司的文件管理工作，确保体系文件的新增、修订、评审、审核、批准、发放、回收、作废等工作均得到控制，建立各类文件查询、使用的共享平台，逐步推进规范化管理，促进效率提升。
2.0 范围
适用于本公司所有文件、资料的管控，限内部体系文件、外来技术规范、法律法规、国标、图纸等。
3.0定义
3.1文件：指信息及其承载的媒体，如规范、图样、标准、记录等以纸张或电子档存在的文件形式等均属文件，包括：管理系统文件、外来文件、记录`},{id:"qp:QPQG002",doc_code:"QPQG002",doc_name:"记录控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r记录控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □其他",citations:["QPPZ002"],tags:["NPI"],raw_file:"QPQG002 记录控制程序A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r记录控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPQG002\x07\x07文件版本\x07A.0\x07页数\x07共8页\x07\x07\r  编制部门 ：企业管理部 \r\r编制/修定：李    晴\r\r审 核 人 ：李    洋\r\r批 准 人 ：李    锋\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                         \r编制/修定日期：2025-04-02                                  发布日期：2025-04-07\r\f\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07修订日期\x07\x07A.0\x07将原来的“QPPZ002”编号改为“QPQG002”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-02\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r对公司质量/环境/职业健康安全/信息安全管理体/产品强电安全/网络安全等体系所涉及的记录进行管理，便于查询和追溯，同时为质量/环境/职业健康安全/信息安全管理体/产品强电安全/网络安全等体系管理活动提供有效证据。\r2.0范围	\r适用于本公司"},{id:"qp:QPQG003",doc_code:"QPQG003",doc_name:"管理评审控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"DVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r管理评审控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □",citations:["QPPZ013","QPPZ003"],tags:["NPI"],raw_file:"QPQG003 管理评审控制程序A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r管理评审控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPQG003\x07\x07文件版本\x07A.0\x07页数\x07共7页\x07\x07\r  编制部门 ：企业管理部\r\r编制/修定：李    晴\r\r审 核 人 ：李    洋\r\r批 准 人 ：李    锋\r涉及部门：\r■总经办     ■品质部     ■财务部     ■PMC 部         ■工艺准备部   \r■工程部     ■采购部     ■物流部     ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                         \r编制/修定日期：2025-04-07                   发布日期：2025-04-12\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07修订日期\x07\x07A.0\x07将原来的“QPPZ003”编号改为“QPQG003”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r对公司管理体系进行评审，确保各管理体系能够满足标准要求，并确保公司的质量管理体系具有持续的充分性、适宜性、有效性，使其不断优化以提高公司的管理水平，适应市场的变化、技术等条件。\r2.0范围\r适用于本公司质量/环境/职业健康安全/信息安全/网络安全/产品强电安全管理体系要"},{id:"qp:QPQG004",doc_code:"QPQG004",doc_name:"内部审核控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"DVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r内部审核控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □",citations:["ISO140","ISO450","ISO900","QPPZ004"],tags:["NPI","物料认证"],raw_file:"QPQG004 内部审核控制程序A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r内部审核控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPQG004\x07\x07文件版本\x07A.0\x07页数\x07共9页\x07\x07\r  编制部门 ：企业管理部\r\r编制/修定：李    晴\r\r审 核 人 ：李    洋\r\r批 准 人 ：李    锋\r涉及部门：\r■总经办     ■品质部     ■财务部     ■PMC 部         ■工艺准备部   \r■工程部     ■采购部     ■物流部     ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                         \r编制/修定日期：2025-04-07                   发布日期：2025-04-12\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07将原来的“QPPZ004”编号改为“QPQG004”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r为验证公司各管理体系的运行是否符合所确定的标准及客户要求，以及是否被有效的实施与保持，特制订本程序。\r2.0范围\r本程序适用于本公司所有内部审核活动，包括质量、环境、职业健康安全、信息安全及客户关注的要求（如ROHS体系、CSR体系、网络安全体系、产品强"},{id:"qp:QPQG007",doc_code:"QPQG007",doc_name:"组织内外部环境识别评审控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                                                                                                                                         \r               \r组织内外部环境识别评审控制程序\r\r文件类别\x07□质量  ■环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QP",citations:["QPPZ018"],tags:["NPI"],raw_file:"QPQG007 组织内外部环境识别评审控制程序A.0.DOC",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                                                                                                                                         \r               \r组织内外部环境识别评审控制程序\r\r文件类别\x07□质量  ■环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPQG007\x07\x07文件版本\x07A.0\x07页数\x07共5页\x07\x07\r\r编制部门 ：企业管理部\r\r编制/修定：李    晴 \r\r审 核 人 ：李    洋\r\r批 准 人 ：李    锋\r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                        \r编制/修定日期：2025-04-08                      发布日期：2025-04-15\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.0\x07由原来的“QPPZ018”编号更改为“QPQG007”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-08\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r为保证公司质量管理体系的策划能实现预期的结果，用于指导：\r1.1识别、监视并评审与公司的宗旨、战略方向相关的内外部环境因素；\r1.2根据内外部因素，结合本公司已有的优势和劣势，识别出风险和机会；\r1.3针对识别的风险和机会，策划应对措施。\r2.0范围	\r质量/环境管理体系所有相关的部门与过程。\r3.0定义\r3.1环境因素：来自公司"},{id:"qp:QPQG008",doc_code:"QPQG008",doc_name:"BCM风险管理制度",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r  BCM风险管理制度\r\r文件类别\x07■质量  ■环境  ■职业健康与安全",citations:["QPPZ022","BCM400"],tags:["NPI","IQC"],raw_file:"QPQG008 BCM风险管理制度A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r  BCM风险管理制度\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPQG008\x07\x07文件版本\x07A.0\x07页数\x07共 16页\x07\x07\r 编制部门 ：企业管理部\r\r编制/修定：李    晴\r\r审 核 人 ：李    洋\r\r批 准 人 ：李    锋\r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                           \r编制/修定日期：2025-04-08                  发布日期：2025-04-15\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.0\x07将“QPPZ022”编号改为“QPQG008”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-08\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r为了将公司各项业务风险控制在可控范围之内，确保公司业务规范经营、稳健发展，保证公司的经营目标和经营战略得以实现，特制订本制度。\r2.0范围	\r适用于本公司各项经营活动的风险管理。\r3.0定义\r3.1企业风险：指未来的不确定性对企业实现其经营目标的影响。\r3"},{id:"qp:QPQG015",doc_code:"QPQG015",doc_name:"健康安全控制程序",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:`目的
对工作场所潜在的威胁，制定相应的预防措施，通过培训，使组织内所有员工对工作场所潜在的威胁有充分的了解，并加强自我保护意识，确保员工的健康与安全。
2.0范围
公司在运行过程中涉及健康安全的所有环节,以及可能的对分包方/供应商的要求。
3.0定义`,citations:["QPRZ037"],tags:["NPI"],raw_file:"QPQG015 健康安全控制程序A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
健康安全控制程序
文件类别
□质量  ■环境  □职业健康与安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPQG015
文件版本
A.0
页数
共6页
编制部门 ：企业管理部
编制/修定：刘 丽 珊
审 核 人 ：胡    晓 
批 准 人 ：李    洋
涉及部门：
■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   
■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   
■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                       
编制/修定日期：2025-04-10                        发布日期： 2025-04-15   
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
将原来的“QPRZ037”编号改为“QPQG015”,以及相关表单同步更改编号。
/
[质量专员]
2025-04-10
　
　
1.0目的
对工作场所潜在的威胁，制定相应的预防措施，通过培训，使组织内所有员工对工作场所潜在的威胁有充分的了解，并加强自我保护意识，确保员工的健康与安全。
2.0范围
公司在运行过程中涉及健康安全的所有环节,以及可能的对分包方/供应商的要求。
3.0定义
     无
4.0职责和权限
4.1 健康安全委员会负责对危险因素进行风险评估,对风险评估较高的因素制定相应的预防措施。
4.2 管理代表负责制定公司的健康与安全教育的培训计划并监督实施。
4.3 各部门负责人负责所辖区域的健康安全工作的管理，企业管理部及安全管理人员负责监督各部门的健康安全工作的执行。
5.0输入
 无
6.0输出
 无
7.0 流程图
     `},{id:"qp:QPQG017",doc_code:"QPQG017",doc_name:"体系策划控制程序A.0",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r体系策划控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □",citations:["QPPZ007","ISO140","ISO450","ISO900"],tags:["NPI","物料认证"],raw_file:"QPQG017 体系策划控制程序A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r体系策划控制程序\r\r\r文件类别\x07■质量  ■环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPQG017\x07\x07文件版本\x07A.0\x07页数\x07共 10页\x07\x07\r  编制部门 ：企业管理部\r\r编制/修定：李    晴\r\r审 核 人 ：李    洋\r\r批 准 人 ：李    锋\r\r涉及部门：\r■总经办     ■品质部     ■财务部     ■PMC 部         ■工艺准备部   \r■工程部     ■采购部     ■物流部     ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                           \r编制/修定日期：2025-04-16                            发布日期：2025-04-21\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“QPPZ007”编号改为“QPQG017”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-16\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r为了确保质量/环境/职业健康安全管理体系及其他体系（如CSR、网络安全、信息安全、ROHS等等）的有效策划，明确各体系的策划项目，通过对策划过程的有效管理，保证各管理体系的有效运行，达成公司策划的管理体系绩效而制定本程序。\r"},{id:"qp:QPQG018",doc_code:"QPQG018",doc_name:"风险与机遇识别、评价控制程序A.0",rev:"A.0",department:"企业管理部",module:"qp",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r风险与机遇识别、评价控制程序\r\r\r文件类别\x07□质量  ■环境  ■职业健康",citations:["WI820","WI440","QPPZ017"],tags:["NPI","FMEA"],raw_file:"QPQG018 风险与机遇识别、评价控制程序A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r风险与机遇识别、评价控制程序\r\r\r文件类别\x07□质量  ■环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPQG018\x07\x07文件版本\x07A.0\x07页数\x07共13页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：李    晴\r\r审 核 人 ：李    洋\r\r批 准 人 ：李    锋\r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r                                                                           \r编制/修定日期：2025-04-16                  发布日期：2025-04-21\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“QPPZ017”编号改为“QPQG018”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-16\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r通过对公司目标和战略方向相关影响其实现质量管理体系预期结果的各种内外部环境因素的识别与评价，有效应对风险和机遇。\r2.0范围	\r本程序适用于本公司质量管理体系所覆盖范围内活动、产品和服务中内外部环境因素的识别与评价和应对风险和机遇的策划与实施。\r"},{id:"qp:QPSB040",doc_code:"QPSB040",doc_name:"设备管理程序",rev:"A.4",department:"设备管理部",module:"qp",npi_phase:"EVT",summary:"\bOBA 智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r设备管理程序\r  \r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件",citations:["WISB001"],tags:["FMEA"],raw_file:"QPSB040设备管理程序A.4.doc",body_snippet:"\bOBA 智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r设备管理程序\r  \r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  ■二级文件  □三级文件\x07\x07文件编号\x07QPSB040\x07\x07文件版本\x07A.4\x07页数\x07共8页\x07\x07\r编制部门 ：设 备 部\r\r                 编制/修定：李    晴\r \r                 审 核 人 ：任 恩 恩\r\r                 批 准 人 ：王 旭 升\r\r涉及部门：\r■总经办   ■业务/PMC    ■物流部     ■设备部     ■工程部     ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部\r■人资部   ■采购部      ■财务部    ■新业务开发部\r\r编制/修定日期：2024-3-15\x07发布日期：2024-3-22\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节\x07编制/修定\x07实施日期\x07\x07A.0\x07新版发行\x07/\x07皮美军\x072016-05-10\x07\x07A.1\x07更改文件封面，审视维护保养内容。，优化“8.8设备的使用与维护”\x078.8\x07[质量专员]\x072018-05-11\x07\x07A.2\x07增加8.8设备的使用与维护\x078.8\x07[质量专员]\x072019-08-01\x07\x07A.3\x07升级文件封面及文件编号，同步升级表单编号\x079.0\x07[质量专员]\x072021-12-10\x07\x07A.4\x07增加设备工作流程图，修订各作业章节内容\x07全章节\x07[质量专员]\x072024-3-15\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\f1.0 目的 \r为使公司设备的日常使用、保养、定期保养、异常处理等有所遵循，确保生产设备能够正常运转，进而提升产品质量和生产效率，减少维修费用。  \r2.0 范围 \r本公司所有生产用机械设备、动力设备的管理。 \r3.0 定义 \r3.1一级保养（日常保养）：就是以操作工为主，以清洁、润滑"},{id:"qp:QPSC041",doc_code:"QPSC041",doc_name:"钣金 生产过程控制程序",rev:"A.4",department:"生产部",module:"qp",npi_phase:"EVT",summary:`目的
为使生产能顺利达到公司下达的生产目标，确保制程生产和品质能在有效的管制状况下达成。
2.0范围
适用于公司生产过程控制。
3.0 定义`,citations:["GB282","NG004","OK011","OKNG005","QPSC010"],tags:["质量体系","受控规程"],raw_file:"QPSC041钣金 生产过程控制程序A.5.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
钣金生产过程控制程序
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPSC041
文件版本
A.5
页数
共7页
编制部门 ：结构事业部
编制/修定：顾    伟
审 核 人 ：   /
批 准 人 ：崔 世 新
涉及部门：
□总经办   ■业务/PMC     ■物流部     □设备部     ■工程部     ■品质部
■结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部
□人资部   ■采购部       □财务部    □新业务开发部
                                                                           
编制/修定日期：2021-12-16                    发布日期：2021-12-20
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
实施日期
A.4
ISO体系全面升级文件编号优化
/
[质量专员]
2016-05-08
A.5
1.优化流程图，删除流程图中9节，2.优化8.0章节中流程说明内容，3.增加标准三率要求，4.升级文件名称、封面、编号及表格。修改名称原《QPSC01000 生产过程控制程序》更改为《钣金生产过程控制程序》
7.0、8.2.5
[质量专员]
2021-12-16
　
　
1.0目的
为使生产能顺利达到公司下达的生产目标，确保制程生产和品质能在有效的管制状况下达成。
2.0范围
适用于公司生产过程控制。
3.0 定义
3.1 在制品：半成品与成品的统称。
3.2委外加工：指本公司零件由于设备、技术、工艺和产能等条件的限制而委托供应商加工。
4.0 职责
4.1工程部：负责产品的改进、生产工艺的制定、技术资料的编制、模具的设计等，保证生产顺畅以及工艺的改良。
4.2 PMC部：依据订单总表提供本月客户需求明细
4.3 计划员依据PMC部本月客户需求要求,制订本月《月入库计划》,并依据月入库计划编写《日工序生产`},{id:"qp:QPSC045",doc_code:"QPSC045",doc_name:"装配生产过程控制程序",rev:"A.1",department:"生产部",module:"qp",npi_phase:"EVT",summary:`目的
为使生产能顺利达到公司下达的生产目标，确保装配制程生产和品质能在有效的管制状况下达成。
2.0范围
适用于结构事业部装配、电源总装事业部、逆变器事业部及微模块事业部生产过程控制。
3.0 定义`,citations:["OQCO010","NG004"],tags:["IQC"],raw_file:"QPSC045装配生产过程控制程序A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
装配生产过程控制程序
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPSC045
文件版本
A.1
页数
共7页
编制部门 ：生产部
编制/修定：[质量专员]
审 核 人 ：/ 
批 准 人 ：牛建斌
涉及部门：
□总经办   ■业务/PMC     ■物流部     □设备部     ■工程部     ■品质部
□结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部
□人资部   ■采购部       □财务部    □新业务开发部
                                                                           
编制/修定日期：2021-12-16                    发布日期：2021-12-20
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
实施日期
A.1
1、增加2.0范围涉及部门。
2、增加7.0工作流程图
3、增加8.1.7遵守标准三率
4、优化编号
2.0/7.0/8.17
[质量专员]
2021-12-17
　
1.0目的
为使生产能顺利达到公司下达的生产目标，确保装配制程生产和品质能在有效的管制状况下达成。
2.0范围
适用于结构事业部装配、电源总装事业部、逆变器事业部及微模块事业部生产过程控制。
3.0 定义
无
4.0 职责和权限
4.1工程部：负责产品的改进、生产工艺的制定、技术资料的编制、模具的设计、工装夹具设计与制作及跟进等，保证生产顺畅以及工艺的改良。
4.2 PMC部：依据订单总表提供本月客户需求明细，编制《月出货计划》，《物料计划》。
4.3 计划员依据PMC部本月客户需求要求,制订本月《月入库计划》,并依据月入库计划编写《日工序生产计划》发放至结构件分厂装配车间，并跟进生产进度，以确保生产进度按照《月入库计划》执行。计划员根据产品结构类型分类，结构类同排在一起，进行批量生产；
4.4品质部：对生产流程上的在制品和工艺`},{id:"qp:QPWL043",doc_code:"QPWL043",doc_name:"仓库控制程序",rev:"A.3",department:"物流部",module:"qp",npi_phase:"PVT",summary:`目的
为建立、健全公司的库存物料管理制度，实现库存管理制度化、规范化、标准化，推动公司库存物料管理水平的提高，不断完善库存物料控制制度，特制定本规范。
2.0适用范围
适用于本公司所有经仓库进出控制管理的物料
3.0定义；适用范围
适用于本公司所有经仓库进出控制管理的物料
3.0定义
物料
广义：包括与产品生产有关的所有物品，如原材料，辅助用品，半成品，成品等`,citations:["HBM100","QP820","QP830","EPA500","EPA100","QPWL001"],tags:["NPI","IQC"],raw_file:"QPWL043 仓库管理控制程序A.4.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                                             
                                                                                                                                                             
                     
仓库管理控制程序
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  ■二级文件  □三级文件
文件编号
QPWL043
文件版本
A.4
页数
共 25页
编制部门 ：物 流 部
编制/修定：谭    俊
审 核 人 ：谭 明 乾    
批 准 人 ：刘 智 雄
涉及部门：
□总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   
□工程部   ■采购部     ■物流部       ■业务部         □企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
编制/修定日期：2025-09-23
发布日期：2025-09-30
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
实施日期
A.0
初版发行。
/
[质量专员]
2016-05-06
A.1
对文件的内容进行全面的审视升级优化。
/
[质量专员]
2021-06-16
A.2
1.合并仓库管理规范文件；2.增加TK物料超期流程和流程说明。
8.9
[质量专员]
2024-07-12
A.3
新增表单《货架维护点检表》
9.0
[质量专员]
2024-08-21
A.4
新增表单《环境温湿度记录表》
9.0
[质量专员]
2025-09-22
1.0目的
为建立、健全公司的库存物料管理制度，实现库存管理制度化、规范化、标准化，推动公司库存物料管理水平的提高，不断完善库存物料控制制度，特制定本规范。
2.0适用范围
适用于本公司所有经仓库进出控制管理的物料
3.0定义
物料
广义：包括与产品生产有关的所有物品，如原材料，辅助用品，半成品，成品等
狭义：指材料或原料
4.0职责和权限
4.1物流部：负责物料的清点、入库收发、存储管理、成品出货工作。
4.2品质部：负责物料的品质检验。
4.3生产部：负责领料、退料、补料、成品入仓工作。
4.4采购部：负责处理供应商交货异常及通知供应商退货。
4.5 PMC：负责发出`},{id:"wi:WICG003",doc_code:"WICG003",doc_name:"新物料认证管理规范",rev:"A.2",department:"采购部",module:"wi",npi_phase:"EVT",summary:`目的
为确保新物料能满足客户的品质、规格、设计及技术规范的所有要求，明确物料在认证过程中各部门的岗位职责，特制定以下管理规范。
2.0范围
适用于我司除客户的客供料、国标件及客户组件外的其它所有零件的采购产品。
3.0定义`,citations:["QPCG023"],tags:["质量体系","受控规程"],raw_file:"WICG003 新物料认证管理规范A.2.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
新物料认证管理规范
文件类别
■品质  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WICG003
文件版本
A.2
页数
共10页
编制部门 ：采 购 部
编制/修定：林 兰 芽
审 核 人 ：潘 熙 奎
批 准 人 ：曾    珍
涉及部门：
□总经办  □业务/PMC   □物流部  □设备部   ■工程部   ■品质部
■结构事业部  ■逆变器事业部   ■电源总装事业部   ■微模块事业部
□人资部   ■采购部    □财务部    ■新业务开发部
                                                                       
编制/修定日期：2024-09-15                发布日期：2024-09-21
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0 
新文件发行
全章节
[质量专员]
2024/3/30
A.1
新增标准样品、限度样品的定义和使用要求，删除8.2表格中008环节关于新物料前三批加严检验的要求。
3.5、3.6、3.7、8.2
[质量专员]
2024/8/20
A.2
将《供应商签样管理规范》合并在《新物料认证管理规范》文件里。
/
[质量专员]
2024-09-15
1.0目的
为确保新物料能满足客户的品质、规格、设计及技术规范的所有要求，明确物料在认证过程中各部门的岗位职责，特制定以下管理规范。
2.0范围
适用于我司除客户的客供料、国标件及客户组件外的其它所有零件的采购产品。
3.0定义
3.1 供应商：因为生产经营活动需要而开发的给公司提供物料或加工的相关厂商。
3.2 供应商评估：公司按照供应商开发评估表确定合格供应商的过程。
3.3 新物料：第一次使用的并且没有价格认证的物料。
3.4新供应商:被选择进行开发预备的供应商。
3.5合格供应商:指通过供应商导入认证流程（包含前期基础信息调研、合作意愿确认、成本价格品质等审核、同意签订相关协议等），且有能力长期稳定提`},{id:"wi:WIGC093",doc_code:"WIGC093",doc_name:"测试装备现场管理及变更管控操作指导书",rev:"A.0",department:"工程部",module:"wi",npi_phase:"EVT",summary:`目的
规范加工现场使用的测试装备使用管理操作，对装备现场管理业务的全过程及操作中的各个环节进行有效控制，保证测试装备完整性、稳定性和公司财产安全性、完整性。
3.适用范围
泛网络生产测试现场使用的测试装备，不包括临时搭建桌面测试环境。
4.操作指引；适用范围
泛网络生产测试现场使用的测试装备，不包括临时搭建桌面测试环境。
4.操作指引
4.1装备存放使用要求
4.1.1装备及部件`,citations:[],tags:["NPI"],raw_file:"WIGC093 测试装备现场管理及变更管控操作指导书.docx",body_snippet:`智造示范工厂科技有限公司
 Smart Mfg Demo Factory Co., Ltd.
文件封面                          
测试装备现场管理及变更管控操作指导书
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC093
文件版本
A.0
页数
共6页
编制部门 ：工 程 部
编制/修定：杨 小 川
审 核 人 ：李 光 辉
批 准 人 ：谢 岳 铭
涉及部门：
□总经办     □业务/PMC部   □物流部       □设备部    ■工程部  
■品质部     □人资部       □采购部       □财务部    □新业务开发部  
■结构事业部 ■逆变器事业部    ■电源总装事业部    ■微模块事业部
编制/修定日期：2024-08-23                     发布日期：2024-8-26
文件修订履历管理
版本/
版次
更改内容摘要
更改
章节号
优化人
修订日期
A.1
新版发行
- -
[质量专员]
2024-08-23
 
1.定义
对加工现场使用的测试装备存放、使用、以及装备、测试部件借用与投递、装备改造等做规范性的操作指导。
2.目的
规范加工现场使用的测试装备使用管理操作，对装备现场管理业务的全过程及操作中的各个环节进行有效控制，保证测试装备完整性、稳定性和公司财产安全性、完整性。
3.适用范围
泛网络生产测试现场使用的测试装备，不包括临时搭建桌面测试环境。
4.操作指引
4.1装备存放使用要求
4.1.1装备及部件
测试装备所属工装、仪表、环境物料等资源部件按照搭建或改造后的布局进行摆放，不得随意减少、更换部件以及变动部件位置，如特殊情况需要变动，需与测试工艺确认同意后变动。资产类装备部件变更需在设备管理系统中启动变更电子流，维护装备成套关系(加工现场和所属地闲置区之间的移动除外)。
测试装备原则上固定后不进行挪动，如设有暗室测试用设备禁止踩踏，特殊情况需要挪动需要通过测试工艺同意，方可按照流程挪动。
4.1.2装备标识
测试装备参考《测试装备状态标识操作指导书》进行状态标识，不得随意更改装备状态标识，测试装备禁止乱贴乱画，车间增加管控标识需要经测试工艺评审。
4.1.3装备日常管理
1）非本区域负责的装备操作人员、工段长、测试工艺，原则上不能进入线体和使用装备，NPI或者研发、装备等进入线体需要备案注明进入线体事由。
2）测试装备在正常测试期间（包括班次之间的休息时间），车间操作员要承担对测试装备的现场管理责任，发现非操作人员、工段长、测试工艺的人员操作装备都要及时制止并知会测试工艺。
3）由于测试环境断电重启、装备变更、仪表送检等原因导致影响正常生产的，需提前通过生产要素制造`},{id:"wi:WIGC094",doc_code:"WIGC094",doc_name:"一次性设计问题单操作规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"EVT",summary:`目的
    为了确保各部门执行规范，避免错漏执行。
2.0范围
     适用于客户一次性问题单变更的操作与执行。
3.0 定义`,citations:["QPGC025"],tags:["质量体系","受控规程"],raw_file:"WIGC094一次性设计问题单操作规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
一次性设计问题单操作规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC094
文件版本
A.0
页数
共13页
编制部门 ：工 程 部
编制/修定：曾 林 丽
审 核 人 ：赵 俊 雷
批 准 人 ：周 伟 和
涉及部门：
□总经办    ■业务/PMC部   ■物流部       □设备部    ■工程部  
■品质部     □人资部      ■采购部       ■财务部    □新业务开发部  
■结构事业部  □逆变器事业部    □电源总装事业部      ■微模块事业部
编制/修定日期：2024-9-5         发布日期：2024-9-12
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
修订日期
A.0
新版本发行
/
[质量专员]
1.0目的
    为了确保各部门执行规范，避免错漏执行。
2.0范围
     适用于客户一次性问题单变更的操作与执行。
3.0 定义
3.1一次性设计问题单一般又被叫做三方单（指经过标杆客户内部研发、质量、商务三方评审），多为针对订单PO有
效，应对研发因FAI编码评审识别研发侧问题，走单修正或允收支撑报检出货、批量编码市场反馈新需求，需要紧急变更，正式EC周期长无法满足的场景，作为正式EC以外的辅助变更流程。
3.2同时针对部分编码发货需求密集，且需要立即变更无法控制新接入的PO数量的场景，存在版本有效的选项。
此时，变更执行流程与正式EC类似。
4.0 职责与权限
 4.1品质部：负责标杆客户一次性问题单的启动与下发，并对设变执行过程控制及完成闭环跟踪；
  4.2工程部：对一次性问题单进行筛选及指派，并制作变更资料，跟进变更后的执行情况；
  4.3业务部：对一次性问题单返修资料进行价格确认及评审，然后业务员下发一次性BOM订单，PMC根据返修工
艺卡进行物料投产；
  4.4采购部：通知供应商按变更后的资料来料；
  4.5仓库：按变更后的物料发料；
  4.6生产部：按照返修生产BOM及返修工艺卡进行装配；
  4.7财务部：对成本组与客户确认的报废费用、返修费用、产品单价结果进行追踪；
5.0 输入
   返修工艺卡、变更明细清单
6．0 输出
  设变管理系统
7.0工作流程图
8.0操作内容
  8.1设变发起
8.1.1文控接收标杆客户GDP系统自动下载在我司公共盘GDP_File所有变更资料（如图一），并下发数据（一次性
设计问题单号为000或HDP`},{id:"wi:WIGC096",doc_code:"WIGC096",doc_name:"ORT湿热、温循 操作规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"EVT",summary:`目的
规范ORT湿热/温循操作规范，保证程序文件的统一性.  
2.0范围
适用于逆变器工程全员及生产相关人员
3.0定义`,citations:["RS485","PDU800","SUN200"],tags:["质量体系","受控规程"],raw_file:"WIGC096 ORT湿热、温循 操作规范.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
ORT湿热、温循测试操作指导书
文件类别
■质量  □环安   □其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC096
文件版本
A.0
页数
共页
编制部门 ：工 程 部   
编制/修定：龚    庆 
审 核 人 ：李 光 辉 
批 准 人 ：谢 岳 铭 
涉及部门：
□总经办  ■业务/PMC     ■物流     ■设备     ■工程     ■品质
□结构事业部                       ■总装事业部           □微模块事业部
□人资     □采购         □财 务    □新业务开发部
                                                                       
编制/修定日期：2024-09-23                  发布日期： 2024-09-29
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新版发行
/
[质量专员]
2024-09-25
　
　
1.0目的
规范ORT湿热/温循操作规范，保证程序文件的统一性.  
2.0范围
适用于逆变器工程全员及生产相关人员
3.0定义
测试流程:参照客户要求,制定产品测试工序,并注明测试要求及注意事项.用于指导生产测试和检验的工程技术文件.
4.0职责和权限
4.1生产部：负责关键ORT的生产测试、日常点检，异常举手反馈，任务令及时完成率。
4.2工程部：TE负责关键ORT日常维护，保养点检，异常处理；PIE负责任务令接收/下发，评审。
4.3品质部：负责日常稽查、数据巡检上传，异常举手反馈。
4.4设备部：负责设备故障维修，日常/月度的维护保养。
4.5PMC部：负责ORT计划排产。
4.6物流部：负责仓库机柜周转。
5.0输入
《01076408调测指导书》.
6.0输出
  《ORT湿热/温循测试操作指导书》.
7.0 流程图
测试工艺流程图.
8.0作业内容
8.0 本ORT操作指导书适用`},{id:"wi:WIGC097",doc_code:"WIGC097",doc_name:"数字能源箱式产品打胶规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
制定密封胶打胶标准，从而规范密封胶打胶的操作要求。
2.0范围
本规范规定了结构产品打胶时的基本操作规程，工艺参数及要点。
本规范适用于结构产品装配过程中箱体外墙内侧、外封板、防火门、百叶窗、螺钉、空调四周、`,citations:[],tags:["NPI"],raw_file:"WIGC097 示范厂结构件产品装配打胶规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
示范厂结构件产品装配打胶规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC097
文件版本
A.0
页数
共15页
编制部门 ： 工 程 部 
编制/修定： 龙 小 英 
审 核 人 ： 赵 俊 雷
批 准 人 ： 周 伟 和
涉及部门：
□总经办   ■品质部    □财务部   □PMC 部    □工艺准备部   
■工程部   □采购部    □物流部   □业务部    □人力资源部
□电源总装事业部    逆变器事业部    □喷涂事业部     储能事业部   
□微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂
                                                                       
编制/修定日期：2025-02-28                   发布日期：2025-03-02
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新制作参考
- -
[质量专员]
2025.02.28
　
　
1.0目的
制定密封胶打胶标准，从而规范密封胶打胶的操作要求。
2.0范围
本规范规定了结构产品打胶时的基本操作规程，工艺参数及要点。
本规范适用于结构产品装配过程中箱体外墙内侧、外封板、防火门、百叶窗、螺钉、空调四周、
消防主机四周等打胶场景。
本规范适用于结构产品总装过程中的电控箱四周、三合一隔板、V型槽、机组拼缝、水箱内焊缝、
电控过线孔、钣金过线孔等打胶场景。
3.0定义
3.1密封胶是一种流动或挤不定型材料，其主要功能是填充构形间隙，起到密封的作用。这种材
料能够防止渗漏、防水，并且具有一定的粘结性。密封胶通过与接缝表面黏结而密封接缝，使
其成为一个整体，从而提高结构的密封性和耐用性。
3.2根据GB/T14682-2006《建筑密封材料术语》，密封胶（sealant）是以非成型状态嵌入接缝
中，通过与接缝表面黏结而密封接缝的`},{id:"wi:WIGC098",doc_code:"WIGC098",doc_name:"结构件外观维修作业规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
规范能源产品结构件的表面等级划分及外观质量要求。  
2.0范围
本工艺操作规范适用于我司金属结构件外观补漆、维修。
3.0定义`,citations:["DKBA040"],tags:["NPI","IQC"],raw_file:"WIGC098 结构件外观维修作业规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
结构件外观维修作业规范
文件类别
■质量  □环安   □其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC098
文件版本
A.0
页数
共7页
编制部门 ：工 程 部  
编制/修定：吴 青 青
审 核 人 ：赵 俊 雷 
批 准 人 ：周 伟 和 
涉及部门：
□总经办   ■品质部    □财务部   □PMC 部    □工艺准备部   
■工程部   □采购部    □物流部   □业务部    □人力资源部
□电源总装事业部    逆变器事业部    □喷涂事业部     储能事业部   
□微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂
                                                                       
编制/修定日期：2025.02.28                        发布日期：2025.03.02 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新制作
-
[质量专员]
2025.02.28
　
　
1.0目的
规范能源产品结构件的表面等级划分及外观质量要求。  
2.0范围
本工艺操作规范适用于我司金属结构件外观补漆、维修。
3.0定义
过对受损的钣金结构件进行维修补漆，可以恢复其原有的外观质量，满足客户对外观的要求。
4.0职责和权限
本规范适用于我司内部除客户特殊要求以外能源产品结构件的IQC和MQE来料验收和生产、发货检验
5.0输入
 无
6.0输出
 无
7.0 流程图
异常发现/外观面定义
物料标识/记录
物料下线
线外维修
维修自检/重新上线
8.0作业内容
8.1 生产自检员及品质检验员在进行检验过程，发现在线上无法及时维修的物料。
8.1.1 结构件的外观表面等级划分为三个级别：1级、2级和3级，各表面等级的定义如下。
 a.1级表面 ：重要外观表面，体现产品外观形象的表面，具有装饰性的表面，或客户不操作就可看到的`},{id:"wi:WIGC099",doc_code:"WIGC099",doc_name:"抛光标准工艺规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
熟悉抛光工艺,便于规范操作，指导员工生产
2.0范围
本公司所涉及相关抛光工艺方法的介绍
3.0定义`,citations:["ISO130"],tags:["NPI"],raw_file:"WIGC099 抛光工艺规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
抛光工艺规范
文件类别
■质量  □环安   □其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC099
文件版本
A.0
页数
共13页
编制部门 ： 工程部  
编制/修定： [质量专员]
审 核 人 ： 王林祥
批 准 人 ： 周伟和 
涉及部门：
□总经办   ■品质部    □财务部   □PMC 部    □工艺准备部   
■工程部   □采购部    □物流部   □业务部    □人力资源部
□电源总装事业部    □逆变器事业部     □喷涂事业部     ■储能事业部   
□微模块事业部      □新业务事业部     ■结构事业部     ■NPI工厂
                                                                       
编制/修定日期: 2025/2/25                        发布日期： 2025/3/4
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
初版发行
[质量专员]
2025/2/25
　
　
1.0目的
熟悉抛光工艺,便于规范操作，指导员工生产
2.0范围
本公司所涉及相关抛光工艺方法的介绍
3.0定义
3.1乱纹抛光
定义：乱纹抛光是一种特殊的表面处理技术，通常应用于不锈钢或其他金属材料上，以创造出独特的纹理效果。这种纹理不仅美观，还能改善材料的耐磨性和防滑性能。
3.2镜面抛光
定义：镜面抛光是一种表面处理工艺，通过精细的打磨和抛光，使材料表面达到高度光滑和反射效果，呈现出类似镜面的光泽。其目的是提升外观质感、增强装饰性，并改善表面的耐腐蚀性和清洁性。
4.0职责和权限
品质部：根据客户、图纸和相关规范等，对产品进行检测、建议等
工程部、储能事业部：与客户沟通，对产品相关抛光标准的制定、修改及废止
结构事业部、NPI工厂：抛光操作的人员需严格按照设备指导流程作业并按照图纸要求生产，做好日常保养，更换对应的砂纸片目数
5.0输入
无
6.0输出`},{id:"wi:WIGC100",doc_code:"WIGC100",doc_name:"逆变器通用老化房操作规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"EVT",summary:`目的
    本规范从老化房使用要求出发，主要定义了老化房/老化车关键技术规格、通用硬件要求、排风机选型及流量计算等。
范围
   本规范适用于3/4楼逆变器产品通用老化房，可作为工程\\工艺\\设备人员设计、建设、验证老化房的技术依据参考。
定义`,citations:["AC380","UL158","WIGC093","IEC603","GB181","GB595"],tags:["质量体系","受控规程"],raw_file:"WIGC100 逆变器通用老化房技术规范A.0.docx",body_snippet:`智造示范工厂科技有限公司
 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
逆变器通用老化房技术规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC100
文件版本
A.0
页数
共 20 页
编制部门 ：工 程 部
编制/修定：龚    勇 
审 核 人 ：谢 岳 铭 
批 准 人 ：王 志 伟
涉及部门：
□总经办     □业务/PMC部   □物流部       ■设备部    ■工程部  
■品质部     □人资部      □采购部       □财务部    □新业务开发部  
□结构事业部       ■逆变器事业部    电源总装事业部     微模块事业部
                                                                           
编制/修定日期：2025-02-11                     发布日期：2025-02-15
                                                                                                                                                            
文件修订履历管理
版本/
版次
更改内容摘要
更改
章节号
优化人
实施
日期
A.0
初版发行
/
[质量专员]
2025-02-11
1.0  目的
    本规范从老化房使用要求出发，主要定义了老化房/老化车关键技术规格、通用硬件要求、排风机选型及流量计算等。
范围
   本规范适用于3/4楼逆变器产品通用老化房，可作为工程\\工艺\\设备人员设计、建设、验证老化房的技术依据参考。
定义  
术语
缩略语
中文解释 
逆变器
Inverter
逆变器是把直流电能（电池、蓄电瓶）转变成定频定压或调频调压交流电的转换器。它由逆变桥、控制逻辑和滤波电路组成。
老化房
BI Room
是针对电子产品仿真出一种高温的测试环境，是提高产品稳定性、可靠性的重要实验设备、是各生产企业提高产品质量和竞争性的重要生产设备。
关键词：
通用老化房、温度控制、风机选型、老化车
输入
标杆客户通过GDP下发的《DKBA 14932-2023.03逆变器通用老化房技术规范A》
输出
《WIGC093 逆变器通用老化房技术规范A.0》
老化房技术要求
7.1老化房设计综合技术要求
序号
设备综合技术要`},{id:"wi:WIGC102",doc_code:"WIGC102",doc_name:"版本定制整机生产作业规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
1.1制造作业规范是指导生产的重要文件。结合标杆客户规范编写审查工作的经验和示范厂规范运行的现状，阐述了规范的来源、定义、以及当前标杆客户和示范厂规范编制主体、编制内容和实际应用方面的差别；讨论示范厂当前对制造规范定位，对制造规范中各方工作切分、编制主体、与关系等问通用规范间的题进行梳理。
1.2根据版本判定规则核实传递的版本定制信息是否正确，如果正确则根据调测与检验指导书进行软件加载；当生产部门相关作业员发现异常，填写生产问题反馈单给工艺处理。
1.3凡有定制要求的订单，生产必须按照订单要求的定制版本加载发货，本规范将从作业流程、安全要求和质量控制等方面，探讨生产作业规范的重要性和应遵循的原则。
2.0 范围`,citations:[],tags:["NPI"],raw_file:"WIGC102 版本定制整机生产作业规范A.0.docx",body_snippet:`智造示范工厂科技有限公司
 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
版本定制整机生产作业规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC102 
文件版本
A.0
页数
共 5页
编制部门 ：工 程 部 
编制/修定：谢 岳 林
审 核 人 ：李 亮 均 
批 准 人 ：石 蒋 平
涉及部门：
□总经办  □品质部    □财务部   □PMC 部    □工艺准备部   
□工程部   □采购部    □物流部   □业务部    □人力资源部
■电源总装事业部    ■逆变器事业部     □喷涂事业部    □储能事业部   
□微模块事业部      □新业务事业部    □结构事业部     □NPI工厂
                                                                           
编制/修定日期：2025-01-15                      发布日期：2025-01-20
文件修订履历管理
版本/
版次
更改内容摘要
更改
章节号
优化人
修订日期
A.0
初版发行
--
[质量专员]
2025-01-15
 1.0目的
1.1制造作业规范是指导生产的重要文件。结合标杆客户规范编写审查工作的经验和示范厂规范运行的现状，阐述了规范的来源、定义、以及当前标杆客户和示范厂规范编制主体、编制内容和实际应用方面的差别；讨论示范厂当前对制造规范定位，对制造规范中各方工作切分、编制主体、与关系等问通用规范间的题进行梳理。
1.2根据版本判定规则核实传递的版本定制信息是否正确，如果正确则根据调测与检验指导书进行软件加载；当生产部门相关作业员发现异常，填写生产问题反馈单给工艺处理。
1.3凡有定制要求的订单，生产必须按照订单要求的定制版本加载发货，本规范将从作业流程、安全要求和质量控制等方面，探讨生产作业规范的重要性和应遵循的原则。
2.0 范围
流程起点
版本信息预审核
流程终点
完成发货版本检验
业务范围
整机调测、整机检验
2.1任务分配:明确工作任务和责任，确保每`},{id:"wi:WIGC103",doc_code:"WIGC103",doc_name:"测试工具板管理操作指导书",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
   确保测试工具板能及时、准确地提供给生产现场，保证生产测试与维修业务的正常运行。
2.0范围
指导生产测试装备中所需工具板的领用、轮换、故障返回以及维修报废业务。
3.0定义`,citations:["ED000","BP000"],tags:["NPI"],raw_file:"WIGC103 测试工具板管理操作指导书A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
测试工具板管理操作指导书
                                    
文件类别
□质量  □环安   ■其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC103
文件版本
A.0
页数
共7页
编制部门 ：工 程 部  
编制/修定：刘 正 午
审 核 人 ：谢 岳 铭
批 准 人 ：王 志 伟
涉及部门：
□总经办   ■品质部    □财务部   □PMC 部    □工艺准备部   
■工程部   □采购部    □物流部   □业务部    □人力资源部
■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   
□微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂
                                                                       
编制/修定日期： 2025-02-25                        发布日期： 2025-03-01
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
标杆客户文件转化
- -
[质量专员]
2025-02-25
　
　
1.0目的
   确保测试工具板能及时、准确地提供给生产现场，保证生产测试与维修业务的正常运行。
2.0范围
指导生产测试装备中所需工具板的领用、轮换、故障返回以及维修报废业务。
3.0定义
名称
定义
工具板
用于搭建单板/整机测试环境的各种单板，(不包括背板、机框、风扇板、光模块和研发自制件)，分为特控工具板、轮换工具板和不轮换工具板。
特控工具板
使用时经常插拔(每测试1PCS产品单板需要插拔1次的工具板)，此类单板不能用于我司合同发货和备件发货。
轮换工具板
正常良品库新领工具板，使用时不经常拔插，也不用于老化环境，并且没有经过硬件变更，这类工具板经检测合格，可以用于我司合同发货和备件发货。
不轮换工具板
使用时不经常插拔，并且存在某些特殊情`},{id:"wi:WIGC104",doc_code:"WIGC104",doc_name:"泛网络测试设备通用维护保养操作指导书",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
   为专用测试设备提供维护保养操作指导，确保测试设备安全正常运行。 
2.0范围
泛网络机关测试设备。
3.0定义`,citations:["CSA820","AQ637","MS974","MS971","BP000","AQ631","CSA800","GB174"],tags:["NPI"],raw_file:"WIGC104 泛网络测试设备通用维护保养操作指导书 A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
泛网络测试设备通用维护保养操作指导书
文件类别
□质量  □环安   ■其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC104
文件版本
A.0
页数
共33页
编制部门 ：工 程 部  
编制/修定：周 要 轩
审 核 人 ：李 光 辉 
批 准 人 ：谢 岳 铭
涉及部门：
□总经办   ■品质部    □财务部      □PMC 部        □工艺准备部   
■工程部   □采购部    □物流部      □业务部        □人力资源部
■电源总装事业部   ■逆变器事业部    ■喷涂事业部    □储能事业部   
□微模块事业部     □新业务事业部    ■结构事业部    □NPI工厂
                                                                       
编制/修定日期： 2025-02-27                     发布日期： 2025-03-02
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
标杆客户文件转化
- -
[质量专员]
2025-02-27
　
　
1.0目的
   为专用测试设备提供维护保养操作指导，确保测试设备安全正常运行。 
2.0范围
泛网络机关测试设备。
3.0定义
名称
定义
专用测试设备
公司产品制造过程中所需用到的一些设备，这些设备在市场上不能够直接购置，需经过公司研发工程师、CAD设计人员以及测试工程师等设计、组装、调试出来。专用设备一般分布在ICT工段、老化工段、FT工段、温循以及整机测试工段，主要有ICT夹具、老化柜/装备、温循装备、FT测试装备、整机测试设备等。其中能独立完成对应工位功能测试的设备称为成套专用设备，一般包括ICT/FT夹具、老化柜/装备、温循/FT/ST测试装备；不能独立完成对应工位功能测试的单个或多个资产/部件称为散件装备。
4.0职责和权限
无
5.0输入
 /
6.0输出
 /
7.0 流程图
/`},{id:"wi:WIGC107",doc_code:"WIGC107",doc_name:"生产测试环境物料维护规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"DVT",summary:`目的
  
确保测试环境物料导入选型、验收、日常保养及使用管控的规范性,保证生产测试装备稳定、安全运行。
 
2.0范围`,citations:[],tags:["NPI"],raw_file:"WIGC107 生产测试环境物料维护规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
生产测试环境物料维护规范
文件类别
□质量  □环安   ■其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC107
文件版本
A.0
页数
共7页
编制部门 ：工 程 部  
编制/修定：浦 仕 俊 
审 核 人 ：谢 岳 铭
批 准 人 ：王 志 伟 
涉及部门：
□总经办   ■品质部    □财务部   □PMC 部    □工艺准备部   
■工程部   □采购部    □物流部   □业务部    □人力资源部
■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   
■微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂
                                                                       
编制/修定日期：2025-02-27                       发布日期：2025-03-02 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
标杆客户文件转化
--
[质量专员]
2025-02-27
　
　
1.0目的
  
确保测试环境物料导入选型、验收、日常保养及使用管控的规范性,保证生产测试装备稳定、安全运行。
 
2.0范围
泛网络/备件维修等所有制造（含EMS厂）测试相关环节。
3.0定义
规范泛网络生产测试装备中环境物料的的选型、领用、使用、保养、以及退出业务。
4.0职责和权限
无
5.0输入
 /
6.0输出
 /
7.0 流程图
     /
8.0作业内容
8.1 术语：
8.2环境物料的选型要求
8.2.1新产品导入新编码环境物料时，需由装备工程师/试制工程师在装备试制准入验收前提供评估验证报告，并将评估验证报告结果作为装备试制准入验收检查单的一部分；
8.2.2环境物料领用规格及使用要求以装备使用说明书或调测指导书中环境清单为准；
8.2.3选择环境物料规格时,需以此装备使用中的最大功耗、最恶劣使用环境计`},{id:"wi:WIGC108",doc_code:"WIGC108",doc_name:"螺纹紧固工艺规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
规范产品采用螺纹方式连接时的紧固操作工艺规程。  
2.0范围
本规范规定了公司产品采用螺纹方式连接时的紧固操作工艺规程。
本规范适用于我公司各种产品常见螺纹连接的装配，可作为工艺人员制作工艺文件、现场工艺控制以及生产螺纹连接工具准备的依据；`,citations:["DKBA012"],tags:["NPI"],raw_file:"WIGC108 螺纹紧固工艺规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
螺纹紧固工艺规范
文件类别
■质量  □环安   □其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC108
文件版本
A.0
页数
共9页
编制部门 ： 工 程 部 
编制/修定： 史 文 涵 
审 核 人 ： 赵 俊 雷
批 准 人 ： 周 伟 和
涉及部门：
总经办   ■品质部    □财务部   □PMC 部    □工艺准备部   
■工程部   □采购部    □物流部   □业务部    □人力资源部
□电源总装事业部    逆变器事业部    □喷涂事业部     储能事业部   
□微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂
                                                                       
编制/修定日期：2025.02.28                      发布日期：2025.03.06 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
 新制作
-
[质量专员]
2025.02.28
　
　
1.0目的
规范产品采用螺纹方式连接时的紧固操作工艺规程。  
2.0范围
本规范规定了公司产品采用螺纹方式连接时的紧固操作工艺规程。
本规范适用于我公司各种产品常见螺纹连接的装配，可作为工艺人员制作工艺文件、现场工艺控制以及生产螺纹连接工具准备的依据；
规范中未覆盖场景以图纸为准。
3.0定义
使用装配工具将一件或者多件被连接件与螺纹紧固件紧密结合在一起，产生预紧力，实现夹紧、通流、密封功能的过程。
4.0职责和权限
工程部：规范文件制作、作业流程规范、作业指导书等相关资料制作与修订
生产部：依照规范确保产线使用正确螺纹紧固方式
品质部：以规范为基准对产品进行检验
5.0输入
标杆客户数字能源紧固规范、产品质量控制要点
6.0输出
各种产品常见螺纹连接的装配、工艺文件
7.0 流程图
常用螺钉规格常用螺钉规格
常用螺钉规格
常用螺钉规格
紧固扭矩`},{id:"wi:WIGC109",doc_code:"WIGC109",doc_name:"拉丝工艺规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
 通过标准化操作流程和参数确保产品质量一致性、提高生产效率、降低综合成本，并保障生产安全。
2.0范围
本公司所涉及相关拉丝工艺方法的介绍。
3.0定义`,citations:[],tags:["NPI"],raw_file:"WIGC109拉丝工艺规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
拉丝工艺规范
文件类别
■质量  □环安   □其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC109
文件版本
A.0
页数
共7页
编制部门 ：  工程部
编制/修定：   [质量专员]
审 核 人 ：  王林祥
批 准 人 ：  周伟和
涉及部门：
□总经办   ■品质部    □财务部       □PMC 部       □工艺准备部   
■工程部   □采购部    □物流部       □业务部       □企业管理部
□电源总装事业部    □逆变器事业部     □喷涂事业部     ■储能事业部   
□微模块事业部      □新业务事业部     ■结构事业部     ■NPI工厂
                                                                       
编制/修定日期： 2025/3/28                        发布日期： 2025/4/3
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
初版发行
-
[质量专员]
2025/3/17
　
　
1.0目的
 通过标准化操作流程和参数确保产品质量一致性、提高生产效率、降低综合成本，并保障生产安全。
2.0范围
本公司所涉及相关拉丝工艺方法的介绍。
3.0定义
3.1 直纹拉丝
     定义：沿单一方向拉丝，纹路平行（如发丝纹）。
3.2 乱纹拉丝
     定义：通过不同方向交叉拉丝，形成无规则纹路（雪花纹）。
4.0职责和权限
品质部：根据客户、图纸和相关规范等，对产品进行检测、建议等。
工程部、储能事业部：与客户沟通，对产品相关拉丝标准的制定、修改及废止。
结构事业部、NPI工厂：拉丝操作的人员需严格按照设备指导流程作业并按照图纸要求生产，做好日常保养，更换对应的砂纸片目数。
5.0输入
无
6.0输出
无
7.0 流程图
无
8.0作业内容
8.1 直纹拉丝
8.1.1 特点：
方向性：纹路与加工方向一致。
均匀`},{id:"wi:WIGC110",doc_code:"WIGC110",doc_name:"逆变器测试直通率管理规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
通过一系列激励方案，提升员工的工作质量，主动积极的识别问题点，更好的落实执行工作内容，制定完善的奖惩机制，达到各部门协同合作，共同进步，提升测试直通率，达成目标并形成固化流程，长期保持。
2.0范围
逆变器工程，生产，品质
3.0定义`,citations:[],tags:["NPI","直通率"],raw_file:"WIGC110 逆变器测试直通率管理规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
逆变器测试直通率管理规范
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC110
文件版本
A.0
页数
共6页
编制部门 ：工 程 部   
编制/修定：龚    勇 
审 核 人 ：李 光 辉 
批 准 人 ：谢 岳 铭 
涉及部门：
□总经办   ■品质部    □财务部        ■PMC 部         ■工艺准备部   
■工程部   □采购部    □物流部        ■业务部         □企业管理部
■电源总装事业部    □逆变器事业部     □喷涂事业部     □储能事业部   
□微模块事业部      □新业务事业部     □结构事业部     □NPI工厂
                                                                       
编制/修定日期：2025-04-02                          发布日期： 2025-04-05
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新版发行
/
[质量专员]
2025-04-02
　
1.0目的
通过一系列激励方案，提升员工的工作质量，主动积极的识别问题点，更好的落实执行工作内容，制定完善的奖惩机制，达到各部门协同合作，共同进步，提升测试直通率，达成目标并形成固化流程，长期保持。
2.0范围
逆变器工程，生产，品质
3.0定义
3.1测试设备TPM维护保养：划分区域，工程分配责任人管理，制定标准，生产执行每日/周点检保养，工程主导每月保养点检，品质每日/周/月稽查，共同改善；设备保养导入IT化管控，严格落实执行，做到0异常。
3.2测试设备延误：通过T-1锁排提前确认生产设备，软件，备件状态，提前CHICK，确保正常生产；每月针对（工程/维修/员工）开展测试技能培训考核，提升岗位技能；线缆/备件加入IT化管控，库存水位/点检保养系统预警，做到0异常，保障生产顺畅`},{id:"wi:WIGC111",doc_code:"WIGC111",doc_name:"储能集装箱参数管理规范",rev:"A.0",department:"工程部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r储能集装箱参数管理规范\r\r\r文件类别\x07■质量  □环境  □职业健康与安全",citations:["WI630"],tags:["NPI"],raw_file:"WIGC111 储能集装箱参数管理规范 A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r储能集装箱参数管理规范\r\r\r文件类别\x07■质量  □环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIGC111\x07\x07文件版本\x07A.0\x07页数\x07共6页\x07\x07\r编制部门 ：工 程 部\r\r编制/修定：王 圣 宝\r\r审 核 人 ：唐    易\r\r批 准 人 ：顾 成 剑\r\r涉及部门：\r□总经办     ■品质部     □财务部     □PMC 部         □工艺准备部   \r■工程部     □采购部     □物流部     □业务部         ■企业管理部\r□电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   \r■微模块事业部      □新业务事业部     □结构事业部     □NPI工厂\r\r编制/修定日期：2025-03-20\x07发布日期：2025-04-05\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07新发行\x07/\x07王圣宝\x072025/03/20\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r为规范系统/项目中各类参数的配置、维护及使用流程，确保参数管理的统一性、安全性和可追溯性，特制定本规范\r\v2.0 范围\r适用于所有系统、应用程序、数据库及第三方服务中的参数配置，包括但不限于：  \r2.1环境参数（温度、湿度、无尘等级）  \r2.2设备参数（能耗、故障率、维护周期等）  \r2.3工艺参数（试水时间、流量、注液大小，氦检漏率等）  \r2.4安全相关参数（密钥、令牌、访问权限等）\r\v3.0 定义\r关键工艺参数：装配/测试/包装/车间环境等环节，对产品有严重性能/外观风险的岗位，需进行参数化管理的"},{id:"wi:WIGC112",doc_code:"WIGC112",doc_name:"能源产品整机测试与老化环境保养指导书",rev:"A.1",department:"工程部",module:"wi",npi_phase:"PVT",summary:`目的
1.1 规范测试与老化装备及老化配电系统的维护保养工作，明确员工操作规范性，保障测试与老化装备及老化配电系统状态良好，安全稳定可靠运行，延长装备/设备使用寿命，减少误测和安全隐患，保障生产测试顺畅进行。
2.0范围
2.1本指导书适用于从资源科申购用于测试基础能源整机产品的测试装备、老化车/柜、老化配电柜、测试环境等的维护保养指导。适用于自制（基础能源制造部）及能源EMS厂。
3.0定义`,citations:[],tags:["NPI"],raw_file:"WIGC112 能源产品整机测试与老化环境保养指导书A.1.docx",body_snippet:`智造示范工厂科技有限公司
 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
能源产品整机测试与老化环境保养指导书
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC112 
文件版本
A.1
页数
共19页
编制部门 ：工 程 部
 
编制/修定：李 常 闯
审 核 人 ：李 亮 均
批 准 人 ：石 蒋 平
涉及部门：
□总经办     ■品质部     □财务部     □PMC 部         □工艺准备部   
□工程部     □采购部     □物流部     □业务部         □企业管理部
■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   
□微模块事业部      □新业务事业部     □结构事业部     □NPI工厂
                                                                       
编制/修定日期：2025-08-19                          发布日期：2025-08-26
文件修订履历管理
版本/
版次
更改内容摘要
更改
章节号
优化人
实施日期
A.0
内容新发行
[质量专员]
2025-07-08
A.1
增加设备无纸化点检规范说明
[质量专员]
2025-08-15
　
1.0目的
1.1 规范测试与老化装备及老化配电系统的维护保养工作，明确员工操作规范性，保障测试与老化装备及老化配电系统状态良好，安全稳定可靠运行，延长装备/设备使用寿命，减少误测和安全隐患，保障生产测试顺畅进行。
2.0范围
2.1本指导书适用于从资源科申购用于测试基础能源整机产品的测试装备、老化车/柜、老化配电柜、测试环境等的维护保养指导。适用于自制（基础能源制造部）及能源EMS厂。
3.0定义
3.1  本文档规范了在基础能源产品制造生产过程中涉及到的测试与老化装备、测试/老化线缆、老化配电系统、测试工装及测试环境物料的使用和维护要求，为测试与老化装备及老化配电系统提供通用的维护保养操作指导，明确各角色`},{id:"wi:WIGC114EMS",doc_code:"WIGC114EMS",doc_name:"项目管理规",rev:"A.1",department:"工程部",module:"wi",npi_phase:"EVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                                                                                                                                                                                                     EMS项目管理规范 文件类别 ■质量  □环境  □职业健康与安全  □其他",citations:["WIGC114","IATF169"],tags:["NPI","IQC","直通率"],raw_file:"WIGC114EMS项目管理规A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
EMS项目管理规范
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIGC114
文件版本
A.1
页数
共10页
编制部门 ：工程部
编制/修定：[质量专员]
审 核 人 ：[质量专员]
批 准 人 ：王志伟
涉及部门：
□总经办     ■品质部     ■财务部     ■PMC 部         □工艺准备部   
■工程部     □采购部     □物流部     □业务部         □企业管理部
■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   
□微模块事业部      □新业务事业部     □结构事业部     □NPI工厂
                                                                       
编制/修定日期： 2025-9-25                          发布日期：2025-9-26
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
初版发行
\\
[质量专员]
2025-09-11
A.1
4.10 针对项目管理相关任命的规定（需要加盖公章）
8.4.2项目总结复盘需制定统一格式模板，从成本、周期、质量、人力资源等多维度提炼复盘结论，强化总结的全面性与指导价值
10.1 刷新《异常处理单》/《变更申请单》格式，增加输入来源
\\
[质量专员]
2025-09-25
　
　
1.0 目的​
1.1规范公司所有EMS（电子制造服务）产品项目的全生命周期管理流程，确保项目在既定质量、成本、交期（QCD）目标下高效交付。本规范聚焦于客户来料后的总装、测试、调试、检验及发货环节，确保生产工艺和加工能力得以实现，并建立标准化项目管理体系，实现从接单到量产全生命周期可控，通过流程固化与数据驱动，达成以下目标：
质量目标：产品一次合格率（FPY）≥98%，客户投诉率≤0.5 次 / 万件
交期目标：订单准时交付率（OTD）≥`},{id:"wi:WIKF011",doc_code:"WIKF011",doc_name:"LCD产品出货检验规范",rev:"A.4",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \r  LCD 产品出货检验规范\r\r文件类别\x07■质量  □环境  □健康安全",citations:["WIKF008"],tags:["质量体系","受控规程"],raw_file:"WIKF011 LCD产品出货检验规范A.4.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \r  LCD 产品出货检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF011\x07\x07文件版本\x07A.4\x07页数\x07共 4页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定： 杜 建 荣\r\r审 核 人 ： 蒋 易 周     \r\r批 准 人 ： 邓    伟  \r\r涉及部门：\r■总经办   ■业务/PMC    ■物流部    ■设备部   ■工程部   ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部  ■微模块事业部\r■人资部   ■采购部      ■财务部    ■新业务开发部\r编制/修定日期：2022-04-14\x07发布日期：2022-04-18\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.3\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.4\x07更改文件编号、表单编号，版本升级\x07\x07[质量专员]\x072022-04-14\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0 目的\r规范我司LCD产品出货规范性和标准性，保证产品出厂性能，确保合格产品出货。\r2.0 范围\r适用于公司所有LCD产品。	\r3.0 定义\r无\r4.0 职责及权限\r工作人员按照LCD产品出货规范检测，确保合格产品出货。\r5.0输入\r无\r6.0输出\rLCD产品终检表。\r7.0工作程序\r7.1工作流程图\r\b\b\b\b\b\b\b\r\b\b\r\b\r\b\r\r\b\b\r\r7.2防水测试\r   7.2.1检查产品是否根据《LCD防水检验规范》要求做防水测试，是否保存《LCD防水检验记录表》；\r7.2.2检查《LCD防水检验记录表》，产品防水测试结果是否合格。\r  7.3功能测"},{id:"wi:WIKF012",doc_code:"WIKF012",doc_name:"LCD产品现场验收规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD产品现场验收规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他",citations:["WIKF009"],tags:["质量体系","受控规程"],raw_file:"WIKF012 LCD产品现场验收规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD产品现场验收规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF012\x07\x07文件版本\x07A.2\x07页数\x07共 4页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣\r\r审 核 人 ：蒋 易 周     \r\r批 准 人 ：邓    伟\r\r涉及部门：\r■总经办   ■业务/PMC   ■物流部   ■设备部   ■工程部   ■品质部\r■结构事业部      ■逆变器事业部   ■电源总装事业部   ■微模块事业部\r■人资部   ■采购部     ■财务部    ■新业务开发部\r编制/修定日期：2022-04-14\x07发布日期：2022-04-18\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072022-04-14\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0 目的\r规范我司LCD产品在使用地点安装操作的规范性和标准性，保证产品交付能达到客户的满意，提高我司产品的品牌形象和市场竞争力。\r2.0 范围\r适用于公司所有LCD产品。\r3.0定义\r无\r4.0 职责及权限\r   LCD产品现场工作人员应根据操作规范进行检查测试，保证交付能达到客户满意。\r5.0输入\r无\r6.0 输出\r《LCD产品现场验收流程卡》。\r7.0 工作程序\r7.1工作流程图\r\b\b\b\b\r\b\b\b\b\r\r\b\b\b\r\b\r\r7.2整机检查\r7.2.1检查产品与地基（落地式安装）或立柱（悬挂式安装）安装位置是否正确，连接是否牢固；\r7.2.2检查安装位置和紧固部位“三"},{id:"wi:WIKF014",doc_code:"WIKF014",doc_name:"LCD产品质量控制规范",rev:"A.3",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD产品质量控制规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他",citations:["WI730","WIKF010"],tags:["IQC"],raw_file:"WIKF014 LCD产品质量控制规范A.3.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD产品质量控制规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF014\x07\x07文件版本\x07A.3\x07页数\x07共 6页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣\r\r审 核 人 ：蒋 易 周     \r\r批 准 人 ：邓    伟\r\r涉及部门：\r■总经办  ■业务/PMC  ■物流部   ■设备部   ■工程部    ■品质部\r■结构事业部      ■逆变器事业部   ■电源总装事业部  ■微模块事业部\r■人资部   ■采购部    ■财务部    ■新业务开发部\r编制/修定日期：2022-04-14\x07发布日期：2022-04-18\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.2\x07增加履历， 版本升级\x07/\x07[质量专员]\x072017-07-03\x07\x07A.3\x07更改文件编号，版本升级 \x07/\x07[质量专员]\x072022-04-14\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目地\r规范我司LCD产品生产、加工规范性和标准性，保证产品质量要求。\r2.0范围\r适用于公司所有LCD产品。\r3.0定义\r无\r4.0 职责及权限\r   LCD产品有关工作人员需按工作流程操作，保证产品质量要求。\r5.0 输入\rLCD产品装配检验指导书SIP。\r6.0输出\rLCD产品检验流程卡。\r7.0工作程序\r7.1工作流程图\r\b\b\b\b\r\b\b\b\b\b\r\b\b\r\r\b\b\b\b\r\b\b\b\b\b\b\b\b\b\r\b\r\b\b\r\b\r\b\r\b\b\b\b\r\b\b\r备注：LCD产品生产、加工请严格按照《LCD产品质量控制计划PMP》执行。\r7.2 装配前准备阶段\r复检到装配区的物料（自制件和外购件）是否有品质异常；其中外"},{id:"wi:WIKF015",doc_code:"WIKF015",doc_name:"开关电源来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r开关电源来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他",citations:["WIKF011"],tags:["IQC"],raw_file:"WIKF015 开关电源来料检验规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r开关电源来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF015\x07\x07文件版本\x07A.2\x07页数\x07共 4页\x07\x07\r    编制部门 ：新业务开发部\r\r编制/修定： 杜 建 荣\r\r审 核 人 ： 蒋 易 周\r\r批 准 人 ： 邓    伟 \r\r涉及部门：\r■总经办   ■业务/PMC    ■物流部    ■设备部   ■工程部   ■品质部\r■结构事业部     ■逆变器事业部   ■电源总装事业部    ■微模块事业部\r■人资部   ■采购部       ■财务部   ■新业务开发部\r编制/修定日期：2022-04-14\x07发布日期：2022-04-18\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.2\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072022-04-14\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0 目的\r规范开关电源来料检验标准，保证开关电源来料质量。\r2.0 范围\r适用于本公司所有LCD产品中开关电源的来料检验。\r3.0 定义\r3.1满负载：设备所承受的最大负载功率（例：600W开关电源用600Ｗ负载进行测试）。\r3.2减额曲线图:即厂商所提供的,在满负载情况下，电源随环境温度的升高而产生的过温保护图。\r3.3极限温度：厂商提供电源能承受温度的极值。\r4.0 职责及权限\r   开关电源来料检验工作人员应遵循作业规范，保证来料质量。\r5.0输入\r无\r6.0 输出\r开关电源来料检验表。\r7.0 工作程序\r  7.1检验类型\r采取采样检验方法，抽样检验，参照品质部抽样计划标准书中正常检查一次抽样方案进行抽样检验"},{id:"wi:WIKF017",doc_code:"WIKF017",doc_name:"LCM检查规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"MP",summary:"本文件系智造示范工厂科技有限公司现行受控文件，规范LCM检查规范之作业要求与控制标准，确保工序质量受控。",citations:[],tags:["质量体系","受控规程"],raw_file:"WIKF017 LCM检查规范A.2.doc",body_snippet:""},{id:"wi:WIKF019LCD",doc_code:"WIKF019LCD",doc_name:"整机上电检测规范",rev:"A.2",department:"研发部 / IQC",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD 整机上电检测规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □",citations:["WIKF019","WIKF013"],tags:["质量体系","受控规程"],raw_file:"WIKF019LCD整机上电检测规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD 整机上电检测规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF019\x07\x07文件版本\x07A.2\x07页数\x07共 7页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣 \r\r审 核 人 ：蒋 易 周 \r\r批 准 人 ：邓    伟 \r\r涉及部门：\r■总经办   ■业务/PMC   ■物流部   ■设备部   ■工程部     ■品质部\r■结构事业部     ■逆变器事业部   ■电源总装事业部     ■微模块事业部\r■人资部   ■采购部     ■财务部    ■新业务开发部\r\r编制/修定日期：2022-04-15\x07发布日期：2022-04-19\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号，版本升级\x07/\x07[质量专员]\x072022-04-15\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r确保LCD整机的安全可靠性，对整机进行电气功能检测，以保证我司LCD产品品质。\r2.0适用范围\r我司所有LCD产品。\r3.0定义\r无\r4.0 职责及权限\r   操作人员按照LCD整机上电检测流程作业，做好检验记录。\r5.0输入\r无\r6.0输出\rLCD整机上电检验表。\r7.0工作程序：\r7.1工作流程图\r\b\b\b\b\b\b\b   \r\r7.2 检测准备\r检查测试设备准备是否齐全，包括万用表、螺丝刀、亮度检测仪、噪音测试仪、温度测试仪、风速计、温度计。\r7.3 上电前检测\r7.3.1 线路检查\r检查线材是否正确，尤其是屏信号线与背光电源线。并对照电路接线图及装配操作指导"},{id:"wi:WIKF021",doc_code:"WIKF021",doc_name:"LCD直通风散热设计规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD直通风散热设计规范\r\r文件类别\x07■质量  □环境  □健康安全  □",citations:["WIKF014"],tags:["质量体系","受控规程"],raw_file:"WIKF021 LCD直通风散热设计规范A.2.doc",body_snippet:"\r\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rLCD直通风散热设计规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF021\x07\x07文件版本\x07A.2\x07页数\x07共 9页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣\r\r审 核 人 ：蒋 易 周      \r\r批 准 人 ：邓    伟\r\r涉及部门：\r■总经办  ■业务/PMC   ■物流部    ■设备部    ■工程部   ■品质部\r■结构事业部     ■逆变器事业部   ■电源总装事业部     ■微模块事业部\r■人资部   ■采购部      ■财务部    ■新业务开发部\r编制/修定日期：2022-04-15\x07发布日期：2022-04-19\x07\x07\r\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号，版本升级。\x07/\x07[质量专员]\x072022-04-15\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0 目的\r规范直通风散热设计标准，为散热设计提供依据，提高产品研发质量。\r2.0 适用范围\r此规范适合公司所有直通风LCD产品的散热设计。\r3.0 定义\r 热设计：综合利用导热、对流及辐射三种换热手段，设计发热源至环境的低热阻通路，以满足设\r备散热要求的过程称为热设计。 \r热仿真：借助于数值计算软件Icepak4.2，模拟计算设备或部件散热状况的方法称为热仿真。\r直通风散热：采用风机对LCD设备进行空气强对流散热。\r4.0 职责及权限\r   LCD直通风散热设计人员应根据设计标准，为散热设计提供可靠的依据，提高产品研发质量。\r5.0输入\r客户和研发部提供的产品Pro/E模型、2"},{id:"wi:WIKF022",doc_code:"WIKF022",doc_name:"风机来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:`目的
规范风机来料检验标准，保证风机来料质量。
2.0适用范围
适用于本公司所有LCD产品中使用的风机。
3.0定义；适用范围
适用于本公司所有LCD产品中使用的风机。
3.0定义
无
4.0 职责及权限`,citations:["WIKF015"],tags:["IQC","物料认证"],raw_file:"WIKF022 风机来料检验规范A.2.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
 风机来料检验规范
文件类别
■质量  □环境  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIKF022
文件版本
A.2
页数
共 4页
编制部门 ：新业务开发部
编制/修定：杜 建 荣 
审 核 人 ：蒋 易 周 
      批 准 人 ：邓    伟
涉及部门：
■总经办   ■业务/PMC    ■物流部   ■设备部   ■工程部  ■品质部
■结构事业部    ■逆变器事业部   ■电源总装事业部   ■微模块事业部
■人资部   ■采购部     ■财务部    ■新业务开发部
编制/修定日期：2022-04-15
发布日期：2022-04-19
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.1
增加履历，版本升级。
/
[质量专员]
2017-07-03
A.2
更改文件编号、表单编号，版本升级
/
[质量专员]
2022-04-15
    
1.0目的
规范风机来料检验标准，保证风机来料质量。
2.0适用范围
适用于本公司所有LCD产品中使用的风机。
3.0定义
无
4.0 职责及权限
风机来料工作人员应根据检验标准对来料进行检验，做好风机检测报告记录。
5.0输入
无
6.0输出
风机检测报告。
7.0 工作程序
7.1主要测试设备
直流稳压电源、万用表、测速仪、带表卡尺等。
7.2检验项目
包装与外观、标准尺寸、线材型号与线排序，启动、运行噪音、振动、电流与转速。
LCD主要应用风机有离心风机，轴流风机，贯流风机等。
         轴流风机                     离心风机                贯流风机
7.2.1包装与外观
包装完好，可以识别产品名称/规格数量/生产日期/是否合格供应商；外观不允许有碰伤、螺丝孔滑牙、扇叶缺角、划伤、变形；标签完整清晰；有ROHS标识。
7.2.2标准尺寸
根据产品规格书标注的尺寸和公差，用卡尺对抽检的样机进行测量和判定。
7.2.3线材型号与线排序
根据产品规格书线材和排序，产品必须符合图纸/规格书`},{id:"wi:WIKF023",doc_code:"WIKF023",doc_name:"防雷器来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r 防雷器来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他",citations:["WIKF016"],tags:["IQC"],raw_file:"WIKF023 防雷器来料检验规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r 防雷器来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF023\x07\x07文件版本\x07A.2\x07页数\x07共 4页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣 \r\r审 核 人 ：蒋 易 周 \r\r     批 准 人 ：邓    伟\r涉及部门：\r■总经办   ■业务/PMC   ■物流部   ■设备部   ■工程部   ■品质部\r■结构事业部      ■逆变器事业部   ■电源总装事业部   ■微模块事业部\r■人资部   ■采购部     ■财务部   ■新业务开发部\r编制/修定日期：2022-04-18\x07发布日期：2022-04-22\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072022-04-18\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的\r为了规范防雷器来料检验，保证防雷器来料质量。\r2.0 适用范围\r适用于本公司所有LCD产品中所用防雷器。\r3.0 定义\r无\r4.0 职责及权限\r  防雷器来料检验人员应根据操作规范作业，确保防雷器来料质量。\r5.0 输入\r无\r6.0 输出\r防雷器来料检验表\r7.0 工作程序\r7.1 检验类型\r抽样检验，参照品质部抽样计划标准书中正常检查一次抽样方案进行抽样检验。\r7.2 主要测试设备\r卡尺，万用表\r7.3 防雷器外观检验\r外表无破损刮伤痕迹，相配套的螺丝、卡扣无损坏缺失，标识清晰。\r\r    \r\r7.4 尺寸检验\r   根据防雷器规格书或图纸，使用卡尺测量，判断是否符合尺"},{id:"wi:WIKF024",doc_code:"WIKF024",doc_name:"定时器来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r定时器来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07",citations:["WIKF017"],tags:["IQC"],raw_file:"WIKF024定时器来料检验规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r定时器来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF024\x07\x07文件版本\x07A.2\x07页数\x07共 5页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣 \r\r审 核 人 ：蒋 易 周 \r\r批 准 人 ：邓    伟\r涉及部门：\r\r■总经办   ■业务/PMC    ■物流部   ■设备部   ■工程部   ■品质部\r■结构事业部      ■逆变器事业部   ■电源总装事业部   ■微模块事业部\r■人资部   ■采购部       ■财务部    ■新业务开发部\r编制/修定日期：2022-04-18\x07发布日期：2022-04-22\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072022-04-18\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的：\r为了规范定时器来料检验要求，保证定时器来料质量\r2.0适用范围\r适用于本公司所有LCD产品中所用的定时器。\r3.0定义\r无\r4.0 职责及权限\r  定时器来料检验工作人员应根据操作规范作业，确保定时器来料质量。\r5.0输入\r无\r6.0输出\r定时器来料检验表\r7.0 工作程序\r 7.1检验类型\r抽样检验，参照品质部抽样计划标准书中正常检查一次抽样方案进行抽样检验。\r7.2 主要测试设备\r万用表、卡尺 \r\r\r\r7.3外观检验\r外表无破损刮伤痕迹，相配套的螺丝无损坏缺失，按键灵敏，标识清晰。\r7.4 尺寸检验\r根据定时器规格书或图纸，使用卡尺测量，判断是否符合尺寸要求。\r7.5 功"},{id:"wi:WIKF025",doc_code:"WIKF025",doc_name:"空气开关来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r空气开关来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他",citations:[],tags:["IQC"],raw_file:"WIKF025空气开关来料检验规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r空气开关来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF025\x07\x07文件版本\x07A.2\x07页数\x07共 4页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣 \r\r审 核 人 ：蒋 易 周 \r\r    批 准 人 ：邓    伟\r涉及部门：\r\r■总经办   ■业务/PMC    ■物流部   ■设备部   ■工程部   ■品质部\r■结构事业部      ■逆变器事业部   ■电源总装事业部    ■微模块事业部\r■人资部   ■采购部     ■财务部    ■新业务开发部\r编制/修定日期：2021-07-12\x07发布日期：2021-07-16\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072021-07-12\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0 目的：\r规范空气开关来料检验，保证空气开关来料质量。\r2.0 适用范围\r适用于本公司所有LCD产品中所用的空气开关。\r3.0 定义\r无\r4.0 输入\r无\r5.0 输出\r空气开关来料检验表\r6.0 工作程序\r6.1 检验类型\r抽样检验，参照品质部抽样计划标准书中正常检查一次抽样方案进行抽样检验。\r6.2 外观检验\r外表无破损刮伤痕迹，相配套的螺丝、卡扣无损坏缺失，标识清晰，开关拨动灵活，外形尺寸与规格要求相符。\r6.3 检测设备\r万用表\r\b\r\r\r\r\r\r\r\r\r\r\r6.4 检验方法\r6.4.1 将万用表“POWER”按下，显示屏亮，确认万用表在工作状态。并将档位"},{id:"wi:WIKF026",doc_code:"WIKF026",doc_name:"灯带来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r 灯带来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07",citations:["AC220","WIKF019"],tags:["IQC"],raw_file:"WIKF026灯带来料检验规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r 灯带来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF026\x07\x07文件版本\x07A.2\x07页数\x07共 4页\x07\x07编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣 \r\r审 核 人 ：蒋 易 周 \r\r批 准 人 ：邓    伟\r涉及部门：\r\r■总经办   ■业务/PMC   ■物流部   ■设备部   ■工程部   ■品质部\r■结构事业部     ■逆变器事业部    ■电源总装事业部   ■微模块事业部\r■人资部   ■采购部       ■财务部    ■新业务开发部\r\r编制/修定日期：2022-04-18\x07发布日期：2022-04-22\x07\x07\r\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072022-04-18\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r规范灯带来料检验，保证灯带来料质量。\r2.0 适用范围\r适用于本公司LCD产品所用灯带。\r3.0 定义\r无。\r4.0 职责及权限\r   灯带来料检验工作人员应根据操作规范作业，确保灯带来料质量。\r5.0输入\r无。\r6.0输出\r灯带来料检验表。\r7.0 工作程序\r7.1检验类型\r全部检验。\r7.2环境要求\r常温。\r7.3检验条件要求\r开关电源输入：AC220V。\r开关电源输出：对应灯带的额定电压。\r7.4主要测检验设备\r开关电源、万用表。\r\b\b\r\r\r\r\r\r\r\r\r   注：开关电源电压要求对应灯带额定电压，且功率应超过灯带额定功率30%。\r7.5外观检验\r外表无刮伤破损痕"},{id:"wi:WIKF028",doc_code:"WIKF028",doc_name:"喇叭来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:`目的
规范喇叭来料检验，保证喇叭来料质量。
2.0适用范围
适用于本公司所有LCD产品所用喇叭。
3.0定义；适用范围
适用于本公司所有LCD产品所用喇叭。
3.0定义
无。
4.0 职责及权限`,citations:["WIKF020","AC220"],tags:["IQC"],raw_file:"WIKF028 喇叭来料检验规范A.2.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
   喇叭来料检验规范
文件类别
■质量  □环境  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIKF028
文件版本
A.2
页数
共 4页
         编制部门 ：新业务开发部
编制/修定： 杜 建 荣
审 核 人 ： 蒋 易 周
批 准 人 ： 邓    伟
涉及部门：
■总经办   ■业务/PMC  ■物流部    ■设备部     ■工程部   ■品质部
■结构事业部      ■逆变器事业部   ■电源总装事业部     ■微模块事业部
■人资部   ■采购部      ■财务部    ■新业务开发部
编制/修定日期：2022-04-18
发布日期：2022-04-22
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.1
增加履历，版本升级。
/
[质量专员]
2017-07-03
A.2
更改文件编号、表单编号，版本升级
/
[质量专员]
2022-04-18
    
1.0目的
规范喇叭来料检验，保证喇叭来料质量。
2.0适用范围
适用于本公司所有LCD产品所用喇叭。
3.0定义
无。
4.0 职责及权限
    喇叭来料检验工作人员应根据操作规范作业，确保喇叭来料的质量。
5.0输入
无。
6.0输出
喇叭来料检验表
7.0 工作程序
7.1检验类型
抽样检验，参照品质部抽样计划标准书中正常检查一次抽样方案进行抽样检验。
7.2外观检验
外表无刮伤痕迹，铁架、防磁罩无氧化、纸盘、阻尼器无破损，且外包装有厂商提供的产品合格证明以及环保证明。
7.3环境要求
常温。
7.4检测条件要求
开关电源输入：AC220V；
开关电源输出：喇叭额定输入电压。
7.5主要测试设备
开关电源、万用表
     
     注：开关电源电压要求对应喇叭额定电压，且功率应超过所测喇叭额定功率30%
7.6尺寸检验
   根据喇叭规格书或图纸，使用卡尺测量其外径，判断是否符合尺寸要求。
7.7功能检验
7.7.1将开关电源交流输入线连接上带插头的电源线，输出接DC直流端，给开关电源上电，用`},{id:"wi:WIKF029",doc_code:"WIKF029",doc_name:"线材加工作业指导规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r 线材加工作业指导规范\r\r文件类别\x07■质量  □环境  □健康安全  □其",citations:["WIKF021"],tags:["质量体系","受控规程"],raw_file:"WIKF029 线材加工作业指导规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r 线材加工作业指导规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF029\x07\x07文件版本\x07A.2\x07页数\x07共 7页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定：杜 建 荣 \r\r审 核 人 ：蒋 易 周 \r\r     批 准 人 ：邓    伟\r涉及部门：\r■总经办   ■业务/PMC   ■物流部   ■设备部   ■工程部    ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部  ■微模块事业部\r■人资部   ■采购部    ■财务部    ■新业务开发部\r编制/修定日期：2022-04-18\x07发布日期：2022-04-22\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072022-04-18\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的\r为保证线材加工的质量及效率，制定以下规范，以指导生产。\r2.0 适用范围\r适用于我司所有LCD线材加工作业。\r3.0定义\r无\r4.0 职责及规范\r   线材加工作业人员应根据操作规范进行作业，确保线材加工的质量及效率。\r5.0 输入\r无\r6.0 输出\r无\r7.0 工作程序\r7.1 加工作业流程\r\r\b\b\b\b\b\b\b\b\b\r\r\b\b\b\b\b\b\b\r\b\r\r7.2 加工前准备\r选好产品加工作业中要用到的线材以及工具，归类整理好放置作业台面，以免跟其他线材混料；\r7.3 选择电线\r7.3.1 根据元器件总功率来选择合适的电缆线材，线缆所能承受的电流范围详见附表电线电流负载承受标准"},{id:"wi:WIKF031",doc_code:"WIKF031",doc_name:"测试设备管理规范",rev:"A.3",department:"开发部",module:"wi",npi_phase:"EVT",summary:`目的
   为了规范公司测试设备及测试项目管理，形成有效、正常、规范的操作流程，特制定本制度。
2.0 范围
本管理制度适用于公司所有测试设备及测试项目。
3.0 定义`,citations:[],tags:["质量体系","受控规程"],raw_file:"WIKF031测试设备管理规范A.3.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
测试设备管理规范
文件类别
■质量  □环境  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIKF031
文件版本
A.3
页数
共 4页
编制部门 ：新业务开发部
编制/修定：杜 建 荣 
审 核 人 ：蒋 易 周 
批 准 人 ：邓    伟
涉及部门：
■总经办   ■业务/PMC   ■物流部   ■设备部   ■工程部   ■品质部
■结构事业部      ■逆变器事业部    ■电源总装事业部  ■微模块事业部
■人资部   ■采购部    ■财务部    ■新业务开发部
编制/修定日期：2022-04-18
发布日期：2022-04-22
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.2
增加履历，版本升级。
/
[质量专员]
2017-07-03
A.3
更改文件编号、表单编号，版本升级
/
[质量专员]
2022-04-18
    
1.0目的
   为了规范公司测试设备及测试项目管理，形成有效、正常、规范的操作流程，特制定本制度。
2.0 范围
本管理制度适用于公司所有测试设备及测试项目。
3.0 定义
   3.1测试平台：公司针对项目的开发和相关产品的验证性测试，结合公司技术，组建专门测试平台，负责项目、新产品、产品性能改进验证或客户提出的测试工作。
  3.2测试设备：指包括三楼车间老化实验室、高低温试验箱、恒温恒湿试验箱、盐雾试验箱及热实验室内进行相关测试所使用的设备和仪器仪表。
     3.3实验室：负责根据产品结构及项目要求，按相关标准进行热性能和电气性能测试，并及时出具测试报告，所出具的报告应具有客观准确性。
   3.4 设计工程师：根据客户需求和产品的特性，结合相关的测试标准，制定测试规格书，提出测试申请；
   3.5 测试平台负责人：审核测试申请；
   3.6 部门主管：批准测试申请；
   3.7 测试工程师：进 行各项测试任务，并出具测试报告，提交给设计工程师；
   3.8设备管理人员：负责所有测试设备的日常管理。
4.0 职责及权限
 `},{id:"wi:WIKF037",doc_code:"WIKF037",doc_name:"LCD产品ESD管理规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \rLCD产品ESD管理规范\r\r\r文件类别\x07■质量  □环境  □健康安全",citations:["WIKF023"],tags:["ESD"],raw_file:"WIKF037 LCD产品ESD管理规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \rLCD产品ESD管理规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF037\x07\x07文件版本\x07A.2\x07页数\x07共 5页\x07\x07\r      编制部门 ：新业务开发部\r\r编制/修定： 杜 建 荣\r\r审 核 人 ： 蒋 易 周\r\r批 准 人 ： 邓    伟 \r\r涉及部门：\r■总经办   ■业务/PMC     ■物流部   ■设备部   ■工程部    ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部    ■微模块事业部\r■人资部   ■采购部     ■财务部   ■新业务开发部\r\r编制/修定日期：2022-04-18\x07发布日期：2022-04-22\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号，版本升级\x07/\x07[质量专员]\x072022-04-18\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目地\r规范LCD产品的物料采购、存储、检验，及产品的生产、调试、仓储、运输、安装、维护过程中的ESD防护措施，防止静电突然释放时对产品造成损害。\r2.0范围\r2.1 适用公司LCD产品；\r2.2 适用公司LCD产品的物料存储、检验、生产、调试、仓储、运输、安装、维护等所有环节；\r适用公司LCD产品的参与者和物料的存储、产品的生产场所。\r3.0定义\r3.1 ESD：是Electrostatic Discharge的缩写，指带有不同静电电势（电位差）的物体或表面之间的静电电荷转移。分为接触放电和电场击穿介质放电。 静电电荷的突然释放能够对ESD敏感器件造成损害"},{id:"wi:WIKF039",doc_code:"WIKF039",doc_name:"开发更改管理规范",rev:"A.6",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r开发更改管理规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07",citations:["WIKF024"],tags:["PCN"],raw_file:"WIKF039开发更改管理规范A.6.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r开发更改管理规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF039\x07\x07文件版本\x07A.6\x07页数\x07共 4页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定： 杜 建 荣\r\r审 核 人 ： 蒋 易 周\r\r批 准 人 ： 邓    伟\r涉及部门：\r■总经办   ■业务/PMC   ■物流部   ■设备部   ■工程部   ■品质部\r■结构事业部     ■逆变器事业部   ■电源总装事业部    ■微模块事业部\r■人资部   ■采购部       ■财务部    ■新业务开发部\r\r编制/修定日期：2022-04-18\x07发布日期：2022-04-22\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.5\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.6\x07更改文件编号、表单编号，版本升级。\x07/\x07[质量专员]\x072022-04-18\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r使公司内部设计开发变更处于受控状态及客户需求变更得到有效执行，提高设计开发质量。\r2.0范围\r适用于本公司产品设计和技术开发。\r3.0定义\r3.1内部设计变更：设计开发过程中公司内部提出和实施的设计变更，包括：内部结构、工艺优化等；\r3.2客户需求变更：设计开发过程中客户对开发需求提出的变更，包括：产品造型及外观、功能性；\r3.3市场部：负责对客户变更需求的接收及转发；\r3.4研发部：负责内部设计变更的处理、执行，以及分析、处理、执行客户需求变更内容，并与客户沟通设变具体实施过程中的问题；\r3.5文控中心：归档、规范以及发放设计开发变更资料；\r3.6工程部：依据设计开发变更实施工程工艺设"},{id:"wi:WIKF040",doc_code:"WIKF040",doc_name:"FMEA管理规范",rev:"A.4",department:"开发部",module:"wi",npi_phase:"EVT",summary:"智造示范工厂科技有限公司  Smart Mfg Demo Factory Co., Ltd. 文件封面 FMEA 管理规范 文件类别 ■质量  □环境  □职业健康与安全  □其他 文件等级 □一级文件  □二级文件  ■三级文件 文件编号 WIKF040 文件版本 A.4 页数 共 5 页 编制部门 ： 新业务开发部 编制/修定： 刘   明   明 审 核 人 ： 周  伟  和 批 准 人 ： 石   蒋  平 涉及部门：   □总经办       ■品质部   □财务部   ■PMC 部       ■工艺准备部   ■工程部       ■采购部   ■物流部   ■业务部       □企业管理部   ■电源总装事业部   ■逆变器事业部    ■",citations:[],tags:["NPI","FMEA"],raw_file:"WIKF040 FMEA管理规范A.4.docx",body_snippet:`智造示范工厂科技有限公司  Smart Mfg Demo Factory Co., Ltd.
文件封面
FMEA 管理规范
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIKF040
文件版本
A.4
页数
共 5 页
编制部门 ： 新业务开发部
编制/修定： 刘   明   明
审 核 人 ： 周  伟  和
批 准 人 ： 石   蒋  平
涉及部门：
 
□总经办       ■品质部   □财务部   ■PMC 部       ■工艺准备部
 
■工程部       ■采购部   ■物流部   ■业务部       □企业管理部
 
■电源总装事业部   ■逆变器事业部    ■喷涂事业部   ■储能事业部
■微模块事业部     ■新业务事业部    ■结构事业部   ■NPI 工厂
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.2
增加履历，版本升级。
/
[质量专员]
2017-07-03
A.3
更改文件编号、表单编号，版本升级
/
[质量专员]
2022-04-18
A.4
新增8.0 FMEA刷新机制
基于第五版FMAE变化点进行全面梳理。
8.0
吴秋霜
[质量专员]
2025-09-10
2025-9-25
1.0 目地
通过分析和评估，列出相关过程可能出现的缺陷及后果，用以在实际生产、组装时的预防，在产品设计或 过程中通过不断评估、验证及改进，使产品趋近最优，最终最大限度地保证产品满足客户要求和期望。
2.0 范围
2.1 本程序适用于公司在新产品开发过程中，为工艺的确定提供依据，有助于为顾客服务确定初期的标准;为未来工作提供历史性资料；
2.2 应用于新产品、新工艺及其更改，以及由普通变差引起的质量问题对工序过程可能造成失效后果的分析和预防。
3.0 定义
3.1 ​FMEA​： 失效模式与影响分析。一种系统的分析方法，旨在识别和降低产品/过程中潜在的失效风险。
3.2  DFMEA​： 设计失效模式与影响分析。专注于产品设计阶段。
3.3  PFMEA​： 过程失效模式与影响分析。专注于制造和装配过程阶段。
3.4  七步法​： 最新FMEA标准规定的结构化分析流程，包括：策划与准备、结构分析、功能分析、失效分析、风险分析、优化、结果文件化。
3.5  行动优先级（AP）​​： 取代传统RPN的评估方法，用于确定改进措施的优先顺序，分为高（H）、中（M）、低（L）三级。
4.0 职责及权限
4.1 事业部最高管理层​：提供资源支持，营造重视预防的文化，审阅FMEA工作的整体效益。
4.2 项目经理​：确保FMEA活动被纳入项目开发计划，并提供时间和资源保障。
4.3 FMEA小组组长​ (通常由设计/过程工程师担`},{id:"wi:WIKF042",doc_code:"WIKF042",doc_name:"线材来料检验规范",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r线材来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07",citations:["WIKF026"],tags:["IQC"],raw_file:"WIKF042线材来料检验规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r线材来料检验规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF042\x07\x07文件版本\x07A.2\x07页数\x07共 6页\x07\x07\r编制部门 ：新业务开发部\r\r编制/修定： 杜 建 荣\r\r审 核 人 ： 蒋 易 周\r\r批 准 人 ： 邓    伟\r涉及部门：\r■总经办   ■业务/PMC    ■物流部   ■设备部   ■工程部   ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部  ■微模块事业部\r■人资部   ■采购部      ■财务部    ■新业务开发部\r编制/修定日期：2022-04-18\x07发布日期：2022-04-22\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.2\x07更改文件编号，版本升级。\x07/\x07[质量专员]\x072022-04-18\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的\r规范线材的来料检验标准，保证线材来料质量。\r2.0 范围\r适用于我司LCD产品所用线材。\r3.0 定义\r无\r4.0 职责及权限\r   负责线材来料检验的工作人员应根据作业规范操作，保证线材来料质量。\r5.0 输入\r无\r6.0 输出\r线材检验规范记录。\r7.0 工作程序\r7.1检验范围\r电缆线材、OT冷压端头、空芯冷压端头。\r7.2检验流程\r7.2.1检验类型\r采取采样检验方法，抽样检验。\r7.2.2线材外观检验\r电线外观有无破损，冷压端头有无变形，扭曲。\r7.2.3线材规格检验\r电线是否达到截面标准，冷压端头是否达到平方标准。\r7.2.4线材长度型号检验\r对于已加工线材，长度，"},{id:"wi:WIKF044",doc_code:"WIKF044",doc_name:"项目开发控制程序",rev:"A.2",department:"开发部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \rLCD广告机条形码管控规范\r\r\r文件类别\x07■质量  □环境  □健康安全",citations:["LC550","LK695","PLMS630","AUT645","IT214","LTI820"],tags:["HWMS/WOS"],raw_file:"WIKF044 LCD广告机条形码管控规范A.3.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \rLCD广告机条形码管控规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIKF044\x07\x07文件版本\x07A.3\x07页数\x07共 7页\x07\x07\r       编制部门 ：新业务开发部\r\r编制/修定： 杜 建 荣\r\r审 核 人 ： 蒋 易 周\r\r批 准 人 ： 邓    伟 \r\r涉及部门：\r■总经办   ■业务/PMC     ■物流部    ■设备部    ■工程部    ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部      ■微模块事业部\r■人资部   ■采购部      ■财务部    ■新业务开发部\r\r编制/修定日期：2022-04-19\x07发布日期：2022-04-22\x07\x07\f文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.2\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-07-03\x07\x07A.3\x07更改文件编号、表单编号，版本升级\x07/\x07[质量专员]\x072022-04-19\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r随着LCD业务的增加，产品出货范围不断扩大，给LCD售后工作带来了新的挑战。为提高LCD项目售后工作效率和客户满意度，特制定此规范。\r2.0适用范围\r适用于示范厂公司所有在制LCD产品。\r3.0定义\r   3.1条形码（barcode）：是将宽度不等的多个黑条和空白，按照一定的编码规则排列，用以表达一组信息的图形标识符。\r   3.2 追溯项目：即关键物料，在LCD产品中重要的器件或易出故障的器件。\r4.0 职责及权限\r   操作人员应根据条形码管控规范要求作业。\r5.0输入\r对外购件无21码或无条码数据，物料部对条码创建新条"},{id:"wi:WIPZ090",doc_code:"WIPZ090",doc_name:"EMS  ODM标准三率运作管理规范",rev:"A.1",department:"品质部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                  文件封面                                \r                                                                                                                                                             \r                     \rEMS/ODM标准三率运作管理规范\r\r文件类别\x07■质量  □环安  □",citations:["WIPZ057"],tags:["质量体系","受控规程"],raw_file:"WIPZ090 EMSODM标准三率运作管理规范A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                  文件封面                                \r                                                                                                                                                             \r                     \rEMS/ODM标准三率运作管理规范\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIPZ090\x07\x07文件版本\x07A.1\x07页数\x07共7页\x07\x07\r编制部门 ：品 质 部\r\r编制/修定：李    晴\r\r审 核 人 ：王 盛 树\r\r批 准 人 ：李    锋\r\r涉及部门：\r■总经办   ■业务/PMC     ■物流部     ■设备部     ■工程部     ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部\r■人资部   ■采购部       □财务部    ■新业务开发部\r                                                                       \r编制/修定日期：2024-11-22                         发布日期：2024-11-25\r\r\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改章节号\x07编制/修定\x07实施日期\x07\x07A.0\x07新版发行\x07/\x07[质量专员]\x072024-05-11\x07\x07A.1\x07增加9.4五星工厂标准落实率评价标准。\x07/\x07[质量专员]\x072024-11-22\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r为规范各EMS/ODM现场标准三率工作开展，确保生产现场作业标准的完整/完善率、员工对标准的遵守率，从而保证产品出厂质量。\r2.0范围\r适用于EMS/ODM生产车间。\r3.0定义\r名称\x07计算公式\x07说明\x07\x07标准\x07标准指用于指导员工正确作业的文件，包括流程/规范、指导书（含产品专用指导书、设备/工装类指导书、通用指导书等）、表格/记录等\x07\x07标准完整率（%）\x07标准完整率=（"},{id:"wi:WIPZ092",doc_code:"WIPZ092",doc_name:"能源产品结构件表面外观缺陷限定标准规范",rev:"A.0",department:"品质部",module:"wi",npi_phase:"PVT",summary:`目的
本规范旨在明确能源产品结构件表面外观缺陷的判定标准，统一总装车间生产、品质及工程部门的检验依据，确保产品外观质量符合要求，适用于总装能源产品的相关设计与制造环节。
2.0 范围
适用于总装业务模块，涵盖总装工程、品质及生产相关人员，针对盒式、柜式、箱式等各类能源产品结构件的表面外观质量检验与判定，明确缺陷接受标准及特殊工艺要求。
3.0 定义`,citations:["DKBA147","DKBA137","DKBA040","DKBA142","EPGC202","DKBA045","DKBA048","DKBA148"],tags:["NPI"],raw_file:"WIPZ092 能源产品结构件表面外观缺陷限定标准规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
能源产品结构件表面外观缺陷限定标准规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIPZ092
文件版本
A.0
页数
共 87 页
编制部门 ：品 质 部
编制/修定：谭 玲 美
审 核 人 ：林 文 良
批 准 人 ：李    锋
涉及部门：
□总经办     ■品质部     □财务部     □PMC 部     □工艺准备部   ■工程部     □采购部     □物流部     □业务部    □企业管理部 □电源总装事业部   ■总装事业部  ■喷涂事业部     □储能事业部   □微模块事业部   □新业务事业部   □结构事业部    □NPI工厂
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
文件发行受控
/
[质量专员]
2025-08-18
1.0 目的
本规范旨在明确能源产品结构件表面外观缺陷的判定标准，统一总装车间生产、品质及工程部门的检验依据，确保产品外观质量符合要求，适用于总装能源产品的相关设计与制造环节。
2.0 范围
适用于总装业务模块，涵盖总装工程、品质及生产相关人员，针对盒式、柜式、箱式等各类能源产品结构件的表面外观质量检验与判定，明确缺陷接受标准及特殊工艺要求。
3.0 定义
能源产品结构件表面外观缺陷的检验标准与判定方法进行了统一定义，适用于总装车间生产品质及工程人员。文件将产品外观表面划分为三个等级：1级表面为直接正视的重要外观面，如机柜正面；2级表面为检验调试时可正视看到的面，如机柜侧面；3级表面为正常状态下不可见的内部或背面等区域。此外，规范还明确了装配质量等级（A级和B级装配点），并规定了不同产品形态（盒式、柜式、箱式等）的等级面划分原则和特殊外观要求，为外观检验提供了清晰的分类依据和接收准则。
4.0职责和权限
4.1品质部是结构件表面外观缺陷标准的主要编制与维护部门，负责制定、解释及更新判定准则。
4.2工程部、总装事业部及喷涂事业部需参与技术评审与工艺可行性评估，确保标准符合生产和设计要求。MQE工程师拥有对外观缺陷的最终判定权，当出现标准歧义时，由研发、MQE、NPI、SQE共同讨论形成决议。若仍有重大分歧，最终解释权归结构专家组所有。此外，
4.3采购、物流及其他相关事业部需在各自环节执行标准，共同保障产品外观质量。
5.0输入
包括《DKBA04000021 产品表面外观缺陷及检测方法定义》、各类产品通用质量要求（如室内机柜、压铸模块、`},{id:"wi:WIPZ093",doc_code:"WIPZ093",doc_name:"数字能源产品整机装配工艺质量要求规范",rev:"A.0",department:"品质部",module:"wi",npi_phase:"PVT",summary:`目的
本规范指在明确数字能源产品在总装车间的整机装配工艺与质量要求，为生产、品质及工程人员的作业与检验提供统一的合格判定标准，确保产品质量符合设计文件与通用工艺规范，最终保障产品装配的一致性与可靠性。
2.0 范围
本规范适用于公司总装业务模块，包括逆变器事业部、电源总装事业部等相关工程、品质及生产人员。
3.0 定义`,citations:["DKBA147"],tags:["NPI","ESD","IQC"],raw_file:"WIPZ093 数字能源产品整机装配工艺质量要求规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
数字能源产品整机装配工艺质量要求规范
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIPZ093
文件版本
A.0
页数
共21页
编制部门 ：品 质 部
编制/修定：谭 玲 美
审 核 人 ：林 文 良
批 准 人 ：李    锋
 涉及部门：
□总经办     ■品质部     □财务部     □PMC 部         □工艺准备部   
■工程部     □采购部     □物流部     □业务部         □企业管理部
■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   
□微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0 
文件发行受控
/
[质量专员]
2025-08-18
1.0 目的
本规范指在明确数字能源产品在总装车间的整机装配工艺与质量要求，为生产、品质及工程人员的作业与检验提供统一的合格判定标准，确保产品质量符合设计文件与通用工艺规范，最终保障产品装配的一致性与可靠性。
2.0 范围
本规范适用于公司总装业务模块，包括逆变器事业部、电源总装事业部等相关工程、品质及生产人员。
3.0 定义
3.1 电气器件:指用于实现产品电气功能的物理单元，如开关、接触器、IGBT、电容等。
3.2 功率连接:指产品中用于电源功率能源流传递的连接部分，如导电排间连接、功率电缆与器件的
连接等。
3.3 非功率连接:指不涉及功率能源流传递的连接，如结构件之间的连接
3.4 文件优先等级:明确了设计文件高于工艺文件，特定产品工艺文件高于类别通用工艺规范，
类别通用规范高于公司通用标准如《整机质量装配标准》)的优先关系。
3.5 高紧密连接:指需保证密封、散热、屏蔽或通过大电流(≥16A）的螺纹连接，需执行画线检查。
4.0 职责和权限
4.1 品质部:负责本规范的编制与修订，并主导对装配过程及最终产品的质量进行监督、检验`},{id:"wi:WIQG033",doc_code:"WIQG033",doc_name:"群体性食物中毒应急预案",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r群体性食物中毒应急预案\r\r文件类别\x07□质量  □环境  □职业健康与安全",citations:["WIRZ025"],tags:["NPI","7S与安全"],raw_file:"WIQG033 群体性食物中毒应急预案A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r群体性食物中毒应急预案\r\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG033\x07\x07文件版本\x07A.0\x07页数\x07共 4页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘 丽 珊\r\r审 核 人 ：何 先 品\r\r批 准 人 ：李    洋   \r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r编制/修定日期：2025-04-29\x07发布日期：2025-05-05\x07\x07\f\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ025”编号改为“WIQG033”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-29\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的\r为应对可能发生的群体性食物中毒事件(以下简称“事件”),稳定公司工作和生活秩序,特制定本应急预案。\r2.0 范围\r本预案适用于在本公司区域内有可能发生的群体性食物中毒事件。\r3.0 定义\r食物中毒：是指人摄入了含有生物性、化学性有毒有害物质后或把有毒有害物质当作食物摄入后所出现的而非传染性的急性或亚急性疾病,属于食源性疾病的范畴。\r4.0职责和权限\r4.1 成立群体性食物中毒处理领导机构(小组)：明确分工和任务，在“事件”发生时，公司领导应立即根据“事件”的实际情况召"},{id:"wi:WIQG034",doc_code:"WIQG034",doc_name:"传染病防治应急预案",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r传染病防治应急预案\r\r文件类别\x07□质量  □环境  ■职业健康与安全  □",citations:["WIRZ026"],tags:["NPI","7S与安全"],raw_file:"WIQG034 传染病防治应急预案A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r传染病防治应急预案\r\r文件类别\x07□质量  □环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG034\x07\x07文件版本\x07A.0\x07页数\x07共 5页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘 丽 珊\r\r审 核 人 ：何 先 品\r\r批 准 人 ：李    洋   \r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r\r编制/修定日期：2025-04-29\x07发布日期：2025-05-05\x07\x07文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ026”编号改为“WIQG034”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-29\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的	\r为了有效预防，及时控制和消除传染病在我公司的发生、流行，保障全体员工的身体健康，维护公司正常生产秩序，根据《中华人民共和国传染病防治法》，结合我公司具体情况，特制定本应急预案。\r2.0范围\r 本预案适用于在本公司区域内有可能发生的传染病。\r3.0定义\r预案中所称传染病是指：《中华人民共和国传染病防治法》中规定的法定管理的甲、乙、丙类传染病。\r4.0职责和权限\r4.1 传染病防治工作在公司统一领导下，接受当地卫生防疫站等部门业务指导，实行预防为主、防治结合、分类"},{id:"wi:WIQG035",doc_code:"WIQG035",doc_name:"环安事故调查与处理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r环安事故调查与处理规范\r文件类别\x07□质量  □环境  ■职业健康与安全",citations:["WIRZ027"],tags:["NPI","8D"],raw_file:"WIQG035 环安事故调查与处理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r环安事故调查与处理规范\r文件类别\x07□质量  □环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG035\x07\x07文件版本\x07A.0\x07页数\x07共 6 页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘 丽 珊\r\r审 核 人 ：何 先 品 \r\r批 准 人 ：李    洋   \r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   ■微模块事业部      □新业务事业部     ■结构事业部     ■NPI工厂\r\r编制/修定日期：2025-04-29\x07发布日期：2024-05-06\x07\x07\f\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ027”编号改为“WIQG035”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-29\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r通过对各种事故的调查，分析事故的根本原因并找出问题点，预防同样及类似的事故再发生。\r2.0范围\r2.1在公司内发生的事故、伤害、交通事故、火灾、爆炸等引起的对人或物的损失事故。\r2.2由自然现象（风、水、雪、地震等）发生引起的对人或物的损失事故。\r2.3认为有必要进行调查的其它事故。\r3.0定义\r3.1事件：导致或可能导致事故的情况。 \r3.2事故：造成死亡、疾病、伤害、损坏或其他损失的意外情况。\r4.0 职责和权限\r  "},{id:"wi:WIQG036",doc_code:"WIQG036",doc_name:"门禁放行管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r门禁放行管理规范\r文件类别\x07□质量  □环境   □职业健康与安全  ■其",citations:["WIRZ031"],tags:["NPI"],raw_file:"WIQG036 门禁放行管理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r门禁放行管理规范\r文件类别\x07□质量  □环境   □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG036\x07\x07文件版本\x07A.0\x07页数\x07共  页\x07\x07\r\v\r\r\r\v\r编制部门 ：企业管理部\r\r编制/修定：刘 丽 珊\r\r审 核 人 ：何 先 品\r\r批 准 人 ：李    洋\r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \v■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r编制/修定日期：2025-04-29\x07                发布日期：2025-05-06\x07\x07\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ031”编号改为“WIQG036”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-29\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r为保公司人员、财产、信息等安全，明确公司人员、物品、设备、信息安全门禁管理，确保外来人员及车辆在本公司的行为符合公司管理要求而制定本规范。\r\v2.0范围\r适用于公司所有人员、车辆、成品、物料、机械设备、办公用具、私人物品及外来人员、车辆的放行管理。\r\v3.0定义\r无\r\v4.0职责和权限\r4.1 总经理（副总经理）：负责公司部门责任人及所有物品、机器设备出厂放行的批准。\r4.2企业管理部："},{id:"wi:WIQG037",doc_code:"WIQG037",doc_name:"关键岗位人员管理规范",rev:"A.1",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                                                                                                                                                                                                      关键岗位人员管理规范 文件类别 □质量  □环境  □职业健康与安全  ■其",citations:["WIRZ032"],tags:["NPI","IQC"],raw_file:"WIQG037 关键岗位人员管理规范A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
 关键岗位人员管理规范
文件类别
□质量  □环境  □职业健康与安全  ■其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIQG037
文件版本
A.1
页数
共 14页
编制部门 ：企业管理部
编制/修定：刘  丽  珊
审 核 人 ：何  先  品
批 准 人 ：李      洋
涉及部门：
□总经办   ■品质部     □财务部       □PMC 部         □工艺准备部   
■工程部   □采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部  
■微模块事业部      □新业务事业部     ■结构事业部     ■NPI工厂
                                                                           
编制/修定日期：2025-08-15                            发布日期：2025-08-22
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
将原来的“WIRZ032”编号改为“WIQG037”,以及相关表单同步更改编号。
/
[质量专员]
2025-04-30
A.1
新增IQC/PQC/FQC/IPQC/OBA/OQC选用育留展的要求与人力模型；
完善关键岗位定义说明，新增新老员工定义及执行要求。
7.1.4、
7.5、1.0、3.0、4.0、7.0
肖玉丰
[质量专员]
2025-08-22
1.0目的：
1.1识别、确定影响产品质量、生产连续性、技术研发和供应链稳定的关键岗位。
1.2对关键岗位人员进行有效的识别、招募、培训、激励及考核及稳定化的规范化管理。
1.3实现关键岗位人员的专业化和稳定化，确保产品质量和业务连续性。
2.0范围：
   适用于公司各部门所属的关键岗位人员及特殊关键岗位的管理。
3.0 定义：
3.1关键岗位：指在企业经营、管理、技术、生`},{id:"wi:WIQG038",doc_code:"WIQG038",doc_name:"特殊岗位管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r特殊岗位管理规范\r\r\r文件类别\x07□质量  □环境  □",citations:["WIRZ033"],tags:["NPI"],raw_file:"WIQG038 特殊岗位管理规范A.0.doc",body_snippet:"         \r\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r特殊岗位管理规范\r\r\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG038\x07\x07文件版本\x07A.0\x07页数\x07共 6 页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘  丽  珊\r\r审 核 人 ：何  先  品\r\r批 准 人 ：李      洋\r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \v■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r编制/修定日期：2025-04-30\x07发布日期：2025-05-07\x07\x07\f\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ033”编号改为“WIQG038”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-04-30\x07\x07\x07	\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\v1.0目的\r为了加强特种作业人员及特殊岗位人员的安全管理，全面提升从业人员岗位技能，保障作业人员人身安全，特制定本规定。\r\v2.0范围\r   公司范围内的所有特种及特殊岗位：喷涂工、喷涂前处理工、丝印工、焊接工、电工、电梯管理员、压力容器管理员、行车、叉车、安全管理等操作人员。\r\v3.0定义：\r   特种作业：容易发生人员伤亡事故，对操作者本人、他人及周围设施的安全可能造成重大危害的作业。\r   特殊岗位：指井下、高空、高温、特别繁重体力劳"},{id:"wi:WIQG040",doc_code:"WIQG040",doc_name:"危险作业管理制度",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:`目的
1.1为明确危险作业的审批管理权限、职责，预防因危险作业而引发的各种事故，确保公司财产与员工的安全。
2.0适用范围
2.1适用于在本公司内进行的所有危险作业活动。
3.0定义；适用范围
2.1适用于在本公司内进行的所有危险作业活动。
3.0定义
3.1危险作业：是指高处作业、动火作业、临时用电作业、密闭空间作业、施工动土作业等有重大危害的作业。
3.1.1高处作业：指凡在降落高度基准面2米以上（含2米）有可能坠落的高度进行的作业。`,citations:[],tags:["NPI"],raw_file:"WIQG040 危险作业管理制度A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
危险作业制度
文件类别
□质量  □环境  ■职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIQG040
文件版本
A.0
页数
共9页
编制部门 ：企业管理部
编制/修定：杨      勇
审 核 人 ：何  先  品
批 准 人 ：李      洋
涉及部门：
■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   
■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                       
编制/修定日期：2025-06-10                         发布日期：2026-06-17 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新发行
/
[质量专员]
2025-6-10
　
　
1.0目的
1.1为明确危险作业的审批管理权限、职责，预防因危险作业而引发的各种事故，确保公司财产与员工的安全。
2.0适用范围
2.1适用于在本公司内进行的所有危险作业活动。
3.0定义
3.1危险作业：是指高处作业、动火作业、临时用电作业、密闭空间作业、施工动土作业等有重大危害的作业。
3.1.1高处作业：指凡在降落高度基准面2米以上（含2米）有可能坠落的高度进行的作业。
3.1.2动火作业：指在厂区内进行焊接、切割、加热、打磨以及在易燃易爆场所使用电钻、砂轮等可能产生火焰、火星、火花和赤热表面的临时性作业。
3.1.3密闭空间作业：是指各类塔、釜、槽、罐、炉膛、管道、容器以及阴井、地坑、下水道或其他封闭场所内进行的作业。
3.1.4临时用电作业：在正式运行的电源上所接的一切临时用电作业。
4`},{id:"wi:WIQG045",doc_code:"WIQG045",doc_name:"能源资源消耗管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r能源资源消耗管理规范\r\r文件类别\x07 □质量  □环境  □职业健康与安全",citations:["WIRZ039","WIRZ045"],tags:["NPI"],raw_file:"WIQG045 能源资源消耗管理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r能源资源消耗管理规范\r\r文件类别\x07 □质量  □环境  □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG045\x07\x07文件版本\x07A.0\x07页数\x07共5页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘  丽  珊\r\r审 核 人 ：何  先  品\r\r批 准 人 ：李      洋\r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r编制/修定日期：2025-07-01\x07发布日期：2025-07-02\x07\x07■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \v■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ039”编号改为“WIQG045”,以及相关表单同步更改编号\x07/\x07[质量专员]\x072025-07-01\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r为了加强公司的能源、资源使用管理，节能降耗，提高经济效益，实施可持续发展，特制定并执行本规范。\r2.0范围\r适用于公司节能降耗全过程。\r3.0定义\r3.1能源：是指可再生的物质，如电能、光能、风能等。\r3.2资源：是指能够提供能量的物质不可再生的物资，生产所用原辅材料、办公用纸等，水、森林是特殊的资源\r3.3节约能源资源：是指通过技术进步、合理科学利用和产品结构调整等途径，以最少的能源消耗取得最大的经\r济效益。\r4.0"},{id:"wi:WIQG046",doc_code:"WIQG046",doc_name:"劳保防护用品管理规定与发放标准",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r劳保防护用品管理规定与发放标准\r\r\r文件类别\x07□质量  □环境  ■职业健",citations:["WIRZ040","WIQG040"],tags:["NPI","ESD"],raw_file:"WIQG046 劳保防护用品管理规定与发放标准A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r劳保防护用品管理规定与发放标准\r\r\r文件类别\x07□质量  □环境  ■职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG046\x07\x07文件版本\x07A.0\x07页数\x07共7页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘  丽  珊\r\r审 核 人 ：何  先  品   \r\r批 准 人 ：李      洋     \r\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r编制/修定日期：2025-07-01\x07发布日期：2025-07-08\x07\x07\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ040”编号改为“WIQG046”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-07-01\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r为了确保公司员工合理配置和有效使用劳动防护用品，结合公司实际情况特制定本规定。 \r2.0范围\r适用于本公司关于劳动防护用品的管理。\r3.0定义\r无\r4.0权责与权限\r4.1企业管理部:负责制定劳保用品管理规定与发放标准，监督各部门、申购、领用、使用情况。\r4.2采购部:负责劳保用品的采购。\r4.3物流部:负责劳保用品验收盘点,回收,发放,存放,建立劳保用品台帐。\r4.4各部门:依照劳保用品发放标准负责本部门人"},{id:"wi:WIQG047",doc_code:"WIQG047",doc_name:"员工培训与上岗管理规范",rev:"A.1",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:`目的
1.1规范公司员工入职前、上岗前、上岗后的相关培训及考核工作，提升公司员工的专业技能及综合素质
1.2增强职工后备队伍建设,应对突发事件确保生产正常进行 。
1.3人员合理调配确保生产准时性提高企业的市场应变能力和降低人力成本。
1.4提高职工对工作的满意度,增强员工的兴趣和被信任感。`,citations:["WIQG037","WIQG041","ISO900"],tags:["NPI","ESD"],raw_file:"WIQG047  员工培训与上岗管理规范A.1.docx",body_snippet:` 智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                    
                                                                                                                                                             
                     
员工培训与上岗管理规范
文件类别
□质量  □环境  ■职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIQG047
文件版本
A.1
页数
共21页
编制部门 ：企业管理部
编制/修定：冯      安
审 核 人 ：何  先  品
批 准 人 ：李      洋
涉及部门：
■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   
■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                            
编制/修定日期：2025-07-29                           发布日期：2025-08-05
                                                                                                                                                            
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
将原来的“WIQG041”编号改为“WIQG047”,以及相关表单同步更改编号。
/
[质量专员]
2025-07-01
A.1
增加培训目标
8.11.2
[质量专员]
2025-07-29
1.0目的
1.1规范公司员工入职前、上岗前、上岗后的相关培训及考核工作，提升公司员工的专业技能及综合素质
1.2增强职工后备队伍建设,应对突发事件确保生产正常进行 。
1.3人员合理调配确保生产准时性提高企业的市场应变能`},{id:"wi:WIQG048",doc_code:"WIQG048",doc_name:"厂务早会管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:`目的
规范公司每周一早上 7：40~8：00 全体员工早会、周一至周五 8：30~9：00 公司领导和各部门主管之生产例会及周六 10：00~11：30 之公司领导和各部门主管之厂务周会流程和内容，保证会议的准时召开，相关信息的及时传递。
范围
适用于本公司每周一全体员工厂务早会；
适用于本公司周一至周五公司领导和各部门主管生产例会；`,citations:["WIRZ042"],tags:["NPI"],raw_file:"WIQG048 厂务早会管理规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
厂务早会管理规范
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIQG048
文件版本
A.0
页数
共 6 页
编制部门 ：企业管理部
编制/修定：刘  丽  珊
审 核 人 ：何  先  品    
批 准 人 ：李      洋 
涉及部门：
■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部  ■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
编制/修定日期：2025-07-02
发布日期：2025-07-09
文件编号：WIQG048
版本：A.0
智造示范工厂科技有限公司
编制部门：企业管理部
修订日期：2025-07-02
厂务早会管理规范
页   数：第 2页,共 6 页
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
将原来的“WIRZ042”编号改为“WIQG048”,以及相关表单同步更改编号。
/
[质量专员]
2025-07-02
    
文件编号：WIQG048
版本：A.0
智造示范工厂科技有限公司
编制部门：企业管理部
修订日期：2025-07-02
厂务早会管理规范
页   数：第 3页,共 6 页
1.0 目的
规范公司每周一早上 7：40~8：00 全体员工早会、周一至周五 8：30~9：00 公司领导和各部门主管之生产例会及周六 10：00~11：30 之公司领导和各部门主管之厂务周会流程和内容，保证会议的准时召开，相关信息的及时传递。
范围
适用于本公司每周一全体员工厂务早会；
适用于本公司周一至周五公司领导和各部门主管生产例会；
适用于本公司周六公司领导和各部门主管之厂务周会。
3.0 定义
无
职责和权限
(副)总经理：主持周六厂务周会，裁定例`},{id:"wi:WIQG049",doc_code:"WIQG049",doc_name:"7S实施管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\r Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r7S实施管理规范\r\r文件类别\x07□质量  ■环境  □职业健康与安全  □其",citations:["WIRZ043"],tags:["NPI","7S与安全"],raw_file:"WIQG049 7S实施管理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\r Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r7S实施管理规范\r\r文件类别\x07□质量  ■环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG049\x07\x07文件版本\x07A.0\x07页数\x07共 9页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：闫  舒  颜\r\r审 核 人 ：何  先  品\r\r批 准 人 ：李      洋\r	\r涉及部门：\r编制/修定日期：2025-07-02\x07发布日期：2025-07-09\x07\x07■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \v■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ043”编号改为“WIQG049”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-07-02\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r为了规范7S管理，评分查核各部门及宿舍7S实施成效，使之不断维持和改善，从而最终达到7S推行效   \r  果和目的。\r2.0适用范围\r适用于公司所有部门。\r3.0定义\r3.1整理：区分存废、去芜存菁，区分要用与不要用的东西，不要用的东西清理掉；\r3.2整顿：分门别类、各就各位，要用的东西依规定定位、定量地摆放整齐，明确地标示；\r3.3清扫：环境设备、清扫维护，清除职场内的脏污，并防止污染的发生；\r3.4清洁：3 S彻底"},{id:"wi:WIQG050",doc_code:"WIQG050",doc_name:"宿舍管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r宿舍管理规范\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他\x07\x07",citations:["WIRZ044"],tags:["NPI"],raw_file:"WIQG050 宿舍管理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r宿舍管理规范\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG050\x07\x07文件版本\x07A.0\x07页数\x07共 4页\x07\x07\r\r\r\v\v\v\v                   编制部门 ：企业管理部\r\r编制/修定：刘  丽  珊\r\r审 核 人 ：何  先  品\r\r批 准 人 ：李      洋\r\v\v涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\v\r\r编制/修定日期：2025-07-02\x07发布日期：2025-07-09\x07\x07\r\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ044”编号改为“WIQG050”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-07-02\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\v\v1 .0目的\r1.1规范宿舍日常管理，明确宿舍管理员的职责和住宿人员的行为。\r1.2保持宿舍良好、清洁、整齐、安全的环境和秩序。\r1.3保证员工得到充分的休息。\r2 .0范围	\r适用于在公司宿舍住宿的所有员工。\r3.0定义\r无\r4 .0职责和权限\r行政部：负责公司员工宿舍系统管理，按照本规范监督、检查宿舍管理。\r宿舍管理员：负责宿舍具体管理工作，床铺、水电等设施的维护管理"},{id:"wi:WIQG051",doc_code:"WIQG051",doc_name:"钥匙管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r钥匙管理规范\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他\x07\x07",citations:["WIRZ045"],tags:["NPI"],raw_file:"WIQG051 钥匙管理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r钥匙管理规范\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG051\x07\x07文件版本\x07A.0\x07页数\x07共3页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘  丽  珊\r\r审 核 人 ：何  先  品      \r\r批 准 人 ：李      洋   \r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r编制/修定日期：2025-07-03\x07发布日期：2025-07-10\x07\x07\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ045”编号改为“WIQG051”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-07-\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r使本公司的钥匙得到很好的管制\r2.0范围\r适用于本公司所有部门。\r3.0定义\r无\r4.0职责\r由安全主任负责策划和安排执行。\r5.0输入\r 无\r6.0输出\r无\r                                                 \r7.0工作流程\r7.1有部门负责人指派人员负责部门的钥匙保管工作。\r7.2各钥匙保管员资格由人事部审核及资料留存之后才配备给相关人员。\r7.3钥匙保管人员应尽职尽责，"},{id:"wi:WIQG052",doc_code:"WIQG052",doc_name:"防暑降温管理规定",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r防暑降温管理规定\r文件类别\x07 □质量  □环境  □职业健康与安全  ■其",citations:["WIRZ046"],tags:["NPI"],raw_file:"WIQG052 防暑降温管理规定A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r防暑降温管理规定\r文件类别\x07 □质量  □环境  □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG052\x07\x07文件版本\x07A.0\x07页数\x07共4页\x07\x07\r编制部门 ：企业管理部\r\r编制/修定：刘  丽  珊\r\r审 核 人 ：何  先  品    \r\r批 准 人 ：李      洋    \r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\r\r编制/修定日期：2025-07-03\x07发布日期：2025-07-10\x07\x07\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ046”编号改为“WIQG052”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-07-03\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\b1.0目的\r为做好防暑降温工作、保障员工的身体健康、不断的改善劳动条件、提高劳动生产率、特制定本规定。\r2.0范围	\r本规定适用于本公司进行的一切工业和生活活动。\r3.0定义\r无\r4.0职责和权限\r4.1 防暑降温工作须在企业管理部统筹安排下，充分发动员工，认真贯彻预防为主的方针；在具体措施上，应采取综合措施，即技术、保健和管理措施。\r4.2 企业管理部：严格按照车间工作地点的气象条件应达到国家规定的卫生标准的要求，以防止中暑事故的发生"},{id:"wi:WIQG053",doc_code:"WIQG053",doc_name:"吸烟区管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                                                                                                                                                                                                     吸烟区管理规范 文件类别 □质量  □环境  ■职业健康与安全  □其他 文件",citations:["WIRZ053","WIRZ047"],tags:["NPI"],raw_file:"WIQG053 吸烟区管理规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
吸烟区管理规范
文件类别
□质量  □环境  ■职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIQG053
文件版本
A.0
页数
共4页
   编制部门 ：企业管理部
 编制/修定：刘  丽  珊
审 核 人 ：何  先  品      
批 准 人 ：李      洋   
涉及部门：
■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   
■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
编制/修定日期：2025-07-03
发布日期：2025-07-10
文件编号:WIRZ053
版本:A.0
智造示范工厂科技有限公司
编制部门:企业管理部
修订日期:2025-07-03
吸烟区管理规范
页 数:第2页,共4页
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
将原来的“WIRZ047”编号改为“WIQG053”,以及相关表单同步更改编号。
/
[质量专员]
2025-07-03
    
文件编号:WIRZ053
版本:A.0
智造示范工厂科技有限公司
编制部门:企业管理部
修订日期:2025-07-03
吸烟区管理规范
页 数:第3页,共4页
1.0目的：
为营造一个良好的工作环境与生产秩序，提高员工素质，杜绝人员因违纪吸烟而间接导致工厂安全事故，防止火灾火险事故的发生，制定本规定。
2.0 范围：
    适用于公司的所有部门的所有人员及相关供应商（包括入厂施工人员）。
3.0 定义
    无
4.0 职责和权限
4.1企业管理部负责吸烟区的规划、设置现场警示及安全文明管制措施、例行检查等。
4.2各部门负责对本部门职员工吸烟的宣传、督导、约束、惩处，吸烟区卫生的打扫等。
4.3保安负责对供应商、施工人员`},{id:"wi:WIQG055",doc_code:"WIQG055",doc_name:"派遣工管理规范",rev:"A.1",department:"企业管理部",module:"wi",npi_phase:"DVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                                                                                                                                                                                                     派遣工管理规范 文件类别 □质量  □环境  □职业健康与安全  ■其他 文件",citations:["WIRZ050"],tags:["NPI","ESD"],raw_file:"WIQG055 派遣工管理规范A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
派遣工管理规范
文件类别
□质量  □环境  □职业健康与安全  ■其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIQG055
文件版本
A.1
页数
共5页
编制部门 ：企业管理部
编制/修定：刘  丽  珊
审 核 人 ：胡      晓
批 准 人 ：李      洋
涉及部门：
■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   
■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                           
编制/修定日期：2025-07-28                          发布日期：2025-08-04
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
将原来的“WIRZ050”编号改为“WIQG055”,以及相关表单同步更改编号。
/
[质量专员]
2025-07-03
A.1
修改定义，修改日常管理要求
6.4 d/e
[质量专员]
2025-08-04
1.0目的：
为维护派遣工的合法权益，规范派遣工在生产、生活中的日常行为与纪律约束，保障人员安全，便于公司管理，减少争议，为生产提供人力服务，根据《中华人民共和国劳动合同法》、《派遣工暂行管理条例》及公司《员工手册》的相关规定，特制订本规范。
2.0范围：
     公司聘用的所有派遣工的日常管理。
3.0 定义：
派遣工：也称“临时工”，是指当公司业务订单增长，而现有人力紧张，公司通过社会招聘、内部介绍、校企合作等补充措施仍无法满足一段时间内的订单所需的人力时，通过劳务派遣机构等第三方合作单位提供的临时性、辅助性的人员来满足生产要求。
`},{id:"wi:WIQG056",doc_code:"WIQG056",doc_name:"外来人员管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r外来人员管理规范\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他",citations:["WIRZ051","WQG056"],tags:["NPI"],raw_file:"WIQG056 外来人员管理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r外来人员管理规范\r文件类别\x07□质量  □环境  □职业健康与安全  ■其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIQG056\x07\x07文件版本\x07A.0\x07页数\x07共5页\x07\x07\r\r\r\v\v\v                   编制部门 ：企业管理部\r\r编制/修定：胡      晓\r\r审 核 人 ：何  先  品\r\r批 准 人 ：李      洋\r涉及部门：\r■总经办   ■品质部     ■财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   ■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂\v\v                                                                       \r编制/修定日期：2025-07-03                      发布日期：2025-07-10\r\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.0\x07将原来的“WIRZ051”编号改为“WIQG056”,以及相关表单同步更改编号。\x07/\x07[质量专员]\x072025-07-03\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\f1.0 目的\r为规范外来人员（客户、供应商、施工方或其他外来人员）管理，树立公司形象，防止公司商业、技术秘密泄漏，确保公司安全，并有效管控外来人员与预防违纪违法事件、健康安全事件、环保事件等发生而制定本规定。\r2.0 范围\r适用"},{id:"wi:WIQG057",doc_code:"WIQG057",doc_name:"五星级现场推行规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"DVT",summary:`目的
为了规范五星级现场推行进程，完善现场改善评价标准，同步标杆客户智能制造能力成熟度评估标准，建设成可持续改进的标准化、数字化精益生产的一流工厂，达成客户高效、低成本、零缺陷的需求。
2.0范围
各事业部的五星级现场建设和日常管理。
3.0定义`,citations:[],tags:["NPI","停线机制","直通率"],raw_file:"WIQG057 五星级现场推行规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
五星级现场推行规范
文件类别
■质量  □环境  □职业健康与安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIQG057
文件版本
A.0
页数
共10页
编制部门 ：企业管理部  
编制/修定：王  盛  树
审 核 人 ：李      洋
批 准 人 ：李      锋
涉及部门：
■总经办     ■品质部     □财务部     ■PMC 部         ■工艺准备部   
■工程部     ■采购部     ■物流部     ■业务部         ■企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   
■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                         
编制/修定日期：2025-08-13                         发布日期： 2025-08-20
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新版发行
/
[质量专员]
2025-7-31
　
　
1.0目的
为了规范五星级现场推行进程，完善现场改善评价标准，同步标杆客户智能制造能力成熟度评估标准，建设成可持续改进的标准化、数字化精益生产的一流工厂，达成客户高效、低成本、零缺陷的需求。
2.0范围
各事业部的五星级现场建设和日常管理。
3.0定义
序号
要素名称
名词
释义
1
战略愿景
SQDC
安全Safety ，质量Quality ，交付Delivery ，成本Cost
2
领导力
“2”、“1/2”、“0”原则
需要提升的指标提升为原来的2倍，需要降低的目标至少降低为原来的1/2；需要杜绝的重点问题，目标设置为0
3
人才培育
能力规划
基于战略业务需求，找到业务的机会差距和业绩差距，基于差距分析、岗位能力要求、业界洞察、结合员工的能力现状，采用问卷调查、访谈等形式`},{id:"wi:WISB005-",doc_code:"WISB005-",doc_name:"发电机运行管理规程",rev:"A.3",department:"设备动力部",module:"wi",npi_phase:"PVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.                                文件封面                                   发电机运行管理规范 文件类别 ■质量  □环安  □健康安全  □其他 文件等级 □一级文件  □二级文件  ■三级文件 文件编号 WISB005 文件版本 A.3 页数 共4页 编制部门 ：工艺准备部 编制/修定：周 顺 波 审 核 人 ：任 恩 恩  批 准 人 ：王 旭 升 涉及部门： □总经办     □品质部     □财务部     □PMC 部         ■工艺准备部    □工程部     □采购部     □",citations:["WISB005"],tags:["NPI"],raw_file:"WISB005-发电机运行管理规程A.3.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                               文件封面                                
  发电机运行管理规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISB005
文件版本
A.3
页数
共4页
编制部门 ：工艺准备部
编制/修定：周 顺 波
审 核 人 ：任 恩 恩 
批 准 人 ：王 旭 升
涉及部门：
□总经办     □品质部     □财务部     □PMC 部         ■工艺准备部   
□工程部     □采购部     □物流部     □业务部         □企业管理部
□电源总装事业部    □逆变器事业部     □喷涂事业部     □储能事业部   
□微模块事业部      □新业务事业部     □结构事业部     □NPI工厂
编制/修定日期：2025-09-17
发布日期：2025-09-17
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A1
增加履历，版本升级。
/
[质量专员]
2017-6-20
A2
1.升级文件编号。2.优化文件封面及履历。3.优化文件格式。
/
[质量专员]
2022-03-15
A3
1.文件过期，刷新文件。2.版本升级。3.优化文件封面及履历　
/
[质量专员]
2025-09-17
　
1.0 目的 
妥善保养发电设备，提高发电机的寿命，安全输电，制定此规范。 
2.0 范围 
适用于本公司发电机操作及保养。 
3.0 定义  
无 
4.0 职责与权限
发电车间：负责正常供电，遵循配电原则，并做好发电机的检查保养记录。
5.0 输入 
略 
6.0 输出 
《设备点检表》 
7.0 工作程序 
7.1 发电前的准备工作
7.1.1 检查发电机电瓶电压值，电压表的读数应该在26V之上。
7.1.2 供油箱内的油位，油位不可以太低，以防止油箱底层的积水混入油管内。
7.1.3 检查发电机电路及输电电路是否完好，以防发生意外情况。
7.2 发电步骤 
7.2.1 合上蓄电池电路开关,到控制箱观察电池是否在正常值，确认后，按指示方向旋动发 
      电机的启动旋扭，则发电机会自动启动运行。
7.2.2 发电机先运行预热一段时间，此时检查发电机的声音，烟雾，水温等有没有异常。
7.2.3 到发电机控制器观察发电机的电压，频率。电压在相压400V左右，频率在50HZ左右。
7.2.4 以上步骤都正常时,就可以合上输电开关,向配电房输电,发电过程完成.
7.3 供电步骤
7.3.1 先合上发电机供电开关。
7.3.2再到配电柜合上`},{id:"wi:WISB006-",doc_code:"WISB006-",doc_name:"设备维修物料检验作业规范",rev:"A.2",department:"设备动力部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r文件封面\r\r\r 设备维修物料检验作业规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB006\x07\x07文件版本\x07A.2\x07页数\x07共3页\x07\x07\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军\r\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：2022-0",citations:["WISB006"],tags:["IQC"],raw_file:"WISB006-设备维修物料检验作业规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r文件封面\r\r\r 设备维修物料检验作业规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB006\x07\x07文件版本\x07A.2\x07页数\x07共3页\x07\x07\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军\r\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：2022-03-15\x07发布日期：2022-03-18\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-6-20\x07\x07A2\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-03-15\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的 \r维修所需物料的品质检验、样品认可及管制措施。以确保所购物料品质符合要求及用途需要。 \r2.0 范围 \r适用于所有维修所使用的原材料、零件及委外加工物品之进料检验。 \r3.0 定义 \r无 \r4.0 职责与权限\r    设备维修相关人员负责物料的请购，并确保所购物料符合要求。\r5.0 输入 \r无 \r6.0 输出 \r无 \r7.0 工作程序 \r7.1 工作职责\r7.1.1 维修电工 负责电气维修中所需物料的请购及协助品检检测物料的品质。 \r7.1.2 维修钳工 负责机械维修中所需物料的请购及协助品检检测物料的品质。 \r7.1.3 仓 管 员 接到物料后及时报相关人员送检,并对其物料进行标示，以区别于其他。\r7.1.4 品 检 员 检验物料是否符合请购需求。\r7.2 工作流程\r   7.2.1 设备保养部根据需求请购维修物料，经采购部采购后，供应商将物料送至仓库\r   7.2.2 仓管员通知品质部品检检查是否符合请购要求，同时通知维修电工、维修钳工协助检查物料性能\r   7.2.3 检查合格，仓库收料，设备保养部领用；检查不合格，仓库填写《退货单》退回供应商更换或维修\r   7.2.4 对于不能从外观判定的物料，仓库可先收料，设备保养部领用；若出现异常，设备保养部通知采购异常，填写《产品"},{id:"wi:WISB007-",doc_code:"WISB007-",doc_name:"电梯运行管理规程",rev:"A.5",department:"设备动力部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r电梯运行管理规程\r\r文件类别\x07■质量  □环安   □其他  □QEH体系",citations:["WISB007"],tags:["NPI"],raw_file:"WISB007-电梯运行管理规程A.5.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r电梯运行管理规程\r\r文件类别\x07■质量  □环安   □其他  □QEH体系\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB007\x07\x07文件版本\x07A.5\x07页数\x07共4页\x07\x07\r编制部门 ：工艺准备部 \r\r编制/修定：周 顺 波\r\r审 核 人 ：任 恩 恩\r\r批 准 人 ：王 旭 升\r涉及部门：\r□总经办     □品质部     □财务部     □PMC 部         ■工艺准备部   \r□工程部     □采购部     □物流部     □业务部         □企业管理部\r□电源总装事业部    □逆变器事业部     □喷涂事业部     □储能事业部   \r□微模块事业部      □新业务事业部     □结构事业部     □NPI工厂\r                                                                       \r编制/修定日期：2025-09-17                  发布日期： 2025-09-17\r\r\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级\x07/\x07[质量专员]\x072017-7-20\x07\x07A.3\x07优化表单\x07/\x07[质量专员]\x072020-09-23\x07\x07A.4\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-03-17\x07\x07A.5\x07文件过期，刷新文件。2.版本升级。3.优化文件封面及履历。\r优化7.4.13电梯紧急联络方式及维保单位联系方式。\x077.4.13\x07[质量专员]\x072025-09-17\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r确保电梯安全运行。\r2.0范围\r适用于智造示范工厂科技有限公司所有电梯操作员及"},{id:"wi:WISB008",doc_code:"WISB008",doc_name:"配电系统管理规程",rev:"A.3",department:"设备管理部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                            \r\r\r 配电系统管理规程\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB008\x07\x07文件版本\x07A.3\x07页数\x07共5页\x07\x07\r编制部门 ：工艺准备部\r\r编制/修定：周 顺 波\r\r审 核 人 ：任 恩 恩 \r\r批 准 人 ：王 旭 升\r涉及部门：\r□总经办     □品质部     □财务部     □PMC 部         ■工艺准备部   \r□工程部     □",citations:[],tags:["NPI"],raw_file:"WISB008配电系统管理规程A.3.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                            \r\r\r 配电系统管理规程\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB008\x07\x07文件版本\x07A.3\x07页数\x07共5页\x07\x07\r编制部门 ：工艺准备部\r\r编制/修定：周 顺 波\r\r审 核 人 ：任 恩 恩 \r\r批 准 人 ：王 旭 升\r涉及部门：\r□总经办     □品质部     □财务部     □PMC 部         ■工艺准备部   \r□工程部     □采购部     □物流部     □业务部         □企业管理部\r□电源总装事业部    □逆变器事业部     □喷涂事业部     □储能事业部   \r□微模块事业部      □新业务事业部     □结构事业部     □NPI工厂\r\r\r编制/修定日期：2025-09-17\x07发布日期：2025-09-17\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-6-20\x07\x07A2\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-03-14\x07\x07A3\x071.文件过期，刷新文件。2.版本升级。3.优化文件封面及履历。\x07/\x07[质量专员]\x072025-09-17\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r\r1.0目的\r为确保配电系统安全、经济、可靠运行，规范配电系统的管理，特制定本规定。\r2.0范围\r适用于公司配电系统，包括各级变配电系统。\r3.0 定义\r无\r4.0职责与权限\r4.1 电工必须持证上岗，具备应有的电工专业知识。\r4.2 电工应本着认真的态度做好配电系统的各项巡视、保养、维护、操作工作，认真做好各项点检记录。做到当天问题当天解决，不留隐患。发现问题及时处理，并向有关领导汇报，做好维修记录。\r5.0 输入	\r略\r6.0 输出\r略\r7.0 工作程序\r7.1停送电管理\r7.1.1接到电力公司停电通知后，发文知会各部门，使其做好准备。\r7.1.2停送电操作必须两人同时进行，一人操作一人监护。\r7.1.3 严禁口头约时停电、送电操作。\r7.1.4作业场所必须设置安全遮栏，悬挂相应的标示，配置有效的灭火器材及通讯设施。\r7.1.5 操"},{id:"wi:WISB009-",doc_code:"WISB009-",doc_name:"空调运行管理规程",rev:"A.2",department:"设备动力部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r文件封面\r\r\r 空调运行管理规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB009\x07\x07文件版本\x07A.2\x07页数\x07共3页\x07\x07\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军\r\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：2022-03-16",citations:["WISB009"],tags:["质量体系","受控规程"],raw_file:"WISB009-空调运行管理规程A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r文件封面\r\r\r 空调运行管理规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB009\x07\x07文件版本\x07A.2\x07页数\x07共3页\x07\x07\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军\r\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：2022-03-16\x07发布日期：2022-03-18\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-6-20\x07\x07A2\x071.升级文件编号。 2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-03-16\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r为确保空调系统的安全、经济运行，给员工创造一个舒适的工作环境，特制订本规定。\r2.0范围\r空调系统、包括冷水机组、风柜机、冷却塔、循环水泵。\r3.0 定义\r无\r4.0 职责与权限\r4.1维修部电工职责\r4.1.1 坚守岗位，严格执行空调系统管理的各项规章制度，精心操作维护，确保空调系统的安全、 经济、文明运行。     　　　　　　　　　　　　　　　　　　　　　　　　　　　　\r4.1.2 当班人员负责空调的开关机及点检工作，做到按时开关机，认真填写点检记录发现问题及时处理并向有关领导汇报，作好维修记录。\r4.1.3 电工责任人制订大小修及清洗维护计划，并监督执行情况。\r5.0 输入\r略\r6.0 输出\r略\r7.0 工作程序\r7.1 维修部电工担负全厂空调系统安全、经济、文明运行及空调的日常点检维护职责，冷水机组、冷却塔、循环水泵、风柜机由供应商代理维修。水质处理由签约公司代理。\r7.2签约代理维修制度\r7.2.1在保修期内当空调设备发生故障时由设备管理部联系供应商维修，供应商维修时         维修部电工应到场了解故障发生原因并记录。\r7.2.2保修期外与供应商签订维修合同由签约商负责维修，维修部电工监督。\r7.3 水质管理制度\r7.3.1空调循环水必须经过处理合格才能使用。\r7.3."},{id:"wi:WISB010",doc_code:"WISB010",doc_name:"电动堆高车操作及保养规范",rev:"A.3",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd. 文件封面  电动堆高车操作及保养规范 文件类别 ■质量  □环安  □健康安全  □其他 文件等级 □一级文件  □二级文件  ■三级文件 文件编号 WISB010 文件版本 A.3 页数 共6页 编制部门 ：设备管理部 编制/修定：任 恩 恩 审 核 人 ：  批 准 人 ：皮 美 军 涉及部门： □总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部 □结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部 □人资部   □采购部       □财务部  □新业务开发部 编制/修定日期：2022-03-16 发布日期：2022-03",citations:[],tags:["质量体系","受控规程"],raw_file:"WISB010电动堆高车操作及保养规范A.3.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
文件封面
 电动堆高车操作及保养规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISB010
文件版本
A.3
页数
共6页
编制部门 ：设备管理部
编制/修定：任 恩 恩
审 核 人 ： 
批 准 人 ：皮 美 军
涉及部门：
□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部
□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部
□人资部   □采购部       □财务部  □新业务开发部
编制/修定日期：2022-03-16
发布日期：2022-03-18
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A2
优化表单
[质量专员]
2017-7-31
A3
1.升级文件编号。2.优化文件封面及履历。3.优化文件格式。
/
[质量专员]
2022-03-16
　
　
1.0目的 
规范电动堆高车的操作管理，指导作业员正确的使用设备，使车辆更加安全、有效的使用。
2.0范围 
适用于示范厂公司全电动堆高车。
3.0 定义 
　 对货物进行装卸、堆高、堆垛和短距离运输作业。
4.0 职责与权限
   电动堆高车操作人员须清楚车辆的操作方法及维护保养。
5.0 输入 
《全电动堆高车说明书》 
6.0 输出 
《设备点检表》 
7.0 工作程序 
　7.1、车辆的操作指导
7.1.1 车辆的所有操作都集中在操作手柄上。（下图）
紧急反向防撞按钮 
紧急反向防撞按钮
加速旋钮喇叭按钮升降控制按钮
加速旋钮
喇叭按钮
升降控制按钮
7.1.2 车体上的电源插接把手为电源总开关，当插上该开关，转动钥匙打开电锁则电源接通。
7.1.3 操作时双手握住操作手柄，转动加速旋钮，向前旋转车辆向前行驶；向后旋转则车辆先后行驶。
7.1.4让操作手柄回复到起始位置或下压至水平位置为刹车或停车。
7.1.5 车辆的转向由左右转动手柄来控制，转向时车辆应放慢运行速度。
7.1.6 操作手柄顶端的红色大按钮为倒车防撞按钮，当车辆在狭窄的环境中后退时，操作者后部遇到障碍物将人体撞向操作手柄，触动该按钮即将车辆转变为前进状态，以避免人体受到挤压的危险。
7.1.7 堆垛货物时，应非常缓慢地驾驶车辆，要将货物放在载荷中心，以平衡载重。
7.1.8 当操作手柄上电量显示只剩下一格时，就必须将车开到充电的地方进行充电。
7.1.9 车辆蓄电池放电超过80%时，电控内的低电压保护功能就自动启动，货叉的起升、下降就会停止。
7.2 电池的充电
7.2.1 车辆充电时必须保持充电处通风良好。
7.2.2 充电时需拔出电源插接把手，与充电器的输出插头对接`},{id:"wi:WISB011",doc_code:"WISB011",doc_name:"中水回用作业指导书",rev:"A.2",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:"\b   智造示范工厂科技有限公司\v     Smart Mfg Demo Factory Co., Ltd.\r文件封面\r\r\r 中水回用作业指导书\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB011\x07\x07文件版本\x07A.2\x07页数\x07共4页\x07\x07\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军\r\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：20",citations:[],tags:["质量体系","受控规程"],raw_file:"WISB011中水回用作业指导书A.2.doc",body_snippet:"\b   智造示范工厂科技有限公司\v     Smart Mfg Demo Factory Co., Ltd.\r文件封面\r\r\r 中水回用作业指导书\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB011\x07\x07文件版本\x07A.2\x07页数\x07共4页\x07\x07\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军\r\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：2022-03-16\x07发布日期：2022-03-18\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-06-20\x07\x07A2\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-03-16\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0 目的 \r规范中水回用能达到净化水质，制定此规范\r2.0 范围 \r本作业规范适用于中水回用作业技术员。 \r3.0 定义 \r减少对污、废水的排量，减少水环境污染 ，达到废水回收利用。\r4.0 职责与权限\r    中水回用技术员应严格按照工艺流程来操作作业，若发现异常要及时汇报处理。\r5.0 输入 \r《中水回用操作说明书》\r6.0 输出 \r《设备点检表》 \r7.0 工作程序 \r7.1 中水回用工艺流程图：\r\b\b\r\b\b\b\b\b\b\b\b\b  \r\b\b  \r\b\b\b\b\b\b\b\b\b\r\b\b\b\r\b\b\b\b\r\b\r\r7.2 中水回用的操作流程: \r7.2.1 打开主机面板上的电源启动开关。首先启动原水泵，原水箱水位缓慢上升\r7.2.2 打开PH调节电源，其显示表定置在6.8-8.2之间为合格。检查碱液箱的储量标准，及时添加以满足设备运行需要。\r7.2.3 开启增压泵，让原水箱的水经水泵压力进入石英砂过滤器与活性炭过滤器。（目的是去除原方向进行操作清洗，先反洗后正洗，时间分别为15分钟，按排列循序依次对石英砂过滤器与活性炭过滤器完成清洗，直至清洗废水的排放口，出水无明显颜色即表示清洗工序达标完成\r7.2.4 打开超滤机架上进水阀门，观察进水压力表上压力参数不得超过2公斤。如进水压力超过2.5公斤，则应安排停机清洗，相关操作按超滤清洗指"},{id:"wi:WISB012-",doc_code:"WISB012-",doc_name:"试水线操作及保养规范",rev:"A.3",department:"设备动力部",module:"wi",npi_phase:"EVT",summary:"\b  智造示范工厂科技有限公司\v    Smart Mfg Demo Factory Co., Ltd.\r\r\r\r 试水线操作及保养规范\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB012\x07\x07文件版本\x07A.3\x07页数\x07共10页\x07\x07\r\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： /\r\r批 准 人 ：皮 美 军\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  ■品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：2022-0",citations:["WISB012"],tags:["质量体系","受控规程"],raw_file:"WISB012-试水线操作及保养规范A.3.doc",body_snippet:"\b  智造示范工厂科技有限公司\v    Smart Mfg Demo Factory Co., Ltd.\r\r\r\r 试水线操作及保养规范\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB012\x07\x07文件版本\x07A.3\x07页数\x07共10页\x07\x07\r\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： /\r\r批 准 人 ：皮 美 军\r\r涉及部门：\r□总经办  □业务/PMC  □物流部  ■设备部  □工程部  ■品质部\r□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r\r编制/修定日期：2022-03-16\x07发布日期：2022-03-25\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-6-20\x07\x07A.2\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-03-16\x07\x07A.3\x07增加机柜试水设备点检表\x07/\x07[质量专员]\x072022-03-20\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的 \r规范试水线的操作管理，指导作业员正确、有效的使用设备。\r2.0范围 \r适用于示范厂公司试水线。\r3.0 定义 \r对产品进行试水防漏测试\r4.0 职责及权限\r   试水线作业员应循设备操作规范，负责设备的日常保养。\r5.0 输入 \r《试水线操作说明书》 \r6.0 输出 \r《设备点检表》 \r7.0 工作程序 \r　7.1、设备的操作指导\r7.1.1接通电源，进入开机页面，输入密码，点击后进入控制主页（图1）\r图1\r\r\r\r\r7.1.2 控制主页整体包含系统名称，工作流程图，工作状态，料位显示，上件提示，定位提示，各功能页面操作；按下控制室进入详细操作页面，按下返回键返回开机页面（图2）\r（图2）\r禁止上件：此时不能上工件，在按下启动按钮后，达到上件条件后，会自动提示上件。\r请上件：在自动启动后，达到上件条件，系统会自动提示，此时可以上件。\r上件要求：在系统启动后，提示“请上件”后，将测试工件推入试水线的光电开关处，上件完成。\r定位等待：试水线没有到达定位点。\r喷淋：对工件进行喷淋试验工位，工件到达该位时，水泵启动，对工件全方位进行洒水，摸拟在室外下雨时的情景，从而达到防水检测的效果；有流量和压力显示；会有喷淋工作动画。\r吹干：对工件进行喷淋"},{id:"wi:WISB014-",doc_code:"WISB014-",doc_name:"施工作业许可运行管理",rev:"A.2",department:"设备动力部",module:"wi",npi_phase:"EVT",summary:`目的
  本文件的目的是制定对焊接、熔断和危险作业及一般作业的许可程序并实施，从而预防由工作引起的
火灾等各种事故。  
 
2.0范围`,citations:["WISB014"],tags:["质量体系","受控规程"],raw_file:"WISB014-施工作业许可运行管理A.2.docx",body_snippet:`  智造示范工厂科技有限公司    Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
  施工作业许可运行管理
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISB014
文件版本
A.2
页数
共5页
编制部门 ：设备管理部
编制/修定：任 恩 恩
审 核 人 ： 
批 准 人 ：皮 美 军
涉及部门：
□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部
□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部
□人资部   □采购部       □财务部  □新业务开发部
编制/修定日期：2022-03-23
发布日期：2022-03-25
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A1
增加履历，版本升级。
/
[质量专员]
2017-6-20
A2
1.升级文件编号。2.优化文件封面及履历。3.优化文件格式。
/
[质量专员]
2022-03-23
　
1.0目的
  本文件的目的是制定对焊接、熔断和危险作业及一般作业的许可程序并实施，从而预防由工作引起的
火灾等各种事故。  
 
2.0范围
本文件适用于在本公司内进行施工的所有施工人员。
3.0定义
   3.1动火作业：是指焊接、熔断等使用火器的作业；
   3.2危险作业：是指密封作业（缺乏氧气作业）、高处作业、搬运重物作业等有重大危害的作业；
   3.3一般作业：是指除动火、危险作业以外的所有作业；
4.0职责与权限
 4.1 设备管理部
 4.1.1具有赋予危险作业资格的权力，对部门内的危险作业进行分类管理。
 4.1.2应该给为公司业务出入的作业者进行安全培训，定期进行现场点检。
 4.1.3在一般作业及焊接、熔断等使用火器的场所，发生如下事项时，应及时命令停止作业或者要求改正措施:
　　　　1)在工程场所，没有安排固定的相关部门监督者时；
　2)在没有出入登记或者在没有许可的情况下使用火器时；
　 3)使用火器时，没有配置灭火器、消火栓等时；
　 4)使用火器时，作业场的作业位置的10m（半径）范围内放有可燃物质或危险物时；
　 5)在作业场周边存有可燃性气体时；
　 6)有其它危险时；
4.2相关部门
4.2.1施工作业时，事先申请施工许可证，申请下来后进行作业时应把许可证出示在现场。
4.2.2选定、安排施工监督管理者。
4.2.3进行熔接、熔断等使用火器的作业时，应该备置灭火器、消火栓，而且在作业位置的10m（半径）以内应排除引火物质、可燃物、危险物、高压气等。
4.2.4`},{id:"wi:WISB015",doc_code:"WISB015",doc_name:"逆变器车间流水线操作指导及维护保养规范",rev:"A.1",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:`目的
  规范流水线的操作管理，指导操作员正确使用设备,同时提高设备工作质量，提高设备利用率，并给流水线提供清洁、安全、良好的运行条件和环境确保流水线设备的正常运行保证工艺质量，提高生产效率保证人身、设备和产品的安全。
2.0范围
   适用于示范厂三、四楼逆变器车间流水线的使用和维护。
3.0 定义`,citations:[],tags:["质量体系","受控规程"],raw_file:"WISB015逆变器车间流水线操作指导及维护保养规范A.1.docx",body_snippet:`  智造示范工厂科技有限公司    Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
 逆变器车间流水线操作指导
及维护保养规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISB015
文件版本
A.1
页数
共7页
编制部门 ：设备管理部
编制/修定：任 恩 恩
审 核 人 ： 
批 准 人 ：皮 美 军
涉及部门：
□总经办  □业务/PMC  □物流部  ■设备部  □工程部  □品质部
□结构事业部  □逆变器事业部   □电源总装事业部  □微模块事业部
□人资部   □采购部       □财务部  □新业务开发部
编制/修定日期：2022-03-23
发布日期：2022-03-25
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A0
新增版本。
/
[质量专员]
2017-5-15
A1
1.升级文件编号。2.优化文件封面及履历。3.优化文件格式。
/
[质量专员]
2022-03-23
　
1.0 目的
  规范流水线的操作管理，指导操作员正确使用设备,同时提高设备工作质量，提高设备利用率，并给流水线提供清洁、安全、良好的运行条件和环境确保流水线设备的正常运行保证工艺质量，提高生产效率保证人身、设备和产品的安全。
2.0范围
   适用于示范厂三、四楼逆变器车间流水线的使用和维护。
3.0 定义  
   流水线是一种广泛应用于自动化总装生产线的输送设备。其机械部分主要由驱动机头（马达、牙箱、传动链轮等）、输送段、张紧机尾及电控箱等部分组成。可根据产品工艺需要配置专机或辅机以完成需要的功能。
4.0 职责及权限
    逆变器车间工作人员需遵守操作规程，做好日常保养并记录。
5.0 输入
《总装线说明书三期(18米)》
6.0 输出
《逆变器车间流水线日常保养记录表》
《逆变器车间流水线月度保养记录表》
7.0 操作规程及维护保养指导
7.1自动总装线操作规程:
         7.1.1按下电源启动开关，开启PLC控制电源，触摸屏开始显示，设备进入待机状态(图1)。
电源启动开关图1
电源启动开关
7.1.2点击触摸屏进入系统进行操作(图2，图3)。
点击触摸屏，进入图3状态                                               
点击触摸屏，
进入图3状态
               图2                                            图3
    
7.1.3 开启照明、输送开关（图4），系`},{id:"wi:WISB016",doc_code:"WISB016",doc_name:"通用太阳能逆变器灌胶作业规范",rev:"A.2",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:"\b   智造示范工厂科技有限公司\v   Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB016\x07\x07文件版本\x07A.2\x07页数\x07共10页\x07\x07  通用太阳能逆变器灌胶作业规范\r\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军 \r\r涉及部门：\r□总经办  □业务/PMC  □物流部 ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事",citations:["SUN200","CN876"],tags:["质量体系","受控规程"],raw_file:"WISB016通用太阳能逆变器灌胶作业规范A.2.doc",body_snippet:"\b   智造示范工厂科技有限公司\v   Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB016\x07\x07文件版本\x07A.2\x07页数\x07共10页\x07\x07  通用太阳能逆变器灌胶作业规范\r\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军 \r\r涉及部门：\r□总经办  □业务/PMC  □物流部 ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部  □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r编制/修定日期：2022-03-23\x07发布日期：2022-03-25\x07\x07\r\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-6-20\x07\x07A2\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-03-23\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0 目的\r规范灌胶操作步骤，指导灌胶作业及对灌胶设备进行维护保养，控制灌胶质量工艺，提高工作效率。\r2.0 范围\r本操作指导书适用于灌胶作业员、现场作业管理员，针对太阳能逆变器灌胶操作进行指引，质量人员在对灌胶作业进行检验时也可作为参考文件。本指导书可作为太阳能逆变器产品灌胶作业的通用指引，具体作业内容等事项详见作业产品编码指导书。\r3.0 定义\r无\r4.0 职责及权限\r   凡是使用灌胶设备进行灌胶作业的人员，必须熟悉灌胶设备的基本操作及维护指引，做好日常保养。\r5.0 输入\r《SUN2000 太阳能逆变器灌胶作业指导书》\r6.0 输出\r《灌胶机日常维护保养记录表》\r7.0 工作程序\r   7.1准备\r根据当日生产计划备好灌封胶。开盖前注意核查胶料品牌、生产公司（目前采用Lord公司SC-30或Dow corning公司CN8760灌封胶）、胶料保质期在有效使用期内；开盖时注意观察胶体表面纯净、无变色、无漂浮物、无杂质硬物、无干涸现象。\r准备防护用具：氯丁橡胶手套、口罩、护目镜；\r凡是使用灌胶设备进行灌胶作业的人员，必须熟悉灌胶设备的基本操作及维护指引，了解灌胶设"},{id:"wi:WISB017",doc_code:"WISB017",doc_name:"信息化安全管理规范",rev:"B.2",department:"设备动力部",module:"wi",npi_phase:"EVT",summary:`目的：为加强公司信息安全管理，明确岗位职责，规范信息安全操作流程，维护网络正常运行，确保公司信息系统的安全，现根据《中华人民共和国计算机信息系统安全保护条例》及我司信息安全管理要求有关规定，结合本公司实际，特制订本制度。
1.2 方针：加强公司信息安全管理，创造客户放心合作环境。
2.0范围
适用于公司所有员工。`,citations:["QCCG023","DG001","WIRZ034"],tags:["质量体系","受控规程"],raw_file:"WISB017 信息化安全管理规范B.2.docx",body_snippet:`智造示范工厂科技有限公司
 Smart Mfg Demo Factory Co., Ltd.
                                 文件封面                                
                                                                                                                                                             
                     
信息化安全管理规范
文件类别
□质量  □环境  □健康安全  ■其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISB017
文件版本
B.2
页数
共12页
编制部门 ：设 备 部
编制/修定：杨 政 武
审 核 人 ：胡 志 平
批 准 人 ：王 旭 升
涉及部门：
■总经办   ■业务/PMC     ■物流部     ■工艺准备部     ■工程部        ■品质部   ■结构事业部      ■逆变器事业部    ■电源总装事业部           ■微模块事业部   ■人资部   ■采购部      ■财务部    ■新业务开发部
                                                                       
编制/修定日期：2024-10-16                       发布日期：2024-10-17
文件修订履历管理
版本/次
更改内容摘要
更改
章节号
优化人
优化日期
A.6
增加履历，版本升级。
/
[质量专员]
2017-07-03
A.7
增加8.8拍照管理
8.8
[质量专员]
2019-08-08
A.8
更改文件编号、表单编号，版本升级
/
[质量专员]
2021-07-02
A.9
按照客户要求重新定义信息安全关键岗位
/
[质量专员]
2022-07-25
B.0
按照客户体系要求重新修订文件
/
[质量专员]
2022-10-20
B.1
按照内审体系要求重新修订文件
全章节
[质量专员]
 2024-1-12
B.2
按照内审体系要求重新修订文件
全章节
[质量专员]
 2024-10-16
　
1.0目的和方针
1.1目的：为加强公司信息安全管理，明确岗位职责，规范信息安全操作流程，维护网络正常运行，确保公司信息系统的安全，现根据《中华人民共和国计算机信息系统安全保护条例》及我司信息安全管理要求有关规定，结合本公司实际，特制订本制度。
1.2 方针：加强公司信息安全管理，创造客户放心合作环境。
2.0范围
适用于公司所有员工。
3.0`},{id:"wi:WISB019BTS",doc_code:"WISB019BTS",doc_name:"系统操作规范",rev:"A.4",department:"设备动力部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r BTS系统操作规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其",citations:["YT201","WISB019","WI830","DKBA040"],tags:["8D","BTS"],raw_file:"WISB019BTS系统操作规范A.4.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r BTS系统操作规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB019\x07\x07文件版本\x07A.4\x07页数\x07共 36页\x07\x07\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ：   /   \r\r批 准 人 ：皮 美 军 \r\r涉及部门：\r■总经办   ■业务/PMC   ■物流部    ■设备部   ■工程部     ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部     ■微模块事业部\r■人资部   ■采购部      ■财务部    ■新业务开发部\r编制/修定日期：2021-07-02\x07发布日期：2021-07-07\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.3\x07增加履历，版本升级 \x07/\x07[质量专员]\x072017-06-27\x07\x07A.4\x071.更改文件编号2.表单编号3.版本升级4.东莞示范厂条码追溯系统规范A.3优化为：BTS系统操作规范\r\x07/\x07[质量专员]\x072021-07-02\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f目的\r应公司内部质量追溯防呆需要及标杆客户公司要求，为了保证产品质量和追溯性，实现标杆客户公司和示范厂之间实现充分的产品信息联通、示范厂条码信息更便捷、稳定、准确、规范，内部特制订此标准，规范示范厂各单位工作追溯信息准确录入，同时制定各工序过站系统，加强客户对公司产品更加放心、信赖。\r 范围\r适用于本公司逆变器、电源柜、MINI机柜、温控等组装产品追溯和管控。\r 定义\r\r名称\x07定义\x07\x07创建条码\x07外购物料或标杆客户转卖物料需重新创建YT条码\x07\x07PO采购件\x07示范厂公司通过采购订单向供应商采购的物料或标杆客户转卖至我司的产品\x07\x07BOM\x07物料流程追溯管控"},{id:"wi:WISB021",doc_code:"WISB021",doc_name:"设备维修管理规范",rev:"A.2",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:"\b   智造示范工厂科技有限公司\v     Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB021\x07\x07文件版本\x07A.2\x07页数\x07共3页\x07\x07   设备维修管理规范\r\r编\r\r\r\r\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军 \r\r涉及部门：\r□总经办  □业务/PMC  □物流部 ■设备部  □工程部  □品质部\r□结构事业部  □逆变",citations:[],tags:["质量体系","受控规程"],raw_file:"WISB021设备维修管理规范A.2.doc",body_snippet:"\r\b   智造示范工厂科技有限公司\v     Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB021\x07\x07文件版本\x07A.2\x07页数\x07共3页\x07\x07   设备维修管理规范\r\r编\r\r\r\r\r编制部门 ：设备管理部\r\r编制/修定：任 恩 恩\r\r审 核 人 ： \r\r批 准 人 ：皮 美 军 \r\r涉及部门：\r□总经办  □业务/PMC  □物流部 ■设备部  □工程部  □品质部\r□结构事业部  □逆变器事业部  □电源总装事业部  □微模块事业部\r□人资部   □采购部       □财务部  □新业务开发部\r编制/修定日期：2022-05-10\x07发布日期：2022-05-16\x07\x07\r\x07\x07\r\f\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A1\x07增加履历，版本升级。\x07/\x07[质量专员]\x072017-6-20\x07\x07A2\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07[质量专员]\x072022-05-10\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r完善设备管理，控制设备维修成本。\v2.0范围\r适用本公司生产设备维修。\r3.0定义\r    无\r4.0 职责及权限\r    设备管理员根据工作流程对设备故障进行处理，控制维修成本。\r5.0输入\r    无\r6.0输出\r《设备维修申请单》、《设备维修验收单》\r7.0 工作程序\r7. 1设备故障发生，使用部门填写《设备维修申请单》经部门主管、经理签字确认后交予设备保养部的设备管理员；\r7. 2设备管理员建立维修档案，然后将维修任务下达给维修领班；\r7. 3维修领班安排现场检查故障原因及判定维修难度，决定内部维修还是委外维修；\r7.4 内部维修工作流程\r7.4.1维修人员现场维修\r7.4.2维修完成后由维修人员现场填写《设备维修验收单》，并由现场领班、主管确认\r7.4.3维修人员将《设备维修验收单》交予设备管理员，设备管理员将资料存档\r7.5 设备委外维修工作流程\r7.5.1维修领班将需委外的维修项目在《设备维修申请单》上注明，交予设备保养部主管及公司副总确认\r7.5.2维修领班将《设备维修申请单》转交设备管理工程师\r7.5.3设备管理工程师判定设"},{id:"wi:WISB022",doc_code:"WISB022",doc_name:"环保三级稽查操作规范 A.0",rev:"A.0",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r环保三级稽查操作规范\r\r\r文件类别\x07■质量  □环安  (健康安全  □其",citations:["WIPZ057"],tags:["7S与安全"],raw_file:"WISB022环保三级稽查操作规范 A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r环保三级稽查操作规范\r\r\r文件类别\x07■质量  □环安  (健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB022\x07\x07文件版本\x07A.0\x07页数\x07共5页\x07\x07\r\r编制部门 ：设 备 部\r\r                 编制/修定：任 恩 恩\r\r                 审 核 人 ：皮 美 军\r\r                 批 准 人 ：崔 世 新\r\r涉及部门：\r■总经办   □业务/PMC     □物流部     ■设备部     □工程部     ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部\r■人资部   ■采购部       □财务部    ■新业务开发部\r                                                                       \r编制/修定日期：2022-05-26                         发布日期：2021-05-28\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改章节号\x07编制/修定\x07实施日期\x07\x07A.0\x07新版发行\x07/\x07[质量专员]\x072022-05-28\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r为了有效推行环保体系三级稽查有效实施，从而推动各部门持续改善生产过程、持续优化并完善所有环保体系而制订本规范。\r2.0范围\r适用于公司的所有部门环境保护等稽查。\r3.0定义\r3.1三级稽查：一级稽查由各部门自主组织的稽查；二级稽查由平台组织的，按规定的时间间隔对各生产部门实施的稽查；；三级稽查是由公司高层组成的稽查团队对各事业部实施的稽查。\r3.2 6S稽查："},{id:"wi:WISB023",doc_code:"WISB023",doc_name:"生产区域信息安全管理规定",rev:"A.0",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\r                                文件封面                                \r                                                                                                                                                             \r                     \r生产区域信息安全管理规定\r\r\r文件类别\x07(质量  (环安   ■其他 □QEH体系\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07 \x07\x07文件版本\x07A.0\x07页",citations:["WI440"],tags:["质量体系","受控规程"],raw_file:"WISB023生产区域信息安全管理规定.doc",body_snippet:"\b智造示范工厂科技有限公司\r                                文件封面                                \r                                                                                                                                                             \r                     \r生产区域信息安全管理规定\r\r\r文件类别\x07(质量  (环安   ■其他 □QEH体系\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07 \x07\x07文件版本\x07A.0\x07页数\x07共5页\x07\x07\r  编制部门 ：设 备 部\r\r编制/修定：[质量专员] \r\r审 核 人 ：/ \r\r批 准 人 ：皮美军\r\r涉及部门：\r■总经办   ■业务/PMC     ■物流部     ■设备部     ■工程部  \r■品质部   ■结构事业部    ■总装事业部 ■人资部     ■采购部       \r(财 务    (新业务开发部\r                                                                       \r编制/修定日期：2022-10-26                         发布日期：2022-11-07\r\r文件修订履历管理\x07\x07版本/\r版次\x07更改内容摘要\x07更改\r章节号\x07优化人\x07实施\r日期\x07\x07A.0\x07新增文件\x07/\x07[质量专员]\x072022-10-26\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\f1.0 目的\r为了保障公司各生产区域的信息安全，对生产区域的人员、物料、设备等的进出制定。\r2.0 范围\r1.生产区域整个生产过程所关联的各类信息:从原始记录、原始凭证到综合报表;\r2.生产过程信息采集、记录、传递、存贮、统计、输出的全过程;\r3.信息管理所涉及到的人(含系统操作及系统应用等)及设备(计算机、路由器\r及网络等)\r3.0 职责和权限\r3.1管理部综合管理部\r1)负责公司门卫及生产区域进出权限的管理:\r2)负责监督检查公司各区域人员进出情况并对违规人员作出处罚。  \r4.0 输入\r     略\r5.0 输出\r   《来访登记表》\r6.人员进出管理\r6.1公司人员进入生产区域:\r6.1.1进入生产区域的员工均不得"},{id:"wi:WISB024",doc_code:"WISB024",doc_name:"T-1锁排操作规范",rev:"A.0",department:"设备动力部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r\b                                                                                                                                           \r                                             \rT-1锁排操作规范\r  \r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB024\x07\x07文件版本\x07A.0\x07页数\x07共10页\x07\x07",citations:[],tags:["质量体系","受控规程"],raw_file:"WISB024 T-1锁排操作规范.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r\b                                                                                                                                           \r                                             \rT-1锁排操作规范\r  \r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISB024\x07\x07文件版本\x07A.0\x07页数\x07共10页\x07\x07\r编制部门 ：设 备 部\r\r编制/修定：郑 小 君\r\r审 核 人 ：胡 志 平\r\r批 准 人 ：李    锋\r\r涉及部门：\r■总经办   ■业务/PMC     ■物流部     ■设备部     ■工程部     ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部\r■人资部   ■采购部       ■财务部    ■新业务开发部\r\r                                                                         \r编制/修定日期：2023-6-23                 发布日期：2023-6-24\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07初版发行\x07/\x07[质量专员]\x072023-6-23\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\f1.0目的\r提前对需排产的订单物料进行设备，作业规范，物料齐套性，品质异常等情况进行提前识别，保证物料正常有序生产，特制定此规范。\r2.0范围\r适用于公司所有计划排产的物料\r3.0定义\rT-1锁排：排产的订单物料进行设备，作业规范，物料齐套性，品质异常等情况进行前一天的识别\r4.0职责\r采购部：确认外购物料的齐套性；\r品质部：确认物料的质量状况，SIP文件的完整性，完善性；\r工程部：确认SOP文件，工装，检具，图纸、EC变更等相关内容的符合性；\r生产部：确认工装，检具，设备、关键岗位人员的充分性；\rPMC部：添加（T-1）计划任务令；\r\r5.0输入\r无\r6.0输出\r《I-1锁排操作规范》\r\r\r\r\r\r\r\r\r\r\r\r\r\r"},{id:"wi:WISB025",doc_code:"WISB025",doc_name:"制造质量数据追溯管理规范",rev:"A.0",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:`目的
本规范规定了物料及产品条码生成、关键信息追溯采集及防呆管控、数据存储及回传、IT基础能力的基本标准。
2.0范围
适用于本规范适用于承接标杆客户ICT基础设施及数字能源产品生产的质量数据回传。
3.0定义`,citations:[],tags:["8D"],raw_file:"WISB025 制造质量数据追溯管理规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
制造质量数据追溯管理规范
文件类别
□质量  □环安   ■其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISB025
文件版本
A.0
页数
共11页
编制部门 ：设 备 部  
编制/修定：杜 子 厚
审 核 人 ：胡 志 平 
批 准 人 ：王 旭 升
涉及部门：
■总经办   ■业务/PMC    ■物流     ■设备    ■工程    ■品质
■结构事业部                      ■总装事业部           ■微模块事业部
□人资     □采购         □财 务    □新业务开发部
                                                                       
编制/修定日期：2024-08-15                      发布日期：2024-08-20 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新版发行
/
[质量专员]
2024-08-15
　
　
1.0目的
本规范规定了物料及产品条码生成、关键信息追溯采集及防呆管控、数据存储及回传、IT基础能力的基本标准。
2.0范围
适用于本规范适用于承接标杆客户ICT基础设施及数字能源产品生产的质量数据回传。
3.0定义
追溯颗粒度：针对不同物料的追溯精确要求，标杆客户定义了按物料来料批次追溯，按物料制造批次追溯，按物料SN追溯，即为追溯颗粒度。
4.0职责和权限
     /
5.0输入
 /
6.0输出
 /
7.0 流程图
     /
8.0作业内容
 8.1质量追溯总体要求
8.1.1加工标杆客户产品时，需要按《标杆客户公司泛网络产品追溯基线》(以下简称追溯基线)要求最新版实施追溯。
a.生产标杆客户产品均应建立对应的追溯体系，对交付标杆客户的产品实现追溯。通过《标杆客户公司泛网络产品追溯基线》(以下简称追溯基线)定义每类产品及物料的具体追溯模式及追溯颗粒度要求，按此要求实现数据采集追溯，含标杆客户转卖物料、标杆客户送料及厂商自`},{id:"wi:WISB027",doc_code:"WISB027",doc_name:"打印机的操作及保养规范A.0",rev:"A.1",department:"设备管理部",module:"wi",npi_phase:"EVT",summary:`目的
合理正确操作及保养打印机，减少故障,延长打印机使用寿命。
2.0范围
适用于公司内所有打印机的操作及保养。
3.0定义`,citations:[],tags:["质量体系","受控规程"],raw_file:"WISB027 打印机的操作及保养规范A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
打印机的操作及保养规范
文件类别
□质量  □环安   ■其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISB027
文件版本
A.1
页数
共6页
编制部门 ：设 备 部
编制/修定：杜 子 厚
审 核 人 ：胡 志 平
批 准 人 ：王 旭 升
涉及部门：
■总经办   ■业务/PMC     ■物流     ■设备     ■工程     ■品质
■结构事业部                       ■总装事业部           ■微模块事业部
■人资     ■采购         ■财 务    ■新业务开发部
                                                                       
编制/修定日期：2024-09-07                     发布日期：2024-09-08 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新版发行
/
[质量专员]
2024-08-22
A.1
新增自动校准定义
/
[质量专员]
2024-09-07
　
　
1.0目的
合理正确操作及保养打印机，减少故障,延长打印机使用寿命。
2.0范围
适用于公司内所有打印机的操作及保养。
3.0定义
  /
4.0  职责和权限
  设备部：负责维护保养以及定期校准。
5.0 输入
无
6.0 输出
无
7.0 工作流程图
无
8.0作业内容
8.1操作
8.1.1 由网络管理人员正确地安装好打印机，把常用的打印机设置成默认打印机。
8.1.2 打印机的各种性能，严格按照打印机操作说明书要求作业。
8.1.3 打印文档前，先打印预览，看是否是你想打印的文档，有没有要修改的地方，以防浪费纸张和油墨。
8.1.4 打印过程中若发现卡纸, 可将打印机盖打开，轻轻将卡在打印机内的纸抽出来。
8.1.5 不可私自安装打印机，以防出现打印故障。打印乱码时，马上关闭打印机，通知网络管理人员来维修。
8.1.6 发现打印机打印`},{id:"wi:WISC047",doc_code:"WISC047",doc_name:"自动粉房作业规范A.3",rev:"A.0",department:"生产部",module:"wi",npi_phase:"EVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                                                                                                                                                                                                     自动粉房作业规范 文件类别 ■质量  □环境  □健康安全  □其他 文件等级",citations:[],tags:["质量体系","受控规程"],raw_file:"WISC047自动粉房作业规范A.3.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                               
                                 
                                                                                                                            
                     
自动粉房作业规范
文件类别
■质量  □环境  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISC047
文件版本
A.3
页数
共 5页
编制部门 ：生 产 部
编制/修定：田 旺 锋
审 核 人 ：杨 会 华     
批 准 人 ：顾    伟  
涉及部门：
□总经办   □业务/PMC    □物流部    □设备部    □工程部   □品质部
■结构事业部      □逆变器事业部    □电源总装事业部   □微模块事业部
□人资部   □采购部      □财务部    □新业务开发部
编制/修定日期：2022-04-11
发布日期：2022-04-16
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.3
更改文件编号、表单信号，版本升级
/
[质量专员]
2022-04-11
    
1.0 目 的 
规范喷粉生产，提高产品合格率，降低生产成本。
2.0 范 围 
喷粉组所有人员。 
3.0 定 义 
喷粉：即粉末涂装，所用的涂料为粉末状，借助压缩空气及静电喷枪将粉末涂料涂到工件表面的一种喷涂方式。 
4.0 职责及权限
   喷粉组工作人员应遵守作业规范，做好日常点检及保养。
5.0 输 入 
5.1《标杆客户有机涂料质量要求》 
5.2《标杆客户金属零（组）件的粉末喷涂质量要求》 
5.3《工序流程卡》 
6.0 输 出 
6.1《喷粉工艺参数记录表》 
6.2《喷涂生产记录表》 
6.3《工序交接日报表》
6.4《喷粉线设备点检表》
7.0 工作程序 
7.1 喷涂前检查
7.1.1 每次开机前检查喷房接地状况。接地点包括喷房、粉筛、粉桶、过滤器和工件及对应装置；
7.1.2 粉房抽风部分不得有粉末外的任何异物；
7.1.3 粉筛必须与供粉中心连接好并且固定卡好；
7.1.4 检查密相阀传输器气管及粉管是否接好，保障通畅；
7.1.5 后过滤器上的气管要接好，门关好，废粉斗要接好锁好。
7.2 开机
7.2.1 打开压缩空气开关并将空气输入压力调整到5巴。
7.2.2`},{id:"wi:WISC048",doc_code:"WISC048",doc_name:"燃气检查作业规范A.1",rev:"A.0",department:"生产部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r燃气检查作业规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07",citations:[],tags:["停线机制","7S与安全"],raw_file:"WISC048燃气检查作业规范A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r燃气检查作业规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC048\x07\x07文件版本\x07A.1\x07页数\x07共 5页\x07\x07\r\r编制部门 ：生 产 部\r\r编制/修定：田 旺 峰\r\r审 核 人 ：杨 会 华     \r\r批 准 人 ：顾    伟  \r\r涉及部门：\r□总经办   □业务/PMC    □物流部   ■设备部   □工程部  ■品质部\r■结构事业部      □逆变器事业部  □电源总装事业部   □微模块事业部\r■人资部   □采购部      □财务部    □新业务开发部\r编制/修定日期：2022-04-11\x07发布日期：2022-04-16\x07\x07\f\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07更改文件编号、表单编号，版本升级。\x07/\x07田旺峰\x072022-04-11\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的： \r确保安全生产。 \r2.0 使用范围： \r适用于本公司喷涂车间和厂区燃气使用。 \r3.0 定义 \r鼻嗅法：指用鼻子嗅闻燃气管道附近，若漏气则有一种恶臭气味；\r肥皂水涂抹法：指用肥皂水涂抹在燃气管道接口处，若漏气则有气泡产生；\r4.0 职责及权限\r   做好日常点检， 确保全厂用气安全。\r5.0 输入 \r《日安全巡查登记表》\r6.0 输出 \r《燃气气路点检表》   \r7.0 工作程序 \r  7.1 检查人员：\r7.1.1 各线组长、领班每日点检；\r7.1.2 车间主管、设备组机修对每日点检进行复核；\r7.1.3 生产经理、行政部经理对每日点检进行抽检；\r7.2 检查地点：\r7.2.1 喷粉线（4条）燃烧机燃气输入管道；\r7.2.2 浸泡"},{id:"wi:WISC049",doc_code:"WISC049",doc_name:"废气处理柜操作及保养规范",rev:"A.3",department:"生产部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                            \r                     \r\r废气处理柜操作及保养规范\r文件类别\x07■质量  □环境 □职业健康与安全  □",citations:[],tags:["NPI"],raw_file:"WISC049 废气处理柜操作及保养规范A.3.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                            \r                     \r\r废气处理柜操作及保养规范\r文件类别\x07■质量  □环境 □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC049\x07\x07文件版本\x07A.3\x07页数\x07共 4页\x07\x07\r编制部门 ：\v\v编制/修定：生 产 部\r\r编制/修定：田 旺 峰\r\r审 核 人 ：杨 会 华\r\r批 准 人 ：牛 建 斌\r\r\v涉及部门:	\r□总经办     □品质部     □财务部     □PMC 部         □工艺准备部   \r□工程部     □采购部     □物流部     □业务部         □企业管理部\r□电源总装事业部    □逆变器事业部     ■喷涂事业部     □储能事业部   \r编制/修定日期：2025-07-01\x07发布日期：2025-07-08\x07\x07□微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂\f\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施日期\x07\x07A.2\x07更改文件编号，版本升级\x07/\x07田旺峰\x072022-04-11\x07\x07A.3\x07刷新文件\x07/\x07[质量专员]\x072025-07-01\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的 \r在保证喷涂生产线正常生产的前提下，处理废气，净化环境。 \r2.0 范围 \r适用于本公司喷淋式废气处理柜操作及保养。 \r3.0 定义 \r无 \r4.0 职责及权限\r   工作人员应按操作规程作业，做好日常保养及点检。\r5.0 输入 \r无 \r6.0 输出 \r《设备点检表》 \r7.0 工作程序 \r7.1操作规程 \r7.1.1 工作前，必须先检查池内水是否到位，否则先往水池中补充自来水。 \r7.1.2 接通电源。 \r7.1.3 打开喷淋水泵、排风机开关使其正常工"},{id:"wi:WISC050",doc_code:"WISC050",doc_name:"装配成品下线维修作业规范",rev:"A.4",department:"生产部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r装配成品下线维修作业规范\r\r\r文件类别\x07■质量  □环境  □职业健康与安",citations:[],tags:["NPI"],raw_file:"WISC050 装配成品下线维修作业规范A.4.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r装配成品下线维修作业规范\r\r\r文件类别\x07■质量  □环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC050\x07\x07文件版本\x07A.4\x07页数\x07共5页\x07\x07\r编制部门 ：生 产 部\r编制/修定：黄 远 涛\r审 核 人 ：罗 向 会\r批 准 人 ：陈 荣 波\r\r涉及部门：\r□总经办     □品质部     □财务部     □PMC 部         □工艺准备部   \r□工程部     □采购部     □物流部     □业务部         □企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     □储能事业部   \r□微模块事业部      □新业务事业部     ■结构事业部     □NPI工厂\r\r\r                                                                          \r编制/修定日期：2025-08-07                            发布日期：2025-08-14\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07版本升级\x07/\x07周怀裕\x072017-06-27\x07\x07A.2\x07增加各类维修的责任部门\x076.3\x07[质量专员]\x072021-01-22\x07\x07A.3\x07更改文件编号，版本升级\x07/\x07黄远涛\x072022-04-11\x07\x07A.4\x07文件超期，重新发行\x07/\x07[质量专员]\x072025-08-07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r规范装配成品下线维修物料的管控，保证产品维修后能够得到控制。\r2.0范围\r适用于本公司所有装配车间\r3.0定义\r无\r4.0 职责及权限\r工作人员应按照作业指导规范"},{id:"wi:WISC051",doc_code:"WISC051",doc_name:"EMS总装不良品返修处理流程规范",rev:"A.6",department:"生产部",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\r Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rEMS总装不良品返修处理流程规范\r文件类别\x07■质量  □环境  □职业健康与",citations:[],tags:["NPI","8D","IQC"],raw_file:"WISC051 EMS总装不良品返修处理流程规范A.7.doc",body_snippet:"\b智造示范工厂科技有限公司\r Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \rEMS总装不良品返修处理流程规范\r文件类别\x07■质量  □环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC051\x07\x07文件版本\x07A.7\x07页数\x07共 11页\x07\x07\r\r\r编制部门 ：生 产 部\r\r编制/修定：罗 基 成\r\r审 核 人 ：冯    安       \r\r批 准 人 ：王 志 伟     \r\r涉及部门：\r□总经办     ■品质部     □财务部     ■PMC 部         □工艺准备部   \r■工程部     □采购部     ■物流部     □业务部         □企业管理部\r■电源总装事业部    ■逆变器事业部     □喷涂事业部     □储能事业部   \r■微模块事业部      □新业务事业部     □结构事业部     □NPI工厂\r\r编制/修定日期：2025-08-07\x07发布日期：2025-08-14\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.5\x07增加履历，版本升级\x07/\x07[质量专员]\x072017-06-27\x07\x07A.6\x07更改文件编号，版本升级。\x07/\x07[质量专员]\x072022-04-11\x07\x07A.7\x07新增表单\x07/\x07[质量专员]\x072025-08-07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\f1.0目的\r为规范EMS物料不良品的处理与维修，特制定此规范要求。\r2.0范围\r适用于EMS业务模块的来料，制程，客退品，EC执行出现的不良品返工维修、复检处理过程\r3.0定义\r针对EMS不良物料的判定、维修、返工，复检过程进行规范处理，按照工艺流程针对不良品的处理过程进行\r监控。\r3.1 A类：结构件不良：来料不良处理及线边不良品物料的处理。\r3.2 B类：电器件性能不良：单板，测试环节，烧机等发现电性能"},{id:"wi:WISC052",doc_code:"WISC052",doc_name:"电源柜测试盲点管控流程",rev:"A.1",department:"生产部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \r电源柜测试盲点管控流程\r\r\r文件类别\x07■质量  □环境  □健康安全  □其",citations:[],tags:["质量体系","受控规程"],raw_file:"WISC052电源柜测试盲点管控流程A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \r电源柜测试盲点管控流程\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC052\x07\x07文件版本\x07A.1\x07页数\x07共 4页\x07\x07\r编制部门 ：生 产 部\r\r编制/修定：陈 远 浩\r\r审 核 人 ：刘 明 明     \r\r批 准 人 ：刘 明 明\r\r涉及部门：\r□总经办  □业务/PMC   □物流部   □设备部   □工程部    □品质部\r□结构事业部      □逆变器事业部   ■电源总装事业部   □微模块事业部\r□人资部   □采购部      □财务部    □新业务开发部\r编制/修定日期：2022-04-11\x07发布日期：2022-04-16\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07更改文件编号、表单编号，版本升级\x07/\x07陈远浩\x072022-04-11\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r   为确保测试盲点可通过测试前后质量控制要点说明，重点目视，工装监控手段进行控制，避免出现市场错混装投诉。\r\r2.0范围\r适用于电源柜总装车间测试工序。\r\r3.0定义\r总测（自动/手动）过程中无法监控的装配同接线点统称为测试盲点。\r\r4.0职责\r4.1工程部\r负责将标杆客户设计提供《线缆错漏反接分析》表转化为内部装配控制要点，制作测试盲点SOP指导文件用于现场测试前后监控，申请防错漏工装制作并绘图下发工艺跟踪完成；\r4.2生产部\r负责按工程提供SOP、工装对测试盲点目视化自检确认，并于总装检验CHECKLIST中签核。\r4.3品质部\r4.3.1负责根据标杆客户设计提供《线缆错漏反接分析》拟定《质量控制要点》、总装检验CHECKLIST并"},{id:"wi:WISC053",doc_code:"WISC053",doc_name:"防静电硬件维护检测规范",rev:"A.1",department:"生产制造部",module:"wi",npi_phase:"EVT",summary:`目的
建立和规范ESD防静电硬件的维护和检测制度，实现对防静电用品进行有效的监控和管理。
 范围
适用于示范厂公司EMS车间所有防静电硬件。
3.0  定义`,citations:[],tags:["ESD"],raw_file:"WISC053防静电硬件维护检测规范A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                               
                                                                                                                                                             
                     
防静电硬件维护检测规范
文件类别
■质量  □环境  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISC053
文件版本
A.1
页数
共 4页
编制部门 ：生 产 部
编制/修定：罗 基 成
审 核 人 ：谢 岳 铭     
批 准 人 ：冯    安      
涉及部门：
□总经办   □业务/PMC     ■物流部     □设备部     □工程部     □品质部
□结构事业部      ■逆变器事业部    ■电源总装事业部       □微模块事业部
□人资部  □采购部     □财务部    □新业务开发部
编制/修定日期：2022-04-11
发布日期：2022-04-16
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.1
更改文件编号、表单编号，版本升级
/
[质量专员]
2022-04-11
    
    
目的
建立和规范ESD防静电硬件的维护和检测制度，实现对防静电用品进行有效的监控和管理。
 范围
适用于示范厂公司EMS车间所有防静电硬件。
3.0  定义
静电：静电就是物体上多余的电荷，它所产生的效应包括带电体之间力的作用和电场。 
电荷：物质是由原子构成，原子是由电子、质子、中子构成。 
静电放电（ESD—Electrostatic Discharge）：带有不同静电电势的物体或表面之间的静电电荷转移，有两种形式：接触放电和电场击穿放电。
ESDS：静电敏感度(ESDS—Electrostatic Discharge Sensitivity)。
ESSD：静电敏感器件(ESSD—Electrostatic Sensitive Devices)。
EPA:ESD Protect Area (ESD防护区域)。
ECA:ESD Control Area (ESD控制区域)。
防静电硬件部分：防静电系统大体分为硬件部分和软件部分。硬件部分包含人体静电防护用品、防静电物流传递用品、防静电地板、防静电操作系统、环境控制系统、特殊防静电用具、静电测量（监控）`},{id:"wi:WISC054",doc_code:"WISC054",doc_name:"喷涂产品补漆操作规范",rev:"A.0",department:"生产制造部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r喷涂产品补漆操作规范\r\r文件类别\x07■质量  □环安  □健康安全  □其他",citations:[],tags:["质量体系","受控规程"],raw_file:"WISC054喷涂产品补漆操作规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r喷涂产品补漆操作规范\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC054\x07\x07文件版本\x07A.0\x07页数\x07共 5页\x07\x07\r编制部门 ：生 产 部\r\r编制/修定：田 旺 峰\r\r审 核 人 ：杨 会 华\r\r批 准 人 ：顾    伟\r\r\r涉及部门：\r□总经办   □业务/PMC     □物流部     □设备部     □工程部     □品质部\r■结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部\r□人资部   □采购部       □财务部    □新业务开发部\r\r编制/修定日期：2022-04-12\x07发布日期：2022-04-16\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07将文件《前处理上挂检验作业指导书》、《前处理上挂操作指导书》、《磷化下挂放置规范》进行合并，同时对文件结构及内容进行优化。\x07/\x07田旺峰\x072022-04-12\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r\f1.0目的\r为了使补漆操作规范化，减少不良品的发生。\r2.0适用范围\r适用于所有喷涂产品的补漆作业。\r3.0定义\r3.1补漆：经过粉末或油漆涂装后，由于工艺条件的局限性，导致工件表面局部涂层缺陷而采取手工涂漆进行修\r补的操作方式\r4.0职责和权限\r4.1 对粉末喷涂不到的的产品进行补漆作业，符合产品的外观要求。\r4.2 限于持有示范厂《喷涂上岗证》的指定人员操作。\r5.0输入\r《标杆客户金属零（组）件的粉末喷涂质量要求》\r6.0输出\r无\r7.0工作流程图\r无\r8.0程序\r8.1修补前准备\r8.1.1喷涂后检查：对喷涂线下挂进行检查"},{id:"wi:WISC055",doc_code:"WISC055",doc_name:"设备分级标准",rev:"A.1",department:"生产部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                        文件封面                                               \r                                                                                                                                                             \r                     \r设备分级标准\r\r文件类",citations:[],tags:["质量体系","受控规程"],raw_file:"WISC055设备分级标准A.1.doc",body_snippet:"  \r\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                        文件封面                                               \r                                                                                                                                                             \r                     \r设备分级标准\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC055\x07\x07文件版本\x07A.1\x07页数\x07共 5页\x07\x07\r编制部门 ：生 产 部\r\r编制/修定：易 兴 海\r\r审 核 人 ：杨 会 华    \r\r批 准 人 ：顾    伟 \r\r涉及部门：\r□总经办   □业务/PMC   □物流部    ■设备部    □工程部   □品质部\r■结构事业部      □逆变器事业部    □电源总装事业部   □微模块事业部\r□人资部   □采购部      □财务部    □新业务开发部\r\r\r编制/修定日期：2022-05-10\x07发布日期：2022-05-16\x07\x07\r\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A1\x071.升级文件编号。2.优化文件封面及履历。3.优化文件格式。\x07/\x07易兴海\x072022-05-10\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r\r\r1.0目的\r区分设备重要性，实现具有针对性的设备保养。\r2.0范围\r适用本公司所有的生产机械设备、动力设备及生产工具。\r3.0定义\r重点设备  （A类）：评分大于或等于80分\v    较重点设备（B类）：评分小于80分\r一般设备  （C类）：评分小于或等于60分\r4.0输入\r无\r5.0输出\r无\r6.0工作程序\r6.1设备分级标准\r\r\r序号\x07构成因素\x07评分\x07评分标准\x07\x07\r1\r\x07\r工作频率小时内\v（24小时内）\x0712\x07连续运转12小时以上\x07\x07\x07\x079\x07连续运转8小时以上\x07\x07\x07\x076\x07连续运转8小时以下\x07\x07\r2\x07\r设备性能\x0712\x07大型、高精度\x07\x07\x07\x079\x07一般精度\x07\x07\x07\x076\x07粗糙\x07\x07\r3\x07\r设备本"},{id:"wi:WISC056",doc_code:"WISC056",doc_name:"钣金产品搬运防护管理规范",rev:"A.1",department:"生产部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \r钣金产品搬运防护管理规范\r\r文件类别\x07■质量  □环境  □健康安全  □其",citations:["QP820"],tags:["IQC"],raw_file:"WISC056钣金产品搬运防护管理规范-A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                               \r                                                                                                                                                             \r                     \r钣金产品搬运防护管理规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC056\x07\x07文件版本\x07A.1\x07页数\x07共 7页\x07\x07\r编制部门 ：生 产 部\r\r编制/修定：陈 红 彬\r\r审 核 人 ：易 兴 海     \r\r批 准 人 ：顾    伟   \r\r涉及部门：\r□总经办   □业务/PMC    □物流部    □设备部    □工程部   □品质部\r■结构事业部      ■逆变器事业部   ■电源总装事业部     ■微模块事业部\r□人资部   □采购部      □财务部    □新业务开发部\r\r编制/修定日期：2022-04-19\x07发布日期：2022-04-22\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.1\x07更改文件编号，版本升级，内容优化\x07/\x07陈红彬\x072022-04-19\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f\r1.0 目的\x07\x07\x07\x07\x07\x07\x07    本规范规定钣金车间各工序生产时的产品防护要求，减少因包装防护及搬运造成的质量问题。\x07\x07\x07\x07\x072.0 范围\x07\x07\x07\x07\x07\x07\x07   适用于钣金车间各工序产品的加工。\x07\x07\x07\x07\x073.0 定义\x07\x07\x07\x07\x07\x07\x07    无\x07\x07\x07\x07\x07\x07\x074.0 职责及权限\r   钣金车间工作人员应根据各工序的防护要求作业，做好检验记录表。\r5.0 输入\x07\x07\x07\x07\x07\x07\x07   客户原图、展开图、工艺流程卡、产品外观检验标准\x07\x07\x07\x07\x07\x076.0 输出\x07\x07\x07\x07\x07\x07\x07   《日工序交接记录表》、《检验日报表》、《品质异常联络单》  \x07\x07\x07\x07\x077.0 工作程序\x07\x07\x07\x07\x07\x07\x07  7.1 数冲下料要求\x07\x07\x07\x07\x07\x07\x077.1.1 加工前确"},{id:"wi:WISC057",doc_code:"WISC057",doc_name:"喷枪电压检测操作规范",rev:"A.0",department:"生产部",module:"wi",npi_phase:"MP",summary:`目的
    确保喷涂事业部各喷枪使用前电压性能为正常状态，有利保障喷涂膜厚的稳定性.
2.0范围
 适用于喷涂事业部各静电喷粉枪的检测 .
3.0定义`,citations:[],tags:["质量体系","受控规程"],raw_file:"WISC057喷枪电压检测操作规范.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                                               
                                                                                                                                                             
                     
喷枪电压检测操作规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISC057
文件版本
A.0
页数
共页
编制部门 ：生产部  
编制/修定：田旺峰 
审 核 人 ：杨会华 
批 准 人 ：刘智雄 
涉及部门：
□总经办   □业务/PMC     □物流     ■设备     ■工程    ■ 品质
□人资     □EMS总装     □华技     □温控     □钣金     □采购
□信息化   □财 务        □新业务
                                                                       
编制/修定日期：2022.09.01                       发布日期：2022.09.08 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
　
　
　
1.0目的
    确保喷涂事业部各喷枪使用前电压性能为正常状态，有利保障喷涂膜厚的稳定性.
2.0范围
 适用于喷涂事业部各静电喷粉枪的检测 .
3.0定义
 喷枪电压：指各喷枪设置最大电流、电压（金马枪匀设置为100/方圆谷枪匀设置为99）；而出粉量、气压匀设置为0的状况下，开启喷枪模式；按下电压测试仪测量按键同时迅速使探测球靠近喷嘴约0-1CM区读取仪器上数值为电压数据.
4.0职责和权限
    职责：纳入各线体在开线前对喷涂各设备点检重要环节；责任于各班组长及喷粉工每日工作范围.
    权限：仅授权于持有喷粉上岗证喷粉工及各班组长检测电压操作. 
5.0 流程图     
                      
向右滑动滑钮打开仪器            装上四节七号电池  .             盖上电池后盖并向左滑                                                                          
电池后盖.     `},{id:"wi:WISC058",doc_code:"WISC058",doc_name:"生产部日常管理规范",rev:"A.0",department:"生产部",module:"wi",npi_phase:"MP",summary:`目的
规范车间的制度、标准和机制，增强车间凝聚力，保证各项工作正常进行，提高员工的满意度和客户的
信赖度,促进品质与效率的提高。
2.0范围
适用于车间现场生产、品质、工程的所有人员。`,citations:["WISC034"],tags:["ESD","BTS"],raw_file:"WISC058 生产部日常管理规范A.2.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
生产部日常管理规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISC058
文件版本
A.2
页数
共25页
编制部门 ：生 产 部
编制/修定：何    广
审 核 人 ：刘    健
批 准 人 ：牛 建 斌
涉及部门：
■总经办   ■业务/PMC     ■物流     ■设备     ■工程     ■品质
■人资     ■EMS总装     ■华技     ■温控     ■钣金     ■采购
■信息化   ■财 务        ■新业务
                                                                       
编制/修定日期：2024-12-13                         发布日期：2024-12-19
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
修订日期
A.0
新版发行
全章节
[质量专员]
2024/3/20
A.1
摄像头视屏保存的期限至少一年
 7.8.1
[质量专员]
2024/5/24
A.2
新增8.21《生产辅料领用表》
新增8.22《装配车间工具归还登记表》
3.新增8.23《装配车间工具领用登记表》
8.21/8.22/8.23
[质量专员]
2024/12/13
　
　
　
1.0目的
规范车间的制度、标准和机制，增强车间凝聚力，保证各项工作正常进行，提高员工的满意度和客户的
信赖度,促进品质与效率的提高。
2.0范围
适用于车间现场生产、品质、工程的所有人员。
3.0定义
 3.1现场管理：科学的标准和方法对生产现场各生产要素，进行合理有效的计划、组织、协调、控制和
监测，使其处于良好的结合状态，以达到优质、高效、低耗、均衡、安全、文明生产的目的。
 3.2生产要素：人（工人和管理人员）、机（设备、工具、工装）、料（原材料）、法（SOP、文件、规范、
加工检测方法）、环（ESD、温湿度、洁净度、照明、噪声、消防通风等）、测（测试设备、检测仪器、`},{id:"wi:WISC059",doc_code:"WISC059",doc_name:"生产部KPI管理规范",rev:"A.0",department:"生产部",module:"wi",npi_phase:"MP",summary:`目的  
1.1通过KPI关键绩效指标的制定来推动公司战略在各单位的执行。
1.2 通过KPI关键绩效指标确保各层级对工作职责有清晰认知，确保各层级人员努力方向一致。
1.3 通过KPI关键绩效指标定期计算和回顾，清晰了解经营的关键绩效参数，及时诊断存在的问题并采取行动加以改善。`,citations:["WIPZ004"],tags:["质量体系","受控规程"],raw_file:"WISC059 生产部KPI管理规范A.0.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
生产部KPI管理规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISC059
文件版本
A.0
页数
共7页
编制部门 ： 生 产 部
编制/修定： 金 军 学
审 核 人 ： 冯    安
批 准 人 ： 王 志 伟
涉及部门：
■总经办   □业务/PMC     □物流     □设备     □工程     □品质
□人资     ■EMS总装     □华技     □温控     □钣金     □采购
□信息化   ■财 务        □新业务
                                                                       
编制/修定日期：2023-11-16                       发布日期： 2023-11-23
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新发行
/
[质量专员]
2023-11-20
　
　
　
1.0目的  
1.1通过KPI关键绩效指标的制定来推动公司战略在各单位的执行。
1.2 通过KPI关键绩效指标确保各层级对工作职责有清晰认知，确保各层级人员努力方向一致。
1.3 通过KPI关键绩效指标定期计算和回顾，清晰了解经营的关键绩效参数，及时诊断存在的问题并采取行动加以改善。
1.4透过绩效管理贯彻公司总体营运策略，达成目标，活化组织，使目标一致.由公平、公正和量化的绩效考核奖优汰劣，进而提升组织活力、竞争优势及获利能力，使公司永续经营。
2.0范围    包括员工、组长、领班、工程师、主管、经理为考核主体，如逆变器包括生产部、品质部、工程部所有人员
3.0定义
3.1绩效管理：是以目标为导向，将企业将要达成的战略目标层层分解，通过对员工的工作表现和工作业绩进行考核和分析，改善员工在组织工作中的行为，充分发挥员工的潜能和积极性，更好地实现企业的各项目标的程序和方法。
3.2 绩效管理活动由四部分组成：绩效计划、绩效考评、`},{id:"wi:WISC060",doc_code:"WISC060",doc_name:"焊接零件不良维修作业规范",rev:"A.0",department:"生产部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r焊接零件维修作业规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其",citations:[],tags:["质量体系","受控规程"],raw_file:"WISC060焊接零件不良维修作业规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r焊接零件维修作业规范\r\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC060\x07\x07文件版本\x07A.0\x07页数\x07共5页\x07\x07\r编制部门 ：生 产 部\r\r编制/修定：李    晴\r\r审 核 人 ：王 昆 鹏\r\r批 准 人 ：李    锋\r\r涉及部门：\r□总经办   □业务/PMC部   □物流部   □设备部    □工程部    □品质部\r■结构事业部      ■逆变器事业部       ■电源总装事业部     □微模块事业部\r□人资部   □采购部       □财务部   □新业务开发部\r                                                                           \r编制/修定日期：2023-11-25                         发布日期：2023-12-06\r\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.0\x07新制定；增加各类维修的责任部门\x07/\x07[质量专员]\x072023-12-06\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r1.0目的\r规范焊接零件维修物料的管控，保证产品维修后能够得到控制。\r2.0范围\r适用于本公司所有焊接车间\r3.0定义\r无\r4.0 职责及权限\r工作人员应按照作业指导规范来操作，保证产品维修后能够得到控制。\r5.0输入\r《产品返修作业指导规范》、《焊接零件检验指导书》\r6.0输出\r   焊接零件检验记录表\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r7.0工作程序\r7.1 作业流程：\r\b\r\r\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\r\r\r\r\r\r\r\b\r     "},{id:"wi:WISC061",doc_code:"WISC061",doc_name:"逆变器生产过程管理规范",rev:"A.0",department:"生产部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                                                                                                                                                                              \r                     \r逆变器生产过程管理规范              \r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等",citations:[],tags:["BTS"],raw_file:"WISC061逆变器生产过程管理规范A.0.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                                                                                                                                                                              \r                     \r逆变器生产过程管理规范              \r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WISC061\x07\x07文件版本\x07A.0\x07页数\x07共5页\x07\x07\r编制部门 ：生 产 部\r\r编制/修定：金 军 学\r\r审 核 人 ：冯    安\r\r批 准 人 ：王 志 伟\r\r涉及部门：\r(总经办   (业务/PMC     (物流部     (设备部     (工程部     (品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部\r(人资部   (采购部       (财务部    (新业务开发部\r\r                                                                       \r编制/修定日期：2024-1-3                 发布日期：2024-1-9\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07增加EMS总装要求和PEBS BTS操作说明\x07全部\x07[质量专员]\x072024-1-4\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0  目的\r1.1规范生产过程中注意事项\r1.2标准化生产过程各个节点，明确各节点要求。\r2.0范围\r  适用所有逆变器从原材料配送直到入库的整个生产过程。\r3.0定义\r  无\r4.0职责\r4.1 业务：根据产出进度，在客户系统内上预约送货单，发出货通知，监控客户需求的达成。\r4.2 PMC部：负责生产日、周排产，控制外购 外协 前工序来料、CS来料等的入料进度，确保产线正常生产和交付；排产变更需要沟通前后制程生产、品质、工程、业务、采购等部"},{id:"wi:WISC062",doc_code:"WISC062",doc_name:"提案改善流程规范",rev:"A.3",department:"生产部",module:"wi",npi_phase:"DVT",summary:"智造示范工厂科技有限公司  Smart Mfg Demo Factory Co., Ltd.                                 文件封面                                                                                                                                                                                                                     提案改善流程规范 文件类别 ■质量  □环安   □其他  □QEH体系 文",citations:["NBQ202"],tags:["NPI"],raw_file:"WISC062  提案改善流程规范A.3.docx",body_snippet:`智造示范工厂科技有限公司
 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
提案改善流程规范
文件类别
■质量  □环安   □其他  □QEH体系
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WISC062
文件版本
A.3
页数
共8页
编制部门 ： 生 产 部
编制/修定： 冯    安
审 核 人 ： 王 志 伟
批 准 人 ： 王 志 伟  
涉及部门：
■总经办   ■品质部    □财务部       □PMC 部       □工艺准备部   
□工程部   □采购部    □物流部       □业务部       □企业管理部
■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   
■微模块事业部      ■新业务事业部     ■结构事业部     ■NPI工厂
                                                                       
编制/修定日期：2025-06-11                         发布日期：2025-06-18
文件修订履历管理
版本/
版次
更改内容摘要
更改
章节号
优化人
实施
日期
A.0
新规发行
/
[质量专员]
2024/09/13
A.1
优化第8章节激励方案、激励细则、增加班组红、黄旗激励，增加五星班组评选激励规则。
8.0
[质量专员]
2024/12/24
A.2
8.6章优化激励方案，增加拒检问题拦截激励。
8.6
[质量专员]
2025/03/14
A.3
增加举手反馈规定和运作机制，将电源举手反馈文化文件替代升版为提案改善流程规范
ALL
[质量专员]
2025/06/11
　
　
1.0目的 
1.1推行全员参与提案改善制度，形成一个团结协作 、不断改善、积极向上的企业文化氛围
1.2形成了提案改善、QCC、自主研、六西格玛等多样化的改善形式
2.0适用范围 
全体员工、工程师及管理
3.0定义 
3.1提案，是合理化建议的成果，是一项行动的方案 
3.2改善，为追求更快、更好、更加简洁地达成工作目标，通过“手段选择”或“方法变更”把事`},{id:"wi:WIWL001",doc_code:"WIWL001",doc_name:"仓库管理规范",rev:"A.4",department:"物流部",module:"wi",npi_phase:"MP",summary:`目的
为建立、健全公司的库存物料管理制度，实现库存管理制度化、规范化、标准化，推动公司库存物料管理水平的提高，不断完善库存物料控制制度，特制定本规范。
2.0适用范围
适用于本公司所有经仓库进出控制管理的物料
3.0定义；适用范围
适用于本公司所有经仓库进出控制管理的物料
3.0定义
物料
广义；包括与产品生产有关的所有物品，如原材料，辅助用品，半成品，成品等`,citations:["MM224","QP820","MM313","YY010","WIRZ027","MM377","WISB017","MM611"],tags:["HWMS/WOS"],raw_file:"WIWL001 仓库管理规范A.5.docx",body_snippet:`2485原则
找到31篇相关资料，8篇重点参考
WIWL002直提直发业务作业规范A.4.doc
8.18.5木箱防雨要求：正常情况下是将防雨袋打开后置于木箱内，再将货物放入防雨袋中并摆放好，袋口折叠后用胶带封住，置于木箱上部或开口向下紧贴木箱侧面（物料本体有套PE 袋的，装入木箱、加强纸箱、纸箱发货时，此时无需执行防雨包装）8.18.6其它所有订单备注，参考标杆客户专用指导书文件要求的执行，执行过程中任何疑问及时向标杆客户整机工艺确认，不得出订单备注现漏执行、错执行，避免造成客诉质量问题。8.19封闭式集合箱填充要求8.19.1大箱为木箱、加强纸箱+托盘、纸箱时，实装率需≥75%（空运订单需≥85%）。无合适标准箱时，木箱同批次＜5 个的，则实装率≥50%即可，否则需要定制非标木箱。8.19.2物料在箱内居中或者两侧摆放（禁止物料全部偏向一侧，避免箱子重心偏移发生倒货），按要求摆放后箱内物料与箱内壁间隙≥25mm 时，需进行填充（可用空箱、充气袋、缓冲泡棉、蜂窝板等环保材料填充），参考如下示意图8.20粘贴唛头和箱单8.20.1货物在装载发运前，每件需粘贴标杆客户发货标签（如：唛头、箱单、客户化标签等），唛头/箱单标签在WOS系统打印粘贴。8.20.2唛头打印粘贴对应发货货物上，核实标签粘贴无误后加盖骑缝章。8.20.3发货标签打印必须采用印刷字符，字迹清楚，条形码要清晰可见, 纸面无污渍及无损坏现象。8.20.4标签粘贴需清洁手指、手掌，尽量采用水平粘贴方式；需撕除不干胶背胶底纸，粘贴后按压标签，使标签带背胶面紧粘包装件表面，对包装材料为木质材料发货货物，需用钉枪对标签对角打2颗钉或4颗钉固定。部分客户需要易撕标签，使用WOS手工打印唛头时，有提示易撕标签时使用易撕标签，使用易撕标签（编码：29100113，图号29100113_DRAEN），撕掉背胶粘贴在对应包装箱上，如包装箱为木质包装箱，易撕标签需在标签对角打2颗钉。8.20.5易撕标签材料为双层底纸结构，面板为铜版纸，第二层为PET透明膜，区分普通唛头标签可以切一个角。8.20.6易撕标签执行（EMS 理货模式）：扫描 SPU 标签打印唛头的方式，理货侧 SPU 标签使用易撕标签，发货侧识别理货 SPU 为易撕标签，发货唛头默认使用易撕标签，唛头打印更换易撕标签纸；手工打印或补打唛头的方式，根据系统显示易撕标签和提示（含易撕标签箱子），使用易撕标签，唛头打印更换易撕标签纸；8.20.7直提模式：只能手工打印预览或下载打印，根据系统显示易撕标签及提示含易撕标签箱子，使用易撕标签，唛头打印更换易撕标签纸。8.20.8粘贴后的标签表面要平整，其边线要求与包装件边线对应平行，四角不得翘起、中部不得鼓包。8.20.9一个发货单元货物对应一份装箱单,装箱单在粘贴前，需先将箱单对拆叠成A5，再放置于带有背胶的胶袋里，然后将`},{id:"wi:WIWL002",doc_code:"WIWL002",doc_name:"直提直发业务作业规范",rev:"A.4",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                  文件封面                                   \r                                                                                                                                                             \r                     \r\r\r直提直发业务作业规范\r\r文件类别\x07■质量  □环安  □健康",citations:["DKBA335","GB141","DKBA341","DKBA233","DKBA789","XHCU501"],tags:["ESD"],raw_file:"WIWL002直提直发业务作业规范A.4.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                  文件封面                                   \r                                                                                                                                                             \r                     \r\r\r直提直发业务作业规范\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL002\x07\x07文件版本\x07A.4\x07页数\x07共 42页\x07\x07\r编制部门 ： 物流部 \r\r编制/修定： [质量专员]\r\r审 核 人 ： [质量专员]\r\r批 准 人 ： 刘智雄\r\r\r\r涉及部门：\r□总经办     □业务/PMC   ■物流部   □设备部    □工程部    ■品质部\r□结构事业部     □逆变器事业部       □电源总装事业部   □微模块事业部\r□人资部     □采购部    □财务部   □新业务开发部\r\r                                                                               \r编制/修定日期：2025-03-20                    发布日期： 2025-03-20\f\r文件修订履历管理\x07\x07版本/\v版次\x07更改内容摘要\x07更改\v章节号\x07优化人\x07实施\v日期\x07\x07A.0\x07新增文A.0件\x07/\x07[质量专员]\x072020-11-30\x07\x07A.1\x07升级\x07/\x07[质量专员]\x072021-05-10\x07\x07A.2\x07升级\x07/\x07[质量专员]\x072022-08-04\x07\x07A.3\x07完善文件格式，增加\v8.1.2/8.10.2/8.10.5/8.10.6/8.12.15 章节内容\x07/\x07[质量专员]\x072022-10-13\x07\x07A.4\x07文件升级\x07/\x07[质量专员]\x072025-03-20\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07　\x07\x07\x07\x07\x07\f1.0目的\r随标杆客户制造业务扩大，为减少相关原包装物料或产品送货标杆客户南方工厂进行收货、检料、理货等交付的不增值活动，特规范直提直发供应商、总装厂、EMS按照标杆客户正式出货客户包装、装车要求，以保证货物能安全、完整交付到标杆客户客户。\r2"},{id:"wi:WIWL003",doc_code:"WIWL003",doc_name:"周转栈板管理规范",rev:"A.1",department:"物流部",module:"wi",npi_phase:"EVT",summary:`目的
规范公司周转工具到货、使用、回收和报废作业，减少周转工具在物流周转过程中损耗与浪费，提高周转工
具使用效率。
2.0 范围
适用于本公司所有经仓库进出控制管理的周转工具。`,citations:[],tags:["质量体系","受控规程"],raw_file:"WIWL003物流部周转工具管理规范.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                   
                                                                                                                                                             
                     
物流部周转工具管理规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIWL003
文件版本
A.1
页数
共 12页
编制部门 ：物流部
编制/修定：谭  俊
审 核 人 ：[质量专员]
批 准 人 ：刘智雄
涉及部门：
□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部
■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部
□人资部   □采购部       □财务部    □新业务开发部
编制/修定日期：2025-01-16
发布日期：2025-01-23
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
新增文件
/
[质量专员]
2024-08-30
A.1
新增栈板管理要求
[质量专员]
2025-01-16
1.0 目的
规范公司周转工具到货、使用、回收和报废作业，减少周转工具在物流周转过程中损耗与浪费，提高周转工
具使用效率。
2.0 范围
适用于本公司所有经仓库进出控制管理的周转工具。
3.0 定义
本规范描述了周转工具的申购、接收、检验、报废、归还及核销等相关操作要求，指导各业务部门按规则进行使用和管理。
4.0 职责和权限
4.1 周转工具管理的总体原则 
4.1.1 满足交付需求的同时兼顾成本的原则。 
4.1.2 谁使用、谁负责：业务部门负责所使用和存留栈板的日常使用、回流、利旧、投递、盘点、报废等，符合高效低成本周转要求。 
4.1.3 简化管理与精细管理相结合：聚焦 3 款主流栈板(30020313、30020417、30020358)， 对 3 款主流栈板建立精细化管理要求，其他类型栈板简化管理。当前主流的三款周转栈板会逐步归一为二款（30020313、30020358），故除理货环节因订单发货需求或产品来料指定托盘型号外，其余各环节需停止 30020417 栈板的申购。 
4.1.4 定期对账、定期清点：业务部门按照规范要求执行月度对账，半年度清点`},{id:"wi:WIWL004",doc_code:"WIWL004",doc_name:"锂电池储存、生产安全规范",rev:"A.1",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r锂电池存储、生产安全规范\r\r\r文件类别\x07■质量  ■环安  ■健康安全",citations:[],tags:["FMEA"],raw_file:"WIWL004 锂电池储存、生产安全规范A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r锂电池存储、生产安全规范\r\r\r文件类别\x07■质量  ■环安  ■健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL004\x07\x07文件版本\x07A.1\x07页数\x07共 11页\x07\x07\r编制部门 ：物 流 部\r\r编制/修定：谭    俊\r\r审 核 人 ：谭 明 前\r\r批 准 人 ：刘 智 雄\r\r涉及部门：\r□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部\r■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部\r□人资部   □采购部       □财务部    ■新业务开发部\r\r编制/修定日期：2024-07-24\x07发布日期：2024-07-25\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.0\x07新版文件发布\x07/\x07[质量专员]\x072023-10-15\x07\x07A.1\x07优化3.1周转章节：增加中转运输要求和红线\x07\x07[质量专员]\x072024-07-24\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f 一、范围：\r本规范适用于仓库、车间锂离子电池产品的存储仓库、物流运输和安装等场景的安全保障技术要求。\r二、目的：\r主要目的是防范锂离子电池产品因制造、存储和运输过程不当引入的安全风险，保障锂电产品的整个生产生命周期的安全，故输出此生产安全技术规范。\r1、电池PACK风险分析及失效模式\r电池PACK起火或爆炸的机理复杂，往往一种因素引起是多种反应共同起作用，在电芯内产生高温、高压，最后导致起火或爆炸。其主要失效机理如下：\r失效类型\x07失效模型\x07失效场景 \x07\x07机械损伤\x07设计、制程等缺陷造成电芯外部被刺破、挤压形变的结构损伤、漏液。\x07电芯与夹具间造成碰撞；"},{id:"wi:WIWL005",doc_code:"WIWL005",doc_name:"物流部发货流程",rev:"A.3",department:"物流部",module:"wi",npi_phase:"EVT",summary:`目的
 确保公司产品送往海外、国内客户处均能快速、安全、准确交付以及退货、周转物料回收、领料的规范化。
2.0范围
适用于示范厂仓库送货组所有成员及PMC部、品质部、生产部具体操作负责人。
3.0定义`,citations:["QP750","WI750","QP550"],tags:["质量体系","受控规程"],raw_file:"WIWL005 物流部发货流程.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                               文件封面                                 
                                                                                                                                                             
                     
          物流部发货流程
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIWL005
文件版本
A.3
页数
共8页
编制部门 ：物流部  
编制/修定：谭  俊 
审 核 人 ：[质量专员]
批 准 人 ：刘智雄 
涉及部门：
□总经办   ■业务/PMC    ■物流部    □设备部   □工程部    ■品质部
□结构事业部    □逆变器事业部   □电源总装事业部   □微模块事业部
□人资部      □采购部     □财务部     □新业务开发部
                                                                       
编制/修定日期：2021-05-05                         发布日期：2021-05-10 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.2
修改新增章节7.0 工作流程“ASN”标签扫描打印送货单模块。
7.0
[质量专员]
2019-08-19
A.2
修改8.0章节领料工作流程。
8.0
[质量专员]
2019-08-19
A.3
修改新增7.0章节工作流程，002/5.ISC系统打印送货单。
7.0
[质量专员]
2021-05-10
　
　
　
1.0目的
 确保公司产品送往海外、国内客户处均能快速、安全、准确交付以及退货、周转物料回收、领料的规范化。
2.0范围
适用于示范厂仓库送货组所有成员及PMC部、品质部、生产部具体操作负责人。
3.0定义
     3.1直发：
  3.1.1 由客户直接提供提货信息资料，安排运输车辆到厂提货的方式。
4.0输入
 4.1邮件出货通知。
5.0输出
5.1《工作联络单》
5.2《手动叉车保养点检表》
5.3《送货单》
5.4《直发送货单》
5.5《发货通知单》
5.6《直提出货点检表》
5.7《成品出货专用放行条》
5.8《外检物料供应商送货附件清单》
5.9《东莞示范厂出货运输点检表`},{id:"wi:WIWL006",doc_code:"WIWL006",doc_name:"物料扫描及配送操作规范",rev:"A.1",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                             \r                                                                                                                                                             \r                     \r物料扫描及配送操作规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等",citations:["WI750","QP750","QP830","WI730"],tags:["质量体系","受控规程"],raw_file:"WIWL006 物料扫描及配送操作规范A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                             \r                                                                                                                                                             \r                     \r物料扫描及配送操作规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL006\x07\x07文件版本\x07A.1\x07页数\x07共 10页\x07\x07\r编制部门 ：物 流 部\r\r编制/修定：魏 桂 云\r\r审 核 人 ：郭 亚 雄    \r\r批 准 人 ：刘 智 雄\r\r涉及部门：\r□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部\r□结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部\r□人资部   ■采购部       □财务部   □新业务开发部\r\r\r编制/修定日期：2021-05-15\x07发布日期：2021-05-15\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07文件升级\x07\x07[质量专员]\x072021-05-18\x07\x07\x07\x07\x07\x07\x07\x07\x07 \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的\r1.1实现“三不”，按工位进行时段配送，提高生产效率。\r1.2为满足ISC（集成供应链）管理的要求，具备ISO系列标准在产品质量可追溯能力方面的要求，保证产品质量信息的前追后溯.\r2.0 范围\r2.1适用于物流部物料配送工作。\r2.2适用于物流部原材料进出条码追溯扫描。\r3.0 定义\r3.1.1不断料：任何时候以生产实际情况出发，优先保证其能正常生产，不出现断料情况。\r3.1.2不呆料：产线不允许有非在制机型使用外的物料，及时清出并处理。\r3.1.3不囤料：产线物料不允许过多，根据产线实际产值能力进行定时定量配送，提升产线现场管理\r3.1.4 时段配送：单位时间（2H）配送一次。\r3.1.5 TestServer.exe"},{id:"wi:WIWL007",doc_code:"WIWL007",doc_name:"仓库工具管理规范",rev:"A.3",department:"物流部",module:"wi",npi_phase:"EVT",summary:`目的
正确使用和保养仓库各类工具
2.0
范围
适用于仓库所有现场工具使用人员。`,citations:["AC220"],tags:["ESD"],raw_file:"WIWL007 仓库工具管理规范A.3.docx",body_snippet:`智造示范工厂科技有限公司
Smart Mfg Demo Factory Co., Ltd.
仓库工具管理规范
文件类别
■质量□环安□健康安全□其他
文件等级
□一级文件□二级文件■三级文件
文件编号
WIWL007
文件版本
A.3
页数
共 7页
编制部门 ：物 流 部编制/修定：黎 晓 刚审 核 人 ：谭 明 前
批 准 人 ：刘 智 雄
涉及部门：
□总经办□业务/PMC■物流部□设备部□工程部■品质部
□结构事业部□逆变器事业部□电源总装事业部□微模块事业部
□人资部  ■采购部  □财务部  □新业务开发部
编制/修定日期：2024-09-06发布日期：2024-09-13密级：内部文件
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
实施日期
A.1
文件升级
/
[质量专员]
2021-05-18
A.2
增加周转箱相关规定
6.2.9
6.2.10
[质量专员]
2024-08-23
A.3
重新归档为物流部
/
[质量专员]
2024-09-06
1.0
目的
正确使用和保养仓库各类工具
2.0
范围
适用于仓库所有现场工具使用人员。
3.0
定义
3.1
工具：
3.1.1 指仓库现经常使用且能提高仓库工作效率的设备
4.0
输入
4.1 供应商送货工具使用说明书
5.0
输出
5.1《手推电升叉车保养查检表》
5.2《电动叉车日常保养点检表》
5.3《除湿机点检记录表》
5.4《手动叉车保养点检表》
5.5《物料周转车保养点检表》
6.0
工作程序
6.1 手推电升叉车作业流程
6.1.1 使用操作时，控制升降手柄将货叉上升或下降，控制手柄向前推货叉上升， 向后拉则货叉下降。在重
货
物下降时，应将控制手柄缓慢向后拉，以免货物下降速度过快造成惯性冲击，容易发生意外及损坏 车柄。
左侧边有 AC220V 充电用接口端，充电时红色指示灯亮即表示充电正常，充电时只需将随机的电源线一端插在充电器上，另一端至电源上，开始对电池充电。
电池不可以馈电使用，即电瓶电压指示表指针在低于刻度 10 就应及时充电， 以免损坏电池，缩短电池使用寿命。
电池须在充足电后方可使用，否则长期充电不足会导致电池内硫酸盐化而报废。
电池使用一段时间后，应经常检查电池水是否足够（7 天或 15 天必须检查一次，根据使用频率而定）， 当电池水不足时应及时补充适当的电瓶水，在一般情况下加蒸馏水即可，常保持电池水在正常水平能 延长电池使用寿命。
工作人员不准站在货叉的上面或下面进行工作，在操作物体升降时，应使用手动操作杆缓慢下降，以 免下降速度过快产生冲击性惯性而损伤或损坏机器零部件。
当叉货时顺移位，其货叉要下降离地 5-10 公分，方可推行或移动，以免危险。 如长期不使用，须 7 天充电一次， 以保电瓶寿命。不允许超载运行、高速急转弯， 在行`},{id:"wi:WIWL008",doc_code:"WIWL008",doc_name:"仓库化学危险品管理规范",rev:"A.2",department:"物流部",module:"wi",npi_phase:"PVT",summary:`目的
为了规范化学危险品的使用与贮存，以防止泄漏以及火灾的发生而影响环境、伤害人体,将危险化学品可能引起
的环境风险降到最低,达到消除危害、安全生产的目的，特制定本规范。
2.0 范围
2.1 本文件适用于仓库所有储存的危险化学品的管理。`,citations:["WIGC079","GB138","WI750"],tags:["NPI","7S与安全"],raw_file:"WIWL008 仓库化学危险品管理规范A.3.docx",body_snippet:` 
智造示范工厂科技有限公司
Smart Mfg Demo Factory Co., Ltd.
仓库化学危险品管理规范
文件类别 ■质量 □环安 □健康安全 □其他
文件等级 □一级文件 □二级文件 ■三级文件
文件编号
文件版本
WIWL008
页数
A.3
共 6 页
编制部门 ：物 流 部
编制/修定：魏 桂 云
审 核 人 ：郭 亚 雄
批 准 人 ：刘 智 雄
涉及部门：
总经办   ■品质部    财务部   PMC 部    工艺准备部   
工程部   ■采购部    ■物流部   业务部    人力资源部
电源总装事业部     逆变器事业部    喷涂事业部    储能事业部 
■微模块事业部      新业务事业部     结构事业部    NPI工厂
编制/修定日期：2025-01-09
发布日期：2025-01-13
密级：内部文件
 
智造示范工厂科技有限公司
文件编号：WIWL008
版本：A.3
编制部门：物流部
仓库化学危险品管理规范
修订日期：2025-01-09
页数：第 2 页 共 6 页
文件修订履历管理
版本/次
更改内容摘要
更改章节号 优化人
实施日期
A.2
A.3
文件升级
/
[质量专员]    2025-01-09
增加涉及部门（微模块事业部）
[质量专员] 2024-09-04
文件密级：内部公开
 
智造示范工厂科技有限公司
文件编号：WIWL008
版本：A.2
编制部门：物流部
仓库化学危险品管理规范
修订日期：2024-09-04
页数：第 3 页 共 6 页
1.0 目的
为了规范化学危险品的使用与贮存，以防止泄漏以及火灾的发生而影响环境、伤害人体,将危险化学品可能引起
的环境风险降到最低,达到消除危害、安全生产的目的，特制定本规范。
2.0 范围
2.1 本文件适用于仓库所有储存的危险化学品的管理。
2.2 危险化学品分类危险化学品：本规范所指危险化学品是指按国家标准 GB13890 分类的常用危险化学品：爆炸
品压缩气体和液化气体易燃液体易燃固体、自燃物品和遇湿易燃物品氧化剂和有机过氧化物有毒品放射性物品腐蚀
品一般化学品：危险化学品之外的各类化学单质、化合物或混合物.
3.0 定义 MSDS：
化学品安全技术说明书
4.0 输入
4.1《MSDS 管制表》
5.0 输出
5.1《温湿度记录表》.
5.2《化学危化品安全管理点检表》
6.0 工作流程图
无
7.0 工作程序
7.1 本公司所使用的危险物品一般为易燃易爆物品，其储存、使用须依规定进行作业。
7.2易燃易爆物品在收货时均由收料仓管查看外观，供应商所送的物品上必须标示“易燃易爆、安全提示”等
醒目标示，并检查有无详细的生产日期、合格证明、安全提示、使用说明书及符合要求的 MSDS。收料发料详细作业严格按照仓`},{id:"wi:WIWL009",doc_code:"WIWL009",doc_name:"仓库编码说明书规范",rev:"A.1",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                             \r                                                                                                                                                             \r                     \r仓库编码说明书规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07",citations:[],tags:["质量体系","受控规程"],raw_file:"WIWL009 仓库编码说明书规范A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                             \r                                                                                                                                                             \r                     \r仓库编码说明书规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL009\x07\x07文件版本\x07A.1\x07页数\x07共 5页\x07\x07\r编制部门 ：物 流 部\r\r编制/修定：魏 桂 云\r\r审 核 人 ：郭 亚 雄    \r\r批 准 人 ：刘 智 雄\r\r涉及部门：\r□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部\r□结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部\r□人资部   ■采购部       □财务部   □新业务开发部\r\r\r编制/修定日期：2021-05-20\r\x07发布日期：2021-05-21\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07文件升级\x07\x07[质量专员]\x072021-05-20\x07\x07\x07\x07\x07\x07\x07\x07\x07 \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r为了更好的管理仓库，使仓库物料能够有序的得到存放，并使仓库人员更好的方便作业。\r2.0范围\r原材料所有仓区。\r3.0定义\r3.1原材料所有仓区包含：一楼、二楼、三缕、四楼所有摆放公司原材料仓库区域。\r4.0输入\r仓库内仓区、仓位规范标识要求。\r5.0输出\r《仓位编码说明书》\r6.0工作程\r6.1仓位编号规则：仓位由七位数字组成，各位数字所代表的意义为；\r\r6.2 仓区分为 ：\rA 为二楼原材料仓区；\rB 为一楼原材料仓区；\rC 为三楼原材料仓区；\rD 为四楼 EMS 仓区；\r6.3 物料区分为 ：\r6.3.1 一楼板材仓 A 、B 区；\r  \r6.3.2 二楼原材料仓 A 、B 、C 、D 、E 、F 、G 区；\r\r6."},{id:"wi:WIWL010",doc_code:"WIWL010",doc_name:"客供物料存储环境及有效期管理规范",rev:"A.2",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                              \r                                                                                                                                                             \r                     \r客供物料存储环境及有效期管理规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其",citations:["DKBA116"],tags:["质量体系","受控规程"],raw_file:"WIWL010 客供物料存储环境及有效期管理规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                              \r                                                                                                                                                             \r                     \r客供物料存储环境及有效期管理规范\r\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL010\x07\x07文件版本\x07A.2\x07页数\x07共 8页\x07\x07\r编制部门 ：物 流 部\r\r编制/修定：魏 桂 云\r\r审 核 人 ：谭 明 前    \r\r批 准 人 ：刘 智 雄\r\r涉及部门：\r□总经办   ■业务/PMC     ■物流部     □设备部     □工程部     ■品质部\r□结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部\r□人资部   ■采购部       □财务部   □新业务开发部\r\r\r编制/修定日期：2024-07-05\r\x07发布日期：2024-07-12\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07文件升级\x07/\x07[质量专员]\x072021-05-20\x07\x07A.2\x07重新定义部分物料的存储有效期/最大存储有效期；\r增加预超期及超期物料工作流程图以及流程说明\x073.0/8.0\x07[质量专员]\x072024-07-05\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0 目的\r规范和指导客供物料的存储管理 ，减少因存储条件不符要求 、管理不善等因素而导致物料损伤 ，提升公司产品可靠性 。\r2.0 范围\r本规范适用于各环节客供物料的存储管理要求 。\r3.0 定义\r3.1有效储存管理\r3.1.1、有效/最大存储期定义及要求：\ra.有效存储期：是指以物料制造日期算起到物料可以直接使用的存储期限 ，根据物料的不同类别其有效存 储期存在差异 ，此有效存储期包括供应商和仓储的存储时间之和 ，当物料制造日期以内外包装箱上所标识的DATE CODE或LOT NO中"},{id:"wi:WIWL011",doc_code:"WIWL011",doc_name:"HWMS系统操作指导书",rev:"A.1",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                               \r                                                                                                                                                             \r                     \rHWMS 系统操作指导书\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文",citations:[],tags:["IQC","HWMS/WOS"],raw_file:"WIWL011 HWMS系统操作指导书.doc",body_snippet:'\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                               \r                                                                                                                                                             \r                     \rHWMS 系统操作指导书\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL011\x07\x07文件版本\x07A.1\x07页数\x07共 13页\x07\x07\r编制部门 ：物 流 部\r\r编制/修定：皮 春 生\r\r审 核 人 ：吴 小 江\r\r批 准 人 ：刘 智 雄\r\r涉及部门：\r□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部\r□结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部\r□人资部  □采购部       □财务部    □新业务开发部\r\r\r编制/修定日期：2021-05-08\x07发布日期：2021-05-12\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07文件升级\x07\x07[质量专员]\x072021-05-12\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r\f1.0目的\r  指导和规范HWMS系统操作作业。\r2.0适用范围\r  HWMS收货作业、系统入库、在库管理、拣料、盘点说明。\r3.0定义\r\r4.0责任\r\r5.0输入\r\r6.0输出\r\r7.0工作流程图\r\r8.0程序\r  8.1 HWMS 系统账号申请、延期、RF 账号申请、安装等。\r    8.1.1.HWMS 系统链接： HYPERLINK "https://portal.demo.local/" https://portal.demo.local/'},{id:"wi:WIWL012",doc_code:"WIWL012",doc_name:"WOS系统发货操作指导书",rev:"A.2",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\r Smart Mfg Demo Factory Co., Ltd.\r                                                                                                                                                                                                                                  \r  \rWOS系统发货操作指导书\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级",citations:["HZHN002","HMFG126","HZHN000"],tags:["HWMS/WOS"],raw_file:"WIWL012 WOS 系统发货操作指导书A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\r Smart Mfg Demo Factory Co., Ltd.\r                                                                                                                                                                                                                                  \r  \rWOS系统发货操作指导书\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL012\x07\x07文件版本\x07A.2\x07页数\x07共 44页\x07\x07\r编制部门 ： 物流部 \r\r编制/修定： [质量专员]\r\r审 核 人 ： [质量专员]\r\r批 准 人 ： 刘智雄\r\r\r\r涉及部门：\r□总经办     □业务/PMC   ■物流部   □设备部    □工程部    ■品质部\r□结构事业部     □逆变器事业部       □电源总装事业部   □微模块事业部\r□人资部     □采购部    □财务部   □新业务开发部\r\r                                                                               \r编制/修定日期：2025-03-20                   发布日期： 2025-03-20\r\f\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.0\x07新增文件\x07/\x07[质量专员]\x072020-11-30\x07\x07A.1\x07升级\x07/\x07 [质量专员]\x072021-05-10\x07\x07A.2\x07文件升级\x07/\x07  [质量专员]\x072025-03-20\x07\x07\x07\x07\x07 \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r\r\r\r1 定义\r本指导书介绍了WOS系统的账号和权限申请、系统安装、系统的操作动作的介绍，以及领取发货任务、唛头箱单打印、货物扫描出操作方式进行介绍，以便指导操作人员在系统中实际操作。 \r2 目的\r指导熟悉在发货系统框架下进行业务操作步骤，并在系统中完成各类运输类型的货物出库扫描发货。 \r3 适用范围\r物料配送发货管理、深圳供应中心、天线制造部以及涉及发货的直提/EMS供应商 \r4 操作指引\r4.1 相"},{id:"wi:WIWL013",doc_code:"WIWL013",doc_name:"物流仓储管理规范",rev:"A.0",department:"物流部",module:"wi",npi_phase:"MP",summary:`目的
为规范成品仓储进、出、存作业程序，加强对成品仓储的管理。满足客户的发货要求。保证发货的及时性、正确性，确保公司发货流程有效、顺畅的进行，实现库存管理制度化、规范化、标准化，提高仓储管理水平；特制定本规范。
2.0 范围
适用于本公司所有仓库进出控制管理的成品。
3.0 定义`,citations:["QP830","QP820"],tags:["IQC"],raw_file:"WIWL013物流仓储管理规范.docx",body_snippet:`智造示范工厂科技有限公司
Smart Mfg Demo Factory Co., Ltd.
                                                                                      
物流仓储管理规范
文件类别
■质量  □环安  □健康安全□其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIWL013
文件版本
A.0
页数
共  6 页
编制部门 ：物流部编制/修定：陶  鹏审 核 人 ：[质量专员]批 准 人 ：刘智雄
涉及部门：
□总经办
□业务/PMC
▇物流
□设备
□工程
▇品质
□人资
□EMS 总装
□华技
□温控
□钣金
□采购
□信息化
□财务
□新业务
编制/修定日期：2024-12-10                                                                  发布日期：2024-12-18
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新增文件
/
[质量专员]
2024-12-18
1.0 目的
为规范成品仓储进、出、存作业程序，加强对成品仓储的管理。满足客户的发货要求。保证发货的及时性、正确性，确保公司发货流程有效、顺畅的进行，实现库存管理制度化、规范化、标准化，提高仓储管理水平；特制定本规范。
2.0 范围
适用于本公司所有仓库进出控制管理的成品。
3.0 定义
物料
广义；包括与产品生产有关的所有成品等狭义；检验合格成品
4.0 工作流程图
5.0 工作流程图说明
序
号
工序名称
执行者
流程描述
输出
001
生产打单
生产部
1.生产无异常正常产出成品，产线组长申请打印《产品入库单》送至品质部报检。（手工入库开具《产品入库单（手工）》）。
《产品入库单》
《产品入库单（手工）》
《不良品厂内退料单》
2.生产过程中有异常的产线组长及时反馈品质部处理，品质部依《QP820300 进料检验控制程序 A.4.doc》、《QP830100 不合格品处理控制程序
A.5.DOC》进行处理
《良品厂内退料单》
002
品质检验
品质部
1.1.OQC 依产线组长提供《产品入库单》依
《QP820500 成品检验控制程序 A.4.docx》进行检验。 2.检验有异常的直接反馈给产线组长处理，直到无误为止。
3. 经 OQC 检验合格后，在成品外箱上盖“PASS”章，
并在《产品入库单》签名确认
003
入库
生产\\收货仓管
成品仓管收到《产品入库单》进入 PEBS 系统对品名、编码、订单号、数量、版本、环保属性及是否备注有 ECN 单号进行核对、
根据入库数量与包装、机柜类型安排仓库区域指定生产摆放，所有成品机柜必须摆放整`},{id:"wi:WIWL014",doc_code:"WIWL014",doc_name:"铁路集装箱运输装载防护操作指导书",rev:"A.1",department:"物流部",module:"wi",npi_phase:"EVT",summary:`目的
  针对示范厂成品发运，对铁路运输方式的装载平衡、以及装载防护、配载等等相关操作提出指导操作方法。
2.0范围
适用于本公司所有直发直提产品的发货。
3.0定义`,citations:[],tags:["HWMS/WOS"],raw_file:"WIWL014 铁路集装箱运输装载防护操作指导书.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
   铁路集装箱运输装载防护操作指导书
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIWL014
文件版本
A.1
页数
共8页
编制部门 ：物流部  
编制/修定：谭  俊 
审 核 人 ：[质量专员]
批 准 人 ：刘智雄
涉及部门：
□总经办   ■业务/PMC  ■物流部   □设备部   □工程部   ■品质部
□结构事业部    □逆变器事业部  □电源总装事业部  □微模块事业部
□人资部    □采购部     □财务部   □新业务开发部
                                                                       
编制/修定日期：2021-05-07                         发布日期:2021-05-12 
文件修订履历管理
版本/版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新增文件。
/
[质量专员]
2019-10-25
A.1
升级
/
[质量专员]
2021-05-12
　
　
　
1.0目的
  针对示范厂成品发运，对铁路运输方式的装载平衡、以及装载防护、配载等等相关操作提出指导操作方法。
2.0范围
适用于本公司所有直发直提产品的发货。
3.0定义
  本指导书对铁路柜的基本要求进行说明，以及如何达到装载平衡、以及装载防护，如何对多点提货进行重量平衡进行调整进行详细概述提供指导方法。
4.0职责和权限 
4.1物流部：物流成品发运所有装车人员必须严格按照本操作指导书来进行作业。
4.2品质部：负责装车拍照、包装检验、产品核对及相关资料核对。
5.0输入
5.1《出货信息跟踪记录表》。
5.2 装箱拍照要求。
6.0输出
   略
7.0 作业内容
7.1 铁路集装箱装载基本要求
7.1.1 以发货通知单或WOS 系统中“发运”下的发货看板上备注运输方式为：铁路运输或运输方式包含“铁”字样的运输方式，则为铁路行包运输方式
7.1.2 对铁路运输集装箱，以集装箱中间点为界，`},{id:"wi:WIWL017",doc_code:"WIWL017",doc_name:"泛网络产品理货包装通用操作指导书",rev:"A.2",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                               \r                                                                                                                                                             \r                     \r泛网络产品理货包装通用操作指导书\r\r文件类别\x07■质量  □环安  □健康安全  □其",citations:["WIWL016","WIWL015","WIWL018","WIWL013","WIWL003","OOT276","WIWL019","SUN200"],tags:["质量体系","受控规程"],raw_file:"WIWL017 泛网络产品理货包装通用操作指导书.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                               \r                                                                                                                                                             \r                     \r泛网络产品理货包装通用操作指导书\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL017\x07\x07文件版本\x07A.2\x07页数\x07共 39页\x07\x07\r编制部门 ：物 流 部\r\r编制/修定：皮 春 生\r\r审 核 人 ：谭 明 前\r\r批 准 人 ：刘 智 雄\r\r涉及部门：\r□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部\r□结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部\r□人资部  □采购部       □财务部    □新业务开发部\r\r\r编制/修定日期：2024-07-30\x07发布日期：2024-08-01\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07文件升级\x07\x07[质量专员]\x072021-05-12\x07\x07A.2\x07WIWL003订单更改撤单退库操作指导书、WIWL013企业业务合同包装操作指导书、WIWL015泛网络产品称重录重通用操作指导书、WIWL016泛网络产品包装标签粘贴操作指导书、WIWL018泛网络理货包装线体调度通用操作指导书、WIWL019泛网络制单业务操作指导书、WIWL017泛网络产品理货包装通用操作指导书合并升级为WIWL017泛网络产品理货包装通用操作指导\r\r\x07\x07[质量专员]\x072024-07-30\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\f1.0目的\r明确和规范理货包装基本操作，满足客户包装需求，确保订单及时、准确交付。 \r2.0适用范围\r本文适用于泛网络产品所有理货包装操作。 \r3.0定义\r  理货包装是根据系统指令完成实物及信息的确认交付。理货业务是实物操作的最后一道关口，对系统界面熟悉及 实物操作要求高。\r4.0责任\r\r"},{id:"wi:WIWL020",doc_code:"WIWL020",doc_name:"化学品泄露与爆炸应急准备及响应演习方案",rev:"A.1",department:"物流部",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                              \r                                                                                                                                                             \r                     \r化学品泄漏与爆炸应急准备及响应演习方案\r\r文件类别\x07■质量  □环安  □健康安全",citations:[],tags:["7S与安全"],raw_file:"WIWL020 化学品泄露与爆炸应急准备及响应演习方案A.1.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                                              \r                                                                                                                                                             \r                     \r化学品泄漏与爆炸应急准备及响应演习方案\r\r文件类别\x07■质量  □环安  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIWL020\x07\x07文件版本\x07A.1\x07页数\x07共 4页\x07\x07\r编制部门 ：物 流 部\r\r编制/修定：魏 桂 云\r\r审 核 人 ：郭 亚 雄    \r\r批 准 人 ：刘 智 雄\r\r涉及部门：\r□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部\r□结构事业部      □逆变器事业部    □电源总装事业部       □微模块事业部\r□人资部   ■采购部       □财务部   □新业务开发部\r\r\r编制/修定日期：2021-05-21\r\x07发布日期：2021-05-22\x07\x07文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07实施日期\x07\x07A.1\x07文件升级\x07\x07[质量专员]\x072021-05-21\x07\x07\x07\x07\x07\x07\x07\x07\x07 \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\r1.0目的\r为避免化学品泄露与爆炸等意外事故发生，确保对化学品泄露与爆炸等意外事故或紧急情况能做出相当响应，最大限度减少伴随的环境影响。\r2.0适用范围\r本方案适用于公司范围内化学品泄露与爆炸的突发性污染事故的处理和应急准备。\r3.0职责\r3.1 生产部负责对柴油储罐，氩气瓶，PU胶瓶等的日常监控及维护保养检漏等工作。\r3.2 仓储部负责对化学品包装容器的维护保养工作。\r3.3 各部门负责对自身管辖的化学品做好防火防漏工作。\r3.4 在发生污染事故时，任何部门，任何人员均有责任的义务积极参与应急响应工作。\r4.0 组织结构\r4.1 总指挥：生产部经理\r4.2 副总指挥：物流部经理、人力资源部经理\r4.3 工作组织委员："},{id:"wi:WIWL021ICT",doc_code:"WIWL021ICT",doc_name:"基础设施EMS共管库管理规范",rev:"A.1",department:"仓储物流部",module:"wi",npi_phase:"EVT",summary:`目的
通过对EMS共管业务的作业流程、运作规范、绩效管理及相关部门监管职责的明确定义及描述，以实现共管物料的有效管理及账实一致。
2 概述
针对标杆客户给EMS工厂送料加工业务中的标杆客户物权物料在EMS建立共管库场景，定义共管库的管理及运作职责，并对共管物料的接收入库、出库、退库、盘点、运作绩效管理等方面管理要求进行详述，以保证EMS共管业务管理职责明确、流程清晰，共管物料的有效管理及账实一致性。
本文中EMS共管库简称共管库。`,citations:["BP000","WIWL021"],tags:["质量体系","受控规程"],raw_file:"WIWL021ICT基础设施EMS共管库管理规范A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                                                           
                                                                                                                                                             
                     
ICT基础设施EMS共管库管理规范
文件类别
■质量  □环安  □健康安全  □其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIWL021
文件版本
A.1
页数
共 13页
编制部门 ：物 流 部
编制/修定：谭    俊
审 核 人 ：谭 明 前    
批 准 人 ：刘 智 雄
涉及部门：
□总经办   □业务/PMC     ■物流部     □设备部     □工程部     ■品质部
■结构事业部      ■逆变器事业部    ■电源总装事业部       ■微模块事业部
□人资部   ■采购部       □财务部   □新业务开发部
编制/修定日期：2025-6-19
发布日期：2025-6-19
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新增文件
/
[质量专员]
2023-01-05
A.1
新增表单及物料转运要求
/
[质量专员]
2025-06-19
  
1 目的
通过对EMS共管业务的作业流程、运作规范、绩效管理及相关部门监管职责的明确定义及描述，以实现共管物料的有效管理及账实一致。
2 概述
针对标杆客户给EMS工厂送料加工业务中的标杆客户物权物料在EMS建立共管库场景，定义共管库的管理及运作职责，并对共管物料的接收入库、出库、退库、盘点、运作绩效管理等方面管理要求进行详述，以保证EMS共管业务管理职责明确、流程清晰，共管物料的有效管理及账实一致性。
本文中EMS共管库简称共管库。
3 术语
术语名称
定义
同义词
共管库
针对标杆客户送料加工业务，为缩短交付周期，实现齐套及供应路径最优，经评审认证后由标杆客户提供物料（标杆客户物权），在工厂建立的实体库房，并由工厂与标杆客户共同管理。
物料回流
非中心仓管理物料，历史没有交易，未来也没有需求或取消建立库房，将实物回流到中心仓的。
货台交接
货台交接模式，指供应商直送指定标杆客户货台，标杆客户库房在货台完成物料接收、检验、做帐、暂存，EMS厂从暂存区域领料，缩短实物周转路径，实现帐务直入对应货位
代理收货
标杆客户收货对EMS进行资质认证后，由`},{id:"wi:WIYW001",doc_code:"WIYW001",doc_name:"订单跟进及交付管理规范",rev:"A.5",department:"业务PMC",module:"wi",npi_phase:"PVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r订单跟进及交付管理规范\r\r\r文件类别\x07■质量  □环境  □职业健康与安全",citations:["WI750"],tags:["NPI","IQC"],raw_file:"WIYW001 订单跟进及交付管理规范A.5.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r订单跟进及交付管理规范\r\r\r文件类别\x07■质量  □环境  □职业健康与安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIYW001\x07\x07文件版本\x07A.5\x07页数\x07共5页\x07\x07\r编制部门 ：业 务 部\r\r编制/修定：陈 秋 燕\r\r审 核 人 ：张    兴\r\r批 准 人 ：吴    燚\r涉及部门：\r■总经办   ■品质部     □财务部       ■PMC 部         ■工艺准备部   \r■工程部   ■采购部     ■物流部       ■业务部         ■企业管理部\r■电源总装事业部    ■逆变器事业部     ■喷涂事业部     ■储能事业部   \r■微模块事业部      □新业务事业部     ■结构事业部      ■NPI工厂\r                                                                       \r编制/修定日期：2025-09-17                         发布日期：2025-09-24\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07优化日期\x07\x07A.0\x07新增文件\x07/\x07[质量专员]\x072018-12-06\x07\x07A.1\x07优化文件封面\x07/\x07[质量专员]\x072019-04-09\x07\x07A.2\x071.增加8.4.1中响应时间；8.5成品库存周转率天数管理；8.6“存货健康管理机制”；8.7客户PO健康管理机制\x078.4.1\r8.5、8.6、8.7\x07[质量专员]\x072019-09-12\x07\x07A.3\x07更改文件编号旧WI750702，改为WIYW001，版本升级。\x07/\x07[质量专员]\x072021-06-29\x07\x07A.4\x07范围/职责和权限/输出/作业流程/记录及表单\x07/\x07[质量专员]\x072024-08-23\x07\x07A.5\x07职责和权限/作业流程\x073.2\v8.1.2\v8.2.2\x07[质量专员]\x072025.08-06\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07"},{id:"wi:WIYW002",doc_code:"WIYW002",doc_name:"产品招标控制规范",rev:"A.2",department:"业务PMC",module:"wi",npi_phase:"EVT",summary:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r产品招标管理规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07",citations:["QPGC060","ISO900"],tags:["质量体系","受控规程"],raw_file:"WIYW002产品招标管理规范A.2.doc",body_snippet:"\b智造示范工厂科技有限公司\v Smart Mfg Demo Factory Co., Ltd.\r                                文件封面                                \r                                                                                                                                                             \r                     \r产品招标管理规范\r\r文件类别\x07■质量  □环境  □健康安全  □其他\x07\x07文件等级\x07□一级文件  □二级文件  ■三级文件\x07\x07文件编号\x07WIYW002\x07\x07文件版本\x07A.2\x07页数\x07共 6页\x07\x07\r编制部门 ：业 务 部\r\r编制/修定：陈 秋 燕 \r\r审 核 人 ：张    兴\r\r批 准 人 ：吴    燚\r\r涉及部门：\r□总经办   ■业务/PMC   □物流部    □设备部    ■工程部   ■品质部\r■结构事业部     ■逆变器事业部   ■电源总装事业部     ■微模块事业部\r□人资部   □采购部       ■财务部    □新业务开发部\r编制/修定日期：2025-01-17\x07发布日期：2025-01-22\x07\x07\r文件修订履历管理\x07\x07版本/次\x07更改内容摘要\x07更改章节号\x07优化人\x07 优化日期 \x07\x07A.1\x07将原QPGC06000产品招标控制程序，改为三级规范，升级版本。\x07/\x07[质量专员]\x072021-06-29\x07\x07A.2\x07因组织架构调整，商务接口由原工程部所属并入业务部，将\r原商务报价接口对应的部门由工程部改为业务部，订单业务接\r口由原PMC部改为业务部。\x074.1、4.5、 7.0、8.6、\r8.7、8.11\x07[质量专员]\x072025-01-17\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07    \x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x071.0目的\r规范产品的招标过程及招标的注意事项，提前按客户要求评估招标产品的相关信息；\r2.0范围\r适用于与招标相关的业务人员及相关评标信息的评审人员；\r3.0定义\r3.1 竞争性招标方：系指客户。\r3.2 参与方：系指向竞争性招标方提交投标文件的制造商或供货商。\r4.0职责和权限\r4.1 业务部：负责招标产品的价格输出、投标，及参与客户招标的具体事宜；负责中标产品的后期订"},{id:"wi:WIYW004",doc_code:"WIYW004",doc_name:"EMS任务令管理作业指令书",rev:"A.1",department:"业务PMC",module:"wi",npi_phase:"EVT",summary:`目的
规范标杆客户EMS任务令接收，并及时准确转换为公司内部订单，驱动生产加工。
2.0适用范围
适用所有EMS加工任务令。
3.0定义；适用范围
适用所有EMS加工任务令。
3.0定义
3.1物料齐套率是指当前任务令对应的实际到料数量除以当前订单的所需物料数量，再乘以100%。一段时间物料齐套率，取时间区间内所有任务令物料齐套率加权平均值。
3.2采购齐套管理,指定采购子件，系统自动估算避免不齐套。`,citations:[],tags:["质量体系","受控规程"],raw_file:"WIYW004 EMS任务令管理作业指令书.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
EMS任务令订单管理规范
文件类别
□质量  □环安  □健康安全  ■其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIYW004
文件版本
A.1
页数
共 10页
编制部门 ：PMC部
编制/修定：段瑞丽
审 核 人 ：张  兴
批 准 人 ：吴  燚
涉及部门：
□总经办   ■业务/PMC     ■物流部     □设备部     □工程部     □品质部
□结构事业部      ■逆变器事业部    ■电源总装事业部       □微模块事业部
□人资部   □采购部       □财务部    □新业务开发部
编制/修定日期：2024-11-22                                           发布日期：2024-11-26
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
新增文件
/
[质量专员]
2021-6-15
A.1
新增7.2.4条款任务令T-1锁排内容、新增齐套率定义,完善生产要素确认内容
7.2.4/3.0
[质量专员]
2024-11-22
    
1.0目的
规范标杆客户EMS任务令接收，并及时准确转换为公司内部订单，驱动生产加工。
2.0适用范围
适用所有EMS加工任务令。
3.0定义
3.1物料齐套率是指当前任务令对应的实际到料数量除以当前订单的所需物料数量，再乘以100%。一段时间物料齐套率，取时间区间内所有任务令物料齐套率加权平均值。
3.2采购齐套管理,指定采购子件，系统自动估算避免不齐套。
3.3齐套检查:在任务令锁排后各部门对生产要素进行检查.系统和人工检查缺料情况，物控人员及时处理缺料问题，快速调整生产计划，确保物料齐套。
3.4系统齐套管理：系统设定节拍、任务令生产周期、任务令开工时间、任务令完工时间等数据，开工时间前8小时系统自动锁定物料入库状态计算物料齐套率，物控在开工时间前8小时需持续追踪物料实物到库。系统功能实现之前使用任务令齐套检查OK/NG来计算任务令物料齐套率数据依据。
4.0输入
   无
5.0输出
PEB`},{id:"wi:WIYW005",doc_code:"WIYW005",doc_name:"EMS交付KPI指标字典",rev:"A.1",department:"业务PMC",module:"wi",npi_phase:"EVT",summary:`目的
对标杆客户EMS 交付KPI指标范围、定义进行诠释。
2.0适用范围
适用所有EMS加工任务令。
3.0定义；适用范围
适用所有EMS加工任务令。
3.0定义
无
4.0输入`,citations:[],tags:["质量体系","受控规程"],raw_file:"WIYW005 EMS交付KPI指标字典A.1.docx",body_snippet:`智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd.
                                文件封面                                
                                                                                                                                                             
                     
EMS交付 KPI指标字典
文件类别
□质量  □环安  □健康安全  ■其他
文件等级
□一级文件  □二级文件  ■三级文件
文件编号
WIYW005
文件版本
A.1
页数
共 7页
编制部门 ：PMC部
编制/修定：张  兴
审 核 人 ：/
批 准 人 ：吴  燚
涉及部门：
□总经办   ■业务/PMC     ■物流部     □设备部     □工程部     □品质部
□结构事业部      ■逆变器事业部    ■电源总装事业部       □微模块事业部
□人资部   □采购部       □财务部    □新业务开发部
编制/修定日期：2025-01-13
发布日期：2025-01-20
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
新增文件
/
张 兴
2021-6-15
A.1
修改ICT任务令95%收敛周期考核指标分值
7.1
张 兴
2025-1-13
    
1.0目的
对标杆客户EMS 交付KPI指标范围、定义进行诠释。
2.0适用范围
适用所有EMS加工任务令。
3.0定义
无
4.0输入
   无
5.0输出
月度交付考核达成结果
6.0工作流程图
无
7.0程序
  7.1交付KPI考核指标项目  
考核项
权重
分数
基线
目标
挑战值
KPI Performance(100%)
ICT整机生产交付周期
15.00%
15
0.77 
0.73 
0.72 
ICT整机及时完成率
15.00%
15
94.00%
95.50%
98.50%
ICT任务令95%收敛周期
15.00%
15
3.60 
3.00 
2.85 
ICT任务令准时完工率
15.00%
15
92.00%
94.00%
96.10%
产能承诺对需求满足率
15.00%
15
94.00%
95.50%
98.50%
产出对承诺的达成率
15.00%
15
94.00%
95.50%
98.50%
长期在制-标准
5.00%
5
30 
15 
15 
长期在制-非标
5.00%
5
45 
30 
`},{id:"wi:关键零件管理规范",doc_code:"关键零件管理规范",doc_name:"关键零件管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:"智造示范工厂科技有限公司 Smart Mfg Demo Factory Co., Ltd. 文件封面 关键零件管理规范 文件类别 ■质量 □环安 □健康安全 □其他 文件等级 □一级文件 □二级文件 ■三级文件 文件编号 WIPZ031 文件版本 A.5 页数 共4 页 编制部门：品质部 编制/修定：肖玉丰 审核人：邹文兵 批准人：李 锋 涉及部门： □总经办 ■品质部 □财务部 □PMC 部 □工艺准备部 ■工程部 □采购部 ■物流部 □业务部 □企业管理部 □电源总装事业部 □逆变器事业部 □喷涂事业部 □储能事业部 □微模块事业部 □新业务事业部 ■结构事业部 □NPI 工厂 编制/修定日期：2025-11-20 发布日期：2025-11-27  文件编",citations:["WIPZ031"],tags:["NPI","IQC"],raw_file:"关键零件管理规范.pdf",body_snippet:`智造示范工厂科技有限公司
Smart Mfg Demo Factory Co., Ltd.
文件封面
关键零件管理规范
文件类别
■质量
□环安
□健康安全
□其他
文件等级
□一级文件
□二级文件
■三级文件
文件编号
WIPZ031
文件版本
A.5
页数
共4 页
编制部门：品质部
编制/修定：肖玉丰
审核人：邹文兵
批准人：李
锋
涉及部门：
□总经办
■品质部
□财务部
□PMC 部
□工艺准备部
■工程部
□采购部
■物流部
□业务部
□企业管理部
□电源总装事业部
□逆变器事业部
□喷涂事业部
□储能事业部
□微模块事业部
□新业务事业部
■结构事业部
□NPI 工厂
编制/修定日期：2025-11-20
发布日期：2025-11-27

文件编号：WIPZ031
版本：A.5
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
关键零件管理规范
页
数：第2页，共5 页
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.2
增加履历，版本升级
/
[质量专员]
2017-06-27
A.3
更改文件编号、封面，版本升级
/
[质量专员]
2021-06-11
A.4
增加关键零件清单
8.4
[质量专员]
2021-09-09
A.5
文件过期刷新
/
肖玉丰
2025-11-20

文件编号：WIPZ031
版本：A.5
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
关键零件管理规范
页
数：第3页，共5 页
1.0 目的：
对关键元件来料、制程、组装，交付各阶段的产品进行标识控制，以利于产品类别之鉴别与区分，以防止
混淆，建立可信赖的生产作业流程，确保产品及零件的可追溯性。
2. 0 范围：
适用于公司产品生产的各个工序和所有产品（包括已出货到客户的产品）。
3.0 定义：
关键零件:指客户提供的子物件,如模块、电子物料等或者TK/TK AVL 结构件零件，如胶类、硅脂、门锁类
具体见6.4 关键零件清单。
4.0 职责和权限
4.1 IQC：负责依检验标准、客户技术规范对物料执行抽样检验，并记录检验结果。
4.2 工程部：负责制定产品的图纸等技术文件，并针对不合格品进行评审。
4.3 事业部：在使用过程中发现产品有异常时，将异常反馈IQC 处理。
4.4 物流部：负责物料的入库、储存、出库、配送处理。
5.0 输入：
所有产品、零件,品质检验规范、产品标识要求。
6.0 流程图
无
7.0 输出：
标示明确的具有可追溯性的产品。
8.0 作业内容
8.1 交货/收货及检验标示
8.1.1 供应商来料在包装明显处应粘贴标示有品名、规格、数量、生产日期等（当有约定时应附检验报告，
材质证明或其它相关品质证明）标签。
8.1.2 仓管员按《送货单》或《`},{id:"standards:受控文件一览表",doc_code:"受控文件一览表",doc_name:"受控文件一览表",rev:"A.0",department:"企业管理部",module:"standards",npi_phase:"MP",summary:"本文件系智造示范工厂科技有限公司现行受控文件，规范受控文件一览表之作业要求与控制标准，确保工序质量受控。",citations:[],tags:["质量体系","受控规程"],raw_file:"受控文件一览表.xls",body_snippet:""},{id:"wi:质量成本管理规范",doc_code:"质量成本管理规范",doc_name:"质量成本管理规范",rev:"A.0",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:`目的
规范公司经济性度量质量体系有效性的范围和方法，确保通过质量成本分析来改进质量，进而达到提高经济
效益的目的。
2.0 范围
适用于本公司采用质量成本控制方法对质量成本的管理、控制与持续改进。`,citations:["WIPZ007"],tags:["NPI","IQC"],raw_file:"质量成本管理规范.pdf",body_snippet:`密级：内部文件
智造示范工厂科技有限公司
Smart Mfg Demo Factory Co., Ltd.
文件封面
质量成本管理规范
文件类别
■质量
□环安
□健康安全
□其他
文件等级
□一级文件
□二级文件
■三级文件
文件编号
WIPZ007
文件版本
A.2
页数
共6 页
编制部门：品质部
编制/修定：肖玉丰
审核人：邹文兵
批准人：李
锋
涉及部门：
■总经办
■品质部
■财务部
■PMC 部
■工艺准备部
■工程部
■采购部
■物流部
■业务部
■企业管理部
■电源总装事业部
■逆变器事业部
■喷涂事业部
■储能事业部
■微模块事业部
■新业务事业部
■结构事业部
■NPI 工厂
编制/修定日期：2025-11-20
发布日期：2025-11-27

文件编号：WIPZ007
版本：A.2
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
质量成本管理规范
页数
第2 页共6 页
密级：内部文件
文件修订履历管理
版本/
版次
更改内容摘要
更改章节号
优化人
实施日期
A.0
新发行
/
[质量专员]
2016-05-08
A.1
1.将二级文件修定为三级文件管理；2.优化内容；3.将质量成本转嫁管理规范内
容合并。
3.0、8.6
[质量专员]
2021-04-16
A.2
文件过期刷新
/
肖玉丰
2025-11-20

文件编号：WIPZ007
版本：A.2
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
质量成本管理规范
页数
第3 页共6 页
密级：内部文件
1.0 目的
规范公司经济性度量质量体系有效性的范围和方法，确保通过质量成本分析来改进质量，进而达到提高经济
效益的目的。
2.0 范围
适用于本公司采用质量成本控制方法对质量成本的管理、控制与持续改进。
3.0 定义
3.1 质量成本
为确保满意质量而发生的费用，及没有达到满意质量所造成的损失。
3.2 预防成本
是指用于预防不合格品与故障等需要所发生的各项费用。
3.3 鉴定成本
是指在“一次交验合格”(包括一次拆箱合格)的情况下，为检验产品质量而发生的一切费用。
3.4 失败成本：即不合格品成本，因公司的产品不符合要求造成产品失效或外部失效而产生的成本，即：内部
损失成本和外部损失成本的总和。
3.4.1 内部损失成本（又称：内部故障成本）
供货前，由于未达到质量要求所造成的损失和额外支付的费用。
3.4.2 外部损失成本（又称：外部故障成本）
供货后，由于未达到质量要求所造成的有形和无形损失及意外支付的费用。
3.5 质量成本转嫁：在产品装配过程中及客户端反馈的品质异常产生的质量成本转嫁到各直接责任人。
3.6 质量成本责任界线原则：以主要责任为担当，任何质量问题均由主责单位人员承担，只体现首`},{id:"standards:质量记录一览表",doc_code:"质量记录一览表",doc_name:"质量记录一览表",rev:"A.0",department:"企业管理部",module:"standards",npi_phase:"MP",summary:"本文件系智造示范工厂科技有限公司现行受控文件，规范质量记录一览表之作业要求与控制标准，确保工序质量受控。",citations:[],tags:["质量体系","受控规程"],raw_file:"质量记录一览表.xls",body_snippet:""},{id:"wi:A",doc_code:"A",doc_name:"金属表面处理质量管理规范",rev:"A.1",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:`目的
监控产品喷砂、拉丝、阳极化、化学氧化、电镀质量，防止不合格品发生而制定本规范。
2.0 适用范围
适用于本公司所有的金属产品的表面处理（喷涂除外）
3.0 定义；适用范围
适用于本公司所有的金属产品的表面处理（喷涂除外）
3.0 定义
3.1拉丝：是一种砂带磨削加工制程，通过砂带对金属表面进行磨削加工，以去除金属表面缺陷，并具有一定粗
糙度，纹路均匀的装饰表面。`,citations:["YB019","WIPZ082","YB010"],tags:["NPI","IQC"],raw_file:"金属表面处理质量管理规范A.1(1).pdf",body_snippet:`密级：内部文件
智造示范工厂科技有限公司
Smart Mfg Demo Factory Co., Ltd.
文件封面
金属表面处理质量管理规范
文件类别
■质量
□环安
□健康安全
□其他
文件等级
□一级文件
□二级文件
■三级文件
文件编号
WIPZ082
文件版本
A.1
页数
共6 页
编制部门：品质部
编制/修定：肖玉丰
审核人：邹文兵
批准人：李
锋
涉及部门：
□总经办
■品质部
□财务部
□PMC 部
□工艺准备部
■工程部
□采购部
□物流部
□业务部
□企业管理部
■电源总装事业部
■逆变器事业部
□喷涂事业部
□储能事业部
■微模块事业部
□新业务事业部
■结构事业部
□NPI 工厂
编制/修定日期：2025-11-20
发布日期：2025-11-27

文件编号：WIPZ082
版本：A.1
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
金属表面处理质量管理规范
页
数：共2 页，第6 页
文件密级：内部公开
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
将《电镀、氧化产品质量管理规范》与《金属氧化表面检验规范》
文件进行合并，形成新的管理规范。
/
[质量专员]
2021-06-08
A.1
文件过期刷新
/
肖玉丰
2025-11-20

文件编号：WIPZ082
版本：A.1
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
金属表面处理质量管理规范
页
数：共3 页，第6 页
文件密级：内部公开
1.0 目的
监控产品喷砂、拉丝、阳极化、化学氧化、电镀质量，防止不合格品发生而制定本规范。
2.0 适用范围
适用于本公司所有的金属产品的表面处理（喷涂除外）
3.0 定义
3.1拉丝：是一种砂带磨削加工制程，通过砂带对金属表面进行磨削加工，以去除金属表面缺陷，并具有一定粗
糙度，纹路均匀的装饰表面。
3.2喷砂：使制件表面受到喷射砂粒的冲击而进行清理，除锈或粗化的制程。
3.3光亮阳极化：金属表面直接经化学拋光并无色硫酸阳极化的表面处理制程。
3.4无色化学氧化：指氧化膜呈无色状的化学氧化的制程。
3.5彩色化学氧化：指氧化膜呈金黄至彩虹色的化学氧化制程。
3.6喷砂光亮无色化学氧化：指经喷砂处理后再进行化学拋光和无色化学氧化的表面处理制程。
3.7批：指同一天相同制程条件下处理的材料和形状相似的零件的总和。
4.0 职责和权限
4.1 品质部：负责对表面处理产品进行检验及试验，并提供客户需要的样品；
4.2 生产部：负责按客户要求制作测试样品。
5.0 输入
合格的产品
6.0 输出
检验报告
7.0 工作流程图
无
8.0 程序
8.1 试片要求
8.1.1试片：材料：铝板(6063#)，尺寸：80×125×1~`},{id:"wi:A",doc_code:"A",doc_name:"金属表面处理质量管理规范",rev:"A.1",department:"企业管理部",module:"wi",npi_phase:"PVT",summary:`目的
监控产品喷砂、拉丝、阳极化、化学氧化、电镀质量，防止不合格品发生而制定本规范。
2.0 适用范围
适用于本公司所有的金属产品的表面处理（喷涂除外）
3.0 定义；适用范围
适用于本公司所有的金属产品的表面处理（喷涂除外）
3.0 定义
3.1拉丝：是一种砂带磨削加工制程，通过砂带对金属表面进行磨削加工，以去除金属表面缺陷，并具有一定粗
糙度，纹路均匀的装饰表面。`,citations:["YB019","WIPZ082","YB010"],tags:["NPI","IQC"],raw_file:"金属表面处理质量管理规范A.1.pdf",body_snippet:`密级：内部文件
智造示范工厂科技有限公司
Smart Mfg Demo Factory Co., Ltd.
文件封面
金属表面处理质量管理规范
文件类别
■质量
□环安
□健康安全
□其他
文件等级
□一级文件
□二级文件
■三级文件
文件编号
WIPZ082
文件版本
A.1
页数
共6 页
编制部门：品质部
编制/修定：肖玉丰
审核人：邹文兵
批准人：李
锋
涉及部门：
□总经办
■品质部
□财务部
□PMC 部
□工艺准备部
■工程部
□采购部
□物流部
□业务部
□企业管理部
■电源总装事业部
■逆变器事业部
□喷涂事业部
□储能事业部
■微模块事业部
□新业务事业部
■结构事业部
□NPI 工厂
编制/修定日期：2025-11-20
发布日期：2025-11-27

文件编号：WIPZ082
版本：A.1
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
金属表面处理质量管理规范
页
数：共2 页，第6 页
文件密级：内部公开
文件修订履历管理
版本/次
更改内容摘要
更改章节号
优化人
优化日期
A.0
将《电镀、氧化产品质量管理规范》与《金属氧化表面检验规范》
文件进行合并，形成新的管理规范。
/
[质量专员]
2021-06-08
A.1
文件过期刷新
/
肖玉丰
2025-11-20

文件编号：WIPZ082
版本：A.1
智造示范工厂科技有限公司
编制部门：品质部
修订日期：2025-11-20
金属表面处理质量管理规范
页
数：共3 页，第6 页
文件密级：内部公开
1.0 目的
监控产品喷砂、拉丝、阳极化、化学氧化、电镀质量，防止不合格品发生而制定本规范。
2.0 适用范围
适用于本公司所有的金属产品的表面处理（喷涂除外）
3.0 定义
3.1拉丝：是一种砂带磨削加工制程，通过砂带对金属表面进行磨削加工，以去除金属表面缺陷，并具有一定粗
糙度，纹路均匀的装饰表面。
3.2喷砂：使制件表面受到喷射砂粒的冲击而进行清理，除锈或粗化的制程。
3.3光亮阳极化：金属表面直接经化学拋光并无色硫酸阳极化的表面处理制程。
3.4无色化学氧化：指氧化膜呈无色状的化学氧化的制程。
3.5彩色化学氧化：指氧化膜呈金黄至彩虹色的化学氧化制程。
3.6喷砂光亮无色化学氧化：指经喷砂处理后再进行化学拋光和无色化学氧化的表面处理制程。
3.7批：指同一天相同制程条件下处理的材料和形状相似的零件的总和。
4.0 职责和权限
4.1 品质部：负责对表面处理产品进行检验及试验，并提供客户需要的样品；
4.2 生产部：负责按客户要求制作测试样品。
5.0 输入
合格的产品
6.0 输出
检验报告
7.0 工作流程图
无
8.0 程序
8.1 试片要求
8.1.1试片：材料：铝板(6063#)，尺寸：80×125×1~`}],z2=[{name:"NPI",count:69,docs:["EHPQG039","HPQG036","QPCG023","QPGC026","QPGC027","QPGC030","QPPZ014","QPPZ019","QPPZ021","QPPZ023","QPQG001","QPQG002","QPQG003","QPQG004","QPQG007","QPQG008","QPQG015","QPQG017","QPQG018","QPWL043","WIGC093","WIGC097","WIGC098","WIGC099","WIGC102","WIGC103","WIGC104","WIGC107","WIGC108","WIGC109","WIGC110","WIGC111","WIGC112","WIGC114EMS","WIKF040","WIPZ092","WIPZ093","WIQG033","WIQG034","WIQG035","WIQG036","WIQG037","WIQG038","WIQG040","WIQG045","WIQG046","WIQG047","WIQG048","WIQG049","WIQG050","WIQG051","WIQG052","WIQG053","WIQG055","WIQG056","WIQG057","WISB005-","WISB007-","WISB008","WISC049","WISC050","WISC051","WISC062","WIWL008","WIYW001","关键零件管理规范","质量成本管理规范","A","A"]},{name:"PCN",count:4,docs:["QPCG023","QPGC025","QPPZ021","WIKF039"]},{name:"8D",count:11,docs:["8D-20251204-01","8D-20251209-01","8D-20251212-01","8D-20260316-01","QPGC027","QPPZ014","QPPZ019","WIQG035","WISB019BTS","WISB025","WISC051"]},{name:"FMEA",count:7,docs:["QPGC026","QPGC027","QPGC030","QPQG018","QPSB040","WIKF040","WIWL004"]},{name:"ESD",count:9,docs:["WIKF037","WIPZ093","WIQG046","WIQG047","WIQG055","WISC053","WISC058","WIWL002","WIWL007"]},{name:"IQC",count:34,docs:["1","8D-20251209-01","QPCG024","QPGC030","QPPZ014","QPPZ019","QPPZ020","QPPZ021","QPQG008","QPSC045","QPWL043","WIGC098","WIGC114EMS","WIKF014","WIKF015","WIKF022","WIKF023","WIKF024","WIKF025","WIKF026","WIKF028","WIKF042","WIPZ093","WIQG037","WISB006-","WISC051","WISC056","WIWL011","WIWL013","WIYW001","关键零件管理规范","质量成本管理规范","A","A"]},{name:"停线机制",count:2,docs:["WIQG057","WISC048"]},{name:"HWMS/WOS",count:5,docs:["WIKF044","WIWL001","WIWL011","WIWL012","WIWL014"]},{name:"BTS",count:7,docs:["8D-20260316-01","QPGC027","QPPZ016","QPQG001","WISB019BTS","WISC058","WISC061"]},{name:"7S与安全",count:7,docs:["WIQG033","WIQG034","WIQG049","WISB022","WISC048","WIWL008","WIWL020"]},{name:"直通率",count:4,docs:["QPGC026","WIGC110","WIGC114EMS","WIQG057"]},{name:"物料认证",count:5,docs:["QPCG023","QPGC030","QPQG004","QPQG017","WIKF022"]}],Xm=[{id:1,title:"NPI 试产转量产直通率改善方案",platform:"工程部",priority:"高",status:"待写",note:"基于 8D 结案案例 01，建立 PCBA 虚焊预警与波峰焊温区监控体系"},{id:2,title:"供应商进料检验抽样放宽/加严动态准则",platform:"品保部",priority:"高",status:"待写",note:"依据 MIL-STD-105E 与 QPRZ031 进料检验程序，梳理 AQL 0.4 加严触发阈值"},{id:3,title:"SMT 首件核对与防错料闭环管理规程",platform:"生产部",priority:"中",status:"待写",note:"对照 WI-GC-110 作业指导书，增加条码扫码防呆与双人复核签认"}],Km=[{id:"draft-1",title:"【草稿】波峰焊锡珠不良 8D 根本原因分析与预防措施",source:1,body:`【8D 改善行动草案】

1. 问题描述：客户现场反馈 PCBA 局部短路，显微镜检测发现 0.3mm 锡珠残留。

2. 临时遏制：对在库 500 套成品进行 100% 显微镜目视复检，隔离可疑批次。

3. 根本原因 (5-Why)：
- 助焊剂预热温度不足 (预热段温度 95℃ < 标准 110℃)，溶剂未完全挥发。

4. 永久改善对策：修订《波峰焊作业指导书》，增加开班温控记录与每两小时回流监测。

5. 预防再发：纳入《新物料认证流程》与 FMEA 预防库。`}];Tn.filter(o=>o.module==="wi").map(o=>({id:o.id,title:(o.doc_code?o.doc_code+" ":"")+o.doc_name,path:`02-作业规范/${o.doc_name}`,body:o.body_snippet||o.summary||""}));z2.map(o=>[o.name,[o.name]]);const fa=Tn.map((o,m)=>{const b=o.doc_code||"",s=(b?b+" ":"")+o.doc_name;return{id:o.id,title:s,date:"2026-05-18 09:00",views:(o.citations?.length||0)*15+18,likes:(o.citations?.length||0)*4+3,comments:0,saves:(o.citations?.length||0)+2,follows:1,shares:o.citations?.length||0,impressions:200,ctr:8.8,duration:45,doc:o}});Tn.map(o=>{const m=o.doc_code||"",b=(m?m+" ":"")+o.doc_name;return{id:o.id,title:b,body:o.body_snippet||o.summary||"",tags:o.tags||[],cover:null,media:"doc"}});const jm=fa.map(o=>o.date).sort().pop()||"2026-05-18";fa.filter(o=>o.date.slice(0,7)===jm.slice(0,7));const Ou={brand:{name:"QMS OS",sub:"QMS OS",tagline:"质量体系神经网络",taglineEn:"QMS OS Quality Neural OS"},workspace:"智造示范工厂 · 体系知识中枢",avatar:"avatar.svg",footer:{zh:"每一份受控文件，都是质量体系神经网络中的一个节点。",en:"Every controlled procedure is a neuron in the quality network."},storagePrefix:"yt-qms-dashboard"},gu=o=>(typeof import.meta<"u"?"./":"/")+o,X7={"tech-blue":{id:"tech-blue",name:"深海科技蓝",en:"Tech Blue",desc:"量子冷光 · 智造电光蓝",primary:"#38bdf8",previewGrad:"linear-gradient(135deg, #0369a1, #38bdf8)",kinds:{core:"#38bdf8",folder:"#60a5fa",qp:"#3b82f6",wi:"#06b6d4",cases8d:"#38bdf8",standards:"#93c5fd",concept:"#e0f2fe",tag:"#38bdf8",ghost:"#475569",post:"#3b82f6",note:"#06b6d4",idea:"#38bdf8",draft:"#93c5fd"},modules:{qp:{color:"#3b82f6",filter:"hue-rotate(195deg) saturate(1.7) brightness(1.15)"},wi:{color:"#06b6d4",filter:"hue-rotate(160deg) saturate(1.8) brightness(1.2)"},cases8d:{color:"#38bdf8",filter:"hue-rotate(185deg) saturate(1.6) brightness(1.1)"},standards:{color:"#60a5fa",filter:"hue-rotate(210deg) saturate(1.5) brightness(1.1)"},concepts:{color:"#93c5fd",filter:"hue-rotate(190deg) saturate(0.9) brightness(1.2)"},works:{color:"#06b6d4",filter:"hue-rotate(160deg) saturate(1.8)"},methods:{color:"#3b82f6",filter:"hue-rotate(195deg) saturate(1.7)"},ideas:{color:"#38bdf8",filter:"hue-rotate(185deg) saturate(1.6)"},drafts:{color:"#60a5fa",filter:"hue-rotate(210deg) saturate(1.5)"}},media:{orb:gu("media/orb.mp4"),orbPoster:gu("media/orb.jpg"),jelly:gu("media/jellyfish.mp4"),jellyPoster:gu("media/jellyfish.jpg")},pulse:{out:["#f0f9ff","#38bdf8"],in:["#ffffff","#0284c7"]},ring:["#38bdf8","#1e40af"],logo:["#38bdf8","#60a5fa","#93c5fd","#1d4ed8"],mini:{glow0:"#ffffff",core:"#38bdf8",dot:"#e0f2fe",mutual:"#38bdf8",pulseOut:"#f0f9ff",pulseIn:"#0284c7"},dust:["56,189,248","96,165,250","14,165,233","224,242,254"],canvas:{additive:!0,mutual:"56,189,248",mutualIn:"14,165,233",wiki:"96,165,250",link:"51,65,85",pulseOne:"56,189,248",label:"#e0f2fe",spark:["56,189,248","96,165,250","224,242,254"],glow:"88",light:"#ffffff"}},"cyber-carbon":{id:"cyber-carbon",name:"玄黑赛博金",en:"Cyber Carbon",desc:"经典深灰 · 香槟金银微光",primary:"#e6cf98",previewGrad:"linear-gradient(135deg, #1c1d1d, #e6cf98)",kinds:{core:"#ecd9a6",folder:"#d9b6c1",qp:"#c0b8ef",wi:"#ace0cf",cases8d:"#f4a595",standards:"#ecc98f",concept:"#e4e6e8",tag:"#98a6a1",ghost:"#70746f",post:"#c0b8ef",note:"#ace0cf",idea:"#f4a595",draft:"#ecc98f"},modules:{qp:{color:"#c3bcf2",filter:"hue-rotate(215deg) saturate(1.1)"},wi:{color:"#ace0cf",filter:"hue-rotate(118deg) saturate(1)"},cases8d:{color:"#f4a595",filter:"hue-rotate(330deg) saturate(1.2)"},standards:{color:"#ecc98f",filter:"saturate(1)"},concepts:{color:"#e2e5e8",filter:"hue-rotate(185deg) saturate(.3) brightness(1.15)"},works:{color:"#ace0cf",filter:"hue-rotate(118deg) saturate(1)"},methods:{color:"#c3bcf2",filter:"hue-rotate(215deg) saturate(1.1)"},ideas:{color:"#f4a595",filter:"hue-rotate(330deg) saturate(1.2)"},drafts:{color:"#ecc98f",filter:"saturate(1)"}},media:{orb:gu("media/orb.mp4"),orbPoster:gu("media/orb.jpg"),jelly:gu("media/jellyfish.mp4"),jellyPoster:gu("media/jellyfish.jpg")},pulse:{out:["#fffaf0","#ecd39e"],in:["#ffffff","#e3b3c4"]},ring:["#ecd9a6","#c9cac5"],logo:["#7d7f7c","#d8d9d6","#ecd9a6","#a9aba7"],mini:{glow0:"#ffffff",core:"#c9d6e0",dot:"#f2f4f5",mutual:"#ecd39e",pulseOut:"#ffffff",pulseIn:"#e3b3c4"},dust:["236,236,232","230,207,152","200,205,210","255,255,255"],canvas:{additive:!0,mutual:"236,206,146",mutualIn:"232,176,196",wiki:"172,224,206",link:"205,208,204",pulseOne:"190,230,215",label:"#e6e7e3",spark:["200,205,210","225,228,232","255,236,200"],glow:"66",light:"#ffffff"}},"emerald-green":{id:"emerald-green",name:"极光翠绿",en:"Emerald Aurora",desc:"绿色智造 · 零缺陷品保",primary:"#34d399",previewGrad:"linear-gradient(135deg, #064e3b, #34d399)",kinds:{core:"#34d399",folder:"#10b981",qp:"#34d399",wi:"#10b981",cases8d:"#f59e0b",standards:"#6ee7b7",concept:"#d1fae5",tag:"#34d399",ghost:"#4b5563",post:"#34d399",note:"#10b981",idea:"#f59e0b",draft:"#6ee7b7"},modules:{qp:{color:"#34d399",filter:"hue-rotate(100deg) saturate(1.6) brightness(1.15)"},wi:{color:"#10b981",filter:"hue-rotate(120deg) saturate(1.7) brightness(1.1)"},cases8d:{color:"#f59e0b",filter:"hue-rotate(40deg) saturate(1.5) brightness(1.1)"},standards:{color:"#6ee7b7",filter:"hue-rotate(95deg) saturate(1.5) brightness(1.2)"},concepts:{color:"#d1fae5",filter:"hue-rotate(105deg) saturate(0.8) brightness(1.2)"},works:{color:"#10b981",filter:"hue-rotate(120deg) saturate(1.7)"},methods:{color:"#34d399",filter:"hue-rotate(100deg) saturate(1.6)"},ideas:{color:"#f59e0b",filter:"hue-rotate(40deg) saturate(1.5)"},drafts:{color:"#6ee7b7",filter:"hue-rotate(95deg) saturate(1.5)"}},media:{orb:gu("media/orb.mp4"),orbPoster:gu("media/orb.jpg"),jelly:gu("media/jellyfish.mp4"),jellyPoster:gu("media/jellyfish.jpg")},pulse:{out:["#ecfdf5","#34d399"],in:["#ffffff","#059669"]},ring:["#34d399","#065f46"],logo:["#34d399","#10b981","#6ee7b7","#064e3b"],mini:{glow0:"#ffffff",core:"#34d399",dot:"#d1fae5",mutual:"#34d399",pulseOut:"#ecfdf5",pulseIn:"#059669"},dust:["52,211,153","16,185,129","110,231,183","240,253,244"],canvas:{additive:!0,mutual:"52,211,153",mutualIn:"5,150,105",wiki:"16,185,129",link:"30,58,45",pulseOne:"52,211,153",label:"#d1fae5",spark:["52,211,153","16,185,129","209,250,229"],glow:"88",light:"#ffffff"}},"neon-violet":{id:"neon-violet",name:"霓虹幻紫",en:"Neon Violet",desc:"赛博深空 · 霓虹紫罗兰",primary:"#c084fc",previewGrad:"linear-gradient(135deg, #581c87, #c084fc)",kinds:{core:"#c084fc",folder:"#e879f9",qp:"#a855f7",wi:"#38bdf8",cases8d:"#f43f5e",standards:"#e879f9",concept:"#f3e8ff",tag:"#c084fc",ghost:"#4b5563",post:"#a855f7",note:"#38bdf8",idea:"#f43f5e",draft:"#e879f9"},modules:{qp:{color:"#a855f7",filter:"hue-rotate(265deg) saturate(1.6) brightness(1.15)"},wi:{color:"#38bdf8",filter:"hue-rotate(180deg) saturate(1.7) brightness(1.2)"},cases8d:{color:"#f43f5e",filter:"hue-rotate(335deg) saturate(1.7) brightness(1.15)"},standards:{color:"#e879f9",filter:"hue-rotate(285deg) saturate(1.6) brightness(1.2)"},concepts:{color:"#ddd6fe",filter:"hue-rotate(240deg) saturate(1.1) brightness(1.25)"},works:{color:"#38bdf8",filter:"hue-rotate(180deg) saturate(1.7)"},methods:{color:"#a855f7",filter:"hue-rotate(265deg) saturate(1.6)"},ideas:{color:"#f43f5e",filter:"hue-rotate(335deg) saturate(1.7)"},drafts:{color:"#e879f9",filter:"hue-rotate(285deg) saturate(1.6)"}},media:{orb:gu("media/orb.mp4"),orbPoster:gu("media/orb.jpg"),jelly:gu("media/jellyfish.mp4"),jellyPoster:gu("media/jellyfish.jpg")},pulse:{out:["#faf5ff","#c084fc"],in:["#ffffff","#7e22ce"]},ring:["#c084fc","#581c87"],logo:["#c084fc","#a855f7","#e879f9","#4c1d95"],mini:{glow0:"#ffffff",core:"#c084fc",dot:"#f3e8ff",mutual:"#c084fc",pulseOut:"#faf5ff",pulseIn:"#7e22ce"},dust:["192,132,252","232,121,249","56,189,248","250,245,255"],canvas:{additive:!0,mutual:"192,132,252",mutualIn:"126,34,206",wiki:"232,121,249",link:"55,30,80",pulseOne:"192,132,252",label:"#f3e8ff",spark:["192,132,252","232,121,249","243,232,255"],glow:"88",light:"#ffffff"}}},sa=[X7["tech-blue"],X7["cyber-carbon"],X7["emerald-green"],X7["neon-violet"]];let zt="tech-blue";try{const o=localStorage.getItem("qms-os-qms-theme");o&&X7[o]&&(zt=o)}catch{}function km(){return zt}function Jm(o){if(X7[o]){zt=o;try{localStorage.setItem("qms-os-qms-theme",o)}catch{}return!0}return!1}function Xc(o=zt){return X7[o]||X7["tech-blue"]||X7["cyber-carbon"]}const Cu=new Proxy({},{get(o,m){return Xc(zt)[m]}}),Fm={core:{label:"知识中枢",en:"Core Hub"},folder:{label:"模块分类",en:"Category"},qp:{label:"体系程序",en:"Quality Procedure"},wi:{label:"作业规范",en:"Work Instruction"},cases8d:{label:"8D改善案例",en:"8D Case"},standards:{label:"标准与总表",en:"Standards & Forms"},concept:{label:"核心概念",en:"Core Concept"},tag:{label:"工序/标签",en:"Process Tag"},ghost:{label:"外部/待录规程",en:"External/Unresolved"}},b7=new Proxy(Fm,{get(o,m){const b=o[m];if(b)return{label:b.label,en:b.en,get color(){return Cu.kinds[m]||"#38bdf8"}}}}),Kc={contain:"模块归属",wiki:"规程引用",source:"前置依据",tag:"工序标签",mention:"核心条款",resonance:"双向共振"},I2={contain:"Contains",wiki:"Citation",source:"Basis",tag:"Stage",mention:"Clause",resonance:"Resonance"},K7=new Set(["qp","wi","cases8d","standards"]),G2=[{id:"f:qp",title:"体系程序(QP)",path:"01-体系程序(QP)",angle:180},{id:"f:wi",title:"作业规范(WI)",path:"02-作业规范(WI)",angle:145},{id:"f:cases8d",title:"8D改善案例",path:"03-8D改善案例",angle:0},{id:"f:standards",title:"标准与总表",path:"04-标准与总表",angle:35}],Tu=[{id:"qp",title:"体系程序",en:"Procedures",kind:"qp",folder:"f:qp",angle:180,icon:"methods",page:"library"},{id:"concepts",title:"体系图谱",en:"Concepts",kind:"concept",angle:-90,icon:"concept"},{id:"wi",title:"作业规范",en:"Instructions",kind:"wi",folder:"f:wi",angle:145,icon:"works",page:"drafts"},{id:"cases8d",title:"8D改善库",en:"8D Cases",kind:"cases8d",folder:"f:cases8d",angle:0,icon:"idea",page:"ideas"},{id:"standards",title:"标准与总表",en:"Standards",kind:"standards",folder:"f:standards",angle:35,icon:"draft"}],$m=o=>Tu.find(m=>m.kind===o?.kind)||null;function ug(){const o=new Map,m=d=>(o.has(d.id)||o.set(d.id,{tags:[],text:"",...d}),o.get(d.id)),b=new Map,s=(d,g,W,D=1)=>{if(!o.has(d)||!o.has(g)||d===g)return;const[G,B]=d<g?[d,g]:[g,d],K=G+"|"+B+"|"+W,n0=b.get(K)||{a:G,b:B,kind:W,ab:0,ba:0,w:0};d===G?n0.ab+=1:n0.ba+=1,n0.w=Math.max(n0.w,D),b.set(K,n0)};m({id:"core",kind:"core",title:Ou.workspace,path:"/",text:`${R0.company} 质量管理体系 QMS 受控知识网络`});for(const d of G2)m({...d,kind:"folder"}),s("core",d.id,"contain");const C=new Map;for(const d of Tn){const g=d.id,W=d.module,D=d.doc_code||"",G=d.doc_name||"",B=D?`${D} ${G}`:G,K=D||G,n0="f:"+d.module;if(m({id:g,kind:W,title:B,short:K,code:D,docName:G,rev:d.rev||"A.0",department:d.department||"品保部",npi_phase:d.npi_phase||"MP",citations:d.citations||[],tags:d.tags||[],summary:d.summary||"",body:d.body_snippet||"",rawFile:d.raw_file||"",folder:n0,path:`${d.module.toUpperCase()}/${B}`,text:`${D} ${G} ${d.department||""} ${d.summary||""} ${d.body_snippet||""}`}),o.has(n0)&&s(n0,g,"contain"),D){C.set(D.toUpperCase(),g);const v0=D.replace(/[-_.]/g,"").toUpperCase();v0&&C.set(v0,g)}}for(const d of Tn)for(const g of d.citations||[]){const W=g.toUpperCase(),D=W.replace(/[-_.]/g,"");let G=C.get(W)||C.get(D);if(!G){for(const[B,K]of C.entries())if(B.includes(D)||D.includes(B)){G=K;break}}if(G&&G!==d.id)s(d.id,G,"wiki");else if(!G){const B="ghost:"+W;m({id:B,kind:"ghost",title:W,short:W,code:W,path:`外部引用/待录入标准/${W}`,text:`未在本机受控库中直接录入的外部或上位标准: ${W}`}),s(d.id,B,"wiki")}}const A=new Map;for(const d of z2){const g="concept:"+d.name;m({id:g,kind:"concept",title:d.name,short:d.name,text:`${d.name} · 体系核心概念聚类（共关联 ${d.count} 份受控规程）`,terms:[d.name]}),s("core",g,"contain");for(const W of d.docs||[]){const D=C.get(W.toUpperCase())||C.get(W.replace(/[-_.]/g,"").toUpperCase());D&&(s(D,g,"mention"),A.set(D,[...A.get(D)||[],d.name]))}}const p=[...o.values()].filter(d=>K7.has(d.kind));for(let d=0;d<p.length;d++)for(let g=d+1;g<p.length;g++){const W=A.get(p[d].id)||[],D=A.get(p[g].id)||[],G=W.filter(B=>D.includes(B));G.length>=2&&(s(p[d].id,p[g].id,"resonance",G.length),s(p[g].id,p[d].id,"resonance",G.length))}const Q=[...o.values()],_=[...b.values()].map(d=>({...d,both:d.ab>0&&d.ba>0,s:d.ab?d.a:d.b,t:d.ab?d.b:d.a}));for(const d of Q)d.out=0,d.in=0,d.deg=0,d.mutual=0;const f=new Map(Q.map(d=>[d.id,d]));for(const d of _){const g=f.get(d.a),W=f.get(d.b);!g||!W||d.kind==="contain"||(g.deg++,W.deg++,d.both?(g.mutual++,W.mutual++,g.out++,W.out++,g.in++,W.in++):(f.get(d.s).out++,f.get(d.t).in++))}for(const d of Q)d.shared=A.get(d.id)||[];return{nodes:Q,links:_,index:f}}function x2(o,m){const b=new Map,s=A=>(A.dir==="mutual"?100:0)+A.link.w;for(const A of o.links){if(A.a!==m&&A.b!==m||A.kind==="contain")continue;const p=A.a===m?A.b:A.a,Q={id:p,link:A,dir:A.both?"mutual":A.s===m?"out":"back"},_=b.get(p);(!_||s(Q)>s(_))&&b.set(p,Q)}const C={out:[],back:[],mutual:[]};for(const A of b.values())C[A.dir].push({id:A.id,link:A.link});return C}function ng(o,m){const b=new Set([m,...o.links.filter(A=>A.a===m||A.b===m).map(A=>A.a===m?A.b:A.a)]),s=o.links.filter(A=>(A.a===m||A.b===m)&&(A.kind==="mention"||A.kind==="tag")).map(A=>A.a===m?A.b:A.a),C=new Map;for(const A of s)for(const p of o.links){if(p.a!==A&&p.b!==A)continue;const Q=p.a===A?p.b:p.a;b.has(Q)||!K7.has(o.index.get(Q)?.kind)||C.set(Q,[...C.get(Q)||[],o.index.get(A).title])}return[...C].sort((A,p)=>p[1].length-A[1].length).map(([A,p])=>({id:A,via:p}))}function P2(o){const m=o.nodes.filter(s=>K7.has(s.kind)),b=o.links.filter(s=>s.kind!=="contain");return{content:m.length,links:b.length,mutual:b.filter(s=>s.both).length,wiki:o.links.filter(s=>s.kind==="wiki").length,ghosts:o.nodes.filter(s=>s.kind==="ghost").length,lonely:m.filter(s=>!b.some(C=>C.a===s.id||C.b===s.id)).length,backlinked:m.filter(s=>s.in>0).length}}function eg(o){let m=0;for(const b of o)m=m*31+b.charCodeAt(0)>>>0;return()=>(m=m*1664525+1013904223>>>0)/4294967296}const W2=o=>o*Math.PI/180;function tg(o){const m=o.nodes,b=o.index,s=p=>{const Q=b.get(p);if(!Q)return null;if(Q.kind==="concept")return[0,-1];const _=G2.find(f=>f.id===Q.folder||f.id===p);return _?[Math.cos(W2(_.angle)),Math.sin(W2(_.angle))]:null};for(const p of m){const Q=eg(p.id),_=s(p.id),f=p.kind==="core"?0:p.kind==="folder"?210:K7.has(p.kind)?330:420,g=(_?Math.atan2(_[1],_[0]):Q()*Math.PI*2)+(Q()-.5)*(_?1.1:6.28);p.x=Math.cos(g)*f*(.8+Q()*.4),p.y=Math.sin(g)*f*(.8+Q()*.4),p.vx=0,p.vy=0}const C={contain:120,wiki:95,source:90,tag:52,mention:135,resonance:170},A={contain:.05,wiki:.06,source:.08,tag:.09,mention:.018,resonance:.006};for(let p=0;p<450;p++){const Q=1-p/450;for(let _=0;_<m.length;_++)for(let f=_+1;f<m.length;f++){const d=m[_],g=m[f];let W=g.x-d.x,D=g.y-d.y,G=W*W+D*D||.01;const K=(d.kind==="tag"||g.kind==="tag"?900:2400)*(d.kind==="folder"&&g.kind==="folder"?3:1)/G*Q,n0=Math.sqrt(G);W/=n0,D/=n0,d.vx-=W*K,d.vy-=D*K,g.vx+=W*K,g.vy+=D*K}for(const _ of o.links){const f=b.get(_.a),d=b.get(_.b);if(!f||!d)continue;const g=d.x-f.x,W=d.y-f.y,D=Math.hypot(g,W)||.01,G=(D-C[_.kind])*(A[_.kind]||.05)*Q;f.vx+=g/D*G,f.vy+=W/D*G,d.vx-=g/D*G,d.vy-=W/D*G}for(const _ of m){const f=s(_.id);if(_.kind==="folder"&&f?(_.vx+=(f[0]*230-_.x)*.04,_.vy+=(f[1]*230-_.y)*.04):f&&K7.has(_.kind)?(_.vx+=(f[0]*380-_.x)*.006,_.vy+=(f[1]*380-_.y)*.006):f&&(_.vx+=(f[0]*300-_.x)*.004,_.vy+=(f[1]*300-_.y)*.004),_.vx-=_.x*.002,_.vy-=_.y*.002,_.kind==="core"){_.x=0,_.y=0,_.vx=0,_.vy=0;continue}_.x+=_.vx,_.y+=_.vy,_.vx*=.55,_.vy*=.55}}return Object.fromEntries(m.map(p=>[p.id,[p.x,p.y*.82]]))}function R2(o,m,b){const s=m.trim(),C=o.nodes.filter(_=>K7.has(_.kind)),A=o.links.filter(_=>_.kind!=="contain"),p=_=>{const f=o.index.get(_);return f?f.code?`[${f.code}] ${f.docName||f.short}`:f.short||f.title:_},Q=[];if(/孤立|未引用|没连接|断开/.test(s)){const _=C.filter(d=>!A.some(g=>g.a===d.id||g.b===d.id)),f=C.filter(d=>d.in===0&&!_.includes(d));Q.push({tone:"warn",title:"孤立规程文件",en:"Isolated Docs",text:_.length?`${_.length} 份规程除了模块目录外没有被其他规程引用。`:"全部受控文件均参与引用网络。",items:_.map(d=>d.id)}),Q.push({tone:"info",title:"无反链规程",en:"No Backlinks",text:`${f.length} 份文件仅单向引用其他规程，尚未作为上位规程被下级引用。`,items:f.slice(0,8).map(d=>d.id)})}else if(/双向|互链|共振|互相/.test(s)){const _=A.filter(f=>f.both).sort((f,d)=>d.w-f.w);Q.push({tone:"gold",title:"体系双向共振",en:"Resonance",text:`共发现 ${_.length} 组规程：共同覆盖 ≥2 个质量体系核心概念，具备强协同约束。`,pairs:_.slice(0,8).map(f=>[f.a,f.b,f.kind==="resonance"?`共涉 ${f.w} 个核心概念`:Kc[f.kind]])})}else if(/外部|待录入|未受控|断链|ghost/i.test(s)){const _=o.nodes.filter(f=>f.kind==="ghost");Q.push({tone:"warn",title:"外部引用/待录入标准",en:"External/Unresolved",text:`${_.length} 项标准由内部规程引用，但尚未在本机受控库中直接录入全文。`,items:_.map(f=>f.id)})}else if(/核心|枢纽|中心|最重要|引用最多|反链最多/.test(s)){const _=[...C].sort((d,g)=>g.in+g.mutual-(d.in+d.mutual)||g.deg-d.deg).slice(0,6);Q.push({tone:"gold",title:"核心枢纽规程",en:"Key Procedures",text:"按受控引用频次与跨规程共振度排序。",items:_.map(d=>d.id),meta:_.map(d=>`${d.deg} 次关联引用`)});const f=o.nodes.filter(d=>d.kind==="concept").sort((d,g)=>g.deg-d.deg).slice(0,5);Q.push({tone:"info",title:"高频核心概念",en:"Top Concepts",text:f.map(d=>`${d.title}（${d.deg}份）`).join("、"),items:f.map(d=>d.id)})}else if(/8d|改善|异常|闭环/.test(s.toLowerCase())){const _=C.filter(d=>d.kind==="cases8d"),f=C.filter(d=>(d.text||"").includes("8D")||(d.text||"").includes("异常")||(d.text||"").includes("不合格品"));Q.push({tone:"gold",title:"8D 改善案例库",en:"8D Cases",text:`已收录 ${_.length} 份闭环改善报告，并关联相关异常处理规程。`,items:_.map(d=>d.id)}),Q.push({tone:"info",title:"关联异常管理规程",en:"Exception Procedures",text:"涉及不合格品、停线与纠正预防措施。",items:f.slice(0,6).map(d=>d.id)})}else if(/iqc|进料|检验|抽样/.test(s.toLowerCase())){const _=C.filter(f=>/进料|检验|iqc|抽样/i.test(f.title+" "+f.text));Q.push({tone:"gold",title:"进料检验 (IQC) 规程链",en:"IQC Chain",text:`命中 ${_.length} 份进料检验相关受控规程。`,items:_.slice(0,8).map(f=>f.id),meta:_.slice(0,8).map(f=>`Rev ${f.rev} · ${f.department}`)})}else if(/物料|认证|供方|供应商|导入/.test(s)){const _=C.filter(f=>/物料|认证|供方|供应商|导入/i.test(f.title+" "+f.text));Q.push({tone:"gold",title:"物料与供应商认证规程链",en:"Material Qualification",text:`命中 ${_.length} 份新物料与供方认证受控规程。`,items:_.slice(0,8).map(f=>f.id),meta:_.slice(0,8).map(f=>`${f.code||""} Rev ${f.rev||"A.0"}`)})}else if(/停线|升级|应急/.test(s)){const _=C.filter(f=>/停线|升级|应急|异常/i.test(f.title+" "+f.text));Q.push({tone:"gold",title:"制程停线与异常升级规程",en:"Line Stop & Escalation",text:`命中 ${_.length} 份停线与异常处理受控规程。`,items:_.slice(0,8).map(f=>f.id),meta:_.slice(0,8).map(f=>`${f.code||""} Rev ${f.rev||"A.0"}`)})}else{const f=(s.replace(/[？?。，,！!]/g," ").replace(/作业指导书|控制程序|操作规程|作业规范|指导书|程序|规程|规范|办法|标准|文件|流程|机制/g," ").trim()||s).split(/\s+/).filter(D=>D.length>=1),d=new Set(f);for(const D of f)if(/[\u4e00-\u9fa5]/.test(D)&&D.length>=2)for(let G=0;G<=D.length-2;G++)d.add(D.slice(G,G+2)),G<=D.length-3&&d.add(D.slice(G,G+3));const g=[...d],W=o.nodes.filter(D=>D.kind!=="core").map(D=>{const G=(D.title+" "+(D.text||"")+" "+(D.path||"")).toLowerCase(),B=D.code&&g.some(n0=>D.code.toLowerCase().includes(n0.toLowerCase())),K=g.reduce((n0,v0)=>{const h0=v0.toLowerCase();return n0+(B?5:0)+(D.title.toLowerCase().includes(h0)?3:G.includes(h0)?1:0)},0);return{n:D,score:K}}).filter(D=>D.score>2).sort((D,G)=>G.score-D.score).slice(0,8);Q.push(W.length?{tone:"info",title:`与「${s}」相关的受控规程`,en:"Search Results",text:`在文件编号、标题与条款正文中检索到 ${W.length} 份匹配规程。`,items:W.map(D=>D.n.id),meta:W.map(D=>`${D.n.code||""} Rev ${D.n.rev||"A.0"}`)}:{tone:"warn",title:"未检索到受控规程",en:"No Match",text:"提示：可输入 IQC、8D改善、制程检验、工程变更、新物料认证、停线标准等关键字。",items:[]})}return b&&Q.forEach(_=>{_.items&&_.items.sort((f,d)=>(d===b)-(f===b))}),Q.map(_=>({..._,names:(_.items||[]).map(p)}))}const Q2={works:"M4 5h16v14H4ZM4 9h16M9 13l2 2 4-4",concept:"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",methods:"M5 4h10l4 4v12H5ZM15 4v4h4M8 12h8M8 16h5",idea:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V17h5v-1.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z",draft:"m14 4 6 6M4 20l4-1L20 7a2 2 0 0 0-4-4L4 15ZM12 20h9",home:"M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z",back:"M15 18 9 12l6-6",chevron:"m9 5 7 7-7 7",arrow:"M4 12h16m-6-6 6 6-6 6",outlink:"M7 17 17 7M9 7h8v8",close:"m6 6 12 12M6 18 18 6",plus:"M12 5v14M5 12h14",send:"M5 12h13M13 6l6 6-6 6",search:"M21 21l-5-5M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",info:"M12 11v6M12 7h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z",replay:"M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5",pause:"M8 5v14M16 5v14",play:"m8 5 11 7-11 7Z",spark:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z",link:"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",agent:"M12 3a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V7a4 4 0 0 1 4-4ZM10 10h.01M14 10h.01",trash:"M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3",check:"m5 12 4 4L19 6",eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",save:"M5 3h14v19l-7-4-7 4Z",user:"M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",pulse:"M3 12h4l2-6 4 12 2-6h6",grid:"M4 4h7v7H4ZM13 4h7v7h-7ZM4 13h7v7H4ZM13 13h7v7h-7Z",file:"M6 3h8l4 4v14H6ZM14 3v5h4",palette:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.4-.44-.61-.99-.61-1.58 0-1.38 1.12-2.5 2.5-2.5H17c2.76 0 5-2.24 5-5 0-4.96-4.49-8.75-10-8.75ZM6.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm3-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm3.5 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z",chevronDown:"m6 9 6 6 6-6"};function s0({name:o,size:m=18,...b}){return r.createElement("svg",{width:m,height:m,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...b},r.createElement("path",{d:Q2[o]||Q2.file}))}function lg({graph:o,layout:m,live:b,reduced:s,theme:C}){const A=R.useRef(null);return R.useEffect(()=>{const p=Cu.canvas,Q=p.additive?"lighter":"source-over",_=A.current,f=_.getContext("2d");let d,g=0,W=0,D=1;const G=()=>{D=Math.min(window.devicePixelRatio||1,2),g=_.clientWidth,W=_.clientHeight,_.width=g*D,_.height=W*D};G();const B=new ResizeObserver(G);B.observe(_);const K=new Map([["core",0]]),n0=["core"];for(;n0.length;){const k=n0.shift();for(const H of o.links){const A0=H.a===k?H.b:H.b===k?H.a:null;A0&&!K.has(A0)&&(K.set(A0,K.get(k)+1),n0.push(A0))}}const v0=o.nodes.filter(k=>k.kind!=="core").map((k,H)=>({n:k,p:m[k.id],d:K.get(k.id)??4,seed:(H*9301+49297)%233280/233280,r:k.kind==="folder"?3.2:k.kind==="tag"?1.6:k.kind==="concept"?2.4:k.kind==="ghost"?2:2.2+Math.min(k.deg,14)*.22})),h0=new Map(v0.map(k=>[k.n.id,k])),M0=o.links.filter(k=>h0.has(k.a)&&h0.has(k.b)).map((k,H)=>({l:k,A:h0.get(k.a),B:h0.get(k.b),seed:H*7919%997/997})),l0=Array.from({length:90},(k,H)=>({a:H/90*Math.PI*2+Math.sin(H*12.9)*.3,v:.35+H*37%100/100,s:1+H*13%7/3})),o0=k=>{const H=b.current,A0=Math.max(0,(k-H.t0)/1e3);f.setTransform(D,0,0,D,0,0),f.clearRect(0,0,g,W);const I0=H.orb.x,E0=H.orb.y,a0=H.orb.s/440*Math.min(g*.37/380,W*.36/300)*(H.stage==="hub"?1:.55),Y=H.hover,O=Y?new Set(o.nodes.filter(x=>x.kind===Y).map(x=>x.id)):null;if(O)for(const x of o.links)O.has(x.a)&&x.kind!=="contain"&&O.add(x.b);const F=s?1:Math.min(1,Math.max(0,(A0-.35)/2.2)),V=x=>s?1:Math.min(1,Math.max(0,(A0-.4-x.d*.32-x.seed*.35)/.9)),X=x=>{const i0=V(x),d0=1-Math.pow(1-i0,3),Q0=s||H.paused?0:Math.sin(A0*.5+x.seed*6.28)*3;return[I0+x.p[0]*a0*d0+Q0,E0+x.p[1]*a0*d0+Math.cos(A0*.4+x.seed*9)*(s||H.paused?0:2.5),i0]};for(const x of v0)x.s=X(x);if(!s&&A0<2.2){const x=A0/2.2;f.globalCompositeOperation=Q;for(const i0 of l0){const d0=(40+i0.v*420)*(1-Math.pow(1-x,2.4))*(H.orb.s/440),Q0=Math.max(0,1-x)*.9,h=I0+Math.cos(i0.a)*d0,P=E0+Math.sin(i0.a)*d0,j=f.createLinearGradient(I0+Math.cos(i0.a)*d0*.6,E0+Math.sin(i0.a)*d0*.6,h,P);j.addColorStop(0,`rgba(${p.spark[0]},0)`),j.addColorStop(1,`rgba(${p.spark[1]},${Q0})`),f.strokeStyle=j,f.lineWidth=i0.s,f.beginPath(),f.moveTo(I0+Math.cos(i0.a)*d0*.6,E0+Math.sin(i0.a)*d0*.6),f.lineTo(h,P),f.stroke(),f.fillStyle=`rgba(${p.spark[2]},${Q0})`,f.beginPath(),f.arc(h,P,i0.s*.9,0,7),f.fill()}f.globalCompositeOperation="source-over"}for(const x of M0){const[i0,d0,Q0]=x.A.s,[h,P,j]=x.B.s,q=Math.min(Q0,j)*F;if(q<=.02)continue;const t0=!O||O.has(x.l.a)&&O.has(x.l.b);let r0=(x.l.both?.32:x.l.kind==="wiki"?.3:x.l.kind==="contain"?.16:.11)*q*(t0?1:.25)*(O&&t0?2.2:1);if(f.strokeStyle=x.l.both?`rgba(${p.mutual},${r0})`:x.l.kind==="wiki"?`rgba(${p.wiki},${r0})`:`rgba(${p.link},${r0})`,f.lineWidth=x.l.both?.6+Math.min(x.l.w,6)*.22:.7,f.beginPath(),f.moveTo(i0,d0),x.l.both){const m0=(i0+h)/2+(P-d0)*.12,U=(d0+P)/2-(h-i0)*.12;f.quadraticCurveTo(m0,U,h,P)}else f.lineTo(h,P);f.stroke()}if(!s&&!H.paused&&F>.6){f.globalCompositeOperation=Q;for(const x of M0){if(x.l.kind==="contain"||x.l.kind==="tag")continue;const i0=!O||O.has(x.l.a)&&O.has(x.l.b),d0=x.l.both?.16:.12,Q0=x.l.both?[0,1]:[0];for(const h of Q0){const P=(A0*d0+x.seed+h*.5)%1,j=h===0?x.l.s===x.l.a:x.l.s!==x.l.a,[q,t0]=j?x.A.s:x.B.s,[r0,m0]=j?x.B.s:x.A.s;let U=q+(r0-q)*P,$=t0+(m0-t0)*P;if(x.l.both){const q0=(x.A.s[0]+x.B.s[0])/2+(x.B.s[1]-x.A.s[1])*.12,w0=(x.A.s[1]+x.B.s[1])/2-(x.B.s[0]-x.A.s[0])*.12,g0=j?P:1-P;U=(1-g0)**2*x.A.s[0]+2*(1-g0)*g0*q0+g0*g0*x.B.s[0],$=(1-g0)**2*x.A.s[1]+2*(1-g0)*g0*w0+g0*g0*x.B.s[1]}const Y0=Math.sin(P*Math.PI)*(i0?.95:.2),X0=f.createRadialGradient(U,$,0,U,$,6),cu=x.l.both?h?p.mutualIn:p.mutual:p.pulseOne;X0.addColorStop(0,`rgba(${cu},${Y0})`),X0.addColorStop(1,`rgba(${cu},0)`),f.fillStyle=X0,f.beginPath(),f.arc(U,$,6,0,7),f.fill()}}f.globalCompositeOperation="source-over"}for(const x of v0){const[i0,d0,Q0]=x.s;if(Q0<=0)continue;const h=!O||O.has(x.n.id),P=b7[x.n.kind].color,j=Q0*(h?1:.22),q=x.r*(O&&h?1.35:1);f.globalAlpha=j,f.globalCompositeOperation=Q;const t0=f.createRadialGradient(i0,d0,0,i0,d0,q*5);if(t0.addColorStop(0,P+p.glow),t0.addColorStop(1,P+"00"),f.fillStyle=t0,f.beginPath(),f.arc(i0,d0,q*5,0,7),f.fill(),f.globalCompositeOperation="source-over",x.n.kind==="ghost")f.setLineDash([2,2]),f.strokeStyle=P,f.lineWidth=1,f.beginPath(),f.arc(i0,d0,q+1,0,7),f.stroke(),f.setLineDash([]);else{const r0=f.createRadialGradient(i0-q*.35,d0-q*.35,0,i0,d0,q);r0.addColorStop(0,p.light),r0.addColorStop(.45,P),r0.addColorStop(1,P+"aa"),f.fillStyle=r0,f.beginPath(),f.arc(i0,d0,q,0,7),f.fill()}H.stage==="hub"&&Q0>.9&&(O?h&&x.n.kind!=="tag":x.n.kind==="concept")&&(f.globalAlpha=j*(O?.9:.42),f.fillStyle=p.label,f.font=`${O?11:10}px -apple-system, "PingFang SC", sans-serif`,f.fillText((x.n.short||x.n.title).slice(0,14),i0+q+5,d0+3.5)),f.globalAlpha=1}};let w=!1;const J=k=>{d=requestAnimationFrame(J);try{o0(k)}catch(H){w||(w=!0,console.error(H))}};return d=requestAnimationFrame(J),()=>{cancelAnimationFrame(d),B.disconnect()}},[o,m,b,s,C]),r.createElement("canvas",{ref:A,className:"network-canvas","aria-hidden":"true"})}const ag=(o,m=0)=>o==null||Number.isNaN(o)?"—":Number(o).toLocaleString("zh-CN",{minimumFractionDigits:m,maximumFractionDigits:m}),O2=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function da({value:o,decimals:m=0,suffix:b=""}){if(typeof o=="string")return r.createElement(r.Fragment,null,o);const[s,C]=R.useState(O2()?o:0);return R.useEffect(()=>{if(o==null||O2()||typeof o=="string"){C(o);return}let A;const p=performance.now(),Q=_=>{const f=Math.min(1,(_-p)/1e3);C(o*(1-Math.pow(1-f,3))),f<1&&(A=requestAnimationFrame(Q))};return A=requestAnimationFrame(Q),()=>cancelAnimationFrame(A)},[o]),r.createElement(r.Fragment,null,ag(s,m),o!=null&&b)}function rg({label:o,en:m,value:b,decimals:s=1,suffix:C="%",level:A,delta:p,deltaEn:Q}){return r.createElement("section",{className:"an-metric"},r.createElement("header",null,r.createElement("span",null,o," ",r.createElement("em",null,m)),A&&r.createElement("b",{className:`lvl lvl-${A[2]}`},A[0]," ",r.createElement("em",null,A[1]))),r.createElement("div",{className:"an-metric-body"},r.createElement("strong",null,r.createElement(da,{value:b,decimals:s,suffix:C})),p&&r.createElement("small",{className:p.startsWith("-")?"down":"up"},p,r.createElement("em",null,Q))))}function cg({tiles:o}){return r.createElement("div",{className:"an-tiles"},o.map(([m,b,s,C,A],p)=>r.createElement("div",{className:"an-tile",key:s,style:{animationDelay:200+p*70+"ms"}},r.createElement("span",{className:"t-icon"},r.createElement(s0,{name:m,size:16})),r.createElement("strong",null,typeof b=="number"?r.createElement(da,{value:b,decimals:A||0}):b),r.createElement("p",null,s,r.createElement("em",null,C)))))}function Y2({graph:o,id:m,onGo:b,sub:s}){const C=o.index.get(m);if(!C)return null;const A=K7.has(C.kind)||C.kind==="concept",p=C.code?`[${C.code}] ${C.docName||C.short}`:C.short||C.title,Q=r.createElement(r.Fragment,null,p,s&&r.createElement("small",null,s));return A?r.createElement("button",{className:"chip",style:{"--kc":b7[C.kind]?.color||"#ace0cf"},onClick:()=>b(m),title:C.title},Q):r.createElement("span",{className:`chip static ${C.kind==="ghost"?"ghost":""}`,style:{"--kc":b7[C.kind]?.color||"#70746f"},title:C.title},Q)}function ig({graph:o,node:m,onGo:b}){const s=R.useMemo(()=>x2(o,m.id),[o,m.id]),C=R.useMemo(()=>ng(o,m.id).slice(0,6),[o,m.id]),A=[["双向共振","Mutual Resonance","⇄",s.mutual.sort((p,Q)=>Q.link.w-p.link.w),p=>p.link.kind==="resonance"?`${p.link.w} 概念共振`:Kc[p.link.kind]],["前置引用规程","Outgoing Citations","→",s.out,p=>I2[p.link.kind]],["反向支撑规程","Referenced By","←",s.back,p=>I2[p.link.kind]],["二度关联规程","Latent Related","⋯",C,p=>"via "+p.via.slice(0,2).join("、")]].filter(p=>p[3].length);return r.createElement("section",{className:"an-section"},r.createElement("h3",null,"双向体系引用链 ",r.createElement("em",null,"Evidence linkages")),A.map(([p,Q,_,f,d])=>r.createElement("div",{className:"link-group",key:p},r.createElement("p",null,r.createElement("i",null,_),p," ",r.createElement("em",null,Q),r.createElement("b",null,f.length)),r.createElement("div",{className:"chip-row"},f.slice(0,14).map(g=>r.createElement(Y2,{key:g.id,graph:o,id:g.id,onGo:b,sub:d(g)})),f.length>14&&r.createElement("span",{className:"chip static more"},"+",f.length-14)))))}function og({items:o}){return!o||!o.length?null:r.createElement("section",{className:"an-section"},r.createElement("h3",null,r.createElement(s0,{name:"spark",size:14}),"核心条款判定与要点 ",r.createElement("em",null,"Mandatory clauses")),o.map(([m,b,s,C],A)=>r.createElement("article",{key:A,className:`insight tone-${C||"info"}`,style:{animationDelay:380+A*90+"ms"}},r.createElement("h4",null,m," ",r.createElement("em",null,b)),r.createElement("p",null,s))))}function sg({graph:o,node:m,onGo:b}){const[s,C]=R.useState(""),[A,p]=R.useState(null);return r.createElement("div",{className:"an-ask"},A&&r.createElement("div",{className:"an-ask-res"},A.map((Q,_)=>r.createElement("div",{key:_,className:`ask-card mini tone-${Q.tone}`},r.createElement("h4",null,Q.title," ",r.createElement("em",null,Q.en)),r.createElement("p",null,Q.text),Q.items?.length>0&&r.createElement("div",{className:"chip-row"},Q.items.slice(0,6).map(f=>r.createElement(Y2,{key:f,graph:o,id:f,onGo:b})))))),r.createElement("form",{onSubmit:Q=>{Q.preventDefault(),s.trim()&&p(R2(o,s,m.id))}},r.createElement("input",{value:s,onChange:Q=>C(Q.target.value),placeholder:"追问本份规程的执行细节…","aria-label":"追问本份规程"}),r.createElement("button",{"aria-label":"提交"},r.createElement(s0,{name:"send",size:15}))),r.createElement("div",{className:"an-ask-foot"},r.createElement("span",null,r.createElement(s0,{name:"agent",size:13}),"QMS 体系 ",r.createElement("em",null,"QMS OS QMS")),r.createElement("span",null,r.createElement(s0,{name:"spark",size:13}),"本地规则匹配 ",r.createElement("em",null,"Local Rules"))))}const fg=(o,m)=>(o.shared||[]).filter(b=>(m.shared||[]).includes(b));function dg(o,m){const b=o.nodes.filter(d=>K7.has(d.kind)),s=x2(o,m.id),C={out:(m.out||0)-(m.mutual||0),back:(m.in||0)-(m.mutual||0),both:m.mutual||0},A=[...s.mutual].sort((d,g)=>g.link.w-d.link.w)[0],p=A&&o.index.get(A.id),Q=p?[["双向共振规程","Strongest resonance",`与「${p.docName||p.short||p.title}」互相呼应，共同支撑：${fg(m,p).join("、")||Kc[A.link.kind]}。`,"gold"]]:[],_=()=>{const d=100*b.filter(D=>D.deg<=m.deg).length/Math.max(1,b.length),g=b.reduce((D,G)=>D+G.deg,0)/Math.max(1,b.length),W=m.deg-g;return{label:"体系引用度",en:"Connectivity",value:d,decimals:0,level:d>=80?["核心枢纽","Hub","high"]:d>=50?["重点程序","Active","mid"]:["常规工序","Standard","low"],delta:`${W>=0?"+":""}${W.toFixed(1)} 条`,deltaEn:W>=0?"高于均值":"低于均值"}};if(m.kind==="qp"||m.kind==="wi"){const d=m.kind==="qp";return{badge:[`Rev ${m.rev||"A.0"} · 现行有效 100%`,"Controlled Valid"],status:`归口部门: ${m.department||"品保部"} · 阶段: ${m.npi_phase||"MP"} · 受控原件: ${m.rawFile||"台账存档"}`,metric:_(),tiles:[["file",m.code||(d?"QP":"WI"),"受控编号","Code"],["folder",m.department||"品保部","归口部门","Dept"],["outlink",s.out.length,"引用规程","Outgoing"],["back",s.back.length,"反链支撑","Referenced"],["link",C.both,"双向共振","Mutual"]],insights:[["核心条款摘要","Clause summary",m.summary||"经体系台账审核，该规程符合 ISO 9001:2015 及 IATF 16949 受控标准。","info"],...Q,["涉及体系概念","Concepts",m.shared&&m.shared.length?m.shared.join("、"):"常规受控程序","info"]]}}if(m.kind==="cases8d")return{badge:["8D 改善闭环 100%","Closed 100%"],status:`责任部门: ${m.department||"品保部"} · 归档案例: ${m.rawFile||"8D改善报告"}`,metric:{label:"整改闭环率",en:"Closure Rate",value:100,decimals:0,level:["完全闭环","Closed","high"],delta:"已验证",deltaEn:"Verified"},tiles:[["check","100%","闭环状态","Status"],["folder",m.department||"品保部","主责部门","Dept"],["outlink",s.out.length,"防再发规程","Actions"],["link",C.both,"共振规程","Mutual"]],insights:[["根本原因与改善要点","5-Why & Actions",m.summary||"已完成根本原因分析、临时遏制措施与横向展开预防。","gold"],...Q]};if(m.kind==="standards")return{badge:["受控台账与总表","Master Ledger"],status:"涵盖《受控文件一览表》429项与《质量记录一览表》81项 · 100%现行有效",metric:{label:"受控有效率",en:"Effective Rate",value:100,decimals:0,level:["现行有效","Valid","high"],delta:"429 项",deltaEn:"Controlled"},tiles:[["file",429,"受控规程","Items"],["check",81,"质量记录","Records"],["outlink",s.out.length,"下级程序","Procedures"],["link",C.both,"体系共振","Mutual"]],insights:[["受控真源规范","Master truth","本台账为智造示范工厂全厂受控文件之最高法定真源仲裁依据。","gold"]]};const f=s.back.map(d=>o.index.get(d.id)).filter(Boolean);return{badge:["核心体系概念","Ontology Concept"],status:`共涉及 ${f.length} 份受控程序与作业指导书`,metric:{label:"覆盖率",en:"Coverage",value:100*f.length/Math.max(1,b.length),decimals:0,level:f.length>=6?["核心枢纽","Hub","high"]:["重点标准","Active","mid"],delta:`${f.length}/${b.length}`,deltaEn:"docs"},tiles:[["concept",f.length,"关联规程","Procedures"],["link",C.both,"双向共振","Resonances"]],insights:[["概念说明","Concept details",m.text||`涉及 ${m.title} 的所有跨部门协同受控规程。`,"info"]]}}function B2({graph:o,node:m,module:b,onGo:s,onAction:C,onClose:A,onPrintCard:p}){const[Q,_]=R.useState(!1),f=R.useMemo(()=>dg(o,m),[o,m]),d=b7[m.kind]?.color||"#ace0cf";return r.createElement("div",{className:"analysis glass",style:{"--kc":d},role:"region","aria-label":`${m.title} 的分析`},r.createElement("p",{className:"an-float"},"规程深度透视 ",r.createElement("em",null,"QMS Document Drawer")," · ",b?.title," ",b?.en),r.createElement("div",{className:"an-scroll"},r.createElement("header",{className:"an-head"},r.createElement("span",{className:"an-cat"},r.createElement("span",{className:"an-cat-icon"},r.createElement(s0,{name:b?.icon||"file",size:15})),b?.title,r.createElement("em",null,b?.en)),r.createElement("button",{className:"icon-btn",onClick:A,"aria-label":"关闭分析"},r.createElement(s0,{name:"close",size:15}))),r.createElement("div",{className:"an-title-row"},r.createElement("div",null,r.createElement("h2",null,m.docName||m.short||m.title),m.code&&r.createElement("p",{className:"an-full"},"受控编号: ",r.createElement("b",null,m.code)),m.rawFile&&r.createElement("p",{className:"an-raw-file"},"归档原件: ",r.createElement("code",null,m.rawFile)))),r.createElement("div",{className:"an-status"},r.createElement("span",{className:"badge-controlled"},f.badge[0]," ",r.createElement("em",null,f.badge[1])),r.createElement("p",null,f.status),r.createElement("div",{className:"an-actions-qms"},p&&K7.has(m.kind)&&r.createElement("button",{className:"pill primary small",onClick:()=>p(m)},r.createElement(s0,{name:"print",size:14})," 一键导出审厂证据卡 ",r.createElement("em",null,"Audit Card")),m.body&&r.createElement("button",{className:"pill ghost small",onClick:()=>_(!Q)},r.createElement(s0,{name:Q?"close":"spark",size:14}),Q?"收起条款正文":"展开全文条款预览"))),r.createElement(rg,{...f.metric}),r.createElement(cg,{tiles:f.tiles}),r.createElement(og,{items:f.insights}),Q&&m.body&&r.createElement("section",{className:"an-section an-full-body-section glass"},r.createElement("h3",null,r.createElement(s0,{name:"file",size:14}),"受控正文条款预览 ",r.createElement("em",null,"Clause Full Text")),r.createElement("div",{className:"an-full-body-content"},r.createElement("pre",null,m.body))),m.tags?.length>0&&r.createElement("section",{className:"an-section"},r.createElement("h3",null,"工序与体系标签 ",r.createElement("em",null,"Process Tags")),r.createElement("div",{className:"chip-row"},m.tags.map(g=>r.createElement("span",{key:g,className:"chip static",style:{"--kc":b7.tag.color}},"#",g)))),r.createElement(ig,{graph:o,node:m,onGo:s})),r.createElement(sg,{graph:o,node:m,onGo:s}))}const mg={qp:1,concepts:-1,wi:1,cases8d:-1,standards:-1},Lt=new Proxy({},{get(o,m){const b=Cu.modules[m];if(b)return{...b,flip:mg[m]||1}}}),gg=o=>({out:(o.out||0)-(o.mutual||0),back:(o.in||0)-(o.mutual||0),both:o.mutual||0}),Re=o=>o==null?"—":Number(o).toLocaleString("zh-CN");function H2(o,m){const b=Tu.find(C=>C.id===m);if(!b)return[];const s=o.nodes.filter(C=>C.kind===b.kind);return b.kind==="concept"?s.sort((C,A)=>(A.in||0)-(C.in||0)):s.sort((C,A)=>(A.code||"").localeCompare(C.code||"")||(A.in||0)-(C.in||0)),s}function yg(o,m){const b=H2(o,m.id),s={qp:()=>[Re(b.length),"份受控程序","procedures"],wi:()=>[Re(b.length),"份作业规范","instructions"],cases8d:()=>[Re(b.length),"份闭环改善","8D reports"],standards:()=>[Re(R0.controlledItems),"项台账受控","controlled items"],concepts:()=>[Re(b.reduce((C,A)=>C+(A.in||0),0)),"次条款引用","citations"]}[m.id]?.()||[Re(b.length),"份规程","items"];return{count:b.length,sub:s}}function hg(o){const m=gg(o);switch(o.kind){case"qp":return[["版本","Rev",o.rev||"A.0"],["归口","Dept",o.department||"品保部"],["↔","",m.both]];case"wi":return[["版本","Rev",o.rev||"A.0"],["工序","Stage",o.npi_phase||"MP"],["↔","",m.both]];case"cases8d":return[["结案","Closed","100%"],["责任","Owner",o.department||"品保部"],["↔","",m.both]];case"standards":return[["状态","Status","现行有效"],["台账","Items","429项"],["↔","",m.both]];case"concept":return[["引用规程","Docs",o.in||0],["双向共振","Resonance",m.both],["↔","",m.both]];default:return[["↔","",m.both]]}}const $u=(o,m,b)=>Math.max(m,Math.min(b,o));function U2(o,m){const{w:b,h:s}=o.size,C=o.stage,A=b<760,p=o.reduced?0:1,Q={orb:{},jelly:{},fan:null};if(C==="hub"){const _=A?$u(b*.56,180,280):$u(Math.min(b,s)*.5,250,440),f=A?s*.47:s*.53;Q.orb={x:b/2,y:f,s:_};const d=A?b*.36:Math.min(b*.36,540),g=A?s*.21:Math.min(s*.32,262);Tu.forEach((W,D)=>{const G=(W.angle+p*7*Math.sin(m*.17+D*1.7))*Math.PI/180,B=1+p*.04*Math.sin(m*.23+D);Q.jelly[W.id]={x:b/2+Math.cos(G)*d*B,y:f+Math.sin(G)*g*B+p*9*Math.sin(m*.9+D*2.1),s:A?92:$u(b*.12,120,184),o:1,tilt:p*6*Math.sin(m*.6+D)}})}else if(A){Q.orb={x:40,y:156,s:86},Tu.forEach((d,g)=>{const W=d.id===o.mod,D=w2(o.mod,d.id);Q.jelly[d.id]={x:104+D*(b-136)/4,y:152+p*4*Math.sin(m*.9+g*2),s:W?76:54,o:W?1:.55,tilt:p*3*Math.sin(m*.6+g)}});const _=o.items.length,f=$u((s-330)/Math.max(_-1,1),22,54);Q.fan={x:34,y0:286,gap:f}}else{const _=Math.max(124,b*.09),f=s*.53;Q.orb={x:_,y:f,s:178};const d=_+158,g=Math.min(122,(s-150)/5);Tu.forEach((K,n0)=>{const v0=K.id===o.mod,h0=w2(o.mod,K.id);Q.jelly[K.id]={x:d+(v0?16:0),y:f+(h0-2)*g+p*5*Math.sin(m*.9+n0*2),s:v0?128:92,o:v0?1:.6,tilt:p*3*Math.sin(m*.6+n0)}});const W=b-$u(b*.33,380,470)-44,D=o.items.length,G=Math.min(s-130,Math.max(0,D-1)*48),B=d+16+128*.5+10+168;Q.fan={x:Math.min(Math.max(W-290-70,B+50),W-280),y0:f-G/2,gap:D>1?G/(D-1):0}}return Q}function w2(o,m){const b=Tu.filter(A=>A.id!==o).map(A=>A.id),C=[b[0],b[1],o,b[2],b[3]].indexOf(m);return C<0?Tu.findIndex(A=>A.id===m):C}function Fu(o,m,b,s=62){const C=2*Math.sqrt(s);return o.v+=(-s*(o.x-m)-C*o.v)*b,o.x+=o.v*b,o.x}const F0=o=>({x:o,v:0}),Eg=Array.from({length:110},(o,m)=>({a:m*2.39996,v:.035+m*37%100/100*.06,o:m*.618034%1,w:(m%2?1:-1)*(.15+m%7*.05),s:.7+m%5*.32,b:.45+m%3*.25,ci:m})),Zc=new Map,pg=o=>{if(!Zc.has(o)){const m=new Image;m.src=o,Zc.set(o,m)}return Zc.get(o)};function bg(o){const{video:m,canvas:b}=o;if(!m||!b)return;const s=b.clientWidth,C=b.clientHeight;if(!s||!C)return;const A=Math.min(window.devicePixelRatio||1,2),p=Math.round(s*A),Q=Math.round(C*A),_=b.width!==p||b.height!==Q;_&&(b.width=p,b.height=Q);const f=m.readyState>=2&&m.videoWidth,d=f?m:pg(m.poster),g=f?m.videoWidth:d.naturalWidth,W=f?m.videoHeight:d.naturalHeight;if(!g||!W)return;const D=f?m.currentTime:-1;if(!_&&D===o.stamp&&f===o.ready)return;o.stamp=D,o.ready=f;const G=Math.max(p/g,Q/W),B=p/G,K=Q/G,n0=b.getContext("2d");n0.clearRect(0,0,p,Q),n0.drawImage(d,(g-B)/2,(W-K)/2,B,K,0,0,p,Q)}const oa=(o,m,b,s,C)=>{const A=1-C;return A*A*A*o+3*A*A*C*m+3*A*C*C*b+C*C*C*s};function vg({graph:o,items:m,onModule:b,onItem:s,live:C,sel:A,pageIndex:p=0,onPageChange:Q,totalCount:_=0}){const f=R.useRef(null),d=R.useRef(null),g=R.useRef({}),W=R.useRef({}),D=R.useRef({}),G=R.useRef({}),B=R.useRef({}),K=R.useRef([]),n0=R.useRef([]),v0=R.useRef([]),h0=R.useRef({}),M0=(w,J)=>k=>{(h0.current[w]||={})[J]=k},l0=R.useMemo(()=>Object.fromEntries(Tu.map(w=>[w.id,yg(o,w)])),[o]);R.useLayoutEffect(()=>{C.current.itemState=m.map(()=>null),C.current.fanStart=performance.now()},[m,C]),R.useEffect(()=>{let w,J=performance.now();const k=C.current.springs,H=E0=>{const a0=C.current,Y=Math.max(0,Math.min(1/30,(E0-J)/1e3));J=Math.max(J,E0),a0.paused||(a0.time+=Y);const O=a0.time,F=(E0-a0.t0)/1e3,V=U2(a0,O),X=a0.stage==="hub"&&!a0.reduced,x=X&&F<.15?V.orb.s*.35:V.orb.s,i0=Fu(k.orb.x,V.orb.x,Y),d0=Fu(k.orb.y,V.orb.y,Y),Q0=Fu(k.orb.s,x,Y,40),h=Fu(k.orb.o,X&&F<.1?0:1,Y,30);a0.orb={x:i0,y:d0,s:Q0},d.current&&(d.current.style.transform=`translate3d(${i0-Q0/2}px,${d0-Q0/2}px,0) scale(${Q0/460})`,d.current.style.opacity=$u(h,0,1));const P=f.current;if(P){const q=$u(Fu(k.dust,a0.stage==="hub"?.3:1,Y,18),0,1),t0=P.getContext("2d");if(t0.clearRect(0,0,1012,1012),!a0.reduced&&q>.02){const r0=Math.max(Q0/460,.2);t0.globalCompositeOperation="lighter";const m0=V.dust&&V.dust.length?V.dust:["56,189,248","96,165,250","14,165,233","224,242,254"];for(const U of Eg){const $=((O*U.v+U.o)%1+1)%1,Y0=150+$*340,X0=U.a+$*U.w,cu=506+Math.cos(X0)*Y0,q0=506+Math.sin(X0)*Y0*.96,w0=q*Math.pow(Math.max(0,Math.sin($*Math.PI)),1.3)*U.b,g0=U.s/r0*2.2,K0=m0[U.ci%m0.length],uu=t0.createRadialGradient(cu,q0,0,cu,q0,g0);uu.addColorStop(0,`rgba(${K0},${w0})`),uu.addColorStop(1,`rgba(${K0},0)`),t0.fillStyle=uu,t0.beginPath(),t0.arc(cu,q0,g0,0,7),t0.fill()}}}Tu.forEach((q,t0)=>{const r0=k.jelly[q.id],m0=V.jelly[q.id],U=X&&F<1+t0*.17,$=Fu(r0.x,U?i0:m0.x,Y),Y0=Fu(r0.y,U?d0:m0.y,Y),X0=Fu(r0.s,U?24:m0.s,Y),cu=Fu(r0.o,U?0:m0.o,Y,40),q0=Fu(r0.lo,X&&F<2+t0*.1?0:m0.o,Y,40);r0.cur={x:$,y:Y0,s:X0};const w0=g.current[q.id],g0=W.current[q.id],K0=D.current[q.id];if(w0&&(w0.style.transform=`translate3d(${$-X0/2}px,${Y0-X0*.375}px,0) scale(${X0/200})`,w0.style.opacity=$u(cu,0,1)),g0&&(g0.style.transform=`rotate(${m0.tilt}deg) scaleX(${Lt[q.id].flip})`),K0){const Z0=K0.offsetWidth,iu=K0.offsetHeight,ou=a0.stage==="hub",au=a0.size.w<760,wu=ou||au?$-Z0/2:$+X0*.5+10,_u=ou||au?Y0+X0*.36:Y0-iu/2;K0.style.transform=`translate3d(${wu}px,${_u}px,0)`,K0.style.opacity=$u(au&&!ou&&q.id!==a0.mod?0:q0,0,1),r0.label={x:wu,y:_u,w:Z0,h:iu}}const uu=G.current[q.id];if(uu){let Z0,iu,ou,au,wu,_u,u7,n7;if(a0.stage==="hub"){const Du=$-i0,d7=Y0-d0,Q7=Math.hypot(Du,d7)||1,Lu=Du/Q7,Kn=d7/Q7;Z0=i0+Lu*Q0*.2,iu=d0+Kn*Q0*.2,ou=$-Lu*X0*.22,au=Y0-Kn*X0*.1;const jn=26*Math.sin(O*.5+t0);wu=Z0+Du*.35-Kn*jn,_u=iu+d7*.35+Lu*jn,u7=Z0+Du*.7+Kn*jn,n7=iu+d7*.7-Lu*jn}else{Z0=i0+Q0*.3,iu=d0,ou=$-X0*.34,au=Y0;const Du=ou-Z0;wu=Z0+Du*.55,_u=iu,u7=ou-Du*.55,n7=au}const Nu=`M${Z0},${iu} C${wu},${_u} ${u7},${n7} ${ou},${au}`,e7=q.id===a0.mod||q.kind===a0.hover;uu.glow.setAttribute("d",Nu),uu.core.setAttribute("d",Nu);const Sn=$u(cu,0,1)*(a0.stage==="hub"||e7?1:.45);uu.glow.style.opacity=Sn*(e7?.9:.45),uu.core.style.opacity=Sn,(B.current[q.id]||[]).forEach((Du,d7)=>{if(!Du)return;const Q7=d7===2;let Lu=(O*(Q7?.23:.31)+d7*.5+t0*.17)%1;Q7&&(Lu=1-Lu),Du.setAttribute("cx",oa(Z0,wu,u7,ou,Lu)),Du.setAttribute("cy",oa(iu,_u,n7,au,Lu)),Du.style.opacity=a0.reduced||a0.paused?0:Sn*Math.sin(Lu*Math.PI)})}});const j=a0.mod&&k.jelly[a0.mod];if(V.fan&&j?.label){const q=a0.size.w<760,t0=q?j.label.x+j.label.w/2:j.label.x+j.label.w+6,r0=q?j.label.y+j.label.h+4:j.cur.y;m.forEach((m0,U)=>{a0.itemState[U]||(a0.itemState[U]={x:F0(t0),y:F0(r0),o:F0(0)});const $=a0.itemState[U],Y0=a0.reduced||E0-a0.fanStart>140+U*Math.min(80,1600/Math.max(m.length,1)),X0=V.fan.x,cu=V.fan.y0+U*V.fan.gap+(a0.reduced?0:Math.sin(O*.8+U*.9)*2),q0=Fu($.x,Y0?X0:t0,Y,70),w0=Fu($.y,Y0?cu:r0,Y,70),g0=Fu($.o,Y0?1:0,Y,50),K0=K.current[U];K0&&(K0.style.transform=`translate3d(${q0}px,${w0-15}px,0)`,K0.style.opacity=$u(g0,0,1));const uu=n0.current[U];if(uu){const Z0=q0-t0,iu=a0.reduced?0:Math.sin(O*1.1+U*.7)*7,ou=t0+Z0*.5,au=r0+iu,wu=q0-Z0*.45,_u=w0-iu*.5;uu.setAttribute("d",`M${t0},${r0} C${ou},${au} ${wu},${_u} ${q0},${w0}`);const u7=A===m0.id;uu.style.opacity=$u(g0,0,1)*(A?u7?1:.35:.8),uu.style.strokeWidth=u7?1.8:1,(v0.current[U]||[]).forEach((n7,Nu)=>{if(!n7)return;let e7=(O*(Nu?.27:.36)+U*.13+Nu*.5)%1;Nu&&(e7=1-e7),n7.setAttribute("cx",oa(t0,ou,wu,q0,e7)),n7.setAttribute("cy",oa(r0,au,_u,w0,e7)),n7.style.opacity=a0.reduced||a0.paused?0:$u(g0,0,1)*Math.sin(e7*Math.PI)*(A&&!u7?.3:1)})}})}for(const q of Object.values(h0.current))bg(q)};let A0=!1;const I0=E0=>{w=requestAnimationFrame(I0);try{H(E0)}catch(a0){A0||(A0=!0,console.error(a0))}};return w=requestAnimationFrame(I0),()=>cancelAnimationFrame(w)},[m,C,A]),R.useEffect(()=>{const w=()=>document.querySelectorAll(".scene video").forEach(J=>{C.current.paused||C.current.reduced||document.hidden?J.pause():J.play().catch(()=>{})});return C.current.syncVideo=w,w(),document.addEventListener("visibilitychange",w),()=>document.removeEventListener("visibilitychange",w)},[C]);const o0=C.current.stage==="hub";return r.createElement("div",{className:`scene stage-${C.current.stage}`},r.createElement("div",{className:"orb",ref:d,"aria-hidden":"true"},r.createElement("div",{className:"orb-halo"}),r.createElement("video",{className:"vsrc",ref:M0("orb","video"),src:Cu.media.orb,poster:Cu.media.orbPoster,muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"auto"}),r.createElement("canvas",{className:"vid",ref:M0("orb","canvas")}),r.createElement("canvas",{className:"orb-dust",ref:f,width:"1012",height:"1012"})),r.createElement("svg",{className:"threads","aria-hidden":"true"},r.createElement("defs",null,r.createElement("filter",{id:"thread-blur",x:"-20%",y:"-20%",width:"140%",height:"140%"},r.createElement("feGaussianBlur",{stdDeviation:"3.2"})),r.createElement("radialGradient",{id:"pulse-out"},r.createElement("stop",{offset:"0",stopColor:Cu.pulse.out[0]}),r.createElement("stop",{offset:".4",stopColor:Cu.pulse.out[1]}),r.createElement("stop",{offset:"1",stopColor:Cu.pulse.out[1],stopOpacity:"0"})),r.createElement("radialGradient",{id:"pulse-in"},r.createElement("stop",{offset:"0",stopColor:Cu.pulse.in[0]}),r.createElement("stop",{offset:".4",stopColor:Cu.pulse.in[1]}),r.createElement("stop",{offset:"1",stopColor:Cu.pulse.in[1],stopOpacity:"0"}))),Tu.map(w=>r.createElement("g",{key:w.id,style:{color:Lt[w.id].color}},r.createElement("path",{ref:J=>{G.current[w.id]={...G.current[w.id],glow:J}},className:"thread-glow",filter:"url(#thread-blur)"}),r.createElement("path",{ref:J=>{G.current[w.id]={...G.current[w.id],core:J}},className:"thread-core"}),[0,1,2].map(J=>r.createElement("circle",{key:J,r:J===2?4.5:5.5,fill:`url(#${J===2?"pulse-in":"pulse-out"})`,ref:k=>{(B.current[w.id]||=[])[J]=k}})))),m.map((w,J)=>r.createElement("g",{key:w.id,style:{color:b7[w.kind]?.color||"#ace0cf"}},r.createElement("path",{className:"fan-thread",ref:k=>{n0.current[J]=k}}),[0,1].map(k=>r.createElement("circle",{key:k,r:k?3.5:4.5,fill:`url(#${k?"pulse-in":"pulse-out"})`,ref:H=>{(v0.current[J]||=[])[k]=H}}))))),Tu.map(w=>{const J=l0[w.id],k=C.current.mod===w.id;return r.createElement(r.Fragment,{key:w.id},r.createElement("button",{className:`jelly ${k?"active":""}`,ref:H=>{g.current[w.id]=H},onClick:()=>b(w.id),onPointerEnter:()=>{C.current.hover=w.kind},onPointerLeave:()=>{C.current.hover=null},"aria-label":`${w.title} ${w.en}，${J.count} 份`},r.createElement("div",{className:"jelly-inner",ref:H=>{W.current[w.id]=H},style:{filter:Lt[w.id].filter}},r.createElement("video",{className:"vsrc",ref:M0(w.id,"video"),src:Cu.media.jelly,poster:Cu.media.jellyPoster,muted:!0,loop:!0,playsInline:!0,autoPlay:!0,preload:"auto",onLoadedMetadata:H=>{H.currentTarget.currentTime=Tu.indexOf(w)*1.37%6}}),r.createElement("canvas",{className:"vid",ref:M0(w.id,"canvas")}))),r.createElement("button",{className:`jelly-label ${k?"active":""} ${o0?"below":"side"}`,ref:H=>{D.current[w.id]=H},onClick:()=>b(w.id),tabIndex:-1,onPointerEnter:()=>{C.current.hover=w.kind},onPointerLeave:()=>{C.current.hover=null},style:{"--mod":Lt[w.id].color}},r.createElement("span",{className:"jl-icon"},r.createElement(s0,{name:w.icon,size:14})),r.createElement("span",{className:"jl-count"},J.count),r.createElement("span",{className:"jl-name"},w.title,r.createElement("em",null,w.en)),r.createElement("span",{className:"jl-sub"},J.sub[0]," ",J.sub[1]," ",r.createElement("em",null,J.sub[2]))))}),m.map((w,J)=>{const k=hg(w);return r.createElement("button",{key:w.id,className:`fan-item ${A===w.id?"active":""} kind-${w.kind}`,ref:H=>{K.current[J]=H},onClick:()=>s(w.id),style:{"--kc":b7[w.kind]?.color},title:`[${w.code||""}] ${w.docName||w.title} (Rev ${w.rev||"A.0"}) · ${w.department||""}`,"aria-label":`打开 ${w.title} 的分析`},r.createElement("span",{className:"fi-dot"}),r.createElement("span",{className:"fi-body"},r.createElement("span",{className:"fi-badge-row"},w.code&&r.createElement("span",{className:"fi-badge code"},w.code),w.rev&&r.createElement("span",{className:"fi-badge rev"},"Rev ",w.rev)),r.createElement("span",{className:"fi-title"},w.docName||w.short||w.title),r.createElement("span",{className:"fi-meta"},k.map(([H,A0,I0],E0)=>r.createElement("span",{key:E0,className:H==="↔"?"mutual":""},H,A0&&r.createElement("em",null,A0)," ",I0!==""&&r.createElement("b",null,I0))))))}))}function Ag({graph:o,onGo:m,onOpenAssistant:b}){const s=R.useMemo(()=>P2(o),[o]),[C,A]=R.useState(""),[p,Q]=R.useState(null),_=R.useRef(null),f=R.useRef(null),d=D=>{D.trim()&&Q({q:D,list:R2(o,D)})},g=D=>{if(clearInterval(_.current),f.current&&clearTimeout(f.current),window.matchMedia("(prefers-reduced-motion: reduce)").matches){A(D),d(D);return}let G=0;A(""),_.current=setInterval(()=>{G++,A(D.slice(0,G)),G>=D.length&&(clearInterval(_.current),f.current=setTimeout(()=>d(D),220))},45)};R.useEffect(()=>()=>{clearInterval(_.current),f.current&&clearTimeout(f.current)},[]);const W=[["受控规程","Controlled",R0.totalDocs],["体系双链","Citations",s.links],["双向共振","Resonance",s.mutual],["有效率","Effective",R0.effectiveRate]];return r.createElement("div",{className:"dock"},p&&r.createElement("section",{className:"ask-results glass","aria-live":"polite"},r.createElement("header",null,r.createElement("span",null,r.createElement(s0,{name:"spark",size:14}),"体系规程检索 ",r.createElement("em",null,"QMS Procedure Search")),r.createElement("button",{className:"pill ghost small",onClick:()=>b?.(p.q),title:"唤起 AI 审厂助手深度解析"},r.createElement(s0,{name:"agent",size:13}),"AI 审厂助手深度解析"),r.createElement("button",{className:"icon-btn","aria-label":"关闭分析",onClick:()=>Q(null)},r.createElement(s0,{name:"close",size:14}))),r.createElement("div",{className:"ask-cards"},p.list.map((D,G)=>r.createElement("article",{key:G,className:`ask-card tone-${D.tone}`,style:{animationDelay:G*90+"ms"}},r.createElement("h4",null,D.title," ",r.createElement("em",null,D.en)),r.createElement("p",null,D.text),D.items?.length>0&&r.createElement("div",{className:"chip-row"},D.items.slice(0,8).map((B,K)=>r.createElement("button",{key:B,className:"chip",style:{"--kc":b7[o.index.get(B)?.kind]?.color},onClick:()=>m(B)},D.names[K],D.meta?.[K]&&r.createElement("small",null,D.meta[K])))),D.pairs&&r.createElement("div",{className:"pair-list"},D.pairs.map(([B,K,n0],v0)=>r.createElement("button",{key:v0,onClick:()=>m(B)},r.createElement("span",null,o.index.get(B)?.short),r.createElement("i",null,"⇄"),r.createElement("span",null,o.index.get(K)?.short),r.createElement("small",null,n0)))))))),r.createElement("div",{className:"dock-panel glass"},r.createElement("div",{className:"dock-kpis"},W.map(([D,G,B])=>r.createElement("div",{key:D},r.createElement("span",null,D," ",r.createElement("em",null,G)),r.createElement("strong",null,B)))),r.createElement("form",{className:"ask",onSubmit:D=>{D.preventDefault(),C.trim()&&(b?b(C):d(C))}},r.createElement("input",{value:C,onChange:D=>A(D.target.value),placeholder:"检索受控规程编号、条款或按回车唤起 AI 审核助手…","aria-label":"检索受控规程"}),r.createElement("button",{className:"send","aria-label":"提交查询"},r.createElement(s0,{name:"send",size:16}))),r.createElement("div",{className:"dock-chips"},r.createElement("button",{className:"me",onClick:()=>b?.()},r.createElement(s0,{name:"agent",size:13}),"AI 审核助手 ",r.createElement("em",null,"Copilot")),["进料检验控制程序","制程异常8D处理","新物料认证流程","停线与升级机制"].map(D=>r.createElement("button",{key:D,onClick:()=>g(D)},D)))))}function Cg({graph:o,layout:m,focus:b,setFocus:s,onAction:C,onAbout:A,reduced:p,onOpenAssistant:Q,onPrintCard:_,theme:f,onNextTheme:d,themeName:g}){const W=R.useRef(null),[D,G]=R.useState({w:1280,h:760}),[B,K]=R.useState(!1),[n0,v0]=R.useState(0),{mod:h0,sel:M0}=b,l0=M0?"note":h0?"module":"hub",o0=R.useMemo(()=>H2(o,h0),[o,h0]),w=20,J=Math.ceil(o0.length/w),k=R.useMemo(()=>{if(o0.length<=22)return o0;const Y=n0*w;return o0.slice(Y,Y+w)},[o0,n0]);R.useEffect(()=>{v0(0)},[h0]);const H=R.useRef(null);if(!H.current){const Y=performance.now();H.current={t0:Y,time:0,stage:l0,mod:h0,items:k,size:D,reduced:p,paused:!1,hover:null,itemState:[],fanStart:Y,orb:{x:640,y:380,s:400},springs:{dust:F0(.3),orb:{x:F0(D.w/2),y:F0(D.h/2),s:F0(120),o:F0(0)},jelly:Object.fromEntries(Tu.map(F=>[F.id,{x:F0(D.w/2),y:F0(D.h/2),s:F0(20),o:F0(0),lo:F0(0)}]))}};let O=!1;try{O=!!sessionStorage.getItem("neural-intro-seen")}catch{}H.current.introSeen=p||O,H.current.introSeen&&(H.current.t0=Y-6e3)}Object.assign(H.current,{stage:l0,mod:h0,items:k,size:D,reduced:p,paused:B}),R.useLayoutEffect(()=>{const Y=W.current,O=()=>{const V=Y.clientWidth,X=Y.clientHeight,x=H.current,i0=x.springs;if(x.stage==="hub"&&performance.now()-x.t0<300){const d0=U2({...x,size:{w:V,h:X}},0).orb;Object.assign(i0.orb,{x:F0(d0.x),y:F0(d0.y)});for(const Q0 of Tu)Object.assign(i0.jelly[Q0.id],{x:F0(d0.x),y:F0(d0.y)});x.orb={...x.orb,x:d0.x,y:d0.y}}G({w:V,h:X})};O();const F=new ResizeObserver(O);return F.observe(Y),()=>F.disconnect()},[]),R.useEffect(()=>{try{sessionStorage.setItem("neural-intro-seen","1")}catch{}},[]),R.useEffect(()=>{H.current.syncVideo?.()},[B]),R.useEffect(()=>{const Y=O=>{O.key!=="Escape"||O.isComposing||document.querySelector(".veil")||(M0?s({mod:h0,sel:null}):h0&&s({mod:null,sel:null}))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[h0,M0,s]);const A0=R.useCallback(Y=>{const O=o.index.get(Y),F=$m(O);F&&s({mod:F.id,sel:Y})},[o,s]),I0=()=>{const Y=H.current,O=performance.now();Y.t0=O,Y.time=0;const F=Y.springs;F.orb.s.x=120,F.orb.o.x=0;for(const V of Tu)Object.assign(F.jelly[V.id],{x:F0(Y.orb.x),y:F0(Y.orb.y),s:F0(20),o:F0(0),lo:F0(0)});s({mod:null,sel:null})},E0=M0?o.index.get(M0):null,a0=Tu.find(Y=>Y.id===h0);return P2(o),r.createElement("section",{ref:W,className:`home-stage stage-${l0} ${H.current.introSeen?"intro-done":""}`,"aria-label":"示范厂 QMS 神经图谱"},r.createElement("div",{className:"stage-bg"}),r.createElement(lg,{graph:o,layout:m,live:H,reduced:p,theme:f}),r.createElement(vg,{graph:o,items:l0==="hub"?[]:k,sel:M0,live:H,onModule:Y=>s({mod:Y===h0&&l0!=="hub"?h0:Y,sel:null}),onItem:Y=>s({mod:h0,sel:Y}),pageIndex:n0,onPageChange:v0,totalCount:o0.length}),l0!=="hub"&&J>1&&r.createElement("div",{className:"fan-pager glass"},r.createElement("span",null,a0?.title," (",o0.length,"份) · 第 ",n0+1,"/",J," 组"),r.createElement("div",{className:"pager-btns"},Array.from({length:J},(Y,O)=>r.createElement("button",{key:O,className:`pill small ${n0===O?"primary":"ghost"}`,onClick:()=>v0(O)},O*w+1,"-",Math.min((O+1)*w,o0.length))))),r.createElement("div",{className:"hub-copy","aria-hidden":l0!=="hub"},r.createElement("p",{className:"eyebrow"},Ou.brand.name," · ",Ou.brand.sub," ",r.createElement("span",null,Ou.brand.tagline)),r.createElement("h1",null,"让每一份受控文件，",r.createElement("br",null),"双向生长。"),r.createElement("p",{className:"hub-en"},"Every controlled procedure is a living neuron in the network."),r.createElement("p",{className:"hub-meta"},"5 大体系模块 ",r.createElement("em",null,"modules")," · ",R0.totalDocs," 份受控规程 ",r.createElement("em",null,"documents")," · ",R0.controlledItems," 项台账受控 ",r.createElement("em",null,"items")),r.createElement("p",{className:"hub-hint"},"点击发光水母，展开规程触须 · ",r.createElement("em",null,"Tap a jellyfish to expand procedures"))),l0!=="hub"&&r.createElement("nav",{className:"crumbs","aria-label":"图谱路径"},r.createElement("button",{className:"crumb-back",onClick:()=>s(M0?{mod:h0,sel:null}:{mod:null,sel:null}),"aria-label":"返回上一层"},r.createElement(s0,{name:"back",size:16})),r.createElement("button",{onClick:()=>s({mod:null,sel:null})},"体系中枢 ",r.createElement("em",null,"Core")),r.createElement("span",null,"/"),r.createElement("button",{onClick:()=>s({mod:h0,sel:null}),style:{color:Lt[h0]?.color}},a0?.title," ",r.createElement("em",null,a0?.en)),E0&&r.createElement(r.Fragment,null,r.createElement("span",null,"/"),r.createElement("b",null,E0.code?`[${E0.code}] `:"",E0.docName||E0.short||E0.title))),r.createElement("div",{className:"stage-tools glass",role:"toolbar","aria-label":"动画控制"},r.createElement("button",{onClick:I0,title:"重播开场 Replay"},r.createElement(s0,{name:"replay",size:15}),r.createElement("span",null,"重播 ",r.createElement("em",null,"Replay"))),r.createElement("button",{onClick:()=>K(!B),title:B?"继续 Resume":"暂停 Pause","aria-pressed":B},r.createElement(s0,{name:B?"play":"pause",size:15}),r.createElement("span",null,B?"继续":"暂停"," ",r.createElement("em",null,B?"Resume":"Pause"))),r.createElement("button",{onClick:A,title:"关于体系数据 Sources"},r.createElement(s0,{name:"info",size:15}),r.createElement("span",null,"受控台账 ",r.createElement("em",null,"Ledger"))),d&&r.createElement("button",{onClick:d,title:`当前主题：${g||""}，点击切换下一个预设`},r.createElement(s0,{name:"palette",size:15}),r.createElement("span",null,g||"主题"," ",r.createElement("em",null,"Theme")))),l0==="hub"&&r.createElement("div",{className:"legend glass","aria-label":"图例"},r.createElement("h3",null,"体系图例 ",r.createElement("em",null,"Legend")),["qp","wi","cases8d","standards","concept","ghost"].map(Y=>r.createElement("div",{key:Y},r.createElement("i",{style:{"--kc":b7[Y]?.color},className:Y==="ghost"?"ghost":""}),b7[Y]?.label," ",r.createElement("em",null,b7[Y]?.en),r.createElement("b",null,o.nodes.filter(O=>O.kind===Y).length))),r.createElement("div",{className:"legend-lines"},r.createElement("span",null,r.createElement("i",{className:"ln mutual"}),"双向共振 ",r.createElement("em",null,"Mutual")),r.createElement("span",null,r.createElement("i",{className:"ln one"}),"单向引用 ",r.createElement("em",null,"Citation")))),l0==="hub"&&r.createElement(Ag,{graph:o,onGo:A0,onOpenAssistant:Q}),l0==="module"&&r.createElement("p",{className:"module-hint"},"选择一份规程查看深度条款分析 · ",r.createElement("em",null,"Select a procedure to see full analysis")),E0&&r.createElement("aside",{className:"analysis-wrap",key:M0},r.createElement(B2,{graph:o,node:E0,module:a0,onGo:A0,onAction:C,onClose:()=>s({mod:h0,sel:null}),onPrintCard:_})))}function Tg({doc:o,index:m=0,kind:b="qp"}){const s=b||o?.module||"qp",C=o?.doc_code||o?.code||"DOC",A=o?.rev||"A.0",p=o?.department||"品保部",Q=o?.npi_phase||"MP",_={qp:{themeClass:"dossier-qp",accent:"#38bdf8",accent2:"#2563eb",glow:"rgba(56, 189, 248, 0.45)",labelZh:"体系程序",labelEn:"PROCEDURE",sealText:"QP 受控程序 · CONTROLLED",totemType:"flow"},wi:{themeClass:"dossier-wi",accent:"#2dd4bf",accent2:"#0d9488",glow:"rgba(45, 212, 191, 0.45)",labelZh:"作业规范",labelEn:"INSTRUCTION",sealText:"SOP/WI 现行有效 · APPROVED",totemType:"circuit"},cases8d:{themeClass:"dossier-8d",accent:"#fbbf24",accent2:"#ea580c",glow:"rgba(251, 191, 36, 0.45)",labelZh:"8D改善报告",labelEn:"8D REPORT",sealText:"8D 闭环预防 · VERIFIED",totemType:"shield"},standards:{themeClass:"dossier-standards",accent:"#93c5fd",accent2:"#4f46e5",glow:"rgba(147, 197, 253, 0.45)",labelZh:"标准与台账",labelEn:"STANDARDS",sealText:"台账基准受控 · CANONICAL",totemType:"ledger"}},f=_[s]||_.qp,d=`dc-grad-${s}-${m}`,g=`dc-glow-${s}-${m}`;return r.createElement("div",{className:`dossier-cover ${f.themeClass}`,"aria-hidden":"true"},r.createElement("svg",{className:"dossier-svg",viewBox:"0 0 280 210",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice"},r.createElement("defs",null,r.createElement("linearGradient",{id:d,x1:"0",y1:"0",x2:"1",y2:"1"},r.createElement("stop",{offset:"0%",stopColor:f.accent,stopOpacity:"0.9"}),r.createElement("stop",{offset:"100%",stopColor:f.accent2,stopOpacity:"0.4"})),r.createElement("radialGradient",{id:`dc-bg-${m}`,cx:"75%",cy:"25%",r:"70%"},r.createElement("stop",{offset:"0%",stopColor:f.accent,stopOpacity:"0.22"}),r.createElement("stop",{offset:"50%",stopColor:f.accent2,stopOpacity:"0.1"}),r.createElement("stop",{offset:"100%",stopColor:"#080e18",stopOpacity:"0.88"})),r.createElement("filter",{id:g,x:"-20%",y:"-20%",width:"140%",height:"140%"},r.createElement("feGaussianBlur",{stdDeviation:"3",result:"blur"}),r.createElement("feMerge",null,r.createElement("feMergeNode",{in:"blur"}),r.createElement("feMergeNode",{in:"SourceGraphic"})))),r.createElement("rect",{width:"280",height:"210",fill:`url(#dc-bg-${m})`}),r.createElement("g",{stroke:"currentColor",strokeOpacity:"0.07",strokeWidth:"0.8"},r.createElement("line",{x1:"0",y1:"35",x2:"280",y2:"35",strokeDasharray:"3 3"}),r.createElement("line",{x1:"0",y1:"70",x2:"280",y2:"70",strokeDasharray:"3 3"}),r.createElement("line",{x1:"0",y1:"105",x2:"280",y2:"105",strokeDasharray:"3 3"}),r.createElement("line",{x1:"0",y1:"140",x2:"280",y2:"140",strokeDasharray:"3 3"}),r.createElement("line",{x1:"0",y1:"175",x2:"280",y2:"175",strokeDasharray:"3 3"}),r.createElement("line",{x1:"56",y1:"0",x2:"56",y2:"210",strokeDasharray:"3 3"}),r.createElement("line",{x1:"112",y1:"0",x2:"112",y2:"210",strokeDasharray:"3 3"}),r.createElement("line",{x1:"168",y1:"0",x2:"168",y2:"210",strokeDasharray:"3 3"}),r.createElement("line",{x1:"224",y1:"0",x2:"224",y2:"210",strokeDasharray:"3 3"})),r.createElement("g",{stroke:f.accent,strokeWidth:"1.6",fill:"none",opacity:"0.6"},r.createElement("path",{d:"M 12 24 L 12 12 L 24 12"}),r.createElement("path",{d:"M 256 12 L 268 12 L 268 24"}),r.createElement("path",{d:"M 12 186 L 12 198 L 24 198"}),r.createElement("path",{d:"M 256 198 L 268 198 L 268 186"})),r.createElement("g",{stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1"},r.createElement("line",{x1:"30",y1:"12",x2:"30",y2:"16"}),r.createElement("line",{x1:"45",y1:"12",x2:"45",y2:"15"}),r.createElement("line",{x1:"60",y1:"12",x2:"60",y2:"18"}),r.createElement("line",{x1:"75",y1:"12",x2:"75",y2:"15"}),r.createElement("line",{x1:"90",y1:"12",x2:"90",y2:"16"}),r.createElement("line",{x1:"105",y1:"12",x2:"105",y2:"15"}),r.createElement("line",{x1:"120",y1:"12",x2:"120",y2:"18"})),f.totemType==="flow"&&r.createElement("g",{transform:"translate(140, 100)",filter:`url(#${g})`},r.createElement("circle",{cx:"0",cy:"0",r:"46",fill:"none",stroke:f.accent,strokeOpacity:"0.2",strokeWidth:"1",strokeDasharray:"4 4"}),r.createElement("circle",{cx:"0",cy:"0",r:"36",fill:"none",stroke:f.accent,strokeOpacity:"0.35",strokeWidth:"1.2"}),r.createElement("rect",{x:"-34",y:"-28",width:"22",height:"18",rx:"3",fill:"none",stroke:f.accent,strokeWidth:"1.4"}),r.createElement("rect",{x:"12",y:"-28",width:"22",height:"18",rx:"3",fill:"none",stroke:f.accent,strokeWidth:"1.4"}),r.createElement("rect",{x:"-11",y:"10",width:"22",height:"18",rx:"3",fill:"none",stroke:f.accent,strokeWidth:"1.5"}),r.createElement("path",{d:"M -12 -19 L 12 -19",stroke:f.accent,strokeWidth:"1.3"}),r.createElement("path",{d:"M 23 -10 L 23 1 L 11 15",fill:"none",stroke:f.accent,strokeWidth:"1.3"}),r.createElement("path",{d:"M -11 19 L -23 19 L -23 -10",fill:"none",stroke:f.accent,strokeWidth:"1.3"}),r.createElement("circle",{cx:"0",cy:"0",r:"5",fill:f.accent,fillOpacity:"0.75"}),r.createElement("circle",{cx:"0",cy:"0",r:"12",fill:"none",stroke:f.accent,strokeOpacity:"0.5",strokeWidth:"0.8"})),f.totemType==="circuit"&&r.createElement("g",{transform:"translate(140, 100)",filter:`url(#${g})`},r.createElement("rect",{x:"-24",y:"-24",width:"48",height:"48",rx:"5",fill:"none",stroke:f.accent,strokeWidth:"1.5"}),r.createElement("rect",{x:"-16",y:"-16",width:"32",height:"32",rx:"3",fill:f.accent,fillOpacity:"0.08",stroke:f.accent,strokeOpacity:"0.5",strokeWidth:"1"}),r.createElement("circle",{cx:"0",cy:"0",r:"6",fill:f.accent,fillOpacity:"0.6"}),[-12,-4,4,12].map(W=>r.createElement(r.Fragment,{key:W},r.createElement("line",{x1:W,y1:"-24",x2:W,y2:"-30",stroke:f.accent,strokeWidth:"1.2"}),r.createElement("line",{x1:W,y1:"24",x2:W,y2:"30",stroke:f.accent,strokeWidth:"1.2"}),r.createElement("line",{x1:"-24",y1:W,x2:"-30",y2:W,stroke:f.accent,strokeWidth:"1.2"}),r.createElement("line",{x1:"24",y1:W,x2:"30",y2:W,stroke:f.accent,strokeWidth:"1.2"}))),r.createElement("path",{d:"M -30 -12 L -48 -12 L -60 -24",fill:"none",stroke:f.accent,strokeOpacity:"0.6",strokeWidth:"1.2"}),r.createElement("circle",{cx:"-60",cy:"-24",r:"2.5",fill:f.accent}),r.createElement("path",{d:"M 30 12 L 48 12 L 60 24",fill:"none",stroke:f.accent,strokeOpacity:"0.6",strokeWidth:"1.2"}),r.createElement("circle",{cx:"60",cy:"24",r:"2.5",fill:f.accent}),r.createElement("path",{d:"M 12 -30 L 12 -46 L 34 -46",fill:"none",stroke:f.accent,strokeOpacity:"0.6",strokeWidth:"1.2"}),r.createElement("circle",{cx:"34",cy:"-46",r:"2.5",fill:f.accent}),r.createElement("path",{d:"M -12 30 L -12 46 L -34 46",fill:"none",stroke:f.accent,strokeOpacity:"0.6",strokeWidth:"1.2"}),r.createElement("circle",{cx:"-34",cy:"46",r:"2.5",fill:f.accent})),f.totemType==="shield"&&r.createElement("g",{transform:"translate(140, 100)",filter:`url(#${g})`},r.createElement("path",{d:"M 0 -38 L 32 -26 C 32 10 16 32 0 42 C -16 32 -32 10 -32 -26 Z",fill:"none",stroke:f.accent,strokeWidth:"1.6"}),r.createElement("path",{d:"M 0 -30 L 24 -20 C 24 6 12 24 0 32 C -12 24 -24 6 -24 -20 Z",fill:f.accent,fillOpacity:"0.08",stroke:f.accent,strokeOpacity:"0.4",strokeWidth:"1"}),r.createElement("line",{x1:"-16",y1:"2",x2:"16",y2:"2",stroke:f.accent,strokeWidth:"1.4"}),r.createElement("line",{x1:"-10",y1:"2",x2:"-3",y2:"-12",stroke:f.accent,strokeWidth:"1.2"}),r.createElement("line",{x1:"2",y1:"2",x2:"9",y2:"-12",stroke:f.accent,strokeWidth:"1.2"}),r.createElement("line",{x1:"-10",y1:"2",x2:"-3",y2:"16",stroke:f.accent,strokeWidth:"1.2"}),r.createElement("line",{x1:"2",y1:"2",x2:"9",y2:"16",stroke:f.accent,strokeWidth:"1.2"}),r.createElement("circle",{cx:"0",cy:"-6",r:"4.5",fill:f.accent})),f.totemType==="ledger"&&r.createElement("g",{transform:"translate(140, 100)",filter:`url(#${g})`},r.createElement("rect",{x:"-38",y:"-30",width:"76",height:"60",rx:"4",fill:"none",stroke:f.accent,strokeWidth:"1.5"}),r.createElement("line",{x1:"-38",y1:"-14",x2:"38",y2:"-14",stroke:f.accent,strokeWidth:"1.2"}),r.createElement("line",{x1:"-38",y1:"2",x2:"38",y2:"2",stroke:f.accent,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"3 2"}),r.createElement("line",{x1:"-38",y1:"18",x2:"38",y2:"18",stroke:f.accent,strokeOpacity:"0.5",strokeWidth:"1",strokeDasharray:"3 2"}),r.createElement("line",{x1:"-12",y1:"-30",x2:"-12",y2:"30",stroke:f.accent,strokeWidth:"1"}),r.createElement("line",{x1:"14",y1:"-30",x2:"14",y2:"30",stroke:f.accent,strokeWidth:"1"}),r.createElement("rect",{x:"-8",y:"-10",width:"18",height:"8",rx:"2",fill:f.accent,fillOpacity:"0.45"}),r.createElement("circle",{cx:"26",cy:"10",r:"3",fill:f.accent})),r.createElement("g",{transform:"translate(196, 50) rotate(-12)",opacity:"0.45"},r.createElement("rect",{x:"-48",y:"-12",width:"96",height:"24",rx:"4",fill:"none",stroke:f.accent,strokeWidth:"1",strokeDasharray:"5 2"}),r.createElement("text",{x:"0",y:"3",textAnchor:"middle",fill:f.accent,fontSize:"8",fontWeight:"bold",fontFamily:"monospace",letterSpacing:"0.8"},"CONTROLLED")),r.createElement("text",{x:"264",y:"188",textAnchor:"end",fill:"currentColor",fillOpacity:"0.12",fontSize:"36",fontWeight:"900",fontFamily:"monospace",letterSpacing:"-1"},String(C).slice(0,10))),r.createElement("div",{className:"dossier-overlay"},r.createElement("div",{className:"dossier-top-bar"},r.createElement("span",{className:"dossier-rev-tag"},"Rev ",A),r.createElement("span",{className:"dossier-phase-tag"},Q," · ",f.labelZh)),r.createElement("div",{className:"dossier-bottom-bar"},r.createElement("div",{className:"dossier-code-wrap"},r.createElement("span",{className:"dossier-code-label"},"DOC CODE"),r.createElement("strong",{className:"dossier-code-val"},C)),r.createElement("span",{className:"dossier-dept-badge"},p))))}function jc({zh:o,en:m,sub:b,subEn:s,children:C}){return r.createElement("header",{className:"page-head"},r.createElement("div",null,r.createElement("p",{className:"eyebrow"},m.toUpperCase()," ",r.createElement("span",null,o)),r.createElement("h1",null,b),r.createElement("p",{className:"page-sub"},s)),C&&r.createElement("div",{className:"page-head-actions"},C))}const Sg={procedure:"体系程序",sip:"检验指导书 SIP",case8d:"8D 报告",case:"不良案例",attribution:"归因分析",manual:"系统操作说明"};function _g(){const[o,m]=R.useState([]),[b,s]=R.useState("loading");return R.useEffect(()=>{const C=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"")+"/api/v1",A=localStorage.getItem("iqc_token")||"";Promise.reject(new Error("static-demo")).then(p=>{if(!p.ok)throw new Error("HTTP "+p.status);return p.json()}).then(p=>{m((p.items||[]).slice(0,12)),s("ok")}).catch(()=>s("err"))},[]),b==="err"?null:r.createElement("section",{className:"kfeed glass"},r.createElement("header",{className:"kfeed-head"},r.createElement("strong",null,"动态知识库 ",r.createElement("em",null,"Live Knowledge")),r.createElement("a",{className:"pill ghost small",href:"../iqc-knowledge-center.html",target:"_blank",rel:"noreferrer"},"进入文控中心 →")),b==="loading"?r.createElement("p",{className:"kfeed-empty"},"正在同步知识库…"):o.length===0?r.createElement("p",{className:"kfeed-empty"},"暂无登记条目，登录后可在文控中心登记 SIP / 8D / 案例 / 归因 / 操作说明"):r.createElement("div",{className:"kfeed-grid"},o.map(C=>r.createElement("a",{key:C.id,className:"kfeed-item",href:"../iqc-knowledge-center.html",target:"_blank",rel:"noreferrer"},r.createElement("span",{className:`kfeed-type kf-${C.type}`},Sg[C.type]||C.type),r.createElement("strong",null,(C.doc_code?C.doc_code+" ":"")+(C.title||"")),r.createElement("small",null,String(C.summary||C.body||"").slice(0,42))))))}function Ng({graph:o,selected:m,setSelected:b,onGo:s,onAction:C,onPrintCard:A}){const[p,Q]=R.useState(""),[_,f]=R.useState("all"),d=R.useMemo(()=>fa.filter(G=>{const B=G.doc,K=_==="all"||B?.module===_,n0=(G.title+" "+(B?.doc_code||"")+" "+(B?.department||"")).toLowerCase().includes(p.toLowerCase());return K&&n0}).sort((G,B)=>(G.doc?.doc_code||"").localeCompare(B.doc?.doc_code||"")),[fa,p,_]),g=m||d[0]?.id,W=o.index.get(g),D=[["受控规程总量","Procedures",R0.totalDocs],["台账受控总项","Ledger Items",R0.controlledItems],["质量记录表单","Quality Records",R0.qualityRecords],["现行有效率","Effective",R0.effectiveRate]];return r.createElement("div",{className:"page page-library"},r.createElement(jc,{zh:"受控规程库",en:"Procedures",sub:"每一份文件，皆受控可追溯。",subEn:"Every controlled procedure is an active neuron in QMS OS quality system."}),r.createElement(_g,null),r.createElement("section",{className:"kpi-band glass"},D.map(([G,B,K])=>r.createElement("div",{key:G},r.createElement("span",null,G," ",r.createElement("em",null,B)),r.createElement("strong",null,r.createElement(da,{value:K}))))),r.createElement("div",{className:"library-layout"},r.createElement("section",{className:"works-col"},r.createElement("div",{className:"toolbar-row"},r.createElement("label",{className:"search"},r.createElement(s0,{name:"search",size:15}),r.createElement("input",{value:p,onChange:G=>Q(G.target.value),placeholder:"搜索规程编号、名称或部门… Search docs","aria-label":"搜索规程"})),r.createElement("div",{className:"seg",role:"group","aria-label":"模块筛选"},[["all","全部","All"],["qp","体系程序","QP"],["wi","作业规范","WI"],["cases8d","8D案例","8D"],["standards","总表标准","Ledger"]].map(([G,B,K])=>r.createElement("button",{key:G,className:_===G?"active":"",onClick:()=>f(G)},B,r.createElement("em",null,K))))),r.createElement("div",{className:"works-grid"},d.map((G,B)=>{o.index.get(G.id);const K=W?.id===G.id,n0=G.doc;return r.createElement("button",{key:G.id,className:`work-card ${K?"active":""}`,onClick:()=>b(G.id),style:{animationDelay:B%20*30+"ms"}},r.createElement("span",{className:"wc-cover"},r.createElement(Tg,{doc:n0,index:B,kind:n0?.module})),r.createElement("span",{className:"wc-body"},r.createElement("span",{className:"wc-date"},"【",n0?.module?.toUpperCase()||"DOC","】阶段: ",n0?.npi_phase||"MP"),r.createElement("span",{className:"wc-title"},n0?.doc_name||G.title),r.createElement("span",{className:"wc-stats"},r.createElement("span",null,"引用",r.createElement("em",null,"Cite"),r.createElement("b",null,n0?.citations?.length||0)),r.createElement("span",null,"部门",r.createElement("em",null,"Dept"),r.createElement("b",null,n0?.department||"品保")),r.createElement("span",null,"状态",r.createElement("em",null,"Status"),r.createElement("b",{style:{color:"#10b981"}},"有效")))))})),!d.length&&r.createElement("div",{className:"empty"},r.createElement(s0,{name:"search",size:30}),r.createElement("p",null,"没有找到相关受控规程 ",r.createElement("em",null,"No match")),r.createElement("button",{className:"pill",onClick:()=>{Q(""),f("all")}},"清空筛选 ",r.createElement("em",null,"Clear"))),r.createElement("p",{className:"source-line"},r.createElement(s0,{name:"info",size:13}),"共 ",R0.totalDocs," 份受控规程，法定真源来自于《受控文件一览表》现行版本。")),W&&r.createElement("aside",{className:"library-analysis",key:W.id},r.createElement(B2,{graph:o,node:W,module:Tu.find(G=>G.kind===W.kind),onGo:s,onAction:C,onClose:()=>b(null),onPrintCard:A}))))}function Dg({graph:o,drafts:m,setDrafts:b,active:s,setActive:C,onNew:A,onDelete:p,onGo:Q}){const _=m.find(g=>g.id===s)||m[0],f=R.useRef(null),d=(g,W)=>b(m.map(D=>D.id===_.id?{...D,[g]:W}:D));return r.createElement("div",{className:"page page-drafts"},r.createElement(jc,{zh:"作业规范与改善提案台",en:"Instructions & Drafting",sub:"编写现场落地指导书，打通质量神经末梢。",subEn:"Standard operating procedures, corrective draftings and work instructions."},r.createElement("button",{className:"pill primary",onClick:A},r.createElement(s0,{name:"plus",size:14}),"新建改善规范草案")),r.createElement("div",{className:"drafts-layout"},r.createElement("aside",{className:"drafts-list glass"},r.createElement("header",null,r.createElement("h3",null,"规程提案列表 ",r.createElement("em",null,"Drafts")),r.createElement("small",null,m.length," 份")),r.createElement("div",{className:"dl-items"},m.map(g=>r.createElement("button",{key:g.id,className:`dl-item ${g.id===_?.id?"active":""}`,onClick:()=>C(g.id)},r.createElement("strong",null,g.title||"未命名规范草案"),r.createElement("small",null,g.body?.slice(0,48)||"无内容","..."))))),r.createElement("section",{className:"draft-editor glass"},_?r.createElement(r.Fragment,null,r.createElement("header",{className:"de-head"},r.createElement("input",{className:"de-title",value:_.title,onChange:g=>d("title",g.target.value),placeholder:"输入规范或改善案标题..."}),r.createElement("button",{className:"pill ghost small",onClick:()=>p(_.id)},r.createElement(s0,{name:"trash",size:13}),"删除")),r.createElement("textarea",{ref:f,className:"de-body",value:_.body||"",onChange:g=>d("body",g.target.value),placeholder:"编写条款内容、操作规程或 5-Why 改善措施..."}),r.createElement("footer",{className:"de-foot"},r.createElement("span",null,"支持草案暂存（仅保存在本机浏览器全内存）"),r.createElement("small",null,(_.body||"").length," 字符"))):r.createElement("div",{className:"empty"},r.createElement("p",null,"选择或新建一份规范草案")))))}function Mg({graph:o,ideas:m,onEdit:b,onGraph:s,onNew:C}){return r.createElement("div",{className:"page page-ideas"},r.createElement(jc,{zh:"8D 改善与预防案例库",en:"8D Cases & CAPA",sub:"问题遏制 · 根本原因 · 纠正预防 · 闭环验证。",subEn:"Root cause analysis, corrective actions, preventive actions and cross-procedure closure."},r.createElement("button",{className:"pill primary",onClick:C},r.createElement(s0,{name:"plus",size:14}),"登记 8D 改善提案")),r.createElement("div",{className:"ideas-grid"},m.map((A,p)=>r.createElement("div",{key:A.id,className:"idea-card glass",style:{animationDelay:p*80+"ms"}},r.createElement("header",null,r.createElement("span",{className:"ic-priority badge"},"优先级：",A.priority),r.createElement("span",{className:"ic-status"},A.status)),r.createElement("h3",null,A.title),r.createElement("p",{className:"ic-note"},A.note),r.createElement("div",{className:"ic-foot"},r.createElement("small",null,"责任部门：",A.platform),r.createElement("button",{className:"pill ghost small",onClick:()=>b(A)},r.createElement(s0,{name:"edit",size:13}),"查看/编辑"))))))}function Ig({node:o,graph:m,onClose:b}){const[s,C]=R.useState(!1),A=R.useRef(null);R.useEffect(()=>()=>{A.current&&clearTimeout(A.current)},[]);const p=R.useMemo(()=>{if(!o)return null;const f=new Date,d=`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")} ${String(f.getHours()).padStart(2,"0")}:${String(f.getMinutes()).padStart(2,"0")}:${String(f.getSeconds()).padStart(2,"0")}`,g=`${o.code||o.id}-${o.rev||"A.0"}-${o.department||"QA"}`;let W=0;for(let B=0;B<g.length;B++)W=(W<<5)-W+g.charCodeAt(B),W|=0;const D=`YT-QMS-${Math.abs(W).toString(16).toUpperCase().padStart(8,"0")}`,G=()=>{const B=(o.title+" "+(o.summary||"")).toLowerCase();return B.includes("进料")||B.includes("iqc")?["抽查近3批次外协/原材料进料检验记录单 (IQC Report)，核验抽样方案与判定依据；","现场核实不合格原材料隔离区红牌标识、台账登记及 MRB 评审处置单；","核查关键物料检验员资质证书、检验规程 (SIP) 与首件封样实物。"]:B.includes("8d")||B.includes("异常")||B.includes("改善")?["调阅 8D 根本原因分析 (5-Why) 逻辑链与工程验证支持性数据；","现场抽验临时遏制措施 (D3) 实施记录与防呆防错治具工位执行情况；","核实对应作业指导书 (WI) 及控制计划 (CP/FMEA) 是否已完成横向闭环展开修订。"]:B.includes("制程")||B.includes("巡检")||B.includes("ipqc")?["抽验生产现场首件检验记录表、每2小时巡检点检记录；","核实异常停线升级流程响应时间记录及品保主管复线签批；","检查现场防静电 (ESD) 接地检测记录及温湿度监控台账。"]:["现场抽调该规程现行有效版本纸质/电子受控分发签收记录；","核查作业人员培训考核记录及关键工序上岗证；","核实关联质量记录表单编号与《质量记录一览表》法定真源对齐情况。"]};return{company:"智造示范工厂科技有限公司",companyEn:"DONGGUAN QMS OS ELECTRONICS CO., LTD.",title:"质量管理体系 · 现场审厂合规证据卡",titleEn:"QMS AUDIT COMPLIANCE EVIDENCE CARD",formNo:"YT-QMS-REC-2026-081",docCode:o.code||o.short||"QP-YT-GENERAL",docName:o.docName||o.title,rev:o.rev||"A.0",status:"现行受控有效 (Controlled 100%)",department:o.department||"质量管理部",npiPhase:o.npi_phase||"MP 量产阶段",rawFile:o.rawFile||"受控文件库归档",citations:o.citations&&o.citations.length?o.citations:["ISO 9001:2015","IATF 16949:2016"],summary:o.summary||"经体系台账审核，该文件严格符合东莞智造示范工厂质量管理制度，条款执行受控。",checklist:G(),timeStr:d,checkCode:D}},[o]);if(!p)return null;const Q=()=>{window.print()},_=()=>{const f=`【智造示范工厂科技有限公司 · 现场审厂合规证据卡】
文件编号：${p.docCode}
文件名称：${p.docName}
生效版本：${p.rev} (现行受控有效)
归口部门：${p.department} | 阶段：${p.npiPhase}
防伪校验码：${p.checkCode}
生成时间：${p.timeStr}
核心条款摘要：
${p.summary}
现场抽检建议：
${p.checklist.map((d,g)=>`${g+1}. ${d}`).join(`
`)}
`;navigator.clipboard?.writeText(f),C(!0),A.current=setTimeout(()=>C(!1),2400)};return r.createElement("div",{className:"veil",onClick:b},r.createElement("div",{className:"modal glass audit-card-modal-wrap",onClick:f=>f.stopPropagation()},r.createElement("div",{className:"audit-card-action-bar no-print"},r.createElement("div",{className:"audit-card-status"},r.createElement("span",{className:"badge-stamp"},"受控真源凭证"),r.createElement("small",null,"已对齐《受控文件一览表》法定有效版本")),r.createElement("div",{className:"action-buttons"},r.createElement("button",{className:"pill ghost small",onClick:_},r.createElement(s0,{name:"copy",size:14}),s?"已复制证据链":"复制文本"),r.createElement("button",{className:"pill primary small",onClick:Q},r.createElement(s0,{name:"print",size:14}),"物理打印 / 导出 PDF"),r.createElement("button",{className:"icon-btn",onClick:b,"aria-label":"关闭"},r.createElement(s0,{name:"close",size:16})))),r.createElement("div",{className:"audit-card-sheet audit-card-print-target"},r.createElement("div",{className:"audit-card-watermark","aria-hidden":"true"},r.createElement("div",{className:"seal-circle"},r.createElement("span",{className:"seal-star"},"★"),r.createElement("span",{className:"seal-text-top"},"智造示范工厂科技有限公司"),r.createElement("span",{className:"seal-center"},"受控文件"),r.createElement("span",{className:"seal-sub"},"仅供审厂查验"),r.createElement("span",{className:"seal-date"},p.timeStr.slice(0,10)))),r.createElement("header",{className:"card-header"},r.createElement("div",{className:"card-brand-row"},r.createElement("div",{className:"brand-titles"},r.createElement("h1",null,p.company),r.createElement("p",{className:"en-company"},p.companyEn)),r.createElement("div",{className:"form-meta-box"},r.createElement("span",{className:"form-no"},"表单编号: ",p.formNo),r.createElement("span",{className:"form-rev"},"受控版本: Rev B.0"))),r.createElement("div",{className:"card-divider-double"}),r.createElement("div",{className:"card-main-title"},r.createElement("h2",null,p.title),r.createElement("p",null,p.titleEn))),r.createElement("table",{className:"card-info-table"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{style:{width:"18%"}},"受控文件编号"),r.createElement("td",{style:{width:"32%"}},r.createElement("strong",{className:"code-text"},p.docCode)),r.createElement("th",{style:{width:"18%"}},"现行生效版本"),r.createElement("td",{style:{width:"32%"}},r.createElement("span",{className:"rev-badge-tag"},p.rev),r.createElement("span",{className:"status-badge-tag"},"【现行有效】"))),r.createElement("tr",null,r.createElement("th",null,"文件正式名称"),r.createElement("td",{colSpan:"3"},r.createElement("strong",{className:"doc-title-text"},p.docName))),r.createElement("tr",null,r.createElement("th",null,"归口主导部门"),r.createElement("td",null,p.department),r.createElement("th",null,"适用生产阶段"),r.createElement("td",null,p.npiPhase)),r.createElement("tr",null,r.createElement("th",null,"归档物理文件"),r.createElement("td",null,r.createElement("code",null,p.rawFile)),r.createElement("th",null,"防伪校验校验码"),r.createElement("td",null,r.createElement("code",null,p.checkCode))))),r.createElement("section",{className:"card-block"},r.createElement("h3",null,"一、 核心合规条款与判定准则 (Mandatory Clause Summary)"),r.createElement("div",{className:"card-summary-box"},r.createElement("p",null,p.summary))),r.createElement("section",{className:"card-block"},r.createElement("h3",null,"二、 关联支撑与上位受控规程 (Referenced Controlled Documents)"),r.createElement("div",{className:"card-citations-list"},p.citations.map((f,d)=>r.createElement("span",{key:d,className:"citation-pill"},r.createElement(s0,{name:"link",size:11})," ",f)))),r.createElement("section",{className:"card-block"},r.createElement("h3",null,"三、 现场审厂抽检核查建议表 (On-site Inspection Checklist)"),r.createElement("ul",{className:"card-checklist"},p.checklist.map((f,d)=>r.createElement("li",{key:d},r.createElement("span",{className:"check-box-square"},"□"),r.createElement("span",null,f))))),r.createElement("footer",{className:"card-footer"},r.createElement("div",{className:"signature-grid"},r.createElement("div",{className:"sig-col"},r.createElement("span",null,"客户审核员 / 组长签认："),r.createElement("div",{className:"sig-line"}),r.createElement("small",null,"日期：____年__月__日")),r.createElement("div",{className:"sig-col"},r.createElement("span",null,"智造示范工厂陪审代表签认："),r.createElement("div",{className:"sig-line"}),r.createElement("small",null,"日期：____年__月__日")),r.createElement("div",{className:"sig-col"},r.createElement("span",null,"体系认证工程师核准："),r.createElement("div",{className:"sig-line"}),r.createElement("small",null,"日期：____年__月__日"))),r.createElement("div",{className:"card-bottom-line"},r.createElement("span",null,"防伪时间戳：",p.timeStr),r.createElement("span",null,"数据真源：《受控文件一览表》与示范厂 QMS 知识中枢"),r.createElement("span",null,"页码：第 1 页 · 共 1 页"))))))}const Wg=[{title:"8D 改善闭环标准",sub:"原因分析与预防措施",q:"客户反馈质量异常时，8D 改善报告的闭环时效与根本原因分析标准是什么？"},{title:"新物料认证流程",sub:"样品试产与供方导入",q:"新物料导入和供应商样品认证的具体流程与受控程序是什么？"},{title:"制程停线与升级",sub:"异常升级与复线签核",q:"产线出现重大质量异常时，停线判定标准与升级签核流程是怎样的？"},{title:"进料检验 (IQC) 规范",sub:"抽样标准与不合格处置",q:"IQC 进料检验抽样方案及发现不合格原材料后的隔离与 MRB 处置规程？"},{title:"工程变更 (ECN) 控制",sub:"图纸变更与产线生效",q:"生产制造过程中发生设计变更或工艺变更 (ECN) 时，如何受控执行？"}];function Qg({initialQuery:o="",graph:m,onGo:b,onPrintCard:s,onClose:C}){const[A,p]=R.useState(o),[Q,_]=R.useState([]),[f,d]=R.useState(!1),[g,W]=R.useState(()=>localStorage.getItem("yt_qms_api_key")||""),[D,G]=R.useState(!1),B=R.useRef(null),K=R.useRef(null);R.useEffect(()=>()=>{K.current&&clearTimeout(K.current)},[]);const n0=R.useMemo(()=>{const l0=new Map;return Tn.forEach(o0=>{const J=`${o0.doc_code||""} ${o0.doc_name||""} ${o0.department||""} ${o0.npi_phase||""} ${o0.summary||""} ${o0.body_snippet||""} ${(o0.tags||[]).join(" ")}`.toLowerCase().match(/[\u4e00-\u9fa5]{2,4}|[a-z0-9_-]{2,}/gi)||[];new Set(J).forEach(H=>{l0.has(H)||l0.set(H,[]),l0.get(H).push(o0)})}),l0},[]),v0=l0=>{const o0=l0.trim();if(!o0)return;d(!0);const w=performance.now(),J=o0.toLowerCase().match(/[\u4e00-\u9fa5]{2,4}|[a-z0-9_-]{2,}/gi)||[o0.toLowerCase()],k=new Map;J.forEach(Y=>{for(const[O,F]of n0.entries())(O.includes(Y)||Y.includes(O))&&F.forEach(V=>{const X=k.get(V.id)||{doc:V,score:0};V.doc_code&&V.doc_code.toLowerCase().includes(Y)&&(X.score+=15),V.doc_name&&V.doc_name.toLowerCase().includes(Y)&&(X.score+=8),X.score+=2,k.set(V.id,X)})});const H=[...k.values()].sort((Y,O)=>O.score-Y.score),A0=(performance.now()-w).toFixed(1);if(H.length===0||H[0].score<3){K.current=setTimeout(()=>{_(Y=>[...Y,{role:"user",content:o0,time:new Date().toLocaleTimeString()},{role:"assistant",gated:!0,elapsed:A0,content:`【体系防幻觉门禁拦截 · Grounding Hard Gate】

经全量检索 155 份程序文件及 429 项受控台账，当前受控体系库中未检索到与「${o0}」直接对应的现行条款。

依据 ISO 9001:2015 及 IATF 16949 审厂应答规范，严禁非受控应答或推测虚构条款。建议检查查询关键字，或向品保部确认该流程是否属于未受控临时事务。`,docs:[]}]),d(!1)},120);return}const I0=H.slice(0,3).map(Y=>Y.doc),E0=I0[0];let a0=`根据东莞智造示范工厂现行受控文件体系，针对您询问的「${o0}」，核心应答要点如下：

`;a0+=`1. **法定真源依据**：严格遵循《${E0.doc_name}》（受控编号：\`${E0.doc_code||"QP"}\`，现行有效版本：\`Rev ${E0.rev||"A.0"}\`，归口部门：${E0.department}）。

`,E0.summary&&(a0+=`2. **核心执行准则**：${E0.summary.slice(0,260)}...

`),a0+=`3. **现场审厂应对要点**：
- 审核员现场调阅时，请出示对应的有效受控记录表单及主管审批签字；
- 确保作业员/责任工程师熟悉控制计划及应急响应阈值；
- 关联协同规程涵盖：${I0.map(Y=>`[${Y.doc_code||Y.doc_name}](doc:${Y.id})`).join("、")}。`,K.current=setTimeout(()=>{_(Y=>[...Y,{role:"user",content:o0,time:new Date().toLocaleTimeString()},{role:"assistant",gated:!1,elapsed:A0,content:a0,docs:I0}]),d(!1)},150)};R.useEffect(()=>{o&&v0(o)},[]),R.useEffect(()=>{B.current?.scrollIntoView({behavior:"smooth"})},[Q,f]);const h0=l0=>{if(l0.preventDefault(),A.trim()){const o0=A;p(""),v0(o0)}},M0=()=>{localStorage.setItem("yt_qms_api_key",g),G(!1)};return r.createElement("div",{className:"veil",onClick:C},r.createElement("section",{className:"modal glass assistant-modal-wrap",onClick:l0=>l0.stopPropagation(),role:"dialog","aria-label":"AI 审厂陪跑助手"},r.createElement("header",{className:"assistant-header"},r.createElement("div",{className:"header-info"},r.createElement("span",{className:"assistant-orb-icon"},r.createElement("span",{className:"orb-dot-pulse"}),r.createElement(s0,{name:"agent",size:18})),r.createElement("div",null,r.createElement("h2",null,"智造示范工厂 · AI 审厂陪跑助手 ",r.createElement("em",null,"Audit Copilot")),r.createElement("p",{className:"sub-tag"},"100% 受控真源硬门禁 · 155 份规程文件全内存倒排索引 · 零幻觉"))),r.createElement("div",{className:"header-actions"},r.createElement("button",{className:"icon-btn",onClick:()=>G(!D),title:"大模型 API Key 扩展配置"},r.createElement(s0,{name:"settings",size:16})),r.createElement("button",{className:"icon-btn",onClick:C,"aria-label":"关闭"},r.createElement(s0,{name:"close",size:16})))),D&&r.createElement("div",{className:"settings-panel glass"},r.createElement("h4",null,"大模型推理扩展设置 (可选在线接入)"),r.createElement("p",{className:"quiet"},"默认在客户端全内存极速检索（零断网风险）。如需接入云端大模型做推理扩展，可填入 API Key："),r.createElement("div",{className:"settings-row"},r.createElement("input",{type:"password",placeholder:"sk-...",value:g,onChange:l0=>W(l0.target.value)}),r.createElement("button",{className:"pill primary small",onClick:M0},"保存配置"),r.createElement("button",{className:"pill ghost small",onClick:()=>G(!1)},"取消"))),r.createElement("div",{className:"assistant-body"},Q.length===0&&r.createElement("div",{className:"assistant-welcome"},r.createElement("div",{className:"welcome-badge"},r.createElement(s0,{name:"spark",size:16}),r.createElement("span",null,"审厂单兵陪跑模式已就绪")),r.createElement("h3",null,"欢迎使用示范厂 QMS 审核答辩陪跑助手"),r.createElement("p",{className:"welcome-desc"},"面向标杆客户、车规及第三方客户驻厂审核。每一句应答均经过",r.createElement("strong",null,"受控真源硬门禁"),"校验，直接索引现行有效版本、条款出处与抽检清单。"),r.createElement("div",{className:"canned-container"},r.createElement("p",{className:"canned-title"},"高频审厂提问快捷胶囊 (点击直达)："),r.createElement("div",{className:"canned-grid"},Wg.map((l0,o0)=>r.createElement("button",{key:o0,className:"canned-card",onClick:()=>v0(l0.q)},r.createElement("div",{className:"cc-head"},r.createElement("strong",null,l0.title),r.createElement("span",null,l0.sub)),r.createElement("p",{className:"cc-q"},l0.q)))))),Q.map((l0,o0)=>r.createElement("div",{key:o0,className:`chat-message role-${l0.role} ${l0.gated?"is-gated":""}`},r.createElement("div",{className:"msg-header"},r.createElement("span",{className:"msg-avatar"},l0.role==="user"?r.createElement(s0,{name:"user",size:13}):r.createElement(s0,{name:"agent",size:13})),r.createElement("span",{className:"msg-name"},l0.role==="user"?"提问工程师":"QMS 审核陪跑助手"),l0.elapsed&&r.createElement("span",{className:"msg-time"},l0.elapsed,"ms · 全内存匹配")),r.createElement("div",{className:"msg-content"},r.createElement("pre",null,l0.content),l0.docs&&l0.docs.length>0&&r.createElement("div",{className:"cited-docs-box"},r.createElement("p",{className:"cited-title"},r.createElement(s0,{name:"link",size:12})," 支撑受控文件依据 (",l0.docs.length," 份)："),r.createElement("div",{className:"cited-list"},l0.docs.map(w=>r.createElement("div",{key:w.id,className:"cited-item glass"},r.createElement("div",{className:"ci-left"},r.createElement("span",{className:"ci-code"},w.doc_code||"QP"),r.createElement("span",{className:"ci-rev"},"Rev ",w.rev||"A.0"),r.createElement("span",{className:"ci-name"},w.doc_name)),r.createElement("div",{className:"ci-right"},r.createElement("button",{className:"pill ghost small",onClick:()=>b?.(w.id),title:"在图谱与抽屉中查看"},r.createElement(s0,{name:"search",size:12})," 查看条款"),r.createElement("button",{className:"pill primary small",onClick:()=>s?.(w),title:"一键生成打印版审厂证据卡"},r.createElement(s0,{name:"print",size:12})," 生成证据卡"))))))))),f&&r.createElement("div",{className:"chat-message role-assistant searching-indicator"},r.createElement("span",{className:"dot-flashing"}),r.createElement("span",null,"正在对齐 155 份受控规程正文与《受控文件一览表》台账...")),r.createElement("div",{ref:B})),r.createElement("footer",{className:"assistant-footer"},r.createElement("form",{className:"assistant-form",onSubmit:h0},r.createElement("input",{type:"text",value:A,onChange:l0=>p(l0.target.value),placeholder:"输入审核提问，如：8D整改时限、停线升级标准、新物料检验流程...",autoFocus:!0}),r.createElement("button",{type:"submit",className:"pill primary",disabled:!A.trim()||f},r.createElement(s0,{name:"send",size:15})," 提问")),r.createElement("div",{className:"assistant-foot-meta"},r.createElement("span",null,"数据真源：155 份程序文件 · 429 项台账受控"),r.createElement("span",null,"防幻觉门禁状态：",r.createElement("b",{style:{color:"#10b981"}},"已启用 (HARD GATE ON)"))))))}function L2(o,m){const[b,s]=R.useState(()=>{try{return JSON.parse(localStorage.getItem(o))??m}catch{return m}});return R.useEffect(()=>{try{localStorage.setItem(o,JSON.stringify(b))}catch{}},[o,b]),[b,s]}function Og({title:o,en:m,onClose:b,children:s,wide:C}){const A=R.useRef(null),p=R.useRef(b);return p.current=b,R.useEffect(()=>{const Q=document.activeElement;A.current?.focus({preventScroll:!0});const _=f=>{if(f.key==="Escape"&&!f.isComposing&&p.current(),f.key==="Tab"){const d=[...A.current.querySelectorAll("button,input,textarea,select,a[href]")].filter(D=>!D.disabled),g=d[0],W=d[d.length-1];f.shiftKey&&document.activeElement===g?(f.preventDefault(),W.focus()):!f.shiftKey&&document.activeElement===W&&(f.preventDefault(),g.focus())}};return window.addEventListener("keydown",_),()=>{window.removeEventListener("keydown",_),Q?.isConnected&&Q.focus({preventScroll:!0})}},[]),r.createElement("div",{className:"veil",onClick:b},r.createElement("section",{ref:A,tabIndex:-1,className:`modal glass ${C?"wide":""}`,role:"dialog","aria-modal":"true","aria-label":o,onClick:Q=>Q.stopPropagation()},r.createElement("header",null,r.createElement("h2",null,o," ",r.createElement("em",null,m)),r.createElement("button",{className:"icon-btn",onClick:b,"aria-label":"关闭弹窗"},r.createElement(s0,{name:"close",size:16}))),s))}const q2=[["home","体系全景","Panorama"],["library","受控规程库","Procedures"],["drafts","作业规范编制","Instructions"],["ideas","8D改善案例","8D Cases"]],wg=()=>{const o=location.hash.slice(1);return q2.some(m=>m[0]===o)?o:"home"};function Lg({onLibrary:o,onOpenAssistant:m}){const b=[["受控规程总量","Procedures",R0.totalDocs],["台账受控总项","Ledger Items",R0.controlledItems],["质量记录表单","Quality Records",R0.qualityRecords],["现行有效率","Effective",R0.effectiveRate]];return r.createElement("section",{className:"snapshot","aria-label":"QMS 体系数据快照"},r.createElement("div",{className:"snapshot-head"},r.createElement("p",{className:"eyebrow"},"QUALITY SNAPSHOT ",r.createElement("span",null,"体系运行快照")),r.createElement("p",{className:"quiet"},R0.company," · ",R0.source," · ",R0.compiledAt," ",r.createElement("em",null,"Canonical Truth"))),r.createElement("div",{className:"kpi-band glass"},b.map(([s,C,A])=>r.createElement("div",{key:s},r.createElement("span",null,s," ",r.createElement("em",null,C)),r.createElement("strong",null,r.createElement(da,{value:A}))))),r.createElement("div",{className:"snapshot-grid"},r.createElement("section",{className:"glass card perf"},r.createElement("header",null,r.createElement("h2",null,"体系程序覆盖率 ",r.createElement("em",null,"QP Coverage")),r.createElement("button",{className:"text-btn",onClick:o},"全部受控规程 ",r.createElement("em",null,"All Docs"),r.createElement(s0,{name:"arrow",size:14}))),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"受控规程 ",r.createElement("em",null,"Procedure")),r.createElement("th",null,"版本 ",r.createElement("em",null,"Rev")),r.createElement("th",null,"归口 ",r.createElement("em",null,"Dept")),r.createElement("th",null,"状态 ",r.createElement("em",null,"Status")))),r.createElement("tbody",null,Tn.slice(0,6).map(s=>r.createElement("tr",{key:s.id,onClick:()=>o(s.id),style:{cursor:"pointer"}},r.createElement("td",null,r.createElement("span",{className:"t-title"},s.doc_code?`[${s.doc_code}] `:"",s.doc_name)),r.createElement("td",null,r.createElement("span",{className:"rev-badge-sm"},"Rev ",s.rev||"A.0")),r.createElement("td",null,s.department||"品保部"),r.createElement("td",null,r.createElement("span",{className:"status-badge-sm"},"现行有效")))))),r.createElement("p",{className:"quiet"},"现行有效率 100% · 共收录 ",R0.totalDocs," 份规程文件及 4 份 8D 改善闭环报告")),r.createElement("section",{className:"glass card plan"},r.createElement("header",null,r.createElement("h2",null,"审厂答辩就绪度 ",r.createElement("em",null,"Audit Readiness")),r.createElement("button",{className:"pill primary small",onClick:()=>m?.()},r.createElement(s0,{name:"agent",size:13}),"唤起 AI 审厂助手")),r.createElement("div",{className:"plan-body"},r.createElement("div",{className:"readiness-circle"},r.createElement("svg",{viewBox:"0 0 180 180"},r.createElement("defs",null,r.createElement("linearGradient",{id:"ring-g",x1:"0",x2:"1"},r.createElement("stop",{offset:"0",stopColor:"#10b981"}),r.createElement("stop",{offset:"1",stopColor:"#3b82f6"}))),r.createElement("circle",{cx:"90",cy:"90",r:"72",className:"track"}),r.createElement("circle",{cx:"90",cy:"90",r:"72",className:"value",strokeDasharray:"452.39 452.39",style:{stroke:"url(#ring-g)"}})),r.createElement("span",null,r.createElement("strong",null,"100%"),r.createElement("small",null,"审厂证据链已就绪"))),r.createElement("div",{className:"plan-ideas"},r.createElement("h3",null,"核心核查领域 ",r.createElement("em",null,"Focus Areas")),r.createElement("button",{onClick:()=>m?.("进料检验 IQC 抽样与不合格品处置")},r.createElement("b",null,"1"),r.createElement("span",null,"IQC 进料检验与不合格品隔离流程")),r.createElement("button",{onClick:()=>m?.("制程异常 8D 闭环与停线标准")},r.createElement("b",null,"2"),r.createElement("span",null,"制程停线判定与 8D 闭环预防措施")),r.createElement("button",{onClick:()=>m?.("新物料认证与工程变更 ECN")},r.createElement("b",null,"3"),r.createElement("span",null,"新物料认证与工程变更 (ECN) 控制")))))))}function zg({theme:o,onThemeChange:m}){const[b,s]=R.useState(!1),C=Xc(o),A=R.useRef(null);return R.useEffect(()=>{const p=Q=>{A.current&&!A.current.contains(Q.target)&&s(!1)};return document.addEventListener("pointerdown",p),()=>document.removeEventListener("pointerdown",p)},[]),r.createElement("div",{className:"theme-selector-wrap",ref:A},r.createElement("button",{className:"pill theme-pill",onClick:()=>s(!b),"aria-expanded":b,"aria-label":`切换主题风格，当前：${C.name}`,title:"一键切换界面主题 (深海科技蓝 / 玄黑赛博 / 极光绿 / 霓虹紫)"},r.createElement("span",{className:"theme-swatch-dot",style:{background:C.primary,boxShadow:`0 0 10px ${C.primary}`}}),r.createElement("span",{className:"theme-pill-text"},C.name),r.createElement(s0,{name:"chevronDown",size:12})),b&&r.createElement("div",{className:"theme-dropdown glass",role:"menu"},r.createElement("div",{className:"theme-dropdown-head"},r.createElement(s0,{name:"palette",size:13}),r.createElement("span",null,"界面主题视觉风格 ",r.createElement("em",null,"Themes"))),r.createElement("div",{className:"theme-options"},sa.map(p=>{const Q=p.id===o;return r.createElement("button",{key:p.id,className:`theme-opt ${Q?"active":""}`,role:"menuitem",onClick:()=>{m(p.id),s(!1)}},r.createElement("span",{className:"theme-opt-swatch",style:{background:p.previewGrad}}),r.createElement("div",{className:"theme-opt-info"},r.createElement("strong",null,p.name," ",r.createElement("em",null,p.en)),r.createElement("small",null,p.desc)),Q&&r.createElement("span",{className:"theme-opt-check"},r.createElement(s0,{name:"check",size:14})))}))))}function Gg(){const[o,m]=R.useState(km),[b,s]=R.useState(wg),[C]=L2(Ou.storagePrefix+"-ideas-v1",Xm),[A,p]=L2(Ou.storagePrefix+"-drafts-v1",Km),[Q,_]=R.useState(()=>A[0]?.id),[f,d]=R.useState({mod:null,sel:null}),[g,W]=R.useState(()=>Tn[0]?.id),[D,G]=R.useState(null),[B,K]=R.useState(null),[n0,v0]=R.useState(""),[h0,M0]=R.useState(null),[l0,o0]=R.useState(!1),[w,J]=R.useState(""),k=R.useMemo(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]);R.useDeferredValue(A);const H=R.useMemo(()=>ug(),[]),A0=R.useMemo(()=>tg(H),[H]);R.useEffect(()=>{history.replaceState(null,"",b==="home"?location.pathname:"#"+b),window.scrollTo({top:0})},[b]),R.useEffect(()=>{if(!n0)return;const X=setTimeout(()=>v0(""),2800);return()=>clearTimeout(X)},[n0]);const I0=R.useCallback(()=>G(null),[]),E0=R.useCallback(X=>{const x=H.index.get(X),i0={qp:"qp",wi:"wi",cases8d:"cases8d",standards:"standards",concept:"concepts"}[x?.kind];i0&&(d({mod:i0,sel:X}),s("home"))},[H]),a0=R.useCallback((X="")=>{J(X),o0(!0)},[]),Y=R.useCallback(X=>{M0(X)},[]),O=R.useCallback(X=>{Jm(X),m(X),document.documentElement.setAttribute("data-theme",X),document.body.setAttribute("data-theme",X)},[]),F=R.useCallback(()=>{const x=(sa.findIndex(i0=>i0.id===o)+1)%sa.length;O(sa[x].id)},[o,O]);R.useEffect(()=>{document.documentElement.setAttribute("data-theme",o),document.body.setAttribute("data-theme",o)},[o]);const V=R.useCallback(X=>{X.type==="page"&&(X.page==="library"&&W(X.id),X.page==="drafts"&&_(X.id),s(X.page)),X.type==="read"&&G({read:H.index.get(X.id)}),X.type==="printCard"&&M0(X.node)},[H]);return r.createElement("div",{className:`neural page-${b}`,"data-theme":o},r.createElement("header",{className:"topbar"},r.createElement("a",{className:"brand",href:gu(""),onClick:X=>{X.preventDefault(),s("home"),d({mod:null,sel:null})}},r.createElement("span",{className:"brand-mark","aria-hidden":"true"},r.createElement("svg",{viewBox:"0 0 24 28",width:"18",height:"21"},r.createElement("path",{fill:Cu.logo[0],d:"m14 1 8 7-2 12-7 7-10-5L1 12 8 4Z"}),r.createElement("path",{fill:Cu.logo[1],d:"m14 1-3 10 2 16 7-7 2-12Z"}),r.createElement("path",{fill:Cu.logo[2],d:"m14 1-3 10 11-3Z"}),r.createElement("path",{fill:Cu.logo[3],d:"m1 12 10-1 2 16-10-5Z"}))),r.createElement("span",{className:"brand-text"},Ou.brand.name," ",r.createElement("b",null,"/ ",Ou.brand.sub),r.createElement("small",null,Ou.brand.tagline," · ",Ou.brand.taglineEn))),r.createElement("nav",{"aria-label":"主导航"},q2.map(([X,x,i0])=>r.createElement("button",{key:X,className:b===X?"active":"","aria-current":b===X?"page":void 0,onClick:()=>s(X)},x,r.createElement("em",null,i0)))),r.createElement("div",{className:"top-actions"},r.createElement(zg,{theme:o,onThemeChange:O}),r.createElement("button",{className:"pill primary",onClick:()=>a0()},r.createElement(s0,{name:"agent",size:14}),"AI 审厂助手 ",r.createElement("em",null,"Copilot")),r.createElement("button",{className:"avatar",onClick:()=>G("about"),"aria-label":"查看体系知识中枢真源说明"},r.createElement("img",{src:gu(Ou.avatar),alt:"示范厂QMS"})))),r.createElement("main",null,b==="home"&&r.createElement(r.Fragment,null,r.createElement(Cg,{graph:H,layout:A0,focus:f,setFocus:d,onAction:V,onAbout:()=>G("about"),reduced:k,onOpenAssistant:a0,onPrintCard:Y,theme:o,onNextTheme:F,themeName:Xc(o).name}),r.createElement(Lg,{onLibrary:X=>{typeof X=="string"&&W(X),s("library")},onOpenAssistant:a0})),b==="library"&&r.createElement(Ng,{graph:H,selected:g,setSelected:W,onGo:E0,onAction:V,onPrintCard:Y}),b==="drafts"&&r.createElement(Dg,{graph:H,drafts:A,setDrafts:p,active:Q,setActive:_,onNew:()=>{},onDelete:()=>{},onGo:E0}),b==="ideas"&&r.createElement(Mg,{graph:H,ideas:C,onEdit:()=>{},onGraph:E0,onNew:()=>{}})),r.createElement("aside",{className:"floating-assistant-wrap no-print"},r.createElement("button",{className:"floating-assistant-btn",onClick:()=>a0(),"aria-label":"唤起 AI 审厂陪跑助手",title:"智造示范工厂 · AI 审厂陪跑助手 (100% 受控真源)"},r.createElement("span",{className:"orb-wave-ring"}),r.createElement(s0,{name:"agent",size:20}),r.createElement("span",{className:"orb-label"},"AI 审厂助手"))),r.createElement("footer",{className:"site-foot no-print"},r.createElement("button",{onClick:()=>G("about")},r.createElement(s0,{name:"info",size:13}),R0.company," · ",R0.source," · 有效率 ",R0.effectiveRate),r.createElement("span",null,Ou.footer.zh,r.createElement("em",null,Ou.footer.en))),n0&&r.createElement("div",{className:"toast glass",role:"status"},r.createElement(s0,{name:"check",size:15}),n0),D==="about"&&r.createElement(Og,{title:"智造示范工厂 QMS 体系知识中枢",en:"QMS OS QMS Ontology",onClose:I0,wide:!0},r.createElement("div",{className:"about"},r.createElement("p",null,"公司：",r.createElement("strong",null,R0.company)," · 品牌：",r.createElement("strong",null,Ou.brand.name," ",Ou.brand.sub)),r.createElement("p",null,"数据真源：",r.createElement("strong",null,R0.source)," · 编译日期：",R0.compiledAt),r.createElement("hr",null),r.createElement("h3",null,"体系图谱架构与法定真源仲裁 ",r.createElement("em",null,"Ontology Architecture")),r.createElement("p",null,"本系统采用纯前端单页架构 (SPA)，数据源于全厂受控文件库与 Excel 台账，具备",r.createElement("strong",null,"100% 离线单兵运行韧性"),"："),r.createElement("ul",null,r.createElement("li",null,r.createElement("b",null,"法定真源仲裁"),"：当 Word 物理文件名与台账不一致时，严格以《受控文件一览表》现行有效版本为准。"),r.createElement("li",null,r.createElement("b",null,"五流水母本体"),"：体系程序 (QP 29份)、作业规范 (WI 120份)、8D改善案例库 (4份)、标准与受控总表 (2份)、体系核心概念网 (12项)。"),r.createElement("li",null,r.createElement("b",null,"双向规程引用"),"：解析规程正文提及的上下游文件编号，自动构建规程引用网与跨文件双向共振。"),r.createElement("li",null,r.createElement("b",null,"AI 防幻觉硬门禁"),"：全内存倒排索引，每一条审核应答强制标注受控编号与版本，无依据严格拒绝作答。")),r.createElement("p",null,"当前全系统已编译收录 ",r.createElement("strong",null,R0.totalDocs," 份规程文件"),"，对齐 ",r.createElement("strong",null,R0.controlledItems," 项台账受控条目"),"，有效率达 ",r.createElement("strong",null,R0.effectiveRate),"。"))),h0&&r.createElement(Ig,{node:h0,graph:H,onClose:()=>M0(null)}),l0&&r.createElement(Qg,{initialQuery:w,graph:H,onGo:E0,onPrintCard:Y,onClose:()=>o0(!1)}))}Vm.createRoot(document.getElementById("root")).render(r.createElement(Gg,null));
