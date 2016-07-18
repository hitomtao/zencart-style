/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

;(function (name, context, factory) {
	var matchMedia = window.matchMedia;

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory(matchMedia);
	}
	else if (typeof define === 'function' && define.amd) {
		define(function() {
			return (context[name] = factory(matchMedia));
		});
	}
	else {
		context[name] = factory(matchMedia);
	}
}('enquire', this, function (matchMedia) {

	'use strict';

    /*jshint unused:false */
    /**
     * Helper function for iterating over a collection
     *
     * @param collection
     * @param fn
     */
    function each(collection, fn) {
        var i      = 0,
            length = collection.length,
            cont;

        for(i; i < length; i++) {
            cont = fn(collection[i], i);
            if(cont === false) {
                break; //allow early exit
            }
        }
    }

    /**
     * Helper function for determining whether target object is an array
     *
     * @param target the object under test
     * @return {Boolean} true if array, false otherwise
     */
    function isArray(target) {
        return Object.prototype.toString.apply(target) === '[object Array]';
    }

    /**
     * Helper function for determining whether target object is a function
     *
     * @param target the object under test
     * @return {Boolean} true if function, false otherwise
     */
    function isFunction(target) {
        return typeof target === 'function';
    }

    /**
     * Delegate to handle a media query being matched and unmatched.
     *
     * @param {object} options
     * @param {function} options.match callback for when the media query is matched
     * @param {function} [options.unmatch] callback for when the media query is unmatched
     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
     * @constructor
     */
    function QueryHandler(options) {
        this.options = options;
        !options.deferSetup && this.setup();
    }
    QueryHandler.prototype = {

        /**
         * coordinates setup of the handler
         *
         * @function
         */
        setup : function() {
            if(this.options.setup) {
                this.options.setup();
            }
            this.initialised = true;
        },

        /**
         * coordinates setup and triggering of the handler
         *
         * @function
         */
        on : function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
        },

        /**
         * coordinates the unmatch event for the handler
         *
         * @function
         */
        off : function() {
            this.options.unmatch && this.options.unmatch();
        },

        /**
         * called when a handler is to be destroyed.
         * delegates to the destroy or unmatch callbacks, depending on availability.
         *
         * @function
         */
        destroy : function() {
            this.options.destroy ? this.options.destroy() : this.off();
        },

        /**
         * determines equality by reference.
         * if object is supplied compare options, if function, compare match callback
         *
         * @function
         * @param {object || function} [target] the target for comparison
         */
        equals : function(target) {
            return this.options === target || this.options.match === target;
        }

    };
    /**
     * Represents a single media query, manages it's state and registered handlers for this query
     *
     * @constructor
     * @param {string} query the media query string
     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
     */
    function MediaQuery(query, isUnconditional) {
        this.query = query;
        this.isUnconditional = isUnconditional;
        this.handlers = [];
        this.mql = matchMedia(query);

        var self = this;
        this.listener = function(mql) {
            self.mql = mql;
            self.assess();
        };
        this.mql.addListener(this.listener);
    }
    MediaQuery.prototype = {

        /**
         * add a handler for this query, triggering if already active
         *
         * @param {object} handler
         * @param {function} handler.match callback for when query is activated
         * @param {function} [handler.unmatch] callback for when query is deactivated
         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
         */
        addHandler : function(handler) {
            var qh = new QueryHandler(handler);
            this.handlers.push(qh);

            this.matches() && qh.on();
        },

        /**
         * removes the given handler from the collection, and calls it's destroy methods
         * 
         * @param {object || function} handler the handler to remove
         */
        removeHandler : function(handler) {
            var handlers = this.handlers;
            each(handlers, function(h, i) {
                if(h.equals(handler)) {
                    h.destroy();
                    return !handlers.splice(i,1); //remove from array and exit each early
                }
            });
        },

        /**
         * Determine whether the media query should be considered a match
         * 
         * @return {Boolean} true if media query can be considered a match, false otherwise
         */
        matches : function() {
            return this.mql.matches || this.isUnconditional;
        },

        /**
         * Clears all handlers and unbinds events
         */
        clear : function() {
            each(this.handlers, function(handler) {
                handler.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0; //clear array
        },

        /*
         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
         */
        assess : function() {
            var action = this.matches() ? 'on' : 'off';

            each(this.handlers, function(handler) {
                handler[action]();
            });
        }
    };
    /**
     * Allows for registration of query handlers.
     * Manages the query handler's state and is responsible for wiring up browser events
     *
     * @constructor
     */
    function MediaQueryDispatch () {
        if(!matchMedia) {
            throw new Error('matchMedia not present, legacy browsers require a polyfill');
        }

        this.queries = {};
        this.browserIsIncapable = !matchMedia('only all').matches;
    }

    MediaQueryDispatch.prototype = {

        /**
         * Registers a handler for the given media query
         *
         * @param {string} q the media query
         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
         * @param {function} options.match fired when query matched
         * @param {function} [options.unmatch] fired when a query is no longer matched
         * @param {function} [options.setup] fired when handler first triggered
         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
         */
        register : function(q, options, shouldDegrade) {
            var queries         = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;

            if(!queries[q]) {
                queries[q] = new MediaQuery(q, isUnconditional);
            }

            //normalise to object in an array
            if(isFunction(options)) {
                options = { match : options };
            }
            if(!isArray(options)) {
                options = [options];
            }
            each(options, function(handler) {
                if (isFunction(handler)) {
                    handler = { match : handler };
                }
                queries[q].addHandler(handler);
            });

            return this;
        },

        /**
         * unregisters a query and all it's handlers, or a specific handler for a query
         *
         * @param {string} q the media query to target
         * @param {object || function} [handler] specific handler to unregister
         */
        unregister : function(q, handler) {
            var query = this.queries[q];

            if(query) {
                if(handler) {
                    query.removeHandler(handler);
                }
                else {
                    query.clear();
                    delete this.queries[q];
                }
            }

            return this;
        }
    };

	return new MediaQueryDispatch();

}));

