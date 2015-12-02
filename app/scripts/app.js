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
				label.style.transition = (settings.speed / 2) + 's';
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

		//get all elements that match the selector setting
		var inputElements = document.querySelectorAll(settings.selector);
		forEach(inputElements, function(e,i){
			// attach event listeners for each element
			e.addEventListener('focus', eventHandlerFocus, true);
			e.addEventListener('blur', eventHandlerBlur, true);
		});

		settings.callbackAfter();

	};

	//
	// Public APIs
	//

	return JSformLabel;

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJqcy5mb3JtbGFiZWwucGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBWaWN0b3IgTG9uZ29uXHJcbiAqIEB2ZXJzaW9uIDAuMVxyXG4gKiBAYXV0aG9yIHd3dy52aWN0b3Jsb25nb24uY29tXHJcbiAqIEBjb3B5cmlnaHQgVmljdG9yIExvbmdvbiAyMDE1XHJcbiAqL1xyXG5cclxuLy8gRG9jIGNvbnRlbnQgbG9hZGVkXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgICAgICBwbHVnaW4gPSBuZXcgSlNmb3JtTGFiZWwoKTtcclxuXHJcbiAgICAgICAgLy8gdXNlIGRlZmF1bHQgc2V0dGluZ3NcclxuICAgICAgICBwbHVnaW4uaW5pdChzZXR0aW5ncyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG59KSgpO1xyXG5cclxuIiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XHJcblx0XHRkZWZpbmUoW10sIGZhY3Rvcnkocm9vdCkpO1xyXG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cm9vdC5KU2Zvcm1MYWJlbCA9IGZhY3Rvcnkocm9vdCk7XHJcblx0fVxyXG59KSh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcy53aW5kb3cgfHwgdGhpcy5nbG9iYWwsIGZ1bmN0aW9uIChyb290KSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly9cclxuXHQvLyBWYXJpYWJsZXNcclxuXHQvL1xyXG5cclxuXHR2YXIgSlNmb3JtTGFiZWwgPSBmdW5jdGlvbigpIHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblx0XHR0cmFuc2l0aW9uc1N1cHBvcnRlZCA9ICgndHJhbnNpdGlvbicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlKSB8fCAoJ1dlYmtpdFRyYW5zaXRpb24nIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSksIC8vSUUgMTArLCBDaHJvbWUgMSssIFNhZmFyaSAzLjIrLCBGRiA0KyBhbmQgT3BlcmEgMTIrXHJcblx0XHRzdXBwb3J0cyA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvciAmJiAhIXJvb3QuYWRkRXZlbnRMaXN0ZW5lciAmJiAhIXRyYW5zaXRpb25zU3VwcG9ydGVkLCAvLyBGZWF0dXJlIHRlc3RcclxuXHRcdGV2ZW50VGltZW91dCxcclxuXHRcdGRlZmF1bHRzID0ge1xyXG5cdFx0XHRpbml0Q2xhc3M6ICdqcy1mb3JtbGFiZWwtcGx1Z2luJyxcclxuXHRcdFx0Y2FsbGJhY2tCZWZvcmU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2FsbGJhY2tBZnRlcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY29wZTogZG9jdW1lbnQsXHJcblx0XHRcdHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXScsXHJcblx0XHRcdGZvY3VzQ29sb3I6ICcjMGVhZWU4JyxcclxuXHRcdFx0dGV4dENvbG9yOiAnI2ZmZmZmZicsXHJcblx0XHRcdHNwZWVkOiAnLjMnLFxyXG5cdFx0XHRjdXN0b21TdHlsZXM6IGZhbHNlLFxyXG5cdFx0XHRoZWlnaHQ6ICcyNXB4JyxcclxuXHRcdFx0Zm9jdXNDbGFzczogJ2pzLWZvcm1sYWJlbC1wbHVnaW4tZm9jdXMnLFxyXG5cdFx0XHRibHVyQ2xhc3M6ICdqcy1mb3JtbGFiZWwtcGx1Z2luLWJsdXInXHJcblx0XHR9LFxyXG5cdFx0c2V0dGluZ3M7IC8vc2V0dGluZ3Mgb2JqZWN0IHJlc3VsdCBmcm9tIG1lcmdpbmcgZGVmYXVsdCBhbmQgb3B0aW9ucyAoZ2l2ZW4gYXQgaW5pdGlhbGl6YXRpb24pIG9iamVjdHMgXHJcblxyXG5cdC8vwqdcclxuXHQvLyBNZXRob2RzXHJcblx0Ly9cclxuXHJcblx0LyoqXHJcblx0ICogQSBzaW1wbGUgZm9yRWFjaCgpIGltcGxlbWVudGF0aW9uIGZvciBBcnJheXMsIE9iamVjdHMgYW5kIE5vZGVMaXN0c1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R8Tm9kZUxpc3R9IGNvbGxlY3Rpb24gQ29sbGVjdGlvbiBvZiBpdGVtcyB0byBpdGVyYXRlXHJcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIGVhY2ggaXRlcmF0aW9uXHJcblx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R8Tm9kZUxpc3R9IHNjb3BlIE9iamVjdC9Ob2RlTGlzdC9BcnJheSB0aGF0IGZvckVhY2ggaXMgaXRlcmF0aW5nIG92ZXIgKGFrYSBgdGhpc2ApXHJcblx0ICovXHJcblx0dmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY2FsbGJhY2ssIHNjb3BlKSB7XHJcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbGxlY3Rpb24pID09PSAnW29iamVjdCBPYmplY3RdJykge1xyXG5cdFx0XHRmb3IgKHZhciBwcm9wIGluIGNvbGxlY3Rpb24pIHtcclxuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbGxlY3Rpb24sIHByb3ApKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNjb3BlLCBjb2xsZWN0aW9uW3Byb3BdLCBwcm9wLCBjb2xsZWN0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2xsZWN0aW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2suY2FsbChzY29wZSwgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBNZXJnZSBkZWZhdWx0cyB3aXRoIHVzZXIgb3B0aW9uc1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIERlZmF1bHQgc2V0dGluZ3NcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBVc2VyIG9wdGlvbnNcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBNZXJnZWQgdmFsdWVzIG9mIGRlZmF1bHRzIGFuZCBvcHRpb25zXHJcblx0ICovXHJcblx0dmFyIGV4dGVuZCA9IGZ1bmN0aW9uICggZGVmYXVsdHMsIG9wdGlvbnMgKSB7XHJcblx0XHR2YXIgZXh0ZW5kZWQgPSB7fTtcclxuXHRcdGZvckVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IGRlZmF1bHRzW3Byb3BdO1xyXG5cdFx0fSk7XHJcblx0XHRmb3JFYWNoKG9wdGlvbnMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xyXG5cdFx0XHRleHRlbmRlZFtwcm9wXSA9IG9wdGlvbnNbcHJvcF07XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBleHRlbmRlZDtcclxuXHR9O1xyXG5cclxuXHJcblx0dmFyIHByZWZpeHRyYW5zaXRpb24gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBjbG9zZXN0IG1hdGNoaW5nIGVsZW1lbnQgdXAgdGhlIERPTSB0cmVlXHJcblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtIFN0YXJ0aW5nIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgU2VsZWN0b3IgdG8gbWF0Y2ggYWdhaW5zdCAoY2xhc3MsIElELCBvciBkYXRhIGF0dHJpYnV0ZSlcclxuXHQgKiBAcmV0dXJuIHtCb29sZWFufEVsZW1lbnR9IFJldHVybnMgZmFsc2UgaWYgbm90IG1hdGNoIGZvdW5kXHJcblx0ICovXHJcblx0dmFyIGdldENsb3Nlc3QgPSBmdW5jdGlvbiAoZWxlbSwgc2VsZWN0b3IpIHtcclxuXHRcdHZhciBmaXJzdENoYXIgPSBzZWxlY3Rvci5jaGFyQXQoMCk7XHJcblx0XHRmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSB7XHJcblx0XHRcdGlmICggZmlyc3RDaGFyID09PSAnLicgKSB7XHJcblx0XHRcdFx0aWYgKCBlbGVtLmNsYXNzTGlzdC5jb250YWlucyggc2VsZWN0b3Iuc3Vic3RyKDEpICkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoIGZpcnN0Q2hhciA9PT0gJyMnICkge1xyXG5cdFx0XHRcdGlmICggZWxlbS5pZCA9PT0gc2VsZWN0b3Iuc3Vic3RyKDEpICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKCBmaXJzdENoYXIgPT09ICdbJyApIHtcclxuXHRcdFx0XHRpZiAoIGVsZW0uaGFzQXR0cmlidXRlKCBzZWxlY3Rvci5zdWJzdHIoMSwgc2VsZWN0b3IubGVuZ3RoIC0gMikgKSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0XHJcblx0LyoqXHJcblx0ICogSGlkZSBMYWJlbHMgaWYgcGxhY2Vob2xkZXIgaXMgcHJlc2VudGVkLCBzaG93IGlmIG90aGVyd2lzZVxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHJldHVybiB7TnVsbHxFbGVtZW50fSBSZXR1cm5zIGxhYmVsIGFzc2Npb2F0ZWQgd2l0aCBlbGVtZW50IG9yIG51bGwgaWYgbm8gZm91bmRlZCBcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgU2VsZWN0b3IgdG8gbWF0Y2ggYWdhaW5zdFxyXG5cdCAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fE5vZGVMaXN0fSBzY29wZSBPYmplY3QvTm9kZUxpc3QvQXJyYXkgdGhhdCBmb3JFYWNoIGlzIGl0ZXJhdGluZyBvdmVyIChha2EgYHRoaXNgKVxyXG5cdCAqL1xyXG5cdHZhciBoaWRlTGFiZWxzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJlbnQpIHtcclxuXHRcdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG5cdFx0XHRzY29wZSA9IHBhcmVudCB8fCBkb2N1bWVudDtcclxuXHJcblx0XHRmb3JFYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihlLGkpe1xyXG5cdFx0XHQvLyBnZXQgbGFiZWwgYW5kIHBsYWNlaG9sZGVyIGZvciB0aGUgaW5wdXRcclxuXHRcdFx0dmFyIGxhYmVsID0gZ2V0TGFiZWwoZSksXHJcblx0XHRcdFx0cGxhY2Vob2xkZXIgPSBlLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTsgXHJcblxyXG5cdFx0XHQvLyBkaXNwbGF5IGFsbCBsYWJlbHMgYXMgYmxvY2tcclxuXHRcdFx0aWYobGFiZWwgIT09IHVuZGVmaW5lZCkge2xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyB9XHJcblxyXG5cdFx0XHQvLyBoaWRlIHRoZSBsYWJlbCBvbmx5IGlmIHRoZXJlIGlzIGEgcGxhY2Vob2xkZXIgXHJcblx0XHRcdGlmIChwbGFjZWhvbGRlciAhPT0gbnVsbCAmJiBwbGFjZWhvbGRlciAhPT0gJycpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlLnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcclxuXHRcdFx0XHRpZiAoIXNldHRpbmdzLmN1c3RvbVN0eWxlcykge1xyXG5cdFx0XHRcdFx0ZS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuXHRcdFx0XHRcdGUuc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcblx0XHRcdFx0XHRlLnN0eWxlLmhlaWdodCA9IHNldHRpbmdzLmhlaWdodDtcclxuXHRcdFx0XHRcdGxhYmVsLnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5mb2N1c0NvbG9yO1xyXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGUuaGVpZ2h0ID0gc2V0dGluZ3MuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGUuY29sb3IgPSBzZXR0aW5ncy50ZXh0Q29sb3I7XHJcblx0XHRcdFx0XHQvL2xhYmVsLnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHRcdFx0XHRcdC8vbGFiZWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlM2QoMSwwLDEpJztcclxuXHRcdFx0XHRcdGxhYmVsLnN0eWxlLnRyYW5zaXRpb24gPSAoc2V0dGluZ3Muc3BlZWQpICsgJ3MnO1xyXG5cdFx0XHRcdFx0bGFiZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XHJcblx0XHRcdFx0XHQvLyBsYWJlbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cdFx0XHRcdFx0Ly8gbGFiZWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gJyArIChzZXR0aW5ncy5zcGVlZCkgKyAncycgKyAnLCBvcGFjaXR5ICcgKyAoc2V0dGluZ3Muc3BlZWQgLyA0KSArJ3MnO1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGUuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5ibHVyQ2xhc3MpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQvL2Rvbid0IGFwcGx5IGNsYXNzIHRhZ2dsZSAvIGVmZmVjdCBmb3IgaW5wdXRzIHdpdGhvdXQgcGxhY2Vob2xkZXJcclxuXHRcdFx0XHRlLmNsYXNzTGlzdC5hZGQoJ2pzLWZvcm1sYWJlbC1wbHVnaW4taW5hY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sIHBhcmVudCk7XHJcblxyXG5cdH07XHJcblxyXG5cdHZhciByZXZlYWxMYWJlbCA9IGZ1bmN0aW9uIChlbCl7XHJcblxyXG5cdFx0dmFyIGxhYmVsID0gZ2V0TGFiZWwoZWwpO1xyXG5cclxuXHRcdGVsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnJyk7XHJcblxyXG5cdFx0aWYgIChlbC5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3MuYmx1ckNsYXNzKSkge1xyXG5cdFx0XHRpZiAoIXNldHRpbmdzLmN1c3RvbVN0eWxlcykge1xyXG5cdFx0XHRcdC8vIGhpZGUgdGhlIGxhYmVsIG9ubHkgaWYgdGhlcmUgaXMgYSBwbGFjZWhvbGRlciBcclxuXHRcdFx0XHRsYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMClcIjtcclxuXHRcdFx0XHQvLyBsYWJlbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cdFx0XHRcdC8vbGFiZWwuc3R5bGUubWF4SGVpZ2h0ID0gJzUwcHgnO1xyXG5cdFx0XHRcdC8vbGFiZWwuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlM2QoMSwxLDEpJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnanMtZm9ybWxhYmVsLXBsdWdpbi1pbmFjdGl2ZScpKSB7XHJcblxyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmJsdXJDbGFzcyk7IFxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLmZvY3VzQ2xhc3MpOyBcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgaGlkZUxhYmVsID0gZnVuY3Rpb24gKGVsKXtcclxuXHJcblx0XHR2YXIgbGFiZWwgPSBnZXRMYWJlbChlbCksXHJcblx0XHRwbGFjZWhvbGRlciA9ICBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2Vob2xkZXInKSB8fCAnJztcclxuXHJcblx0XHRlbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xyXG5cclxuXHJcblx0XHQvLyBoaWRlIHRoZSBsYWJlbCBvbmx5IGlmIHRoZXJlIGlzIGEgcGxhY2Vob2xkZXIgXHJcblx0XHRpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHNldHRpbmdzLmZvY3VzQ2xhc3MpKSB7XHJcblx0XHRcdGlmICghc2V0dGluZ3MuY3VzdG9tU3R5bGVzKSB7XHJcblx0XHRcdFx0bGFiZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XHJcblx0XHRcdFx0bGFiZWwuc3R5bGUudHJhbnNpdGlvbiA9IChzZXR0aW5ncy5zcGVlZCAvIDIpICsgJ3MnO1xyXG5cdFx0XHRcdC8vIGxhYmVsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcblx0XHRcdFx0Ly8gbGFiZWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gJyArIChzZXR0aW5ncy5zcGVlZCAvIDQpICsgJ3MnICsgJywgb3BhY2l0eSAnICsgKHNldHRpbmdzLnNwZWVkIC8gMikgKydzJztcclxuXHRcdFx0XHQvL2xhYmVsLnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHRcdFx0XHQvL2xhYmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKDEsMCwxKSc7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnanMtZm9ybWxhYmVsLXBsdWdpbi1pbmFjdGl2ZScpKSB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoc2V0dGluZ3MuZm9jdXNDbGFzcyk7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoc2V0dGluZ3MuYmx1ckNsYXNzKTtcdFxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYSBsYWJlbCBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBpbm91dFxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbCBlbGVtZW50IHRvIG1hdGNoIGFnYWluc3RcclxuXHQgKiBAcmV0dXJuIHtOdWxsfEVsZW1lbnR9IFJldHVybnMgbGFiZWwgYXNzY2lvYXRlZCB3aXRoIGVsZW1lbnQgb3IgbnVsbCBpZiBubyBmb3VuZGVkIFxyXG5cdCAqL1xyXG5cdHZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uIChlbCkge1xyXG5cdCAgIHZhciBpZCA9IGVsLmlkLFxyXG5cdCAgIFx0XHRsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpO1xyXG5cdCAgIGZvciggdmFyIGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrICkge1xyXG5cdCAgICAgIGlmIChsYWJlbHNbaV0uZ2V0QXR0cmlidXRlKCdmb3InKSA9PT0gaWQpXHJcblx0ICAgICAgICAgICByZXR1cm4gbGFiZWxzW2ldO1xyXG5cdCAgIH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGUgZXZlbnRzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR2YXIgZXZlbnRIYW5kbGVyRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdHZhciBlbCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdC8vIHZhciBjbG9zZXN0ID0gZ2V0Q2xvc2VzdChlbCwgc2V0dGluZ3Muc2VsZWN0b3IpO1xyXG5cdFx0Ly8gaWYgKCBjbG9zZXN0ICkge1xyXG5cdFx0Ly8gXHQvLyBydW4gbWV0aG9kc1xyXG5cdFx0Ly8gfVxyXG5cdFx0XHJcblx0XHRyZXZlYWxMYWJlbChlbCwgc2V0dGluZ3Muc2NvcGUpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSBldmVudHNcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHZhciBldmVudEhhbmRsZXJCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHR2YXIgZWwgPSBldmVudC50YXJnZXQ7XHJcblx0XHQvLyB2YXIgY2xvc2VzdCA9IGdldENsb3Nlc3QoZWwsIHNldHRpbmdzLnNlbGVjdG9yKTtcclxuXHRcdC8vIGlmICggY2xvc2VzdCApIHtcclxuXHRcdC8vIFx0Ly8gcnVuIG1ldGhvZHNcclxuXHRcdC8vIH1cclxuXHRcdFxyXG5cdFx0aGlkZUxhYmVsKGVsLCBzZXR0aW5ncy5zY29wZSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogT24gd2luZG93IHNjcm9sbCBhbmQgcmVzaXplLCBvbmx5IHJ1biBldmVudHMgYXQgYSByYXRlIG9mIDE1ZnBzIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBldmVudFRpbWVvdXQgVGltZW91dCBmdW5jdGlvblxyXG5cdCAqIEBwYXJhbSAge09iamVjdH0gc2V0dGluZ3NcclxuXHQgKi9cclxuXHR2YXIgZXZlbnRUaHJvdHRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoICFldmVudFRpbWVvdXQgKSB7XHJcblx0XHRcdGV2ZW50VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZXZlbnRUaW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0XHRhY3R1YWxNZXRob2QoIHNldHRpbmdzICk7XHJcblx0XHRcdH0sIDY2KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEZXN0cm95IHRoZSBjdXJyZW50IGluaXRpYWxpemF0aW9uLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRKU2Zvcm1MYWJlbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQvLyBJZiBwbHVnaW4gaXNuJ3QgYWxyZWFkeSBpbml0aWFsaXplZCwgc3RvcFxyXG5cdFx0aWYgKCAhc2V0dGluZ3MgKSByZXR1cm47XHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGluaXQgY2xhc3MgZm9yIGNvbmRpdGlvbmFsIENTU1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHNldHRpbmdzLmluaXRDbGFzcyApO1xyXG5cclxuXHRcdC8vIEB0b2RvIFVuZG8gYW55IG90aGVyIGluaXQgZnVuY3Rpb25zLi4uXHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcblx0XHQvLyBSZXNldCB2YXJpYWJsZXNcclxuXHRcdHNldHRpbmdzID0gbnVsbDtcclxuXHRcdGV2ZW50VGltZW91dCA9IG51bGw7XHJcblxyXG5cclxuXHR9O1xyXG5cclxuXHRcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgUGx1Z2luXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgc2V0dGluZ3NcclxuXHQgKi9cclxuXHRKU2Zvcm1MYWJlbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHJcblx0XHQvLyBmZWF0dXJlIHRlc3RcclxuXHRcdGlmICggIXN1cHBvcnRzICkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIERlc3Ryb3kgYW55IGV4aXN0aW5nIGluaXRpYWxpemF0aW9uc1xyXG5cdFx0dGhpcy5kZXN0cm95KCk7XHJcblxyXG5cdFx0Ly8gTWVyZ2UgdXNlciBvcHRpb25zIHdpdGggZGVmYXVsdHNcclxuXHRcdHNldHRpbmdzID0gZXh0ZW5kKCBkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSApO1xyXG5cclxuXHRcdHNldHRpbmdzLmNhbGxiYWNrQmVmb3JlKCk7XHJcblxyXG5cdFx0Ly8gQWRkIGNsYXNzIHRvIEhUTUwgZWxlbWVudCB0byBhY3RpdmF0ZSBjb25kaXRpb25hbCBDU1NcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCBzZXR0aW5ncy5pbml0Q2xhc3MgKTtcclxuXHJcblx0XHRoaWRlTGFiZWxzKHNldHRpbmdzLnNlbGVjdG9yLCBzZXR0aW5ncy5zY29wZSk7XHJcblxyXG5cdFx0Ly8gQHRvZG8gRG8gc29tZXRoaW5nLi4uXHJcblxyXG5cdFx0Ly9nZXQgYWxsIGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIHNlbGVjdG9yIHNldHRpbmdcclxuXHRcdHZhciBpbnB1dEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5zZWxlY3Rvcik7XHJcblx0XHRmb3JFYWNoKGlucHV0RWxlbWVudHMsIGZ1bmN0aW9uKGUsaSl7XHJcblx0XHRcdC8vIGF0dGFjaCBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggZWxlbWVudFxyXG5cdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZXZlbnRIYW5kbGVyRm9jdXMsIHRydWUpO1xyXG5cdFx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBldmVudEhhbmRsZXJCbHVyLCB0cnVlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNldHRpbmdzLmNhbGxiYWNrQWZ0ZXIoKTtcclxuXHJcblx0fTtcclxuXHJcblx0Ly9cclxuXHQvLyBQdWJsaWMgQVBJc1xyXG5cdC8vXHJcblxyXG5cdHJldHVybiBKU2Zvcm1MYWJlbDtcclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
