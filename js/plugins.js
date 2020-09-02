!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.Util=t(e.jQuery)}(this,(function(e){"use strict";return function(e){function t(t){var n=this,r=!1;return e(this).one(i.TRANSITION_END,(function(){r=!0})),setTimeout((function(){r||i.triggerTransitionEnd(n)}),t),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");t&&"#"!==t||(t=e.getAttribute("href")||"");try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var i=e(t).css("transition-duration");return parseFloat(i)?(i=i.split(",")[0],1e3*parseFloat(i)):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=n[r],o=t[r],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(s).test(a))throw new Error(e.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+s+'".')}var l}};return e.fn.emulateTransitionEnd=t,e.event.special[i.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},i}(e=e&&e.hasOwnProperty("default")?e.default:e)})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Carousel=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){n(e,t,i[t])}))}return e}return e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,function(e){var n="carousel",s="bs.carousel",o="."+s,a=e.fn[n],l={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},c={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},u="next",h="prev",d="left",f="right",_={SLIDE:"slide"+o,SLID:"slid"+o,KEYDOWN:"keydown"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o,TOUCHEND:"touchend"+o,LOAD_DATA_API:"load"+o+".data-api",CLICK_DATA_API:"click"+o+".data-api"},g="carousel",m="active",p="slide",v="carousel-item-right",y="carousel-item-left",b="carousel-item-next",S="carousel-item-prev",E=".active",I=".active.carousel-item",C=".carousel-item",w=".carousel-item-next, .carousel-item-prev",D=".carousel-indicators",T="[data-slide], [data-slide-to]",O='[data-ride="carousel"]',A=function(){function a(t,i){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(i),this._element=e(t)[0],this._indicatorsElement=this._element.querySelector(D),this._addEventListeners()}var T,O,A,k=a.prototype;return k.next=function(){this._isSliding||this._slide(u)},k.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},k.prev=function(){this._isSliding||this._slide(h)},k.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(w)&&(t.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},k.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},k.to=function(t){var i=this;this._activeElement=this._element.querySelector(I);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(_.SLID,(function(){return i.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var r=t>n?u:h;this._slide(r,this._items[t])}},k.dispose=function(){e(this._element).off(o),e.removeData(this._element,s),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},k._getConfig=function(e){return e=r({},l,e),t.typeCheckConfig(n,e,c),e},k._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(_.KEYDOWN,(function(e){return t._keydown(e)})),"hover"===this._config.pause&&(e(this._element).on(_.MOUSEENTER,(function(e){return t.pause(e)})).on(_.MOUSELEAVE,(function(e){return t.cycle(e)})),"ontouchstart"in document.documentElement&&e(this._element).on(_.TOUCHEND,(function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval)})))},k._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},k._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(C)):[],this._items.indexOf(e)},k._getItemByDirection=function(e,t){var i=e===u,n=e===h,r=this._getItemIndex(t),s=this._items.length-1;if((n&&0===r||i&&r===s)&&!this._config.wrap)return t;var o=(r+(e===h?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},k._triggerSlideEvent=function(t,i){var n=this._getItemIndex(t),r=this._getItemIndex(this._element.querySelector(I)),s=e.Event(_.SLIDE,{relatedTarget:t,direction:i,from:r,to:n});return e(this._element).trigger(s),s},k._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var i=[].slice.call(this._indicatorsElement.querySelectorAll(E));e(i).removeClass(m);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(m)}},k._slide=function(i,n){var r,s,o,a=this,l=this._element.querySelector(I),c=this._getItemIndex(l),h=n||l&&this._getItemByDirection(i,l),g=this._getItemIndex(h),E=Boolean(this._interval);if(i===u?(r=y,s=b,o=d):(r=v,s=S,o=f),h&&e(h).hasClass(m))this._isSliding=!1;else if(!this._triggerSlideEvent(h,o).isDefaultPrevented()&&l&&h){this._isSliding=!0,E&&this.pause(),this._setActiveIndicatorElement(h);var C=e.Event(_.SLID,{relatedTarget:h,direction:o,from:c,to:g});if(e(this._element).hasClass(p)){e(h).addClass(s),t.reflow(h),e(l).addClass(r),e(h).addClass(r);var w=t.getTransitionDurationFromElement(l);e(l).one(t.TRANSITION_END,(function(){e(h).removeClass(r+" "+s).addClass(m),e(l).removeClass(m+" "+s+" "+r),a._isSliding=!1,setTimeout((function(){return e(a._element).trigger(C)}),0)})).emulateTransitionEnd(w)}else e(l).removeClass(m),e(h).addClass(m),this._isSliding=!1,e(this._element).trigger(C);E&&this.cycle()}},a._jQueryInterface=function(t){return this.each((function(){var i=e(this).data(s),n=r({},l,e(this).data());"object"==typeof t&&(n=r({},n,t));var o="string"==typeof t?t:n.slide;if(i||(i=new a(this,n),e(this).data(s,i)),"number"==typeof t)i.to(t);else if("string"==typeof o){if(void 0===i[o])throw new TypeError('No method named "'+o+'"');i[o]()}else n.interval&&(i.pause(),i.cycle())}))},a._dataApiClickHandler=function(i){var n=t.getSelectorFromElement(this);if(n){var o=e(n)[0];if(o&&e(o).hasClass(g)){var l=r({},e(o).data(),e(this).data()),c=this.getAttribute("data-slide-to");c&&(l.interval=!1),a._jQueryInterface.call(e(o),l),c&&e(o).data(s).to(c),i.preventDefault()}}},T=a,A=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return l}}],(O=null)&&i(T.prototype,O),A&&i(T,A),a}();return e(document).on(_.CLICK_DATA_API,T,A._dataApiClickHandler),e(window).on(_.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll(O)),i=0,n=t.length;i<n;i++){var r=e(t[i]);A._jQueryInterface.call(r,r.data())}})),e.fn[n]=A._jQueryInterface,e.fn[n].Constructor=A,e.fn[n].noConflict=function(){return e.fn[n]=a,A._jQueryInterface},A}(e)})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Modal=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){n(e,t,i[t])}))}return e}return e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,function(e){var n="modal",s=".bs.modal",o=e.fn[n],a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},c={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,FOCUSIN:"focusin"+s,RESIZE:"resize"+s,CLICK_DISMISS:"click.dismiss"+s,KEYDOWN_DISMISS:"keydown.dismiss"+s,MOUSEUP_DISMISS:"mouseup.dismiss"+s,MOUSEDOWN_DISMISS:"mousedown.dismiss"+s,CLICK_DATA_API:"click"+s+".data-api"},u="modal-scrollbar-measure",h="modal-backdrop",d="modal-open",f="fade",_="show",g=".modal-dialog",m='[data-toggle="modal"]',p='[data-dismiss="modal"]',v=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",y=".sticky-top",b=function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(g),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var m,b,S,E=o.prototype;return E.toggle=function(e){return this._isShown?this.hide():this.show(e)},E.show=function(t){var i=this;if(!this._isTransitioning&&!this._isShown){e(this._element).hasClass(f)&&(this._isTransitioning=!0);var n=e.Event(c.SHOW,{relatedTarget:t});e(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(d),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(c.CLICK_DISMISS,p,(function(e){return i.hide(e)})),e(this._dialog).on(c.MOUSEDOWN_DISMISS,(function(){e(i._element).one(c.MOUSEUP_DISMISS,(function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return i._showElement(t)})))}},E.hide=function(i){var n=this;if(i&&i.preventDefault(),!this._isTransitioning&&this._isShown){var r=e.Event(c.HIDE);if(e(this._element).trigger(r),this._isShown&&!r.isDefaultPrevented()){this._isShown=!1;var s=e(this._element).hasClass(f);if(s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(c.FOCUSIN),e(this._element).removeClass(_),e(this._element).off(c.CLICK_DISMISS),e(this._dialog).off(c.MOUSEDOWN_DISMISS),s){var o=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,(function(e){return n._hideModal(e)})).emulateTransitionEnd(o)}else this._hideModal()}}},E.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},E.handleUpdate=function(){this._adjustDialog()},E._getConfig=function(e){return e=r({},a,e),t.typeCheckConfig(n,e,l),e},E._showElement=function(i){var n=this,r=e(this._element).hasClass(f);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,r&&t.reflow(this._element),e(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=e.Event(c.SHOWN,{relatedTarget:i}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(r){var a=t.getTransitionDurationFromElement(this._element);e(this._dialog).one(t.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},E._enforceFocus=function(){var t=this;e(document).off(c.FOCUSIN).on(c.FOCUSIN,(function(i){document!==i.target&&t._element!==i.target&&0===e(t._element).has(i.target).length&&t._element.focus()}))},E._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(c.KEYDOWN_DISMISS,(function(e){27===e.which&&(e.preventDefault(),t.hide())})):this._isShown||e(this._element).off(c.KEYDOWN_DISMISS)},E._setResizeEvent=function(){var t=this;this._isShown?e(window).on(c.RESIZE,(function(e){return t.handleUpdate(e)})):e(window).off(c.RESIZE)},E._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass(d),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(c.HIDDEN)}))},E._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},E._showBackdrop=function(i){var n=this,r=e(this._element).hasClass(f)?f:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=h,r&&this._backdrop.classList.add(r),e(this._backdrop).appendTo(document.body),e(this._element).on(c.CLICK_DISMISS,(function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())})),r&&t.reflow(this._backdrop),e(this._backdrop).addClass(_),!i)return;if(!r)return void i();var s=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,i).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(_);var o=function(){n._removeBackdrop(),i&&i()};if(e(this._element).hasClass(f)){var a=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,o).emulateTransitionEnd(a)}else o()}else i&&i()},E._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},E._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},E._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},E._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var i=[].slice.call(document.querySelectorAll(v)),n=[].slice.call(document.querySelectorAll(y));e(i).each((function(i,n){var r=n.style.paddingRight,s=e(n).css("padding-right");e(n).data("padding-right",r).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(n).each((function(i,n){var r=n.style.marginRight,s=e(n).css("margin-right");e(n).data("margin-right",r).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var r=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",r).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}},E._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(v));e(t).each((function(t,i){var n=e(i).data("padding-right");e(i).removeData("padding-right"),i.style.paddingRight=n||""}));var i=[].slice.call(document.querySelectorAll(""+y));e(i).each((function(t,i){var n=e(i).data("margin-right");void 0!==n&&e(i).css("margin-right",n).removeData("margin-right")}));var n=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},E._getScrollbarWidth=function(){var e=document.createElement("div");e.className=u,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},o._jQueryInterface=function(t,i){return this.each((function(){var n=e(this).data("bs.modal"),s=r({},a,e(this).data(),"object"==typeof t&&t?t:{});if(n||(n=new o(this,s),e(this).data("bs.modal",n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t](i)}else s.show&&n.show(i)}))},m=o,S=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return a}}],(b=null)&&i(m.prototype,b),S&&i(m,S),o}();return e(document).on(c.CLICK_DATA_API,m,(function(i){var n,s=this,o=t.getSelectorFromElement(this);o&&(n=document.querySelector(o));var a=e(n).data("bs.modal")?"toggle":r({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||i.preventDefault();var l=e(n).one(c.SHOW,(function(t){t.isDefaultPrevented()||l.one(c.HIDDEN,(function(){e(s).is(":visible")&&s.focus()}))}));b._jQueryInterface.call(e(n),a,this)})),e.fn[n]=b._jQueryInterface,e.fn[n].Constructor=b,e.fn[n].noConflict=function(){return e.fn[n]=o,b._jQueryInterface},b}(e)})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):e.Collapse=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){n(e,t,i[t])}))}return e}return e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,function(e){var n="collapse",s="bs.collapse",o=e.fn[n],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},c={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},u="show",h="collapse",d="collapsing",f="collapsed",_="width",g="height",m=".show, .collapsing",p='[data-toggle="collapse"]',v=function(){function o(i,n){this._isTransitioning=!1,this._element=i,this._config=this._getConfig(n),this._triggerArray=e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+i.id+'"],[data-toggle="collapse"][data-target="#'+i.id+'"]'));for(var r=[].slice.call(document.querySelectorAll(p)),s=0,o=r.length;s<o;s++){var a=r[s],l=t.getSelectorFromElement(a),c=[].slice.call(document.querySelectorAll(l)).filter((function(e){return e===i}));null!==l&&c.length>0&&(this._selector=l,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var v,y,b,S=o.prototype;return S.toggle=function(){e(this._element).hasClass(u)?this.hide():this.show()},S.show=function(){var i,n,r=this;if(!this._isTransitioning&&!e(this._element).hasClass(u)&&(this._parent&&0===(i=[].slice.call(this._parent.querySelectorAll(m)).filter((function(e){return e.getAttribute("data-parent")===r._config.parent}))).length&&(i=null),!(i&&(n=e(i).not(this._selector).data(s))&&n._isTransitioning))){var a=e.Event(c.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){i&&(o._jQueryInterface.call(e(i).not(this._selector),"hide"),n||e(i).data(s,null));var l=this._getDimension();e(this._element).removeClass(h).addClass(d),this._element.style[l]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(f).attr("aria-expanded",!0),this.setTransitioning(!0);var _="scroll"+(l[0].toUpperCase()+l.slice(1)),g=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,(function(){e(r._element).removeClass(d).addClass(h).addClass(u),r._element.style[l]="",r.setTransitioning(!1),e(r._element).trigger(c.SHOWN)})).emulateTransitionEnd(g),this._element.style[l]=this._element[_]+"px"}}},S.hide=function(){var i=this;if(!this._isTransitioning&&e(this._element).hasClass(u)){var n=e.Event(c.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension();this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",t.reflow(this._element),e(this._element).addClass(d).removeClass(h).removeClass(u);var s=this._triggerArray.length;if(s>0)for(var o=0;o<s;o++){var a=this._triggerArray[o],l=t.getSelectorFromElement(a);if(null!==l)e([].slice.call(document.querySelectorAll(l))).hasClass(u)||e(a).addClass(f).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[r]="";var _=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,(function(){i.setTransitioning(!1),e(i._element).removeClass(d).addClass(h).trigger(c.HIDDEN)})).emulateTransitionEnd(_)}}},S.setTransitioning=function(e){this._isTransitioning=e},S.dispose=function(){e.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},S._getConfig=function(e){return(e=r({},a,e)).toggle=Boolean(e.toggle),t.typeCheckConfig(n,e,l),e},S._getDimension=function(){return e(this._element).hasClass(_)?_:g},S._getParent=function(){var i=this,n=null;t.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(r));return e(s).each((function(e,t){i._addAriaAndCollapsedClass(o._getTargetFromElement(t),[t])})),n},S._addAriaAndCollapsedClass=function(t,i){if(t){var n=e(t).hasClass(u);i.length&&e(i).toggleClass(f,!n).attr("aria-expanded",n)}},o._getTargetFromElement=function(e){var i=t.getSelectorFromElement(e);return i?document.querySelector(i):null},o._jQueryInterface=function(t){return this.each((function(){var i=e(this),n=i.data(s),l=r({},a,i.data(),"object"==typeof t&&t?t:{});if(!n&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),n||(n=new o(this,l),i.data(s,n)),"string"==typeof t){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},v=o,b=[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return a}}],(y=null)&&i(v.prototype,y),b&&i(v,b),o}();return e(document).on(c.CLICK_DATA_API,p,(function(i){"A"===i.currentTarget.tagName&&i.preventDefault();var n=e(this),r=t.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(r));e(o).each((function(){var t=e(this),i=t.data(s)?"toggle":n.data();v._jQueryInterface.call(t,i)}))})),e.fn[n]=v._jQueryInterface,e.fn[n].Constructor=v,e.fn[n].noConflict=function(){return e.fn[n]=o,v._jQueryInterface},v}(e)}));