/*
 * Bootstrap_Helper.js - JavaScript routines for Zencart Style
 * Copyright (c) 2016 Dayo Akanji <dakanji@user.noreply.github.com>
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function(){
	$('.bs-component [data-toggle="popover"]').popover();
	$('.bs-component [data-toggle="tooltip"]').tooltip();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAwX2VucXVpcmVfMjEyLmpzIiwiNTFfY3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ6ZW5jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBlbnF1aXJlLmpzIHYyLjEuMiAtIEF3ZXNvbWUgTWVkaWEgUXVlcmllcyBpbiBKYXZhU2NyaXB0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgTmljayBXaWxsaWFtcyAtIGh0dHA6Ly93aWNreS5uaWxsaWEubXMvZW5xdWlyZS5qc1xuICogTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqL1xuXG47KGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0LCBmYWN0b3J5KSB7XG5cdHZhciBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWE7XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KG1hdGNoTWVkaWEpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAoY29udGV4dFtuYW1lXSA9IGZhY3RvcnkobWF0Y2hNZWRpYSkpO1xuXHRcdH0pO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGNvbnRleHRbbmFtZV0gPSBmYWN0b3J5KG1hdGNoTWVkaWEpO1xuXHR9XG59KCdlbnF1aXJlJywgdGhpcywgZnVuY3Rpb24gKG1hdGNoTWVkaWEpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cbiAgICAvKmpzaGludCB1bnVzZWQ6ZmFsc2UgKi9cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGEgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0gZm5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGZuKSB7XG4gICAgICAgIHZhciBpICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBjb250O1xuXG4gICAgICAgIGZvcihpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnQgPSBmbihjb2xsZWN0aW9uW2ldLCBpKTtcbiAgICAgICAgICAgIGlmKGNvbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vYWxsb3cgZWFybHkgZXhpdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYW4gYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhcnJheSwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNBcnJheSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodGFyZ2V0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdGFyZ2V0IG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IHRoZSBvYmplY3QgdW5kZXIgdGVzdFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgZnVuY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGVnYXRlIHRvIGhhbmRsZSBhIG1lZGlhIHF1ZXJ5IGJlaW5nIG1hdGNoZWQgYW5kIHVubWF0Y2hlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyB1bm1hdGNoZWRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb3B0aW9ucy5zZXR1cF0gb25lLXRpbWUgY2FsbGJhY2sgdHJpZ2dlcmVkIHRoZSBmaXJzdCB0aW1lIGEgcXVlcnkgaXMgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gc2hvdWxkIHRoZSBzZXR1cCBjYWxsYmFjayBiZSBydW4gaW1tZWRpYXRlbHksIHJhdGhlciB0aGFuIGZpcnN0IHRpbWUgcXVlcnkgaXMgbWF0Y2hlZD9cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBRdWVyeUhhbmRsZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAhb3B0aW9ucy5kZWZlclNldHVwICYmIHRoaXMuc2V0dXAoKTtcbiAgICB9XG4gICAgUXVlcnlIYW5kbGVyLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogY29vcmRpbmF0ZXMgc2V0dXAgb2YgdGhlIGhhbmRsZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBzZXR1cCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLnNldHVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldHVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY29vcmRpbmF0ZXMgc2V0dXAgYW5kIHRyaWdnZXJpbmcgb2YgdGhlIGhhbmRsZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBvbiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgIXRoaXMuaW5pdGlhbGlzZWQgJiYgdGhpcy5zZXR1cCgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1hdGNoICYmIHRoaXMub3B0aW9ucy5tYXRjaCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjb29yZGluYXRlcyB0aGUgdW5tYXRjaCBldmVudCBmb3IgdGhlIGhhbmRsZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBvZmYgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy51bm1hdGNoICYmIHRoaXMub3B0aW9ucy51bm1hdGNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB3aGVuIGEgaGFuZGxlciBpcyB0byBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIGRlbGVnYXRlcyB0byB0aGUgZGVzdHJveSBvciB1bm1hdGNoIGNhbGxiYWNrcywgZGVwZW5kaW5nIG9uIGF2YWlsYWJpbGl0eS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVzdHJveSA/IHRoaXMub3B0aW9ucy5kZXN0cm95KCkgOiB0aGlzLm9mZigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkZXRlcm1pbmVzIGVxdWFsaXR5IGJ5IHJlZmVyZW5jZS5cbiAgICAgICAgICogaWYgb2JqZWN0IGlzIHN1cHBsaWVkIGNvbXBhcmUgb3B0aW9ucywgaWYgZnVuY3Rpb24sIGNvbXBhcmUgbWF0Y2ggY2FsbGJhY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbdGFyZ2V0XSB0aGUgdGFyZ2V0IGZvciBjb21wYXJpc29uXG4gICAgICAgICAqL1xuICAgICAgICBlcXVhbHMgOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPT09IHRhcmdldCB8fCB0aGlzLm9wdGlvbnMubWF0Y2ggPT09IHRhcmdldDtcbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIGEgc2luZ2xlIG1lZGlhIHF1ZXJ5LCBtYW5hZ2VzIGl0J3Mgc3RhdGUgYW5kIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHRoaXMgcXVlcnlcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgbWVkaWEgcXVlcnkgc3RyaW5nXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaXNVbmNvbmRpdGlvbmFsPWZhbHNlXSB3aGV0aGVyIHRoZSBtZWRpYSBxdWVyeSBzaG91bGQgcnVuIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgY29uZGl0aW9ucyBhcmUgbWV0LiBQcmltYXJpbHkgZm9yIGhlbHBpbmcgb2xkZXIgYnJvd3NlcnMgZGVhbCB3aXRoIG1vYmlsZS1maXJzdCBkZXNpZ25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNZWRpYVF1ZXJ5KHF1ZXJ5LCBpc1VuY29uZGl0aW9uYWwpIHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmlzVW5jb25kaXRpb25hbCA9IGlzVW5jb25kaXRpb25hbDtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLm1xbCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uKG1xbCkge1xuICAgICAgICAgICAgc2VsZi5tcWwgPSBtcWw7XG4gICAgICAgICAgICBzZWxmLmFzc2VzcygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKTtcbiAgICB9XG4gICAgTWVkaWFRdWVyeS5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFkZCBhIGhhbmRsZXIgZm9yIHRoaXMgcXVlcnksIHRyaWdnZXJpbmcgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IGhhbmRsZXJcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5tYXRjaCBjYWxsYmFjayBmb3Igd2hlbiBxdWVyeSBpcyBhY3RpdmF0ZWRcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIudW5tYXRjaF0gY2FsbGJhY2sgZm9yIHdoZW4gcXVlcnkgaXMgZGVhY3RpdmF0ZWRcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIuc2V0dXBdIGNhbGxiYWNrIGZvciBpbW1lZGlhdGUgZXhlY3V0aW9uIHdoZW4gYSBxdWVyeSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWRcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbaGFuZGxlci5kZWZlclNldHVwPWZhbHNlXSBzaG91bGQgdGhlIHNldHVwIGNhbGxiYWNrIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBoYW5kbGVyIGlzIG1hdGNoZWQ/XG4gICAgICAgICAqL1xuICAgICAgICBhZGRIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgdmFyIHFoID0gbmV3IFF1ZXJ5SGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChxaCk7XG5cbiAgICAgICAgICAgIHRoaXMubWF0Y2hlcygpICYmIHFoLm9uKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlbW92ZXMgdGhlIGdpdmVuIGhhbmRsZXIgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIGNhbGxzIGl0J3MgZGVzdHJveSBtZXRob2RzXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gaGFuZGxlciB0aGUgaGFuZGxlciB0byByZW1vdmVcbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUhhbmRsZXIgOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICAgICAgZWFjaChoYW5kbGVycywgZnVuY3Rpb24oaCwgaSkge1xuICAgICAgICAgICAgICAgIGlmKGguZXF1YWxzKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGguZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWhhbmRsZXJzLnNwbGljZShpLDEpOyAvL3JlbW92ZSBmcm9tIGFycmF5IGFuZCBleGl0IGVhY2ggZWFybHlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgbWVkaWEgcXVlcnkgY2FuIGJlIGNvbnNpZGVyZWQgYSBtYXRjaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAqL1xuICAgICAgICBtYXRjaGVzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tcWwubWF0Y2hlcyB8fCB0aGlzLmlzVW5jb25kaXRpb25hbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXJzIGFsbCBoYW5kbGVycyBhbmQgdW5iaW5kcyBldmVudHNcbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLmxlbmd0aCA9IDA7IC8vY2xlYXIgYXJyYXlcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgKiBBc3Nlc3NlcyB0aGUgcXVlcnksIHR1cm5pbmcgb24gYWxsIGhhbmRsZXJzIGlmIGl0IG1hdGNoZXMsIHR1cm5pbmcgdGhlbSBvZmYgaWYgaXQgZG9lc24ndCBtYXRjaFxuICAgICAgICAgKi9cbiAgICAgICAgYXNzZXNzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5tYXRjaGVzKCkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgICAgIGVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJbYWN0aW9uXSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3IgcmVnaXN0cmF0aW9uIG9mIHF1ZXJ5IGhhbmRsZXJzLlxuICAgICAqIE1hbmFnZXMgdGhlIHF1ZXJ5IGhhbmRsZXIncyBzdGF0ZSBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHdpcmluZyB1cCBicm93c2VyIGV2ZW50c1xuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gTWVkaWFRdWVyeURpc3BhdGNoICgpIHtcbiAgICAgICAgaWYoIW1hdGNoTWVkaWEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWF0Y2hNZWRpYSBub3QgcHJlc2VudCwgbGVnYWN5IGJyb3dzZXJzIHJlcXVpcmUgYSBwb2x5ZmlsbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5xdWVyaWVzID0ge307XG4gICAgICAgIHRoaXMuYnJvd3NlcklzSW5jYXBhYmxlID0gIW1hdGNoTWVkaWEoJ29ubHkgYWxsJykubWF0Y2hlcztcbiAgICB9XG5cbiAgICBNZWRpYVF1ZXJ5RGlzcGF0Y2gucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnlcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5XG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IEFycmF5IHx8IEZ1bmN0aW9ufSBvcHRpb25zIGVpdGhlciBhIHNpbmdsZSBxdWVyeSBoYW5kbGVyIG9iamVjdCwgYSBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgcXVlcnkgaGFuZGxlcnNcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXRjaCBmaXJlZCB3aGVuIHF1ZXJ5IG1hdGNoZWRcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMudW5tYXRjaF0gZmlyZWQgd2hlbiBhIHF1ZXJ5IGlzIG5vIGxvbmdlciBtYXRjaGVkXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBmaXJlZCB3aGVuIGhhbmRsZXIgZmlyc3QgdHJpZ2dlcmVkXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVmZXJTZXR1cD1mYWxzZV0gd2hldGhlciBzZXR1cCBzaG91bGQgYmUgcnVuIGltbWVkaWF0ZWx5IG9yIGRlZmVycmVkIHVudGlsIHF1ZXJ5IGlzIGZpcnN0IG1hdGNoZWRcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbc2hvdWxkRGVncmFkZT1mYWxzZV0gd2hldGhlciB0aGlzIHBhcnRpY3VsYXIgbWVkaWEgcXVlcnkgc2hvdWxkIGFsd2F5cyBydW4gb24gaW5jYXBhYmxlIGJyb3dzZXJzXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlciA6IGZ1bmN0aW9uKHEsIG9wdGlvbnMsIHNob3VsZERlZ3JhZGUpIHtcbiAgICAgICAgICAgIHZhciBxdWVyaWVzICAgICAgICAgPSB0aGlzLnF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgaXNVbmNvbmRpdGlvbmFsID0gc2hvdWxkRGVncmFkZSAmJiB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZTtcblxuICAgICAgICAgICAgaWYoIXF1ZXJpZXNbcV0pIHtcbiAgICAgICAgICAgICAgICBxdWVyaWVzW3FdID0gbmV3IE1lZGlhUXVlcnkocSwgaXNVbmNvbmRpdGlvbmFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9ub3JtYWxpc2UgdG8gb2JqZWN0IGluIGFuIGFycmF5XG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWF0Y2ggOiBvcHRpb25zIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBbb3B0aW9uc107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyID0geyBtYXRjaCA6IGhhbmRsZXIgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcXVlcmllc1txXS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB1bnJlZ2lzdGVycyBhIHF1ZXJ5IGFuZCBhbGwgaXQncyBoYW5kbGVycywgb3IgYSBzcGVjaWZpYyBoYW5kbGVyIGZvciBhIHF1ZXJ5XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeSB0byB0YXJnZXRcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3QgfHwgZnVuY3Rpb259IFtoYW5kbGVyXSBzcGVjaWZpYyBoYW5kbGVyIHRvIHVucmVnaXN0ZXJcbiAgICAgICAgICovXG4gICAgICAgIHVucmVnaXN0ZXIgOiBmdW5jdGlvbihxLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbcV07XG5cbiAgICAgICAgICAgIGlmKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5yZW1vdmVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcmllc1txXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfTtcblxuXHRyZXR1cm4gbmV3IE1lZGlhUXVlcnlEaXNwYXRjaCgpO1xuXG59KSk7XG4iLCIvKlxuICogQm9vdHN0cmFwX0hlbHBlci5qcyAtIEphdmFTY3JpcHQgcm91dGluZXMgZm9yIFplbmNhcnQgU3R5bGVcbiAqIENvcHlyaWdodCAoYykgMjAxNiBEYXlvIEFrYW5qaSA8ZGFrYW5qaUB1c2VyLm5vcmVwbHkuZ2l0aHViLmNvbT5cbiAqIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKi9cblxuKGZ1bmN0aW9uKCl7XG5cdCQoJy5icy1jb21wb25lbnQgW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcblx0JCgnLmJzLWNvbXBvbmVudCBbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
