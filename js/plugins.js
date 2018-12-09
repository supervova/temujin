!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.Util=t(e.jQuery)}(this,function(e){"use strict";return function(n){var t="transitionend";function e(e){var t=this,i=!1;return n(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(t)},e),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");t&&"#"!==t||(t=e.getAttribute("href")||"");try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=n(e).css("transition-duration");return parseFloat(t)?(t=t.split(",")[0],1e3*parseFloat(t)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){n(e).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,i){for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){var r=i[n],s=t[n],o=s&&l.isElement(s)?"element":(a=s,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(o))throw new Error(e.toUpperCase()+': Option "'+n+'" provided type "'+o+'" but expected type "'+r+'".')}var a}};return n.fn.emulateTransitionEnd=e,n.event.special[l.TRANSITION_END]={bindType:t,delegateType:t,handle:function(e){if(n(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},l}(e=e&&e.hasOwnProperty("default")?e.default:e)}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Carousel=t(e.jQuery,e.Util)}(this,function(e,f){"use strict";function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(r){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(e){var t,i,n;t=r,n=s[i=e],i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n})}return r}var _,a,l,c,t,i,u,h,g,d,m,p,v,y,S,b,E,I,C,w,D,T,O,A,k,n,s,N;return e=e&&e.hasOwnProperty("default")?e.default:e,f=f&&f.hasOwnProperty("default")?f.default:f,a="carousel",c="."+(l="bs.carousel"),t=".data-api",i=(_=e).fn[a],u={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},h={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},g="next",d="prev",m="left",p="right",v={SLIDE:"slide"+c,SLID:"slid"+c,KEYDOWN:"keydown"+c,MOUSEENTER:"mouseenter"+c,MOUSELEAVE:"mouseleave"+c,TOUCHEND:"touchend"+c,LOAD_DATA_API:"load"+c+t,CLICK_DATA_API:"click"+c+t},y="carousel",S="active",b="slide",E="carousel-item-right",I="carousel-item-left",C="carousel-item-next",w="carousel-item-prev",D=".active",T=".active.carousel-item",O=".carousel-item",A=".carousel-item-next, .carousel-item-prev",k=".carousel-indicators",n="[data-slide], [data-slide-to]",s='[data-ride="carousel"]',N=function(){function s(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(t),this._element=_(e)[0],this._indicatorsElement=this._element.querySelector(k),this._addEventListeners()}var e,t,i,n=s.prototype;return n.next=function(){this._isSliding||this._slide(g)},n.nextWhenVisible=function(){!document.hidden&&_(this._element).is(":visible")&&"hidden"!==_(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(d)},n.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(A)&&(f.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(e){var t=this;this._activeElement=this._element.querySelector(T);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)_(this._element).one(v.SLID,function(){return t.to(e)});else{if(i===e)return this.pause(),void this.cycle();var n=i<e?g:d;this._slide(n,this._items[e])}},n.dispose=function(){_(this._element).off(c),_.removeData(this._element,l),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(e){return e=o({},u,e),f.typeCheckConfig(a,e,h),e},n._addEventListeners=function(){var t=this;this._config.keyboard&&_(this._element).on(v.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(_(this._element).on(v.MOUSEENTER,function(e){return t.pause(e)}).on(v.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&_(this._element).on(v.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},n._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},n._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(O)):[],this._items.indexOf(e)},n._getItemByDirection=function(e,t){var i=e===g,n=e===d,r=this._getItemIndex(t),s=this._items.length-1;if((n&&0===r||i&&r===s)&&!this._config.wrap)return t;var o=(r+(e===d?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},n._triggerSlideEvent=function(e,t){var i=this._getItemIndex(e),n=this._getItemIndex(this._element.querySelector(T)),r=_.Event(v.SLIDE,{relatedTarget:e,direction:t,from:n,to:i});return _(this._element).trigger(r),r},n._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(D));_(t).removeClass(S);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&_(i).addClass(S)}},n._slide=function(e,t){var i,n,r,s=this,o=this._element.querySelector(T),a=this._getItemIndex(o),l=t||o&&this._getItemByDirection(e,o),c=this._getItemIndex(l),u=Boolean(this._interval);if(e===g?(i=I,n=C,r=m):(i=E,n=w,r=p),l&&_(l).hasClass(S))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&o&&l){this._isSliding=!0,u&&this.pause(),this._setActiveIndicatorElement(l);var h=_.Event(v.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(_(this._element).hasClass(b)){_(l).addClass(n),f.reflow(l),_(o).addClass(i),_(l).addClass(i);var d=f.getTransitionDurationFromElement(o);_(o).one(f.TRANSITION_END,function(){_(l).removeClass(i+" "+n).addClass(S),_(o).removeClass(S+" "+n+" "+i),s._isSliding=!1,setTimeout(function(){return _(s._element).trigger(h)},0)}).emulateTransitionEnd(d)}else _(o).removeClass(S),_(l).addClass(S),this._isSliding=!1,_(this._element).trigger(h);u&&this.cycle()}},s._jQueryInterface=function(n){return this.each(function(){var e=_(this).data(l),t=o({},u,_(this).data());"object"==typeof n&&(t=o({},t,n));var i="string"==typeof n?n:t.slide;if(e||(e=new s(this,t),_(this).data(l,e)),"number"==typeof n)e.to(n);else if("string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i]()}else t.interval&&(e.pause(),e.cycle())})},s._dataApiClickHandler=function(e){var t=f.getSelectorFromElement(this);if(t){var i=_(t)[0];if(i&&_(i).hasClass(y)){var n=o({},_(i).data(),_(this).data()),r=this.getAttribute("data-slide-to");r&&(n.interval=!1),s._jQueryInterface.call(_(i),n),r&&_(i).data(l).to(r),e.preventDefault()}}},e=s,i=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return u}}],(t=null)&&r(e.prototype,t),i&&r(e,i),s}(),_(document).on(v.CLICK_DATA_API,n,N._dataApiClickHandler),_(window).on(v.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(s)),t=0,i=e.length;t<i;t++){var n=_(e[t]);N._jQueryInterface.call(n,n.data())}}),_.fn[a]=N._jQueryInterface,_.fn[a].Constructor=N,_.fn[a].noConflict=function(){return _.fn[a]=i,N._jQueryInterface},N}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Modal=t(e.jQuery,e.Util)}(this,function(e,o){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(r){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(e){var t,i,n;t=r,n=s[i=e],i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n})}return r}var l,c,u,h,t,d,f,_,g,m,p,v,y,S,i,b,E,I,C;return e=e&&e.hasOwnProperty("default")?e.default:e,o=o&&o.hasOwnProperty("default")?o.default:o,c="modal",h="."+(u="bs.modal"),t=(l=e).fn[c],d={backdrop:!0,keyboard:!0,focus:!0,show:!0},f={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},_={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,FOCUSIN:"focusin"+h,RESIZE:"resize"+h,CLICK_DISMISS:"click.dismiss"+h,KEYDOWN_DISMISS:"keydown.dismiss"+h,MOUSEUP_DISMISS:"mouseup.dismiss"+h,MOUSEDOWN_DISMISS:"mousedown.dismiss"+h,CLICK_DATA_API:"click"+h+".data-api"},g="modal-scrollbar-measure",m="modal-backdrop",p="modal-open",v="fade",y="show",S=".modal-dialog",i='[data-toggle="modal"]',b='[data-dismiss="modal"]',E=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",I=".sticky-top",C=function(){function r(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(S),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var e,t,i,n=r.prototype;return n.toggle=function(e){return this._isShown?this.hide():this.show(e)},n.show=function(e){var t=this;if(!this._isTransitioning&&!this._isShown){l(this._element).hasClass(v)&&(this._isTransitioning=!0);var i=l.Event(_.SHOW,{relatedTarget:e});l(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),l(document.body).addClass(p),this._setEscapeEvent(),this._setResizeEvent(),l(this._element).on(_.CLICK_DISMISS,b,function(e){return t.hide(e)}),l(this._dialog).on(_.MOUSEDOWN_DISMISS,function(){l(t._element).one(_.MOUSEUP_DISMISS,function(e){l(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},n.hide=function(e){var t=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=l.Event(_.HIDE);if(l(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var n=l(this._element).hasClass(v);if(n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),l(document).off(_.FOCUSIN),l(this._element).removeClass(y),l(this._element).off(_.CLICK_DISMISS),l(this._dialog).off(_.MOUSEDOWN_DISMISS),n){var r=o.getTransitionDurationFromElement(this._element);l(this._element).one(o.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(r)}else this._hideModal()}}},n.dispose=function(){l.removeData(this._element,u),l(window,document,this._element,this._backdrop).off(h),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(e){return e=a({},d,e),o.typeCheckConfig(c,e,f),e},n._showElement=function(e){var t=this,i=l(this._element).hasClass(v);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&o.reflow(this._element),l(this._element).addClass(y),this._config.focus&&this._enforceFocus();var n=l.Event(_.SHOWN,{relatedTarget:e}),r=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,l(t._element).trigger(n)};if(i){var s=o.getTransitionDurationFromElement(this._element);l(this._dialog).one(o.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},n._enforceFocus=function(){var t=this;l(document).off(_.FOCUSIN).on(_.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===l(t._element).has(e.target).length&&t._element.focus()})},n._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?l(this._element).on(_.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||l(this._element).off(_.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var t=this;this._isShown?l(window).on(_.RESIZE,function(e){return t.handleUpdate(e)}):l(window).off(_.RESIZE)},n._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){l(document.body).removeClass(p),e._resetAdjustments(),e._resetScrollbar(),l(e._element).trigger(_.HIDDEN)})},n._removeBackdrop=function(){this._backdrop&&(l(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(e){var t=this,i=l(this._element).hasClass(v)?v:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=m,i&&this._backdrop.classList.add(i),l(this._backdrop).appendTo(document.body),l(this._element).on(_.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._element.focus():t.hide())}),i&&o.reflow(this._backdrop),l(this._backdrop).addClass(y),!e)return;if(!i)return void e();var n=o.getTransitionDurationFromElement(this._backdrop);l(this._backdrop).one(o.TRANSITION_END,e).emulateTransitionEnd(n)}else if(!this._isShown&&this._backdrop){l(this._backdrop).removeClass(y);var r=function(){t._removeBackdrop(),e&&e()};if(l(this._element).hasClass(v)){var s=o.getTransitionDurationFromElement(this._backdrop);l(this._backdrop).one(o.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else e&&e()},n._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(E)),t=[].slice.call(document.querySelectorAll(I));l(e).each(function(e,t){var i=t.style.paddingRight,n=l(t).css("padding-right");l(t).data("padding-right",i).css("padding-right",parseFloat(n)+r._scrollbarWidth+"px")}),l(t).each(function(e,t){var i=t.style.marginRight,n=l(t).css("margin-right");l(t).data("margin-right",i).css("margin-right",parseFloat(n)-r._scrollbarWidth+"px")});var i=document.body.style.paddingRight,n=l(document.body).css("padding-right");l(document.body).data("padding-right",i).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},n._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(E));l(e).each(function(e,t){var i=l(t).data("padding-right");l(t).removeData("padding-right"),t.style.paddingRight=i||""});var t=[].slice.call(document.querySelectorAll(""+I));l(t).each(function(e,t){var i=l(t).data("margin-right");void 0!==i&&l(t).css("margin-right",i).removeData("margin-right")});var i=l(document.body).data("padding-right");l(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var e=document.createElement("div");e.className=g,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},r._jQueryInterface=function(i,n){return this.each(function(){var e=l(this).data(u),t=a({},d,l(this).data(),"object"==typeof i&&i?i:{});if(e||(e=new r(this,t),l(this).data(u,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i](n)}else t.show&&e.show(n)})},e=r,i=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return d}}],(t=null)&&s(e.prototype,t),i&&s(e,i),r}(),l(document).on(_.CLICK_DATA_API,i,function(e){var t,i=this,n=o.getSelectorFromElement(this);n&&(t=document.querySelector(n));var r=l(t).data(u)?"toggle":a({},l(t).data(),l(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var s=l(t).one(_.SHOW,function(e){e.isDefaultPrevented()||s.one(_.HIDDEN,function(){l(i).is(":visible")&&i.focus()})});C._jQueryInterface.call(l(t),r,this)}),l.fn[c]=C._jQueryInterface,l.fn[c].Constructor=C,l.fn[c].noConflict=function(){return l.fn[c]=t,C._jQueryInterface},C}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Collapse=t(e.jQuery,e.Util)}(this,function(e,l){"use strict";function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(r){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(e){var t,i,n;t=r,n=s[i=e],i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n})}return r}var c,o,u,t,i,h,d,f,_,g,m,p,v,y,S,b,a;return e=e&&e.hasOwnProperty("default")?e.default:e,l=l&&l.hasOwnProperty("default")?l.default:l,o="collapse",t="."+(u="bs.collapse"),i=(c=e).fn[o],h={toggle:!0,parent:""},d={toggle:"boolean",parent:"(string|element)"},f={SHOW:"show"+t,SHOWN:"shown"+t,HIDE:"hide"+t,HIDDEN:"hidden"+t,CLICK_DATA_API:"click"+t+".data-api"},_="show",g="collapse",m="collapsing",p="collapsed",v="width",y="height",S=".show, .collapsing",b='[data-toggle="collapse"]',a=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=c.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=[].slice.call(document.querySelectorAll(b)),n=0,r=i.length;n<r;n++){var s=i[n],o=l.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(o)).filter(function(e){return e===t});null!==o&&0<a.length&&(this._selector=o,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e,t,i,n=a.prototype;return n.toggle=function(){c(this._element).hasClass(_)?this.hide():this.show()},n.show=function(){var e,t,i=this;if(!this._isTransitioning&&!c(this._element).hasClass(_)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(S)).filter(function(e){return e.getAttribute("data-parent")===i._config.parent})).length&&(e=null),!(e&&(t=c(e).not(this._selector).data(u))&&t._isTransitioning))){var n=c.Event(f.SHOW);if(c(this._element).trigger(n),!n.isDefaultPrevented()){e&&(a._jQueryInterface.call(c(e).not(this._selector),"hide"),t||c(e).data(u,null));var r=this._getDimension();c(this._element).removeClass(g).addClass(m),this._element.style[r]=0,this._triggerArray.length&&c(this._triggerArray).removeClass(p).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(r[0].toUpperCase()+r.slice(1)),o=l.getTransitionDurationFromElement(this._element);c(this._element).one(l.TRANSITION_END,function(){c(i._element).removeClass(m).addClass(g).addClass(_),i._element.style[r]="",i.setTransitioning(!1),c(i._element).trigger(f.SHOWN)}).emulateTransitionEnd(o),this._element.style[r]=this._element[s]+"px"}}},n.hide=function(){var e=this;if(!this._isTransitioning&&c(this._element).hasClass(_)){var t=c.Event(f.HIDE);if(c(this._element).trigger(t),!t.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",l.reflow(this._element),c(this._element).addClass(m).removeClass(g).removeClass(_);var n=this._triggerArray.length;if(0<n)for(var r=0;r<n;r++){var s=this._triggerArray[r],o=l.getSelectorFromElement(s);if(null!==o)c([].slice.call(document.querySelectorAll(o))).hasClass(_)||c(s).addClass(p).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var a=l.getTransitionDurationFromElement(this._element);c(this._element).one(l.TRANSITION_END,function(){e.setTransitioning(!1),c(e._element).removeClass(m).addClass(g).trigger(f.HIDDEN)}).emulateTransitionEnd(a)}}},n.setTransitioning=function(e){this._isTransitioning=e},n.dispose=function(){c.removeData(this._element,u),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(e){return(e=s({},h,e)).toggle=Boolean(e.toggle),l.typeCheckConfig(o,e,d),e},n._getDimension=function(){return c(this._element).hasClass(v)?v:y},n._getParent=function(){var i=this,e=null;l.isElement(this._config.parent)?(e=this._config.parent,void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',n=[].slice.call(e.querySelectorAll(t));return c(n).each(function(e,t){i._addAriaAndCollapsedClass(a._getTargetFromElement(t),[t])}),e},n._addAriaAndCollapsedClass=function(e,t){if(e){var i=c(e).hasClass(_);t.length&&c(t).toggleClass(p,!i).attr("aria-expanded",i)}},a._getTargetFromElement=function(e){var t=l.getSelectorFromElement(e);return t?document.querySelector(t):null},a._jQueryInterface=function(n){return this.each(function(){var e=c(this),t=e.data(u),i=s({},h,e.data(),"object"==typeof n&&n?n:{});if(!t&&i.toggle&&/show|hide/.test(n)&&(i.toggle=!1),t||(t=new a(this,i),e.data(u,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},e=a,i=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return h}}],(t=null)&&r(e.prototype,t),i&&r(e,i),a}(),c(document).on(f.CLICK_DATA_API,b,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=c(this),t=l.getSelectorFromElement(this),n=[].slice.call(document.querySelectorAll(t));c(n).each(function(){var e=c(this),t=e.data(u)?"toggle":i.data();a._jQueryInterface.call(e,t)})}),c.fn[o]=a._jQueryInterface,c.fn[o].Constructor=a,c.fn[o].noConflict=function(){return c.fn[o]=i,a._jQueryInterface},a});