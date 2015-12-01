/**
 * Victor Longon
 * @version 0.1
 * @author www.victorlongon.com
 * @copyright Victor Longon 2015
 */

// Doc content loaded
(function () {

    document.addEventListener("DOMContentLoaded", function() {

        var settings = {},
            plugin = new JSformLabel();

        // use default settings
        plugin.init(settings);

    });

})();


(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.JSformLabel = factory(root);
	}
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//

	var JSformLabel = function() {}, // Object for public APIs
		transitionsSupported = ('transition' in document.documentElement.style) || ('WebkitTransition' in document.documentElement.style), //IE 10+, Chrome 1+, Safari 3.2+, FF 4+ and Opera 12+
		supports = !!document.querySelector && !!root.addEventListener && !!transitionsSupported, // Feature test
		eventTimeout,
		defaults = {
			initClass: 'js-formlabel-plugin',
			callbackBefore: function () {
			},
			callbackAfter: function () {
			},
			scope: document,
			selector: 'input[type="text"], input[type="email"]',
			focusColor: '#0eaee8',
			textColor: '#ffffff',
			speed: '.3',
			customStyles: false,
			height: '25px',
			focusClass: 'js-formlabel-plugin-focus',
			blurClass: 'js-formlabel-plugin-blur'
		},
		settings; //settings object result from merging default and options (given at initialization) objects 

	//§
	// Methods
	//

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function (collection, callback, scope) {
		if (Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if (Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			for (var i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, collection[i], i, collection);
			}
		}
	};

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function ( defaults, options ) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, function (value, prop) {
			extended[prop] = options[prop];
		});
		return extended;
	};


	var prefixtransition = function(){
		
	};

	/**
	 * Get the closest matching element up the DOM tree
	 * @param {Element} elem Starting element
	 * @param {String} selector Selector to match against (class, ID, or data attribute)
	 * @return {Boolean|Element} Returns false if not match found
	 */
	var getClosest = function (elem, selector) {
		var firstChar = selector.charAt(0);
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			if ( firstChar === '.' ) {
				if ( elem.classList.contains( selector.substr(1) ) ) {
					return elem;
				}
			} else if ( firstChar === '#' ) {
				if ( elem.id === selector.substr(1) ) {
					return elem;
				}
			} else if ( firstChar === '[' ) {
				if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
					return elem;
				}
			}
		}
		return false;
	};
	
	/**
	 * Hide Labels if placeholder is presented, show if otherwise
	 * @private
	 * @return {Null|Element} Returns label asscioated with element or null if no founded 
	 * @param {String} selector Selector to match against
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var hideLabels = function (selector, parent) {
		var elements = document.querySelectorAll(selector),
			scope = parent || document;

		forEach(elements, function(e,i){
			// get label and placeholder for the input
			var label = getLabel(e),
				placeholder = e.getAttribute('placeholder'); 

			// display all labels as block
			if(label !== undefined) {label.style.display = 'block'; }

			// hide the label only if there is a placeholder 
			if (placeholder !== null && placeholder !== '') {
				
				e.setAttribute('data-placeholder', placeholder);
				if (!settings.customStyles) {
					e.style.position = "relative";
					e.style.zIndex = "2";
					e.style.height = settings.height;
					label.style.background = settings.focusColor;
					label.style.height = settings.height;
					label.style.color = settings.textColor;
					//label.style.maxHeight = '0';
					//label.style.transform = 'scale3d(1,0,1)';
					label.style.transition = (settings.speed) + 's';
					label.style.transform = "translateY(100%)";
					// label.style.opacity = '0';
					// label.style.transition = 'transform ' + (settings.speed) + 's' + ', opacity ' + (settings.speed / 4) +'s';
				}				
				
				e.classList.add(settings.blurClass);
			}else{
				//don't apply class taggle / effect for inputs without placeholder
				e.classList.add('js-formlabel-plugin-inactive');
			}

		}, parent);

	};

	var revealLabel = function (el){

		var label = getLabel(el);

		el.setAttribute('placeholder', '');

		if  (el.classList.contains(settings.blurClass)) {
			if (!settings.customStyles) {
				// hide the label only if there is a placeholder 
				label.style.transform = "translateY(0)";
				// label.style.opacity = '1';
				//label.style.maxHeight = '50px';
				//label.style.transform = 'scale3d(1,1,1)';
			}
		}
		
		if (!el.classList.contains('js-formlabel-plugin-inactive')) {

			el.classList.remove(settings.blurClass); 
			el.classList.add(settings.focusClass); 
		}
	};

	var hideLabel = function (el){

		var label = getLabel(el),
		placeholder =  el.getAttribute('data-placeholder') || '';

		el.setAttribute('placeholder', placeholder);


		// hide the label only if there is a placeholder 
		if (el.classList.contains(settings.focusClass)) {
			if (!settings.customStyles) {
				label.style.transform = "translateY(100%)";
				// label.style.opacity = '0';
				// label.style.transition = 'transform ' + (settings.speed / 4) + 's' + ', opacity ' + (settings.speed / 2) +'s';
				//label.style.maxHeight = '0';
				//label.style.transform = 'scale3d(1,0,1)';
			}
			
		}
		if (!el.classList.contains('js-formlabel-plugin-inactive')) {
			el.classList.remove(settings.focusClass);
			el.classList.add(settings.blurClass);	
		}
	};


	/**
	 * Get a label associated with a specific inout
	 * @private
	 * @param {Element} el element to match against
	 * @return {Null|Element} Returns label asscioated with element or null if no founded 
	 */
	var getLabel = function (el) {
	   var id = el.id,
	   		labels = document.querySelectorAll('label');
	   for( var i = 0; i < labels.length; i++ ) {
	      if (labels[i].getAttribute('for') === id)
	           return labels[i];
	   }
	};

	/**
	 * Handle events
	 * @private
	 */
	var eventHandlerFocus = function (event) {
		var el = event.target;
		// var closest = getClosest(el, settings.selector);
		// if ( closest ) {
		// 	// run methods
		// }
		
		revealLabel(el, settings.scope);
	};

	/**
	 * Handle events
	 * @private
	 */
	var eventHandlerBlur = function (event) {
		var el = event.target;
		// var closest = getClosest(el, settings.selector);
		// if ( closest ) {
		// 	// run methods
		// }
		
		hideLabel(el, settings.scope);
	};

	/**
	 * On window scroll and resize, only run events at a rate of 15fps for better performance
	 * @private
	 * @param  {Function} eventTimeout Timeout function
	 * @param  {Object} settings
	 */
	var eventThrottler = function () {
		if ( !eventTimeout ) {
			eventTimeout = setTimeout(function() {
				eventTimeout = null;
				actualMethod( settings );
			}, 66);
		}
	};

	/**
	 * Destroy the current initialization.
	 * @public
	 */
	JSformLabel.prototype.destroy = function () {

		// If plugin isn't already initialized, stop
		if ( !settings ) return;

		// Remove init class for conditional CSS
		document.documentElement.classList.remove( settings.initClass );

		// @todo Undo any other init functions...

		// Remove event listeners
		document.removeEventListener('click', eventHandler, false);

		// Reset variables
		settings = null;
		eventTimeout = null;


	};

	


	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
	JSformLabel.prototype.init = function ( options ) {

		// feature test
		if ( !supports ) return;

		// Destroy any existing initializations
		this.destroy();

		// Merge user options with defaults
		settings = extend( defaults, options || {} );

		settings.callbackBefore();

		// Add class to HTML element to activate conditional CSS
		document.documentElement.classList.add( settings.initClass );

		hideLabels(settings.selector, settings.scope);

		// @todo Do something...

		// Listen for events
		document.addEventListener('focus', eventHandlerFocus, true);
		document.addEventListener('blur', eventHandlerBlur, true);
		//document.addEventListener('blur', hideLabels(event.target), false);

		settings.callbackAfter();

	};

	//
	// Public APIs
	//

	return JSformLabel;

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJqcy5mb3JtbGFiZWwucGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVmljdG9yIExvbmdvblxyXG4gKiBAdmVyc2lvbiAwLjFcclxuICogQGF1dGhvciB3d3cudmljdG9ybG9uZ29uLmNvbVxyXG4gKiBAY29weXJpZ2h0IFZpY3RvciBMb25nb24gMjAxNVxyXG4gKi9cclxuXHJcbi8vIERvYyBjb250ZW50IGxvYWRlZFxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSB7fSxcclxuICAgICAgICAgICAgcGx1Z2luID0gbmV3IEpTZm9ybUxhYmVsKCk7XHJcblxyXG4gICAgICAgIC8vIHVzZSBkZWZhdWx0IHNldHRpbmdzXHJcbiAgICAgICAgcGx1Z2luLmluaXQoc2V0dGluZ3MpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSkoKTtcclxuXHJcbiIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xyXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KHJvb3QpKTtcclxuXHR9IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJvb3QuSlNmb3JtTGFiZWwgPSBmYWN0b3J5KHJvb3QpO1xyXG5cdH1cclxufSkodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMud2luZG93IHx8IHRoaXMuZ2xvYmFsLCBmdW5jdGlvbiAocm9vdCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vXHJcblx0Ly8gVmFyaWFibGVzXHJcblx0Ly9cclxuXHJcblx0dmFyIEpTZm9ybUxhYmVsID0gZnVuY3Rpb24oKSB7fSwgLy8gT2JqZWN0IGZvciBwdWJsaWMgQVBJc1xyXG5cdFx0dHJhbnNpdGlvbnNTdXBwb3J0ZWQgPSAoJ3RyYW5zaXRpb24nIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSkgfHwgKCdXZWJraXRUcmFuc2l0aW9uJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUpLCAvL0lFIDEwKywgQ2hyb21lIDErLCBTYWZhcmkgMy4yKywgRkYgNCsgYW5kIE9wZXJhIDEyK1xyXG5cdFx0c3VwcG9ydHMgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgJiYgISFyb290LmFkZEV2ZW50TGlzdGVuZXIgJiYgISF0cmFuc2l0aW9uc1N1cHBvcnRlZCwgLy8gRmVhdHVyZSB0ZXN0XHJcblx0XHRldmVudFRpbWVvdXQsXHJcblx0XHRkZWZhdWx0cyA9IHtcclxuXHRcdFx0aW5pdENsYXNzOiAnanMtZm9ybWxhYmVsLXBsdWdpbicsXHJcblx0XHRcdGNhbGxiYWNrQmVmb3JlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNhbGxiYWNrQWZ0ZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2NvcGU6IGRvY3VtZW50LFxyXG5cdFx0XHRzZWxlY3RvcjogJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0nLFxyXG5cdFx0XHRmb2N1c0NvbG9yOiAnIzBlYWVlOCcsXHJcblx0XHRcdHRleHRDb2xvcjogJyNmZmZmZmYnLFxyXG5cdFx0XHRzcGVlZDogJy4zJyxcclxuXHRcdFx0Y3VzdG9tU3R5bGVzOiBmYWxzZSxcclxuXHRcdFx0aGVpZ2h0OiAnMjVweCcsXHJcblx0XHRcdGZvY3VzQ2xhc3M6ICdqcy1mb3JtbGFiZWwtcGx1Z2luLWZvY3VzJyxcclxuXHRcdFx0Ymx1ckNsYXNzOiAnanMtZm9ybWxhYmVsLXBsdWdpbi1ibHVyJ1xyXG5cdFx0fSxcclxuXHRcdHNldHRpbmdzOyAvL3NldHRpbmdzIG9iamVjdCByZXN1bHQgZnJvbSBtZXJnaW5nIGRlZmF1bHQgYW5kIG9wdGlvbnMgKGdpdmVuIGF0IGluaXRpYWxpemF0aW9uKSBvYmplY3RzIFxyXG5cclxuXHQvL8KnXHJcblx0Ly8gTWV0aG9kc1xyXG5cdC8vXHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgc2ltcGxlIGZvckVhY2goKSBpbXBsZW1lbnRhdGlvbiBmb3IgQXJyYXlzLCBPYmplY3RzIGFuZCBOb2RlTGlzdHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBjb2xsZWN0aW9uIENvbGxlY3Rpb24gb2YgaXRlbXMgdG8gaXRlcmF0ZVxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZXJhdGlvblxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBzY29wZSBPYmplY3QvTm9kZUxpc3QvQXJyYXkgdGhhdCBmb3JFYWNoIGlzIGl0ZXJhdGluZyBvdmVyIChha2EgYHRoaXNgKVxyXG5cdCAqL1xyXG5cdHZhciBmb3JFYWNoID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNhbGxiYWNrLCBzY29wZSkge1xyXG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb2xsZWN0aW9uKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcclxuXHRcdFx0Zm9yICh2YXIgcHJvcCBpbiBjb2xsZWN0aW9uKSB7XHJcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb2xsZWN0aW9uLCBwcm9wKSkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChzY29wZSwgY29sbGVjdGlvbltwcm9wXSwgcHJvcCwgY29sbGVjdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGNvbGxlY3Rpb25baV0sIGksIGNvbGxlY3Rpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogTWVyZ2UgZGVmYXVsdHMgd2l0aCB1c2VyIG9wdGlvbnNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBEZWZhdWx0IHNldHRpbmdzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVXNlciBvcHRpb25zXHJcblx0ICogQHJldHVybnMge09iamVjdH0gTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xyXG5cdCAqL1xyXG5cdHZhciBleHRlbmQgPSBmdW5jdGlvbiAoIGRlZmF1bHRzLCBvcHRpb25zICkge1xyXG5cdFx0dmFyIGV4dGVuZGVkID0ge307XHJcblx0XHRmb3JFYWNoKGRlZmF1bHRzLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcclxuXHRcdFx0ZXh0ZW5kZWRbcHJvcF0gPSBkZWZhdWx0c1twcm9wXTtcclxuXHRcdH0pO1xyXG5cdFx0Zm9yRWFjaChvcHRpb25zLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcclxuXHRcdFx0ZXh0ZW5kZWRbcHJvcF0gPSBvcHRpb25zW3Byb3BdO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZXh0ZW5kZWQ7XHJcblx0fTtcclxuXHJcblxyXG5cdHZhciBwcmVmaXh0cmFuc2l0aW9uID0gZnVuY3Rpb24oKXtcclxuXHRcdFxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgY2xvc2VzdCBtYXRjaGluZyBlbGVtZW50IHVwIHRoZSBET00gdHJlZVxyXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbSBTdGFydGluZyBlbGVtZW50XHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFNlbGVjdG9yIHRvIG1hdGNoIGFnYWluc3QgKGNsYXNzLCBJRCwgb3IgZGF0YSBhdHRyaWJ1dGUpXHJcblx0ICogQHJldHVybiB7Qm9vbGVhbnxFbGVtZW50fSBSZXR1cm5zIGZhbHNlIGlmIG5vdCBtYXRjaCBmb3VuZFxyXG5cdCAqL1xyXG5cdHZhciBnZXRDbG9zZXN0ID0gZnVuY3Rpb24gKGVsZW0sIHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgZmlyc3RDaGFyID0gc2VsZWN0b3IuY2hhckF0KDApO1xyXG5cdFx0Zm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xyXG5cdFx0XHRpZiAoIGZpcnN0Q2hhciA9PT0gJy4nICkge1xyXG5cdFx0XHRcdGlmICggZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoIHNlbGVjdG9yLnN1YnN0cigxKSApICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKCBmaXJzdENoYXIgPT09ICcjJyApIHtcclxuXHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IHNlbGVjdG9yLnN1YnN0cigxKSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICggZmlyc3RDaGFyID09PSAnWycgKSB7XHJcblx0XHRcdFx0aWYgKCBlbGVtLmhhc0F0dHJpYnV0ZSggc2VsZWN0b3Iuc3Vic3RyKDEsIHNlbGVjdG9yLmxlbmd0aCAtIDIpICkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEhpZGUgTGFiZWxzIGlmIHBsYWNlaG9sZGVyIGlzIHByZXNlbnRlZCwgc2hvdyBpZiBvdGhlcndpc2VcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEByZXR1cm4ge051bGx8RWxlbWVudH0gUmV0dXJucyBsYWJlbCBhc3NjaW9hdGVkIHdpdGggZWxlbWVudCBvciBudWxsIGlmIG5vIGZvdW5kZWQgXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFNlbGVjdG9yIHRvIG1hdGNoIGFnYWluc3RcclxuXHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxOb2RlTGlzdH0gc2NvcGUgT2JqZWN0L05vZGVMaXN0L0FycmF5IHRoYXQgZm9yRWFjaCBpcyBpdGVyYXRpbmcgb3ZlciAoYWthIGB0aGlzYClcclxuXHQgKi9cclxuXHR2YXIgaGlkZUxhYmVscyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcGFyZW50KSB7XHJcblx0XHR2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuXHRcdFx0c2NvcGUgPSBwYXJlbnQgfHwgZG9jdW1lbnQ7XHJcblxyXG5cdFx0Zm9yRWFjaChlbGVtZW50cywgZnVuY3Rpb24oZSxpKXtcclxuXHRcdFx0Ly8gZ2V0IGxhYmVsIGFuZCBwbGFjZWhvbGRlciBmb3IgdGhlIGlucHV0XHJcblx0XHRcdHZhciBsYWJlbCA9IGdldExhYmVsKGUpLFxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyID0gZS5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7IFxyXG5cclxuXHRcdFx0Ly8gZGlzcGxheSBhbGwgbGFiZWxzIGFzIGJsb2NrXHJcblx0XHRcdGlmKGxhYmVsICE9PSB1bmRlZmluZWQpIHtsYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgfVxyXG5cclxuXHRcdFx0Ly8gaGlkZSB0aGUgbGFiZWwgb25seSBpZiB0aGVyZSBpcyBhIHBsYWNlaG9sZGVyIFxyXG5cdFx0XHRpZiAocGxhY2Vob2xkZXIgIT09IG51bGwgJiYgcGxhY2Vob2xkZXIgIT09ICcnKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XHJcblx0XHRcdFx0aWYgKCFzZXR0aW5ncy5jdXN0b21TdHlsZXMpIHtcclxuXHRcdFx0XHRcdGUuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcblx0XHRcdFx0XHRlLnN0eWxlLnpJbmRleCA9IFwiMlwiO1xyXG5cdFx0XHRcdFx0ZS5zdHlsZS5oZWlnaHQgPSBzZXR0aW5ncy5oZWlnaHQ7XHJcblx0XHRcdFx0XHRsYWJlbC5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3MuZm9jdXNDb2xvcjtcclxuXHRcdFx0XHRcdGxhYmVsLnN0eWxlLmhlaWdodCA9IHNldHRpbmdzLmhlaWdodDtcclxuXHRcdFx0XHRcdGxhYmVsLnN0eWxlLmNvbG9yID0gc2V0dGluZ3MudGV4dENvbG9yO1xyXG5cdFx0XHRcdFx0Ly9sYWJlbC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XHJcblx0XHRcdFx0XHQvL2xhYmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKDEsMCwxKSc7XHJcblx0XHRcdFx0XHRsYWJlbC5zdHlsZS50cmFuc2l0aW9uID0gKHNldHRpbmdzLnNwZWVkKSArICdzJztcclxuXHRcdFx0XHRcdGxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiO1xyXG5cdFx0XHRcdFx0Ly8gbGFiZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuXHRcdFx0XHRcdC8vIGxhYmVsLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtICcgKyAoc2V0dGluZ3Muc3BlZWQpICsgJ3MnICsgJywgb3BhY2l0eSAnICsgKHNldHRpbmdzLnNwZWVkIC8gNCkgKydzJztcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlLmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuYmx1ckNsYXNzKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Ly9kb24ndCBhcHBseSBjbGFzcyB0YWdnbGUgLyBlZmZlY3QgZm9yIGlucHV0cyB3aXRob3V0IHBsYWNlaG9sZGVyXHJcblx0XHRcdFx0ZS5jbGFzc0xpc3QuYWRkKCdqcy1mb3JtbGFiZWwtcGx1Z2luLWluYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LCBwYXJlbnQpO1xyXG5cclxuXHR9O1xyXG5cclxuXHR2YXIgcmV2ZWFsTGFiZWwgPSBmdW5jdGlvbiAoZWwpe1xyXG5cclxuXHRcdHZhciBsYWJlbCA9IGdldExhYmVsKGVsKTtcclxuXHJcblx0XHRlbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJycpO1xyXG5cclxuXHRcdGlmICAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNldHRpbmdzLmJsdXJDbGFzcykpIHtcclxuXHRcdFx0aWYgKCFzZXR0aW5ncy5jdXN0b21TdHlsZXMpIHtcclxuXHRcdFx0XHQvLyBoaWRlIHRoZSBsYWJlbCBvbmx5IGlmIHRoZXJlIGlzIGEgcGxhY2Vob2xkZXIgXHJcblx0XHRcdFx0bGFiZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDApXCI7XHJcblx0XHRcdFx0Ly8gbGFiZWwuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHRcdFx0XHQvL2xhYmVsLnN0eWxlLm1heEhlaWdodCA9ICc1MHB4JztcclxuXHRcdFx0XHQvL2xhYmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKDEsMSwxKSc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWZvcm1sYWJlbC1wbHVnaW4taW5hY3RpdmUnKSkge1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5ibHVyQ2xhc3MpOyBcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5mb2N1c0NsYXNzKTsgXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIGhpZGVMYWJlbCA9IGZ1bmN0aW9uIChlbCl7XHJcblxyXG5cdFx0dmFyIGxhYmVsID0gZ2V0TGFiZWwoZWwpLFxyXG5cdFx0cGxhY2Vob2xkZXIgPSAgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBsYWNlaG9sZGVyJykgfHwgJyc7XHJcblxyXG5cdFx0ZWwuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHJcblxyXG5cdFx0Ly8gaGlkZSB0aGUgbGFiZWwgb25seSBpZiB0aGVyZSBpcyBhIHBsYWNlaG9sZGVyIFxyXG5cdFx0aWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhzZXR0aW5ncy5mb2N1c0NsYXNzKSkge1xyXG5cdFx0XHRpZiAoIXNldHRpbmdzLmN1c3RvbVN0eWxlcykge1xyXG5cdFx0XHRcdGxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiO1xyXG5cdFx0XHRcdC8vIGxhYmVsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcblx0XHRcdFx0Ly8gbGFiZWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gJyArIChzZXR0aW5ncy5zcGVlZCAvIDQpICsgJ3MnICsgJywgb3BhY2l0eSAnICsgKHNldHRpbmdzLnNwZWVkIC8gMikgKydzJztcclxuXHRcdFx0XHQvL2xhYmVsLnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHRcdFx0XHQvL2xhYmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKDEsMCwxKSc7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnanMtZm9ybWxhYmVsLXBsdWdpbi1pbmFjdGl2ZScpKSB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuZm9jdXNDbGFzcyk7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuYmx1ckNsYXNzKTtcdFxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSBsYWJlbCBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBpbm91dFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbCBlbGVtZW50IHRvIG1hdGNoIGFnYWluc3RcclxuXHQgKiBAcmV0dXJuIHtOdWxsfEVsZW1lbnR9IFJldHVybnMgbGFiZWwgYXNzY2lvYXRlZCB3aXRoIGVsZW1lbnQgb3IgbnVsbCBpZiBubyBmb3VuZGVkIFxyXG5cdCAqL1xyXG5cdHZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uIChlbCkge1xyXG5cdCAgIHZhciBpZCA9IGVsLmlkLFxyXG5cdCAgIFx0XHRsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpO1xyXG5cdCAgIGZvciggdmFyIGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrICkge1xyXG5cdCAgICAgIGlmIChsYWJlbHNbaV0uZ2V0QXR0cmlidXRlKCdmb3InKSA9PT0gaWQpXHJcblx0ICAgICAgICAgICByZXR1cm4gbGFiZWxzW2ldO1xyXG5cdCAgIH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGUgZXZlbnRzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgZXZlbnRIYW5kbGVyRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdHZhciBlbCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdC8vIHZhciBjbG9zZXN0ID0gZ2V0Q2xvc2VzdChlbCwgc2V0dGluZ3Muc2VsZWN0b3IpO1xyXG5cdFx0Ly8gaWYgKCBjbG9zZXN0ICkge1xyXG5cdFx0Ly8gXHQvLyBydW4gbWV0aG9kc1xyXG5cdFx0Ly8gfVxyXG5cdFx0XHJcblx0XHRyZXZlYWxMYWJlbChlbCwgc2V0dGluZ3Muc2NvcGUpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSBldmVudHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBldmVudEhhbmRsZXJCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHR2YXIgZWwgPSBldmVudC50YXJnZXQ7XHJcblx0XHQvLyB2YXIgY2xvc2VzdCA9IGdldENsb3Nlc3QoZWwsIHNldHRpbmdzLnNlbGVjdG9yKTtcclxuXHRcdC8vIGlmICggY2xvc2VzdCApIHtcclxuXHRcdC8vIFx0Ly8gcnVuIG1ldGhvZHNcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdFx0aGlkZUxhYmVsKGVsLCBzZXR0aW5ncy5zY29wZSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogT24gd2luZG93IHNjcm9sbCBhbmQgcmVzaXplLCBvbmx5IHJ1biBldmVudHMgYXQgYSByYXRlIG9mIDE1ZnBzIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBldmVudFRpbWVvdXQgVGltZW91dCBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2V0dGluZ3NcclxuXHQgKi9cclxuXHR2YXIgZXZlbnRUaHJvdHRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoICFldmVudFRpbWVvdXQgKSB7XHJcblx0XHRcdGV2ZW50VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZXZlbnRUaW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0XHRhY3R1YWxNZXRob2QoIHNldHRpbmdzICk7XHJcblx0XHRcdH0sIDY2KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEZXN0cm95IHRoZSBjdXJyZW50IGluaXRpYWxpemF0aW9uLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRKU2Zvcm1MYWJlbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQvLyBJZiBwbHVnaW4gaXNuJ3QgYWxyZWFkeSBpbml0aWFsaXplZCwgc3RvcFxyXG5cdFx0aWYgKCAhc2V0dGluZ3MgKSByZXR1cm47XHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGluaXQgY2xhc3MgZm9yIGNvbmRpdGlvbmFsIENTU1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHNldHRpbmdzLmluaXRDbGFzcyApO1xyXG5cclxuXHRcdC8vIEB0b2RvIFVuZG8gYW55IG90aGVyIGluaXQgZnVuY3Rpb25zLi4uXHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcblx0XHQvLyBSZXNldCB2YXJpYWJsZXNcclxuXHRcdHNldHRpbmdzID0gbnVsbDtcclxuXHRcdGV2ZW50VGltZW91dCA9IG51bGw7XHJcblxyXG5cclxuXHR9O1xyXG5cclxuXHRcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgUGx1Z2luXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHRKU2Zvcm1MYWJlbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHJcblx0XHQvLyBmZWF0dXJlIHRlc3RcclxuXHRcdGlmICggIXN1cHBvcnRzICkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIERlc3Ryb3kgYW55IGV4aXN0aW5nIGluaXRpYWxpemF0aW9uc1xyXG5cdFx0dGhpcy5kZXN0cm95KCk7XHJcblxyXG5cdFx0Ly8gTWVyZ2UgdXNlciBvcHRpb25zIHdpdGggZGVmYXVsdHNcclxuXHRcdHNldHRpbmdzID0gZXh0ZW5kKCBkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSApO1xyXG5cclxuXHRcdHNldHRpbmdzLmNhbGxiYWNrQmVmb3JlKCk7XHJcblxyXG5cdFx0Ly8gQWRkIGNsYXNzIHRvIEhUTUwgZWxlbWVudCB0byBhY3RpdmF0ZSBjb25kaXRpb25hbCBDU1NcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCBzZXR0aW5ncy5pbml0Q2xhc3MgKTtcclxuXHJcblx0XHRoaWRlTGFiZWxzKHNldHRpbmdzLnNlbGVjdG9yLCBzZXR0aW5ncy5zY29wZSk7XHJcblxyXG5cdFx0Ly8gQHRvZG8gRG8gc29tZXRoaW5nLi4uXHJcblxyXG5cdFx0Ly8gTGlzdGVuIGZvciBldmVudHNcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZXZlbnRIYW5kbGVyRm9jdXMsIHRydWUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV2ZW50SGFuZGxlckJsdXIsIHRydWUpO1xyXG5cdFx0Ly9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGlkZUxhYmVscyhldmVudC50YXJnZXQpLCBmYWxzZSk7XHJcblxyXG5cdFx0c2V0dGluZ3MuY2FsbGJhY2tBZnRlcigpO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvL1xyXG5cdC8vIFB1YmxpYyBBUElzXHJcblx0Ly9cclxuXHJcblx0cmV0dXJuIEpTZm9ybUxhYmVsO1xyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
