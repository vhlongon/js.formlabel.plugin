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