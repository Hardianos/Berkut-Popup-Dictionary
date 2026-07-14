function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var react = {exports: {}};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return false;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = { H: null, A: null, T: null, S: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
	  var refProp = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== refProp ? refProp : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop, noop)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = false;
	  if (null === children) invokeCallback = true;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = true;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	    "function" === typeof reportError
	      ? reportError
	      : function (error) {
	          if (
	            "object" === typeof window &&
	            "function" === typeof window.ErrorEvent
	          ) {
	            var event = new window.ErrorEvent("error", {
	              bubbles: true,
	              cancelable: true,
	              message:
	                "object" === typeof error &&
	                null !== error &&
	                "string" === typeof error.message
	                  ? String(error.message)
	                  : String(error),
	              error: error
	            });
	            if (!window.dispatchEvent(event)) return;
	          } else if (
	            "object" === typeof process &&
	            "function" === typeof process.emit
	          ) {
	            process.emit("uncaughtException", error);
	            return;
	          }
	          console.error(error);
	        },
	  Children = {
	    map: mapChildren,
	    forEach: function (children, forEachFunc, forEachContext) {
	      mapChildren(
	        children,
	        function () {
	          forEachFunc.apply(this, arguments);
	        },
	        forEachContext
	      );
	    },
	    count: function (children) {
	      var n = 0;
	      mapChildren(children, function () {
	        n++;
	      });
	      return n;
	    },
	    toArray: function (children) {
	      return (
	        mapChildren(children, function (child) {
	          return child;
	        }) || []
	      );
	    },
	    only: function (children) {
	      if (!isValidElement(children))
	        throw Error(
	          "React.Children.only expected to receive a single React element child."
	        );
	      return children;
	    }
	  };
	react_production.Activity = REACT_ACTIVITY_TYPE;
	react_production.Children = Children;
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.__COMPILER_RUNTIME = {
	  __proto__: null,
	  c: function (size) {
	    return ReactSharedInternals.H.useMemoCache(size);
	  }
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cacheSignal = function () {
	  return null;
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    null !== prevTransition &&
	      null !== currentTransition.types &&
	      (prevTransition.types = currentTransition.types),
	      (ReactSharedInternals.T = prevTransition);
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, deps) {
	  return ReactSharedInternals.H.useEffect(create, deps);
	};
	react_production.useEffectEvent = function (callback) {
	  return ReactSharedInternals.H.useEffectEvent(callback);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.2.7";
	return react_production;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;
	{
	  react.exports = requireReact_production();
	}
	return react.exports;
}

var reactExports = requireReact();
const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var client = {exports: {}};

var reactDomClient_production = {};

var scheduler = {exports: {}};

var scheduler_production = {};

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production;

function requireScheduler_production () {
	if (hasRequiredScheduler_production) return scheduler_production;
	hasRequiredScheduler_production = 1;
	(function (exports) {
		function push(heap, node) {
		  var index = heap.length;
		  heap.push(node);
		  a: for (; 0 < index; ) {
		    var parentIndex = (index - 1) >>> 1,
		      parent = heap[parentIndex];
		    if (0 < compare(parent, node))
		      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
		    else break a;
		  }
		}
		function peek(heap) {
		  return 0 === heap.length ? null : heap[0];
		}
		function pop(heap) {
		  if (0 === heap.length) return null;
		  var first = heap[0],
		    last = heap.pop();
		  if (last !== first) {
		    heap[0] = last;
		    a: for (
		      var index = 0, length = heap.length, halfLength = length >>> 1;
		      index < halfLength;

		    ) {
		      var leftIndex = 2 * (index + 1) - 1,
		        left = heap[leftIndex],
		        rightIndex = leftIndex + 1,
		        right = heap[rightIndex];
		      if (0 > compare(left, last))
		        rightIndex < length && 0 > compare(right, left)
		          ? ((heap[index] = right),
		            (heap[rightIndex] = last),
		            (index = rightIndex))
		          : ((heap[index] = left),
		            (heap[leftIndex] = last),
		            (index = leftIndex));
		      else if (rightIndex < length && 0 > compare(right, last))
		        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
		      else break a;
		    }
		  }
		  return first;
		}
		function compare(a, b) {
		  var diff = a.sortIndex - b.sortIndex;
		  return 0 !== diff ? diff : a.id - b.id;
		}
		exports.unstable_now = void 0;
		if ("object" === typeof performance && "function" === typeof performance.now) {
		  var localPerformance = performance;
		  exports.unstable_now = function () {
		    return localPerformance.now();
		  };
		} else {
		  var localDate = Date,
		    initialTime = localDate.now();
		  exports.unstable_now = function () {
		    return localDate.now() - initialTime;
		  };
		}
		var taskQueue = [],
		  timerQueue = [],
		  taskIdCounter = 1,
		  currentTask = null,
		  currentPriorityLevel = 3,
		  isPerformingWork = false,
		  isHostCallbackScheduled = false,
		  isHostTimeoutScheduled = false,
		  needsPaint = false,
		  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
		  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
		  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
		function advanceTimers(currentTime) {
		  for (var timer = peek(timerQueue); null !== timer; ) {
		    if (null === timer.callback) pop(timerQueue);
		    else if (timer.startTime <= currentTime)
		      pop(timerQueue),
		        (timer.sortIndex = timer.expirationTime),
		        push(taskQueue, timer);
		    else break;
		    timer = peek(timerQueue);
		  }
		}
		function handleTimeout(currentTime) {
		  isHostTimeoutScheduled = false;
		  advanceTimers(currentTime);
		  if (!isHostCallbackScheduled)
		    if (null !== peek(taskQueue))
		      (isHostCallbackScheduled = true),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = true), schedulePerformWorkUntilDeadline());
		    else {
		      var firstTimer = peek(timerQueue);
		      null !== firstTimer &&
		        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		    }
		}
		var isMessageLoopRunning = false,
		  taskTimeoutID = -1,
		  frameInterval = 5,
		  startTime = -1;
		function shouldYieldToHost() {
		  return needsPaint
		    ? true
		    : exports.unstable_now() - startTime < frameInterval
		      ? false
		      : true;
		}
		function performWorkUntilDeadline() {
		  needsPaint = false;
		  if (isMessageLoopRunning) {
		    var currentTime = exports.unstable_now();
		    startTime = currentTime;
		    var hasMoreWork = true;
		    try {
		      a: {
		        isHostCallbackScheduled = !1;
		        isHostTimeoutScheduled &&
		          ((isHostTimeoutScheduled = !1),
		          localClearTimeout(taskTimeoutID),
		          (taskTimeoutID = -1));
		        isPerformingWork = !0;
		        var previousPriorityLevel = currentPriorityLevel;
		        try {
		          b: {
		            advanceTimers(currentTime);
		            for (
		              currentTask = peek(taskQueue);
		              null !== currentTask &&
		              !(
		                currentTask.expirationTime > currentTime && shouldYieldToHost()
		              );

		            ) {
		              var callback = currentTask.callback;
		              if ("function" === typeof callback) {
		                currentTask.callback = null;
		                currentPriorityLevel = currentTask.priorityLevel;
		                var continuationCallback = callback(
		                  currentTask.expirationTime <= currentTime
		                );
		                currentTime = exports.unstable_now();
		                if ("function" === typeof continuationCallback) {
		                  currentTask.callback = continuationCallback;
		                  advanceTimers(currentTime);
		                  hasMoreWork = !0;
		                  break b;
		                }
		                currentTask === peek(taskQueue) && pop(taskQueue);
		                advanceTimers(currentTime);
		              } else pop(taskQueue);
		              currentTask = peek(taskQueue);
		            }
		            if (null !== currentTask) hasMoreWork = !0;
		            else {
		              var firstTimer = peek(timerQueue);
		              null !== firstTimer &&
		                requestHostTimeout(
		                  handleTimeout,
		                  firstTimer.startTime - currentTime
		                );
		              hasMoreWork = !1;
		            }
		          }
		          break a;
		        } finally {
		          (currentTask = null),
		            (currentPriorityLevel = previousPriorityLevel),
		            (isPerformingWork = !1);
		        }
		        hasMoreWork = void 0;
		      }
		    } finally {
		      hasMoreWork
		        ? schedulePerformWorkUntilDeadline()
		        : (isMessageLoopRunning = false);
		    }
		  }
		}
		var schedulePerformWorkUntilDeadline;
		if ("function" === typeof localSetImmediate)
		  schedulePerformWorkUntilDeadline = function () {
		    localSetImmediate(performWorkUntilDeadline);
		  };
		else if ("undefined" !== typeof MessageChannel) {
		  var channel = new MessageChannel(),
		    port = channel.port2;
		  channel.port1.onmessage = performWorkUntilDeadline;
		  schedulePerformWorkUntilDeadline = function () {
		    port.postMessage(null);
		  };
		} else
		  schedulePerformWorkUntilDeadline = function () {
		    localSetTimeout(performWorkUntilDeadline, 0);
		  };
		function requestHostTimeout(callback, ms) {
		  taskTimeoutID = localSetTimeout(function () {
		    callback(exports.unstable_now());
		  }, ms);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function (task) {
		  task.callback = null;
		};
		exports.unstable_forceFrameRate = function (fps) {
		  0 > fps || 125 < fps
		    ? console.error(
		        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
		      )
		    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
		};
		exports.unstable_getCurrentPriorityLevel = function () {
		  return currentPriorityLevel;
		};
		exports.unstable_next = function (eventHandler) {
		  switch (currentPriorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		      var priorityLevel = 3;
		      break;
		    default:
		      priorityLevel = currentPriorityLevel;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_requestPaint = function () {
		  needsPaint = true;
		};
		exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
		  switch (priorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		      break;
		    default:
		      priorityLevel = 3;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_scheduleCallback = function (
		  priorityLevel,
		  callback,
		  options
		) {
		  var currentTime = exports.unstable_now();
		  "object" === typeof options && null !== options
		    ? ((options = options.delay),
		      (options =
		        "number" === typeof options && 0 < options
		          ? currentTime + options
		          : currentTime))
		    : (options = currentTime);
		  switch (priorityLevel) {
		    case 1:
		      var timeout = -1;
		      break;
		    case 2:
		      timeout = 250;
		      break;
		    case 5:
		      timeout = 1073741823;
		      break;
		    case 4:
		      timeout = 1e4;
		      break;
		    default:
		      timeout = 5e3;
		  }
		  timeout = options + timeout;
		  priorityLevel = {
		    id: taskIdCounter++,
		    callback: callback,
		    priorityLevel: priorityLevel,
		    startTime: options,
		    expirationTime: timeout,
		    sortIndex: -1
		  };
		  options > currentTime
		    ? ((priorityLevel.sortIndex = options),
		      push(timerQueue, priorityLevel),
		      null === peek(taskQueue) &&
		        priorityLevel === peek(timerQueue) &&
		        (isHostTimeoutScheduled
		          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
		          : (isHostTimeoutScheduled = true),
		        requestHostTimeout(handleTimeout, options - currentTime)))
		    : ((priorityLevel.sortIndex = timeout),
		      push(taskQueue, priorityLevel),
		      isHostCallbackScheduled ||
		        isPerformingWork ||
		        ((isHostCallbackScheduled = true),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = true), schedulePerformWorkUntilDeadline())));
		  return priorityLevel;
		};
		exports.unstable_shouldYield = shouldYieldToHost;
		exports.unstable_wrapCallback = function (callback) {
		  var parentPriorityLevel = currentPriorityLevel;
		  return function () {
		    var previousPriorityLevel = currentPriorityLevel;
		    currentPriorityLevel = parentPriorityLevel;
		    try {
		      return callback.apply(this, arguments);
		    } finally {
		      currentPriorityLevel = previousPriorityLevel;
		    }
		  };
		}; 
	} (scheduler_production));
	return scheduler_production;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;
	{
	  scheduler.exports = requireScheduler_production();
	}
	return scheduler.exports;
}

var reactDom = {exports: {}};

var reactDom_production = {};

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production;

function requireReactDom_production () {
	if (hasRequiredReactDom_production) return reactDom_production;
	hasRequiredReactDom_production = 1;
	var React = requireReact();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function noop() {}
	var Internals = {
	    d: {
	      f: noop,
	      r: function () {
	        throw Error(formatProdErrorMessage(522));
	      },
	      D: noop,
	      C: noop,
	      L: noop,
	      m: noop,
	      X: noop,
	      S: noop,
	      M: noop
	    },
	    p: 0,
	    findDOMNode: null
	  },
	  REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
	  var key =
	    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: REACT_PORTAL_TYPE,
	    key: null == key ? null : "" + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	}
	var ReactSharedInternals =
	  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
	  if ("font" === as) return "";
	  if ("string" === typeof input)
	    return "use-credentials" === input ? input : "";
	}
	reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  Internals;
	reactDom_production.createPortal = function (children, container) {
	  var key =
	    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (
	    !container ||
	    (1 !== container.nodeType &&
	      9 !== container.nodeType &&
	      11 !== container.nodeType)
	  )
	    throw Error(formatProdErrorMessage(299));
	  return createPortal$1(children, container, null, key);
	};
	reactDom_production.flushSync = function (fn) {
	  var previousTransition = ReactSharedInternals.T,
	    previousUpdatePriority = Internals.p;
	  try {
	    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
	  } finally {
	    (ReactSharedInternals.T = previousTransition),
	      (Internals.p = previousUpdatePriority),
	      Internals.d.f();
	  }
	};
	reactDom_production.preconnect = function (href, options) {
	  "string" === typeof href &&
	    (options
	      ? ((options = options.crossOrigin),
	        (options =
	          "string" === typeof options
	            ? "use-credentials" === options
	              ? options
	              : ""
	            : void 0))
	      : (options = null),
	    Internals.d.C(href, options));
	};
	reactDom_production.prefetchDNS = function (href) {
	  "string" === typeof href && Internals.d.D(href);
	};
	reactDom_production.preinit = function (href, options) {
	  if ("string" === typeof href && options && "string" === typeof options.as) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
	      integrity =
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      fetchPriority =
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0;
	    "style" === as
	      ? Internals.d.S(
	          href,
	          "string" === typeof options.precedence ? options.precedence : void 0,
	          {
	            crossOrigin: crossOrigin,
	            integrity: integrity,
	            fetchPriority: fetchPriority
	          }
	        )
	      : "script" === as &&
	        Internals.d.X(href, {
	          crossOrigin: crossOrigin,
	          integrity: integrity,
	          fetchPriority: fetchPriority,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	  }
	};
	reactDom_production.preinitModule = function (href, options) {
	  if ("string" === typeof href)
	    if ("object" === typeof options && null !== options) {
	      if (null == options.as || "script" === options.as) {
	        var crossOrigin = getCrossOriginStringAs(
	          options.as,
	          options.crossOrigin
	        );
	        Internals.d.M(href, {
	          crossOrigin: crossOrigin,
	          integrity:
	            "string" === typeof options.integrity ? options.integrity : void 0,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	      }
	    } else null == options && Internals.d.M(href);
	};
	reactDom_production.preload = function (href, options) {
	  if (
	    "string" === typeof href &&
	    "object" === typeof options &&
	    null !== options &&
	    "string" === typeof options.as
	  ) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
	    Internals.d.L(href, as, {
	      crossOrigin: crossOrigin,
	      integrity:
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
	      type: "string" === typeof options.type ? options.type : void 0,
	      fetchPriority:
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0,
	      referrerPolicy:
	        "string" === typeof options.referrerPolicy
	          ? options.referrerPolicy
	          : void 0,
	      imageSrcSet:
	        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
	      imageSizes:
	        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
	      media: "string" === typeof options.media ? options.media : void 0
	    });
	  }
	};
	reactDom_production.preloadModule = function (href, options) {
	  if ("string" === typeof href)
	    if (options) {
	      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
	      Internals.d.m(href, {
	        as:
	          "string" === typeof options.as && "script" !== options.as
	            ? options.as
	            : void 0,
	        crossOrigin: crossOrigin,
	        integrity:
	          "string" === typeof options.integrity ? options.integrity : void 0
	      });
	    } else Internals.d.m(href);
	};
	reactDom_production.requestFormReset = function (form) {
	  Internals.d.r(form);
	};
	reactDom_production.unstable_batchedUpdates = function (fn, a) {
	  return fn(a);
	};
	reactDom_production.useFormState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	reactDom_production.useFormStatus = function () {
	  return ReactSharedInternals.H.useHostTransitionStatus();
	};
	reactDom_production.version = "19.2.7";
	return reactDom_production;
}

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom.exports;
	hasRequiredReactDom = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  reactDom.exports = requireReactDom_production();
	}
	return reactDom.exports;
}

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomClient_production;

function requireReactDomClient_production () {
	if (hasRequiredReactDomClient_production) return reactDomClient_production;
	hasRequiredReactDomClient_production = 1;
	var Scheduler = requireScheduler(),
	  React = requireReact(),
	  ReactDOM = requireReactDom();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function isValidContainer(node) {
	  return !(
	    !node ||
	    (1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType)
	  );
	}
	function getNearestMountedFiber(fiber) {
	  var node = fiber,
	    nearestMounted = fiber;
	  if (fiber.alternate) for (; node.return; ) node = node.return;
	  else {
	    fiber = node;
	    do
	      (node = fiber),
	        0 !== (node.flags & 4098) && (nearestMounted = node.return),
	        (fiber = node.return);
	    while (fiber);
	  }
	  return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
	  if (13 === fiber.tag) {
	    var suspenseState = fiber.memoizedState;
	    null === suspenseState &&
	      ((fiber = fiber.alternate),
	      null !== fiber && (suspenseState = fiber.memoizedState));
	    if (null !== suspenseState) return suspenseState.dehydrated;
	  }
	  return null;
	}
	function getActivityInstanceFromFiber(fiber) {
	  if (31 === fiber.tag) {
	    var activityState = fiber.memoizedState;
	    null === activityState &&
	      ((fiber = fiber.alternate),
	      null !== fiber && (activityState = fiber.memoizedState));
	    if (null !== activityState) return activityState.dehydrated;
	  }
	  return null;
	}
	function assertIsMounted(fiber) {
	  if (getNearestMountedFiber(fiber) !== fiber)
	    throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    alternate = getNearestMountedFiber(fiber);
	    if (null === alternate) throw Error(formatProdErrorMessage(188));
	    return alternate !== fiber ? null : fiber;
	  }
	  for (var a = fiber, b = alternate; ; ) {
	    var parentA = a.return;
	    if (null === parentA) break;
	    var parentB = parentA.alternate;
	    if (null === parentB) {
	      b = parentA.return;
	      if (null !== b) {
	        a = b;
	        continue;
	      }
	      break;
	    }
	    if (parentA.child === parentB.child) {
	      for (parentB = parentA.child; parentB; ) {
	        if (parentB === a) return assertIsMounted(parentA), fiber;
	        if (parentB === b) return assertIsMounted(parentA), alternate;
	        parentB = parentB.sibling;
	      }
	      throw Error(formatProdErrorMessage(188));
	    }
	    if (a.return !== b.return) (a = parentA), (b = parentB);
	    else {
	      for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
	        if (child$0 === a) {
	          didFindChild = true;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (child$0 === b) {
	          didFindChild = true;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        child$0 = child$0.sibling;
	      }
	      if (!didFindChild) {
	        for (child$0 = parentB.child; child$0; ) {
	          if (child$0 === a) {
	            didFindChild = true;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (child$0 === b) {
	            didFindChild = true;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          child$0 = child$0.sibling;
	        }
	        if (!didFindChild) throw Error(formatProdErrorMessage(189));
	      }
	    }
	    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
	  }
	  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
	  return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
	  var tag = node.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
	  for (node = node.child; null !== node; ) {
	    tag = findCurrentHostFiberImpl(node);
	    if (null !== tag) return tag;
	    node = node.sibling;
	  }
	  return null;
	}
	var assign = Object.assign,
	  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
	  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
	  if (null == type) return null;
	  if ("function" === typeof type)
	    return type.$$typeof === REACT_CLIENT_REFERENCE
	      ? null
	      : type.displayName || type.name || null;
	  if ("string" === typeof type) return type;
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return "Fragment";
	    case REACT_PROFILER_TYPE:
	      return "Profiler";
	    case REACT_STRICT_MODE_TYPE:
	      return "StrictMode";
	    case REACT_SUSPENSE_TYPE:
	      return "Suspense";
	    case REACT_SUSPENSE_LIST_TYPE:
	      return "SuspenseList";
	    case REACT_ACTIVITY_TYPE:
	      return "Activity";
	  }
	  if ("object" === typeof type)
	    switch (type.$$typeof) {
	      case REACT_PORTAL_TYPE:
	        return "Portal";
	      case REACT_CONTEXT_TYPE:
	        return type.displayName || "Context";
	      case REACT_CONSUMER_TYPE:
	        return (type._context.displayName || "Context") + ".Consumer";
	      case REACT_FORWARD_REF_TYPE:
	        var innerType = type.render;
	        type = type.displayName;
	        type ||
	          ((type = innerType.displayName || innerType.name || ""),
	          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	        return type;
	      case REACT_MEMO_TYPE:
	        return (
	          (innerType = type.displayName || null),
	          null !== innerType
	            ? innerType
	            : getComponentNameFromType(type.type) || "Memo"
	        );
	      case REACT_LAZY_TYPE:
	        innerType = type._payload;
	        type = type._init;
	        try {
	          return getComponentNameFromType(type(innerType));
	        } catch (x) {}
	    }
	  return null;
	}
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals =
	    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  ReactDOMSharedInternals =
	    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  sharedNotPendingObject = {
	    pending: false,
	    data: null,
	    method: null,
	    action: null
	  },
	  valueStack = [],
	  index = -1;
	function createCursor(defaultValue) {
	  return { current: defaultValue };
	}
	function pop(cursor) {
	  0 > index ||
	    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
	}
	function push(cursor, value) {
	  index++;
	  valueStack[index] = cursor.current;
	  cursor.current = value;
	}
	var contextStackCursor = createCursor(null),
	  contextFiberStackCursor = createCursor(null),
	  rootInstanceStackCursor = createCursor(null),
	  hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
	  push(rootInstanceStackCursor, nextRootInstance);
	  push(contextFiberStackCursor, fiber);
	  push(contextStackCursor, null);
	  switch (nextRootInstance.nodeType) {
	    case 9:
	    case 11:
	      fiber = (fiber = nextRootInstance.documentElement)
	        ? (fiber = fiber.namespaceURI)
	          ? getOwnHostContext(fiber)
	          : 0
	        : 0;
	      break;
	    default:
	      if (
	        ((fiber = nextRootInstance.tagName),
	        (nextRootInstance = nextRootInstance.namespaceURI))
	      )
	        (nextRootInstance = getOwnHostContext(nextRootInstance)),
	          (fiber = getChildHostContextProd(nextRootInstance, fiber));
	      else
	        switch (fiber) {
	          case "svg":
	            fiber = 1;
	            break;
	          case "math":
	            fiber = 2;
	            break;
	          default:
	            fiber = 0;
	        }
	  }
	  pop(contextStackCursor);
	  push(contextStackCursor, fiber);
	}
	function popHostContainer() {
	  pop(contextStackCursor);
	  pop(contextFiberStackCursor);
	  pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
	  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
	  var context = contextStackCursor.current;
	  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
	  context !== JSCompiler_inline_result &&
	    (push(contextFiberStackCursor, fiber),
	    push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
	  contextFiberStackCursor.current === fiber &&
	    (pop(contextStackCursor), pop(contextFiberStackCursor));
	  hostTransitionProviderCursor.current === fiber &&
	    (pop(hostTransitionProviderCursor),
	    (HostTransitionContext._currentValue = sharedNotPendingObject));
	}
	var prefix, suffix;
	function describeBuiltInComponentFrame(name) {
	  if (void 0 === prefix)
	    try {
	      throw Error();
	    } catch (x) {
	      var match = x.stack.trim().match(/\n( *(at )?)/);
	      prefix = (match && match[1]) || "";
	      suffix =
	        -1 < x.stack.indexOf("\n    at")
	          ? " (<anonymous>)"
	          : -1 < x.stack.indexOf("@")
	            ? "@unknown:0:0"
	            : "";
	    }
	  return "\n" + prefix + name + suffix;
	}
	var reentry = false;
	function describeNativeComponentFrame(fn, construct) {
	  if (!fn || reentry) return "";
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    var RunInRootFrame = {
	      DetermineComponentFrameRoot: function () {
	        try {
	          if (construct) {
	            var Fake = function () {
	              throw Error();
	            };
	            Object.defineProperty(Fake.prototype, "props", {
	              set: function () {
	                throw Error();
	              }
	            });
	            if ("object" === typeof Reflect && Reflect.construct) {
	              try {
	                Reflect.construct(Fake, []);
	              } catch (x) {
	                var control = x;
	              }
	              Reflect.construct(fn, [], Fake);
	            } else {
	              try {
	                Fake.call();
	              } catch (x$1) {
	                control = x$1;
	              }
	              fn.call(Fake.prototype);
	            }
	          } else {
	            try {
	              throw Error();
	            } catch (x$2) {
	              control = x$2;
	            }
	            (Fake = fn()) &&
	              "function" === typeof Fake.catch &&
	              Fake.catch(function () {});
	          }
	        } catch (sample) {
	          if (sample && control && "string" === typeof sample.stack)
	            return [sample.stack, control.stack];
	        }
	        return [null, null];
	      }
	    };
	    RunInRootFrame.DetermineComponentFrameRoot.displayName =
	      "DetermineComponentFrameRoot";
	    var namePropDescriptor = Object.getOwnPropertyDescriptor(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name"
	    );
	    namePropDescriptor &&
	      namePropDescriptor.configurable &&
	      Object.defineProperty(
	        RunInRootFrame.DetermineComponentFrameRoot,
	        "name",
	        { value: "DetermineComponentFrameRoot" }
	      );
	    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
	      sampleStack = _RunInRootFrame$Deter[0],
	      controlStack = _RunInRootFrame$Deter[1];
	    if (sampleStack && controlStack) {
	      var sampleLines = sampleStack.split("\n"),
	        controlLines = controlStack.split("\n");
	      for (
	        namePropDescriptor = RunInRootFrame = 0;
	        RunInRootFrame < sampleLines.length &&
	        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

	      )
	        RunInRootFrame++;
	      for (
	        ;
	        namePropDescriptor < controlLines.length &&
	        !controlLines[namePropDescriptor].includes(
	          "DetermineComponentFrameRoot"
	        );

	      )
	        namePropDescriptor++;
	      if (
	        RunInRootFrame === sampleLines.length ||
	        namePropDescriptor === controlLines.length
	      )
	        for (
	          RunInRootFrame = sampleLines.length - 1,
	            namePropDescriptor = controlLines.length - 1;
	          1 <= RunInRootFrame &&
	          0 <= namePropDescriptor &&
	          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

	        )
	          namePropDescriptor--;
	      for (
	        ;
	        1 <= RunInRootFrame && 0 <= namePropDescriptor;
	        RunInRootFrame--, namePropDescriptor--
	      )
	        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
	            do
	              if (
	                (RunInRootFrame--,
	                namePropDescriptor--,
	                0 > namePropDescriptor ||
	                  sampleLines[RunInRootFrame] !==
	                    controlLines[namePropDescriptor])
	              ) {
	                var frame =
	                  "\n" +
	                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
	                fn.displayName &&
	                  frame.includes("<anonymous>") &&
	                  (frame = frame.replace("<anonymous>", fn.displayName));
	                return frame;
	              }
	            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
	          }
	          break;
	        }
	    }
	  } finally {
	    (reentry = false), (Error.prepareStackTrace = previousPrepareStackTrace);
	  }
	  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
	    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
	    : "";
	}
	function describeFiber(fiber, childFiber) {
	  switch (fiber.tag) {
	    case 26:
	    case 27:
	    case 5:
	      return describeBuiltInComponentFrame(fiber.type);
	    case 16:
	      return describeBuiltInComponentFrame("Lazy");
	    case 13:
	      return fiber.child !== childFiber && null !== childFiber
	        ? describeBuiltInComponentFrame("Suspense Fallback")
	        : describeBuiltInComponentFrame("Suspense");
	    case 19:
	      return describeBuiltInComponentFrame("SuspenseList");
	    case 0:
	    case 15:
	      return describeNativeComponentFrame(fiber.type, false);
	    case 11:
	      return describeNativeComponentFrame(fiber.type.render, false);
	    case 1:
	      return describeNativeComponentFrame(fiber.type, true);
	    case 31:
	      return describeBuiltInComponentFrame("Activity");
	    default:
	      return "";
	  }
	}
	function getStackByFiberInDevAndProd(workInProgress) {
	  try {
	    var info = "",
	      previous = null;
	    do
	      (info += describeFiber(workInProgress, previous)),
	        (previous = workInProgress),
	        (workInProgress = workInProgress.return);
	    while (workInProgress);
	    return info;
	  } catch (x) {
	    return "\nError generating stack: " + x.message + "\n" + x.stack;
	  }
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty,
	  scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
	  cancelCallback$1 = Scheduler.unstable_cancelCallback,
	  shouldYield = Scheduler.unstable_shouldYield,
	  requestPaint = Scheduler.unstable_requestPaint,
	  now = Scheduler.unstable_now,
	  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
	  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
	  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
	  NormalPriority$1 = Scheduler.unstable_NormalPriority,
	  LowPriority = Scheduler.unstable_LowPriority,
	  IdlePriority = Scheduler.unstable_IdlePriority,
	  log$1 = Scheduler.log,
	  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
	  rendererID = null,
	  injectedHook = null;
	function setIsStrictModeForDevtools(newIsStrictMode) {
	  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
	  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
	    try {
	      injectedHook.setStrictMode(rendererID, newIsStrictMode);
	    } catch (err) {}
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
	  log = Math.log,
	  LN2 = Math.LN2;
	function clz32Fallback(x) {
	  x >>>= 0;
	  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
	}
	var nextTransitionUpdateLane = 256,
	  nextTransitionDeferredLane = 262144,
	  nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
	  var pendingSyncLanes = lanes & 42;
	  if (0 !== pendingSyncLanes) return pendingSyncLanes;
	  switch (lanes & -lanes) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	      return 64;
	    case 128:
	      return 128;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	      return lanes & 261888;
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return lanes & 3932160;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return lanes & 62914560;
	    case 67108864:
	      return 67108864;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 0;
	    default:
	      return lanes;
	  }
	}
	function getNextLanes(root, wipLanes, rootHasPendingCommit) {
	  var pendingLanes = root.pendingLanes;
	  if (0 === pendingLanes) return 0;
	  var nextLanes = 0,
	    suspendedLanes = root.suspendedLanes,
	    pingedLanes = root.pingedLanes;
	  root = root.warmLanes;
	  var nonIdlePendingLanes = pendingLanes & 134217727;
	  0 !== nonIdlePendingLanes
	    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
	      0 !== pendingLanes
	        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
	        : ((pingedLanes &= nonIdlePendingLanes),
	          0 !== pingedLanes
	            ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	            : rootHasPendingCommit ||
	              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
	              0 !== rootHasPendingCommit &&
	                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
	    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
	      0 !== nonIdlePendingLanes
	        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
	        : 0 !== pingedLanes
	          ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	          : rootHasPendingCommit ||
	            ((rootHasPendingCommit = pendingLanes & ~root),
	            0 !== rootHasPendingCommit &&
	              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
	  return 0 === nextLanes
	    ? 0
	    : 0 !== wipLanes &&
	        wipLanes !== nextLanes &&
	        0 === (wipLanes & suspendedLanes) &&
	        ((suspendedLanes = nextLanes & -nextLanes),
	        (rootHasPendingCommit = wipLanes & -wipLanes),
	        suspendedLanes >= rootHasPendingCommit ||
	          (32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)))
	      ? wipLanes
	      : nextLanes;
	}
	function checkIfRootIsPrerendering(root, renderLanes) {
	  return (
	    0 ===
	    (root.pendingLanes &
	      ~(root.suspendedLanes & ~root.pingedLanes) &
	      renderLanes)
	  );
	}
	function computeExpirationTime(lane, currentTime) {
	  switch (lane) {
	    case 1:
	    case 2:
	    case 4:
	    case 8:
	    case 64:
	      return currentTime + 250;
	    case 16:
	    case 32:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return currentTime + 5e3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return -1;
	    case 67108864:
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function claimNextRetryLane() {
	  var lane = nextRetryLane;
	  nextRetryLane <<= 1;
	  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
	  return lane;
	}
	function createLaneMap(initial) {
	  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
	  return laneMap;
	}
	function markRootUpdated$1(root, updateLane) {
	  root.pendingLanes |= updateLane;
	  268435456 !== updateLane &&
	    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
	}
	function markRootFinished(
	  root,
	  finishedLanes,
	  remainingLanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  var previouslyPendingLanes = root.pendingLanes;
	  root.pendingLanes = remainingLanes;
	  root.suspendedLanes = 0;
	  root.pingedLanes = 0;
	  root.warmLanes = 0;
	  root.expiredLanes &= remainingLanes;
	  root.entangledLanes &= remainingLanes;
	  root.errorRecoveryDisabledLanes &= remainingLanes;
	  root.shellSuspendCounter = 0;
	  var entanglements = root.entanglements,
	    expirationTimes = root.expirationTimes,
	    hiddenUpdates = root.hiddenUpdates;
	  for (
	    remainingLanes = previouslyPendingLanes & ~remainingLanes;
	    0 < remainingLanes;

	  ) {
	    var index$7 = 31 - clz32(remainingLanes),
	      lane = 1 << index$7;
	    entanglements[index$7] = 0;
	    expirationTimes[index$7] = -1;
	    var hiddenUpdatesForLane = hiddenUpdates[index$7];
	    if (null !== hiddenUpdatesForLane)
	      for (
	        hiddenUpdates[index$7] = null, index$7 = 0;
	        index$7 < hiddenUpdatesForLane.length;
	        index$7++
	      ) {
	        var update = hiddenUpdatesForLane[index$7];
	        null !== update && (update.lane &= -536870913);
	      }
	    remainingLanes &= ~lane;
	  }
	  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
	  0 !== suspendedRetryLanes &&
	    0 === updatedLanes &&
	    0 !== root.tag &&
	    (root.suspendedLanes |=
	      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
	  root.pendingLanes |= spawnedLane;
	  root.suspendedLanes &= ~spawnedLane;
	  var spawnedLaneIndex = 31 - clz32(spawnedLane);
	  root.entangledLanes |= spawnedLane;
	  root.entanglements[spawnedLaneIndex] =
	    root.entanglements[spawnedLaneIndex] |
	    1073741824 |
	    (entangledLanes & 261930);
	}
	function markRootEntangled(root, entangledLanes) {
	  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
	  for (root = root.entanglements; rootEntangledLanes; ) {
	    var index$8 = 31 - clz32(rootEntangledLanes),
	      lane = 1 << index$8;
	    (lane & entangledLanes) | (root[index$8] & entangledLanes) &&
	      (root[index$8] |= entangledLanes);
	    rootEntangledLanes &= ~lane;
	  }
	}
	function getBumpedLaneForHydration(root, renderLanes) {
	  var renderLane = renderLanes & -renderLanes;
	  renderLane =
	    0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
	  return 0 !== (renderLane & (root.suspendedLanes | renderLanes))
	    ? 0
	    : renderLane;
	}
	function getBumpedLaneForHydrationByLane(lane) {
	  switch (lane) {
	    case 2:
	      lane = 1;
	      break;
	    case 8:
	      lane = 4;
	      break;
	    case 32:
	      lane = 16;
	      break;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      lane = 128;
	      break;
	    case 268435456:
	      lane = 134217728;
	      break;
	    default:
	      lane = 0;
	  }
	  return lane;
	}
	function lanesToEventPriority(lanes) {
	  lanes &= -lanes;
	  return 2 < lanes
	    ? 8 < lanes
	      ? 0 !== (lanes & 134217727)
	        ? 32
	        : 268435456
	      : 8
	    : 2;
	}
	function resolveUpdatePriority() {
	  var updatePriority = ReactDOMSharedInternals.p;
	  if (0 !== updatePriority) return updatePriority;
	  updatePriority = window.event;
	  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    return (ReactDOMSharedInternals.p = priority), fn();
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority;
	  }
	}
	var randomKey = Math.random().toString(36).slice(2),
	  internalInstanceKey = "__reactFiber$" + randomKey,
	  internalPropsKey = "__reactProps$" + randomKey,
	  internalContainerInstanceKey = "__reactContainer$" + randomKey,
	  internalEventHandlersKey = "__reactEvents$" + randomKey,
	  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
	  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
	  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
	  internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
	  delete node[internalInstanceKey];
	  delete node[internalPropsKey];
	  delete node[internalEventHandlersKey];
	  delete node[internalEventHandlerListenersKey];
	  delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
	  var targetInst = targetNode[internalInstanceKey];
	  if (targetInst) return targetInst;
	  for (var parentNode = targetNode.parentNode; parentNode; ) {
	    if (
	      (targetInst =
	        parentNode[internalContainerInstanceKey] ||
	        parentNode[internalInstanceKey])
	    ) {
	      parentNode = targetInst.alternate;
	      if (
	        null !== targetInst.child ||
	        (null !== parentNode && null !== parentNode.child)
	      )
	        for (
	          targetNode = getParentHydrationBoundary(targetNode);
	          null !== targetNode;

	        ) {
	          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
	          targetNode = getParentHydrationBoundary(targetNode);
	        }
	      return targetInst;
	    }
	    targetNode = parentNode;
	    parentNode = targetNode.parentNode;
	  }
	  return null;
	}
	function getInstanceFromNode(node) {
	  if (
	    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
	  ) {
	    var tag = node.tag;
	    if (
	      5 === tag ||
	      6 === tag ||
	      13 === tag ||
	      31 === tag ||
	      26 === tag ||
	      27 === tag ||
	      3 === tag
	    )
	      return node;
	  }
	  return null;
	}
	function getNodeFromInstance(inst) {
	  var tag = inst.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
	  throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root) {
	  var resources = root[internalRootNodeResourcesKey];
	  resources ||
	    (resources = root[internalRootNodeResourcesKey] =
	      { hoistableStyles: new Map(), hoistableScripts: new Map() });
	  return resources;
	}
	function markNodeAsHoistable(node) {
	  node[internalHoistableMarker] = true;
	}
	var allNativeEvents = new Set(),
	  registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
	  registerDirectEvent(registrationName, dependencies);
	  registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
	  registrationNameDependencies[registrationName] = dependencies;
	  for (
	    registrationName = 0;
	    registrationName < dependencies.length;
	    registrationName++
	  )
	    allNativeEvents.add(dependencies[registrationName]);
	}
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
	    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
	  ),
	  illegalAttributeNameCache = {},
	  validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
	    return true;
	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
	    return (validatedAttributeNameCache[attributeName] = true);
	  illegalAttributeNameCache[attributeName] = true;
	  return false;
	}
	function setValueForAttribute(node, name, value) {
	  if (isAttributeNameSafe(name))
	    if (null === value) node.removeAttribute(name);
	    else {
	      switch (typeof value) {
	        case "undefined":
	        case "function":
	        case "symbol":
	          node.removeAttribute(name);
	          return;
	        case "boolean":
	          var prefix$10 = name.toLowerCase().slice(0, 5);
	          if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
	            node.removeAttribute(name);
	            return;
	          }
	      }
	      node.setAttribute(name, "" + value);
	    }
	}
	function setValueForKnownAttribute(node, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttribute(name, "" + value);
	  }
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttributeNS(namespace, name, "" + value);
	  }
	}
	function getToStringValue(value) {
	  switch (typeof value) {
	    case "bigint":
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return value;
	    case "object":
	      return value;
	    default:
	      return "";
	  }
	}
	function isCheckable(elem) {
	  var type = elem.type;
	  return (
	    (elem = elem.nodeName) &&
	    "input" === elem.toLowerCase() &&
	    ("checkbox" === type || "radio" === type)
	  );
	}
	function trackValueOnNode(node, valueField, currentValue) {
	  var descriptor = Object.getOwnPropertyDescriptor(
	    node.constructor.prototype,
	    valueField
	  );
	  if (
	    !node.hasOwnProperty(valueField) &&
	    "undefined" !== typeof descriptor &&
	    "function" === typeof descriptor.get &&
	    "function" === typeof descriptor.set
	  ) {
	    var get = descriptor.get,
	      set = descriptor.set;
	    Object.defineProperty(node, valueField, {
	      configurable: true,
	      get: function () {
	        return get.call(this);
	      },
	      set: function (value) {
	        currentValue = "" + value;
	        set.call(this, value);
	      }
	    });
	    Object.defineProperty(node, valueField, {
	      enumerable: descriptor.enumerable
	    });
	    return {
	      getValue: function () {
	        return currentValue;
	      },
	      setValue: function (value) {
	        currentValue = "" + value;
	      },
	      stopTracking: function () {
	        node._valueTracker = null;
	        delete node[valueField];
	      }
	    };
	  }
	}
	function track(node) {
	  if (!node._valueTracker) {
	    var valueField = isCheckable(node) ? "checked" : "value";
	    node._valueTracker = trackValueOnNode(
	      node,
	      valueField,
	      "" + node[valueField]
	    );
	  }
	}
	function updateValueIfChanged(node) {
	  if (!node) return false;
	  var tracker = node._valueTracker;
	  if (!tracker) return true;
	  var lastValue = tracker.getValue();
	  var value = "";
	  node &&
	    (value = isCheckable(node)
	      ? node.checked
	        ? "true"
	        : "false"
	      : node.value);
	  node = value;
	  return node !== lastValue ? (tracker.setValue(node), true) : false;
	}
	function getActiveElement(doc) {
	  doc = doc || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof doc) return null;
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
	  return value.replace(
	    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
	    function (ch) {
	      return "\\" + ch.charCodeAt(0).toString(16) + " ";
	    }
	  );
	}
	function updateInput(
	  element,
	  value,
	  defaultValue,
	  lastDefaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name
	) {
	  element.name = "";
	  null != type &&
	  "function" !== typeof type &&
	  "symbol" !== typeof type &&
	  "boolean" !== typeof type
	    ? (element.type = type)
	    : element.removeAttribute("type");
	  if (null != value)
	    if ("number" === type) {
	      if ((0 === value && "" === element.value) || element.value != value)
	        element.value = "" + getToStringValue(value);
	    } else
	      element.value !== "" + getToStringValue(value) &&
	        (element.value = "" + getToStringValue(value));
	  else
	    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
	  null != value
	    ? setDefaultValue(element, type, getToStringValue(value))
	    : null != defaultValue
	      ? setDefaultValue(element, type, getToStringValue(defaultValue))
	      : null != lastDefaultValue && element.removeAttribute("value");
	  null == checked &&
	    null != defaultChecked &&
	    (element.defaultChecked = !!defaultChecked);
	  null != checked &&
	    (element.checked =
	      checked && "function" !== typeof checked && "symbol" !== typeof checked);
	  null != name &&
	  "function" !== typeof name &&
	  "symbol" !== typeof name &&
	  "boolean" !== typeof name
	    ? (element.name = "" + getToStringValue(name))
	    : element.removeAttribute("name");
	}
	function initInput(
	  element,
	  value,
	  defaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name,
	  isHydrating
	) {
	  null != type &&
	    "function" !== typeof type &&
	    "symbol" !== typeof type &&
	    "boolean" !== typeof type &&
	    (element.type = type);
	  if (null != value || null != defaultValue) {
	    if (
	      !(
	        ("submit" !== type && "reset" !== type) ||
	        (void 0 !== value && null !== value)
	      )
	    ) {
	      track(element);
	      return;
	    }
	    defaultValue =
	      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	    value = null != value ? "" + getToStringValue(value) : defaultValue;
	    isHydrating || value === element.value || (element.value = value);
	    element.defaultValue = value;
	  }
	  checked = null != checked ? checked : defaultChecked;
	  checked =
	    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
	  element.checked = isHydrating ? element.checked : !!checked;
	  element.defaultChecked = !!checked;
	  null != name &&
	    "function" !== typeof name &&
	    "symbol" !== typeof name &&
	    "boolean" !== typeof name &&
	    (element.name = name);
	  track(element);
	}
	function setDefaultValue(node, type, value) {
	  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
	    node.defaultValue === "" + value ||
	    (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
	  node = node.options;
	  if (multiple) {
	    multiple = {};
	    for (var i = 0; i < propValue.length; i++)
	      multiple["$" + propValue[i]] = true;
	    for (propValue = 0; propValue < node.length; propValue++)
	      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
	        node[propValue].selected !== i && (node[propValue].selected = i),
	        i && setDefaultSelected && (node[propValue].defaultSelected = true);
	  } else {
	    propValue = "" + getToStringValue(propValue);
	    multiple = null;
	    for (i = 0; i < node.length; i++) {
	      if (node[i].value === propValue) {
	        node[i].selected = true;
	        setDefaultSelected && (node[i].defaultSelected = true);
	        return;
	      }
	      null !== multiple || node[i].disabled || (multiple = node[i]);
	    }
	    null !== multiple && (multiple.selected = true);
	  }
	}
	function updateTextarea(element, value, defaultValue) {
	  if (
	    null != value &&
	    ((value = "" + getToStringValue(value)),
	    value !== element.value && (element.value = value),
	    null == defaultValue)
	  ) {
	    element.defaultValue !== value && (element.defaultValue = value);
	    return;
	  }
	  element.defaultValue =
	    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
	  if (null == value) {
	    if (null != children) {
	      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
	      if (isArrayImpl(children)) {
	        if (1 < children.length) throw Error(formatProdErrorMessage(93));
	        children = children[0];
	      }
	      defaultValue = children;
	    }
	    null == defaultValue && (defaultValue = "");
	    value = defaultValue;
	  }
	  defaultValue = getToStringValue(value);
	  element.defaultValue = defaultValue;
	  children = element.textContent;
	  children === defaultValue &&
	    "" !== children &&
	    null !== children &&
	    (element.value = children);
	  track(element);
	}
	function setTextContent(node, text) {
	  if (text) {
	    var firstChild = node.firstChild;
	    if (
	      firstChild &&
	      firstChild === node.lastChild &&
	      3 === firstChild.nodeType
	    ) {
	      firstChild.nodeValue = text;
	      return;
	    }
	  }
	  node.textContent = text;
	}
	var unitlessNumbers = new Set(
	  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
	    " "
	  )
	);
	function setValueForStyle(style, styleName, value) {
	  var isCustomProperty = 0 === styleName.indexOf("--");
	  null == value || "boolean" === typeof value || "" === value
	    ? isCustomProperty
	      ? style.setProperty(styleName, "")
	      : "float" === styleName
	        ? (style.cssFloat = "")
	        : (style[styleName] = "")
	    : isCustomProperty
	      ? style.setProperty(styleName, value)
	      : "number" !== typeof value ||
	          0 === value ||
	          unitlessNumbers.has(styleName)
	        ? "float" === styleName
	          ? (style.cssFloat = value)
	          : (style[styleName] = ("" + value).trim())
	        : (style[styleName] = value + "px");
	}
	function setValueForStyles(node, styles, prevStyles) {
	  if (null != styles && "object" !== typeof styles)
	    throw Error(formatProdErrorMessage(62));
	  node = node.style;
	  if (null != prevStyles) {
	    for (var styleName in prevStyles)
	      !prevStyles.hasOwnProperty(styleName) ||
	        (null != styles && styles.hasOwnProperty(styleName)) ||
	        (0 === styleName.indexOf("--")
	          ? node.setProperty(styleName, "")
	          : "float" === styleName
	            ? (node.cssFloat = "")
	            : (node[styleName] = ""));
	    for (var styleName$16 in styles)
	      (styleName = styles[styleName$16]),
	        styles.hasOwnProperty(styleName$16) &&
	          prevStyles[styleName$16] !== styleName &&
	          setValueForStyle(node, styleName$16, styleName);
	  } else
	    for (var styleName$17 in styles)
	      styles.hasOwnProperty(styleName$17) &&
	        setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
	  if (-1 === tagName.indexOf("-")) return false;
	  switch (tagName) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return false;
	    default:
	      return true;
	  }
	}
	var aliases = new Map([
	    ["acceptCharset", "accept-charset"],
	    ["htmlFor", "for"],
	    ["httpEquiv", "http-equiv"],
	    ["crossOrigin", "crossorigin"],
	    ["accentHeight", "accent-height"],
	    ["alignmentBaseline", "alignment-baseline"],
	    ["arabicForm", "arabic-form"],
	    ["baselineShift", "baseline-shift"],
	    ["capHeight", "cap-height"],
	    ["clipPath", "clip-path"],
	    ["clipRule", "clip-rule"],
	    ["colorInterpolation", "color-interpolation"],
	    ["colorInterpolationFilters", "color-interpolation-filters"],
	    ["colorProfile", "color-profile"],
	    ["colorRendering", "color-rendering"],
	    ["dominantBaseline", "dominant-baseline"],
	    ["enableBackground", "enable-background"],
	    ["fillOpacity", "fill-opacity"],
	    ["fillRule", "fill-rule"],
	    ["floodColor", "flood-color"],
	    ["floodOpacity", "flood-opacity"],
	    ["fontFamily", "font-family"],
	    ["fontSize", "font-size"],
	    ["fontSizeAdjust", "font-size-adjust"],
	    ["fontStretch", "font-stretch"],
	    ["fontStyle", "font-style"],
	    ["fontVariant", "font-variant"],
	    ["fontWeight", "font-weight"],
	    ["glyphName", "glyph-name"],
	    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
	    ["glyphOrientationVertical", "glyph-orientation-vertical"],
	    ["horizAdvX", "horiz-adv-x"],
	    ["horizOriginX", "horiz-origin-x"],
	    ["imageRendering", "image-rendering"],
	    ["letterSpacing", "letter-spacing"],
	    ["lightingColor", "lighting-color"],
	    ["markerEnd", "marker-end"],
	    ["markerMid", "marker-mid"],
	    ["markerStart", "marker-start"],
	    ["overlinePosition", "overline-position"],
	    ["overlineThickness", "overline-thickness"],
	    ["paintOrder", "paint-order"],
	    ["panose-1", "panose-1"],
	    ["pointerEvents", "pointer-events"],
	    ["renderingIntent", "rendering-intent"],
	    ["shapeRendering", "shape-rendering"],
	    ["stopColor", "stop-color"],
	    ["stopOpacity", "stop-opacity"],
	    ["strikethroughPosition", "strikethrough-position"],
	    ["strikethroughThickness", "strikethrough-thickness"],
	    ["strokeDasharray", "stroke-dasharray"],
	    ["strokeDashoffset", "stroke-dashoffset"],
	    ["strokeLinecap", "stroke-linecap"],
	    ["strokeLinejoin", "stroke-linejoin"],
	    ["strokeMiterlimit", "stroke-miterlimit"],
	    ["strokeOpacity", "stroke-opacity"],
	    ["strokeWidth", "stroke-width"],
	    ["textAnchor", "text-anchor"],
	    ["textDecoration", "text-decoration"],
	    ["textRendering", "text-rendering"],
	    ["transformOrigin", "transform-origin"],
	    ["underlinePosition", "underline-position"],
	    ["underlineThickness", "underline-thickness"],
	    ["unicodeBidi", "unicode-bidi"],
	    ["unicodeRange", "unicode-range"],
	    ["unitsPerEm", "units-per-em"],
	    ["vAlphabetic", "v-alphabetic"],
	    ["vHanging", "v-hanging"],
	    ["vIdeographic", "v-ideographic"],
	    ["vMathematical", "v-mathematical"],
	    ["vectorEffect", "vector-effect"],
	    ["vertAdvY", "vert-adv-y"],
	    ["vertOriginX", "vert-origin-x"],
	    ["vertOriginY", "vert-origin-y"],
	    ["wordSpacing", "word-spacing"],
	    ["writingMode", "writing-mode"],
	    ["xmlnsXlink", "xmlns:xlink"],
	    ["xHeight", "x-height"]
	  ]),
	  isJavaScriptProtocol =
	    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
	  return isJavaScriptProtocol.test("" + url)
	    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
	    : url;
	}
	function noop$1() {}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
	  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
	  nativeEvent.correspondingUseElement &&
	    (nativeEvent = nativeEvent.correspondingUseElement);
	  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null,
	  restoreQueue = null;
	function restoreStateOfTarget(target) {
	  var internalInstance = getInstanceFromNode(target);
	  if (internalInstance && (target = internalInstance.stateNode)) {
	    var props = target[internalPropsKey] || null;
	    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
	      case "input":
	        updateInput(
	          target,
	          props.value,
	          props.defaultValue,
	          props.defaultValue,
	          props.checked,
	          props.defaultChecked,
	          props.type,
	          props.name
	        );
	        internalInstance = props.name;
	        if ("radio" === props.type && null != internalInstance) {
	          for (props = target; props.parentNode; ) props = props.parentNode;
	          props = props.querySelectorAll(
	            'input[name="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                "" + internalInstance
	              ) +
	              '"][type="radio"]'
	          );
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          ) {
	            var otherNode = props[internalInstance];
	            if (otherNode !== target && otherNode.form === target.form) {
	              var otherProps = otherNode[internalPropsKey] || null;
	              if (!otherProps) throw Error(formatProdErrorMessage(90));
	              updateInput(
	                otherNode,
	                otherProps.value,
	                otherProps.defaultValue,
	                otherProps.defaultValue,
	                otherProps.checked,
	                otherProps.defaultChecked,
	                otherProps.type,
	                otherProps.name
	              );
	            }
	          }
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          )
	            (otherNode = props[internalInstance]),
	              otherNode.form === target.form && updateValueIfChanged(otherNode);
	        }
	        break a;
	      case "textarea":
	        updateTextarea(target, props.value, props.defaultValue);
	        break a;
	      case "select":
	        (internalInstance = props.value),
	          null != internalInstance &&
	            updateOptions(target, !!props.multiple, internalInstance, false);
	    }
	  }
	}
	var isInsideEventHandler = false;
	function batchedUpdates$1(fn, a, b) {
	  if (isInsideEventHandler) return fn(a, b);
	  isInsideEventHandler = true;
	  try {
	    var JSCompiler_inline_result = fn(a);
	    return JSCompiler_inline_result;
	  } finally {
	    if (
	      ((isInsideEventHandler = false),
	      null !== restoreTarget || null !== restoreQueue)
	    )
	      if (
	        (flushSyncWork$1(),
	        restoreTarget &&
	          ((a = restoreTarget),
	          (fn = restoreQueue),
	          (restoreQueue = restoreTarget = null),
	          restoreStateOfTarget(a),
	          fn))
	      )
	        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
	  }
	}
	function getListener(inst, registrationName) {
	  var stateNode = inst.stateNode;
	  if (null === stateNode) return null;
	  var props = stateNode[internalPropsKey] || null;
	  if (null === props) return null;
	  stateNode = props[registrationName];
	  a: switch (registrationName) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (props = !props.disabled) ||
	        ((inst = inst.type),
	        (props = !(
	          "button" === inst ||
	          "input" === inst ||
	          "select" === inst ||
	          "textarea" === inst
	        )));
	      inst = !props;
	      break a;
	    default:
	      inst = false;
	  }
	  if (inst) return null;
	  if (stateNode && "function" !== typeof stateNode)
	    throw Error(
	      formatProdErrorMessage(231, registrationName, typeof stateNode)
	    );
	  return stateNode;
	}
	var canUseDOM = !(
	    "undefined" === typeof window ||
	    "undefined" === typeof window.document ||
	    "undefined" === typeof window.document.createElement
	  ),
	  passiveBrowserEventsSupported = false;
	if (canUseDOM)
	  try {
	    var options = {};
	    Object.defineProperty(options, "passive", {
	      get: function () {
	        passiveBrowserEventsSupported = !0;
	      }
	    });
	    window.addEventListener("test", options, options);
	    window.removeEventListener("test", options, options);
	  } catch (e) {
	    passiveBrowserEventsSupported = false;
	  }
	var root = null,
	  startText = null,
	  fallbackText = null;
	function getData() {
	  if (fallbackText) return fallbackText;
	  var start,
	    startValue = startText,
	    startLength = startValue.length,
	    end,
	    endValue = "value" in root ? root.value : root.textContent,
	    endLength = endValue.length;
	  for (
	    start = 0;
	    start < startLength && startValue[start] === endValue[start];
	    start++
	  );
	  var minEnd = startLength - start;
	  for (
	    end = 1;
	    end <= minEnd &&
	    startValue[startLength - end] === endValue[endLength - end];
	    end++
	  );
	  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
	}
	function getEventCharCode(nativeEvent) {
	  var keyCode = nativeEvent.keyCode;
	  "charCode" in nativeEvent
	    ? ((nativeEvent = nativeEvent.charCode),
	      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
	    : (nativeEvent = keyCode);
	  10 === nativeEvent && (nativeEvent = 13);
	  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
	  return true;
	}
	function functionThatReturnsFalse() {
	  return false;
	}
	function createSyntheticEvent(Interface) {
	  function SyntheticBaseEvent(
	    reactName,
	    reactEventType,
	    targetInst,
	    nativeEvent,
	    nativeEventTarget
	  ) {
	    this._reactName = reactName;
	    this._targetInst = targetInst;
	    this.type = reactEventType;
	    this.nativeEvent = nativeEvent;
	    this.target = nativeEventTarget;
	    this.currentTarget = null;
	    for (var propName in Interface)
	      Interface.hasOwnProperty(propName) &&
	        ((reactName = Interface[propName]),
	        (this[propName] = reactName
	          ? reactName(nativeEvent)
	          : nativeEvent[propName]));
	    this.isDefaultPrevented = (
	      null != nativeEvent.defaultPrevented
	        ? nativeEvent.defaultPrevented
	        : false === nativeEvent.returnValue
	    )
	      ? functionThatReturnsTrue
	      : functionThatReturnsFalse;
	    this.isPropagationStopped = functionThatReturnsFalse;
	    return this;
	  }
	  assign(SyntheticBaseEvent.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = true;
	      var event = this.nativeEvent;
	      event &&
	        (event.preventDefault
	          ? event.preventDefault()
	          : "unknown" !== typeof event.returnValue && (event.returnValue = false),
	        (this.isDefaultPrevented = functionThatReturnsTrue));
	    },
	    stopPropagation: function () {
	      var event = this.nativeEvent;
	      event &&
	        (event.stopPropagation
	          ? event.stopPropagation()
	          : "unknown" !== typeof event.cancelBubble &&
	            (event.cancelBubble = true),
	        (this.isPropagationStopped = functionThatReturnsTrue));
	    },
	    persist: function () {},
	    isPersistent: functionThatReturnsTrue
	  });
	  return SyntheticBaseEvent;
	}
	var EventInterface = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (event) {
	      return event.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  SyntheticEvent = createSyntheticEvent(EventInterface),
	  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
	  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
	  lastMovementX,
	  lastMovementY,
	  lastMouseEvent,
	  MouseEventInterface = assign({}, UIEventInterface, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: getEventModifierState,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (event) {
	      return void 0 === event.relatedTarget
	        ? event.fromElement === event.srcElement
	          ? event.toElement
	          : event.fromElement
	        : event.relatedTarget;
	    },
	    movementX: function (event) {
	      if ("movementX" in event) return event.movementX;
	      event !== lastMouseEvent &&
	        (lastMouseEvent && "mousemove" === event.type
	          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
	            (lastMovementY = event.screenY - lastMouseEvent.screenY))
	          : (lastMovementY = lastMovementX = 0),
	        (lastMouseEvent = event));
	      return lastMovementX;
	    },
	    movementY: function (event) {
	      return "movementY" in event ? event.movementY : lastMovementY;
	    }
	  }),
	  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
	  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
	  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
	  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
	  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
	  AnimationEventInterface = assign({}, EventInterface, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
	  ClipboardEventInterface = assign({}, EventInterface, {
	    clipboardData: function (event) {
	      return "clipboardData" in event
	        ? event.clipboardData
	        : window.clipboardData;
	    }
	  }),
	  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
	  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
	  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
	  normalizeKey = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  translateToKey = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  modifierKeyToProp = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function modifierStateGetter(keyArg) {
	  var nativeEvent = this.nativeEvent;
	  return nativeEvent.getModifierState
	    ? nativeEvent.getModifierState(keyArg)
	    : (keyArg = modifierKeyToProp[keyArg])
	      ? !!nativeEvent[keyArg]
	      : false;
	}
	function getEventModifierState() {
	  return modifierStateGetter;
	}
	var KeyboardEventInterface = assign({}, UIEventInterface, {
	    key: function (nativeEvent) {
	      if (nativeEvent.key) {
	        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	        if ("Unidentified" !== key) return key;
	      }
	      return "keypress" === nativeEvent.type
	        ? ((nativeEvent = getEventCharCode(nativeEvent)),
	          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
	        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
	          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
	          : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: getEventModifierState,
	    charCode: function (event) {
	      return "keypress" === event.type ? getEventCharCode(event) : 0;
	    },
	    keyCode: function (event) {
	      return "keydown" === event.type || "keyup" === event.type
	        ? event.keyCode
	        : 0;
	    },
	    which: function (event) {
	      return "keypress" === event.type
	        ? getEventCharCode(event)
	        : "keydown" === event.type || "keyup" === event.type
	          ? event.keyCode
	          : 0;
	    }
	  }),
	  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
	  PointerEventInterface = assign({}, MouseEventInterface, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
	  TouchEventInterface = assign({}, UIEventInterface, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: getEventModifierState
	  }),
	  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
	  TransitionEventInterface = assign({}, EventInterface, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
	  WheelEventInterface = assign({}, MouseEventInterface, {
	    deltaX: function (event) {
	      return "deltaX" in event
	        ? event.deltaX
	        : "wheelDeltaX" in event
	          ? -event.wheelDeltaX
	          : 0;
	    },
	    deltaY: function (event) {
	      return "deltaY" in event
	        ? event.deltaY
	        : "wheelDeltaY" in event
	          ? -event.wheelDeltaY
	          : "wheelDelta" in event
	            ? -event.wheelDelta
	            : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
	  ToggleEventInterface = assign({}, EventInterface, {
	    newState: 0,
	    oldState: 0
	  }),
	  SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface),
	  END_KEYCODES = [9, 13, 27, 32],
	  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
	  documentMode = null;
	canUseDOM &&
	  "documentMode" in document &&
	  (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
	  useFallbackCompositionData =
	    canUseDOM &&
	    (!canUseCompositionEvent ||
	      (documentMode && 8 < documentMode && 11 >= documentMode)),
	  SPACEBAR_CHAR = String.fromCharCode(32),
	  hasSpaceKeypress = false;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "keyup":
	      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
	    case "keydown":
	      return 229 !== nativeEvent.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return true;
	    default:
	      return false;
	  }
	}
	function getDataFromCustomEvent(nativeEvent) {
	  nativeEvent = nativeEvent.detail;
	  return "object" === typeof nativeEvent && "data" in nativeEvent
	    ? nativeEvent.data
	    : null;
	}
	var isComposing = false;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "compositionend":
	      return getDataFromCustomEvent(nativeEvent);
	    case "keypress":
	      if (32 !== nativeEvent.which) return null;
	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;
	    case "textInput":
	      return (
	        (domEventName = nativeEvent.data),
	        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
	      );
	    default:
	      return null;
	  }
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
	  if (isComposing)
	    return "compositionend" === domEventName ||
	      (!canUseCompositionEvent &&
	        isFallbackCompositionEnd(domEventName, nativeEvent))
	      ? ((domEventName = getData()),
	        (fallbackText = startText = root = null),
	        (isComposing = false),
	        domEventName)
	      : null;
	  switch (domEventName) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (
	        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
	        (nativeEvent.ctrlKey && nativeEvent.altKey)
	      ) {
	        if (nativeEvent.char && 1 < nativeEvent.char.length)
	          return nativeEvent.char;
	        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case "compositionend":
	      return useFallbackCompositionData && "ko" !== nativeEvent.locale
	        ? null
	        : nativeEvent.data;
	    default:
	      return null;
	  }
	}
	var supportedInputTypes = {
	  color: true,
	  date: true,
	  datetime: true,
	  "datetime-local": true,
	  email: true,
	  month: true,
	  number: true,
	  password: true,
	  range: true,
	  search: true,
	  tel: true,
	  text: true,
	  time: true,
	  url: true,
	  week: true
	};
	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return "input" === nodeName
	    ? !!supportedInputTypes[elem.type]
	    : "textarea" === nodeName
	      ? true
	      : false;
	}
	function createAndAccumulateChangeEvent(
	  dispatchQueue,
	  inst,
	  nativeEvent,
	  target
	) {
	  restoreTarget
	    ? restoreQueue
	      ? restoreQueue.push(target)
	      : (restoreQueue = [target])
	    : (restoreTarget = target);
	  inst = accumulateTwoPhaseListeners(inst, "onChange");
	  0 < inst.length &&
	    ((nativeEvent = new SyntheticEvent(
	      "onChange",
	      "change",
	      null,
	      nativeEvent,
	      target
	    )),
	    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
	}
	var activeElement$1 = null,
	  activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
	  processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
	  var targetNode = getNodeFromInstance(targetInst);
	  if (updateValueIfChanged(targetNode)) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
	  if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = false;
	if (canUseDOM) {
	  var JSCompiler_inline_result$jscomp$286;
	  if (canUseDOM) {
	    var isSupported$jscomp$inline_427 = "oninput" in document;
	    if (!isSupported$jscomp$inline_427) {
	      var element$jscomp$inline_428 = document.createElement("div");
	      element$jscomp$inline_428.setAttribute("oninput", "return;");
	      isSupported$jscomp$inline_427 =
	        "function" === typeof element$jscomp$inline_428.oninput;
	    }
	    JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
	  } else JSCompiler_inline_result$jscomp$286 = false;
	  isInputEventSupported =
	    JSCompiler_inline_result$jscomp$286 &&
	    (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
	  activeElement$1 &&
	    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
	    (activeElementInst$1 = activeElement$1 = null));
	}
	function handlePropertyChange(nativeEvent) {
	  if (
	    "value" === nativeEvent.propertyName &&
	    getInstIfValueChanged(activeElementInst$1)
	  ) {
	    var dispatchQueue = [];
	    createAndAccumulateChangeEvent(
	      dispatchQueue,
	      activeElementInst$1,
	      nativeEvent,
	      getEventTarget(nativeEvent)
	    );
	    batchedUpdates$1(runEventInBatch, dispatchQueue);
	  }
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
	  "focusin" === domEventName
	    ? (stopWatchingForValueChange(),
	      (activeElement$1 = target),
	      (activeElementInst$1 = targetInst),
	      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
	    : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
	  if (
	    "selectionchange" === domEventName ||
	    "keyup" === domEventName ||
	    "keydown" === domEventName
	  )
	    return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
	  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
	  if ("input" === domEventName || "change" === domEventName)
	    return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
	  if (objectIs(objA, objB)) return true;
	  if (
	    "object" !== typeof objA ||
	    null === objA ||
	    "object" !== typeof objB ||
	    null === objB
	  )
	    return false;
	  var keysA = Object.keys(objA),
	    keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	  for (keysB = 0; keysB < keysA.length; keysB++) {
	    var currentKey = keysA[keysB];
	    if (
	      !hasOwnProperty.call(objB, currentKey) ||
	      !objectIs(objA[currentKey], objB[currentKey])
	    )
	      return false;
	  }
	  return true;
	}
	function getLeafNode(node) {
	  for (; node && node.firstChild; ) node = node.firstChild;
	  return node;
	}
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  root = 0;
	  for (var nodeEnd; node; ) {
	    if (3 === node.nodeType) {
	      nodeEnd = root + node.textContent.length;
	      if (root <= offset && nodeEnd >= offset)
	        return { node: node, offset: offset - root };
	      root = nodeEnd;
	    }
	    a: {
	      for (; node; ) {
	        if (node.nextSibling) {
	          node = node.nextSibling;
	          break a;
	        }
	        node = node.parentNode;
	      }
	      node = void 0;
	    }
	    node = getLeafNode(node);
	  }
	}
	function containsNode(outerNode, innerNode) {
	  return outerNode && innerNode
	    ? outerNode === innerNode
	      ? true
	      : outerNode && 3 === outerNode.nodeType
	        ? false
	        : innerNode && 3 === innerNode.nodeType
	          ? containsNode(outerNode, innerNode.parentNode)
	          : "contains" in outerNode
	            ? outerNode.contains(innerNode)
	            : outerNode.compareDocumentPosition
	              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
	              : false
	    : false;
	}
	function getActiveElementDeep(containerInfo) {
	  containerInfo =
	    null != containerInfo &&
	    null != containerInfo.ownerDocument &&
	    null != containerInfo.ownerDocument.defaultView
	      ? containerInfo.ownerDocument.defaultView
	      : window;
	  for (
	    var element = getActiveElement(containerInfo.document);
	    element instanceof containerInfo.HTMLIFrameElement;

	  ) {
	    try {
	      var JSCompiler_inline_result =
	        "string" === typeof element.contentWindow.location.href;
	    } catch (err) {
	      JSCompiler_inline_result = false;
	    }
	    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
	    else break;
	    element = getActiveElement(containerInfo.document);
	  }
	  return element;
	}
	function hasSelectionCapabilities(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return (
	    nodeName &&
	    (("input" === nodeName &&
	      ("text" === elem.type ||
	        "search" === elem.type ||
	        "tel" === elem.type ||
	        "url" === elem.type ||
	        "password" === elem.type)) ||
	      "textarea" === nodeName ||
	      "true" === elem.contentEditable)
	  );
	}
	var skipSelectionChangeEvent =
	    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
	  activeElement = null,
	  activeElementInst = null,
	  lastSelection = null,
	  mouseDown = false;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
	  var doc =
	    nativeEventTarget.window === nativeEventTarget
	      ? nativeEventTarget.document
	      : 9 === nativeEventTarget.nodeType
	        ? nativeEventTarget
	        : nativeEventTarget.ownerDocument;
	  mouseDown ||
	    null == activeElement ||
	    activeElement !== getActiveElement(doc) ||
	    ((doc = activeElement),
	    "selectionStart" in doc && hasSelectionCapabilities(doc)
	      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
	      : ((doc = (
	          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
	          window
	        ).getSelection()),
	        (doc = {
	          anchorNode: doc.anchorNode,
	          anchorOffset: doc.anchorOffset,
	          focusNode: doc.focusNode,
	          focusOffset: doc.focusOffset
	        })),
	    (lastSelection && shallowEqual(lastSelection, doc)) ||
	      ((lastSelection = doc),
	      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
	      0 < doc.length &&
	        ((nativeEvent = new SyntheticEvent(
	          "onSelect",
	          "select",
	          null,
	          nativeEvent,
	          nativeEventTarget
	        )),
	        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
	        (nativeEvent.target = activeElement))));
	}
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};
	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes["Webkit" + styleProp] = "webkit" + eventName;
	  prefixes["Moz" + styleProp] = "moz" + eventName;
	  return prefixes;
	}
	var vendorPrefixes = {
	    animationend: makePrefixMap("Animation", "AnimationEnd"),
	    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
	    animationstart: makePrefixMap("Animation", "AnimationStart"),
	    transitionrun: makePrefixMap("Transition", "TransitionRun"),
	    transitionstart: makePrefixMap("Transition", "TransitionStart"),
	    transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
	    transitionend: makePrefixMap("Transition", "TransitionEnd")
	  },
	  prefixedEventNames = {},
	  style = {};
	canUseDOM &&
	  ((style = document.createElement("div").style),
	  "AnimationEvent" in window ||
	    (delete vendorPrefixes.animationend.animation,
	    delete vendorPrefixes.animationiteration.animation,
	    delete vendorPrefixes.animationstart.animation),
	  "TransitionEvent" in window ||
	    delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
	  if (!vendorPrefixes[eventName]) return eventName;
	  var prefixMap = vendorPrefixes[eventName],
	    styleProp;
	  for (styleProp in prefixMap)
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
	      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
	  return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend"),
	  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
	  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
	  TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"),
	  TRANSITION_START = getVendorPrefixedEventName("transitionstart"),
	  TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"),
	  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
	  topLevelEventsToReactNames = new Map(),
	  simpleEventPluginEvents =
	    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
	      " "
	    );
	simpleEventPluginEvents.push("scrollEnd");
	function registerSimpleEvent(domEventName, reactName) {
	  topLevelEventsToReactNames.set(domEventName, reactName);
	  registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var reportGlobalError =
	    "function" === typeof reportError
	      ? reportError
	      : function (error) {
	          if (
	            "object" === typeof window &&
	            "function" === typeof window.ErrorEvent
	          ) {
	            var event = new window.ErrorEvent("error", {
	              bubbles: true,
	              cancelable: true,
	              message:
	                "object" === typeof error &&
	                null !== error &&
	                "string" === typeof error.message
	                  ? String(error.message)
	                  : String(error),
	              error: error
	            });
	            if (!window.dispatchEvent(event)) return;
	          } else if (
	            "object" === typeof process &&
	            "function" === typeof process.emit
	          ) {
	            process.emit("uncaughtException", error);
	            return;
	          }
	          console.error(error);
	        },
	  concurrentQueues = [],
	  concurrentQueuesIndex = 0,
	  concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
	  for (
	    var endIndex = concurrentQueuesIndex,
	      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
	    i < endIndex;

	  ) {
	    var fiber = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var queue = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var update = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var lane = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    if (null !== queue && null !== update) {
	      var pending = queue.pending;
	      null === pending
	        ? (update.next = update)
	        : ((update.next = pending.next), (pending.next = update));
	      queue.pending = update;
	    }
	    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
	  }
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
	  concurrentQueues[concurrentQueuesIndex++] = fiber;
	  concurrentQueues[concurrentQueuesIndex++] = queue;
	  concurrentQueues[concurrentQueuesIndex++] = update;
	  concurrentQueues[concurrentQueuesIndex++] = lane;
	  concurrentlyUpdatedLanes |= lane;
	  fiber.lanes |= lane;
	  fiber = fiber.alternate;
	  null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
	  enqueueUpdate$1(fiber, queue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
	  enqueueUpdate$1(fiber, null, null, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
	  sourceFiber.lanes |= lane;
	  var alternate = sourceFiber.alternate;
	  null !== alternate && (alternate.lanes |= lane);
	  for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
	    (parent.childLanes |= lane),
	      (alternate = parent.alternate),
	      null !== alternate && (alternate.childLanes |= lane),
	      22 === parent.tag &&
	        ((sourceFiber = parent.stateNode),
	        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)),
	      (sourceFiber = parent),
	      (parent = parent.return);
	  return 3 === sourceFiber.tag
	    ? ((parent = sourceFiber.stateNode),
	      isHidden &&
	        null !== update &&
	        ((isHidden = 31 - clz32(lane)),
	        (sourceFiber = parent.hiddenUpdates),
	        (alternate = sourceFiber[isHidden]),
	        null === alternate
	          ? (sourceFiber[isHidden] = [update])
	          : alternate.push(update),
	        (update.lane = lane | 536870912)),
	      parent)
	    : null;
	}
	function getRootForUpdatedFiber(sourceFiber) {
	  if (50 < nestedUpdateCount)
	    throw (
	      ((nestedUpdateCount = 0),
	      (rootWithNestedUpdates = null),
	      Error(formatProdErrorMessage(185)))
	    );
	  for (var parent = sourceFiber.return; null !== parent; )
	    (sourceFiber = parent), (parent = sourceFiber.return);
	  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {};
	function FiberNode(tag, pendingProps, key, mode) {
	  this.tag = tag;
	  this.key = key;
	  this.sibling =
	    this.child =
	    this.return =
	    this.stateNode =
	    this.type =
	    this.elementType =
	      null;
	  this.index = 0;
	  this.refCleanup = this.ref = null;
	  this.pendingProps = pendingProps;
	  this.dependencies =
	    this.memoizedState =
	    this.updateQueue =
	    this.memoizedProps =
	      null;
	  this.mode = mode;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
	  return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
	  Component = Component.prototype;
	  return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
	  var workInProgress = current.alternate;
	  null === workInProgress
	    ? ((workInProgress = createFiberImplClass(
	        current.tag,
	        pendingProps,
	        current.key,
	        current.mode
	      )),
	      (workInProgress.elementType = current.elementType),
	      (workInProgress.type = current.type),
	      (workInProgress.stateNode = current.stateNode),
	      (workInProgress.alternate = current),
	      (current.alternate = workInProgress))
	    : ((workInProgress.pendingProps = pendingProps),
	      (workInProgress.type = current.type),
	      (workInProgress.flags = 0),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null));
	  workInProgress.flags = current.flags & 65011712;
	  workInProgress.childLanes = current.childLanes;
	  workInProgress.lanes = current.lanes;
	  workInProgress.child = current.child;
	  workInProgress.memoizedProps = current.memoizedProps;
	  workInProgress.memoizedState = current.memoizedState;
	  workInProgress.updateQueue = current.updateQueue;
	  pendingProps = current.dependencies;
	  workInProgress.dependencies =
	    null === pendingProps
	      ? null
	      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
	  workInProgress.sibling = current.sibling;
	  workInProgress.index = current.index;
	  workInProgress.ref = current.ref;
	  workInProgress.refCleanup = current.refCleanup;
	  return workInProgress;
	}
	function resetWorkInProgress(workInProgress, renderLanes) {
	  workInProgress.flags &= 65011714;
	  var current = workInProgress.alternate;
	  null === current
	    ? ((workInProgress.childLanes = 0),
	      (workInProgress.lanes = renderLanes),
	      (workInProgress.child = null),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.memoizedProps = null),
	      (workInProgress.memoizedState = null),
	      (workInProgress.updateQueue = null),
	      (workInProgress.dependencies = null),
	      (workInProgress.stateNode = null))
	    : ((workInProgress.childLanes = current.childLanes),
	      (workInProgress.lanes = current.lanes),
	      (workInProgress.child = current.child),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null),
	      (workInProgress.memoizedProps = current.memoizedProps),
	      (workInProgress.memoizedState = current.memoizedState),
	      (workInProgress.updateQueue = current.updateQueue),
	      (workInProgress.type = current.type),
	      (renderLanes = current.dependencies),
	      (workInProgress.dependencies =
	        null === renderLanes
	          ? null
	          : {
	              lanes: renderLanes.lanes,
	              firstContext: renderLanes.firstContext
	            }));
	  return workInProgress;
	}
	function createFiberFromTypeAndProps(
	  type,
	  key,
	  pendingProps,
	  owner,
	  mode,
	  lanes
	) {
	  var fiberTag = 0;
	  owner = type;
	  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
	  else if ("string" === typeof type)
	    fiberTag = isHostHoistableType(
	      type,
	      pendingProps,
	      contextStackCursor.current
	    )
	      ? 26
	      : "html" === type || "head" === type || "body" === type
	        ? 27
	        : 5;
	  else
	    a: switch (type) {
	      case REACT_ACTIVITY_TYPE:
	        return (
	          (type = createFiberImplClass(31, pendingProps, key, mode)),
	          (type.elementType = REACT_ACTIVITY_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_FRAGMENT_TYPE:
	        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
	      case REACT_STRICT_MODE_TYPE:
	        fiberTag = 8;
	        mode |= 24;
	        break;
	      case REACT_PROFILER_TYPE:
	        return (
	          (type = createFiberImplClass(12, pendingProps, key, mode | 2)),
	          (type.elementType = REACT_PROFILER_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_TYPE:
	        return (
	          (type = createFiberImplClass(13, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_LIST_TYPE:
	        return (
	          (type = createFiberImplClass(19, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      default:
	        if ("object" === typeof type && null !== type)
	          switch (type.$$typeof) {
	            case REACT_CONTEXT_TYPE:
	              fiberTag = 10;
	              break a;
	            case REACT_CONSUMER_TYPE:
	              fiberTag = 9;
	              break a;
	            case REACT_FORWARD_REF_TYPE:
	              fiberTag = 11;
	              break a;
	            case REACT_MEMO_TYPE:
	              fiberTag = 14;
	              break a;
	            case REACT_LAZY_TYPE:
	              fiberTag = 16;
	              owner = null;
	              break a;
	          }
	        fiberTag = 29;
	        pendingProps = Error(
	          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
	        );
	        owner = null;
	    }
	  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
	  key.elementType = type;
	  key.type = owner;
	  key.lanes = lanes;
	  return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
	  elements = createFiberImplClass(7, elements, key, mode);
	  elements.lanes = lanes;
	  return elements;
	}
	function createFiberFromText(content, mode, lanes) {
	  content = createFiberImplClass(6, content, null, mode);
	  content.lanes = lanes;
	  return content;
	}
	function createFiberFromDehydratedFragment(dehydratedNode) {
	  var fiber = createFiberImplClass(18, null, null, 0);
	  fiber.stateNode = dehydratedNode;
	  return fiber;
	}
	function createFiberFromPortal(portal, mode, lanes) {
	  mode = createFiberImplClass(
	    4,
	    null !== portal.children ? portal.children : [],
	    portal.key,
	    mode
	  );
	  mode.lanes = lanes;
	  mode.stateNode = {
	    containerInfo: portal.containerInfo,
	    pendingChildren: null,
	    implementation: portal.implementation
	  };
	  return mode;
	}
	var CapturedStacks = new WeakMap();
	function createCapturedValueAtFiber(value, source) {
	  if ("object" === typeof value && null !== value) {
	    var existing = CapturedStacks.get(value);
	    if (void 0 !== existing) return existing;
	    source = {
	      value: value,
	      source: source,
	      stack: getStackByFiberInDevAndProd(source)
	    };
	    CapturedStacks.set(value, source);
	    return source;
	  }
	  return {
	    value: value,
	    source: source,
	    stack: getStackByFiberInDevAndProd(source)
	  };
	}
	var forkStack = [],
	  forkStackIndex = 0,
	  treeForkProvider = null,
	  treeForkCount = 0,
	  idStack = [],
	  idStackIndex = 0,
	  treeContextProvider = null,
	  treeContextId = 1,
	  treeContextOverflow = "";
	function pushTreeFork(workInProgress, totalChildren) {
	  forkStack[forkStackIndex++] = treeForkCount;
	  forkStack[forkStackIndex++] = treeForkProvider;
	  treeForkProvider = workInProgress;
	  treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress, totalChildren, index) {
	  idStack[idStackIndex++] = treeContextId;
	  idStack[idStackIndex++] = treeContextOverflow;
	  idStack[idStackIndex++] = treeContextProvider;
	  treeContextProvider = workInProgress;
	  var baseIdWithLeadingBit = treeContextId;
	  workInProgress = treeContextOverflow;
	  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
	  baseIdWithLeadingBit &= ~(1 << baseLength);
	  index += 1;
	  var length = 32 - clz32(totalChildren) + baseLength;
	  if (30 < length) {
	    var numberOfOverflowBits = baseLength - (baseLength % 5);
	    length = (
	      baseIdWithLeadingBit &
	      ((1 << numberOfOverflowBits) - 1)
	    ).toString(32);
	    baseIdWithLeadingBit >>= numberOfOverflowBits;
	    baseLength -= numberOfOverflowBits;
	    treeContextId =
	      (1 << (32 - clz32(totalChildren) + baseLength)) |
	      (index << baseLength) |
	      baseIdWithLeadingBit;
	    treeContextOverflow = length + workInProgress;
	  } else
	    (treeContextId =
	      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
	      (treeContextOverflow = workInProgress);
	}
	function pushMaterializedTreeId(workInProgress) {
	  null !== workInProgress.return &&
	    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
	}
	function popTreeContext(workInProgress) {
	  for (; workInProgress === treeForkProvider; )
	    (treeForkProvider = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null),
	      (treeForkCount = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null);
	  for (; workInProgress === treeContextProvider; )
	    (treeContextProvider = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextOverflow = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextId = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null);
	}
	function restoreSuspendedTreeContext(workInProgress, suspendedContext) {
	  idStack[idStackIndex++] = treeContextId;
	  idStack[idStackIndex++] = treeContextOverflow;
	  idStack[idStackIndex++] = treeContextProvider;
	  treeContextId = suspendedContext.id;
	  treeContextOverflow = suspendedContext.overflow;
	  treeContextProvider = workInProgress;
	}
	var hydrationParentFiber = null,
	  nextHydratableInstance = null,
	  isHydrating = false,
	  hydrationErrors = null,
	  rootOrSingletonContext = false,
	  HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
	  var error = Error(
	    formatProdErrorMessage(
	      418,
	      1 < arguments.length && void 0 !== arguments[1] && arguments[1]
	        ? "text"
	        : "HTML",
	      ""
	    )
	  );
	  queueHydrationError(createCapturedValueAtFiber(error, fiber));
	  throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
	  var instance = fiber.stateNode,
	    type = fiber.type,
	    props = fiber.memoizedProps;
	  instance[internalInstanceKey] = fiber;
	  instance[internalPropsKey] = props;
	  switch (type) {
	    case "dialog":
	      listenToNonDelegatedEvent("cancel", instance);
	      listenToNonDelegatedEvent("close", instance);
	      break;
	    case "iframe":
	    case "object":
	    case "embed":
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "video":
	    case "audio":
	      for (type = 0; type < mediaEventTypes.length; type++)
	        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
	      break;
	    case "source":
	      listenToNonDelegatedEvent("error", instance);
	      break;
	    case "img":
	    case "image":
	    case "link":
	      listenToNonDelegatedEvent("error", instance);
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", instance);
	      break;
	    case "input":
	      listenToNonDelegatedEvent("invalid", instance);
	      initInput(
	        instance,
	        props.value,
	        props.defaultValue,
	        props.checked,
	        props.defaultChecked,
	        props.type,
	        props.name,
	        true
	      );
	      break;
	    case "select":
	      listenToNonDelegatedEvent("invalid", instance);
	      break;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", instance),
	        initTextarea(instance, props.value, props.defaultValue, props.children);
	  }
	  type = props.children;
	  ("string" !== typeof type &&
	    "number" !== typeof type &&
	    "bigint" !== typeof type) ||
	  instance.textContent === "" + type ||
	  true === props.suppressHydrationWarning ||
	  checkForUnmatchedText(instance.textContent, type)
	    ? (null != props.popover &&
	        (listenToNonDelegatedEvent("beforetoggle", instance),
	        listenToNonDelegatedEvent("toggle", instance)),
	      null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
	      null != props.onScrollEnd &&
	        listenToNonDelegatedEvent("scrollend", instance),
	      null != props.onClick && (instance.onclick = noop$1),
	      (instance = true))
	    : (instance = false);
	  instance || throwOnHydrationMismatch(fiber, true);
	}
	function popToNextHostParent(fiber) {
	  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
	    switch (hydrationParentFiber.tag) {
	      case 5:
	      case 31:
	      case 13:
	        rootOrSingletonContext = false;
	        return;
	      case 27:
	      case 3:
	        rootOrSingletonContext = true;
	        return;
	      default:
	        hydrationParentFiber = hydrationParentFiber.return;
	    }
	}
	function popHydrationState(fiber) {
	  if (fiber !== hydrationParentFiber) return false;
	  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = true), false;
	  var tag = fiber.tag,
	    JSCompiler_temp;
	  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
	    if ((JSCompiler_temp = 5 === tag))
	      (JSCompiler_temp = fiber.type),
	        (JSCompiler_temp =
	          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
	          shouldSetTextContent(fiber.type, fiber.memoizedProps));
	    JSCompiler_temp = !JSCompiler_temp;
	  }
	  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
	  popToNextHostParent(fiber);
	  if (13 === tag) {
	    fiber = fiber.memoizedState;
	    fiber = null !== fiber ? fiber.dehydrated : null;
	    if (!fiber) throw Error(formatProdErrorMessage(317));
	    nextHydratableInstance =
	      getNextHydratableInstanceAfterHydrationBoundary(fiber);
	  } else if (31 === tag) {
	    fiber = fiber.memoizedState;
	    fiber = null !== fiber ? fiber.dehydrated : null;
	    if (!fiber) throw Error(formatProdErrorMessage(317));
	    nextHydratableInstance =
	      getNextHydratableInstanceAfterHydrationBoundary(fiber);
	  } else
	    27 === tag
	      ? ((tag = nextHydratableInstance),
	        isSingletonScope(fiber.type)
	          ? ((fiber = previousHydratableOnEnteringScopedSingleton),
	            (previousHydratableOnEnteringScopedSingleton = null),
	            (nextHydratableInstance = fiber))
	          : (nextHydratableInstance = tag))
	      : (nextHydratableInstance = hydrationParentFiber
	          ? getNextHydratable(fiber.stateNode.nextSibling)
	          : null);
	  return true;
	}
	function resetHydrationState() {
	  nextHydratableInstance = hydrationParentFiber = null;
	  isHydrating = false;
	}
	function upgradeHydrationErrorsToRecoverable() {
	  var queuedErrors = hydrationErrors;
	  null !== queuedErrors &&
	    (null === workInProgressRootRecoverableErrors
	      ? (workInProgressRootRecoverableErrors = queuedErrors)
	      : workInProgressRootRecoverableErrors.push.apply(
	          workInProgressRootRecoverableErrors,
	          queuedErrors
	        ),
	    (hydrationErrors = null));
	  return queuedErrors;
	}
	function queueHydrationError(error) {
	  null === hydrationErrors
	    ? (hydrationErrors = [error])
	    : hydrationErrors.push(error);
	}
	var valueCursor = createCursor(null),
	  currentlyRenderingFiber$1 = null,
	  lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
	  push(valueCursor, context._currentValue);
	  context._currentValue = nextValue;
	}
	function popProvider(context) {
	  context._currentValue = valueCursor.current;
	  pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
	  for (; null !== parent; ) {
	    var alternate = parent.alternate;
	    (parent.childLanes & renderLanes) !== renderLanes
	      ? ((parent.childLanes |= renderLanes),
	        null !== alternate && (alternate.childLanes |= renderLanes))
	      : null !== alternate &&
	        (alternate.childLanes & renderLanes) !== renderLanes &&
	        (alternate.childLanes |= renderLanes);
	    if (parent === propagationRoot) break;
	    parent = parent.return;
	  }
	}
	function propagateContextChanges(
	  workInProgress,
	  contexts,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  var fiber = workInProgress.child;
	  null !== fiber && (fiber.return = workInProgress);
	  for (; null !== fiber; ) {
	    var list = fiber.dependencies;
	    if (null !== list) {
	      var nextFiber = fiber.child;
	      list = list.firstContext;
	      a: for (; null !== list; ) {
	        var dependency = list;
	        list = fiber;
	        for (var i = 0; i < contexts.length; i++)
	          if (dependency.context === contexts[i]) {
	            list.lanes |= renderLanes;
	            dependency = list.alternate;
	            null !== dependency && (dependency.lanes |= renderLanes);
	            scheduleContextWorkOnParentPath(
	              list.return,
	              renderLanes,
	              workInProgress
	            );
	            forcePropagateEntireTree || (nextFiber = null);
	            break a;
	          }
	        list = dependency.next;
	      }
	    } else if (18 === fiber.tag) {
	      nextFiber = fiber.return;
	      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
	      nextFiber.lanes |= renderLanes;
	      list = nextFiber.alternate;
	      null !== list && (list.lanes |= renderLanes);
	      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
	      nextFiber = null;
	    } else nextFiber = fiber.child;
	    if (null !== nextFiber) nextFiber.return = fiber;
	    else
	      for (nextFiber = fiber; null !== nextFiber; ) {
	        if (nextFiber === workInProgress) {
	          nextFiber = null;
	          break;
	        }
	        fiber = nextFiber.sibling;
	        if (null !== fiber) {
	          fiber.return = nextFiber.return;
	          nextFiber = fiber;
	          break;
	        }
	        nextFiber = nextFiber.return;
	      }
	    fiber = nextFiber;
	  }
	}
	function propagateParentContextChanges(
	  current,
	  workInProgress,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  current = null;
	  for (
	    var parent = workInProgress, isInsidePropagationBailout = false;
	    null !== parent;

	  ) {
	    if (!isInsidePropagationBailout)
	      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
	      else if (0 !== (parent.flags & 262144)) break;
	    if (10 === parent.tag) {
	      var currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent = currentParent.memoizedProps;
	      if (null !== currentParent) {
	        var context = parent.type;
	        objectIs(parent.pendingProps.value, currentParent.value) ||
	          (null !== current ? current.push(context) : (current = [context]));
	      }
	    } else if (parent === hostTransitionProviderCursor.current) {
	      currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent.memoizedState.memoizedState !==
	        parent.memoizedState.memoizedState &&
	        (null !== current
	          ? current.push(HostTransitionContext)
	          : (current = [HostTransitionContext]));
	    }
	    parent = parent.return;
	  }
	  null !== current &&
	    propagateContextChanges(
	      workInProgress,
	      current,
	      renderLanes,
	      forcePropagateEntireTree
	    );
	  workInProgress.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
	  for (
	    currentDependencies = currentDependencies.firstContext;
	    null !== currentDependencies;

	  ) {
	    if (
	      !objectIs(
	        currentDependencies.context._currentValue,
	        currentDependencies.memoizedValue
	      )
	    )
	      return true;
	    currentDependencies = currentDependencies.next;
	  }
	  return false;
	}
	function prepareToReadContext(workInProgress) {
	  currentlyRenderingFiber$1 = workInProgress;
	  lastContextDependency = null;
	  workInProgress = workInProgress.dependencies;
	  null !== workInProgress && (workInProgress.firstContext = null);
	}
	function readContext(context) {
	  return readContextForConsumer(currentlyRenderingFiber$1, context);
	}
	function readContextDuringReconciliation(consumer, context) {
	  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
	  return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
	  var value = context._currentValue;
	  context = { context: context, memoizedValue: value, next: null };
	  if (null === lastContextDependency) {
	    if (null === consumer) throw Error(formatProdErrorMessage(308));
	    lastContextDependency = context;
	    consumer.dependencies = { lanes: 0, firstContext: context };
	    consumer.flags |= 524288;
	  } else lastContextDependency = lastContextDependency.next = context;
	  return value;
	}
	var AbortControllerLocal =
	    "undefined" !== typeof AbortController
	      ? AbortController
	      : function () {
	          var listeners = [],
	            signal = (this.signal = {
	              aborted: false,
	              addEventListener: function (type, listener) {
	                listeners.push(listener);
	              }
	            });
	          this.abort = function () {
	            signal.aborted = true;
	            listeners.forEach(function (listener) {
	              return listener();
	            });
	          };
	        },
	  scheduleCallback$2 = Scheduler.unstable_scheduleCallback,
	  NormalPriority = Scheduler.unstable_NormalPriority,
	  CacheContext = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    Consumer: null,
	    Provider: null,
	    _currentValue: null,
	    _currentValue2: null,
	    _threadCount: 0
	  };
	function createCache() {
	  return {
	    controller: new AbortControllerLocal(),
	    data: new Map(),
	    refCount: 0
	  };
	}
	function releaseCache(cache) {
	  cache.refCount--;
	  0 === cache.refCount &&
	    scheduleCallback$2(NormalPriority, function () {
	      cache.controller.abort();
	    });
	}
	var currentEntangledListeners = null,
	  currentEntangledPendingCount = 0,
	  currentEntangledLane = 0,
	  currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
	  if (null === currentEntangledListeners) {
	    var entangledListeners = (currentEntangledListeners = []);
	    currentEntangledPendingCount = 0;
	    currentEntangledLane = requestTransitionLane();
	    currentEntangledActionThenable = {
	      status: "pending",
	      value: void 0,
	      then: function (resolve) {
	        entangledListeners.push(resolve);
	      }
	    };
	  }
	  currentEntangledPendingCount++;
	  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
	  return thenable;
	}
	function pingEngtangledActionScope() {
	  if (
	    0 === --currentEntangledPendingCount &&
	    null !== currentEntangledListeners
	  ) {
	    null !== currentEntangledActionThenable &&
	      (currentEntangledActionThenable.status = "fulfilled");
	    var listeners = currentEntangledListeners;
	    currentEntangledListeners = null;
	    currentEntangledLane = 0;
	    currentEntangledActionThenable = null;
	    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
	  }
	}
	function chainThenableValue(thenable, result) {
	  var listeners = [],
	    thenableWithOverride = {
	      status: "pending",
	      value: null,
	      reason: null,
	      then: function (resolve) {
	        listeners.push(resolve);
	      }
	    };
	  thenable.then(
	    function () {
	      thenableWithOverride.status = "fulfilled";
	      thenableWithOverride.value = result;
	      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
	    },
	    function (error) {
	      thenableWithOverride.status = "rejected";
	      thenableWithOverride.reason = error;
	      for (error = 0; error < listeners.length; error++)
	        (0, listeners[error])(void 0);
	    }
	  );
	  return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function (transition, returnValue) {
	  globalMostRecentTransitionTime = now();
	  "object" === typeof returnValue &&
	    null !== returnValue &&
	    "function" === typeof returnValue.then &&
	    entangleAsyncAction(transition, returnValue);
	  null !== prevOnStartTransitionFinish &&
	    prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
	  var cacheResumedFromPreviousRender = resumedCache.current;
	  return null !== cacheResumedFromPreviousRender
	    ? cacheResumedFromPreviousRender
	    : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
	  null === prevCachePool
	    ? push(resumedCache, resumedCache.current)
	    : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
	  var cacheFromPool = peekCacheFromPool();
	  return null === cacheFromPool
	    ? null
	    : { parent: CacheContext._currentValue, pool: cacheFromPool };
	}
	var SuspenseException = Error(formatProdErrorMessage(460)),
	  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
	  SuspenseActionException = Error(formatProdErrorMessage(542)),
	  noopSuspenseyCommitThenable = { then: function () {} };
	function isThenableResolved(thenable) {
	  thenable = thenable.status;
	  return "fulfilled" === thenable || "rejected" === thenable;
	}
	function trackUsedThenable(thenableState, thenable, index) {
	  index = thenableState[index];
	  void 0 === index
	    ? thenableState.push(thenable)
	    : index !== thenable && (thenable.then(noop$1, noop$1), (thenable = index));
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw (
	        ((thenableState = thenable.reason),
	        checkIfUseWrappedInAsyncCatch(thenableState),
	        thenableState)
	      );
	    default:
	      if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
	      else {
	        thenableState = workInProgressRoot;
	        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
	          throw Error(formatProdErrorMessage(482));
	        thenableState = thenable;
	        thenableState.status = "pending";
	        thenableState.then(
	          function (fulfilledValue) {
	            if ("pending" === thenable.status) {
	              var fulfilledThenable = thenable;
	              fulfilledThenable.status = "fulfilled";
	              fulfilledThenable.value = fulfilledValue;
	            }
	          },
	          function (error) {
	            if ("pending" === thenable.status) {
	              var rejectedThenable = thenable;
	              rejectedThenable.status = "rejected";
	              rejectedThenable.reason = error;
	            }
	          }
	        );
	      }
	      switch (thenable.status) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw (
	            ((thenableState = thenable.reason),
	            checkIfUseWrappedInAsyncCatch(thenableState),
	            thenableState)
	          );
	      }
	      suspendedThenable = thenable;
	      throw SuspenseException;
	  }
	}
	function resolveLazy(lazyType) {
	  try {
	    var init = lazyType._init;
	    return init(lazyType._payload);
	  } catch (x) {
	    if (null !== x && "object" === typeof x && "function" === typeof x.then)
	      throw ((suspendedThenable = x), SuspenseException);
	    throw x;
	  }
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
	  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
	  var thenable = suspendedThenable;
	  suspendedThenable = null;
	  return thenable;
	}
	function checkIfUseWrappedInAsyncCatch(rejectedReason) {
	  if (
	    rejectedReason === SuspenseException ||
	    rejectedReason === SuspenseActionException
	  )
	    throw Error(formatProdErrorMessage(483));
	}
	var thenableState$1 = null,
	  thenableIndexCounter$1 = 0;
	function unwrapThenable(thenable) {
	  var index = thenableIndexCounter$1;
	  thenableIndexCounter$1 += 1;
	  null === thenableState$1 && (thenableState$1 = []);
	  return trackUsedThenable(thenableState$1, thenable, index);
	}
	function coerceRef(workInProgress, element) {
	  element = element.props.ref;
	  workInProgress.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
	  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
	    throw Error(formatProdErrorMessage(525));
	  returnFiber = Object.prototype.toString.call(newChild);
	  throw Error(
	    formatProdErrorMessage(
	      31,
	      "[object Object]" === returnFiber
	        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
	        : returnFiber
	    )
	  );
	}
	function createChildReconciler(shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (shouldTrackSideEffects) {
	      var deletions = returnFiber.deletions;
	      null === deletions
	        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
	        : deletions.push(childToDelete);
	    }
	  }
	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) return null;
	    for (; null !== currentFirstChild; )
	      deleteChild(returnFiber, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return null;
	  }
	  function mapRemainingChildren(currentFirstChild) {
	    for (var existingChildren = new Map(); null !== currentFirstChild; )
	      null !== currentFirstChild.key
	        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
	        : existingChildren.set(currentFirstChild.index, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return existingChildren;
	  }
	  function useFiber(fiber, pendingProps) {
	    fiber = createWorkInProgress(fiber, pendingProps);
	    fiber.index = 0;
	    fiber.sibling = null;
	    return fiber;
	  }
	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects)
	      return (newFiber.flags |= 1048576), lastPlacedIndex;
	    newIndex = newFiber.alternate;
	    if (null !== newIndex)
	      return (
	        (newIndex = newIndex.index),
	        newIndex < lastPlacedIndex
	          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
	          : newIndex
	      );
	    newFiber.flags |= 67108866;
	    return lastPlacedIndex;
	  }
	  function placeSingleChild(newFiber) {
	    shouldTrackSideEffects &&
	      null === newFiber.alternate &&
	      (newFiber.flags |= 67108866);
	    return newFiber;
	  }
	  function updateTextNode(returnFiber, current, textContent, lanes) {
	    if (null === current || 6 !== current.tag)
	      return (
	        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, textContent);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateElement(returnFiber, current, element, lanes) {
	    var elementType = element.type;
	    if (elementType === REACT_FRAGMENT_TYPE)
	      return updateFragment(
	        returnFiber,
	        current,
	        element.props.children,
	        lanes,
	        element.key
	      );
	    if (
	      null !== current &&
	      (current.elementType === elementType ||
	        ("object" === typeof elementType &&
	          null !== elementType &&
	          elementType.$$typeof === REACT_LAZY_TYPE &&
	          resolveLazy(elementType) === current.type))
	    )
	      return (
	        (current = useFiber(current, element.props)),
	        coerceRef(current, element),
	        (current.return = returnFiber),
	        current
	      );
	    current = createFiberFromTypeAndProps(
	      element.type,
	      element.key,
	      element.props,
	      null,
	      returnFiber.mode,
	      lanes
	    );
	    coerceRef(current, element);
	    current.return = returnFiber;
	    return current;
	  }
	  function updatePortal(returnFiber, current, portal, lanes) {
	    if (
	      null === current ||
	      4 !== current.tag ||
	      current.stateNode.containerInfo !== portal.containerInfo ||
	      current.stateNode.implementation !== portal.implementation
	    )
	      return (
	        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, portal.children || []);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateFragment(returnFiber, current, fragment, lanes, key) {
	    if (null === current || 7 !== current.tag)
	      return (
	        (current = createFiberFromFragment(
	          fragment,
	          returnFiber.mode,
	          lanes,
	          key
	        )),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, fragment);
	    current.return = returnFiber;
	    return current;
	  }
	  function createChild(returnFiber, newChild, lanes) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (newChild = createFiberFromText(
	          "" + newChild,
	          returnFiber.mode,
	          lanes
	        )),
	        (newChild.return = returnFiber),
	        newChild
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (lanes = createFiberFromTypeAndProps(
	              newChild.type,
	              newChild.key,
	              newChild.props,
	              null,
	              returnFiber.mode,
	              lanes
	            )),
	            coerceRef(lanes, newChild),
	            (lanes.return = returnFiber),
	            lanes
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (newChild = createFiberFromPortal(
	              newChild,
	              returnFiber.mode,
	              lanes
	            )),
	            (newChild.return = returnFiber),
	            newChild
	          );
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            createChild(returnFiber, newChild, lanes)
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (newChild = createFiberFromFragment(
	            newChild,
	            returnFiber.mode,
	            lanes,
	            null
	          )),
	          (newChild.return = returnFiber),
	          newChild
	        );
	      if ("function" === typeof newChild.then)
	        return createChild(returnFiber, unwrapThenable(newChild), lanes);
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return createChild(
	          returnFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
	    var key = null !== oldFiber ? oldFiber.key : null;
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return null !== key
	        ? null
	        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return newChild.key === key
	            ? updateElement(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_PORTAL_TYPE:
	          return newChild.key === key
	            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            updateSlot(returnFiber, oldFiber, newChild, lanes)
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return null !== key
	          ? null
	          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
	      if ("function" === typeof newChild.then)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateFromMap(
	    existingChildren,
	    returnFiber,
	    newIdx,
	    newChild,
	    lanes
	  ) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (existingChildren = existingChildren.get(newIdx) || null),
	        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updateElement(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updatePortal(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            updateFromMap(
	              existingChildren,
	              returnFiber,
	              newIdx,
	              newChild,
	              lanes
	            )
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (existingChildren = existingChildren.get(newIdx) || null),
	          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
	        );
	      if ("function" === typeof newChild.then)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return null;
	  }
	  function reconcileChildrenArray(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null;
	      null !== oldFiber && newIdx < newChildren.length;
	      newIdx++
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(
	        returnFiber,
	        oldFiber,
	        newChildren[newIdx],
	        lanes
	      );
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (newIdx === newChildren.length)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; newIdx < newChildren.length; newIdx++)
	        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
	          null !== oldFiber &&
	            ((currentFirstChild = placeChild(
	              oldFiber,
	              currentFirstChild,
	              newIdx
	            )),
	            null === previousNewFiber
	              ? (resultingFirstChild = oldFiber)
	              : (previousNewFiber.sibling = oldFiber),
	            (previousNewFiber = oldFiber));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      newIdx < newChildren.length;
	      newIdx++
	    )
	      (nextOldFiber = updateFromMap(
	        oldFiber,
	        returnFiber,
	        newIdx,
	        newChildren[newIdx],
	        lanes
	      )),
	        null !== nextOldFiber &&
	          (shouldTrackSideEffects &&
	            null !== nextOldFiber.alternate &&
	            oldFiber.delete(
	              null === nextOldFiber.key ? newIdx : nextOldFiber.key
	            ),
	          (currentFirstChild = placeChild(
	            nextOldFiber,
	            currentFirstChild,
	            newIdx
	          )),
	          null === previousNewFiber
	            ? (resultingFirstChild = nextOldFiber)
	            : (previousNewFiber.sibling = nextOldFiber),
	          (previousNewFiber = nextOldFiber));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildrenIterator(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    if (null == newChildren) throw Error(formatProdErrorMessage(151));
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null,
	        step = newChildren.next();
	      null !== oldFiber && !step.done;
	      newIdx++, step = newChildren.next()
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (step.done)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; !step.done; newIdx++, step = newChildren.next())
	        (step = createChild(returnFiber, step.value, lanes)),
	          null !== step &&
	            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	            null === previousNewFiber
	              ? (resultingFirstChild = step)
	              : (previousNewFiber.sibling = step),
	            (previousNewFiber = step));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      !step.done;
	      newIdx++, step = newChildren.next()
	    )
	      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
	        null !== step &&
	          (shouldTrackSideEffects &&
	            null !== step.alternate &&
	            oldFiber.delete(null === step.key ? newIdx : step.key),
	          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	          null === previousNewFiber
	            ? (resultingFirstChild = step)
	            : (previousNewFiber.sibling = step),
	          (previousNewFiber = step));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildFibersImpl(
	    returnFiber,
	    currentFirstChild,
	    newChild,
	    lanes
	  ) {
	    "object" === typeof newChild &&
	      null !== newChild &&
	      newChild.type === REACT_FRAGMENT_TYPE &&
	      null === newChild.key &&
	      (newChild = newChild.props.children);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          a: {
	            for (var key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key) {
	                key = newChild.type;
	                if (key === REACT_FRAGMENT_TYPE) {
	                  if (7 === currentFirstChild.tag) {
	                    deleteRemainingChildren(
	                      returnFiber,
	                      currentFirstChild.sibling
	                    );
	                    lanes = useFiber(
	                      currentFirstChild,
	                      newChild.props.children
	                    );
	                    lanes.return = returnFiber;
	                    returnFiber = lanes;
	                    break a;
	                  }
	                } else if (
	                  currentFirstChild.elementType === key ||
	                  ("object" === typeof key &&
	                    null !== key &&
	                    key.$$typeof === REACT_LAZY_TYPE &&
	                    resolveLazy(key) === currentFirstChild.type)
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.props);
	                  coerceRef(lanes, newChild);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                }
	                deleteRemainingChildren(returnFiber, currentFirstChild);
	                break;
	              } else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            newChild.type === REACT_FRAGMENT_TYPE
	              ? ((lanes = createFiberFromFragment(
	                  newChild.props.children,
	                  returnFiber.mode,
	                  lanes,
	                  newChild.key
	                )),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes))
	              : ((lanes = createFiberFromTypeAndProps(
	                  newChild.type,
	                  newChild.key,
	                  newChild.props,
	                  null,
	                  returnFiber.mode,
	                  lanes
	                )),
	                coerceRef(lanes, newChild),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes));
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_PORTAL_TYPE:
	          a: {
	            for (key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key)
	                if (
	                  4 === currentFirstChild.tag &&
	                  currentFirstChild.stateNode.containerInfo ===
	                    newChild.containerInfo &&
	                  currentFirstChild.stateNode.implementation ===
	                    newChild.implementation
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.children || []);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                } else {
	                  deleteRemainingChildren(returnFiber, currentFirstChild);
	                  break;
	                }
	              else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
	            lanes.return = returnFiber;
	            returnFiber = lanes;
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            reconcileChildFibersImpl(
	              returnFiber,
	              currentFirstChild,
	              newChild,
	              lanes
	            )
	          );
	      }
	      if (isArrayImpl(newChild))
	        return reconcileChildrenArray(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      if (getIteratorFn(newChild)) {
	        key = getIteratorFn(newChild);
	        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
	        newChild = key.call(newChild);
	        return reconcileChildrenIterator(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      }
	      if ("function" === typeof newChild.then)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	      ? ((newChild = "" + newChild),
	        null !== currentFirstChild && 6 === currentFirstChild.tag
	          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
	            (lanes = useFiber(currentFirstChild, newChild)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes))
	          : (deleteRemainingChildren(returnFiber, currentFirstChild),
	            (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes)),
	        placeSingleChild(returnFiber))
	      : deleteRemainingChildren(returnFiber, currentFirstChild);
	  }
	  return function (returnFiber, currentFirstChild, newChild, lanes) {
	    try {
	      thenableIndexCounter$1 = 0;
	      var firstChildFiber = reconcileChildFibersImpl(
	        returnFiber,
	        currentFirstChild,
	        newChild,
	        lanes
	      );
	      thenableState$1 = null;
	      return firstChildFiber;
	    } catch (x) {
	      if (x === SuspenseException || x === SuspenseActionException) throw x;
	      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
	      fiber.lanes = lanes;
	      fiber.return = returnFiber;
	      return fiber;
	    } finally {
	    }
	  };
	}
	var reconcileChildFibers = createChildReconciler(true),
	  mountChildFibers = createChildReconciler(false),
	  hasForceUpdate = false;
	function initializeUpdateQueue(fiber) {
	  fiber.updateQueue = {
	    baseState: fiber.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
	    callbacks: null
	  };
	}
	function cloneUpdateQueue(current, workInProgress) {
	  current = current.updateQueue;
	  workInProgress.updateQueue === current &&
	    (workInProgress.updateQueue = {
	      baseState: current.baseState,
	      firstBaseUpdate: current.firstBaseUpdate,
	      lastBaseUpdate: current.lastBaseUpdate,
	      shared: current.shared,
	      callbacks: null
	    });
	}
	function createUpdate(lane) {
	  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
	}
	function enqueueUpdate(fiber, update, lane) {
	  var updateQueue = fiber.updateQueue;
	  if (null === updateQueue) return null;
	  updateQueue = updateQueue.shared;
	  if (0 !== (executionContext & 2)) {
	    var pending = updateQueue.pending;
	    null === pending
	      ? (update.next = update)
	      : ((update.next = pending.next), (pending.next = update));
	    updateQueue.pending = update;
	    update = getRootForUpdatedFiber(fiber);
	    markUpdateLaneFromFiberToRoot(fiber, null, lane);
	    return update;
	  }
	  enqueueUpdate$1(fiber, updateQueue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root, fiber, lane) {
	  fiber = fiber.updateQueue;
	  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
	    var queueLanes = fiber.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    fiber.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
	  var queue = workInProgress.updateQueue,
	    current = workInProgress.alternate;
	  if (
	    null !== current &&
	    ((current = current.updateQueue), queue === current)
	  ) {
	    var newFirst = null,
	      newLast = null;
	    queue = queue.firstBaseUpdate;
	    if (null !== queue) {
	      do {
	        var clone = {
	          lane: queue.lane,
	          tag: queue.tag,
	          payload: queue.payload,
	          callback: null,
	          next: null
	        };
	        null === newLast
	          ? (newFirst = newLast = clone)
	          : (newLast = newLast.next = clone);
	        queue = queue.next;
	      } while (null !== queue);
	      null === newLast
	        ? (newFirst = newLast = capturedUpdate)
	        : (newLast = newLast.next = capturedUpdate);
	    } else newFirst = newLast = capturedUpdate;
	    queue = {
	      baseState: current.baseState,
	      firstBaseUpdate: newFirst,
	      lastBaseUpdate: newLast,
	      shared: current.shared,
	      callbacks: current.callbacks
	    };
	    workInProgress.updateQueue = queue;
	    return;
	  }
	  workInProgress = queue.lastBaseUpdate;
	  null === workInProgress
	    ? (queue.firstBaseUpdate = capturedUpdate)
	    : (workInProgress.next = capturedUpdate);
	  queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = false;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
	  if (didReadFromEntangledAsyncAction) {
	    var entangledActionThenable = currentEntangledActionThenable;
	    if (null !== entangledActionThenable) throw entangledActionThenable;
	  }
	}
	function processUpdateQueue(
	  workInProgress$jscomp$0,
	  props,
	  instance$jscomp$0,
	  renderLanes
	) {
	  didReadFromEntangledAsyncAction = false;
	  var queue = workInProgress$jscomp$0.updateQueue;
	  hasForceUpdate = false;
	  var firstBaseUpdate = queue.firstBaseUpdate,
	    lastBaseUpdate = queue.lastBaseUpdate,
	    pendingQueue = queue.shared.pending;
	  if (null !== pendingQueue) {
	    queue.shared.pending = null;
	    var lastPendingUpdate = pendingQueue,
	      firstPendingUpdate = lastPendingUpdate.next;
	    lastPendingUpdate.next = null;
	    null === lastBaseUpdate
	      ? (firstBaseUpdate = firstPendingUpdate)
	      : (lastBaseUpdate.next = firstPendingUpdate);
	    lastBaseUpdate = lastPendingUpdate;
	    var current = workInProgress$jscomp$0.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      (pendingQueue = current.lastBaseUpdate),
	      pendingQueue !== lastBaseUpdate &&
	        (null === pendingQueue
	          ? (current.firstBaseUpdate = firstPendingUpdate)
	          : (pendingQueue.next = firstPendingUpdate),
	        (current.lastBaseUpdate = lastPendingUpdate)));
	  }
	  if (null !== firstBaseUpdate) {
	    var newState = queue.baseState;
	    lastBaseUpdate = 0;
	    current = firstPendingUpdate = lastPendingUpdate = null;
	    pendingQueue = firstBaseUpdate;
	    do {
	      var updateLane = pendingQueue.lane & -536870913,
	        isHiddenUpdate = updateLane !== pendingQueue.lane;
	      if (
	        isHiddenUpdate
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        0 !== updateLane &&
	          updateLane === currentEntangledLane &&
	          (didReadFromEntangledAsyncAction = true);
	        null !== current &&
	          (current = current.next =
	            {
	              lane: 0,
	              tag: pendingQueue.tag,
	              payload: pendingQueue.payload,
	              callback: null,
	              next: null
	            });
	        a: {
	          var workInProgress = workInProgress$jscomp$0,
	            update = pendingQueue;
	          updateLane = props;
	          var instance = instance$jscomp$0;
	          switch (update.tag) {
	            case 1:
	              workInProgress = update.payload;
	              if ("function" === typeof workInProgress) {
	                newState = workInProgress.call(instance, newState, updateLane);
	                break a;
	              }
	              newState = workInProgress;
	              break a;
	            case 3:
	              workInProgress.flags = (workInProgress.flags & -65537) | 128;
	            case 0:
	              workInProgress = update.payload;
	              updateLane =
	                "function" === typeof workInProgress
	                  ? workInProgress.call(instance, newState, updateLane)
	                  : workInProgress;
	              if (null === updateLane || void 0 === updateLane) break a;
	              newState = assign({}, newState, updateLane);
	              break a;
	            case 2:
	              hasForceUpdate = true;
	          }
	        }
	        updateLane = pendingQueue.callback;
	        null !== updateLane &&
	          ((workInProgress$jscomp$0.flags |= 64),
	          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
	          (isHiddenUpdate = queue.callbacks),
	          null === isHiddenUpdate
	            ? (queue.callbacks = [updateLane])
	            : isHiddenUpdate.push(updateLane));
	      } else
	        (isHiddenUpdate = {
	          lane: updateLane,
	          tag: pendingQueue.tag,
	          payload: pendingQueue.payload,
	          callback: pendingQueue.callback,
	          next: null
	        }),
	          null === current
	            ? ((firstPendingUpdate = current = isHiddenUpdate),
	              (lastPendingUpdate = newState))
	            : (current = current.next = isHiddenUpdate),
	          (lastBaseUpdate |= updateLane);
	      pendingQueue = pendingQueue.next;
	      if (null === pendingQueue)
	        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
	          break;
	        else
	          (isHiddenUpdate = pendingQueue),
	            (pendingQueue = isHiddenUpdate.next),
	            (isHiddenUpdate.next = null),
	            (queue.lastBaseUpdate = isHiddenUpdate),
	            (queue.shared.pending = null);
	    } while (1);
	    null === current && (lastPendingUpdate = newState);
	    queue.baseState = lastPendingUpdate;
	    queue.firstBaseUpdate = firstPendingUpdate;
	    queue.lastBaseUpdate = current;
	    null === firstBaseUpdate && (queue.shared.lanes = 0);
	    workInProgressRootSkippedLanes |= lastBaseUpdate;
	    workInProgress$jscomp$0.lanes = lastBaseUpdate;
	    workInProgress$jscomp$0.memoizedState = newState;
	  }
	}
	function callCallback(callback, context) {
	  if ("function" !== typeof callback)
	    throw Error(formatProdErrorMessage(191, callback));
	  callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
	  var callbacks = updateQueue.callbacks;
	  if (null !== callbacks)
	    for (
	      updateQueue.callbacks = null, updateQueue = 0;
	      updateQueue < callbacks.length;
	      updateQueue++
	    )
	      callCallback(callbacks[updateQueue], context);
	}
	var currentTreeHiddenStackCursor = createCursor(null),
	  prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
	  fiber = entangledRenderLanes;
	  push(prevEntangledRenderLanesCursor, fiber);
	  push(currentTreeHiddenStackCursor, context);
	  entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
	  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
	  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
	  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
	  pop(currentTreeHiddenStackCursor);
	  pop(prevEntangledRenderLanesCursor);
	}
	var suspenseHandlerStackCursor = createCursor(null),
	  shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
	  var current = handler.alternate;
	  push(suspenseStackCursor, suspenseStackCursor.current & 1);
	  push(suspenseHandlerStackCursor, handler);
	  null === shellBoundary &&
	    (null === current || null !== currentTreeHiddenStackCursor.current
	      ? (shellBoundary = handler)
	      : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushDehydratedActivitySuspenseHandler(fiber) {
	  push(suspenseStackCursor, suspenseStackCursor.current);
	  push(suspenseHandlerStackCursor, fiber);
	  null === shellBoundary && (shellBoundary = fiber);
	}
	function pushOffscreenSuspenseHandler(fiber) {
	  22 === fiber.tag
	    ? (push(suspenseStackCursor, suspenseStackCursor.current),
	      push(suspenseHandlerStackCursor, fiber),
	      null === shellBoundary && (shellBoundary = fiber))
	    : reuseSuspenseHandlerOnStack();
	}
	function reuseSuspenseHandlerOnStack() {
	  push(suspenseStackCursor, suspenseStackCursor.current);
	  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
	  pop(suspenseHandlerStackCursor);
	  shellBoundary === fiber && (shellBoundary = null);
	  pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
	  for (var node = row; null !== node; ) {
	    if (13 === node.tag) {
	      var state = node.memoizedState;
	      if (
	        null !== state &&
	        ((state = state.dehydrated),
	        null === state ||
	          isSuspenseInstancePending(state) ||
	          isSuspenseInstanceFallback(state))
	      )
	        return node;
	    } else if (
	      19 === node.tag &&
	      ("forwards" === node.memoizedProps.revealOrder ||
	        "backwards" === node.memoizedProps.revealOrder ||
	        "unstable_legacy-backwards" === node.memoizedProps.revealOrder ||
	        "together" === node.memoizedProps.revealOrder)
	    ) {
	      if (0 !== (node.flags & 128)) return node;
	    } else if (null !== node.child) {
	      node.child.return = node;
	      node = node.child;
	      continue;
	    }
	    if (node === row) break;
	    for (; null === node.sibling; ) {
	      if (null === node.return || node.return === row) return null;
	      node = node.return;
	    }
	    node.sibling.return = node.return;
	    node = node.sibling;
	  }
	  return null;
	}
	var renderLanes = 0,
	  currentlyRenderingFiber = null,
	  currentHook = null,
	  workInProgressHook = null,
	  didScheduleRenderPhaseUpdate = false,
	  didScheduleRenderPhaseUpdateDuringThisPass = false,
	  shouldDoubleInvokeUserFnsInHooksDEV = false,
	  localIdCounter = 0,
	  thenableIndexCounter = 0,
	  thenableState = null,
	  globalClientIdCounter = 0;
	function throwInvalidHookError() {
	  throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (null === prevDeps) return false;
	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
	    if (!objectIs(nextDeps[i], prevDeps[i])) return false;
	  return true;
	}
	function renderWithHooks(
	  current,
	  workInProgress,
	  Component,
	  props,
	  secondArg,
	  nextRenderLanes
	) {
	  renderLanes = nextRenderLanes;
	  currentlyRenderingFiber = workInProgress;
	  workInProgress.memoizedState = null;
	  workInProgress.updateQueue = null;
	  workInProgress.lanes = 0;
	  ReactSharedInternals.H =
	    null === current || null === current.memoizedState
	      ? HooksDispatcherOnMount
	      : HooksDispatcherOnUpdate;
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  nextRenderLanes = Component(props, secondArg);
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  didScheduleRenderPhaseUpdateDuringThisPass &&
	    (nextRenderLanes = renderWithHooksAgain(
	      workInProgress,
	      Component,
	      props,
	      secondArg
	    ));
	  finishRenderingHooks(current);
	  return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdate = false;
	  thenableIndexCounter = 0;
	  thenableState = null;
	  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
	  null === current ||
	    didReceiveUpdate ||
	    ((current = current.dependencies),
	    null !== current &&
	      checkIfContextChanged(current) &&
	      (didReceiveUpdate = true));
	}
	function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
	  currentlyRenderingFiber = workInProgress;
	  var numberOfReRenders = 0;
	  do {
	    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
	    thenableIndexCounter = 0;
	    didScheduleRenderPhaseUpdateDuringThisPass = false;
	    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
	    numberOfReRenders += 1;
	    workInProgressHook = currentHook = null;
	    if (null != workInProgress.updateQueue) {
	      var children = workInProgress.updateQueue;
	      children.lastEffect = null;
	      children.events = null;
	      children.stores = null;
	      null != children.memoCache && (children.memoCache.index = 0);
	    }
	    ReactSharedInternals.H = HooksDispatcherOnRerender;
	    children = Component(props, secondArg);
	  } while (didScheduleRenderPhaseUpdateDuringThisPass);
	  return children;
	}
	function TransitionAwareHostComponent() {
	  var dispatcher = ReactSharedInternals.H,
	    maybeThenable = dispatcher.useState()[0];
	  maybeThenable =
	    "function" === typeof maybeThenable.then
	      ? useThenable(maybeThenable)
	      : maybeThenable;
	  dispatcher = dispatcher.useState()[0];
	  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
	    (currentlyRenderingFiber.flags |= 1024);
	  return maybeThenable;
	}
	function checkDidRenderIdHook() {
	  var didRenderIdHook = 0 !== localIdCounter;
	  localIdCounter = 0;
	  return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress, lanes) {
	  workInProgress.updateQueue = current.updateQueue;
	  workInProgress.flags &= -2053;
	  current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress) {
	  if (didScheduleRenderPhaseUpdate) {
	    for (
	      workInProgress = workInProgress.memoizedState;
	      null !== workInProgress;

	    ) {
	      var queue = workInProgress.queue;
	      null !== queue && (queue.pending = null);
	      workInProgress = workInProgress.next;
	    }
	    didScheduleRenderPhaseUpdate = false;
	  }
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdateDuringThisPass = false;
	  thenableIndexCounter = localIdCounter = 0;
	  thenableState = null;
	}
	function mountWorkInProgressHook() {
	  var hook = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === workInProgressHook
	    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
	    : (workInProgressHook = workInProgressHook.next = hook);
	  return workInProgressHook;
	}
	function updateWorkInProgressHook() {
	  if (null === currentHook) {
	    var nextCurrentHook = currentlyRenderingFiber.alternate;
	    nextCurrentHook =
	      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
	  } else nextCurrentHook = currentHook.next;
	  var nextWorkInProgressHook =
	    null === workInProgressHook
	      ? currentlyRenderingFiber.memoizedState
	      : workInProgressHook.next;
	  if (null !== nextWorkInProgressHook)
	    (workInProgressHook = nextWorkInProgressHook),
	      (currentHook = nextCurrentHook);
	  else {
	    if (null === nextCurrentHook) {
	      if (null === currentlyRenderingFiber.alternate)
	        throw Error(formatProdErrorMessage(467));
	      throw Error(formatProdErrorMessage(310));
	    }
	    currentHook = nextCurrentHook;
	    nextCurrentHook = {
	      memoizedState: currentHook.memoizedState,
	      baseState: currentHook.baseState,
	      baseQueue: currentHook.baseQueue,
	      queue: currentHook.queue,
	      next: null
	    };
	    null === workInProgressHook
	      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
	          nextCurrentHook)
	      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
	  }
	  return workInProgressHook;
	}
	function createFunctionComponentUpdateQueue() {
	  return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function useThenable(thenable) {
	  var index = thenableIndexCounter;
	  thenableIndexCounter += 1;
	  null === thenableState && (thenableState = []);
	  thenable = trackUsedThenable(thenableState, thenable, index);
	  index = currentlyRenderingFiber;
	  null ===
	    (null === workInProgressHook
	      ? index.memoizedState
	      : workInProgressHook.next) &&
	    ((index = index.alternate),
	    (ReactSharedInternals.H =
	      null === index || null === index.memoizedState
	        ? HooksDispatcherOnMount
	        : HooksDispatcherOnUpdate));
	  return thenable;
	}
	function use(usable) {
	  if (null !== usable && "object" === typeof usable) {
	    if ("function" === typeof usable.then) return useThenable(usable);
	    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
	  }
	  throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
	  var memoCache = null,
	    updateQueue = currentlyRenderingFiber.updateQueue;
	  null !== updateQueue && (memoCache = updateQueue.memoCache);
	  if (null == memoCache) {
	    var current = currentlyRenderingFiber.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      null !== current &&
	        ((current = current.memoCache),
	        null != current &&
	          (memoCache = {
	            data: current.data.map(function (array) {
	              return array.slice();
	            }),
	            index: 0
	          })));
	  }
	  null == memoCache && (memoCache = { data: [], index: 0 });
	  null === updateQueue &&
	    ((updateQueue = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = updateQueue));
	  updateQueue.memoCache = memoCache;
	  updateQueue = memoCache.data[memoCache.index];
	  if (void 0 === updateQueue)
	    for (
	      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
	      current < size;
	      current++
	    )
	      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
	  memoCache.index++;
	  return updateQueue;
	}
	function basicStateReducer(state, action) {
	  return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
	  var hook = updateWorkInProgressHook();
	  return updateReducerImpl(hook, currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
	  var queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var baseQueue = hook.baseQueue,
	    pendingQueue = queue.pending;
	  if (null !== pendingQueue) {
	    if (null !== baseQueue) {
	      var baseFirst = baseQueue.next;
	      baseQueue.next = pendingQueue.next;
	      pendingQueue.next = baseFirst;
	    }
	    current.baseQueue = baseQueue = pendingQueue;
	    queue.pending = null;
	  }
	  pendingQueue = hook.baseState;
	  if (null === baseQueue) hook.memoizedState = pendingQueue;
	  else {
	    current = baseQueue.next;
	    var newBaseQueueFirst = (baseFirst = null),
	      newBaseQueueLast = null,
	      update = current,
	      didReadFromEntangledAsyncAction$60 = false;
	    do {
	      var updateLane = update.lane & -536870913;
	      if (
	        updateLane !== update.lane
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        var revertLane = update.revertLane;
	        if (0 === revertLane)
	          null !== newBaseQueueLast &&
	            (newBaseQueueLast = newBaseQueueLast.next =
	              {
	                lane: 0,
	                revertLane: 0,
	                gesture: null,
	                action: update.action,
	                hasEagerState: update.hasEagerState,
	                eagerState: update.eagerState,
	                next: null
	              }),
	            updateLane === currentEntangledLane &&
	              (didReadFromEntangledAsyncAction$60 = true);
	        else if ((renderLanes & revertLane) === revertLane) {
	          update = update.next;
	          revertLane === currentEntangledLane &&
	            (didReadFromEntangledAsyncAction$60 = true);
	          continue;
	        } else
	          (updateLane = {
	            lane: 0,
	            revertLane: update.revertLane,
	            gesture: null,
	            action: update.action,
	            hasEagerState: update.hasEagerState,
	            eagerState: update.eagerState,
	            next: null
	          }),
	            null === newBaseQueueLast
	              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
	                (baseFirst = pendingQueue))
	              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
	            (currentlyRenderingFiber.lanes |= revertLane),
	            (workInProgressRootSkippedLanes |= revertLane);
	        updateLane = update.action;
	        shouldDoubleInvokeUserFnsInHooksDEV &&
	          reducer(pendingQueue, updateLane);
	        pendingQueue = update.hasEagerState
	          ? update.eagerState
	          : reducer(pendingQueue, updateLane);
	      } else
	        (revertLane = {
	          lane: updateLane,
	          revertLane: update.revertLane,
	          gesture: update.gesture,
	          action: update.action,
	          hasEagerState: update.hasEagerState,
	          eagerState: update.eagerState,
	          next: null
	        }),
	          null === newBaseQueueLast
	            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
	              (baseFirst = pendingQueue))
	            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
	          (currentlyRenderingFiber.lanes |= updateLane),
	          (workInProgressRootSkippedLanes |= updateLane);
	      update = update.next;
	    } while (null !== update && update !== current);
	    null === newBaseQueueLast
	      ? (baseFirst = pendingQueue)
	      : (newBaseQueueLast.next = newBaseQueueFirst);
	    if (
	      !objectIs(pendingQueue, hook.memoizedState) &&
	      ((didReceiveUpdate = true),
	      didReadFromEntangledAsyncAction$60 &&
	        ((reducer = currentEntangledActionThenable), null !== reducer))
	    )
	      throw reducer;
	    hook.memoizedState = pendingQueue;
	    hook.baseState = baseFirst;
	    hook.baseQueue = newBaseQueueLast;
	    queue.lastRenderedState = pendingQueue;
	  }
	  null === baseQueue && (queue.lanes = 0);
	  return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
	  var hook = updateWorkInProgressHook(),
	    queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var dispatch = queue.dispatch,
	    lastRenderPhaseUpdate = queue.pending,
	    newState = hook.memoizedState;
	  if (null !== lastRenderPhaseUpdate) {
	    queue.pending = null;
	    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
	    do (newState = reducer(newState, update.action)), (update = update.next);
	    while (update !== lastRenderPhaseUpdate);
	    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
	    hook.memoizedState = newState;
	    null === hook.baseQueue && (hook.baseState = newState);
	    queue.lastRenderedState = newState;
	  }
	  return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  var fiber = currentlyRenderingFiber,
	    hook = updateWorkInProgressHook(),
	    isHydrating$jscomp$0 = isHydrating;
	  if (isHydrating$jscomp$0) {
	    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
	    getServerSnapshot = getServerSnapshot();
	  } else getServerSnapshot = getSnapshot();
	  var snapshotChanged = !objectIs(
	    (currentHook || hook).memoizedState,
	    getServerSnapshot
	  );
	  snapshotChanged &&
	    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = true));
	  hook = hook.queue;
	  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
	    subscribe
	  ]);
	  if (
	    hook.getSnapshot !== getSnapshot ||
	    snapshotChanged ||
	    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
	  ) {
	    fiber.flags |= 2048;
	    pushSimpleEffect(
	      9,
	      { destroy: void 0 },
	      updateStoreInstance.bind(
	        null,
	        fiber,
	        hook,
	        getServerSnapshot,
	        getSnapshot
	      ),
	      null
	    );
	    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
	    isHydrating$jscomp$0 ||
	      0 !== (renderLanes & 127) ||
	      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	  }
	  return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
	  fiber.flags |= 16384;
	  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
	  getSnapshot = currentlyRenderingFiber.updateQueue;
	  null === getSnapshot
	    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
	      (currentlyRenderingFiber.updateQueue = getSnapshot),
	      (getSnapshot.stores = [fiber]))
	    : ((renderedSnapshot = getSnapshot.stores),
	      null === renderedSnapshot
	        ? (getSnapshot.stores = [fiber])
	        : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
	  inst.value = nextSnapshot;
	  inst.getSnapshot = getSnapshot;
	  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
	  return subscribe(function () {
	    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	  });
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function forceStoreRerender(fiber) {
	  var root = enqueueConcurrentRenderForLane(fiber, 2);
	  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
	}
	function mountStateImpl(initialState) {
	  var hook = mountWorkInProgressHook();
	  if ("function" === typeof initialState) {
	    var initialStateInitializer = initialState;
	    initialState = initialStateInitializer();
	    if (shouldDoubleInvokeUserFnsInHooksDEV) {
	      setIsStrictModeForDevtools(true);
	      try {
	        initialStateInitializer();
	      } finally {
	        setIsStrictModeForDevtools(false);
	      }
	    }
	  }
	  hook.memoizedState = hook.baseState = initialState;
	  hook.queue = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: basicStateReducer,
	    lastRenderedState: initialState
	  };
	  return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
	  hook.baseState = passthrough;
	  return updateReducerImpl(
	    hook,
	    currentHook,
	    "function" === typeof reducer ? reducer : basicStateReducer
	  );
	}
	function dispatchActionState(
	  fiber,
	  actionQueue,
	  setPendingState,
	  setState,
	  payload
	) {
	  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
	  fiber = actionQueue.action;
	  if (null !== fiber) {
	    var actionNode = {
	      payload: payload,
	      action: fiber,
	      next: null,
	      isTransition: true,
	      status: "pending",
	      value: null,
	      reason: null,
	      listeners: [],
	      then: function (listener) {
	        actionNode.listeners.push(listener);
	      }
	    };
	    null !== ReactSharedInternals.T
	      ? setPendingState(true)
	      : (actionNode.isTransition = false);
	    setState(actionNode);
	    setPendingState = actionQueue.pending;
	    null === setPendingState
	      ? ((actionNode.next = actionQueue.pending = actionNode),
	        runActionStateAction(actionQueue, actionNode))
	      : ((actionNode.next = setPendingState.next),
	        (actionQueue.pending = setPendingState.next = actionNode));
	  }
	}
	function runActionStateAction(actionQueue, node) {
	  var action = node.action,
	    payload = node.payload,
	    prevState = actionQueue.state;
	  if (node.isTransition) {
	    var prevTransition = ReactSharedInternals.T,
	      currentTransition = {};
	    ReactSharedInternals.T = currentTransition;
	    try {
	      var returnValue = action(prevState, payload),
	        onStartTransitionFinish = ReactSharedInternals.S;
	      null !== onStartTransitionFinish &&
	        onStartTransitionFinish(currentTransition, returnValue);
	      handleActionReturnValue(actionQueue, node, returnValue);
	    } catch (error) {
	      onActionError(actionQueue, node, error);
	    } finally {
	      null !== prevTransition &&
	        null !== currentTransition.types &&
	        (prevTransition.types = currentTransition.types),
	        (ReactSharedInternals.T = prevTransition);
	    }
	  } else
	    try {
	      (prevTransition = action(prevState, payload)),
	        handleActionReturnValue(actionQueue, node, prevTransition);
	    } catch (error$66) {
	      onActionError(actionQueue, node, error$66);
	    }
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
	  null !== returnValue &&
	  "object" === typeof returnValue &&
	  "function" === typeof returnValue.then
	    ? returnValue.then(
	        function (nextState) {
	          onActionSuccess(actionQueue, node, nextState);
	        },
	        function (error) {
	          return onActionError(actionQueue, node, error);
	        }
	      )
	    : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
	  actionNode.status = "fulfilled";
	  actionNode.value = nextState;
	  notifyActionListeners(actionNode);
	  actionQueue.state = nextState;
	  actionNode = actionQueue.pending;
	  null !== actionNode &&
	    ((nextState = actionNode.next),
	    nextState === actionNode
	      ? (actionQueue.pending = null)
	      : ((nextState = nextState.next),
	        (actionNode.next = nextState),
	        runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
	  var last = actionQueue.pending;
	  actionQueue.pending = null;
	  if (null !== last) {
	    last = last.next;
	    do
	      (actionNode.status = "rejected"),
	        (actionNode.reason = error),
	        notifyActionListeners(actionNode),
	        (actionNode = actionNode.next);
	    while (actionNode !== last);
	  }
	  actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
	  actionNode = actionNode.listeners;
	  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
	  return newState;
	}
	function mountActionState(action, initialStateProp) {
	  if (isHydrating) {
	    var ssrFormState = workInProgressRoot.formState;
	    if (null !== ssrFormState) {
	      a: {
	        var JSCompiler_inline_result = currentlyRenderingFiber;
	        if (isHydrating) {
	          if (nextHydratableInstance) {
	            b: {
	              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
	              for (
	                var inRootOrSingleton = rootOrSingletonContext;
	                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

	              ) {
	                if (!inRootOrSingleton) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
	                  JSCompiler_inline_result$jscomp$0.nextSibling
	                );
	                if (null === JSCompiler_inline_result$jscomp$0) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	              }
	              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
	              JSCompiler_inline_result$jscomp$0 =
	                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
	                  ? JSCompiler_inline_result$jscomp$0
	                  : null;
	            }
	            if (JSCompiler_inline_result$jscomp$0) {
	              nextHydratableInstance = getNextHydratable(
	                JSCompiler_inline_result$jscomp$0.nextSibling
	              );
	              JSCompiler_inline_result =
	                "F!" === JSCompiler_inline_result$jscomp$0.data;
	              break a;
	            }
	          }
	          throwOnHydrationMismatch(JSCompiler_inline_result);
	        }
	        JSCompiler_inline_result = false;
	      }
	      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
	    }
	  }
	  ssrFormState = mountWorkInProgressHook();
	  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
	  JSCompiler_inline_result = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: actionStateReducer,
	    lastRenderedState: initialStateProp
	  };
	  ssrFormState.queue = JSCompiler_inline_result;
	  ssrFormState = dispatchSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result
	  );
	  JSCompiler_inline_result.dispatch = ssrFormState;
	  JSCompiler_inline_result = mountStateImpl(false);
	  inRootOrSingleton = dispatchOptimisticSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    false,
	    JSCompiler_inline_result.queue
	  );
	  JSCompiler_inline_result = mountWorkInProgressHook();
	  JSCompiler_inline_result$jscomp$0 = {
	    state: initialStateProp,
	    dispatch: null,
	    action: action,
	    pending: null
	  };
	  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
	  ssrFormState = dispatchActionState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result$jscomp$0,
	    inRootOrSingleton,
	    ssrFormState
	  );
	  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
	  JSCompiler_inline_result.memoizedState = action;
	  return [initialStateProp, ssrFormState, false];
	}
	function updateActionState(action) {
	  var stateHook = updateWorkInProgressHook();
	  return updateActionStateImpl(stateHook, currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
	  currentStateHook = updateReducerImpl(
	    stateHook,
	    currentStateHook,
	    actionStateReducer
	  )[0];
	  stateHook = updateReducer(basicStateReducer)[0];
	  if (
	    "object" === typeof currentStateHook &&
	    null !== currentStateHook &&
	    "function" === typeof currentStateHook.then
	  )
	    try {
	      var state = useThenable(currentStateHook);
	    } catch (x) {
	      if (x === SuspenseException) throw SuspenseActionException;
	      throw x;
	    }
	  else state = currentStateHook;
	  currentStateHook = updateWorkInProgressHook();
	  var actionQueue = currentStateHook.queue,
	    dispatch = actionQueue.dispatch;
	  action !== currentStateHook.memoizedState &&
	    ((currentlyRenderingFiber.flags |= 2048),
	    pushSimpleEffect(
	      9,
	      { destroy: void 0 },
	      actionStateActionEffect.bind(null, actionQueue, action),
	      null
	    ));
	  return [state, dispatch, stateHook];
	}
	function actionStateActionEffect(actionQueue, action) {
	  actionQueue.action = action;
	}
	function rerenderActionState(action) {
	  var stateHook = updateWorkInProgressHook(),
	    currentStateHook = currentHook;
	  if (null !== currentStateHook)
	    return updateActionStateImpl(stateHook, currentStateHook, action);
	  updateWorkInProgressHook();
	  stateHook = stateHook.memoizedState;
	  currentStateHook = updateWorkInProgressHook();
	  var dispatch = currentStateHook.queue.dispatch;
	  currentStateHook.memoizedState = action;
	  return [stateHook, dispatch, false];
	}
	function pushSimpleEffect(tag, inst, create, deps) {
	  tag = { tag: tag, create: create, deps: deps, inst: inst, next: null };
	  inst = currentlyRenderingFiber.updateQueue;
	  null === inst &&
	    ((inst = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = inst));
	  create = inst.lastEffect;
	  null === create
	    ? (inst.lastEffect = tag.next = tag)
	    : ((deps = create.next),
	      (create.next = tag),
	      (tag.next = deps),
	      (inst.lastEffect = tag));
	  return tag;
	}
	function updateRef() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = mountWorkInProgressHook();
	  currentlyRenderingFiber.flags |= fiberFlags;
	  hook.memoizedState = pushSimpleEffect(
	    1 | hookFlags,
	    { destroy: void 0 },
	    create,
	    void 0 === deps ? null : deps
	  );
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var inst = hook.memoizedState.inst;
	  null !== currentHook &&
	  null !== deps &&
	  areHookInputsEqual(deps, currentHook.memoizedState.deps)
	    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
	    : ((currentlyRenderingFiber.flags |= fiberFlags),
	      (hook.memoizedState = pushSimpleEffect(
	        1 | hookFlags,
	        inst,
	        create,
	        deps
	      )));
	}
	function mountEffect(create, deps) {
	  mountEffectImpl(8390656, 8, create, deps);
	}
	function updateEffect(create, deps) {
	  updateEffectImpl(2048, 8, create, deps);
	}
	function useEffectEventImpl(payload) {
	  currentlyRenderingFiber.flags |= 4;
	  var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
	  if (null === componentUpdateQueue)
	    (componentUpdateQueue = createFunctionComponentUpdateQueue()),
	      (currentlyRenderingFiber.updateQueue = componentUpdateQueue),
	      (componentUpdateQueue.events = [payload]);
	  else {
	    var events = componentUpdateQueue.events;
	    null === events
	      ? (componentUpdateQueue.events = [payload])
	      : events.push(payload);
	  }
	}
	function updateEvent(callback) {
	  var ref = updateWorkInProgressHook().memoizedState;
	  useEffectEventImpl({ ref: ref, nextImpl: callback });
	  return function () {
	    if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
	    return ref.impl.apply(void 0, arguments);
	  };
	}
	function updateInsertionEffect(create, deps) {
	  return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
	  return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
	  if ("function" === typeof ref) {
	    create = create();
	    var refCleanup = ref(create);
	    return function () {
	      "function" === typeof refCleanup ? refCleanup() : ref(null);
	    };
	  }
	  if (null !== ref && void 0 !== ref)
	    return (
	      (create = create()),
	      (ref.current = create),
	      function () {
	        ref.current = null;
	      }
	    );
	}
	function updateImperativeHandle(ref, create, deps) {
	  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {}
	function updateCallback(callback, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  hook.memoizedState = [callback, deps];
	  return callback;
	}
	function updateMemo(nextCreate, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  prevState = nextCreate();
	  if (shouldDoubleInvokeUserFnsInHooksDEV) {
	    setIsStrictModeForDevtools(true);
	    try {
	      nextCreate();
	    } finally {
	      setIsStrictModeForDevtools(false);
	    }
	  }
	  hook.memoizedState = [prevState, deps];
	  return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
	  if (
	    void 0 === initialValue ||
	    (0 !== (renderLanes & 1073741824) &&
	      0 === (workInProgressRootRenderLanes & 261930))
	  )
	    return (hook.memoizedState = value);
	  hook.memoizedState = initialValue;
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
	  if (objectIs(value, prevValue)) return value;
	  if (null !== currentTreeHiddenStackCursor.current)
	    return (
	      (hook = mountDeferredValueImpl(hook, value, initialValue)),
	      objectIs(hook, prevValue) || (didReceiveUpdate = true),
	      hook
	    );
	  if (
	    0 === (renderLanes & 42) ||
	    (0 !== (renderLanes & 1073741824) &&
	      0 === (workInProgressRootRenderLanes & 261930))
	  )
	    return (didReceiveUpdate = true), (hook.memoizedState = value);
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  ReactDOMSharedInternals.p =
	    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  dispatchOptimisticSetState(fiber, false, queue, pendingState);
	  try {
	    var returnValue = callback(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    if (
	      null !== returnValue &&
	      "object" === typeof returnValue &&
	      "function" === typeof returnValue.then
	    ) {
	      var thenableForFinishedState = chainThenableValue(
	        returnValue,
	        finishedState
	      );
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        thenableForFinishedState,
	        requestUpdateLane(fiber)
	      );
	    } else
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        finishedState,
	        requestUpdateLane(fiber)
	      );
	  } catch (error) {
	    dispatchSetStateInternal(
	      fiber,
	      queue,
	      { then: function () {}, status: "rejected", reason: error },
	      requestUpdateLane()
	    );
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      null !== prevTransition &&
	        null !== currentTransition.types &&
	        (prevTransition.types = currentTransition.types),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function noop() {}
	function startHostTransition(formFiber, pendingState, action, formData) {
	  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
	  var queue = ensureFormComponentIsStateful(formFiber).queue;
	  startTransition(
	    formFiber,
	    queue,
	    pendingState,
	    sharedNotPendingObject,
	    null === action
	      ? noop
	      : function () {
	          requestFormReset$1(formFiber);
	          return action(formData);
	        }
	  );
	}
	function ensureFormComponentIsStateful(formFiber) {
	  var existingStateHook = formFiber.memoizedState;
	  if (null !== existingStateHook) return existingStateHook;
	  existingStateHook = {
	    memoizedState: sharedNotPendingObject,
	    baseState: sharedNotPendingObject,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: sharedNotPendingObject
	    },
	    next: null
	  };
	  var initialResetState = {};
	  existingStateHook.next = {
	    memoizedState: initialResetState,
	    baseState: initialResetState,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: initialResetState
	    },
	    next: null
	  };
	  formFiber.memoizedState = existingStateHook;
	  formFiber = formFiber.alternate;
	  null !== formFiber && (formFiber.memoizedState = existingStateHook);
	  return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
	  var stateHook = ensureFormComponentIsStateful(formFiber);
	  null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
	  dispatchSetStateInternal(
	    formFiber,
	    stateHook.next.queue,
	    {},
	    requestUpdateLane()
	  );
	}
	function useHostTransitionStatus() {
	  return readContext(HostTransitionContext);
	}
	function updateId() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
	  for (var provider = fiber.return; null !== provider; ) {
	    switch (provider.tag) {
	      case 24:
	      case 3:
	        var lane = requestUpdateLane();
	        fiber = createUpdate(lane);
	        var root$69 = enqueueUpdate(provider, fiber, lane);
	        null !== root$69 &&
	          (scheduleUpdateOnFiber(root$69, provider, lane),
	          entangleTransitions(root$69, provider, lane));
	        provider = { cache: createCache() };
	        fiber.payload = provider;
	        return;
	    }
	    provider = provider.return;
	  }
	}
	function dispatchReducerAction(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  action = {
	    lane: lane,
	    revertLane: 0,
	    gesture: null,
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  isRenderPhaseUpdate(fiber)
	    ? enqueueRenderPhaseUpdate(queue, action)
	    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
	      null !== action &&
	        (scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  dispatchSetStateInternal(fiber, queue, action, lane);
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
	  var update = {
	    lane: lane,
	    revertLane: 0,
	    gesture: null,
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
	  else {
	    var alternate = fiber.alternate;
	    if (
	      0 === fiber.lanes &&
	      (null === alternate || 0 === alternate.lanes) &&
	      ((alternate = queue.lastRenderedReducer), null !== alternate)
	    )
	      try {
	        var currentState = queue.lastRenderedState,
	          eagerState = alternate(currentState, action);
	        update.hasEagerState = !0;
	        update.eagerState = eagerState;
	        if (objectIs(eagerState, currentState))
	          return (
	            enqueueUpdate$1(fiber, queue, update, 0),
	            null === workInProgressRoot && finishQueueingConcurrentUpdates(),
	            !1
	          );
	      } catch (error) {
	      } finally {
	      }
	    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
	    if (null !== action)
	      return (
	        scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane),
	        true
	      );
	  }
	  return false;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
	  action = {
	    lane: 2,
	    revertLane: requestTransitionLane(),
	    gesture: null,
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) {
	    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
	  } else
	    (throwIfDuringRender = enqueueConcurrentHookUpdate(
	      fiber,
	      queue,
	      action,
	      2
	    )),
	      null !== throwIfDuringRender &&
	        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
	  var alternate = fiber.alternate;
	  return (
	    fiber === currentlyRenderingFiber ||
	    (null !== alternate && alternate === currentlyRenderingFiber)
	  );
	}
	function enqueueRenderPhaseUpdate(queue, update) {
	  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
	    true;
	  var pending = queue.pending;
	  null === pending
	    ? (update.next = update)
	    : ((update.next = pending.next), (pending.next = update));
	  queue.pending = update;
	}
	function entangleTransitionUpdate(root, queue, lane) {
	  if (0 !== (lane & 4194048)) {
	    var queueLanes = queue.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    queue.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	var ContextOnlyDispatcher = {
	  readContext: readContext,
	  use: use,
	  useCallback: throwInvalidHookError,
	  useContext: throwInvalidHookError,
	  useEffect: throwInvalidHookError,
	  useImperativeHandle: throwInvalidHookError,
	  useLayoutEffect: throwInvalidHookError,
	  useInsertionEffect: throwInvalidHookError,
	  useMemo: throwInvalidHookError,
	  useReducer: throwInvalidHookError,
	  useRef: throwInvalidHookError,
	  useState: throwInvalidHookError,
	  useDebugValue: throwInvalidHookError,
	  useDeferredValue: throwInvalidHookError,
	  useTransition: throwInvalidHookError,
	  useSyncExternalStore: throwInvalidHookError,
	  useId: throwInvalidHookError,
	  useHostTransitionStatus: throwInvalidHookError,
	  useFormState: throwInvalidHookError,
	  useActionState: throwInvalidHookError,
	  useOptimistic: throwInvalidHookError,
	  useMemoCache: throwInvalidHookError,
	  useCacheRefresh: throwInvalidHookError
	};
	ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
	var HooksDispatcherOnMount = {
	    readContext: readContext,
	    use: use,
	    useCallback: function (callback, deps) {
	      mountWorkInProgressHook().memoizedState = [
	        callback,
	        void 0 === deps ? null : deps
	      ];
	      return callback;
	    },
	    useContext: readContext,
	    useEffect: mountEffect,
	    useImperativeHandle: function (ref, create, deps) {
	      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	      mountEffectImpl(
	        4194308,
	        4,
	        imperativeHandleEffect.bind(null, create, ref),
	        deps
	      );
	    },
	    useLayoutEffect: function (create, deps) {
	      return mountEffectImpl(4194308, 4, create, deps);
	    },
	    useInsertionEffect: function (create, deps) {
	      mountEffectImpl(4, 2, create, deps);
	    },
	    useMemo: function (nextCreate, deps) {
	      var hook = mountWorkInProgressHook();
	      deps = void 0 === deps ? null : deps;
	      var nextValue = nextCreate();
	      if (shouldDoubleInvokeUserFnsInHooksDEV) {
	        setIsStrictModeForDevtools(true);
	        try {
	          nextCreate();
	        } finally {
	          setIsStrictModeForDevtools(false);
	        }
	      }
	      hook.memoizedState = [nextValue, deps];
	      return nextValue;
	    },
	    useReducer: function (reducer, initialArg, init) {
	      var hook = mountWorkInProgressHook();
	      if (void 0 !== init) {
	        var initialState = init(initialArg);
	        if (shouldDoubleInvokeUserFnsInHooksDEV) {
	          setIsStrictModeForDevtools(true);
	          try {
	            init(initialArg);
	          } finally {
	            setIsStrictModeForDevtools(false);
	          }
	        }
	      } else initialState = initialArg;
	      hook.memoizedState = hook.baseState = initialState;
	      reducer = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: reducer,
	        lastRenderedState: initialState
	      };
	      hook.queue = reducer;
	      reducer = reducer.dispatch = dispatchReducerAction.bind(
	        null,
	        currentlyRenderingFiber,
	        reducer
	      );
	      return [hook.memoizedState, reducer];
	    },
	    useRef: function (initialValue) {
	      var hook = mountWorkInProgressHook();
	      initialValue = { current: initialValue };
	      return (hook.memoizedState = initialValue);
	    },
	    useState: function (initialState) {
	      initialState = mountStateImpl(initialState);
	      var queue = initialState.queue,
	        dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
	      queue.dispatch = dispatch;
	      return [initialState.memoizedState, dispatch];
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = mountWorkInProgressHook();
	      return mountDeferredValueImpl(hook, value, initialValue);
	    },
	    useTransition: function () {
	      var stateHook = mountStateImpl(false);
	      stateHook = startTransition.bind(
	        null,
	        currentlyRenderingFiber,
	        stateHook.queue,
	        true,
	        false
	      );
	      mountWorkInProgressHook().memoizedState = stateHook;
	      return [false, stateHook];
	    },
	    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
	      var fiber = currentlyRenderingFiber,
	        hook = mountWorkInProgressHook();
	      if (isHydrating) {
	        if (void 0 === getServerSnapshot)
	          throw Error(formatProdErrorMessage(407));
	        getServerSnapshot = getServerSnapshot();
	      } else {
	        getServerSnapshot = getSnapshot();
	        if (null === workInProgressRoot)
	          throw Error(formatProdErrorMessage(349));
	        0 !== (workInProgressRootRenderLanes & 127) ||
	          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	      }
	      hook.memoizedState = getServerSnapshot;
	      var inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
	      hook.queue = inst;
	      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
	        subscribe
	      ]);
	      fiber.flags |= 2048;
	      pushSimpleEffect(
	        9,
	        { destroy: void 0 },
	        updateStoreInstance.bind(
	          null,
	          fiber,
	          inst,
	          getServerSnapshot,
	          getSnapshot
	        ),
	        null
	      );
	      return getServerSnapshot;
	    },
	    useId: function () {
	      var hook = mountWorkInProgressHook(),
	        identifierPrefix = workInProgressRoot.identifierPrefix;
	      if (isHydrating) {
	        var JSCompiler_inline_result = treeContextOverflow;
	        var idWithLeadingBit = treeContextId;
	        JSCompiler_inline_result =
	          (
	            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
	          ).toString(32) + JSCompiler_inline_result;
	        identifierPrefix =
	          "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
	        JSCompiler_inline_result = localIdCounter++;
	        0 < JSCompiler_inline_result &&
	          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
	        identifierPrefix += "_";
	      } else
	        (JSCompiler_inline_result = globalClientIdCounter++),
	          (identifierPrefix =
	            "_" +
	            identifierPrefix +
	            "r_" +
	            JSCompiler_inline_result.toString(32) +
	            "_");
	      return (hook.memoizedState = identifierPrefix);
	    },
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: mountActionState,
	    useActionState: mountActionState,
	    useOptimistic: function (passthrough) {
	      var hook = mountWorkInProgressHook();
	      hook.memoizedState = hook.baseState = passthrough;
	      var queue = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: null,
	        lastRenderedState: null
	      };
	      hook.queue = queue;
	      hook = dispatchOptimisticSetState.bind(
	        null,
	        currentlyRenderingFiber,
	        true,
	        queue
	      );
	      queue.dispatch = hook;
	      return [passthrough, hook];
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: function () {
	      return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
	        null,
	        currentlyRenderingFiber
	      ));
	    },
	    useEffectEvent: function (callback) {
	      var hook = mountWorkInProgressHook(),
	        ref = { impl: callback };
	      hook.memoizedState = ref;
	      return function () {
	        if (0 !== (executionContext & 2))
	          throw Error(formatProdErrorMessage(440));
	        return ref.impl.apply(void 0, arguments);
	      };
	    }
	  },
	  HooksDispatcherOnUpdate = {
	    readContext: readContext,
	    use: use,
	    useCallback: updateCallback,
	    useContext: readContext,
	    useEffect: updateEffect,
	    useImperativeHandle: updateImperativeHandle,
	    useInsertionEffect: updateInsertionEffect,
	    useLayoutEffect: updateLayoutEffect,
	    useMemo: updateMemo,
	    useReducer: updateReducer,
	    useRef: updateRef,
	    useState: function () {
	      return updateReducer(basicStateReducer);
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = updateWorkInProgressHook();
	      return updateDeferredValueImpl(
	        hook,
	        currentHook.memoizedState,
	        value,
	        initialValue
	      );
	    },
	    useTransition: function () {
	      var booleanOrThenable = updateReducer(basicStateReducer)[0],
	        start = updateWorkInProgressHook().memoizedState;
	      return [
	        "boolean" === typeof booleanOrThenable
	          ? booleanOrThenable
	          : useThenable(booleanOrThenable),
	        start
	      ];
	    },
	    useSyncExternalStore: updateSyncExternalStore,
	    useId: updateId,
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: updateActionState,
	    useActionState: updateActionState,
	    useOptimistic: function (passthrough, reducer) {
	      var hook = updateWorkInProgressHook();
	      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: updateRefresh
	  };
	HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
	var HooksDispatcherOnRerender = {
	  readContext: readContext,
	  use: use,
	  useCallback: updateCallback,
	  useContext: readContext,
	  useEffect: updateEffect,
	  useImperativeHandle: updateImperativeHandle,
	  useInsertionEffect: updateInsertionEffect,
	  useLayoutEffect: updateLayoutEffect,
	  useMemo: updateMemo,
	  useReducer: rerenderReducer,
	  useRef: updateRef,
	  useState: function () {
	    return rerenderReducer(basicStateReducer);
	  },
	  useDebugValue: mountDebugValue,
	  useDeferredValue: function (value, initialValue) {
	    var hook = updateWorkInProgressHook();
	    return null === currentHook
	      ? mountDeferredValueImpl(hook, value, initialValue)
	      : updateDeferredValueImpl(
	          hook,
	          currentHook.memoizedState,
	          value,
	          initialValue
	        );
	  },
	  useTransition: function () {
	    var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
	      start = updateWorkInProgressHook().memoizedState;
	    return [
	      "boolean" === typeof booleanOrThenable
	        ? booleanOrThenable
	        : useThenable(booleanOrThenable),
	      start
	    ];
	  },
	  useSyncExternalStore: updateSyncExternalStore,
	  useId: updateId,
	  useHostTransitionStatus: useHostTransitionStatus,
	  useFormState: rerenderActionState,
	  useActionState: rerenderActionState,
	  useOptimistic: function (passthrough, reducer) {
	    var hook = updateWorkInProgressHook();
	    if (null !== currentHook)
	      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	    hook.baseState = passthrough;
	    return [passthrough, hook.queue.dispatch];
	  },
	  useMemoCache: useMemoCache,
	  useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnRerender.useEffectEvent = updateEvent;
	function applyDerivedStateFromProps(
	  workInProgress,
	  ctor,
	  getDerivedStateFromProps,
	  nextProps
	) {
	  ctor = workInProgress.memoizedState;
	  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
	  getDerivedStateFromProps =
	    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
	      ? ctor
	      : assign({}, ctor, getDerivedStateFromProps);
	  workInProgress.memoizedState = getDerivedStateFromProps;
	  0 === workInProgress.lanes &&
	    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
	  enqueueSetState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueReplaceState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 1;
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueForceUpdate: function (inst, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 2;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    callback = enqueueUpdate(inst, update, lane);
	    null !== callback &&
	      (scheduleUpdateOnFiber(callback, inst, lane),
	      entangleTransitions(callback, inst, lane));
	  }
	};
	function checkShouldComponentUpdate(
	  workInProgress,
	  ctor,
	  oldProps,
	  newProps,
	  oldState,
	  newState,
	  nextContext
	) {
	  workInProgress = workInProgress.stateNode;
	  return "function" === typeof workInProgress.shouldComponentUpdate
	    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
	    : ctor.prototype && ctor.prototype.isPureReactComponent
	      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
	      : true;
	}
	function callComponentWillReceiveProps(
	  workInProgress,
	  instance,
	  newProps,
	  nextContext
	) {
	  workInProgress = instance.state;
	  "function" === typeof instance.componentWillReceiveProps &&
	    instance.componentWillReceiveProps(newProps, nextContext);
	  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
	    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
	  instance.state !== workInProgress &&
	    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
	  var newProps = baseProps;
	  if ("ref" in baseProps) {
	    newProps = {};
	    for (var propName in baseProps)
	      "ref" !== propName && (newProps[propName] = baseProps[propName]);
	  }
	  if ((Component = Component.defaultProps)) {
	    newProps === baseProps && (newProps = assign({}, newProps));
	    for (var propName$73 in Component)
	      void 0 === newProps[propName$73] &&
	        (newProps[propName$73] = Component[propName$73]);
	  }
	  return newProps;
	}
	function defaultOnUncaughtError(error) {
	  reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
	  console.error(error);
	}
	function defaultOnRecoverableError(error) {
	  reportGlobalError(error);
	}
	function logUncaughtError(root, errorInfo) {
	  try {
	    var onUncaughtError = root.onUncaughtError;
	    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
	  } catch (e$74) {
	    setTimeout(function () {
	      throw e$74;
	    });
	  }
	}
	function logCaughtError(root, boundary, errorInfo) {
	  try {
	    var onCaughtError = root.onCaughtError;
	    onCaughtError(errorInfo.value, {
	      componentStack: errorInfo.stack,
	      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
	    });
	  } catch (e$75) {
	    setTimeout(function () {
	      throw e$75;
	    });
	  }
	}
	function createRootErrorUpdate(root, errorInfo, lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  lane.payload = { element: null };
	  lane.callback = function () {
	    logUncaughtError(root, errorInfo);
	  };
	  return lane;
	}
	function createClassErrorUpdate(lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  return lane;
	}
	function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
	  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
	  if ("function" === typeof getDerivedStateFromError) {
	    var error = errorInfo.value;
	    update.payload = function () {
	      return getDerivedStateFromError(error);
	    };
	    update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	    };
	  }
	  var inst = fiber.stateNode;
	  null !== inst &&
	    "function" === typeof inst.componentDidCatch &&
	    (update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	      "function" !== typeof getDerivedStateFromError &&
	        (null === legacyErrorBoundariesThatAlreadyFailed
	          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
	          : legacyErrorBoundariesThatAlreadyFailed.add(this));
	      var stack = errorInfo.stack;
	      this.componentDidCatch(errorInfo.value, {
	        componentStack: null !== stack ? stack : ""
	      });
	    });
	}
	function throwException(
	  root,
	  returnFiber,
	  sourceFiber,
	  value,
	  rootRenderLanes
	) {
	  sourceFiber.flags |= 32768;
	  if (
	    null !== value &&
	    "object" === typeof value &&
	    "function" === typeof value.then
	  ) {
	    returnFiber = sourceFiber.alternate;
	    null !== returnFiber &&
	      propagateParentContextChanges(
	        returnFiber,
	        sourceFiber,
	        rootRenderLanes,
	        true
	      );
	    sourceFiber = suspenseHandlerStackCursor.current;
	    if (null !== sourceFiber) {
	      switch (sourceFiber.tag) {
	        case 31:
	        case 13:
	          return (
	            null === shellBoundary
	              ? renderDidSuspendDelayIfPossible()
	              : null === sourceFiber.alternate &&
	                0 === workInProgressRootExitStatus &&
	                (workInProgressRootExitStatus = 3),
	            (sourceFiber.flags &= -257),
	            (sourceFiber.flags |= 65536),
	            (sourceFiber.lanes = rootRenderLanes),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? (sourceFiber.updateQueue = new Set([value]))
	                  : returnFiber.add(value),
	                attachPingListener(root, value, rootRenderLanes)),
	            false
	          );
	        case 22:
	          return (
	            (sourceFiber.flags |= 65536),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? ((returnFiber = {
	                      transitions: null,
	                      markerInstances: null,
	                      retryQueue: new Set([value])
	                    }),
	                    (sourceFiber.updateQueue = returnFiber))
	                  : ((sourceFiber = returnFiber.retryQueue),
	                    null === sourceFiber
	                      ? (returnFiber.retryQueue = new Set([value]))
	                      : sourceFiber.add(value)),
	                attachPingListener(root, value, rootRenderLanes)),
	            false
	          );
	      }
	      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
	    }
	    attachPingListener(root, value, rootRenderLanes);
	    renderDidSuspendDelayIfPossible();
	    return false;
	  }
	  if (isHydrating)
	    return (
	      (returnFiber = suspenseHandlerStackCursor.current),
	      null !== returnFiber
	        ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256),
	          (returnFiber.flags |= 65536),
	          (returnFiber.lanes = rootRenderLanes),
	          value !== HydrationMismatchException &&
	            ((root = Error(formatProdErrorMessage(422), { cause: value })),
	            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
	        : (value !== HydrationMismatchException &&
	            ((returnFiber = Error(formatProdErrorMessage(423), {
	              cause: value
	            })),
	            queueHydrationError(
	              createCapturedValueAtFiber(returnFiber, sourceFiber)
	            )),
	          (root = root.current.alternate),
	          (root.flags |= 65536),
	          (rootRenderLanes &= -rootRenderLanes),
	          (root.lanes |= rootRenderLanes),
	          (value = createCapturedValueAtFiber(value, sourceFiber)),
	          (rootRenderLanes = createRootErrorUpdate(
	            root.stateNode,
	            value,
	            rootRenderLanes
	          )),
	          enqueueCapturedUpdate(root, rootRenderLanes),
	          4 !== workInProgressRootExitStatus &&
	            (workInProgressRootExitStatus = 2)),
	      false
	    );
	  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
	  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
	  null === workInProgressRootConcurrentErrors
	    ? (workInProgressRootConcurrentErrors = [wrapperError])
	    : workInProgressRootConcurrentErrors.push(wrapperError);
	  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
	  if (null === returnFiber) return true;
	  value = createCapturedValueAtFiber(value, sourceFiber);
	  sourceFiber = returnFiber;
	  do {
	    switch (sourceFiber.tag) {
	      case 3:
	        return (
	          (sourceFiber.flags |= 65536),
	          (root = rootRenderLanes & -rootRenderLanes),
	          (sourceFiber.lanes |= root),
	          (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
	          enqueueCapturedUpdate(sourceFiber, root),
	          false
	        );
	      case 1:
	        if (
	          ((returnFiber = sourceFiber.type),
	          (wrapperError = sourceFiber.stateNode),
	          0 === (sourceFiber.flags & 128) &&
	            ("function" === typeof returnFiber.getDerivedStateFromError ||
	              (null !== wrapperError &&
	                "function" === typeof wrapperError.componentDidCatch &&
	                (null === legacyErrorBoundariesThatAlreadyFailed ||
	                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
	        )
	          return (
	            (sourceFiber.flags |= 65536),
	            (rootRenderLanes &= -rootRenderLanes),
	            (sourceFiber.lanes |= rootRenderLanes),
	            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
	            initializeClassErrorUpdate(
	              rootRenderLanes,
	              root,
	              sourceFiber,
	              value
	            ),
	            enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
	            false
	          );
	    }
	    sourceFiber = sourceFiber.return;
	  } while (null !== sourceFiber);
	  return false;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461)),
	  didReceiveUpdate = false;
	function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
	  workInProgress.child =
	    null === current
	      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
	      : reconcileChildFibers(
	          workInProgress,
	          current.child,
	          nextChildren,
	          renderLanes
	        );
	}
	function updateForwardRef(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  Component = Component.render;
	  var ref = workInProgress.ref;
	  if ("ref" in nextProps) {
	    var propsWithoutRef = {};
	    for (var key in nextProps)
	      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
	  } else propsWithoutRef = nextProps;
	  prepareToReadContext(workInProgress);
	  nextProps = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    propsWithoutRef,
	    ref,
	    renderLanes
	  );
	  key = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && key && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null === current) {
	    var type = Component.type;
	    if (
	      "function" === typeof type &&
	      !shouldConstruct(type) &&
	      void 0 === type.defaultProps &&
	      null === Component.compare
	    )
	      return (
	        (workInProgress.tag = 15),
	        (workInProgress.type = type),
	        updateSimpleMemoComponent(
	          current,
	          workInProgress,
	          type,
	          nextProps,
	          renderLanes
	        )
	      );
	    current = createFiberFromTypeAndProps(
	      Component.type,
	      null,
	      nextProps,
	      workInProgress,
	      workInProgress.mode,
	      renderLanes
	    );
	    current.ref = workInProgress.ref;
	    current.return = workInProgress;
	    return (workInProgress.child = current);
	  }
	  type = current.child;
	  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
	    var prevProps = type.memoizedProps;
	    Component = Component.compare;
	    Component = null !== Component ? Component : shallowEqual;
	    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
	      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	  }
	  workInProgress.flags |= 1;
	  current = createWorkInProgress(type, nextProps);
	  current.ref = workInProgress.ref;
	  current.return = workInProgress;
	  return (workInProgress.child = current);
	}
	function updateSimpleMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null !== current) {
	    var prevProps = current.memoizedProps;
	    if (
	      shallowEqual(prevProps, nextProps) &&
	      current.ref === workInProgress.ref
	    )
	      if (
	        ((didReceiveUpdate = false),
	        (workInProgress.pendingProps = nextProps = prevProps),
	        checkScheduledUpdateOrContext(current, renderLanes))
	      )
	        0 !== (current.flags & 131072) && (didReceiveUpdate = true);
	      else
	        return (
	          (workInProgress.lanes = current.lanes),
	          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	        );
	  }
	  return updateFunctionComponent(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    renderLanes
	  );
	}
	function updateOffscreenComponent(
	  current,
	  workInProgress,
	  renderLanes,
	  nextProps
	) {
	  var nextChildren = nextProps.children,
	    prevState = null !== current ? current.memoizedState : null;
	  null === current &&
	    null === workInProgress.stateNode &&
	    (workInProgress.stateNode = {
	      _visibility: 1,
	      _pendingMarkers: null,
	      _retryCache: null,
	      _transitions: null
	    });
	  if ("hidden" === nextProps.mode) {
	    if (0 !== (workInProgress.flags & 128)) {
	      prevState =
	        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
	      if (null !== current) {
	        nextProps = workInProgress.child = current.child;
	        for (nextChildren = 0; null !== nextProps; )
	          (nextChildren =
	            nextChildren | nextProps.lanes | nextProps.childLanes),
	            (nextProps = nextProps.sibling);
	        nextProps = nextChildren & ~prevState;
	      } else (nextProps = 0), (workInProgress.child = null);
	      return deferHiddenOffscreenComponent(
	        current,
	        workInProgress,
	        prevState,
	        renderLanes,
	        nextProps
	      );
	    }
	    if (0 !== (renderLanes & 536870912))
	      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
	        null !== current &&
	          pushTransition(
	            workInProgress,
	            null !== prevState ? prevState.cachePool : null
	          ),
	        null !== prevState
	          ? pushHiddenContext(workInProgress, prevState)
	          : reuseHiddenContextOnStack(),
	        pushOffscreenSuspenseHandler(workInProgress);
	    else
	      return (
	        (nextProps = workInProgress.lanes = 536870912),
	        deferHiddenOffscreenComponent(
	          current,
	          workInProgress,
	          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
	          renderLanes,
	          nextProps
	        )
	      );
	  } else
	    null !== prevState
	      ? (pushTransition(workInProgress, prevState.cachePool),
	        pushHiddenContext(workInProgress, prevState),
	        reuseSuspenseHandlerOnStack(),
	        (workInProgress.memoizedState = null))
	      : (null !== current && pushTransition(workInProgress, null),
	        reuseHiddenContextOnStack(),
	        reuseSuspenseHandlerOnStack());
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	function bailoutOffscreenComponent(current, workInProgress) {
	  (null !== current && 22 === current.tag) ||
	    null !== workInProgress.stateNode ||
	    (workInProgress.stateNode = {
	      _visibility: 1,
	      _pendingMarkers: null,
	      _retryCache: null,
	      _transitions: null
	    });
	  return workInProgress.sibling;
	}
	function deferHiddenOffscreenComponent(
	  current,
	  workInProgress,
	  nextBaseLanes,
	  renderLanes,
	  remainingChildLanes
	) {
	  var JSCompiler_inline_result = peekCacheFromPool();
	  JSCompiler_inline_result =
	    null === JSCompiler_inline_result
	      ? null
	      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
	  workInProgress.memoizedState = {
	    baseLanes: nextBaseLanes,
	    cachePool: JSCompiler_inline_result
	  };
	  null !== current && pushTransition(workInProgress, null);
	  reuseHiddenContextOnStack();
	  pushOffscreenSuspenseHandler(workInProgress);
	  null !== current &&
	    propagateParentContextChanges(current, workInProgress, renderLanes, true);
	  workInProgress.childLanes = remainingChildLanes;
	  return null;
	}
	function mountActivityChildren(workInProgress, nextProps) {
	  nextProps = mountWorkInProgressOffscreenFiber(
	    { mode: nextProps.mode, children: nextProps.children },
	    workInProgress.mode
	  );
	  nextProps.ref = workInProgress.ref;
	  workInProgress.child = nextProps;
	  nextProps.return = workInProgress;
	  return nextProps;
	}
	function retryActivityComponentWithoutHydrating(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
	  current = mountActivityChildren(workInProgress, workInProgress.pendingProps);
	  current.flags |= 2;
	  popSuspenseHandler(workInProgress);
	  workInProgress.memoizedState = null;
	  return current;
	}
	function updateActivityComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    didSuspend = 0 !== (workInProgress.flags & 128);
	  workInProgress.flags &= -129;
	  if (null === current) {
	    if (isHydrating) {
	      if ("hidden" === nextProps.mode)
	        return (
	          (current = mountActivityChildren(workInProgress, nextProps)),
	          (workInProgress.lanes = 536870912),
	          bailoutOffscreenComponent(null, current)
	        );
	      pushDehydratedActivitySuspenseHandler(workInProgress);
	      (current = nextHydratableInstance)
	        ? ((current = canHydrateHydrationBoundary(
	            current,
	            rootOrSingletonContext
	          )),
	          (current = null !== current && "&" === current.data ? current : null),
	          null !== current &&
	            ((workInProgress.memoizedState = {
	              dehydrated: current,
	              treeContext:
	                null !== treeContextProvider
	                  ? { id: treeContextId, overflow: treeContextOverflow }
	                  : null,
	              retryLane: 536870912,
	              hydrationErrors: null
	            }),
	            (renderLanes = createFiberFromDehydratedFragment(current)),
	            (renderLanes.return = workInProgress),
	            (workInProgress.child = renderLanes),
	            (hydrationParentFiber = workInProgress),
	            (nextHydratableInstance = null)))
	        : (current = null);
	      if (null === current) throw throwOnHydrationMismatch(workInProgress);
	      workInProgress.lanes = 536870912;
	      return null;
	    }
	    return mountActivityChildren(workInProgress, nextProps);
	  }
	  var prevState = current.memoizedState;
	  if (null !== prevState) {
	    var dehydrated = prevState.dehydrated;
	    pushDehydratedActivitySuspenseHandler(workInProgress);
	    if (didSuspend)
	      if (workInProgress.flags & 256)
	        (workInProgress.flags &= -257),
	          (workInProgress = retryActivityComponentWithoutHydrating(
	            current,
	            workInProgress,
	            renderLanes
	          ));
	      else if (null !== workInProgress.memoizedState)
	        (workInProgress.child = current.child),
	          (workInProgress.flags |= 128),
	          (workInProgress = null);
	      else throw Error(formatProdErrorMessage(558));
	    else if (
	      (didReceiveUpdate ||
	        propagateParentContextChanges(current, workInProgress, renderLanes, false),
	      (didSuspend = 0 !== (renderLanes & current.childLanes)),
	      didReceiveUpdate || didSuspend)
	    ) {
	      nextProps = workInProgressRoot;
	      if (
	        null !== nextProps &&
	        ((dehydrated = getBumpedLaneForHydration(nextProps, renderLanes)),
	        0 !== dehydrated && dehydrated !== prevState.retryLane)
	      )
	        throw (
	          ((prevState.retryLane = dehydrated),
	          enqueueConcurrentRenderForLane(current, dehydrated),
	          scheduleUpdateOnFiber(nextProps, current, dehydrated),
	          SelectiveHydrationException)
	        );
	      renderDidSuspendDelayIfPossible();
	      workInProgress = retryActivityComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else
	      (current = prevState.treeContext),
	        (nextHydratableInstance = getNextHydratable(dehydrated.nextSibling)),
	        (hydrationParentFiber = workInProgress),
	        (isHydrating = true),
	        (hydrationErrors = null),
	        (rootOrSingletonContext = false),
	        null !== current &&
	          restoreSuspendedTreeContext(workInProgress, current),
	        (workInProgress = mountActivityChildren(workInProgress, nextProps)),
	        (workInProgress.flags |= 4096);
	    return workInProgress;
	  }
	  current = createWorkInProgress(current.child, {
	    mode: nextProps.mode,
	    children: nextProps.children
	  });
	  current.ref = workInProgress.ref;
	  workInProgress.child = current;
	  current.return = workInProgress;
	  return current;
	}
	function markRef(current, workInProgress) {
	  var ref = workInProgress.ref;
	  if (null === ref)
	    null !== current &&
	      null !== current.ref &&
	      (workInProgress.flags |= 4194816);
	  else {
	    if ("function" !== typeof ref && "object" !== typeof ref)
	      throw Error(formatProdErrorMessage(284));
	    if (null === current || current.ref !== ref)
	      workInProgress.flags |= 4194816;
	  }
	}
	function updateFunctionComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  Component = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    void 0,
	    renderLanes
	  );
	  nextProps = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, Component, renderLanes);
	  return workInProgress.child;
	}
	function replayFunctionComponent(
	  current,
	  workInProgress,
	  nextProps,
	  Component,
	  secondArg,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  workInProgress.updateQueue = null;
	  nextProps = renderWithHooksAgain(
	    workInProgress,
	    Component,
	    nextProps,
	    secondArg
	  );
	  finishRenderingHooks(current);
	  Component = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && Component && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateClassComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  if (null === workInProgress.stateNode) {
	    var context = emptyContextObject,
	      contextType = Component.contextType;
	    "object" === typeof contextType &&
	      null !== contextType &&
	      (context = readContext(contextType));
	    context = new Component(nextProps, context);
	    workInProgress.memoizedState =
	      null !== context.state && void 0 !== context.state ? context.state : null;
	    context.updater = classComponentUpdater;
	    workInProgress.stateNode = context;
	    context._reactInternals = workInProgress;
	    context = workInProgress.stateNode;
	    context.props = nextProps;
	    context.state = workInProgress.memoizedState;
	    context.refs = {};
	    initializeUpdateQueue(workInProgress);
	    contextType = Component.contextType;
	    context.context =
	      "object" === typeof contextType && null !== contextType
	        ? readContext(contextType)
	        : emptyContextObject;
	    context.state = workInProgress.memoizedState;
	    contextType = Component.getDerivedStateFromProps;
	    "function" === typeof contextType &&
	      (applyDerivedStateFromProps(
	        workInProgress,
	        Component,
	        contextType,
	        nextProps
	      ),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof Component.getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate ||
	      ("function" !== typeof context.UNSAFE_componentWillMount &&
	        "function" !== typeof context.componentWillMount) ||
	      ((contextType = context.state),
	      "function" === typeof context.componentWillMount &&
	        context.componentWillMount(),
	      "function" === typeof context.UNSAFE_componentWillMount &&
	        context.UNSAFE_componentWillMount(),
	      contextType !== context.state &&
	        classComponentUpdater.enqueueReplaceState(context, context.state, null),
	      processUpdateQueue(workInProgress, nextProps, context, renderLanes),
	      suspendIfUpdateReadFromEntangledAsyncAction(),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof context.componentDidMount &&
	      (workInProgress.flags |= 4194308);
	    nextProps = true;
	  } else if (null === current) {
	    context = workInProgress.stateNode;
	    var unresolvedOldProps = workInProgress.memoizedProps,
	      oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
	    context.props = oldProps;
	    var oldContext = context.context,
	      contextType$jscomp$0 = Component.contextType;
	    contextType = emptyContextObject;
	    "object" === typeof contextType$jscomp$0 &&
	      null !== contextType$jscomp$0 &&
	      (contextType = readContext(contextType$jscomp$0));
	    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
	    contextType$jscomp$0 =
	      "function" === typeof getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate;
	    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
	    contextType$jscomp$0 ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((unresolvedOldProps || oldContext !== contextType) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          contextType
	        ));
	    hasForceUpdate = false;
	    var oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    oldContext = workInProgress.memoizedState;
	    unresolvedOldProps || oldState !== oldContext || hasForceUpdate
	      ? ("function" === typeof getDerivedStateFromProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            getDerivedStateFromProps,
	            nextProps
	          ),
	          (oldContext = workInProgress.memoizedState)),
	        (oldProps =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            oldProps,
	            nextProps,
	            oldState,
	            oldContext,
	            contextType
	          ))
	          ? (contextType$jscomp$0 ||
	              ("function" !== typeof context.UNSAFE_componentWillMount &&
	                "function" !== typeof context.componentWillMount) ||
	              ("function" === typeof context.componentWillMount &&
	                context.componentWillMount(),
	              "function" === typeof context.UNSAFE_componentWillMount &&
	                context.UNSAFE_componentWillMount()),
	            "function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308))
	          : ("function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = oldContext)),
	        (context.props = nextProps),
	        (context.state = oldContext),
	        (context.context = contextType),
	        (nextProps = oldProps))
	      : ("function" === typeof context.componentDidMount &&
	          (workInProgress.flags |= 4194308),
	        (nextProps = false));
	  } else {
	    context = workInProgress.stateNode;
	    cloneUpdateQueue(current, workInProgress);
	    contextType = workInProgress.memoizedProps;
	    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
	    context.props = contextType$jscomp$0;
	    getDerivedStateFromProps = workInProgress.pendingProps;
	    oldState = context.context;
	    oldContext = Component.contextType;
	    oldProps = emptyContextObject;
	    "object" === typeof oldContext &&
	      null !== oldContext &&
	      (oldProps = readContext(oldContext));
	    unresolvedOldProps = Component.getDerivedStateFromProps;
	    (oldContext =
	      "function" === typeof unresolvedOldProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate) ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((contextType !== getDerivedStateFromProps || oldState !== oldProps) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          oldProps
	        ));
	    hasForceUpdate = false;
	    oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    var newState = workInProgress.memoizedState;
	    contextType !== getDerivedStateFromProps ||
	    oldState !== newState ||
	    hasForceUpdate ||
	    (null !== current &&
	      null !== current.dependencies &&
	      checkIfContextChanged(current.dependencies))
	      ? ("function" === typeof unresolvedOldProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            unresolvedOldProps,
	            nextProps
	          ),
	          (newState = workInProgress.memoizedState)),
	        (contextType$jscomp$0 =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            contextType$jscomp$0,
	            nextProps,
	            oldState,
	            newState,
	            oldProps
	          ) ||
	          (null !== current &&
	            null !== current.dependencies &&
	            checkIfContextChanged(current.dependencies)))
	          ? (oldContext ||
	              ("function" !== typeof context.UNSAFE_componentWillUpdate &&
	                "function" !== typeof context.componentWillUpdate) ||
	              ("function" === typeof context.componentWillUpdate &&
	                context.componentWillUpdate(nextProps, newState, oldProps),
	              "function" === typeof context.UNSAFE_componentWillUpdate &&
	                context.UNSAFE_componentWillUpdate(
	                  nextProps,
	                  newState,
	                  oldProps
	                )),
	            "function" === typeof context.componentDidUpdate &&
	              (workInProgress.flags |= 4),
	            "function" === typeof context.getSnapshotBeforeUpdate &&
	              (workInProgress.flags |= 1024))
	          : ("function" !== typeof context.componentDidUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 4),
	            "function" !== typeof context.getSnapshotBeforeUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 1024),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = newState)),
	        (context.props = nextProps),
	        (context.state = newState),
	        (context.context = oldProps),
	        (nextProps = contextType$jscomp$0))
	      : ("function" !== typeof context.componentDidUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 4),
	        "function" !== typeof context.getSnapshotBeforeUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 1024),
	        (nextProps = false));
	  }
	  context = nextProps;
	  markRef(current, workInProgress);
	  nextProps = 0 !== (workInProgress.flags & 128);
	  context || nextProps
	    ? ((context = workInProgress.stateNode),
	      (Component =
	        nextProps && "function" !== typeof Component.getDerivedStateFromError
	          ? null
	          : context.render()),
	      (workInProgress.flags |= 1),
	      null !== current && nextProps
	        ? ((workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            current.child,
	            null,
	            renderLanes
	          )),
	          (workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            null,
	            Component,
	            renderLanes
	          )))
	        : reconcileChildren(current, workInProgress, Component, renderLanes),
	      (workInProgress.memoizedState = context.state),
	      (current = workInProgress.child))
	    : (current = bailoutOnAlreadyFinishedWork(
	        current,
	        workInProgress,
	        renderLanes
	      ));
	  return current;
	}
	function mountHostRootWithoutHydrating(
	  current,
	  workInProgress,
	  nextChildren,
	  renderLanes
	) {
	  resetHydrationState();
	  workInProgress.flags |= 256;
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	var SUSPENDED_MARKER = {
	  dehydrated: null,
	  treeContext: null,
	  retryLane: 0,
	  hydrationErrors: null
	};
	function mountSuspenseOffscreenState(renderLanes) {
	  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
	}
	function getRemainingWorkInPrimaryTree(
	  current,
	  primaryTreeDidDefer,
	  renderLanes
	) {
	  current = null !== current ? current.childLanes & ~renderLanes : 0;
	  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
	  return current;
	}
	function updateSuspenseComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    showFallback = false,
	    didSuspend = 0 !== (workInProgress.flags & 128),
	    JSCompiler_temp;
	  (JSCompiler_temp = didSuspend) ||
	    (JSCompiler_temp =
	      null !== current && null === current.memoizedState
	        ? false
	        : 0 !== (suspenseStackCursor.current & 2));
	  JSCompiler_temp && ((showFallback = true), (workInProgress.flags &= -129));
	  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
	  workInProgress.flags &= -33;
	  if (null === current) {
	    if (isHydrating) {
	      showFallback
	        ? pushPrimaryTreeSuspenseHandler(workInProgress)
	        : reuseSuspenseHandlerOnStack();
	      (current = nextHydratableInstance)
	        ? ((current = canHydrateHydrationBoundary(
	            current,
	            rootOrSingletonContext
	          )),
	          (current = null !== current && "&" !== current.data ? current : null),
	          null !== current &&
	            ((workInProgress.memoizedState = {
	              dehydrated: current,
	              treeContext:
	                null !== treeContextProvider
	                  ? { id: treeContextId, overflow: treeContextOverflow }
	                  : null,
	              retryLane: 536870912,
	              hydrationErrors: null
	            }),
	            (renderLanes = createFiberFromDehydratedFragment(current)),
	            (renderLanes.return = workInProgress),
	            (workInProgress.child = renderLanes),
	            (hydrationParentFiber = workInProgress),
	            (nextHydratableInstance = null)))
	        : (current = null);
	      if (null === current) throw throwOnHydrationMismatch(workInProgress);
	      isSuspenseInstanceFallback(current)
	        ? (workInProgress.lanes = 32)
	        : (workInProgress.lanes = 536870912);
	      return null;
	    }
	    var nextPrimaryChildren = nextProps.children;
	    nextProps = nextProps.fallback;
	    if (showFallback)
	      return (
	        reuseSuspenseHandlerOnStack(),
	        (showFallback = workInProgress.mode),
	        (nextPrimaryChildren = mountWorkInProgressOffscreenFiber(
	          { mode: "hidden", children: nextPrimaryChildren },
	          showFallback
	        )),
	        (nextProps = createFiberFromFragment(
	          nextProps,
	          showFallback,
	          renderLanes,
	          null
	        )),
	        (nextPrimaryChildren.return = workInProgress),
	        (nextProps.return = workInProgress),
	        (nextPrimaryChildren.sibling = nextProps),
	        (workInProgress.child = nextPrimaryChildren),
	        (nextProps = workInProgress.child),
	        (nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes)),
	        (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	          current,
	          JSCompiler_temp,
	          renderLanes
	        )),
	        (workInProgress.memoizedState = SUSPENDED_MARKER),
	        bailoutOffscreenComponent(null, nextProps)
	      );
	    pushPrimaryTreeSuspenseHandler(workInProgress);
	    return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
	  }
	  var prevState = current.memoizedState;
	  if (
	    null !== prevState &&
	    ((nextPrimaryChildren = prevState.dehydrated), null !== nextPrimaryChildren)
	  ) {
	    if (didSuspend)
	      workInProgress.flags & 256
	        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
	          (workInProgress.flags &= -257),
	          (workInProgress = retrySuspenseComponentWithoutHydrating(
	            current,
	            workInProgress,
	            renderLanes
	          )))
	        : null !== workInProgress.memoizedState
	          ? (reuseSuspenseHandlerOnStack(),
	            (workInProgress.child = current.child),
	            (workInProgress.flags |= 128),
	            (workInProgress = null))
	          : (reuseSuspenseHandlerOnStack(),
	            (nextPrimaryChildren = nextProps.fallback),
	            (showFallback = workInProgress.mode),
	            (nextProps = mountWorkInProgressOffscreenFiber(
	              { mode: "visible", children: nextProps.children },
	              showFallback
	            )),
	            (nextPrimaryChildren = createFiberFromFragment(
	              nextPrimaryChildren,
	              showFallback,
	              renderLanes,
	              null
	            )),
	            (nextPrimaryChildren.flags |= 2),
	            (nextProps.return = workInProgress),
	            (nextPrimaryChildren.return = workInProgress),
	            (nextProps.sibling = nextPrimaryChildren),
	            (workInProgress.child = nextProps),
	            reconcileChildFibers(
	              workInProgress,
	              current.child,
	              null,
	              renderLanes
	            ),
	            (nextProps = workInProgress.child),
	            (nextProps.memoizedState =
	              mountSuspenseOffscreenState(renderLanes)),
	            (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	              current,
	              JSCompiler_temp,
	              renderLanes
	            )),
	            (workInProgress.memoizedState = SUSPENDED_MARKER),
	            (workInProgress = bailoutOffscreenComponent(null, nextProps)));
	    else if (
	      (pushPrimaryTreeSuspenseHandler(workInProgress),
	      isSuspenseInstanceFallback(nextPrimaryChildren))
	    ) {
	      JSCompiler_temp =
	        nextPrimaryChildren.nextSibling &&
	        nextPrimaryChildren.nextSibling.dataset;
	      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
	      JSCompiler_temp = digest;
	      nextProps = Error(formatProdErrorMessage(419));
	      nextProps.stack = "";
	      nextProps.digest = JSCompiler_temp;
	      queueHydrationError({ value: nextProps, source: null, stack: null });
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else if (
	      (didReceiveUpdate ||
	        propagateParentContextChanges(current, workInProgress, renderLanes, false),
	      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
	      didReceiveUpdate || JSCompiler_temp)
	    ) {
	      JSCompiler_temp = workInProgressRoot;
	      if (
	        null !== JSCompiler_temp &&
	        ((nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes)),
	        0 !== nextProps && nextProps !== prevState.retryLane)
	      )
	        throw (
	          ((prevState.retryLane = nextProps),
	          enqueueConcurrentRenderForLane(current, nextProps),
	          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
	          SelectiveHydrationException)
	        );
	      isSuspenseInstancePending(nextPrimaryChildren) ||
	        renderDidSuspendDelayIfPossible();
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else
	      isSuspenseInstancePending(nextPrimaryChildren)
	        ? ((workInProgress.flags |= 192),
	          (workInProgress.child = current.child),
	          (workInProgress = null))
	        : ((current = prevState.treeContext),
	          (nextHydratableInstance = getNextHydratable(
	            nextPrimaryChildren.nextSibling
	          )),
	          (hydrationParentFiber = workInProgress),
	          (isHydrating = true),
	          (hydrationErrors = null),
	          (rootOrSingletonContext = false),
	          null !== current &&
	            restoreSuspendedTreeContext(workInProgress, current),
	          (workInProgress = mountSuspensePrimaryChildren(
	            workInProgress,
	            nextProps.children
	          )),
	          (workInProgress.flags |= 4096));
	    return workInProgress;
	  }
	  if (showFallback)
	    return (
	      reuseSuspenseHandlerOnStack(),
	      (nextPrimaryChildren = nextProps.fallback),
	      (showFallback = workInProgress.mode),
	      (prevState = current.child),
	      (digest = prevState.sibling),
	      (nextProps = createWorkInProgress(prevState, {
	        mode: "hidden",
	        children: nextProps.children
	      })),
	      (nextProps.subtreeFlags = prevState.subtreeFlags & 65011712),
	      null !== digest
	        ? (nextPrimaryChildren = createWorkInProgress(
	            digest,
	            nextPrimaryChildren
	          ))
	        : ((nextPrimaryChildren = createFiberFromFragment(
	            nextPrimaryChildren,
	            showFallback,
	            renderLanes,
	            null
	          )),
	          (nextPrimaryChildren.flags |= 2)),
	      (nextPrimaryChildren.return = workInProgress),
	      (nextProps.return = workInProgress),
	      (nextProps.sibling = nextPrimaryChildren),
	      (workInProgress.child = nextProps),
	      bailoutOffscreenComponent(null, nextProps),
	      (nextProps = workInProgress.child),
	      (nextPrimaryChildren = current.child.memoizedState),
	      null === nextPrimaryChildren
	        ? (nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes))
	        : ((showFallback = nextPrimaryChildren.cachePool),
	          null !== showFallback
	            ? ((prevState = CacheContext._currentValue),
	              (showFallback =
	                showFallback.parent !== prevState
	                  ? { parent: prevState, pool: prevState }
	                  : showFallback))
	            : (showFallback = getSuspendedCache()),
	          (nextPrimaryChildren = {
	            baseLanes: nextPrimaryChildren.baseLanes | renderLanes,
	            cachePool: showFallback
	          })),
	      (nextProps.memoizedState = nextPrimaryChildren),
	      (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	        current,
	        JSCompiler_temp,
	        renderLanes
	      )),
	      (workInProgress.memoizedState = SUSPENDED_MARKER),
	      bailoutOffscreenComponent(current.child, nextProps)
	    );
	  pushPrimaryTreeSuspenseHandler(workInProgress);
	  renderLanes = current.child;
	  current = renderLanes.sibling;
	  renderLanes = createWorkInProgress(renderLanes, {
	    mode: "visible",
	    children: nextProps.children
	  });
	  renderLanes.return = workInProgress;
	  renderLanes.sibling = null;
	  null !== current &&
	    ((JSCompiler_temp = workInProgress.deletions),
	    null === JSCompiler_temp
	      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
	      : JSCompiler_temp.push(current));
	  workInProgress.child = renderLanes;
	  workInProgress.memoizedState = null;
	  return renderLanes;
	}
	function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
	  primaryChildren = mountWorkInProgressOffscreenFiber(
	    { mode: "visible", children: primaryChildren },
	    workInProgress.mode
	  );
	  primaryChildren.return = workInProgress;
	  return (workInProgress.child = primaryChildren);
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
	  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
	  offscreenProps.lanes = 0;
	  return offscreenProps;
	}
	function retrySuspenseComponentWithoutHydrating(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
	  current = mountSuspensePrimaryChildren(
	    workInProgress,
	    workInProgress.pendingProps.children
	  );
	  current.flags |= 2;
	  workInProgress.memoizedState = null;
	  return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
	  fiber.lanes |= renderLanes;
	  var alternate = fiber.alternate;
	  null !== alternate && (alternate.lanes |= renderLanes);
	  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
	}
	function initSuspenseListRenderState(
	  workInProgress,
	  isBackwards,
	  tail,
	  lastContentRow,
	  tailMode,
	  treeForkCount
	) {
	  var renderState = workInProgress.memoizedState;
	  null === renderState
	    ? (workInProgress.memoizedState = {
	        isBackwards: isBackwards,
	        rendering: null,
	        renderingStartTime: 0,
	        last: lastContentRow,
	        tail: tail,
	        tailMode: tailMode,
	        treeForkCount: treeForkCount
	      })
	    : ((renderState.isBackwards = isBackwards),
	      (renderState.rendering = null),
	      (renderState.renderingStartTime = 0),
	      (renderState.last = lastContentRow),
	      (renderState.tail = tail),
	      (renderState.tailMode = tailMode),
	      (renderState.treeForkCount = treeForkCount));
	}
	function updateSuspenseListComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    revealOrder = nextProps.revealOrder,
	    tailMode = nextProps.tail;
	  nextProps = nextProps.children;
	  var suspenseContext = suspenseStackCursor.current,
	    shouldForceFallback = 0 !== (suspenseContext & 2);
	  shouldForceFallback
	    ? ((suspenseContext = (suspenseContext & 1) | 2),
	      (workInProgress.flags |= 128))
	    : (suspenseContext &= 1);
	  push(suspenseStackCursor, suspenseContext);
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  nextProps = isHydrating ? treeForkCount : 0;
	  if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
	    a: for (current = workInProgress.child; null !== current; ) {
	      if (13 === current.tag)
	        null !== current.memoizedState &&
	          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	      else if (19 === current.tag)
	        scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	      else if (null !== current.child) {
	        current.child.return = current;
	        current = current.child;
	        continue;
	      }
	      if (current === workInProgress) break a;
	      for (; null === current.sibling; ) {
	        if (null === current.return || current.return === workInProgress)
	          break a;
	        current = current.return;
	      }
	      current.sibling.return = current.return;
	      current = current.sibling;
	    }
	  switch (revealOrder) {
	    case "forwards":
	      renderLanes = workInProgress.child;
	      for (revealOrder = null; null !== renderLanes; )
	        (current = renderLanes.alternate),
	          null !== current &&
	            null === findFirstSuspended(current) &&
	            (revealOrder = renderLanes),
	          (renderLanes = renderLanes.sibling);
	      renderLanes = revealOrder;
	      null === renderLanes
	        ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
	        : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
	      initSuspenseListRenderState(
	        workInProgress,
	        false,
	        revealOrder,
	        renderLanes,
	        tailMode,
	        nextProps
	      );
	      break;
	    case "backwards":
	    case "unstable_legacy-backwards":
	      renderLanes = null;
	      revealOrder = workInProgress.child;
	      for (workInProgress.child = null; null !== revealOrder; ) {
	        current = revealOrder.alternate;
	        if (null !== current && null === findFirstSuspended(current)) {
	          workInProgress.child = revealOrder;
	          break;
	        }
	        current = revealOrder.sibling;
	        revealOrder.sibling = renderLanes;
	        renderLanes = revealOrder;
	        revealOrder = current;
	      }
	      initSuspenseListRenderState(
	        workInProgress,
	        true,
	        renderLanes,
	        null,
	        tailMode,
	        nextProps
	      );
	      break;
	    case "together":
	      initSuspenseListRenderState(
	        workInProgress,
	        false,
	        null,
	        null,
	        void 0,
	        nextProps
	      );
	      break;
	    default:
	      workInProgress.memoizedState = null;
	  }
	  return workInProgress.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
	  null !== current && (workInProgress.dependencies = current.dependencies);
	  workInProgressRootSkippedLanes |= workInProgress.lanes;
	  if (0 === (renderLanes & workInProgress.childLanes))
	    if (null !== current) {
	      if (
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          false
	        ),
	        0 === (renderLanes & workInProgress.childLanes))
	      )
	        return null;
	    } else return null;
	  if (null !== current && workInProgress.child !== current.child)
	    throw Error(formatProdErrorMessage(153));
	  if (null !== workInProgress.child) {
	    current = workInProgress.child;
	    renderLanes = createWorkInProgress(current, current.pendingProps);
	    workInProgress.child = renderLanes;
	    for (renderLanes.return = workInProgress; null !== current.sibling; )
	      (current = current.sibling),
	        (renderLanes = renderLanes.sibling =
	          createWorkInProgress(current, current.pendingProps)),
	        (renderLanes.return = workInProgress);
	    renderLanes.sibling = null;
	  }
	  return workInProgress.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes) {
	  if (0 !== (current.lanes & renderLanes)) return true;
	  current = current.dependencies;
	  return null !== current && checkIfContextChanged(current) ? true : false;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  switch (workInProgress.tag) {
	    case 3:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	      resetHydrationState();
	      break;
	    case 27:
	    case 5:
	      pushHostContext(workInProgress);
	      break;
	    case 4:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      break;
	    case 10:
	      pushProvider(
	        workInProgress,
	        workInProgress.type,
	        workInProgress.memoizedProps.value
	      );
	      break;
	    case 31:
	      if (null !== workInProgress.memoizedState)
	        return (
	          (workInProgress.flags |= 128),
	          pushDehydratedActivitySuspenseHandler(workInProgress),
	          null
	        );
	      break;
	    case 13:
	      var state$102 = workInProgress.memoizedState;
	      if (null !== state$102) {
	        if (null !== state$102.dehydrated)
	          return (
	            pushPrimaryTreeSuspenseHandler(workInProgress),
	            (workInProgress.flags |= 128),
	            null
	          );
	        if (0 !== (renderLanes & workInProgress.child.childLanes))
	          return updateSuspenseComponent(current, workInProgress, renderLanes);
	        pushPrimaryTreeSuspenseHandler(workInProgress);
	        current = bailoutOnAlreadyFinishedWork(
	          current,
	          workInProgress,
	          renderLanes
	        );
	        return null !== current ? current.sibling : null;
	      }
	      pushPrimaryTreeSuspenseHandler(workInProgress);
	      break;
	    case 19:
	      var didSuspendBefore = 0 !== (current.flags & 128);
	      state$102 = 0 !== (renderLanes & workInProgress.childLanes);
	      state$102 ||
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          false
	        ),
	        (state$102 = 0 !== (renderLanes & workInProgress.childLanes)));
	      if (didSuspendBefore) {
	        if (state$102)
	          return updateSuspenseListComponent(
	            current,
	            workInProgress,
	            renderLanes
	          );
	        workInProgress.flags |= 128;
	      }
	      didSuspendBefore = workInProgress.memoizedState;
	      null !== didSuspendBefore &&
	        ((didSuspendBefore.rendering = null),
	        (didSuspendBefore.tail = null),
	        (didSuspendBefore.lastEffect = null));
	      push(suspenseStackCursor, suspenseStackCursor.current);
	      if (state$102) break;
	      else return null;
	    case 22:
	      return (
	        (workInProgress.lanes = 0),
	        updateOffscreenComponent(
	          current,
	          workInProgress,
	          renderLanes,
	          workInProgress.pendingProps
	        )
	      );
	    case 24:
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	  }
	  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	}
	function beginWork(current, workInProgress, renderLanes) {
	  if (null !== current)
	    if (current.memoizedProps !== workInProgress.pendingProps)
	      didReceiveUpdate = true;
	    else {
	      if (
	        !checkScheduledUpdateOrContext(current, renderLanes) &&
	        0 === (workInProgress.flags & 128)
	      )
	        return (
	          (didReceiveUpdate = false),
	          attemptEarlyBailoutIfNoScheduledUpdate(
	            current,
	            workInProgress,
	            renderLanes
	          )
	        );
	      didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
	    }
	  else
	    (didReceiveUpdate = false),
	      isHydrating &&
	        0 !== (workInProgress.flags & 1048576) &&
	        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
	  workInProgress.lanes = 0;
	  switch (workInProgress.tag) {
	    case 16:
	      a: {
	        var props = workInProgress.pendingProps;
	        current = resolveLazy(workInProgress.elementType);
	        workInProgress.type = current;
	        if ("function" === typeof current)
	          shouldConstruct(current)
	            ? ((props = resolveClassComponentProps(current, props)),
	              (workInProgress.tag = 1),
	              (workInProgress = updateClassComponent(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              )))
	            : ((workInProgress.tag = 0),
	              (workInProgress = updateFunctionComponent(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              )));
	        else {
	          if (void 0 !== current && null !== current) {
	            var $$typeof = current.$$typeof;
	            if ($$typeof === REACT_FORWARD_REF_TYPE) {
	              workInProgress.tag = 11;
	              workInProgress = updateForwardRef(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              );
	              break a;
	            } else if ($$typeof === REACT_MEMO_TYPE) {
	              workInProgress.tag = 14;
	              workInProgress = updateMemoComponent(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              );
	              break a;
	            }
	          }
	          workInProgress = getComponentNameFromType(current) || current;
	          throw Error(formatProdErrorMessage(306, workInProgress, ""));
	        }
	      }
	      return workInProgress;
	    case 0:
	      return updateFunctionComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 1:
	      return (
	        (props = workInProgress.type),
	        ($$typeof = resolveClassComponentProps(
	          props,
	          workInProgress.pendingProps
	        )),
	        updateClassComponent(
	          current,
	          workInProgress,
	          props,
	          $$typeof,
	          renderLanes
	        )
	      );
	    case 3:
	      a: {
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        );
	        if (null === current) throw Error(formatProdErrorMessage(387));
	        props = workInProgress.pendingProps;
	        var prevState = workInProgress.memoizedState;
	        $$typeof = prevState.element;
	        cloneUpdateQueue(current, workInProgress);
	        processUpdateQueue(workInProgress, props, null, renderLanes);
	        var nextState = workInProgress.memoizedState;
	        props = nextState.cache;
	        pushProvider(workInProgress, CacheContext, props);
	        props !== prevState.cache &&
	          propagateContextChanges(
	            workInProgress,
	            [CacheContext],
	            renderLanes,
	            true
	          );
	        suspendIfUpdateReadFromEntangledAsyncAction();
	        props = nextState.element;
	        if (prevState.isDehydrated)
	          if (
	            ((prevState = {
	              element: props,
	              isDehydrated: false,
	              cache: nextState.cache
	            }),
	            (workInProgress.updateQueue.baseState = prevState),
	            (workInProgress.memoizedState = prevState),
	            workInProgress.flags & 256)
	          ) {
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              props,
	              renderLanes
	            );
	            break a;
	          } else if (props !== $$typeof) {
	            $$typeof = createCapturedValueAtFiber(
	              Error(formatProdErrorMessage(424)),
	              workInProgress
	            );
	            queueHydrationError($$typeof);
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              props,
	              renderLanes
	            );
	            break a;
	          } else {
	            current = workInProgress.stateNode.containerInfo;
	            switch (current.nodeType) {
	              case 9:
	                current = current.body;
	                break;
	              default:
	                current =
	                  "HTML" === current.nodeName
	                    ? current.ownerDocument.body
	                    : current;
	            }
	            nextHydratableInstance = getNextHydratable(current.firstChild);
	            hydrationParentFiber = workInProgress;
	            isHydrating = true;
	            hydrationErrors = null;
	            rootOrSingletonContext = true;
	            renderLanes = mountChildFibers(
	              workInProgress,
	              null,
	              props,
	              renderLanes
	            );
	            for (workInProgress.child = renderLanes; renderLanes; )
	              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
	                (renderLanes = renderLanes.sibling);
	          }
	        else {
	          resetHydrationState();
	          if (props === $$typeof) {
	            workInProgress = bailoutOnAlreadyFinishedWork(
	              current,
	              workInProgress,
	              renderLanes
	            );
	            break a;
	          }
	          reconcileChildren(current, workInProgress, props, renderLanes);
	        }
	        workInProgress = workInProgress.child;
	      }
	      return workInProgress;
	    case 26:
	      return (
	        markRef(current, workInProgress),
	        null === current
	          ? (renderLanes = getResource(
	              workInProgress.type,
	              null,
	              workInProgress.pendingProps,
	              null
	            ))
	            ? (workInProgress.memoizedState = renderLanes)
	            : isHydrating ||
	              ((renderLanes = workInProgress.type),
	              (current = workInProgress.pendingProps),
	              (props = getOwnerDocumentFromRootContainer(
	                rootInstanceStackCursor.current
	              ).createElement(renderLanes)),
	              (props[internalInstanceKey] = workInProgress),
	              (props[internalPropsKey] = current),
	              setInitialProperties(props, renderLanes, current),
	              markNodeAsHoistable(props),
	              (workInProgress.stateNode = props))
	          : (workInProgress.memoizedState = getResource(
	              workInProgress.type,
	              current.memoizedProps,
	              workInProgress.pendingProps,
	              current.memoizedState
	            )),
	        null
	      );
	    case 27:
	      return (
	        pushHostContext(workInProgress),
	        null === current &&
	          isHydrating &&
	          ((props = workInProgress.stateNode =
	            resolveSingletonInstance(
	              workInProgress.type,
	              workInProgress.pendingProps,
	              rootInstanceStackCursor.current
	            )),
	          (hydrationParentFiber = workInProgress),
	          (rootOrSingletonContext = true),
	          ($$typeof = nextHydratableInstance),
	          isSingletonScope(workInProgress.type)
	            ? ((previousHydratableOnEnteringScopedSingleton = $$typeof),
	              (nextHydratableInstance = getNextHydratable(props.firstChild)))
	            : (nextHydratableInstance = $$typeof)),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        markRef(current, workInProgress),
	        null === current && (workInProgress.flags |= 4194304),
	        workInProgress.child
	      );
	    case 5:
	      if (null === current && isHydrating) {
	        if (($$typeof = props = nextHydratableInstance))
	          (props = canHydrateInstance(
	            props,
	            workInProgress.type,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== props
	              ? ((workInProgress.stateNode = props),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = getNextHydratable(props.firstChild)),
	                (rootOrSingletonContext = false),
	                ($$typeof = true))
	              : ($$typeof = false);
	        $$typeof || throwOnHydrationMismatch(workInProgress);
	      }
	      pushHostContext(workInProgress);
	      $$typeof = workInProgress.type;
	      prevState = workInProgress.pendingProps;
	      nextState = null !== current ? current.memoizedProps : null;
	      props = prevState.children;
	      shouldSetTextContent($$typeof, prevState)
	        ? (props = null)
	        : null !== nextState &&
	          shouldSetTextContent($$typeof, nextState) &&
	          (workInProgress.flags |= 32);
	      null !== workInProgress.memoizedState &&
	        (($$typeof = renderWithHooks(
	          current,
	          workInProgress,
	          TransitionAwareHostComponent,
	          null,
	          null,
	          renderLanes
	        )),
	        (HostTransitionContext._currentValue = $$typeof));
	      markRef(current, workInProgress);
	      reconcileChildren(current, workInProgress, props, renderLanes);
	      return workInProgress.child;
	    case 6:
	      if (null === current && isHydrating) {
	        if ((current = renderLanes = nextHydratableInstance))
	          (renderLanes = canHydrateTextInstance(
	            renderLanes,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== renderLanes
	              ? ((workInProgress.stateNode = renderLanes),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = null),
	                (current = true))
	              : (current = false);
	        current || throwOnHydrationMismatch(workInProgress);
	      }
	      return null;
	    case 13:
	      return updateSuspenseComponent(current, workInProgress, renderLanes);
	    case 4:
	      return (
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        ),
	        (props = workInProgress.pendingProps),
	        null === current
	          ? (workInProgress.child = reconcileChildFibers(
	              workInProgress,
	              null,
	              props,
	              renderLanes
	            ))
	          : reconcileChildren(current, workInProgress, props, renderLanes),
	        workInProgress.child
	      );
	    case 11:
	      return updateForwardRef(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 7:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 8:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 12:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 10:
	      return (
	        (props = workInProgress.pendingProps),
	        pushProvider(workInProgress, workInProgress.type, props.value),
	        reconcileChildren(current, workInProgress, props.children, renderLanes),
	        workInProgress.child
	      );
	    case 9:
	      return (
	        ($$typeof = workInProgress.type._context),
	        (props = workInProgress.pendingProps.children),
	        prepareToReadContext(workInProgress),
	        ($$typeof = readContext($$typeof)),
	        (props = props($$typeof)),
	        (workInProgress.flags |= 1),
	        reconcileChildren(current, workInProgress, props, renderLanes),
	        workInProgress.child
	      );
	    case 14:
	      return updateMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 15:
	      return updateSimpleMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 19:
	      return updateSuspenseListComponent(current, workInProgress, renderLanes);
	    case 31:
	      return updateActivityComponent(current, workInProgress, renderLanes);
	    case 22:
	      return updateOffscreenComponent(
	        current,
	        workInProgress,
	        renderLanes,
	        workInProgress.pendingProps
	      );
	    case 24:
	      return (
	        prepareToReadContext(workInProgress),
	        (props = readContext(CacheContext)),
	        null === current
	          ? (($$typeof = peekCacheFromPool()),
	            null === $$typeof &&
	              (($$typeof = workInProgressRoot),
	              (prevState = createCache()),
	              ($$typeof.pooledCache = prevState),
	              prevState.refCount++,
	              null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes),
	              ($$typeof = prevState)),
	            (workInProgress.memoizedState = { parent: props, cache: $$typeof }),
	            initializeUpdateQueue(workInProgress),
	            pushProvider(workInProgress, CacheContext, $$typeof))
	          : (0 !== (current.lanes & renderLanes) &&
	              (cloneUpdateQueue(current, workInProgress),
	              processUpdateQueue(workInProgress, null, null, renderLanes),
	              suspendIfUpdateReadFromEntangledAsyncAction()),
	            ($$typeof = current.memoizedState),
	            (prevState = workInProgress.memoizedState),
	            $$typeof.parent !== props
	              ? (($$typeof = { parent: props, cache: props }),
	                (workInProgress.memoizedState = $$typeof),
	                0 === workInProgress.lanes &&
	                  (workInProgress.memoizedState =
	                    workInProgress.updateQueue.baseState =
	                      $$typeof),
	                pushProvider(workInProgress, CacheContext, props))
	              : ((props = prevState.cache),
	                pushProvider(workInProgress, CacheContext, props),
	                props !== $$typeof.cache &&
	                  propagateContextChanges(
	                    workInProgress,
	                    [CacheContext],
	                    renderLanes,
	                    true
	                  ))),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 29:
	      throw workInProgress.pendingProps;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function markUpdate(workInProgress) {
	  workInProgress.flags |= 4;
	}
	function preloadInstanceAndSuspendIfNeeded(
	  workInProgress,
	  type,
	  oldProps,
	  newProps,
	  renderLanes
	) {
	  if ((type = 0 !== (workInProgress.mode & 32))) type = false;
	  if (type) {
	    if (
	      ((workInProgress.flags |= 16777216),
	      (renderLanes & 335544128) === renderLanes)
	    )
	      if (workInProgress.stateNode.complete) workInProgress.flags |= 8192;
	      else if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
	      else
	        throw (
	          ((suspendedThenable = noopSuspenseyCommitThenable),
	          SuspenseyCommitException)
	        );
	  } else workInProgress.flags &= -16777217;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
	  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
	    workInProgress.flags &= -16777217;
	  else if (((workInProgress.flags |= 16777216), !preloadResource(resource)))
	    if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
	    else
	      throw (
	        ((suspendedThenable = noopSuspenseyCommitThenable),
	        SuspenseyCommitException)
	      );
	}
	function scheduleRetryEffect(workInProgress, retryQueue) {
	  null !== retryQueue && (workInProgress.flags |= 4);
	  workInProgress.flags & 16384 &&
	    ((retryQueue =
	      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
	    (workInProgress.lanes |= retryQueue),
	    (workInProgressSuspendedRetryLanes |= retryQueue));
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
	  if (!isHydrating)
	    switch (renderState.tailMode) {
	      case "hidden":
	        hasRenderedATailFallback = renderState.tail;
	        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
	          null !== hasRenderedATailFallback.alternate &&
	            (lastTailNode = hasRenderedATailFallback),
	            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
	        null === lastTailNode
	          ? (renderState.tail = null)
	          : (lastTailNode.sibling = null);
	        break;
	      case "collapsed":
	        lastTailNode = renderState.tail;
	        for (var lastTailNode$106 = null; null !== lastTailNode; )
	          null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode),
	            (lastTailNode = lastTailNode.sibling);
	        null === lastTailNode$106
	          ? hasRenderedATailFallback || null === renderState.tail
	            ? (renderState.tail = null)
	            : (renderState.tail.sibling = null)
	          : (lastTailNode$106.sibling = null);
	    }
	}
	function bubbleProperties(completedWork) {
	  var didBailout =
	      null !== completedWork.alternate &&
	      completedWork.alternate.child === completedWork.child,
	    newChildLanes = 0,
	    subtreeFlags = 0;
	  if (didBailout)
	    for (var child$107 = completedWork.child; null !== child$107; )
	      (newChildLanes |= child$107.lanes | child$107.childLanes),
	        (subtreeFlags |= child$107.subtreeFlags & 65011712),
	        (subtreeFlags |= child$107.flags & 65011712),
	        (child$107.return = completedWork),
	        (child$107 = child$107.sibling);
	  else
	    for (child$107 = completedWork.child; null !== child$107; )
	      (newChildLanes |= child$107.lanes | child$107.childLanes),
	        (subtreeFlags |= child$107.subtreeFlags),
	        (subtreeFlags |= child$107.flags),
	        (child$107.return = completedWork),
	        (child$107 = child$107.sibling);
	  completedWork.subtreeFlags |= subtreeFlags;
	  completedWork.childLanes = newChildLanes;
	  return didBailout;
	}
	function completeWork(current, workInProgress, renderLanes) {
	  var newProps = workInProgress.pendingProps;
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return bubbleProperties(workInProgress), null;
	    case 1:
	      return bubbleProperties(workInProgress), null;
	    case 3:
	      renderLanes = workInProgress.stateNode;
	      newProps = null;
	      null !== current && (newProps = current.memoizedState.cache);
	      workInProgress.memoizedState.cache !== newProps &&
	        (workInProgress.flags |= 2048);
	      popProvider(CacheContext);
	      popHostContainer();
	      renderLanes.pendingContext &&
	        ((renderLanes.context = renderLanes.pendingContext),
	        (renderLanes.pendingContext = null));
	      if (null === current || null === current.child)
	        popHydrationState(workInProgress)
	          ? markUpdate(workInProgress)
	          : null === current ||
	            (current.memoizedState.isDehydrated &&
	              0 === (workInProgress.flags & 256)) ||
	            ((workInProgress.flags |= 1024),
	            upgradeHydrationErrorsToRecoverable());
	      bubbleProperties(workInProgress);
	      return null;
	    case 26:
	      var type = workInProgress.type,
	        nextResource = workInProgress.memoizedState;
	      null === current
	        ? (markUpdate(workInProgress),
	          null !== nextResource
	            ? (bubbleProperties(workInProgress),
	              preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
	            : (bubbleProperties(workInProgress),
	              preloadInstanceAndSuspendIfNeeded(
	                workInProgress,
	                type,
	                null,
	                newProps,
	                renderLanes
	              )))
	        : nextResource
	          ? nextResource !== current.memoizedState
	            ? (markUpdate(workInProgress),
	              bubbleProperties(workInProgress),
	              preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
	            : (bubbleProperties(workInProgress),
	              (workInProgress.flags &= -16777217))
	          : ((current = current.memoizedProps),
	            current !== newProps && markUpdate(workInProgress),
	            bubbleProperties(workInProgress),
	            preloadInstanceAndSuspendIfNeeded(
	              workInProgress,
	              type,
	              current,
	              newProps,
	              renderLanes
	            ));
	      return null;
	    case 27:
	      popHostContext(workInProgress);
	      renderLanes = rootInstanceStackCursor.current;
	      type = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        current = contextStackCursor.current;
	        popHydrationState(workInProgress)
	          ? prepareToHydrateHostInstance(workInProgress)
	          : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
	            (workInProgress.stateNode = current),
	            markUpdate(workInProgress));
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 5:
	      popHostContext(workInProgress);
	      type = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        nextResource = contextStackCursor.current;
	        if (popHydrationState(workInProgress))
	          prepareToHydrateHostInstance(workInProgress);
	        else {
	          var ownerDocument = getOwnerDocumentFromRootContainer(
	            rootInstanceStackCursor.current
	          );
	          switch (nextResource) {
	            case 1:
	              nextResource = ownerDocument.createElementNS(
	                "http://www.w3.org/2000/svg",
	                type
	              );
	              break;
	            case 2:
	              nextResource = ownerDocument.createElementNS(
	                "http://www.w3.org/1998/Math/MathML",
	                type
	              );
	              break;
	            default:
	              switch (type) {
	                case "svg":
	                  nextResource = ownerDocument.createElementNS(
	                    "http://www.w3.org/2000/svg",
	                    type
	                  );
	                  break;
	                case "math":
	                  nextResource = ownerDocument.createElementNS(
	                    "http://www.w3.org/1998/Math/MathML",
	                    type
	                  );
	                  break;
	                case "script":
	                  nextResource = ownerDocument.createElement("div");
	                  nextResource.innerHTML = "<script>\x3c/script>";
	                  nextResource = nextResource.removeChild(
	                    nextResource.firstChild
	                  );
	                  break;
	                case "select":
	                  nextResource =
	                    "string" === typeof newProps.is
	                      ? ownerDocument.createElement("select", {
	                          is: newProps.is
	                        })
	                      : ownerDocument.createElement("select");
	                  newProps.multiple
	                    ? (nextResource.multiple = true)
	                    : newProps.size && (nextResource.size = newProps.size);
	                  break;
	                default:
	                  nextResource =
	                    "string" === typeof newProps.is
	                      ? ownerDocument.createElement(type, { is: newProps.is })
	                      : ownerDocument.createElement(type);
	              }
	          }
	          nextResource[internalInstanceKey] = workInProgress;
	          nextResource[internalPropsKey] = newProps;
	          a: for (
	            ownerDocument = workInProgress.child;
	            null !== ownerDocument;

	          ) {
	            if (5 === ownerDocument.tag || 6 === ownerDocument.tag)
	              nextResource.appendChild(ownerDocument.stateNode);
	            else if (
	              4 !== ownerDocument.tag &&
	              27 !== ownerDocument.tag &&
	              null !== ownerDocument.child
	            ) {
	              ownerDocument.child.return = ownerDocument;
	              ownerDocument = ownerDocument.child;
	              continue;
	            }
	            if (ownerDocument === workInProgress) break a;
	            for (; null === ownerDocument.sibling; ) {
	              if (
	                null === ownerDocument.return ||
	                ownerDocument.return === workInProgress
	              )
	                break a;
	              ownerDocument = ownerDocument.return;
	            }
	            ownerDocument.sibling.return = ownerDocument.return;
	            ownerDocument = ownerDocument.sibling;
	          }
	          workInProgress.stateNode = nextResource;
	          a: switch (
	            (setInitialProperties(nextResource, type, newProps), type)
	          ) {
	            case "button":
	            case "input":
	            case "select":
	            case "textarea":
	              newProps = !!newProps.autoFocus;
	              break a;
	            case "img":
	              newProps = true;
	              break a;
	            default:
	              newProps = false;
	          }
	          newProps && markUpdate(workInProgress);
	        }
	      }
	      bubbleProperties(workInProgress);
	      preloadInstanceAndSuspendIfNeeded(
	        workInProgress,
	        workInProgress.type,
	        null === current ? null : current.memoizedProps,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	      return null;
	    case 6:
	      if (current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if ("string" !== typeof newProps && null === workInProgress.stateNode)
	          throw Error(formatProdErrorMessage(166));
	        current = rootInstanceStackCursor.current;
	        if (popHydrationState(workInProgress)) {
	          current = workInProgress.stateNode;
	          renderLanes = workInProgress.memoizedProps;
	          newProps = null;
	          type = hydrationParentFiber;
	          if (null !== type)
	            switch (type.tag) {
	              case 27:
	              case 5:
	                newProps = type.memoizedProps;
	            }
	          current[internalInstanceKey] = workInProgress;
	          current =
	            current.nodeValue === renderLanes ||
	            (null !== newProps && true === newProps.suppressHydrationWarning) ||
	            checkForUnmatchedText(current.nodeValue, renderLanes)
	              ? true
	              : false;
	          current || throwOnHydrationMismatch(workInProgress, true);
	        } else
	          (current =
	            getOwnerDocumentFromRootContainer(current).createTextNode(
	              newProps
	            )),
	            (current[internalInstanceKey] = workInProgress),
	            (workInProgress.stateNode = current);
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 31:
	      renderLanes = workInProgress.memoizedState;
	      if (null === current || null !== current.memoizedState) {
	        newProps = popHydrationState(workInProgress);
	        if (null !== renderLanes) {
	          if (null === current) {
	            if (!newProps) throw Error(formatProdErrorMessage(318));
	            current = workInProgress.memoizedState;
	            current = null !== current ? current.dehydrated : null;
	            if (!current) throw Error(formatProdErrorMessage(557));
	            current[internalInstanceKey] = workInProgress;
	          } else
	            resetHydrationState(),
	              0 === (workInProgress.flags & 128) &&
	                (workInProgress.memoizedState = null),
	              (workInProgress.flags |= 4);
	          bubbleProperties(workInProgress);
	          current = false;
	        } else
	          (renderLanes = upgradeHydrationErrorsToRecoverable()),
	            null !== current &&
	              null !== current.memoizedState &&
	              (current.memoizedState.hydrationErrors = renderLanes),
	            (current = true);
	        if (!current) {
	          if (workInProgress.flags & 256)
	            return popSuspenseHandler(workInProgress), workInProgress;
	          popSuspenseHandler(workInProgress);
	          return null;
	        }
	        if (0 !== (workInProgress.flags & 128))
	          throw Error(formatProdErrorMessage(558));
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 13:
	      newProps = workInProgress.memoizedState;
	      if (
	        null === current ||
	        (null !== current.memoizedState &&
	          null !== current.memoizedState.dehydrated)
	      ) {
	        type = popHydrationState(workInProgress);
	        if (null !== newProps && null !== newProps.dehydrated) {
	          if (null === current) {
	            if (!type) throw Error(formatProdErrorMessage(318));
	            type = workInProgress.memoizedState;
	            type = null !== type ? type.dehydrated : null;
	            if (!type) throw Error(formatProdErrorMessage(317));
	            type[internalInstanceKey] = workInProgress;
	          } else
	            resetHydrationState(),
	              0 === (workInProgress.flags & 128) &&
	                (workInProgress.memoizedState = null),
	              (workInProgress.flags |= 4);
	          bubbleProperties(workInProgress);
	          type = false;
	        } else
	          (type = upgradeHydrationErrorsToRecoverable()),
	            null !== current &&
	              null !== current.memoizedState &&
	              (current.memoizedState.hydrationErrors = type),
	            (type = true);
	        if (!type) {
	          if (workInProgress.flags & 256)
	            return popSuspenseHandler(workInProgress), workInProgress;
	          popSuspenseHandler(workInProgress);
	          return null;
	        }
	      }
	      popSuspenseHandler(workInProgress);
	      if (0 !== (workInProgress.flags & 128))
	        return (workInProgress.lanes = renderLanes), workInProgress;
	      renderLanes = null !== newProps;
	      current = null !== current && null !== current.memoizedState;
	      renderLanes &&
	        ((newProps = workInProgress.child),
	        (type = null),
	        null !== newProps.alternate &&
	          null !== newProps.alternate.memoizedState &&
	          null !== newProps.alternate.memoizedState.cachePool &&
	          (type = newProps.alternate.memoizedState.cachePool.pool),
	        (nextResource = null),
	        null !== newProps.memoizedState &&
	          null !== newProps.memoizedState.cachePool &&
	          (nextResource = newProps.memoizedState.cachePool.pool),
	        nextResource !== type && (newProps.flags |= 2048));
	      renderLanes !== current &&
	        renderLanes &&
	        (workInProgress.child.flags |= 8192);
	      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
	      bubbleProperties(workInProgress);
	      return null;
	    case 4:
	      return (
	        popHostContainer(),
	        null === current &&
	          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 10:
	      return (
	        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
	      );
	    case 19:
	      pop(suspenseStackCursor);
	      newProps = workInProgress.memoizedState;
	      if (null === newProps) return bubbleProperties(workInProgress), null;
	      type = 0 !== (workInProgress.flags & 128);
	      nextResource = newProps.rendering;
	      if (null === nextResource)
	        if (type) cutOffTailIfNeeded(newProps, false);
	        else {
	          if (
	            0 !== workInProgressRootExitStatus ||
	            (null !== current && 0 !== (current.flags & 128))
	          )
	            for (current = workInProgress.child; null !== current; ) {
	              nextResource = findFirstSuspended(current);
	              if (null !== nextResource) {
	                workInProgress.flags |= 128;
	                cutOffTailIfNeeded(newProps, false);
	                current = nextResource.updateQueue;
	                workInProgress.updateQueue = current;
	                scheduleRetryEffect(workInProgress, current);
	                workInProgress.subtreeFlags = 0;
	                current = renderLanes;
	                for (renderLanes = workInProgress.child; null !== renderLanes; )
	                  resetWorkInProgress(renderLanes, current),
	                    (renderLanes = renderLanes.sibling);
	                push(
	                  suspenseStackCursor,
	                  (suspenseStackCursor.current & 1) | 2
	                );
	                isHydrating &&
	                  pushTreeFork(workInProgress, newProps.treeForkCount);
	                return workInProgress.child;
	              }
	              current = current.sibling;
	            }
	          null !== newProps.tail &&
	            now() > workInProgressRootRenderTargetTime &&
	            ((workInProgress.flags |= 128),
	            (type = true),
	            cutOffTailIfNeeded(newProps, false),
	            (workInProgress.lanes = 4194304));
	        }
	      else {
	        if (!type)
	          if (
	            ((current = findFirstSuspended(nextResource)), null !== current)
	          ) {
	            if (
	              ((workInProgress.flags |= 128),
	              (type = true),
	              (current = current.updateQueue),
	              (workInProgress.updateQueue = current),
	              scheduleRetryEffect(workInProgress, current),
	              cutOffTailIfNeeded(newProps, true),
	              null === newProps.tail &&
	                "hidden" === newProps.tailMode &&
	                !nextResource.alternate &&
	                !isHydrating)
	            )
	              return bubbleProperties(workInProgress), null;
	          } else
	            2 * now() - newProps.renderingStartTime >
	              workInProgressRootRenderTargetTime &&
	              536870912 !== renderLanes &&
	              ((workInProgress.flags |= 128),
	              (type = true),
	              cutOffTailIfNeeded(newProps, false),
	              (workInProgress.lanes = 4194304));
	        newProps.isBackwards
	          ? ((nextResource.sibling = workInProgress.child),
	            (workInProgress.child = nextResource))
	          : ((current = newProps.last),
	            null !== current
	              ? (current.sibling = nextResource)
	              : (workInProgress.child = nextResource),
	            (newProps.last = nextResource));
	      }
	      if (null !== newProps.tail)
	        return (
	          (current = newProps.tail),
	          (newProps.rendering = current),
	          (newProps.tail = current.sibling),
	          (newProps.renderingStartTime = now()),
	          (current.sibling = null),
	          (renderLanes = suspenseStackCursor.current),
	          push(
	            suspenseStackCursor,
	            type ? (renderLanes & 1) | 2 : renderLanes & 1
	          ),
	          isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount),
	          current
	        );
	      bubbleProperties(workInProgress);
	      return null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        (newProps = null !== workInProgress.memoizedState),
	        null !== current
	          ? (null !== current.memoizedState) !== newProps &&
	            (workInProgress.flags |= 8192)
	          : newProps && (workInProgress.flags |= 8192),
	        newProps
	          ? 0 !== (renderLanes & 536870912) &&
	            0 === (workInProgress.flags & 128) &&
	            (bubbleProperties(workInProgress),
	            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
	          : bubbleProperties(workInProgress),
	        (renderLanes = workInProgress.updateQueue),
	        null !== renderLanes &&
	          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
	        (renderLanes = null),
	        null !== current &&
	          null !== current.memoizedState &&
	          null !== current.memoizedState.cachePool &&
	          (renderLanes = current.memoizedState.cachePool.pool),
	        (newProps = null),
	        null !== workInProgress.memoizedState &&
	          null !== workInProgress.memoizedState.cachePool &&
	          (newProps = workInProgress.memoizedState.cachePool.pool),
	        newProps !== renderLanes && (workInProgress.flags |= 2048),
	        null !== current && pop(resumedCache),
	        null
	      );
	    case 24:
	      return (
	        (renderLanes = null),
	        null !== current && (renderLanes = current.memoizedState.cache),
	        workInProgress.memoizedState.cache !== renderLanes &&
	          (workInProgress.flags |= 2048),
	        popProvider(CacheContext),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 25:
	      return null;
	    case 30:
	      return null;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function unwindWork(current, workInProgress) {
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 1:
	      return (
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 3:
	      return (
	        popProvider(CacheContext),
	        popHostContainer(),
	        (current = workInProgress.flags),
	        0 !== (current & 65536) && 0 === (current & 128)
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 26:
	    case 27:
	    case 5:
	      return popHostContext(workInProgress), null;
	    case 31:
	      if (null !== workInProgress.memoizedState) {
	        popSuspenseHandler(workInProgress);
	        if (null === workInProgress.alternate)
	          throw Error(formatProdErrorMessage(340));
	        resetHydrationState();
	      }
	      current = workInProgress.flags;
	      return current & 65536
	        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	        : null;
	    case 13:
	      popSuspenseHandler(workInProgress);
	      current = workInProgress.memoizedState;
	      if (null !== current && null !== current.dehydrated) {
	        if (null === workInProgress.alternate)
	          throw Error(formatProdErrorMessage(340));
	        resetHydrationState();
	      }
	      current = workInProgress.flags;
	      return current & 65536
	        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	        : null;
	    case 19:
	      return pop(suspenseStackCursor), null;
	    case 4:
	      return popHostContainer(), null;
	    case 10:
	      return popProvider(workInProgress.type), null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        null !== current && pop(resumedCache),
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 24:
	      return popProvider(CacheContext), null;
	    case 25:
	      return null;
	    default:
	      return null;
	  }
	}
	function unwindInterruptedWork(current, interruptedWork) {
	  popTreeContext(interruptedWork);
	  switch (interruptedWork.tag) {
	    case 3:
	      popProvider(CacheContext);
	      popHostContainer();
	      break;
	    case 26:
	    case 27:
	    case 5:
	      popHostContext(interruptedWork);
	      break;
	    case 4:
	      popHostContainer();
	      break;
	    case 31:
	      null !== interruptedWork.memoizedState &&
	        popSuspenseHandler(interruptedWork);
	      break;
	    case 13:
	      popSuspenseHandler(interruptedWork);
	      break;
	    case 19:
	      pop(suspenseStackCursor);
	      break;
	    case 10:
	      popProvider(interruptedWork.type);
	      break;
	    case 22:
	    case 23:
	      popSuspenseHandler(interruptedWork);
	      popHiddenContext();
	      null !== current && pop(resumedCache);
	      break;
	    case 24:
	      popProvider(CacheContext);
	  }
	}
	function commitHookEffectListMount(flags, finishedWork) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          lastEffect = void 0;
	          var create = updateQueue.create,
	            inst = updateQueue.inst;
	          lastEffect = create();
	          inst.destroy = lastEffect;
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHookEffectListUnmount(
	  flags,
	  finishedWork,
	  nearestMountedAncestor$jscomp$0
	) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          var inst = updateQueue.inst,
	            destroy = inst.destroy;
	          if (void 0 !== destroy) {
	            inst.destroy = void 0;
	            lastEffect = finishedWork;
	            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
	              destroy_ = destroy;
	            try {
	              destroy_();
	            } catch (error) {
	              captureCommitPhaseError(
	                lastEffect,
	                nearestMountedAncestor,
	                error
	              );
	            }
	          }
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitClassCallbacks(finishedWork) {
	  var updateQueue = finishedWork.updateQueue;
	  if (null !== updateQueue) {
	    var instance = finishedWork.stateNode;
	    try {
	      commitCallbacks(updateQueue, instance);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	  }
	}
	function safelyCallComponentWillUnmount(
	  current,
	  nearestMountedAncestor,
	  instance
	) {
	  instance.props = resolveClassComponentProps(
	    current.type,
	    current.memoizedProps
	  );
	  instance.state = current.memoizedState;
	  try {
	    instance.componentWillUnmount();
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
	  try {
	    var ref = current.ref;
	    if (null !== ref) {
	      switch (current.tag) {
	        case 26:
	        case 27:
	        case 5:
	          var instanceToUse = current.stateNode;
	          break;
	        case 30:
	          instanceToUse = current.stateNode;
	          break;
	        default:
	          instanceToUse = current.stateNode;
	      }
	      "function" === typeof ref
	        ? (current.refCleanup = ref(instanceToUse))
	        : (ref.current = instanceToUse);
	    }
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
	  var ref = current.ref,
	    refCleanup = current.refCleanup;
	  if (null !== ref)
	    if ("function" === typeof refCleanup)
	      try {
	        refCleanup();
	      } catch (error) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error);
	      } finally {
	        (current.refCleanup = null),
	          (current = current.alternate),
	          null != current && (current.refCleanup = null);
	      }
	    else if ("function" === typeof ref)
	      try {
	        ref(null);
	      } catch (error$140) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error$140);
	      }
	    else ref.current = null;
	}
	function commitHostMount(finishedWork) {
	  var type = finishedWork.type,
	    props = finishedWork.memoizedProps,
	    instance = finishedWork.stateNode;
	  try {
	    a: switch (type) {
	      case "button":
	      case "input":
	      case "select":
	      case "textarea":
	        props.autoFocus && instance.focus();
	        break a;
	      case "img":
	        props.src
	          ? (instance.src = props.src)
	          : props.srcSet && (instance.srcset = props.srcSet);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
	  try {
	    var domElement = finishedWork.stateNode;
	    updateProperties(domElement, finishedWork.type, oldProps, newProps);
	    domElement[internalPropsKey] = newProps;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function isHostParent(fiber) {
	  return (
	    5 === fiber.tag ||
	    3 === fiber.tag ||
	    26 === fiber.tag ||
	    (27 === fiber.tag && isSingletonScope(fiber.type)) ||
	    4 === fiber.tag
	  );
	}
	function getHostSibling(fiber) {
	  a: for (;;) {
	    for (; null === fiber.sibling; ) {
	      if (null === fiber.return || isHostParent(fiber.return)) return null;
	      fiber = fiber.return;
	    }
	    fiber.sibling.return = fiber.return;
	    for (
	      fiber = fiber.sibling;
	      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

	    ) {
	      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
	      if (fiber.flags & 2) continue a;
	      if (null === fiber.child || 4 === fiber.tag) continue a;
	      else (fiber.child.return = fiber), (fiber = fiber.child);
	    }
	    if (!(fiber.flags & 2)) return fiber.stateNode;
	  }
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before
	        ? (9 === parent.nodeType
	            ? parent.body
	            : "HTML" === parent.nodeName
	              ? parent.ownerDocument.body
	              : parent
	          ).insertBefore(node, before)
	        : ((before =
	            9 === parent.nodeType
	              ? parent.body
	              : "HTML" === parent.nodeName
	                ? parent.ownerDocument.body
	                : parent),
	          before.appendChild(node),
	          (parent = parent._reactRootContainer),
	          (null !== parent && void 0 !== parent) ||
	            null !== before.onclick ||
	            (before.onclick = noop$1));
	  else if (
	    4 !== tag &&
	    (27 === tag &&
	      isSingletonScope(node.type) &&
	      ((parent = node.stateNode), (before = null)),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        (node = node.sibling);
	}
	function insertOrAppendPlacementNode(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before ? parent.insertBefore(node, before) : parent.appendChild(node);
	  else if (
	    4 !== tag &&
	    (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
	}
	function commitHostSingletonAcquisition(finishedWork) {
	  var singleton = finishedWork.stateNode,
	    props = finishedWork.memoizedProps;
	  try {
	    for (
	      var type = finishedWork.type, attributes = singleton.attributes;
	      attributes.length;

	    )
	      singleton.removeAttributeNode(attributes[0]);
	    setInitialProperties(singleton, type, props);
	    singleton[internalInstanceKey] = finishedWork;
	    singleton[internalPropsKey] = props;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	var offscreenSubtreeIsHidden = false,
	  offscreenSubtreeWasHidden = false,
	  needsFormReset = false,
	  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
	  nextEffect = null;
	function commitBeforeMutationEffects(root, firstChild) {
	  root = root.containerInfo;
	  eventsEnabled = _enabled;
	  root = getActiveElementDeep(root);
	  if (hasSelectionCapabilities(root)) {
	    if ("selectionStart" in root)
	      var JSCompiler_temp = {
	        start: root.selectionStart,
	        end: root.selectionEnd
	      };
	    else
	      a: {
	        JSCompiler_temp =
	          ((JSCompiler_temp = root.ownerDocument) &&
	            JSCompiler_temp.defaultView) ||
	          window;
	        var selection =
	          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
	        if (selection && 0 !== selection.rangeCount) {
	          JSCompiler_temp = selection.anchorNode;
	          var anchorOffset = selection.anchorOffset,
	            focusNode = selection.focusNode;
	          selection = selection.focusOffset;
	          try {
	            JSCompiler_temp.nodeType, focusNode.nodeType;
	          } catch (e$20) {
	            JSCompiler_temp = null;
	            break a;
	          }
	          var length = 0,
	            start = -1,
	            end = -1,
	            indexWithinAnchor = 0,
	            indexWithinFocus = 0,
	            node = root,
	            parentNode = null;
	          b: for (;;) {
	            for (var next; ; ) {
	              node !== JSCompiler_temp ||
	                (0 !== anchorOffset && 3 !== node.nodeType) ||
	                (start = length + anchorOffset);
	              node !== focusNode ||
	                (0 !== selection && 3 !== node.nodeType) ||
	                (end = length + selection);
	              3 === node.nodeType && (length += node.nodeValue.length);
	              if (null === (next = node.firstChild)) break;
	              parentNode = node;
	              node = next;
	            }
	            for (;;) {
	              if (node === root) break b;
	              parentNode === JSCompiler_temp &&
	                ++indexWithinAnchor === anchorOffset &&
	                (start = length);
	              parentNode === focusNode &&
	                ++indexWithinFocus === selection &&
	                (end = length);
	              if (null !== (next = node.nextSibling)) break;
	              node = parentNode;
	              parentNode = node.parentNode;
	            }
	            node = next;
	          }
	          JSCompiler_temp =
	            -1 === start || -1 === end ? null : { start: start, end: end };
	        } else JSCompiler_temp = null;
	      }
	    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
	  } else JSCompiler_temp = null;
	  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
	  _enabled = false;
	  for (nextEffect = firstChild; null !== nextEffect; )
	    if (
	      ((firstChild = nextEffect),
	      (root = firstChild.child),
	      0 !== (firstChild.subtreeFlags & 1028) && null !== root)
	    )
	      (root.return = firstChild), (nextEffect = root);
	    else
	      for (; null !== nextEffect; ) {
	        firstChild = nextEffect;
	        focusNode = firstChild.alternate;
	        root = firstChild.flags;
	        switch (firstChild.tag) {
	          case 0:
	            if (
	              0 !== (root & 4) &&
	              ((root = firstChild.updateQueue),
	              (root = null !== root ? root.events : null),
	              null !== root)
	            )
	              for (
	                JSCompiler_temp = 0;
	                JSCompiler_temp < root.length;
	                JSCompiler_temp++
	              )
	                (anchorOffset = root[JSCompiler_temp]),
	                  (anchorOffset.ref.impl = anchorOffset.nextImpl);
	            break;
	          case 11:
	          case 15:
	            break;
	          case 1:
	            if (0 !== (root & 1024) && null !== focusNode) {
	              root = void 0;
	              JSCompiler_temp = firstChild;
	              anchorOffset = focusNode.memoizedProps;
	              focusNode = focusNode.memoizedState;
	              selection = JSCompiler_temp.stateNode;
	              try {
	                var resolvedPrevProps = resolveClassComponentProps(
	                  JSCompiler_temp.type,
	                  anchorOffset
	                );
	                root = selection.getSnapshotBeforeUpdate(
	                  resolvedPrevProps,
	                  focusNode
	                );
	                selection.__reactInternalSnapshotBeforeUpdate = root;
	              } catch (error) {
	                captureCommitPhaseError(
	                  JSCompiler_temp,
	                  JSCompiler_temp.return,
	                  error
	                );
	              }
	            }
	            break;
	          case 3:
	            if (0 !== (root & 1024))
	              if (
	                ((root = firstChild.stateNode.containerInfo),
	                (JSCompiler_temp = root.nodeType),
	                9 === JSCompiler_temp)
	              )
	                clearContainerSparingly(root);
	              else if (1 === JSCompiler_temp)
	                switch (root.nodeName) {
	                  case "HEAD":
	                  case "HTML":
	                  case "BODY":
	                    clearContainerSparingly(root);
	                    break;
	                  default:
	                    root.textContent = "";
	                }
	            break;
	          case 5:
	          case 26:
	          case 27:
	          case 6:
	          case 4:
	          case 17:
	            break;
	          default:
	            if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
	        }
	        root = firstChild.sibling;
	        if (null !== root) {
	          root.return = firstChild.return;
	          nextEffect = root;
	          break;
	        }
	        nextEffect = firstChild.return;
	      }
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitHookEffectListMount(5, finishedWork);
	      break;
	    case 1:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (flags & 4)
	        if (((finishedRoot = finishedWork.stateNode), null === current))
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(finishedWork, finishedWork.return, error);
	          }
	        else {
	          var prevProps = resolveClassComponentProps(
	            finishedWork.type,
	            current.memoizedProps
	          );
	          current = current.memoizedState;
	          try {
	            finishedRoot.componentDidUpdate(
	              prevProps,
	              current,
	              finishedRoot.__reactInternalSnapshotBeforeUpdate
	            );
	          } catch (error$139) {
	            captureCommitPhaseError(
	              finishedWork,
	              finishedWork.return,
	              error$139
	            );
	          }
	        }
	      flags & 64 && commitClassCallbacks(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (
	        flags & 64 &&
	        ((finishedRoot = finishedWork.updateQueue), null !== finishedRoot)
	      ) {
	        current = null;
	        if (null !== finishedWork.child)
	          switch (finishedWork.child.tag) {
	            case 27:
	            case 5:
	              current = finishedWork.child.stateNode;
	              break;
	            case 1:
	              current = finishedWork.child.stateNode;
	          }
	        try {
	          commitCallbacks(finishedRoot, current);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 27:
	      null === current &&
	        flags & 4 &&
	        commitHostSingletonAcquisition(finishedWork);
	    case 26:
	    case 5:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      null === current && flags & 4 && commitHostMount(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 12:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      break;
	    case 31:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	      flags & 64 &&
	        ((finishedRoot = finishedWork.memoizedState),
	        null !== finishedRoot &&
	          ((finishedRoot = finishedRoot.dehydrated),
	          null !== finishedRoot &&
	            ((finishedWork = retryDehydratedSuspenseBoundary.bind(
	              null,
	              finishedWork
	            )),
	            registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
	      break;
	    case 22:
	      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
	      if (!flags) {
	        current =
	          (null !== current && null !== current.memoizedState) ||
	          offscreenSubtreeWasHidden;
	        prevProps = offscreenSubtreeIsHidden;
	        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	        offscreenSubtreeIsHidden = flags;
	        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
	          ? recursivelyTraverseReappearLayoutEffects(
	              finishedRoot,
	              finishedWork,
	              0 !== (finishedWork.subtreeFlags & 8772)
	            )
	          : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	        offscreenSubtreeIsHidden = prevProps;
	        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      }
	      break;
	    case 30:
	      break;
	    default:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	  }
	}
	function detachFiberAfterEffects(fiber) {
	  var alternate = fiber.alternate;
	  null !== alternate &&
	    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
	  fiber.child = null;
	  fiber.deletions = null;
	  fiber.sibling = null;
	  5 === fiber.tag &&
	    ((alternate = fiber.stateNode),
	    null !== alternate && detachDeletedInstance(alternate));
	  fiber.stateNode = null;
	  fiber.return = null;
	  fiber.dependencies = null;
	  fiber.memoizedProps = null;
	  fiber.memoizedState = null;
	  fiber.pendingProps = null;
	  fiber.stateNode = null;
	  fiber.updateQueue = null;
	}
	var hostParent = null,
	  hostParentIsContainer = false;
	function recursivelyTraverseDeletionEffects(
	  finishedRoot,
	  nearestMountedAncestor,
	  parent
	) {
	  for (parent = parent.child; null !== parent; )
	    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
	      (parent = parent.sibling);
	}
	function commitDeletionEffectsOnFiber(
	  finishedRoot,
	  nearestMountedAncestor,
	  deletedFiber
	) {
	  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
	    try {
	      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
	    } catch (err) {}
	  switch (deletedFiber.tag) {
	    case 26:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      deletedFiber.memoizedState
	        ? deletedFiber.memoizedState.count--
	        : deletedFiber.stateNode &&
	          ((deletedFiber = deletedFiber.stateNode),
	          deletedFiber.parentNode.removeChild(deletedFiber));
	      break;
	    case 27:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      var prevHostParent = hostParent,
	        prevHostParentIsContainer = hostParentIsContainer;
	      isSingletonScope(deletedFiber.type) &&
	        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = false));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      releaseSingletonInstance(deletedFiber.stateNode);
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 5:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	    case 6:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = null;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      if (null !== hostParent)
	        if (hostParentIsContainer)
	          try {
	            (9 === hostParent.nodeType
	              ? hostParent.body
	              : "HTML" === hostParent.nodeName
	                ? hostParent.ownerDocument.body
	                : hostParent
	            ).removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	        else
	          try {
	            hostParent.removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	      break;
	    case 18:
	      null !== hostParent &&
	        (hostParentIsContainer
	          ? ((finishedRoot = hostParent),
	            clearHydrationBoundary(
	              9 === finishedRoot.nodeType
	                ? finishedRoot.body
	                : "HTML" === finishedRoot.nodeName
	                  ? finishedRoot.ownerDocument.body
	                  : finishedRoot,
	              deletedFiber.stateNode
	            ),
	            retryIfBlockedOn(finishedRoot))
	          : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
	      break;
	    case 4:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = deletedFiber.stateNode.containerInfo;
	      hostParentIsContainer = true;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
	      offscreenSubtreeWasHidden ||
	        commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 1:
	      offscreenSubtreeWasHidden ||
	        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
	        (prevHostParent = deletedFiber.stateNode),
	        "function" === typeof prevHostParent.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            deletedFiber,
	            nearestMountedAncestor,
	            prevHostParent
	          ));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 21:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 22:
	      offscreenSubtreeWasHidden =
	        (prevHostParent = offscreenSubtreeWasHidden) ||
	        null !== deletedFiber.memoizedState;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      offscreenSubtreeWasHidden = prevHostParent;
	      break;
	    default:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	  }
	}
	function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
	  if (
	    null === finishedWork.memoizedState &&
	    ((finishedRoot = finishedWork.alternate),
	    null !== finishedRoot &&
	      ((finishedRoot = finishedRoot.memoizedState), null !== finishedRoot))
	  ) {
	    finishedRoot = finishedRoot.dehydrated;
	    try {
	      retryIfBlockedOn(finishedRoot);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	  }
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
	  if (
	    null === finishedWork.memoizedState &&
	    ((finishedRoot = finishedWork.alternate),
	    null !== finishedRoot &&
	      ((finishedRoot = finishedRoot.memoizedState),
	      null !== finishedRoot &&
	        ((finishedRoot = finishedRoot.dehydrated), null !== finishedRoot)))
	  )
	    try {
	      retryIfBlockedOn(finishedRoot);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	}
	function getRetryCache(finishedWork) {
	  switch (finishedWork.tag) {
	    case 31:
	    case 13:
	    case 19:
	      var retryCache = finishedWork.stateNode;
	      null === retryCache &&
	        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
	      return retryCache;
	    case 22:
	      return (
	        (finishedWork = finishedWork.stateNode),
	        (retryCache = finishedWork._retryCache),
	        null === retryCache &&
	          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
	        retryCache
	      );
	    default:
	      throw Error(formatProdErrorMessage(435, finishedWork.tag));
	  }
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
	  var retryCache = getRetryCache(finishedWork);
	  wakeables.forEach(function (wakeable) {
	    if (!retryCache.has(wakeable)) {
	      retryCache.add(wakeable);
	      var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
	      wakeable.then(retry, retry);
	    }
	  });
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (null !== deletions)
	    for (var i = 0; i < deletions.length; i++) {
	      var childToDelete = deletions[i],
	        root = root$jscomp$0,
	        returnFiber = parentFiber,
	        parent = returnFiber;
	      a: for (; null !== parent; ) {
	        switch (parent.tag) {
	          case 27:
	            if (isSingletonScope(parent.type)) {
	              hostParent = parent.stateNode;
	              hostParentIsContainer = false;
	              break a;
	            }
	            break;
	          case 5:
	            hostParent = parent.stateNode;
	            hostParentIsContainer = false;
	            break a;
	          case 3:
	          case 4:
	            hostParent = parent.stateNode.containerInfo;
	            hostParentIsContainer = true;
	            break a;
	        }
	        parent = parent.return;
	      }
	      if (null === hostParent) throw Error(formatProdErrorMessage(160));
	      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
	      hostParent = null;
	      hostParentIsContainer = false;
	      root = childToDelete.alternate;
	      null !== root && (root.return = null);
	      childToDelete.return = null;
	    }
	  if (parentFiber.subtreeFlags & 13886)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
	        (parentFiber = parentFiber.sibling);
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root) {
	  var current = finishedWork.alternate,
	    flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
	        commitHookEffectListMount(3, finishedWork),
	        commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
	      break;
	    case 1:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      flags & 64 &&
	        offscreenSubtreeIsHidden &&
	        ((finishedWork = finishedWork.updateQueue),
	        null !== finishedWork &&
	          ((flags = finishedWork.callbacks),
	          null !== flags &&
	            ((current = finishedWork.shared.hiddenCallbacks),
	            (finishedWork.shared.hiddenCallbacks =
	              null === current ? flags : current.concat(flags)))));
	      break;
	    case 26:
	      var hoistableRoot = currentHoistableRoot;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (flags & 4) {
	        var currentResource = null !== current ? current.memoizedState : null;
	        flags = finishedWork.memoizedState;
	        if (null === current)
	          if (null === flags)
	            if (null === finishedWork.stateNode) {
	              a: {
	                flags = finishedWork.type;
	                current = finishedWork.memoizedProps;
	                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	                b: switch (flags) {
	                  case "title":
	                    currentResource =
	                      hoistableRoot.getElementsByTagName("title")[0];
	                    if (
	                      !currentResource ||
	                      currentResource[internalHoistableMarker] ||
	                      currentResource[internalInstanceKey] ||
	                      "http://www.w3.org/2000/svg" ===
	                        currentResource.namespaceURI ||
	                      currentResource.hasAttribute("itemprop")
	                    )
	                      (currentResource = hoistableRoot.createElement(flags)),
	                        hoistableRoot.head.insertBefore(
	                          currentResource,
	                          hoistableRoot.querySelector("head > title")
	                        );
	                    setInitialProperties(currentResource, flags, current);
	                    currentResource[internalInstanceKey] = finishedWork;
	                    markNodeAsHoistable(currentResource);
	                    flags = currentResource;
	                    break a;
	                  case "link":
	                    var maybeNodes = getHydratableHoistableCache(
	                      "link",
	                      "href",
	                      hoistableRoot
	                    ).get(flags + (current.href || ""));
	                    if (maybeNodes)
	                      for (var i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("href") ===
	                            (null == current.href || "" === current.href
	                              ? null
	                              : current.href) &&
	                            currentResource.getAttribute("rel") ===
	                              (null == current.rel ? null : current.rel) &&
	                            currentResource.getAttribute("title") ===
	                              (null == current.title ? null : current.title) &&
	                            currentResource.getAttribute("crossorigin") ===
	                              (null == current.crossOrigin
	                                ? null
	                                : current.crossOrigin))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  case "meta":
	                    if (
	                      (maybeNodes = getHydratableHoistableCache(
	                        "meta",
	                        "content",
	                        hoistableRoot
	                      ).get(flags + (current.content || "")))
	                    )
	                      for (i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("content") ===
	                            (null == current.content
	                              ? null
	                              : "" + current.content) &&
	                            currentResource.getAttribute("name") ===
	                              (null == current.name ? null : current.name) &&
	                            currentResource.getAttribute("property") ===
	                              (null == current.property
	                                ? null
	                                : current.property) &&
	                            currentResource.getAttribute("http-equiv") ===
	                              (null == current.httpEquiv
	                                ? null
	                                : current.httpEquiv) &&
	                            currentResource.getAttribute("charset") ===
	                              (null == current.charSet
	                                ? null
	                                : current.charSet))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  default:
	                    throw Error(formatProdErrorMessage(468, flags));
	                }
	                currentResource[internalInstanceKey] = finishedWork;
	                markNodeAsHoistable(currentResource);
	                flags = currentResource;
	              }
	              finishedWork.stateNode = flags;
	            } else
	              mountHoistable(
	                hoistableRoot,
	                finishedWork.type,
	                finishedWork.stateNode
	              );
	          else
	            finishedWork.stateNode = acquireResource(
	              hoistableRoot,
	              flags,
	              finishedWork.memoizedProps
	            );
	        else
	          currentResource !== flags
	            ? (null === currentResource
	                ? null !== current.stateNode &&
	                  ((current = current.stateNode),
	                  current.parentNode.removeChild(current))
	                : currentResource.count--,
	              null === flags
	                ? mountHoistable(
	                    hoistableRoot,
	                    finishedWork.type,
	                    finishedWork.stateNode
	                  )
	                : acquireResource(
	                    hoistableRoot,
	                    flags,
	                    finishedWork.memoizedProps
	                  ))
	            : null === flags &&
	              null !== finishedWork.stateNode &&
	              commitHostUpdate(
	                finishedWork,
	                finishedWork.memoizedProps,
	                current.memoizedProps
	              );
	      }
	      break;
	    case 27:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      null !== current &&
	        flags & 4 &&
	        commitHostUpdate(
	          finishedWork,
	          finishedWork.memoizedProps,
	          current.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (finishedWork.flags & 32) {
	        hoistableRoot = finishedWork.stateNode;
	        try {
	          setTextContent(hoistableRoot, "");
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      flags & 4 &&
	        null != finishedWork.stateNode &&
	        ((hoistableRoot = finishedWork.memoizedProps),
	        commitHostUpdate(
	          finishedWork,
	          hoistableRoot,
	          null !== current ? current.memoizedProps : hoistableRoot
	        ));
	      flags & 1024 && (needsFormReset = true);
	      break;
	    case 6:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4) {
	        if (null === finishedWork.stateNode)
	          throw Error(formatProdErrorMessage(162));
	        flags = finishedWork.memoizedProps;
	        current = finishedWork.stateNode;
	        try {
	          current.nodeValue = flags;
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 3:
	      tagCaches = null;
	      hoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(root.containerInfo);
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      currentHoistableRoot = hoistableRoot;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
	        try {
	          retryIfBlockedOn(root.containerInfo);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      needsFormReset &&
	        ((needsFormReset = false), recursivelyResetForms(finishedWork));
	      break;
	    case 4:
	      flags = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(
	        finishedWork.stateNode.containerInfo
	      );
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      currentHoistableRoot = flags;
	      break;
	    case 12:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      break;
	    case 31:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 13:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      finishedWork.child.flags & 8192 &&
	        (null !== finishedWork.memoizedState) !==
	          (null !== current && null !== current.memoizedState) &&
	        (globalMostRecentFallbackTime = now());
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 22:
	      hoistableRoot = null !== finishedWork.memoizedState;
	      var wasHidden = null !== current && null !== current.memoizedState,
	        prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
	        prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 8192)
	        a: for (
	          root = finishedWork.stateNode,
	            root._visibility = hoistableRoot
	              ? root._visibility & -2
	              : root._visibility | 1,
	            hoistableRoot &&
	              (null === current ||
	                wasHidden ||
	                offscreenSubtreeIsHidden ||
	                offscreenSubtreeWasHidden ||
	                recursivelyTraverseDisappearLayoutEffects(finishedWork)),
	            current = null,
	            root = finishedWork;
	          ;

	        ) {
	          if (5 === root.tag || 26 === root.tag) {
	            if (null === current) {
	              wasHidden = current = root;
	              try {
	                if (((currentResource = wasHidden.stateNode), hoistableRoot))
	                  (maybeNodes = currentResource.style),
	                    "function" === typeof maybeNodes.setProperty
	                      ? maybeNodes.setProperty("display", "none", "important")
	                      : (maybeNodes.display = "none");
	                else {
	                  i = wasHidden.stateNode;
	                  var styleProp = wasHidden.memoizedProps.style,
	                    display =
	                      void 0 !== styleProp &&
	                      null !== styleProp &&
	                      styleProp.hasOwnProperty("display")
	                        ? styleProp.display
	                        : null;
	                  i.style.display =
	                    null == display || "boolean" === typeof display
	                      ? ""
	                      : ("" + display).trim();
	                }
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (6 === root.tag) {
	            if (null === current) {
	              wasHidden = root;
	              try {
	                wasHidden.stateNode.nodeValue = hoistableRoot
	                  ? ""
	                  : wasHidden.memoizedProps;
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (18 === root.tag) {
	            if (null === current) {
	              wasHidden = root;
	              try {
	                var instance = wasHidden.stateNode;
	                hoistableRoot
	                  ? hideOrUnhideDehydratedBoundary(instance, !0)
	                  : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, !1);
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (
	            ((22 !== root.tag && 23 !== root.tag) ||
	              null === root.memoizedState ||
	              root === finishedWork) &&
	            null !== root.child
	          ) {
	            root.child.return = root;
	            root = root.child;
	            continue;
	          }
	          if (root === finishedWork) break a;
	          for (; null === root.sibling; ) {
	            if (null === root.return || root.return === finishedWork) break a;
	            current === root && (current = null);
	            root = root.return;
	          }
	          current === root && (current = null);
	          root.sibling.return = root.return;
	          root = root.sibling;
	        }
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((current = flags.retryQueue),
	          null !== current &&
	            ((flags.retryQueue = null),
	            attachSuspenseRetryListeners(finishedWork, current))));
	      break;
	    case 19:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 30:
	      break;
	    case 21:
	      break;
	    default:
	      recursivelyTraverseMutationEffects(root, finishedWork),
	        commitReconciliationEffects(finishedWork);
	  }
	}
	function commitReconciliationEffects(finishedWork) {
	  var flags = finishedWork.flags;
	  if (flags & 2) {
	    try {
	      for (
	        var hostParentFiber, parentFiber = finishedWork.return;
	        null !== parentFiber;

	      ) {
	        if (isHostParent(parentFiber)) {
	          hostParentFiber = parentFiber;
	          break;
	        }
	        parentFiber = parentFiber.return;
	      }
	      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
	      switch (hostParentFiber.tag) {
	        case 27:
	          var parent = hostParentFiber.stateNode,
	            before = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before, parent);
	          break;
	        case 5:
	          var parent$141 = hostParentFiber.stateNode;
	          hostParentFiber.flags & 32 &&
	            (setTextContent(parent$141, ""), (hostParentFiber.flags &= -33));
	          var before$142 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before$142, parent$141);
	          break;
	        case 3:
	        case 4:
	          var parent$143 = hostParentFiber.stateNode.containerInfo,
	            before$144 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNodeIntoContainer(
	            finishedWork,
	            before$144,
	            parent$143
	          );
	          break;
	        default:
	          throw Error(formatProdErrorMessage(161));
	      }
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	    finishedWork.flags &= -3;
	  }
	  flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
	  if (parentFiber.subtreeFlags & 1024)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var fiber = parentFiber;
	      recursivelyResetForms(fiber);
	      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
	      parentFiber = parentFiber.sibling;
	    }
	}
	function recursivelyTraverseLayoutEffects(root, parentFiber) {
	  if (parentFiber.subtreeFlags & 8772)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedWork = parentFiber;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 1:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        var instance = finishedWork.stateNode;
	        "function" === typeof instance.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            finishedWork,
	            finishedWork.return,
	            instance
	          );
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 27:
	        releaseSingletonInstance(finishedWork.stateNode);
	      case 26:
	      case 5:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 30:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      default:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseReappearLayoutEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var current = parentFiber.alternate,
	      finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(4, finishedWork);
	        break;
	      case 1:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        current = finishedWork;
	        finishedRoot = current.stateNode;
	        if ("function" === typeof finishedRoot.componentDidMount)
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        current = finishedWork;
	        finishedRoot = current.updateQueue;
	        if (null !== finishedRoot) {
	          var instance = current.stateNode;
	          try {
	            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
	            if (null !== hiddenCallbacks)
	              for (
	                finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
	                finishedRoot < hiddenCallbacks.length;
	                finishedRoot++
	              )
	                callCallback(hiddenCallbacks[finishedRoot], instance);
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        }
	        includeWorkInProgressEffects &&
	          flags & 64 &&
	          commitClassCallbacks(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 27:
	        commitHostSingletonAcquisition(finishedWork);
	      case 26:
	      case 5:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          null === current &&
	          flags & 4 &&
	          commitHostMount(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 12:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        break;
	      case 31:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 4 &&
	          commitActivityHydrationCallbacks(finishedRoot, finishedWork);
	        break;
	      case 13:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 4 &&
	          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseReappearLayoutEffects(
	            finishedRoot,
	            finishedWork,
	            includeWorkInProgressEffects
	          );
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 30:
	        break;
	      default:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
	  var previousCache = null;
	  null !== current &&
	    null !== current.memoizedState &&
	    null !== current.memoizedState.cachePool &&
	    (previousCache = current.memoizedState.cachePool.pool);
	  current = null;
	  null !== finishedWork.memoizedState &&
	    null !== finishedWork.memoizedState.cachePool &&
	    (current = finishedWork.memoizedState.cachePool.pool);
	  current !== previousCache &&
	    (null != current && current.refCount++,
	    null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
	  current = null;
	  null !== finishedWork.alternate &&
	    (current = finishedWork.alternate.memoizedState.cache);
	  finishedWork = finishedWork.memoizedState.cache;
	  finishedWork !== current &&
	    (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(
	  root,
	  parentFiber,
	  committedLanes,
	  committedTransitions
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveMountOnFiber(
	        root,
	        parentFiber,
	        committedLanes,
	        committedTransitions
	      ),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveMountOnFiber(
	  finishedRoot,
	  finishedWork,
	  committedLanes,
	  committedTransitions
	) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 && commitHookEffectListMount(9, finishedWork);
	      break;
	    case 1:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 3:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        ((finishedRoot = null),
	        null !== finishedWork.alternate &&
	          (finishedRoot = finishedWork.alternate.memoizedState.cache),
	        (finishedWork = finishedWork.memoizedState.cache),
	        finishedWork !== finishedRoot &&
	          (finishedWork.refCount++,
	          null != finishedRoot && releaseCache(finishedRoot)));
	      break;
	    case 12:
	      if (flags & 2048) {
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	        finishedRoot = finishedWork.stateNode;
	        try {
	          var _finishedWork$memoize2 = finishedWork.memoizedProps,
	            id = _finishedWork$memoize2.id,
	            onPostCommit = _finishedWork$memoize2.onPostCommit;
	          "function" === typeof onPostCommit &&
	            onPostCommit(
	              id,
	              null === finishedWork.alternate ? "mount" : "update",
	              finishedRoot.passiveEffectDuration,
	              -0
	            );
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      } else
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	      break;
	    case 31:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 13:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 23:
	      break;
	    case 22:
	      _finishedWork$memoize2 = finishedWork.stateNode;
	      id = finishedWork.alternate;
	      null !== finishedWork.memoizedState
	        ? _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
	        : _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : ((_finishedWork$memoize2._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              0 !== (finishedWork.subtreeFlags & 10256) || false
	            ));
	      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
	      break;
	    case 24:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	  }
	}
	function recursivelyTraverseReconnectPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  committedLanes$jscomp$0,
	  committedTransitions$jscomp$0,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects &&
	    (0 !== (parentFiber.subtreeFlags & 10256) || false);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      committedLanes = committedLanes$jscomp$0,
	      committedTransitions = committedTransitions$jscomp$0,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(8, finishedWork);
	        break;
	      case 23:
	        break;
	      case 22:
	        var instance = finishedWork.stateNode;
	        null !== finishedWork.memoizedState
	          ? instance._visibility & 2
	            ? recursivelyTraverseReconnectPassiveEffects(
	                finishedRoot,
	                finishedWork,
	                committedLanes,
	                committedTransitions,
	                includeWorkInProgressEffects
	              )
	            : recursivelyTraverseAtomicPassiveEffects(
	                finishedRoot,
	                finishedWork
	              )
	          : ((instance._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              includeWorkInProgressEffects
	            ));
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitOffscreenPassiveMountEffects(
	            finishedWork.alternate,
	            finishedWork
	          );
	        break;
	      case 24:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	        break;
	      default:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseAtomicPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var finishedRoot = finishedRoot$jscomp$0,
	        finishedWork = parentFiber,
	        flags = finishedWork.flags;
	      switch (finishedWork.tag) {
	        case 22:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitOffscreenPassiveMountEffects(
	              finishedWork.alternate,
	              finishedWork
	            );
	          break;
	        case 24:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	          break;
	        default:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	      }
	      parentFiber = parentFiber.sibling;
	    }
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(
	  parentFiber,
	  committedLanes,
	  suspendedState
	) {
	  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      accumulateSuspenseyCommitOnFiber(
	        parentFiber,
	        committedLanes,
	        suspendedState
	      ),
	        (parentFiber = parentFiber.sibling);
	}
	function accumulateSuspenseyCommitOnFiber(
	  fiber,
	  committedLanes,
	  suspendedState
	) {
	  switch (fiber.tag) {
	    case 26:
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	      fiber.flags & suspenseyCommitFlag &&
	        null !== fiber.memoizedState &&
	        suspendResource(
	          suspendedState,
	          currentHoistableRoot,
	          fiber.memoizedState,
	          fiber.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	      break;
	    case 3:
	    case 4:
	      var previousHoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	      currentHoistableRoot = previousHoistableRoot;
	      break;
	    case 22:
	      null === fiber.memoizedState &&
	        ((previousHoistableRoot = fiber.alternate),
	        null !== previousHoistableRoot &&
	        null !== previousHoistableRoot.memoizedState
	          ? ((previousHoistableRoot = suspenseyCommitFlag),
	            (suspenseyCommitFlag = 16777216),
	            recursivelyAccumulateSuspenseyCommit(
	              fiber,
	              committedLanes,
	              suspendedState
	            ),
	            (suspenseyCommitFlag = previousHoistableRoot))
	          : recursivelyAccumulateSuspenseyCommit(
	              fiber,
	              committedLanes,
	              suspendedState
	            ));
	      break;
	    default:
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	  }
	}
	function detachAlternateSiblings(parentFiber) {
	  var previousFiber = parentFiber.alternate;
	  if (
	    null !== previousFiber &&
	    ((parentFiber = previousFiber.child), null !== parentFiber)
	  ) {
	    previousFiber.child = null;
	    do
	      (previousFiber = parentFiber.sibling),
	        (parentFiber.sibling = null),
	        (parentFiber = previousFiber);
	    while (null !== parentFiber);
	  }
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveUnmountOnFiber(parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      finishedWork.flags & 2048 &&
	        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 12:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 22:
	      var instance = finishedWork.stateNode;
	      null !== finishedWork.memoizedState &&
	      instance._visibility & 2 &&
	      (null === finishedWork.return || 13 !== finishedWork.return.tag)
	        ? ((instance._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
	        : recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	  }
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    deletions = parentFiber;
	    switch (deletions.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, deletions, deletions.return);
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	        break;
	      case 22:
	        i = deletions.stateNode;
	        i._visibility & 2 &&
	          ((i._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(deletions));
	        break;
	      default:
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	  deletedSubtreeRoot,
	  nearestMountedAncestor
	) {
	  for (; null !== nextEffect; ) {
	    var fiber = nextEffect;
	    switch (fiber.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
	        break;
	      case 23:
	      case 22:
	        if (
	          null !== fiber.memoizedState &&
	          null !== fiber.memoizedState.cachePool
	        ) {
	          var cache = fiber.memoizedState.cachePool.pool;
	          null != cache && cache.refCount++;
	        }
	        break;
	      case 24:
	        releaseCache(fiber.memoizedState.cache);
	    }
	    cache = fiber.child;
	    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
	    else
	      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
	        cache = nextEffect;
	        var sibling = cache.sibling,
	          returnFiber = cache.return;
	        detachFiberAfterEffects(cache);
	        if (cache === fiber) {
	          nextEffect = null;
	          break a;
	        }
	        if (null !== sibling) {
	          sibling.return = returnFiber;
	          nextEffect = sibling;
	          break a;
	        }
	        nextEffect = returnFiber;
	      }
	  }
	}
	var DefaultAsyncDispatcher = {
	    getCacheForType: function (resourceType) {
	      var cache = readContext(CacheContext),
	        cacheForType = cache.data.get(resourceType);
	      void 0 === cacheForType &&
	        ((cacheForType = resourceType()),
	        cache.data.set(resourceType, cacheForType));
	      return cacheForType;
	    },
	    cacheSignal: function () {
	      return readContext(CacheContext).controller.signal;
	    }
	  },
	  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
	  executionContext = 0,
	  workInProgressRoot = null,
	  workInProgress = null,
	  workInProgressRootRenderLanes = 0,
	  workInProgressSuspendedReason = 0,
	  workInProgressThrownValue = null,
	  workInProgressRootDidSkipSuspendedSiblings = false,
	  workInProgressRootIsPrerendering = false,
	  workInProgressRootDidAttachPingListener = false,
	  entangledRenderLanes = 0,
	  workInProgressRootExitStatus = 0,
	  workInProgressRootSkippedLanes = 0,
	  workInProgressRootInterleavedUpdatedLanes = 0,
	  workInProgressRootPingedLanes = 0,
	  workInProgressDeferredLane = 0,
	  workInProgressSuspendedRetryLanes = 0,
	  workInProgressRootConcurrentErrors = null,
	  workInProgressRootRecoverableErrors = null,
	  workInProgressRootDidIncludeRecursiveRenderUpdate = false,
	  globalMostRecentFallbackTime = 0,
	  globalMostRecentTransitionTime = 0,
	  workInProgressRootRenderTargetTime = Infinity,
	  workInProgressTransitions = null,
	  legacyErrorBoundariesThatAlreadyFailed = null,
	  pendingEffectsStatus = 0,
	  pendingEffectsRoot = null,
	  pendingFinishedWork = null,
	  pendingEffectsLanes = 0,
	  pendingEffectsRemainingLanes = 0,
	  pendingPassiveTransitions = null,
	  pendingRecoverableErrors = null,
	  nestedUpdateCount = 0,
	  rootWithNestedUpdates = null;
	function requestUpdateLane() {
	  return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes
	    ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes
	    : null !== ReactSharedInternals.T
	      ? requestTransitionLane()
	      : resolveUpdatePriority();
	}
	function requestDeferredLane() {
	  if (0 === workInProgressDeferredLane)
	    if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
	      var lane = nextTransitionDeferredLane;
	      nextTransitionDeferredLane <<= 1;
	      0 === (nextTransitionDeferredLane & 3932160) &&
	        (nextTransitionDeferredLane = 262144);
	      workInProgressDeferredLane = lane;
	    } else workInProgressDeferredLane = 536870912;
	  lane = suspenseHandlerStackCursor.current;
	  null !== lane && (lane.flags |= 32);
	  return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root, fiber, lane) {
	  if (
	    (root === workInProgressRoot &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    prepareFreshStack(root, 0),
	      markRootSuspended(
	        root,
	        workInProgressRootRenderLanes,
	        workInProgressDeferredLane,
	        false
	      );
	  markRootUpdated$1(root, lane);
	  if (0 === (executionContext & 2) || root !== workInProgressRoot)
	    root === workInProgressRoot &&
	      (0 === (executionContext & 2) &&
	        (workInProgressRootInterleavedUpdatedLanes |= lane),
	      4 === workInProgressRootExitStatus &&
	        markRootSuspended(
	          root,
	          workInProgressRootRenderLanes,
	          workInProgressDeferredLane,
	          false
	        )),
	      ensureRootIsScheduled(root);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  var shouldTimeSlice =
	      (!forceSync &&
	        0 === (lanes & 127) &&
	        0 === (lanes & root$jscomp$0.expiredLanes)) ||
	      checkIfRootIsPrerendering(root$jscomp$0, lanes),
	    exitStatus = shouldTimeSlice
	      ? renderRootConcurrent(root$jscomp$0, lanes)
	      : renderRootSync(root$jscomp$0, lanes, true),
	    renderWasConcurrent = shouldTimeSlice;
	  do {
	    if (0 === exitStatus) {
	      workInProgressRootIsPrerendering &&
	        !shouldTimeSlice &&
	        markRootSuspended(root$jscomp$0, lanes, 0, false);
	      break;
	    } else {
	      forceSync = root$jscomp$0.current.alternate;
	      if (
	        renderWasConcurrent &&
	        !isRenderConsistentWithExternalStores(forceSync)
	      ) {
	        exitStatus = renderRootSync(root$jscomp$0, lanes, false);
	        renderWasConcurrent = false;
	        continue;
	      }
	      if (2 === exitStatus) {
	        renderWasConcurrent = lanes;
	        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
	          var JSCompiler_inline_result = 0;
	        else
	          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
	            (JSCompiler_inline_result =
	              0 !== JSCompiler_inline_result
	                ? JSCompiler_inline_result
	                : JSCompiler_inline_result & 536870912
	                  ? 536870912
	                  : 0);
	        if (0 !== JSCompiler_inline_result) {
	          lanes = JSCompiler_inline_result;
	          a: {
	            var root = root$jscomp$0;
	            exitStatus = workInProgressRootConcurrentErrors;
	            var wasRootDehydrated = root.current.memoizedState.isDehydrated;
	            wasRootDehydrated &&
	              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
	            JSCompiler_inline_result = renderRootSync(
	              root,
	              JSCompiler_inline_result,
	              false
	            );
	            if (2 !== JSCompiler_inline_result) {
	              if (
	                workInProgressRootDidAttachPingListener &&
	                !wasRootDehydrated
	              ) {
	                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
	                workInProgressRootInterleavedUpdatedLanes |=
	                  renderWasConcurrent;
	                exitStatus = 4;
	                break a;
	              }
	              renderWasConcurrent = workInProgressRootRecoverableErrors;
	              workInProgressRootRecoverableErrors = exitStatus;
	              null !== renderWasConcurrent &&
	                (null === workInProgressRootRecoverableErrors
	                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
	                  : workInProgressRootRecoverableErrors.push.apply(
	                      workInProgressRootRecoverableErrors,
	                      renderWasConcurrent
	                    ));
	            }
	            exitStatus = JSCompiler_inline_result;
	          }
	          renderWasConcurrent = false;
	          if (2 !== exitStatus) continue;
	        }
	      }
	      if (1 === exitStatus) {
	        prepareFreshStack(root$jscomp$0, 0);
	        markRootSuspended(root$jscomp$0, lanes, 0, true);
	        break;
	      }
	      a: {
	        shouldTimeSlice = root$jscomp$0;
	        renderWasConcurrent = exitStatus;
	        switch (renderWasConcurrent) {
	          case 0:
	          case 1:
	            throw Error(formatProdErrorMessage(345));
	          case 4:
	            if ((lanes & 4194048) !== lanes) break;
	          case 6:
	            markRootSuspended(
	              shouldTimeSlice,
	              lanes,
	              workInProgressDeferredLane,
	              !workInProgressRootDidSkipSuspendedSiblings
	            );
	            break a;
	          case 2:
	            workInProgressRootRecoverableErrors = null;
	            break;
	          case 3:
	          case 5:
	            break;
	          default:
	            throw Error(formatProdErrorMessage(329));
	        }
	        if (
	          (lanes & 62914560) === lanes &&
	          ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
	          10 < exitStatus)
	        ) {
	          markRootSuspended(
	            shouldTimeSlice,
	            lanes,
	            workInProgressDeferredLane,
	            !workInProgressRootDidSkipSuspendedSiblings
	          );
	          if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
	          pendingEffectsLanes = lanes;
	          shouldTimeSlice.timeoutHandle = scheduleTimeout(
	            commitRootWhenReady.bind(
	              null,
	              shouldTimeSlice,
	              forceSync,
	              workInProgressRootRecoverableErrors,
	              workInProgressTransitions,
	              workInProgressRootDidIncludeRecursiveRenderUpdate,
	              lanes,
	              workInProgressDeferredLane,
	              workInProgressRootInterleavedUpdatedLanes,
	              workInProgressSuspendedRetryLanes,
	              workInProgressRootDidSkipSuspendedSiblings,
	              renderWasConcurrent,
	              "Throttled",
	              -0,
	              0
	            ),
	            exitStatus
	          );
	          break a;
	        }
	        commitRootWhenReady(
	          shouldTimeSlice,
	          forceSync,
	          workInProgressRootRecoverableErrors,
	          workInProgressTransitions,
	          workInProgressRootDidIncludeRecursiveRenderUpdate,
	          lanes,
	          workInProgressDeferredLane,
	          workInProgressRootInterleavedUpdatedLanes,
	          workInProgressSuspendedRetryLanes,
	          workInProgressRootDidSkipSuspendedSiblings,
	          renderWasConcurrent,
	          null,
	          -0,
	          0
	        );
	      }
	    }
	    break;
	  } while (1);
	  ensureRootIsScheduled(root$jscomp$0);
	}
	function commitRootWhenReady(
	  root,
	  finishedWork,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  lanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes,
	  didSkipSuspendedSiblings,
	  exitStatus,
	  suspendedCommitReason,
	  completedRenderStartTime,
	  completedRenderEndTime
	) {
	  root.timeoutHandle = -1;
	  suspendedCommitReason = finishedWork.subtreeFlags;
	  if (
	    suspendedCommitReason & 8192 ||
	    16785408 === (suspendedCommitReason & 16785408)
	  ) {
	    suspendedCommitReason = {
	      stylesheets: null,
	      count: 0,
	      imgCount: 0,
	      imgBytes: 0,
	      suspenseyImages: [],
	      waitingForImages: true,
	      waitingForViewTransition: false,
	      unsuspend: noop$1
	    };
	    accumulateSuspenseyCommitOnFiber(
	      finishedWork,
	      lanes,
	      suspendedCommitReason
	    );
	    var timeoutOffset =
	      (lanes & 62914560) === lanes
	        ? globalMostRecentFallbackTime - now()
	        : (lanes & 4194048) === lanes
	          ? globalMostRecentTransitionTime - now()
	          : 0;
	    timeoutOffset = waitForCommitToBeReady(
	      suspendedCommitReason,
	      timeoutOffset
	    );
	    if (null !== timeoutOffset) {
	      pendingEffectsLanes = lanes;
	      root.cancelPendingCommit = timeoutOffset(
	        commitRoot.bind(
	          null,
	          root,
	          finishedWork,
	          lanes,
	          recoverableErrors,
	          transitions,
	          didIncludeRenderPhaseUpdate,
	          spawnedLane,
	          updatedLanes,
	          suspendedRetryLanes,
	          exitStatus,
	          suspendedCommitReason,
	          null,
	          completedRenderStartTime,
	          completedRenderEndTime
	        )
	      );
	      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
	      return;
	    }
	  }
	  commitRoot(
	    root,
	    finishedWork,
	    lanes,
	    recoverableErrors,
	    transitions,
	    didIncludeRenderPhaseUpdate,
	    spawnedLane,
	    updatedLanes,
	    suspendedRetryLanes
	  );
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
	  for (var node = finishedWork; ; ) {
	    var tag = node.tag;
	    if (
	      (0 === tag || 11 === tag || 15 === tag) &&
	      node.flags & 16384 &&
	      ((tag = node.updateQueue),
	      null !== tag && ((tag = tag.stores), null !== tag))
	    )
	      for (var i = 0; i < tag.length; i++) {
	        var check = tag[i],
	          getSnapshot = check.getSnapshot;
	        check = check.value;
	        try {
	          if (!objectIs(getSnapshot(), check)) return !1;
	        } catch (error) {
	          return false;
	        }
	      }
	    tag = node.child;
	    if (node.subtreeFlags & 16384 && null !== tag)
	      (tag.return = node), (node = tag);
	    else {
	      if (node === finishedWork) break;
	      for (; null === node.sibling; ) {
	        if (null === node.return || node.return === finishedWork) return true;
	        node = node.return;
	      }
	      node.sibling.return = node.return;
	      node = node.sibling;
	    }
	  }
	  return true;
	}
	function markRootSuspended(
	  root,
	  suspendedLanes,
	  spawnedLane,
	  didAttemptEntireTree
	) {
	  suspendedLanes &= ~workInProgressRootPingedLanes;
	  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
	  root.suspendedLanes |= suspendedLanes;
	  root.pingedLanes &= ~suspendedLanes;
	  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
	  didAttemptEntireTree = root.expirationTimes;
	  for (var lanes = suspendedLanes; 0 < lanes; ) {
	    var index$6 = 31 - clz32(lanes),
	      lane = 1 << index$6;
	    didAttemptEntireTree[index$6] = -1;
	    lanes &= ~lane;
	  }
	  0 !== spawnedLane &&
	    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
	  return 0 === (executionContext & 6)
	    ? (flushSyncWorkAcrossRoots_impl(0), false)
	    : true;
	}
	function resetWorkInProgressStack() {
	  if (null !== workInProgress) {
	    if (0 === workInProgressSuspendedReason)
	      var interruptedWork = workInProgress.return;
	    else
	      (interruptedWork = workInProgress),
	        (lastContextDependency = currentlyRenderingFiber$1 = null),
	        resetHooksOnUnwind(interruptedWork),
	        (thenableState$1 = null),
	        (thenableIndexCounter$1 = 0),
	        (interruptedWork = workInProgress);
	    for (; null !== interruptedWork; )
	      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
	        (interruptedWork = interruptedWork.return);
	    workInProgress = null;
	  }
	}
	function prepareFreshStack(root, lanes) {
	  var timeoutHandle = root.timeoutHandle;
	  -1 !== timeoutHandle &&
	    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
	  timeoutHandle = root.cancelPendingCommit;
	  null !== timeoutHandle &&
	    ((root.cancelPendingCommit = null), timeoutHandle());
	  pendingEffectsLanes = 0;
	  resetWorkInProgressStack();
	  workInProgressRoot = root;
	  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
	  workInProgressRootRenderLanes = lanes;
	  workInProgressSuspendedReason = 0;
	  workInProgressThrownValue = null;
	  workInProgressRootDidSkipSuspendedSiblings = false;
	  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
	  workInProgressRootDidAttachPingListener = false;
	  workInProgressSuspendedRetryLanes =
	    workInProgressDeferredLane =
	    workInProgressRootPingedLanes =
	    workInProgressRootInterleavedUpdatedLanes =
	    workInProgressRootSkippedLanes =
	    workInProgressRootExitStatus =
	      0;
	  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
	    null;
	  workInProgressRootDidIncludeRecursiveRenderUpdate = false;
	  0 !== (lanes & 8) && (lanes |= lanes & 32);
	  var allEntangledLanes = root.entangledLanes;
	  if (0 !== allEntangledLanes)
	    for (
	      root = root.entanglements, allEntangledLanes &= lanes;
	      0 < allEntangledLanes;

	    ) {
	      var index$4 = 31 - clz32(allEntangledLanes),
	        lane = 1 << index$4;
	      lanes |= root[index$4];
	      allEntangledLanes &= ~lane;
	    }
	  entangledRenderLanes = lanes;
	  finishQueueingConcurrentUpdates();
	  return timeoutHandle;
	}
	function handleThrow(root, thrownValue) {
	  currentlyRenderingFiber = null;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  thrownValue === SuspenseException || thrownValue === SuspenseActionException
	    ? ((thrownValue = getSuspendedThenable()),
	      (workInProgressSuspendedReason = 3))
	    : thrownValue === SuspenseyCommitException
	      ? ((thrownValue = getSuspendedThenable()),
	        (workInProgressSuspendedReason = 4))
	      : (workInProgressSuspendedReason =
	          thrownValue === SelectiveHydrationException
	            ? 8
	            : null !== thrownValue &&
	                "object" === typeof thrownValue &&
	                "function" === typeof thrownValue.then
	              ? 6
	              : 1);
	  workInProgressThrownValue = thrownValue;
	  null === workInProgress &&
	    ((workInProgressRootExitStatus = 1),
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    ));
	}
	function shouldRemainOnPreviousScreen() {
	  var handler = suspenseHandlerStackCursor.current;
	  return null === handler
	    ? true
	    : (workInProgressRootRenderLanes & 4194048) ===
	        workInProgressRootRenderLanes
	      ? null === shellBoundary
	        ? true
	        : false
	      : (workInProgressRootRenderLanes & 62914560) ===
	            workInProgressRootRenderLanes ||
	          0 !== (workInProgressRootRenderLanes & 536870912)
	        ? handler === shellBoundary
	        : false;
	}
	function pushDispatcher() {
	  var prevDispatcher = ReactSharedInternals.H;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
	  var prevAsyncDispatcher = ReactSharedInternals.A;
	  ReactSharedInternals.A = DefaultAsyncDispatcher;
	  return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
	  workInProgressRootExitStatus = 4;
	  workInProgressRootDidSkipSuspendedSiblings ||
	    ((workInProgressRootRenderLanes & 4194048) !==
	      workInProgressRootRenderLanes &&
	      null !== suspenseHandlerStackCursor.current) ||
	    (workInProgressRootIsPrerendering = true);
	  (0 === (workInProgressRootSkippedLanes & 134217727) &&
	    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
	    null === workInProgressRoot ||
	    markRootSuspended(
	      workInProgressRoot,
	      workInProgressRootRenderLanes,
	      workInProgressDeferredLane,
	      false
	    );
	}
	function renderRootSync(root, lanes, shouldYieldForPrerendering) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
	    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
	  lanes = false;
	  var exitStatus = workInProgressRootExitStatus;
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        var unitOfWork = workInProgress,
	          thrownValue = workInProgressThrownValue;
	        switch (workInProgressSuspendedReason) {
	          case 8:
	            resetWorkInProgressStack();
	            exitStatus = 6;
	            break a;
	          case 3:
	          case 2:
	          case 9:
	          case 6:
	            null === suspenseHandlerStackCursor.current && (lanes = !0);
	            var reason = workInProgressSuspendedReason;
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	            if (
	              shouldYieldForPrerendering &&
	              workInProgressRootIsPrerendering
	            ) {
	              exitStatus = 0;
	              break a;
	            }
	            break;
	          default:
	            (reason = workInProgressSuspendedReason),
	              (workInProgressSuspendedReason = 0),
	              (workInProgressThrownValue = null),
	              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	        }
	      }
	      workLoopSync();
	      exitStatus = workInProgressRootExitStatus;
	      break;
	    } catch (thrownValue$165) {
	      handleThrow(root, thrownValue$165);
	    }
	  while (1);
	  lanes && root.shellSuspendCounter++;
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  executionContext = prevExecutionContext;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  null === workInProgress &&
	    ((workInProgressRoot = null),
	    (workInProgressRootRenderLanes = 0),
	    finishQueueingConcurrentUpdates());
	  return exitStatus;
	}
	function workLoopSync() {
	  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root, lanes) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes
	    ? ((workInProgressTransitions = null),
	      (workInProgressRootRenderTargetTime = now() + 500),
	      prepareFreshStack(root, lanes))
	    : (workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
	        root,
	        lanes
	      ));
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        lanes = workInProgress;
	        var thrownValue = workInProgressThrownValue;
	        b: switch (workInProgressSuspendedReason) {
	          case 1:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
	            break;
	          case 2:
	          case 9:
	            if (isThenableResolved(thrownValue)) {
	              workInProgressSuspendedReason = 0;
	              workInProgressThrownValue = null;
	              replaySuspendedUnitOfWork(lanes);
	              break;
	            }
	            lanes = function () {
	              (2 !== workInProgressSuspendedReason &&
	                9 !== workInProgressSuspendedReason) ||
	                workInProgressRoot !== root ||
	                (workInProgressSuspendedReason = 7);
	              ensureRootIsScheduled(root);
	            };
	            thrownValue.then(lanes, lanes);
	            break a;
	          case 3:
	            workInProgressSuspendedReason = 7;
	            break a;
	          case 4:
	            workInProgressSuspendedReason = 5;
	            break a;
	          case 7:
	            isThenableResolved(thrownValue)
	              ? ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                replaySuspendedUnitOfWork(lanes))
	              : ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
	            break;
	          case 5:
	            var resource = null;
	            switch (workInProgress.tag) {
	              case 26:
	                resource = workInProgress.memoizedState;
	              case 5:
	              case 27:
	                var hostFiber = workInProgress;
	                if (
	                  resource
	                    ? preloadResource(resource)
	                    : hostFiber.stateNode.complete
	                ) {
	                  workInProgressSuspendedReason = 0;
	                  workInProgressThrownValue = null;
	                  var sibling = hostFiber.sibling;
	                  if (null !== sibling) workInProgress = sibling;
	                  else {
	                    var returnFiber = hostFiber.return;
	                    null !== returnFiber
	                      ? ((workInProgress = returnFiber),
	                        completeUnitOfWork(returnFiber))
	                      : (workInProgress = null);
	                  }
	                  break b;
	                }
	            }
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
	            break;
	          case 6:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
	            break;
	          case 8:
	            resetWorkInProgressStack();
	            workInProgressRootExitStatus = 6;
	            break a;
	          default:
	            throw Error(formatProdErrorMessage(462));
	        }
	      }
	      workLoopConcurrentByScheduler();
	      break;
	    } catch (thrownValue$167) {
	      handleThrow(root, thrownValue$167);
	    }
	  while (1);
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  executionContext = prevExecutionContext;
	  if (null !== workInProgress) return 0;
	  workInProgressRoot = null;
	  workInProgressRootRenderLanes = 0;
	  finishQueueingConcurrentUpdates();
	  return workInProgressRootExitStatus;
	}
	function workLoopConcurrentByScheduler() {
	  for (; null !== workInProgress && !shouldYield(); )
	    performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
	  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
	  var next = unitOfWork;
	  var current = next.alternate;
	  switch (next.tag) {
	    case 15:
	    case 0:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type,
	        void 0,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 11:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type.render,
	        next.ref,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 5:
	      resetHooksOnUnwind(next);
	    default:
	      unwindInterruptedWork(current, next),
	        (next = workInProgress =
	          resetWorkInProgress(next, entangledRenderLanes)),
	        (next = beginWork(current, next, entangledRenderLanes));
	  }
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function throwAndUnwindWorkLoop(
	  root,
	  unitOfWork,
	  thrownValue,
	  suspendedReason
	) {
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  resetHooksOnUnwind(unitOfWork);
	  thenableState$1 = null;
	  thenableIndexCounter$1 = 0;
	  var returnFiber = unitOfWork.return;
	  try {
	    if (
	      throwException(
	        root,
	        returnFiber,
	        unitOfWork,
	        thrownValue,
	        workInProgressRootRenderLanes
	      )
	    ) {
	      workInProgressRootExitStatus = 1;
	      logUncaughtError(
	        root,
	        createCapturedValueAtFiber(thrownValue, root.current)
	      );
	      workInProgress = null;
	      return;
	    }
	  } catch (error) {
	    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
	    workInProgressRootExitStatus = 1;
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    );
	    workInProgress = null;
	    return;
	  }
	  if (unitOfWork.flags & 32768) {
	    if (isHydrating || 1 === suspendedReason) root = true;
	    else if (
	      workInProgressRootIsPrerendering ||
	      0 !== (workInProgressRootRenderLanes & 536870912)
	    )
	      root = false;
	    else if (
	      ((workInProgressRootDidSkipSuspendedSiblings = root = true),
	      2 === suspendedReason ||
	        9 === suspendedReason ||
	        3 === suspendedReason ||
	        6 === suspendedReason)
	    )
	      (suspendedReason = suspenseHandlerStackCursor.current),
	        null !== suspendedReason &&
	          13 === suspendedReason.tag &&
	          (suspendedReason.flags |= 16384);
	    unwindUnitOfWork(unitOfWork, root);
	  } else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
	  var completedWork = unitOfWork;
	  do {
	    if (0 !== (completedWork.flags & 32768)) {
	      unwindUnitOfWork(
	        completedWork,
	        workInProgressRootDidSkipSuspendedSiblings
	      );
	      return;
	    }
	    unitOfWork = completedWork.return;
	    var next = completeWork(
	      completedWork.alternate,
	      completedWork,
	      entangledRenderLanes
	    );
	    if (null !== next) {
	      workInProgress = next;
	      return;
	    }
	    completedWork = completedWork.sibling;
	    if (null !== completedWork) {
	      workInProgress = completedWork;
	      return;
	    }
	    workInProgress = completedWork = unitOfWork;
	  } while (null !== completedWork);
	  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
	  do {
	    var next = unwindWork(unitOfWork.alternate, unitOfWork);
	    if (null !== next) {
	      next.flags &= 32767;
	      workInProgress = next;
	      return;
	    }
	    next = unitOfWork.return;
	    null !== next &&
	      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
	    if (
	      !skipSiblings &&
	      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
	    ) {
	      workInProgress = unitOfWork;
	      return;
	    }
	    workInProgress = unitOfWork = next;
	  } while (null !== unitOfWork);
	  workInProgressRootExitStatus = 6;
	  workInProgress = null;
	}
	function commitRoot(
	  root,
	  finishedWork,
	  lanes,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  root.cancelPendingCommit = null;
	  do flushPendingEffects();
	  while (0 !== pendingEffectsStatus);
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  if (null !== finishedWork) {
	    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
	    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
	    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
	    markRootFinished(
	      root,
	      lanes,
	      didIncludeRenderPhaseUpdate,
	      spawnedLane,
	      updatedLanes,
	      suspendedRetryLanes
	    );
	    root === workInProgressRoot &&
	      ((workInProgress = workInProgressRoot = null),
	      (workInProgressRootRenderLanes = 0));
	    pendingFinishedWork = finishedWork;
	    pendingEffectsRoot = root;
	    pendingEffectsLanes = lanes;
	    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
	    pendingPassiveTransitions = transitions;
	    pendingRecoverableErrors = recoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? ((root.callbackNode = null),
	        (root.callbackPriority = 0),
	        scheduleCallback$1(NormalPriority$1, function () {
	          flushPassiveEffects();
	          return null;
	        }))
	      : ((root.callbackNode = null), (root.callbackPriority = 0));
	    recoverableErrors = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
	      recoverableErrors = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      transitions = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      spawnedLane = executionContext;
	      executionContext |= 4;
	      try {
	        commitBeforeMutationEffects(root, finishedWork, lanes);
	      } finally {
	        (executionContext = spawnedLane),
	          (ReactDOMSharedInternals.p = transitions),
	          (ReactSharedInternals.T = recoverableErrors);
	      }
	    }
	    pendingEffectsStatus = 1;
	    flushMutationEffects();
	    flushLayoutEffects();
	    flushSpawnedWork();
	  }
	}
	function flushMutationEffects() {
	  if (1 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
	      rootMutationHasEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitMutationEffectsOnFiber(finishedWork, root);
	        var priorSelectionInformation = selectionInformation,
	          curFocusedElem = getActiveElementDeep(root.containerInfo),
	          priorFocusedElem = priorSelectionInformation.focusedElem,
	          priorSelectionRange = priorSelectionInformation.selectionRange;
	        if (
	          curFocusedElem !== priorFocusedElem &&
	          priorFocusedElem &&
	          priorFocusedElem.ownerDocument &&
	          containsNode(
	            priorFocusedElem.ownerDocument.documentElement,
	            priorFocusedElem
	          )
	        ) {
	          if (
	            null !== priorSelectionRange &&
	            hasSelectionCapabilities(priorFocusedElem)
	          ) {
	            var start = priorSelectionRange.start,
	              end = priorSelectionRange.end;
	            void 0 === end && (end = start);
	            if ("selectionStart" in priorFocusedElem)
	              (priorFocusedElem.selectionStart = start),
	                (priorFocusedElem.selectionEnd = Math.min(
	                  end,
	                  priorFocusedElem.value.length
	                ));
	            else {
	              var doc = priorFocusedElem.ownerDocument || document,
	                win = (doc && doc.defaultView) || window;
	              if (win.getSelection) {
	                var selection = win.getSelection(),
	                  length = priorFocusedElem.textContent.length,
	                  start$jscomp$0 = Math.min(priorSelectionRange.start, length),
	                  end$jscomp$0 =
	                    void 0 === priorSelectionRange.end
	                      ? start$jscomp$0
	                      : Math.min(priorSelectionRange.end, length);
	                !selection.extend &&
	                  start$jscomp$0 > end$jscomp$0 &&
	                  ((curFocusedElem = end$jscomp$0),
	                  (end$jscomp$0 = start$jscomp$0),
	                  (start$jscomp$0 = curFocusedElem));
	                var startMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    start$jscomp$0
	                  ),
	                  endMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    end$jscomp$0
	                  );
	                if (
	                  startMarker &&
	                  endMarker &&
	                  (1 !== selection.rangeCount ||
	                    selection.anchorNode !== startMarker.node ||
	                    selection.anchorOffset !== startMarker.offset ||
	                    selection.focusNode !== endMarker.node ||
	                    selection.focusOffset !== endMarker.offset)
	                ) {
	                  var range = doc.createRange();
	                  range.setStart(startMarker.node, startMarker.offset);
	                  selection.removeAllRanges();
	                  start$jscomp$0 > end$jscomp$0
	                    ? (selection.addRange(range),
	                      selection.extend(endMarker.node, endMarker.offset))
	                    : (range.setEnd(endMarker.node, endMarker.offset),
	                      selection.addRange(range));
	                }
	              }
	            }
	          }
	          doc = [];
	          for (
	            selection = priorFocusedElem;
	            (selection = selection.parentNode);

	          )
	            1 === selection.nodeType &&
	              doc.push({
	                element: selection,
	                left: selection.scrollLeft,
	                top: selection.scrollTop
	              });
	          "function" === typeof priorFocusedElem.focus &&
	            priorFocusedElem.focus();
	          for (
	            priorFocusedElem = 0;
	            priorFocusedElem < doc.length;
	            priorFocusedElem++
	          ) {
	            var info = doc[priorFocusedElem];
	            info.element.scrollLeft = info.left;
	            info.element.scrollTop = info.top;
	          }
	        }
	        _enabled = !!eventsEnabled;
	        selectionInformation = eventsEnabled = null;
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootMutationHasEffect);
	      }
	    }
	    root.current = finishedWork;
	    pendingEffectsStatus = 2;
	  }
	}
	function flushLayoutEffects() {
	  if (2 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
	    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
	      rootHasLayoutEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootHasLayoutEffect);
	      }
	    }
	    pendingEffectsStatus = 3;
	  }
	}
	function flushSpawnedWork() {
	  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    requestPaint();
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      lanes = pendingEffectsLanes,
	      recoverableErrors = pendingRecoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? (pendingEffectsStatus = 5)
	      : ((pendingEffectsStatus = 0),
	        (pendingFinishedWork = pendingEffectsRoot = null),
	        releaseRootPooledCache(root, root.pendingLanes));
	    var remainingLanes = root.pendingLanes;
	    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
	    lanesToEventPriority(lanes);
	    finishedWork = finishedWork.stateNode;
	    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
	      try {
	        injectedHook.onCommitFiberRoot(
	          rendererID,
	          finishedWork,
	          void 0,
	          128 === (finishedWork.current.flags & 128)
	        );
	      } catch (err) {}
	    if (null !== recoverableErrors) {
	      finishedWork = ReactSharedInternals.T;
	      remainingLanes = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      ReactSharedInternals.T = null;
	      try {
	        for (
	          var onRecoverableError = root.onRecoverableError, i = 0;
	          i < recoverableErrors.length;
	          i++
	        ) {
	          var recoverableError = recoverableErrors[i];
	          onRecoverableError(recoverableError.value, {
	            componentStack: recoverableError.stack
	          });
	        }
	      } finally {
	        (ReactSharedInternals.T = finishedWork),
	          (ReactDOMSharedInternals.p = remainingLanes);
	      }
	    }
	    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
	    ensureRootIsScheduled(root);
	    remainingLanes = root.pendingLanes;
	    0 !== (lanes & 261930) && 0 !== (remainingLanes & 42)
	      ? root === rootWithNestedUpdates
	        ? nestedUpdateCount++
	        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
	      : (nestedUpdateCount = 0);
	    flushSyncWorkAcrossRoots_impl(0);
	  }
	}
	function releaseRootPooledCache(root, remainingLanes) {
	  0 === (root.pooledCacheLanes &= remainingLanes) &&
	    ((remainingLanes = root.pooledCache),
	    null != remainingLanes &&
	      ((root.pooledCache = null), releaseCache(remainingLanes)));
	}
	function flushPendingEffects() {
	  flushMutationEffects();
	  flushLayoutEffects();
	  flushSpawnedWork();
	  return flushPassiveEffects();
	}
	function flushPassiveEffects() {
	  if (5 !== pendingEffectsStatus) return false;
	  var root = pendingEffectsRoot,
	    remainingLanes = pendingEffectsRemainingLanes;
	  pendingEffectsRemainingLanes = 0;
	  var renderPriority = lanesToEventPriority(pendingEffectsLanes),
	    prevTransition = ReactSharedInternals.T,
	    previousPriority = ReactDOMSharedInternals.p;
	  try {
	    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
	    ReactSharedInternals.T = null;
	    renderPriority = pendingPassiveTransitions;
	    pendingPassiveTransitions = null;
	    var root$jscomp$0 = pendingEffectsRoot,
	      lanes = pendingEffectsLanes;
	    pendingEffectsStatus = 0;
	    pendingFinishedWork = pendingEffectsRoot = null;
	    pendingEffectsLanes = 0;
	    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
	    var prevExecutionContext = executionContext;
	    executionContext |= 4;
	    commitPassiveUnmountOnFiber(root$jscomp$0.current);
	    commitPassiveMountOnFiber(
	      root$jscomp$0,
	      root$jscomp$0.current,
	      lanes,
	      renderPriority
	    );
	    executionContext = prevExecutionContext;
	    flushSyncWorkAcrossRoots_impl(0, !1);
	    if (
	      injectedHook &&
	      "function" === typeof injectedHook.onPostCommitFiberRoot
	    )
	      try {
	        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
	      } catch (err) {}
	    return !0;
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition),
	      releaseRootPooledCache(root, remainingLanes);
	  }
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
	  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
	  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
	  null !== rootFiber &&
	    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
	  if (3 === sourceFiber.tag)
	    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
	  else
	    for (; null !== nearestMountedAncestor; ) {
	      if (3 === nearestMountedAncestor.tag) {
	        captureCommitPhaseErrorOnRoot(
	          nearestMountedAncestor,
	          sourceFiber,
	          error
	        );
	        break;
	      } else if (1 === nearestMountedAncestor.tag) {
	        var instance = nearestMountedAncestor.stateNode;
	        if (
	          "function" ===
	            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
	          ("function" === typeof instance.componentDidCatch &&
	            (null === legacyErrorBoundariesThatAlreadyFailed ||
	              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
	        ) {
	          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	          error = createClassErrorUpdate(2);
	          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
	          null !== instance &&
	            (initializeClassErrorUpdate(
	              error,
	              instance,
	              nearestMountedAncestor,
	              sourceFiber
	            ),
	            markRootUpdated$1(instance, 2),
	            ensureRootIsScheduled(instance));
	          break;
	        }
	      }
	      nearestMountedAncestor = nearestMountedAncestor.return;
	    }
	}
	function attachPingListener(root, wakeable, lanes) {
	  var pingCache = root.pingCache;
	  if (null === pingCache) {
	    pingCache = root.pingCache = new PossiblyWeakMap();
	    var threadIDs = new Set();
	    pingCache.set(wakeable, threadIDs);
	  } else
	    (threadIDs = pingCache.get(wakeable)),
	      void 0 === threadIDs &&
	        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
	  threadIDs.has(lanes) ||
	    ((workInProgressRootDidAttachPingListener = true),
	    threadIDs.add(lanes),
	    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
	    wakeable.then(root, root));
	}
	function pingSuspendedRoot(root, wakeable, pingedLanes) {
	  var pingCache = root.pingCache;
	  null !== pingCache && pingCache.delete(wakeable);
	  root.pingedLanes |= root.suspendedLanes & pingedLanes;
	  root.warmLanes &= ~pingedLanes;
	  workInProgressRoot === root &&
	    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
	    (4 === workInProgressRootExitStatus ||
	    (3 === workInProgressRootExitStatus &&
	      (workInProgressRootRenderLanes & 62914560) ===
	        workInProgressRootRenderLanes &&
	      300 > now() - globalMostRecentFallbackTime)
	      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
	      : (workInProgressRootPingedLanes |= pingedLanes),
	    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
	      (workInProgressSuspendedRetryLanes = 0));
	  ensureRootIsScheduled(root);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
	  0 === retryLane && (retryLane = claimNextRetryLane());
	  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
	  null !== boundaryFiber &&
	    (markRootUpdated$1(boundaryFiber, retryLane),
	    ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
	  var suspenseState = boundaryFiber.memoizedState,
	    retryLane = 0;
	  null !== suspenseState && (retryLane = suspenseState.retryLane);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
	  var retryLane = 0;
	  switch (boundaryFiber.tag) {
	    case 31:
	    case 13:
	      var retryCache = boundaryFiber.stateNode;
	      var suspenseState = boundaryFiber.memoizedState;
	      null !== suspenseState && (retryLane = suspenseState.retryLane);
	      break;
	    case 19:
	      retryCache = boundaryFiber.stateNode;
	      break;
	    case 22:
	      retryCache = boundaryFiber.stateNode._retryCache;
	      break;
	    default:
	      throw Error(formatProdErrorMessage(314));
	  }
	  null !== retryCache && retryCache.delete(wakeable);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
	  return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null,
	  lastScheduledRoot = null,
	  didScheduleMicrotask = false,
	  mightHavePendingSyncWork = false,
	  isFlushingWork = false,
	  currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root) {
	  root !== lastScheduledRoot &&
	    null === root.next &&
	    (null === lastScheduledRoot
	      ? (firstScheduledRoot = lastScheduledRoot = root)
	      : (lastScheduledRoot = lastScheduledRoot.next = root));
	  mightHavePendingSyncWork = true;
	  didScheduleMicrotask ||
	    ((didScheduleMicrotask = true), scheduleImmediateRootScheduleTask());
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
	  if (!isFlushingWork && mightHavePendingSyncWork) {
	    isFlushingWork = true;
	    do {
	      var didPerformSomeWork = false;
	      for (var root$170 = firstScheduledRoot; null !== root$170; ) {
	        if (0 !== syncTransitionLanes) {
	            var pendingLanes = root$170.pendingLanes;
	            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
	            else {
	              var suspendedLanes = root$170.suspendedLanes,
	                pingedLanes = root$170.pingedLanes;
	              JSCompiler_inline_result =
	                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
	              JSCompiler_inline_result &=
	                pendingLanes & ~(suspendedLanes & ~pingedLanes);
	              JSCompiler_inline_result =
	                JSCompiler_inline_result & 201326741
	                  ? (JSCompiler_inline_result & 201326741) | 1
	                  : JSCompiler_inline_result
	                    ? JSCompiler_inline_result | 2
	                    : 0;
	            }
	            0 !== JSCompiler_inline_result &&
	              ((didPerformSomeWork = true),
	              performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
	          } else
	            (JSCompiler_inline_result = workInProgressRootRenderLanes),
	              (JSCompiler_inline_result = getNextLanes(
	                root$170,
	                root$170 === workInProgressRoot ? JSCompiler_inline_result : 0,
	                null !== root$170.cancelPendingCommit ||
	                  -1 !== root$170.timeoutHandle
	              )),
	              0 === (JSCompiler_inline_result & 3) ||
	                checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) ||
	                ((didPerformSomeWork = true),
	                performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
	        root$170 = root$170.next;
	      }
	    } while (didPerformSomeWork);
	    isFlushingWork = false;
	  }
	}
	function processRootScheduleInImmediateTask() {
	  processRootScheduleInMicrotask();
	}
	function processRootScheduleInMicrotask() {
	  mightHavePendingSyncWork = didScheduleMicrotask = false;
	  var syncTransitionLanes = 0;
	  0 !== currentEventTransitionLane &&
	    shouldAttemptEagerTransition() &&
	    (syncTransitionLanes = currentEventTransitionLane);
	  for (
	    var currentTime = now(), prev = null, root = firstScheduledRoot;
	    null !== root;

	  ) {
	    var next = root.next,
	      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
	    if (0 === nextLanes)
	      (root.next = null),
	        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
	        null === next && (lastScheduledRoot = prev);
	    else if (
	      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
	    )
	      mightHavePendingSyncWork = true;
	    root = next;
	  }
	  (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus) ||
	    flushSyncWorkAcrossRoots_impl(syncTransitionLanes);
	  0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
	}
	function scheduleTaskForRootDuringMicrotask(root, currentTime) {
	  for (
	    var suspendedLanes = root.suspendedLanes,
	      pingedLanes = root.pingedLanes,
	      expirationTimes = root.expirationTimes,
	      lanes = root.pendingLanes & -62914561;
	    0 < lanes;

	  ) {
	    var index$5 = 31 - clz32(lanes),
	      lane = 1 << index$5,
	      expirationTime = expirationTimes[index$5];
	    if (-1 === expirationTime) {
	      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
	        expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
	    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
	    lanes &= ~lane;
	  }
	  currentTime = workInProgressRoot;
	  suspendedLanes = workInProgressRootRenderLanes;
	  suspendedLanes = getNextLanes(
	    root,
	    root === currentTime ? suspendedLanes : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  pingedLanes = root.callbackNode;
	  if (
	    0 === suspendedLanes ||
	    (root === currentTime &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    return (
	      null !== pingedLanes &&
	        null !== pingedLanes &&
	        cancelCallback$1(pingedLanes),
	      (root.callbackNode = null),
	      (root.callbackPriority = 0)
	    );
	  if (
	    0 === (suspendedLanes & 3) ||
	    checkIfRootIsPrerendering(root, suspendedLanes)
	  ) {
	    currentTime = suspendedLanes & -suspendedLanes;
	    if (currentTime === root.callbackPriority) return currentTime;
	    null !== pingedLanes && cancelCallback$1(pingedLanes);
	    switch (lanesToEventPriority(suspendedLanes)) {
	      case 2:
	      case 8:
	        suspendedLanes = UserBlockingPriority;
	        break;
	      case 32:
	        suspendedLanes = NormalPriority$1;
	        break;
	      case 268435456:
	        suspendedLanes = IdlePriority;
	        break;
	      default:
	        suspendedLanes = NormalPriority$1;
	    }
	    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
	    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
	    root.callbackPriority = currentTime;
	    root.callbackNode = suspendedLanes;
	    return currentTime;
	  }
	  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
	  root.callbackPriority = 2;
	  root.callbackNode = null;
	  return 2;
	}
	function performWorkOnRootViaSchedulerTask(root, didTimeout) {
	  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
	    return (root.callbackNode = null), (root.callbackPriority = 0), null;
	  var originalCallbackNode = root.callbackNode;
	  if (flushPendingEffects() && root.callbackNode !== originalCallbackNode)
	    return null;
	  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
	  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
	    root,
	    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
	  performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
	  scheduleTaskForRootDuringMicrotask(root, now());
	  return null != root.callbackNode && root.callbackNode === originalCallbackNode
	    ? performWorkOnRootViaSchedulerTask.bind(null, root)
	    : null;
	}
	function performSyncWorkOnRoot(root, lanes) {
	  if (flushPendingEffects()) return null;
	  performWorkOnRoot(root, lanes, true);
	}
	function scheduleImmediateRootScheduleTask() {
	  scheduleMicrotask(function () {
	    0 !== (executionContext & 6)
	      ? scheduleCallback$3(
	          ImmediatePriority,
	          processRootScheduleInImmediateTask
	        )
	      : processRootScheduleInMicrotask();
	  });
	}
	function requestTransitionLane() {
	  if (0 === currentEventTransitionLane) {
	    var actionScopeLane = currentEntangledLane;
	    0 === actionScopeLane &&
	      ((actionScopeLane = nextTransitionUpdateLane),
	      (nextTransitionUpdateLane <<= 1),
	      0 === (nextTransitionUpdateLane & 261888) &&
	        (nextTransitionUpdateLane = 256));
	    currentEventTransitionLane = actionScopeLane;
	  }
	  return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
	  return null == actionProp ||
	    "symbol" === typeof actionProp ||
	    "boolean" === typeof actionProp
	    ? null
	    : "function" === typeof actionProp
	      ? actionProp
	      : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
	  var temp = submitter.ownerDocument.createElement("input");
	  temp.name = submitter.name;
	  temp.value = submitter.value;
	  form.id && temp.setAttribute("form", form.id);
	  submitter.parentNode.insertBefore(temp, submitter);
	  form = new FormData(form);
	  temp.parentNode.removeChild(temp);
	  return form;
	}
	function extractEvents$1(
	  dispatchQueue,
	  domEventName,
	  maybeTargetInst,
	  nativeEvent,
	  nativeEventTarget
	) {
	  if (
	    "submit" === domEventName &&
	    maybeTargetInst &&
	    maybeTargetInst.stateNode === nativeEventTarget
	  ) {
	    var action = coerceFormActionProp(
	        (nativeEventTarget[internalPropsKey] || null).action
	      ),
	      submitter = nativeEvent.submitter;
	    submitter &&
	      ((domEventName = (domEventName = submitter[internalPropsKey] || null)
	        ? coerceFormActionProp(domEventName.formAction)
	        : submitter.getAttribute("formAction")),
	      null !== domEventName && ((action = domEventName), (submitter = null)));
	    var event = new SyntheticEvent(
	      "action",
	      "action",
	      null,
	      nativeEvent,
	      nativeEventTarget
	    );
	    dispatchQueue.push({
	      event: event,
	      listeners: [
	        {
	          instance: null,
	          listener: function () {
	            if (nativeEvent.defaultPrevented) {
	              if (0 !== currentEventTransitionLane) {
	                var formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget);
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: true,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  null,
	                  formData
	                );
	              }
	            } else
	              "function" === typeof action &&
	                (event.preventDefault(),
	                (formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget)),
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: true,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  action,
	                  formData
	                ));
	          },
	          currentTarget: nativeEventTarget
	        }
	      ]
	    });
	  }
	}
	for (
	  var i$jscomp$inline_1577 = 0;
	  i$jscomp$inline_1577 < simpleEventPluginEvents.length;
	  i$jscomp$inline_1577++
	) {
	  var eventName$jscomp$inline_1578 =
	      simpleEventPluginEvents[i$jscomp$inline_1577],
	    domEventName$jscomp$inline_1579 =
	      eventName$jscomp$inline_1578.toLowerCase(),
	    capitalizedEvent$jscomp$inline_1580 =
	      eventName$jscomp$inline_1578[0].toUpperCase() +
	      eventName$jscomp$inline_1578.slice(1);
	  registerSimpleEvent(
	    domEventName$jscomp$inline_1579,
	    "on" + capitalizedEvent$jscomp$inline_1580
	  );
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent(
	  "onChange",
	  "change click focusin focusout input keydown keyup selectionchange".split(" ")
	);
	registerTwoPhaseEvent(
	  "onSelect",
	  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
	    " "
	  )
	);
	registerTwoPhaseEvent("onBeforeInput", [
	  "compositionend",
	  "keypress",
	  "textInput",
	  "paste"
	]);
	registerTwoPhaseEvent(
	  "onCompositionEnd",
	  "compositionend focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionStart",
	  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionUpdate",
	  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
	);
	var mediaEventTypes =
	    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
	      " "
	    ),
	  nonDelegatedEvents = new Set(
	    "beforetoggle cancel close invalid load scroll scrollend toggle"
	      .split(" ")
	      .concat(mediaEventTypes)
	  );
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
	  eventSystemFlags = 0 !== (eventSystemFlags & 4);
	  for (var i = 0; i < dispatchQueue.length; i++) {
	    var _dispatchQueue$i = dispatchQueue[i],
	      event = _dispatchQueue$i.event;
	    _dispatchQueue$i = _dispatchQueue$i.listeners;
	    a: {
	      var previousInstance = void 0;
	      if (eventSystemFlags)
	        for (
	          var i$jscomp$0 = _dispatchQueue$i.length - 1;
	          0 <= i$jscomp$0;
	          i$jscomp$0--
	        ) {
	          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
	            instance = _dispatchListeners$i.instance,
	            currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	      else
	        for (
	          i$jscomp$0 = 0;
	          i$jscomp$0 < _dispatchQueue$i.length;
	          i$jscomp$0++
	        ) {
	          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
	          instance = _dispatchListeners$i.instance;
	          currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	    }
	  }
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
	  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
	  void 0 === JSCompiler_inline_result &&
	    (JSCompiler_inline_result = targetElement[internalEventHandlersKey] =
	      new Set());
	  var listenerSetKey = domEventName + "__bubble";
	  JSCompiler_inline_result.has(listenerSetKey) ||
	    (addTrappedEventListener(targetElement, domEventName, 2, false),
	    JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
	  var eventSystemFlags = 0;
	  isCapturePhaseListener && (eventSystemFlags |= 4);
	  addTrappedEventListener(
	    target,
	    domEventName,
	    eventSystemFlags,
	    isCapturePhaseListener
	  );
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
	  if (!rootContainerElement[listeningMarker]) {
	    rootContainerElement[listeningMarker] = true;
	    allNativeEvents.forEach(function (domEventName) {
	      "selectionchange" !== domEventName &&
	        (nonDelegatedEvents.has(domEventName) ||
	          listenToNativeEvent(domEventName, false, rootContainerElement),
	        listenToNativeEvent(domEventName, true, rootContainerElement));
	    });
	    var ownerDocument =
	      9 === rootContainerElement.nodeType
	        ? rootContainerElement
	        : rootContainerElement.ownerDocument;
	    null === ownerDocument ||
	      ownerDocument[listeningMarker] ||
	      ((ownerDocument[listeningMarker] = true),
	      listenToNativeEvent("selectionchange", false, ownerDocument));
	  }
	}
	function addTrappedEventListener(
	  targetContainer,
	  domEventName,
	  eventSystemFlags,
	  isCapturePhaseListener
	) {
	  switch (getEventPriority(domEventName)) {
	    case 2:
	      var listenerWrapper = dispatchDiscreteEvent;
	      break;
	    case 8:
	      listenerWrapper = dispatchContinuousEvent;
	      break;
	    default:
	      listenerWrapper = dispatchEvent;
	  }
	  eventSystemFlags = listenerWrapper.bind(
	    null,
	    domEventName,
	    eventSystemFlags,
	    targetContainer
	  );
	  listenerWrapper = void 0;
	  !passiveBrowserEventsSupported ||
	    ("touchstart" !== domEventName &&
	      "touchmove" !== domEventName &&
	      "wheel" !== domEventName) ||
	    (listenerWrapper = true);
	  isCapturePhaseListener
	    ? void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          capture: true,
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, true)
	    : void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
	}
	function dispatchEventForPluginEventSystem(
	  domEventName,
	  eventSystemFlags,
	  nativeEvent,
	  targetInst$jscomp$0,
	  targetContainer
	) {
	  var ancestorInst = targetInst$jscomp$0;
	  if (
	    0 === (eventSystemFlags & 1) &&
	    0 === (eventSystemFlags & 2) &&
	    null !== targetInst$jscomp$0
	  )
	    a: for (;;) {
	      if (null === targetInst$jscomp$0) return;
	      var nodeTag = targetInst$jscomp$0.tag;
	      if (3 === nodeTag || 4 === nodeTag) {
	        var container = targetInst$jscomp$0.stateNode.containerInfo;
	        if (container === targetContainer) break;
	        if (4 === nodeTag)
	          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
	            var grandTag = nodeTag.tag;
	            if (
	              (3 === grandTag || 4 === grandTag) &&
	              nodeTag.stateNode.containerInfo === targetContainer
	            )
	              return;
	            nodeTag = nodeTag.return;
	          }
	        for (; null !== container; ) {
	          nodeTag = getClosestInstanceFromNode(container);
	          if (null === nodeTag) return;
	          grandTag = nodeTag.tag;
	          if (
	            5 === grandTag ||
	            6 === grandTag ||
	            26 === grandTag ||
	            27 === grandTag
	          ) {
	            targetInst$jscomp$0 = ancestorInst = nodeTag;
	            continue a;
	          }
	          container = container.parentNode;
	        }
	      }
	      targetInst$jscomp$0 = targetInst$jscomp$0.return;
	    }
	  batchedUpdates$1(function () {
	    var targetInst = ancestorInst,
	      nativeEventTarget = getEventTarget(nativeEvent),
	      dispatchQueue = [];
	    a: {
	      var reactName = topLevelEventsToReactNames.get(domEventName);
	      if (void 0 !== reactName) {
	        var SyntheticEventCtor = SyntheticEvent,
	          reactEventType = domEventName;
	        switch (domEventName) {
	          case "keypress":
	            if (0 === getEventCharCode(nativeEvent)) break a;
	          case "keydown":
	          case "keyup":
	            SyntheticEventCtor = SyntheticKeyboardEvent;
	            break;
	          case "focusin":
	            reactEventType = "focus";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "focusout":
	            reactEventType = "blur";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "click":
	            if (2 === nativeEvent.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            SyntheticEventCtor = SyntheticMouseEvent;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            SyntheticEventCtor = SyntheticDragEvent;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            SyntheticEventCtor = SyntheticTouchEvent;
	            break;
	          case ANIMATION_END:
	          case ANIMATION_ITERATION:
	          case ANIMATION_START:
	            SyntheticEventCtor = SyntheticAnimationEvent;
	            break;
	          case TRANSITION_END:
	            SyntheticEventCtor = SyntheticTransitionEvent;
	            break;
	          case "scroll":
	          case "scrollend":
	            SyntheticEventCtor = SyntheticUIEvent;
	            break;
	          case "wheel":
	            SyntheticEventCtor = SyntheticWheelEvent;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            SyntheticEventCtor = SyntheticClipboardEvent;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            SyntheticEventCtor = SyntheticPointerEvent;
	            break;
	          case "toggle":
	          case "beforetoggle":
	            SyntheticEventCtor = SyntheticToggleEvent;
	        }
	        var inCapturePhase = 0 !== (eventSystemFlags & 4),
	          accumulateTargetOnly =
	            !inCapturePhase &&
	            ("scroll" === domEventName || "scrollend" === domEventName),
	          reactEventName = inCapturePhase
	            ? null !== reactName
	              ? reactName + "Capture"
	              : null
	            : reactName;
	        inCapturePhase = [];
	        for (
	          var instance = targetInst, lastHostComponent;
	          null !== instance;

	        ) {
	          var _instance = instance;
	          lastHostComponent = _instance.stateNode;
	          _instance = _instance.tag;
	          (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
	            null === lastHostComponent ||
	            null === reactEventName ||
	            ((_instance = getListener(instance, reactEventName)),
	            null != _instance &&
	              inCapturePhase.push(
	                createDispatchListener(instance, _instance, lastHostComponent)
	              ));
	          if (accumulateTargetOnly) break;
	          instance = instance.return;
	        }
	        0 < inCapturePhase.length &&
	          ((reactName = new SyntheticEventCtor(
	            reactName,
	            reactEventType,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
	      }
	    }
	    if (0 === (eventSystemFlags & 7)) {
	      a: {
	        reactName =
	          "mouseover" === domEventName || "pointerover" === domEventName;
	        SyntheticEventCtor =
	          "mouseout" === domEventName || "pointerout" === domEventName;
	        if (
	          reactName &&
	          nativeEvent !== currentReplayingEvent &&
	          (reactEventType =
	            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
	          (getClosestInstanceFromNode(reactEventType) ||
	            reactEventType[internalContainerInstanceKey])
	        )
	          break a;
	        if (SyntheticEventCtor || reactName) {
	          reactName =
	            nativeEventTarget.window === nativeEventTarget
	              ? nativeEventTarget
	              : (reactName = nativeEventTarget.ownerDocument)
	                ? reactName.defaultView || reactName.parentWindow
	                : window;
	          if (SyntheticEventCtor) {
	            if (
	              ((reactEventType =
	                nativeEvent.relatedTarget || nativeEvent.toElement),
	              (SyntheticEventCtor = targetInst),
	              (reactEventType = reactEventType
	                ? getClosestInstanceFromNode(reactEventType)
	                : null),
	              null !== reactEventType &&
	                ((accumulateTargetOnly =
	                  getNearestMountedFiber(reactEventType)),
	                (inCapturePhase = reactEventType.tag),
	                reactEventType !== accumulateTargetOnly ||
	                  (5 !== inCapturePhase &&
	                    27 !== inCapturePhase &&
	                    6 !== inCapturePhase)))
	            )
	              reactEventType = null;
	          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
	          if (SyntheticEventCtor !== reactEventType) {
	            inCapturePhase = SyntheticMouseEvent;
	            _instance = "onMouseLeave";
	            reactEventName = "onMouseEnter";
	            instance = "mouse";
	            if ("pointerout" === domEventName || "pointerover" === domEventName)
	              (inCapturePhase = SyntheticPointerEvent),
	                (_instance = "onPointerLeave"),
	                (reactEventName = "onPointerEnter"),
	                (instance = "pointer");
	            accumulateTargetOnly =
	              null == SyntheticEventCtor
	                ? reactName
	                : getNodeFromInstance(SyntheticEventCtor);
	            lastHostComponent =
	              null == reactEventType
	                ? reactName
	                : getNodeFromInstance(reactEventType);
	            reactName = new inCapturePhase(
	              _instance,
	              instance + "leave",
	              SyntheticEventCtor,
	              nativeEvent,
	              nativeEventTarget
	            );
	            reactName.target = accumulateTargetOnly;
	            reactName.relatedTarget = lastHostComponent;
	            _instance = null;
	            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
	              ((inCapturePhase = new inCapturePhase(
	                reactEventName,
	                instance + "enter",
	                reactEventType,
	                nativeEvent,
	                nativeEventTarget
	              )),
	              (inCapturePhase.target = lastHostComponent),
	              (inCapturePhase.relatedTarget = accumulateTargetOnly),
	              (_instance = inCapturePhase));
	            accumulateTargetOnly = _instance;
	            if (SyntheticEventCtor && reactEventType)
	              b: {
	                inCapturePhase = getParent;
	                reactEventName = SyntheticEventCtor;
	                instance = reactEventType;
	                lastHostComponent = 0;
	                for (
	                  _instance = reactEventName;
	                  _instance;
	                  _instance = inCapturePhase(_instance)
	                )
	                  lastHostComponent++;
	                _instance = 0;
	                for (var tempB = instance; tempB; tempB = inCapturePhase(tempB))
	                  _instance++;
	                for (; 0 < lastHostComponent - _instance; )
	                  (reactEventName = inCapturePhase(reactEventName)),
	                    lastHostComponent--;
	                for (; 0 < _instance - lastHostComponent; )
	                  (instance = inCapturePhase(instance)), _instance--;
	                for (; lastHostComponent--; ) {
	                  if (
	                    reactEventName === instance ||
	                    (null !== instance && reactEventName === instance.alternate)
	                  ) {
	                    inCapturePhase = reactEventName;
	                    break b;
	                  }
	                  reactEventName = inCapturePhase(reactEventName);
	                  instance = inCapturePhase(instance);
	                }
	                inCapturePhase = null;
	              }
	            else inCapturePhase = null;
	            null !== SyntheticEventCtor &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                reactName,
	                SyntheticEventCtor,
	                inCapturePhase,
	                !1
	              );
	            null !== reactEventType &&
	              null !== accumulateTargetOnly &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                accumulateTargetOnly,
	                reactEventType,
	                inCapturePhase,
	                !0
	              );
	          }
	        }
	      }
	      a: {
	        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
	        SyntheticEventCtor =
	          reactName.nodeName && reactName.nodeName.toLowerCase();
	        if (
	          "select" === SyntheticEventCtor ||
	          ("input" === SyntheticEventCtor && "file" === reactName.type)
	        )
	          var getTargetInstFunc = getTargetInstForChangeEvent;
	        else if (isTextInputElement(reactName))
	          if (isInputEventSupported)
	            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
	          else {
	            getTargetInstFunc = getTargetInstForInputEventPolyfill;
	            var handleEventFunc = handleEventsForInputEventPolyfill;
	          }
	        else
	          (SyntheticEventCtor = reactName.nodeName),
	            !SyntheticEventCtor ||
	            "input" !== SyntheticEventCtor.toLowerCase() ||
	            ("checkbox" !== reactName.type && "radio" !== reactName.type)
	              ? targetInst &&
	                isCustomElement(targetInst.elementType) &&
	                (getTargetInstFunc = getTargetInstForChangeEvent)
	              : (getTargetInstFunc = getTargetInstForClickEvent);
	        if (
	          getTargetInstFunc &&
	          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
	        ) {
	          createAndAccumulateChangeEvent(
	            dispatchQueue,
	            getTargetInstFunc,
	            nativeEvent,
	            nativeEventTarget
	          );
	          break a;
	        }
	        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
	        "focusout" === domEventName &&
	          targetInst &&
	          "number" === reactName.type &&
	          null != targetInst.memoizedProps.value &&
	          setDefaultValue(reactName, "number", reactName.value);
	      }
	      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
	      switch (domEventName) {
	        case "focusin":
	          if (
	            isTextInputElement(handleEventFunc) ||
	            "true" === handleEventFunc.contentEditable
	          )
	            (activeElement = handleEventFunc),
	              (activeElementInst = targetInst),
	              (lastSelection = null);
	          break;
	        case "focusout":
	          lastSelection = activeElementInst = activeElement = null;
	          break;
	        case "mousedown":
	          mouseDown = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          mouseDown = !1;
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	          break;
	        case "selectionchange":
	          if (skipSelectionChangeEvent) break;
	        case "keydown":
	        case "keyup":
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	      }
	      var fallbackData;
	      if (canUseCompositionEvent)
	        b: {
	          switch (domEventName) {
	            case "compositionstart":
	              var eventType = "onCompositionStart";
	              break b;
	            case "compositionend":
	              eventType = "onCompositionEnd";
	              break b;
	            case "compositionupdate":
	              eventType = "onCompositionUpdate";
	              break b;
	          }
	          eventType = void 0;
	        }
	      else
	        isComposing
	          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
	            (eventType = "onCompositionEnd")
	          : "keydown" === domEventName &&
	            229 === nativeEvent.keyCode &&
	            (eventType = "onCompositionStart");
	      eventType &&
	        (useFallbackCompositionData &&
	          "ko" !== nativeEvent.locale &&
	          (isComposing || "onCompositionStart" !== eventType
	            ? "onCompositionEnd" === eventType &&
	              isComposing &&
	              (fallbackData = getData())
	            : ((root = nativeEventTarget),
	              (startText = "value" in root ? root.value : root.textContent),
	              (isComposing = !0))),
	        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
	        0 < handleEventFunc.length &&
	          ((eventType = new SyntheticCompositionEvent(
	            eventType,
	            domEventName,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
	          fallbackData
	            ? (eventType.data = fallbackData)
	            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
	              null !== fallbackData && (eventType.data = fallbackData))));
	      if (
	        (fallbackData = canUseTextInputEvent
	          ? getNativeBeforeInputChars(domEventName, nativeEvent)
	          : getFallbackBeforeInputChars(domEventName, nativeEvent))
	      )
	        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
	          0 < eventType.length &&
	            ((handleEventFunc = new SyntheticCompositionEvent(
	              "onBeforeInput",
	              "beforeinput",
	              null,
	              nativeEvent,
	              nativeEventTarget
	            )),
	            dispatchQueue.push({
	              event: handleEventFunc,
	              listeners: eventType
	            }),
	            (handleEventFunc.data = fallbackData));
	      extractEvents$1(
	        dispatchQueue,
	        domEventName,
	        targetInst,
	        nativeEvent,
	        nativeEventTarget
	      );
	    }
	    processDispatchQueue(dispatchQueue, eventSystemFlags);
	  });
	}
	function createDispatchListener(instance, listener, currentTarget) {
	  return {
	    instance: instance,
	    listener: listener,
	    currentTarget: currentTarget
	  };
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
	  for (
	    var captureName = reactName + "Capture", listeners = [];
	    null !== targetFiber;

	  ) {
	    var _instance2 = targetFiber,
	      stateNode = _instance2.stateNode;
	    _instance2 = _instance2.tag;
	    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
	      null === stateNode ||
	      ((_instance2 = getListener(targetFiber, captureName)),
	      null != _instance2 &&
	        listeners.unshift(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ),
	      (_instance2 = getListener(targetFiber, reactName)),
	      null != _instance2 &&
	        listeners.push(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ));
	    if (3 === targetFiber.tag) return listeners;
	    targetFiber = targetFiber.return;
	  }
	  return [];
	}
	function getParent(inst) {
	  if (null === inst) return null;
	  do inst = inst.return;
	  while (inst && 5 !== inst.tag && 27 !== inst.tag);
	  return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(
	  dispatchQueue,
	  event,
	  target,
	  common,
	  inCapturePhase
	) {
	  for (
	    var registrationName = event._reactName, listeners = [];
	    null !== target && target !== common;

	  ) {
	    var _instance3 = target,
	      alternate = _instance3.alternate,
	      stateNode = _instance3.stateNode;
	    _instance3 = _instance3.tag;
	    if (null !== alternate && alternate === common) break;
	    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
	      null === stateNode ||
	      ((alternate = stateNode),
	      inCapturePhase
	        ? ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.unshift(
	              createDispatchListener(target, stateNode, alternate)
	            ))
	        : inCapturePhase ||
	          ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.push(
	              createDispatchListener(target, stateNode, alternate)
	            )));
	    target = target.return;
	  }
	  0 !== listeners.length &&
	    dispatchQueue.push({ event: event, listeners: listeners });
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
	  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
	  return ("string" === typeof markup ? markup : "" + markup)
	    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
	    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
	  clientText = normalizeMarkupForTextOrAttribute(clientText);
	  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
	}
	function setProp(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "children":
	      "string" === typeof value
	        ? "body" === tag ||
	          ("textarea" === tag && "" === value) ||
	          setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          "body" !== tag &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "className":
	      setValueForKnownAttribute(domElement, "class", value);
	      break;
	    case "tabIndex":
	      setValueForKnownAttribute(domElement, "tabindex", value);
	      break;
	    case "dir":
	    case "role":
	    case "viewBox":
	    case "width":
	    case "height":
	      setValueForKnownAttribute(domElement, key, value);
	      break;
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "data":
	      if ("object" !== tag) {
	        setValueForKnownAttribute(domElement, "data", value);
	        break;
	      }
	    case "src":
	    case "href":
	      if ("" === value && ("a" !== tag || "href" !== key)) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "action":
	    case "formAction":
	      if ("function" === typeof value) {
	        domElement.setAttribute(
	          key,
	          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
	        );
	        break;
	      } else
	        "function" === typeof prevValue &&
	          ("formAction" === key
	            ? ("input" !== tag &&
	                setProp(domElement, tag, "name", props.name, props, null),
	              setProp(
	                domElement,
	                tag,
	                "formEncType",
	                props.formEncType,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formMethod",
	                props.formMethod,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formTarget",
	                props.formTarget,
	                props,
	                null
	              ))
	            : (setProp(domElement, tag, "encType", props.encType, props, null),
	              setProp(domElement, tag, "method", props.method, props, null),
	              setProp(domElement, tag, "target", props.target, props, null)));
	      if (
	        null == value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "multiple":
	      domElement.multiple =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "muted":
	      domElement.muted =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "defaultValue":
	    case "defaultChecked":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "autoFocus":
	      break;
	    case "xlinkHref":
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "boolean" === typeof value ||
	        "symbol" === typeof value
	      ) {
	        domElement.removeAttribute("xlink:href");
	        break;
	      }
	      key = sanitizeURL("" + value);
	      domElement.setAttributeNS(
	        "http://www.w3.org/1999/xlink",
	        "xlink:href",
	        key
	      );
	      break;
	    case "contentEditable":
	    case "spellCheck":
	    case "draggable":
	    case "value":
	    case "autoReverse":
	    case "externalResourcesRequired":
	    case "focusable":
	    case "preserveAlpha":
	      null != value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "" + value)
	        : domElement.removeAttribute(key);
	      break;
	    case "inert":
	    case "allowFullScreen":
	    case "async":
	    case "autoPlay":
	    case "controls":
	    case "default":
	    case "defer":
	    case "disabled":
	    case "disablePictureInPicture":
	    case "disableRemotePlayback":
	    case "formNoValidate":
	    case "hidden":
	    case "loop":
	    case "noModule":
	    case "noValidate":
	    case "open":
	    case "playsInline":
	    case "readOnly":
	    case "required":
	    case "reversed":
	    case "scoped":
	    case "seamless":
	    case "itemScope":
	      value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "")
	        : domElement.removeAttribute(key);
	      break;
	    case "capture":
	    case "download":
	      true === value
	        ? domElement.setAttribute(key, "")
	        : false !== value &&
	            null != value &&
	            "function" !== typeof value &&
	            "symbol" !== typeof value
	          ? domElement.setAttribute(key, value)
	          : domElement.removeAttribute(key);
	      break;
	    case "cols":
	    case "rows":
	    case "size":
	    case "span":
	      null != value &&
	      "function" !== typeof value &&
	      "symbol" !== typeof value &&
	      !isNaN(value) &&
	      1 <= value
	        ? domElement.setAttribute(key, value)
	        : domElement.removeAttribute(key);
	      break;
	    case "rowSpan":
	    case "start":
	      null == value ||
	      "function" === typeof value ||
	      "symbol" === typeof value ||
	      isNaN(value)
	        ? domElement.removeAttribute(key)
	        : domElement.setAttribute(key, value);
	      break;
	    case "popover":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      setValueForAttribute(domElement, "popover", value);
	      break;
	    case "xlinkActuate":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:actuate",
	        value
	      );
	      break;
	    case "xlinkArcrole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:arcrole",
	        value
	      );
	      break;
	    case "xlinkRole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:role",
	        value
	      );
	      break;
	    case "xlinkShow":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:show",
	        value
	      );
	      break;
	    case "xlinkTitle":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:title",
	        value
	      );
	      break;
	    case "xlinkType":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:type",
	        value
	      );
	      break;
	    case "xmlBase":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:base",
	        value
	      );
	      break;
	    case "xmlLang":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:lang",
	        value
	      );
	      break;
	    case "xmlSpace":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:space",
	        value
	      );
	      break;
	    case "is":
	      setValueForAttribute(domElement, "is", value);
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (
	        !(2 < key.length) ||
	        ("o" !== key[0] && "O" !== key[0]) ||
	        ("n" !== key[1] && "N" !== key[1])
	      )
	        (key = aliases.get(key) || key),
	          setValueForAttribute(domElement, key, value);
	  }
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "children":
	      "string" === typeof value
	        ? setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (!registrationNameDependencies.hasOwnProperty(key))
	        a: {
	          if (
	            "o" === key[0] &&
	            "n" === key[1] &&
	            ((props = key.endsWith("Capture")),
	            (tag = key.slice(2, props ? key.length - 7 : void 0)),
	            (prevValue = domElement[internalPropsKey] || null),
	            (prevValue = null != prevValue ? prevValue[key] : null),
	            "function" === typeof prevValue &&
	              domElement.removeEventListener(tag, prevValue, props),
	            "function" === typeof value)
	          ) {
	            "function" !== typeof prevValue &&
	              null !== prevValue &&
	              (key in domElement
	                ? (domElement[key] = null)
	                : domElement.hasAttribute(key) &&
	                  domElement.removeAttribute(key));
	            domElement.addEventListener(tag, value, props);
	            break a;
	          }
	          key in domElement
	            ? (domElement[key] = value)
	            : true === value
	              ? domElement.setAttribute(key, "")
	              : setValueForAttribute(domElement, key, value);
	        }
	  }
	}
	function setInitialProperties(domElement, tag, props) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "img":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      var hasSrc = false,
	        hasSrcSet = false,
	        propKey;
	      for (propKey in props)
	        if (props.hasOwnProperty(propKey)) {
	          var propValue = props[propKey];
	          if (null != propValue)
	            switch (propKey) {
	              case "src":
	                hasSrc = true;
	                break;
	              case "srcSet":
	                hasSrcSet = true;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(137, tag));
	              default:
	                setProp(domElement, tag, propKey, propValue, props, null);
	            }
	        }
	      hasSrcSet &&
	        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
	      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
	      return;
	    case "input":
	      listenToNonDelegatedEvent("invalid", domElement);
	      var defaultValue = (propKey = propValue = hasSrcSet = null),
	        checked = null,
	        defaultChecked = null;
	      for (hasSrc in props)
	        if (props.hasOwnProperty(hasSrc)) {
	          var propValue$184 = props[hasSrc];
	          if (null != propValue$184)
	            switch (hasSrc) {
	              case "name":
	                hasSrcSet = propValue$184;
	                break;
	              case "type":
	                propValue = propValue$184;
	                break;
	              case "checked":
	                checked = propValue$184;
	                break;
	              case "defaultChecked":
	                defaultChecked = propValue$184;
	                break;
	              case "value":
	                propKey = propValue$184;
	                break;
	              case "defaultValue":
	                defaultValue = propValue$184;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                if (null != propValue$184)
	                  throw Error(formatProdErrorMessage(137, tag));
	                break;
	              default:
	                setProp(domElement, tag, hasSrc, propValue$184, props, null);
	            }
	        }
	      initInput(
	        domElement,
	        propKey,
	        defaultValue,
	        checked,
	        defaultChecked,
	        propValue,
	        hasSrcSet,
	        false
	      );
	      return;
	    case "select":
	      listenToNonDelegatedEvent("invalid", domElement);
	      hasSrc = propValue = propKey = null;
	      for (hasSrcSet in props)
	        if (
	          props.hasOwnProperty(hasSrcSet) &&
	          ((defaultValue = props[hasSrcSet]), null != defaultValue)
	        )
	          switch (hasSrcSet) {
	            case "value":
	              propKey = defaultValue;
	              break;
	            case "defaultValue":
	              propValue = defaultValue;
	              break;
	            case "multiple":
	              hasSrc = defaultValue;
	            default:
	              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
	          }
	      tag = propKey;
	      props = propValue;
	      domElement.multiple = !!hasSrc;
	      null != tag
	        ? updateOptions(domElement, !!hasSrc, tag, false)
	        : null != props && updateOptions(domElement, !!hasSrc, props, true);
	      return;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", domElement);
	      propKey = hasSrcSet = hasSrc = null;
	      for (propValue in props)
	        if (
	          props.hasOwnProperty(propValue) &&
	          ((defaultValue = props[propValue]), null != defaultValue)
	        )
	          switch (propValue) {
	            case "value":
	              hasSrc = defaultValue;
	              break;
	            case "defaultValue":
	              hasSrcSet = defaultValue;
	              break;
	            case "children":
	              propKey = defaultValue;
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              setProp(domElement, tag, propValue, defaultValue, props, null);
	          }
	      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
	      return;
	    case "option":
	      for (checked in props)
	        if (
	          props.hasOwnProperty(checked) &&
	          ((hasSrc = props[checked]), null != hasSrc)
	        )
	          switch (checked) {
	            case "selected":
	              domElement.selected =
	                hasSrc &&
	                "function" !== typeof hasSrc &&
	                "symbol" !== typeof hasSrc;
	              break;
	            default:
	              setProp(domElement, tag, checked, hasSrc, props, null);
	          }
	      return;
	    case "dialog":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      listenToNonDelegatedEvent("cancel", domElement);
	      listenToNonDelegatedEvent("close", domElement);
	      break;
	    case "iframe":
	    case "object":
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "video":
	    case "audio":
	      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
	        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
	      break;
	    case "image":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", domElement);
	      break;
	    case "embed":
	    case "source":
	    case "link":
	      listenToNonDelegatedEvent("error", domElement),
	        listenToNonDelegatedEvent("load", domElement);
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (defaultChecked in props)
	        if (
	          props.hasOwnProperty(defaultChecked) &&
	          ((hasSrc = props[defaultChecked]), null != hasSrc)
	        )
	          switch (defaultChecked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              throw Error(formatProdErrorMessage(137, tag));
	            default:
	              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (propValue$184 in props)
	          props.hasOwnProperty(propValue$184) &&
	            ((hasSrc = props[propValue$184]),
	            void 0 !== hasSrc &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propValue$184,
	                hasSrc,
	                props,
	                void 0
	              ));
	        return;
	      }
	  }
	  for (defaultValue in props)
	    props.hasOwnProperty(defaultValue) &&
	      ((hasSrc = props[defaultValue]),
	      null != hasSrc &&
	        setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "input":
	      var name = null,
	        type = null,
	        value = null,
	        defaultValue = null,
	        lastDefaultValue = null,
	        checked = null,
	        defaultChecked = null;
	      for (propKey in lastProps) {
	        var lastProp = lastProps[propKey];
	        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
	          switch (propKey) {
	            case "checked":
	              break;
	            case "value":
	              break;
	            case "defaultValue":
	              lastDefaultValue = lastProp;
	            default:
	              nextProps.hasOwnProperty(propKey) ||
	                setProp(domElement, tag, propKey, null, nextProps, lastProp);
	          }
	      }
	      for (var propKey$201 in nextProps) {
	        var propKey = nextProps[propKey$201];
	        lastProp = lastProps[propKey$201];
	        if (
	          nextProps.hasOwnProperty(propKey$201) &&
	          (null != propKey || null != lastProp)
	        )
	          switch (propKey$201) {
	            case "type":
	              type = propKey;
	              break;
	            case "name":
	              name = propKey;
	              break;
	            case "checked":
	              checked = propKey;
	              break;
	            case "defaultChecked":
	              defaultChecked = propKey;
	              break;
	            case "value":
	              value = propKey;
	              break;
	            case "defaultValue":
	              defaultValue = propKey;
	              break;
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              propKey !== lastProp &&
	                setProp(
	                  domElement,
	                  tag,
	                  propKey$201,
	                  propKey,
	                  nextProps,
	                  lastProp
	                );
	          }
	      }
	      updateInput(
	        domElement,
	        value,
	        defaultValue,
	        lastDefaultValue,
	        checked,
	        defaultChecked,
	        type,
	        name
	      );
	      return;
	    case "select":
	      propKey = value = defaultValue = propKey$201 = null;
	      for (type in lastProps)
	        if (
	          ((lastDefaultValue = lastProps[type]),
	          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
	        )
	          switch (type) {
	            case "value":
	              break;
	            case "multiple":
	              propKey = lastDefaultValue;
	            default:
	              nextProps.hasOwnProperty(type) ||
	                setProp(
	                  domElement,
	                  tag,
	                  type,
	                  null,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      for (name in nextProps)
	        if (
	          ((type = nextProps[name]),
	          (lastDefaultValue = lastProps[name]),
	          nextProps.hasOwnProperty(name) &&
	            (null != type || null != lastDefaultValue))
	        )
	          switch (name) {
	            case "value":
	              propKey$201 = type;
	              break;
	            case "defaultValue":
	              defaultValue = type;
	              break;
	            case "multiple":
	              value = type;
	            default:
	              type !== lastDefaultValue &&
	                setProp(
	                  domElement,
	                  tag,
	                  name,
	                  type,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      tag = defaultValue;
	      lastProps = value;
	      nextProps = propKey;
	      null != propKey$201
	        ? updateOptions(domElement, !!lastProps, propKey$201, false)
	        : !!nextProps !== !!lastProps &&
	          (null != tag
	            ? updateOptions(domElement, !!lastProps, tag, true)
	            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
	      return;
	    case "textarea":
	      propKey = propKey$201 = null;
	      for (defaultValue in lastProps)
	        if (
	          ((name = lastProps[defaultValue]),
	          lastProps.hasOwnProperty(defaultValue) &&
	            null != name &&
	            !nextProps.hasOwnProperty(defaultValue))
	        )
	          switch (defaultValue) {
	            case "value":
	              break;
	            case "children":
	              break;
	            default:
	              setProp(domElement, tag, defaultValue, null, nextProps, name);
	          }
	      for (value in nextProps)
	        if (
	          ((name = nextProps[value]),
	          (type = lastProps[value]),
	          nextProps.hasOwnProperty(value) && (null != name || null != type))
	        )
	          switch (value) {
	            case "value":
	              propKey$201 = name;
	              break;
	            case "defaultValue":
	              propKey = name;
	              break;
	            case "children":
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != name) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              name !== type &&
	                setProp(domElement, tag, value, name, nextProps, type);
	          }
	      updateTextarea(domElement, propKey$201, propKey);
	      return;
	    case "option":
	      for (var propKey$217 in lastProps)
	        if (
	          ((propKey$201 = lastProps[propKey$217]),
	          lastProps.hasOwnProperty(propKey$217) &&
	            null != propKey$201 &&
	            !nextProps.hasOwnProperty(propKey$217))
	        )
	          switch (propKey$217) {
	            case "selected":
	              domElement.selected = false;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                propKey$217,
	                null,
	                nextProps,
	                propKey$201
	              );
	          }
	      for (lastDefaultValue in nextProps)
	        if (
	          ((propKey$201 = nextProps[lastDefaultValue]),
	          (propKey = lastProps[lastDefaultValue]),
	          nextProps.hasOwnProperty(lastDefaultValue) &&
	            propKey$201 !== propKey &&
	            (null != propKey$201 || null != propKey))
	        )
	          switch (lastDefaultValue) {
	            case "selected":
	              domElement.selected =
	                propKey$201 &&
	                "function" !== typeof propKey$201 &&
	                "symbol" !== typeof propKey$201;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                lastDefaultValue,
	                propKey$201,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    case "img":
	    case "link":
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "embed":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "source":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (var propKey$222 in lastProps)
	        (propKey$201 = lastProps[propKey$222]),
	          lastProps.hasOwnProperty(propKey$222) &&
	            null != propKey$201 &&
	            !nextProps.hasOwnProperty(propKey$222) &&
	            setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
	      for (checked in nextProps)
	        if (
	          ((propKey$201 = nextProps[checked]),
	          (propKey = lastProps[checked]),
	          nextProps.hasOwnProperty(checked) &&
	            propKey$201 !== propKey &&
	            (null != propKey$201 || null != propKey))
	        )
	          switch (checked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey$201)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                checked,
	                propKey$201,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (var propKey$227 in lastProps)
	          (propKey$201 = lastProps[propKey$227]),
	            lastProps.hasOwnProperty(propKey$227) &&
	              void 0 !== propKey$201 &&
	              !nextProps.hasOwnProperty(propKey$227) &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propKey$227,
	                void 0,
	                nextProps,
	                propKey$201
	              );
	        for (defaultChecked in nextProps)
	          (propKey$201 = nextProps[defaultChecked]),
	            (propKey = lastProps[defaultChecked]),
	            !nextProps.hasOwnProperty(defaultChecked) ||
	              propKey$201 === propKey ||
	              (void 0 === propKey$201 && void 0 === propKey) ||
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                defaultChecked,
	                propKey$201,
	                nextProps,
	                propKey
	              );
	        return;
	      }
	  }
	  for (var propKey$232 in lastProps)
	    (propKey$201 = lastProps[propKey$232]),
	      lastProps.hasOwnProperty(propKey$232) &&
	        null != propKey$201 &&
	        !nextProps.hasOwnProperty(propKey$232) &&
	        setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
	  for (lastProp in nextProps)
	    (propKey$201 = nextProps[lastProp]),
	      (propKey = lastProps[lastProp]),
	      !nextProps.hasOwnProperty(lastProp) ||
	        propKey$201 === propKey ||
	        (null == propKey$201 && null == propKey) ||
	        setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
	}
	function isLikelyStaticResource(initiatorType) {
	  switch (initiatorType) {
	    case "css":
	    case "script":
	    case "font":
	    case "img":
	    case "image":
	    case "input":
	    case "link":
	      return true;
	    default:
	      return false;
	  }
	}
	function estimateBandwidth() {
	  if ("function" === typeof performance.getEntriesByType) {
	    for (
	      var count = 0,
	        bits = 0,
	        resourceEntries = performance.getEntriesByType("resource"),
	        i = 0;
	      i < resourceEntries.length;
	      i++
	    ) {
	      var entry = resourceEntries[i],
	        transferSize = entry.transferSize,
	        initiatorType = entry.initiatorType,
	        duration = entry.duration;
	      if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
	        initiatorType = 0;
	        duration = entry.responseEnd;
	        for (i += 1; i < resourceEntries.length; i++) {
	          var overlapEntry = resourceEntries[i],
	            overlapStartTime = overlapEntry.startTime;
	          if (overlapStartTime > duration) break;
	          var overlapTransferSize = overlapEntry.transferSize,
	            overlapInitiatorType = overlapEntry.initiatorType;
	          overlapTransferSize &&
	            isLikelyStaticResource(overlapInitiatorType) &&
	            ((overlapEntry = overlapEntry.responseEnd),
	            (initiatorType +=
	              overlapTransferSize *
	              (overlapEntry < duration
	                ? 1
	                : (duration - overlapStartTime) /
	                  (overlapEntry - overlapStartTime))));
	        }
	        --i;
	        bits += (8 * (transferSize + initiatorType)) / (entry.duration / 1e3);
	        count++;
	        if (10 < count) break;
	      }
	    }
	    if (0 < count) return bits / count / 1e6;
	  }
	  return navigator.connection &&
	    ((count = navigator.connection.downlink), "number" === typeof count)
	    ? count
	    : 5;
	}
	var eventsEnabled = null,
	  selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
	  return 9 === rootContainerElement.nodeType
	    ? rootContainerElement
	    : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
	  switch (namespaceURI) {
	    case "http://www.w3.org/2000/svg":
	      return 1;
	    case "http://www.w3.org/1998/Math/MathML":
	      return 2;
	    default:
	      return 0;
	  }
	}
	function getChildHostContextProd(parentNamespace, type) {
	  if (0 === parentNamespace)
	    switch (type) {
	      case "svg":
	        return 1;
	      case "math":
	        return 2;
	      default:
	        return 0;
	    }
	  return 1 === parentNamespace && "foreignObject" === type
	    ? 0
	    : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
	  return (
	    "textarea" === type ||
	    "noscript" === type ||
	    "string" === typeof props.children ||
	    "number" === typeof props.children ||
	    "bigint" === typeof props.children ||
	    ("object" === typeof props.dangerouslySetInnerHTML &&
	      null !== props.dangerouslySetInnerHTML &&
	      null != props.dangerouslySetInnerHTML.__html)
	  );
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
	  var event = window.event;
	  if (event && "popstate" === event.type) {
	    if (event === currentPopstateTransitionEvent) return false;
	    currentPopstateTransitionEvent = event;
	    return true;
	  }
	  currentPopstateTransitionEvent = null;
	  return false;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
	  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
	  localPromise = "function" === typeof Promise ? Promise : void 0,
	  scheduleMicrotask =
	    "function" === typeof queueMicrotask
	      ? queueMicrotask
	      : "undefined" !== typeof localPromise
	        ? function (callback) {
	            return localPromise
	              .resolve(null)
	              .then(callback)
	              .catch(handleErrorInNextTick);
	          }
	        : scheduleTimeout;
	function handleErrorInNextTick(error) {
	  setTimeout(function () {
	    throw error;
	  });
	}
	function isSingletonScope(type) {
	  return "head" === type;
	}
	function clearHydrationBoundary(parentInstance, hydrationInstance) {
	  var node = hydrationInstance,
	    depth = 0;
	  do {
	    var nextNode = node.nextSibling;
	    parentInstance.removeChild(node);
	    if (nextNode && 8 === nextNode.nodeType)
	      if (((node = nextNode.data), "/$" === node || "/&" === node)) {
	        if (0 === depth) {
	          parentInstance.removeChild(nextNode);
	          retryIfBlockedOn(hydrationInstance);
	          return;
	        }
	        depth--;
	      } else if (
	        "$" === node ||
	        "$?" === node ||
	        "$~" === node ||
	        "$!" === node ||
	        "&" === node
	      )
	        depth++;
	      else if ("html" === node)
	        releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
	      else if ("head" === node) {
	        node = parentInstance.ownerDocument.head;
	        releaseSingletonInstance(node);
	        for (var node$jscomp$0 = node.firstChild; node$jscomp$0; ) {
	          var nextNode$jscomp$0 = node$jscomp$0.nextSibling,
	            nodeName = node$jscomp$0.nodeName;
	          node$jscomp$0[internalHoistableMarker] ||
	            "SCRIPT" === nodeName ||
	            "STYLE" === nodeName ||
	            ("LINK" === nodeName &&
	              "stylesheet" === node$jscomp$0.rel.toLowerCase()) ||
	            node.removeChild(node$jscomp$0);
	          node$jscomp$0 = nextNode$jscomp$0;
	        }
	      } else
	        "body" === node &&
	          releaseSingletonInstance(parentInstance.ownerDocument.body);
	    node = nextNode;
	  } while (node);
	  retryIfBlockedOn(hydrationInstance);
	}
	function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
	  var node = suspenseInstance;
	  suspenseInstance = 0;
	  do {
	    var nextNode = node.nextSibling;
	    1 === node.nodeType
	      ? isHidden
	        ? ((node._stashedDisplay = node.style.display),
	          (node.style.display = "none"))
	        : ((node.style.display = node._stashedDisplay || ""),
	          "" === node.getAttribute("style") && node.removeAttribute("style"))
	      : 3 === node.nodeType &&
	        (isHidden
	          ? ((node._stashedText = node.nodeValue), (node.nodeValue = ""))
	          : (node.nodeValue = node._stashedText || ""));
	    if (nextNode && 8 === nextNode.nodeType)
	      if (((node = nextNode.data), "/$" === node))
	        if (0 === suspenseInstance) break;
	        else suspenseInstance--;
	      else
	        ("$" !== node && "$?" !== node && "$~" !== node && "$!" !== node) ||
	          suspenseInstance++;
	    node = nextNode;
	  } while (node);
	}
	function clearContainerSparingly(container) {
	  var nextNode = container.firstChild;
	  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
	  for (; nextNode; ) {
	    var node = nextNode;
	    nextNode = nextNode.nextSibling;
	    switch (node.nodeName) {
	      case "HTML":
	      case "HEAD":
	      case "BODY":
	        clearContainerSparingly(node);
	        detachDeletedInstance(node);
	        continue;
	      case "SCRIPT":
	      case "STYLE":
	        continue;
	      case "LINK":
	        if ("stylesheet" === node.rel.toLowerCase()) continue;
	    }
	    container.removeChild(node);
	  }
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
	  for (; 1 === instance.nodeType; ) {
	    var anyProps = props;
	    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
	      if (
	        !inRootOrSingleton &&
	        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
	      )
	        break;
	    } else if (!inRootOrSingleton)
	      if ("input" === type && "hidden" === instance.type) {
	        var name = null == anyProps.name ? null : "" + anyProps.name;
	        if (
	          "hidden" === anyProps.type &&
	          instance.getAttribute("name") === name
	        )
	          return instance;
	      } else return instance;
	    else if (!instance[internalHoistableMarker])
	      switch (type) {
	        case "meta":
	          if (!instance.hasAttribute("itemprop")) break;
	          return instance;
	        case "link":
	          name = instance.getAttribute("rel");
	          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
	            break;
	          else if (
	            name !== anyProps.rel ||
	            instance.getAttribute("href") !==
	              (null == anyProps.href || "" === anyProps.href
	                ? null
	                : anyProps.href) ||
	            instance.getAttribute("crossorigin") !==
	              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
	            instance.getAttribute("title") !==
	              (null == anyProps.title ? null : anyProps.title)
	          )
	            break;
	          return instance;
	        case "style":
	          if (instance.hasAttribute("data-precedence")) break;
	          return instance;
	        case "script":
	          name = instance.getAttribute("src");
	          if (
	            (name !== (null == anyProps.src ? null : anyProps.src) ||
	              instance.getAttribute("type") !==
	                (null == anyProps.type ? null : anyProps.type) ||
	              instance.getAttribute("crossorigin") !==
	                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
	            name &&
	            instance.hasAttribute("async") &&
	            !instance.hasAttribute("itemprop")
	          )
	            break;
	          return instance;
	        default:
	          return instance;
	      }
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) break;
	  }
	  return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
	  if ("" === text) return null;
	  for (; 3 !== instance.nodeType; ) {
	    if (
	      (1 !== instance.nodeType ||
	        "INPUT" !== instance.nodeName ||
	        "hidden" !== instance.type) &&
	      !inRootOrSingleton
	    )
	      return null;
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) return null;
	  }
	  return instance;
	}
	function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
	  for (; 8 !== instance.nodeType; ) {
	    if (
	      (1 !== instance.nodeType ||
	        "INPUT" !== instance.nodeName ||
	        "hidden" !== instance.type) &&
	      !inRootOrSingleton
	    )
	      return null;
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) return null;
	  }
	  return instance;
	}
	function isSuspenseInstancePending(instance) {
	  return "$?" === instance.data || "$~" === instance.data;
	}
	function isSuspenseInstanceFallback(instance) {
	  return (
	    "$!" === instance.data ||
	    ("$?" === instance.data && "loading" !== instance.ownerDocument.readyState)
	  );
	}
	function registerSuspenseInstanceRetry(instance, callback) {
	  var ownerDocument = instance.ownerDocument;
	  if ("$~" === instance.data) instance._reactRetry = callback;
	  else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
	    callback();
	  else {
	    var listener = function () {
	      callback();
	      ownerDocument.removeEventListener("DOMContentLoaded", listener);
	    };
	    ownerDocument.addEventListener("DOMContentLoaded", listener);
	    instance._reactRetry = listener;
	  }
	}
	function getNextHydratable(node) {
	  for (; null != node; node = node.nextSibling) {
	    var nodeType = node.nodeType;
	    if (1 === nodeType || 3 === nodeType) break;
	    if (8 === nodeType) {
	      nodeType = node.data;
	      if (
	        "$" === nodeType ||
	        "$!" === nodeType ||
	        "$?" === nodeType ||
	        "$~" === nodeType ||
	        "&" === nodeType ||
	        "F!" === nodeType ||
	        "F" === nodeType
	      )
	        break;
	      if ("/$" === nodeType || "/&" === nodeType) return null;
	    }
	  }
	  return node;
	}
	var previousHydratableOnEnteringScopedSingleton = null;
	function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
	  hydrationInstance = hydrationInstance.nextSibling;
	  for (var depth = 0; hydrationInstance; ) {
	    if (8 === hydrationInstance.nodeType) {
	      var data = hydrationInstance.data;
	      if ("/$" === data || "/&" === data) {
	        if (0 === depth)
	          return getNextHydratable(hydrationInstance.nextSibling);
	        depth--;
	      } else
	        ("$" !== data &&
	          "$!" !== data &&
	          "$?" !== data &&
	          "$~" !== data &&
	          "&" !== data) ||
	          depth++;
	    }
	    hydrationInstance = hydrationInstance.nextSibling;
	  }
	  return null;
	}
	function getParentHydrationBoundary(targetInstance) {
	  targetInstance = targetInstance.previousSibling;
	  for (var depth = 0; targetInstance; ) {
	    if (8 === targetInstance.nodeType) {
	      var data = targetInstance.data;
	      if (
	        "$" === data ||
	        "$!" === data ||
	        "$?" === data ||
	        "$~" === data ||
	        "&" === data
	      ) {
	        if (0 === depth) return targetInstance;
	        depth--;
	      } else ("/$" !== data && "/&" !== data) || depth++;
	    }
	    targetInstance = targetInstance.previousSibling;
	  }
	  return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
	  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
	  switch (type) {
	    case "html":
	      type = props.documentElement;
	      if (!type) throw Error(formatProdErrorMessage(452));
	      return type;
	    case "head":
	      type = props.head;
	      if (!type) throw Error(formatProdErrorMessage(453));
	      return type;
	    case "body":
	      type = props.body;
	      if (!type) throw Error(formatProdErrorMessage(454));
	      return type;
	    default:
	      throw Error(formatProdErrorMessage(451));
	  }
	}
	function releaseSingletonInstance(instance) {
	  for (var attributes = instance.attributes; attributes.length; )
	    instance.removeAttributeNode(attributes[0]);
	  detachDeletedInstance(instance);
	}
	var preloadPropsMap = new Map(),
	  preconnectsSet = new Set();
	function getHoistableRoot(container) {
	  return "function" === typeof container.getRootNode
	    ? container.getRootNode()
	    : 9 === container.nodeType
	      ? container
	      : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
	  f: flushSyncWork,
	  r: requestFormReset,
	  D: prefetchDNS,
	  C: preconnect,
	  L: preload,
	  m: preloadModule,
	  X: preinitScript,
	  S: preinitStyle,
	  M: preinitModuleScript
	};
	function flushSyncWork() {
	  var previousWasRendering = previousDispatcher.f(),
	    wasRendering = flushSyncWork$1();
	  return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
	  var formInst = getInstanceFromNode(form);
	  null !== formInst && 5 === formInst.tag && "form" === formInst.type
	    ? requestFormReset$1(formInst)
	    : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
	  var ownerDocument = globalDocument;
	  if (ownerDocument && "string" === typeof href && href) {
	    var limitedEscapedHref =
	      escapeSelectorAttributeValueInsideDoubleQuotes(href);
	    limitedEscapedHref =
	      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
	    "string" === typeof crossOrigin &&
	      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
	    preconnectsSet.has(limitedEscapedHref) ||
	      (preconnectsSet.add(limitedEscapedHref),
	      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
	      null === ownerDocument.querySelector(limitedEscapedHref) &&
	        ((href = ownerDocument.createElement("link")),
	        setInitialProperties(href, "link", rel),
	        markNodeAsHoistable(href),
	        ownerDocument.head.appendChild(href)));
	  }
	}
	function prefetchDNS(href) {
	  previousDispatcher.D(href);
	  preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
	  previousDispatcher.C(href, crossOrigin);
	  preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options) {
	  previousDispatcher.L(href, as, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href && as) {
	    var preloadSelector =
	      'link[rel="preload"][as="' +
	      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	      '"]';
	    "image" === as
	      ? options && options.imageSrcSet
	        ? ((preloadSelector +=
	            '[imagesrcset="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(
	              options.imageSrcSet
	            ) +
	            '"]'),
	          "string" === typeof options.imageSizes &&
	            (preloadSelector +=
	              '[imagesizes="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                options.imageSizes
	              ) +
	              '"]'))
	        : (preloadSelector +=
	            '[href="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	            '"]')
	      : (preloadSelector +=
	          '[href="' +
	          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	          '"]');
	    var key = preloadSelector;
	    switch (as) {
	      case "style":
	        key = getStyleKey(href);
	        break;
	      case "script":
	        key = getScriptKey(href);
	    }
	    preloadPropsMap.has(key) ||
	      ((href = assign(
	        {
	          rel: "preload",
	          href:
	            "image" === as && options && options.imageSrcSet ? void 0 : href,
	          as: as
	        },
	        options
	      )),
	      preloadPropsMap.set(key, href),
	      null !== ownerDocument.querySelector(preloadSelector) ||
	        ("style" === as &&
	          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
	        ("script" === as &&
	          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
	        ((as = ownerDocument.createElement("link")),
	        setInitialProperties(as, "link", href),
	        markNodeAsHoistable(as),
	        ownerDocument.head.appendChild(as)));
	  }
	}
	function preloadModule(href, options) {
	  previousDispatcher.m(href, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var as = options && "string" === typeof options.as ? options.as : "script",
	      preloadSelector =
	        'link[rel="modulepreload"][as="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	        '"][href="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	        '"]',
	      key = preloadSelector;
	    switch (as) {
	      case "audioworklet":
	      case "paintworklet":
	      case "serviceworker":
	      case "sharedworker":
	      case "worker":
	      case "script":
	        key = getScriptKey(href);
	    }
	    if (
	      !preloadPropsMap.has(key) &&
	      ((href = assign({ rel: "modulepreload", href: href }, options)),
	      preloadPropsMap.set(key, href),
	      null === ownerDocument.querySelector(preloadSelector))
	    ) {
	      switch (as) {
	        case "audioworklet":
	        case "paintworklet":
	        case "serviceworker":
	        case "sharedworker":
	        case "worker":
	        case "script":
	          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
	            return;
	      }
	      as = ownerDocument.createElement("link");
	      setInitialProperties(as, "link", href);
	      markNodeAsHoistable(as);
	      ownerDocument.head.appendChild(as);
	    }
	  }
	}
	function preinitStyle(href, precedence, options) {
	  previousDispatcher.S(href, precedence, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
	      key = getStyleKey(href);
	    precedence = precedence || "default";
	    var resource = styles.get(key);
	    if (!resource) {
	      var state = { loading: 0, preload: null };
	      if (
	        (resource = ownerDocument.querySelector(
	          getStylesheetSelectorFromKey(key)
	        ))
	      )
	        state.loading = 5;
	      else {
	        href = assign(
	          { rel: "stylesheet", href: href, "data-precedence": precedence },
	          options
	        );
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForStylesheet(href, options);
	        var link = (resource = ownerDocument.createElement("link"));
	        markNodeAsHoistable(link);
	        setInitialProperties(link, "link", href);
	        link._p = new Promise(function (resolve, reject) {
	          link.onload = resolve;
	          link.onerror = reject;
	        });
	        link.addEventListener("load", function () {
	          state.loading |= 1;
	        });
	        link.addEventListener("error", function () {
	          state.loading |= 2;
	        });
	        state.loading |= 4;
	        insertStylesheet(resource, precedence, ownerDocument);
	      }
	      resource = {
	        type: "stylesheet",
	        instance: resource,
	        count: 1,
	        state: state
	      };
	      styles.set(key, resource);
	    }
	  }
	}
	function preinitScript(src, options) {
	  previousDispatcher.X(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: true }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function preinitModuleScript(src, options) {
	  previousDispatcher.M(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: true, type: "module" }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
	  var JSCompiler_inline_result = (JSCompiler_inline_result =
	    rootInstanceStackCursor.current)
	    ? getHoistableRoot(JSCompiler_inline_result)
	    : null;
	  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
	  switch (type) {
	    case "meta":
	    case "title":
	      return null;
	    case "style":
	      return "string" === typeof pendingProps.precedence &&
	        "string" === typeof pendingProps.href
	        ? ((currentProps = getStyleKey(pendingProps.href)),
	          (pendingProps = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles),
	          (currentResource = pendingProps.get(currentProps)),
	          currentResource ||
	            ((currentResource = {
	              type: "style",
	              instance: null,
	              count: 0,
	              state: null
	            }),
	            pendingProps.set(currentProps, currentResource)),
	          currentResource)
	        : { type: "void", instance: null, count: 0, state: null };
	    case "link":
	      if (
	        "stylesheet" === pendingProps.rel &&
	        "string" === typeof pendingProps.href &&
	        "string" === typeof pendingProps.precedence
	      ) {
	        type = getStyleKey(pendingProps.href);
	        var styles$243 = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles,
	          resource$244 = styles$243.get(type);
	        resource$244 ||
	          ((JSCompiler_inline_result =
	            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
	          (resource$244 = {
	            type: "stylesheet",
	            instance: null,
	            count: 0,
	            state: { loading: 0, preload: null }
	          }),
	          styles$243.set(type, resource$244),
	          (styles$243 = JSCompiler_inline_result.querySelector(
	            getStylesheetSelectorFromKey(type)
	          )) &&
	            !styles$243._p &&
	            ((resource$244.instance = styles$243),
	            (resource$244.state.loading = 5)),
	          preloadPropsMap.has(type) ||
	            ((pendingProps = {
	              rel: "preload",
	              as: "style",
	              href: pendingProps.href,
	              crossOrigin: pendingProps.crossOrigin,
	              integrity: pendingProps.integrity,
	              media: pendingProps.media,
	              hrefLang: pendingProps.hrefLang,
	              referrerPolicy: pendingProps.referrerPolicy
	            }),
	            preloadPropsMap.set(type, pendingProps),
	            styles$243 ||
	              preloadStylesheet(
	                JSCompiler_inline_result,
	                type,
	                pendingProps,
	                resource$244.state
	              )));
	        if (currentProps && null === currentResource)
	          throw Error(formatProdErrorMessage(528, ""));
	        return resource$244;
	      }
	      if (currentProps && null !== currentResource)
	        throw Error(formatProdErrorMessage(529, ""));
	      return null;
	    case "script":
	      return (
	        (currentProps = pendingProps.async),
	        (pendingProps = pendingProps.src),
	        "string" === typeof pendingProps &&
	        currentProps &&
	        "function" !== typeof currentProps &&
	        "symbol" !== typeof currentProps
	          ? ((currentProps = getScriptKey(pendingProps)),
	            (pendingProps = getResourcesFromRoot(
	              JSCompiler_inline_result
	            ).hoistableScripts),
	            (currentResource = pendingProps.get(currentProps)),
	            currentResource ||
	              ((currentResource = {
	                type: "script",
	                instance: null,
	                count: 0,
	                state: null
	              }),
	              pendingProps.set(currentProps, currentResource)),
	            currentResource)
	          : { type: "void", instance: null, count: 0, state: null }
	      );
	    default:
	      throw Error(formatProdErrorMessage(444, type));
	  }
	}
	function getStyleKey(href) {
	  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
	}
	function getStylesheetSelectorFromKey(key) {
	  return 'link[rel="stylesheet"][' + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
	  return assign({}, rawProps, {
	    "data-precedence": rawProps.precedence,
	    precedence: null
	  });
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
	  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
	    ? (state.loading = 1)
	    : ((key = ownerDocument.createElement("link")),
	      (state.preload = key),
	      key.addEventListener("load", function () {
	        return (state.loading |= 1);
	      }),
	      key.addEventListener("error", function () {
	        return (state.loading |= 2);
	      }),
	      setInitialProperties(key, "link", preloadProps),
	      markNodeAsHoistable(key),
	      ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
	  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
	}
	function getScriptSelectorFromKey(key) {
	  return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
	  resource.count++;
	  if (null === resource.instance)
	    switch (resource.type) {
	      case "style":
	        var instance = hoistableRoot.querySelector(
	          'style[data-href~="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
	            '"]'
	        );
	        if (instance)
	          return (
	            (resource.instance = instance),
	            markNodeAsHoistable(instance),
	            instance
	          );
	        var styleProps = assign({}, props, {
	          "data-href": props.href,
	          "data-precedence": props.precedence,
	          href: null,
	          precedence: null
	        });
	        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
	          "style"
	        );
	        markNodeAsHoistable(instance);
	        setInitialProperties(instance, "style", styleProps);
	        insertStylesheet(instance, props.precedence, hoistableRoot);
	        return (resource.instance = instance);
	      case "stylesheet":
	        styleProps = getStyleKey(props.href);
	        var instance$249 = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(styleProps)
	        );
	        if (instance$249)
	          return (
	            (resource.state.loading |= 4),
	            (resource.instance = instance$249),
	            markNodeAsHoistable(instance$249),
	            instance$249
	          );
	        instance = stylesheetPropsFromRawProps(props);
	        (styleProps = preloadPropsMap.get(styleProps)) &&
	          adoptPreloadPropsForStylesheet(instance, styleProps);
	        instance$249 = (
	          hoistableRoot.ownerDocument || hoistableRoot
	        ).createElement("link");
	        markNodeAsHoistable(instance$249);
	        var linkInstance = instance$249;
	        linkInstance._p = new Promise(function (resolve, reject) {
	          linkInstance.onload = resolve;
	          linkInstance.onerror = reject;
	        });
	        setInitialProperties(instance$249, "link", instance);
	        resource.state.loading |= 4;
	        insertStylesheet(instance$249, props.precedence, hoistableRoot);
	        return (resource.instance = instance$249);
	      case "script":
	        instance$249 = getScriptKey(props.src);
	        if (
	          (styleProps = hoistableRoot.querySelector(
	            getScriptSelectorFromKey(instance$249)
	          ))
	        )
	          return (
	            (resource.instance = styleProps),
	            markNodeAsHoistable(styleProps),
	            styleProps
	          );
	        instance = props;
	        if ((styleProps = preloadPropsMap.get(instance$249)))
	          (instance = assign({}, props)),
	            adoptPreloadPropsForScript(instance, styleProps);
	        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	        styleProps = hoistableRoot.createElement("script");
	        markNodeAsHoistable(styleProps);
	        setInitialProperties(styleProps, "link", instance);
	        hoistableRoot.head.appendChild(styleProps);
	        return (resource.instance = styleProps);
	      case "void":
	        return null;
	      default:
	        throw Error(formatProdErrorMessage(443, resource.type));
	    }
	  else
	    "stylesheet" === resource.type &&
	      0 === (resource.state.loading & 4) &&
	      ((instance = resource.instance),
	      (resource.state.loading |= 4),
	      insertStylesheet(instance, props.precedence, hoistableRoot));
	  return resource.instance;
	}
	function insertStylesheet(instance, precedence, root) {
	  for (
	    var nodes = root.querySelectorAll(
	        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
	      ),
	      last = nodes.length ? nodes[nodes.length - 1] : null,
	      prior = last,
	      i = 0;
	    i < nodes.length;
	    i++
	  ) {
	    var node = nodes[i];
	    if (node.dataset.precedence === precedence) prior = node;
	    else if (prior !== last) break;
	  }
	  prior
	    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
	    : ((precedence = 9 === root.nodeType ? root.head : root),
	      precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
	  null == stylesheetProps.crossOrigin &&
	    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
	  null == stylesheetProps.referrerPolicy &&
	    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
	  null == scriptProps.crossOrigin &&
	    (scriptProps.crossOrigin = preloadProps.crossOrigin);
	  null == scriptProps.referrerPolicy &&
	    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == scriptProps.integrity &&
	    (scriptProps.integrity = preloadProps.integrity);
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
	  if (null === tagCaches) {
	    var cache = new Map();
	    var caches = (tagCaches = new Map());
	    caches.set(ownerDocument, cache);
	  } else
	    (caches = tagCaches),
	      (cache = caches.get(ownerDocument)),
	      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
	  if (cache.has(type)) return cache;
	  cache.set(type, null);
	  ownerDocument = ownerDocument.getElementsByTagName(type);
	  for (caches = 0; caches < ownerDocument.length; caches++) {
	    var node = ownerDocument[caches];
	    if (
	      !(
	        node[internalHoistableMarker] ||
	        node[internalInstanceKey] ||
	        ("link" === type && "stylesheet" === node.getAttribute("rel"))
	      ) &&
	      "http://www.w3.org/2000/svg" !== node.namespaceURI
	    ) {
	      var nodeKey = node.getAttribute(keyAttribute) || "";
	      nodeKey = type + nodeKey;
	      var existing = cache.get(nodeKey);
	      existing ? existing.push(node) : cache.set(nodeKey, [node]);
	    }
	  }
	  return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
	  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	  hoistableRoot.head.insertBefore(
	    instance,
	    "title" === type ? hoistableRoot.querySelector("head > title") : null
	  );
	}
	function isHostHoistableType(type, props, hostContext) {
	  if (1 === hostContext || null != props.itemProp) return false;
	  switch (type) {
	    case "meta":
	    case "title":
	      return true;
	    case "style":
	      if (
	        "string" !== typeof props.precedence ||
	        "string" !== typeof props.href ||
	        "" === props.href
	      )
	        break;
	      return true;
	    case "link":
	      if (
	        "string" !== typeof props.rel ||
	        "string" !== typeof props.href ||
	        "" === props.href ||
	        props.onLoad ||
	        props.onError
	      )
	        break;
	      switch (props.rel) {
	        case "stylesheet":
	          return (
	            (type = props.disabled),
	            "string" === typeof props.precedence && null == type
	          );
	        default:
	          return true;
	      }
	    case "script":
	      if (
	        props.async &&
	        "function" !== typeof props.async &&
	        "symbol" !== typeof props.async &&
	        !props.onLoad &&
	        !props.onError &&
	        props.src &&
	        "string" === typeof props.src
	      )
	        return true;
	  }
	  return false;
	}
	function preloadResource(resource) {
	  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
	    ? false
	    : true;
	}
	function suspendResource(state, hoistableRoot, resource, props) {
	  if (
	    "stylesheet" === resource.type &&
	    ("string" !== typeof props.media ||
	      false !== matchMedia(props.media).matches) &&
	    0 === (resource.state.loading & 4)
	  ) {
	    if (null === resource.instance) {
	      var key = getStyleKey(props.href),
	        instance = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(key)
	        );
	      if (instance) {
	        hoistableRoot = instance._p;
	        null !== hoistableRoot &&
	          "object" === typeof hoistableRoot &&
	          "function" === typeof hoistableRoot.then &&
	          (state.count++,
	          (state = onUnsuspend.bind(state)),
	          hoistableRoot.then(state, state));
	        resource.state.loading |= 4;
	        resource.instance = instance;
	        markNodeAsHoistable(instance);
	        return;
	      }
	      instance = hoistableRoot.ownerDocument || hoistableRoot;
	      props = stylesheetPropsFromRawProps(props);
	      (key = preloadPropsMap.get(key)) &&
	        adoptPreloadPropsForStylesheet(props, key);
	      instance = instance.createElement("link");
	      markNodeAsHoistable(instance);
	      var linkInstance = instance;
	      linkInstance._p = new Promise(function (resolve, reject) {
	        linkInstance.onload = resolve;
	        linkInstance.onerror = reject;
	      });
	      setInitialProperties(instance, "link", props);
	      resource.instance = instance;
	    }
	    null === state.stylesheets && (state.stylesheets = new Map());
	    state.stylesheets.set(resource, hoistableRoot);
	    (hoistableRoot = resource.state.preload) &&
	      0 === (resource.state.loading & 3) &&
	      (state.count++,
	      (resource = onUnsuspend.bind(state)),
	      hoistableRoot.addEventListener("load", resource),
	      hoistableRoot.addEventListener("error", resource));
	  }
	}
	var estimatedBytesWithinLimit = 0;
	function waitForCommitToBeReady(state, timeoutOffset) {
	  state.stylesheets &&
	    0 === state.count &&
	    insertSuspendedStylesheets(state, state.stylesheets);
	  return 0 < state.count || 0 < state.imgCount
	    ? function (commit) {
	        var stylesheetTimer = setTimeout(function () {
	          state.stylesheets &&
	            insertSuspendedStylesheets(state, state.stylesheets);
	          if (state.unsuspend) {
	            var unsuspend = state.unsuspend;
	            state.unsuspend = null;
	            unsuspend();
	          }
	        }, 6e4 + timeoutOffset);
	        0 < state.imgBytes &&
	          0 === estimatedBytesWithinLimit &&
	          (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
	        var imgTimer = setTimeout(
	          function () {
	            state.waitingForImages = false;
	            if (
	              0 === state.count &&
	              (state.stylesheets &&
	                insertSuspendedStylesheets(state, state.stylesheets),
	              state.unsuspend)
	            ) {
	              var unsuspend = state.unsuspend;
	              state.unsuspend = null;
	              unsuspend();
	            }
	          },
	          (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) +
	            timeoutOffset
	        );
	        state.unsuspend = commit;
	        return function () {
	          state.unsuspend = null;
	          clearTimeout(stylesheetTimer);
	          clearTimeout(imgTimer);
	        };
	      }
	    : null;
	}
	function onUnsuspend() {
	  this.count--;
	  if (0 === this.count && (0 === this.imgCount || !this.waitingForImages))
	    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
	    else if (this.unsuspend) {
	      var unsuspend = this.unsuspend;
	      this.unsuspend = null;
	      unsuspend();
	    }
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
	  state.stylesheets = null;
	  null !== state.unsuspend &&
	    (state.count++,
	    (precedencesByRoot = new Map()),
	    resources.forEach(insertStylesheetIntoRoot, state),
	    (precedencesByRoot = null),
	    onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root, resource) {
	  if (!(resource.state.loading & 4)) {
	    var precedences = precedencesByRoot.get(root);
	    if (precedences) var last = precedences.get(null);
	    else {
	      precedences = new Map();
	      precedencesByRoot.set(root, precedences);
	      for (
	        var nodes = root.querySelectorAll(
	            "link[data-precedence],style[data-precedence]"
	          ),
	          i = 0;
	        i < nodes.length;
	        i++
	      ) {
	        var node = nodes[i];
	        if (
	          "LINK" === node.nodeName ||
	          "not all" !== node.getAttribute("media")
	        )
	          precedences.set(node.dataset.precedence, node), (last = node);
	      }
	      last && precedences.set(null, last);
	    }
	    nodes = resource.instance;
	    node = nodes.getAttribute("data-precedence");
	    i = precedences.get(node) || last;
	    i === last && precedences.set(null, nodes);
	    precedences.set(node, nodes);
	    this.count++;
	    last = onUnsuspend.bind(this);
	    nodes.addEventListener("load", last);
	    nodes.addEventListener("error", last);
	    i
	      ? i.parentNode.insertBefore(nodes, i.nextSibling)
	      : ((root = 9 === root.nodeType ? root.head : root),
	        root.insertBefore(nodes, root.firstChild));
	    resource.state.loading |= 4;
	  }
	}
	var HostTransitionContext = {
	  $$typeof: REACT_CONTEXT_TYPE,
	  Provider: null,
	  Consumer: null,
	  _currentValue: sharedNotPendingObject,
	  _currentValue2: sharedNotPendingObject,
	  _threadCount: 0
	};
	function FiberRootNode(
	  containerInfo,
	  tag,
	  hydrate,
	  identifierPrefix,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  onDefaultTransitionIndicator,
	  formState
	) {
	  this.tag = 1;
	  this.containerInfo = containerInfo;
	  this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode =
	    this.next =
	    this.pendingContext =
	    this.context =
	    this.cancelPendingCommit =
	      null;
	  this.callbackPriority = 0;
	  this.expirationTimes = createLaneMap(-1);
	  this.entangledLanes =
	    this.shellSuspendCounter =
	    this.errorRecoveryDisabledLanes =
	    this.expiredLanes =
	    this.warmLanes =
	    this.pingedLanes =
	    this.suspendedLanes =
	    this.pendingLanes =
	      0;
	  this.entanglements = createLaneMap(0);
	  this.hiddenUpdates = createLaneMap(null);
	  this.identifierPrefix = identifierPrefix;
	  this.onUncaughtError = onUncaughtError;
	  this.onCaughtError = onCaughtError;
	  this.onRecoverableError = onRecoverableError;
	  this.pooledCache = null;
	  this.pooledCacheLanes = 0;
	  this.formState = formState;
	  this.incompleteTransitions = new Map();
	}
	function createFiberRoot(
	  containerInfo,
	  tag,
	  hydrate,
	  initialChildren,
	  hydrationCallbacks,
	  isStrictMode,
	  identifierPrefix,
	  formState,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  onDefaultTransitionIndicator
	) {
	  containerInfo = new FiberRootNode(
	    containerInfo,
	    tag,
	    hydrate,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    onDefaultTransitionIndicator,
	    formState
	  );
	  tag = 1;
	  true === isStrictMode && (tag |= 24);
	  isStrictMode = createFiberImplClass(3, null, null, tag);
	  containerInfo.current = isStrictMode;
	  isStrictMode.stateNode = containerInfo;
	  tag = createCache();
	  tag.refCount++;
	  containerInfo.pooledCache = tag;
	  tag.refCount++;
	  isStrictMode.memoizedState = {
	    element: initialChildren,
	    isDehydrated: hydrate,
	    cache: tag
	  };
	  initializeUpdateQueue(isStrictMode);
	  return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) return emptyContextObject;
	  parentComponent = emptyContextObject;
	  return parentComponent;
	}
	function updateContainerImpl(
	  rootFiber,
	  lane,
	  element,
	  container,
	  parentComponent,
	  callback
	) {
	  parentComponent = getContextForSubtree(parentComponent);
	  null === container.context
	    ? (container.context = parentComponent)
	    : (container.pendingContext = parentComponent);
	  container = createUpdate(lane);
	  container.payload = { element: element };
	  callback = void 0 === callback ? null : callback;
	  null !== callback && (container.callback = callback);
	  element = enqueueUpdate(rootFiber, container, lane);
	  null !== element &&
	    (scheduleUpdateOnFiber(element, rootFiber, lane),
	    entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
	  fiber = fiber.memoizedState;
	  if (null !== fiber && null !== fiber.dehydrated) {
	    var a = fiber.retryLane;
	    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
	  }
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
	  markRetryLaneImpl(fiber, retryLane);
	  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
	  if (13 === fiber.tag || 31 === fiber.tag) {
	    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
	    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
	    markRetryLaneIfNotHydrated(fiber, 67108864);
	  }
	}
	function attemptHydrationAtCurrentPriority(fiber) {
	  if (13 === fiber.tag || 31 === fiber.tag) {
	    var lane = requestUpdateLane();
	    lane = getBumpedLaneForHydrationByLane(lane);
	    var root = enqueueConcurrentRenderForLane(fiber, lane);
	    null !== root && scheduleUpdateOnFiber(root, fiber, lane);
	    markRetryLaneIfNotHydrated(fiber, lane);
	  }
	}
	var _enabled = true;
	function dispatchDiscreteEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 2),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchContinuousEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 8),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchEvent(
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (_enabled) {
	    var blockedOn = findInstanceBlockingEvent(nativeEvent);
	    if (null === blockedOn)
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        return_targetInst,
	        targetContainer
	      ),
	        clearIfContinuousEvent(domEventName, nativeEvent);
	    else if (
	      queueIfContinuousEvent(
	        blockedOn,
	        domEventName,
	        eventSystemFlags,
	        targetContainer,
	        nativeEvent
	      )
	    )
	      nativeEvent.stopPropagation();
	    else if (
	      (clearIfContinuousEvent(domEventName, nativeEvent),
	      eventSystemFlags & 4 &&
	        -1 < discreteReplayableEvents.indexOf(domEventName))
	    ) {
	      for (; null !== blockedOn; ) {
	        var fiber = getInstanceFromNode(blockedOn);
	        if (null !== fiber)
	          switch (fiber.tag) {
	            case 3:
	              fiber = fiber.stateNode;
	              if (fiber.current.memoizedState.isDehydrated) {
	                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
	                if (0 !== lanes) {
	                  var root = fiber;
	                  root.pendingLanes |= 2;
	                  for (root.entangledLanes |= 2; lanes; ) {
	                    var lane = 1 << (31 - clz32(lanes));
	                    root.entanglements[1] |= lane;
	                    lanes &= ~lane;
	                  }
	                  ensureRootIsScheduled(fiber);
	                  0 === (executionContext & 6) &&
	                    ((workInProgressRootRenderTargetTime = now() + 500),
	                    flushSyncWorkAcrossRoots_impl(0));
	                }
	              }
	              break;
	            case 31:
	            case 13:
	              (root = enqueueConcurrentRenderForLane(fiber, 2)),
	                null !== root && scheduleUpdateOnFiber(root, fiber, 2),
	                flushSyncWork$1(),
	                markRetryLaneIfNotHydrated(fiber, 2);
	          }
	        fiber = findInstanceBlockingEvent(nativeEvent);
	        null === fiber &&
	          dispatchEventForPluginEventSystem(
	            domEventName,
	            eventSystemFlags,
	            nativeEvent,
	            return_targetInst,
	            targetContainer
	          );
	        if (fiber === blockedOn) break;
	        blockedOn = fiber;
	      }
	      null !== blockedOn && nativeEvent.stopPropagation();
	    } else
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        null,
	        targetContainer
	      );
	  }
	}
	function findInstanceBlockingEvent(nativeEvent) {
	  nativeEvent = getEventTarget(nativeEvent);
	  return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
	  return_targetInst = null;
	  targetNode = getClosestInstanceFromNode(targetNode);
	  if (null !== targetNode) {
	    var nearestMounted = getNearestMountedFiber(targetNode);
	    if (null === nearestMounted) targetNode = null;
	    else {
	      var tag = nearestMounted.tag;
	      if (13 === tag) {
	        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
	        if (null !== targetNode) return targetNode;
	        targetNode = null;
	      } else if (31 === tag) {
	        targetNode = getActivityInstanceFromFiber(nearestMounted);
	        if (null !== targetNode) return targetNode;
	        targetNode = null;
	      } else if (3 === tag) {
	        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
	          return 3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        targetNode = null;
	      } else nearestMounted !== targetNode && (targetNode = null);
	    }
	  }
	  return_targetInst = targetNode;
	  return null;
	}
	function getEventPriority(domEventName) {
	  switch (domEventName) {
	    case "beforetoggle":
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "toggle":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 2;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 8;
	    case "message":
	      switch (getCurrentPriorityLevel()) {
	        case ImmediatePriority:
	          return 2;
	        case UserBlockingPriority:
	          return 8;
	        case NormalPriority$1:
	        case LowPriority:
	          return 32;
	        case IdlePriority:
	          return 268435456;
	        default:
	          return 32;
	      }
	    default:
	      return 32;
	  }
	}
	var hasScheduledReplayAttempt = false,
	  queuedFocus = null,
	  queuedDrag = null,
	  queuedMouse = null,
	  queuedPointers = new Map(),
	  queuedPointerCaptures = new Map(),
	  queuedExplicitHydrationTargets = [],
	  discreteReplayableEvents =
	    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
	      " "
	    );
	function clearIfContinuousEvent(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "focusin":
	    case "focusout":
	      queuedFocus = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      queuedDrag = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      queuedMouse = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      queuedPointers.delete(nativeEvent.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      queuedPointerCaptures.delete(nativeEvent.pointerId);
	  }
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(
	  existingQueuedEvent,
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (
	    null === existingQueuedEvent ||
	    existingQueuedEvent.nativeEvent !== nativeEvent
	  )
	    return (
	      (existingQueuedEvent = {
	        blockedOn: blockedOn,
	        domEventName: domEventName,
	        eventSystemFlags: eventSystemFlags,
	        nativeEvent: nativeEvent,
	        targetContainers: [targetContainer]
	      }),
	      null !== blockedOn &&
	        ((blockedOn = getInstanceFromNode(blockedOn)),
	        null !== blockedOn && attemptContinuousHydration(blockedOn)),
	      existingQueuedEvent
	    );
	  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
	  blockedOn = existingQueuedEvent.targetContainers;
	  null !== targetContainer &&
	    -1 === blockedOn.indexOf(targetContainer) &&
	    blockedOn.push(targetContainer);
	  return existingQueuedEvent;
	}
	function queueIfContinuousEvent(
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  switch (domEventName) {
	    case "focusin":
	      return (
	        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedFocus,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "dragenter":
	      return (
	        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedDrag,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "mouseover":
	      return (
	        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedMouse,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "pointerover":
	      var pointerId = nativeEvent.pointerId;
	      queuedPointers.set(
	        pointerId,
	        accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedPointers.get(pointerId) || null,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )
	      );
	      return true;
	    case "gotpointercapture":
	      return (
	        (pointerId = nativeEvent.pointerId),
	        queuedPointerCaptures.set(
	          pointerId,
	          accumulateOrCreateContinuousQueuedReplayableEvent(
	            queuedPointerCaptures.get(pointerId) || null,
	            blockedOn,
	            domEventName,
	            eventSystemFlags,
	            targetContainer,
	            nativeEvent
	          )
	        ),
	        true
	      );
	  }
	  return false;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
	  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
	  if (null !== targetInst) {
	    var nearestMounted = getNearestMountedFiber(targetInst);
	    if (null !== nearestMounted)
	      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
	        if (
	          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
	          null !== targetInst)
	        ) {
	          queuedTarget.blockedOn = targetInst;
	          runWithPriority(queuedTarget.priority, function () {
	            attemptHydrationAtCurrentPriority(nearestMounted);
	          });
	          return;
	        }
	      } else if (31 === targetInst) {
	        if (
	          ((targetInst = getActivityInstanceFromFiber(nearestMounted)),
	          null !== targetInst)
	        ) {
	          queuedTarget.blockedOn = targetInst;
	          runWithPriority(queuedTarget.priority, function () {
	            attemptHydrationAtCurrentPriority(nearestMounted);
	          });
	          return;
	        }
	      } else if (
	        3 === targetInst &&
	        nearestMounted.stateNode.current.memoizedState.isDehydrated
	      ) {
	        queuedTarget.blockedOn =
	          3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        return;
	      }
	  }
	  queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
	  if (null !== queuedEvent.blockedOn) return false;
	  for (
	    var targetContainers = queuedEvent.targetContainers;
	    0 < targetContainers.length;

	  ) {
	    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
	    if (null === nextBlockedOn) {
	      nextBlockedOn = queuedEvent.nativeEvent;
	      var nativeEventClone = new nextBlockedOn.constructor(
	        nextBlockedOn.type,
	        nextBlockedOn
	      );
	      currentReplayingEvent = nativeEventClone;
	      nextBlockedOn.target.dispatchEvent(nativeEventClone);
	      currentReplayingEvent = null;
	    } else
	      return (
	        (targetContainers = getInstanceFromNode(nextBlockedOn)),
	        null !== targetContainers &&
	          attemptContinuousHydration(targetContainers),
	        (queuedEvent.blockedOn = nextBlockedOn),
	        false
	      );
	    targetContainers.shift();
	  }
	  return true;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
	  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
	  hasScheduledReplayAttempt = false;
	  null !== queuedFocus &&
	    attemptReplayContinuousQueuedEvent(queuedFocus) &&
	    (queuedFocus = null);
	  null !== queuedDrag &&
	    attemptReplayContinuousQueuedEvent(queuedDrag) &&
	    (queuedDrag = null);
	  null !== queuedMouse &&
	    attemptReplayContinuousQueuedEvent(queuedMouse) &&
	    (queuedMouse = null);
	  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
	  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
	  queuedEvent.blockedOn === unblocked &&
	    ((queuedEvent.blockedOn = null),
	    hasScheduledReplayAttempt ||
	      ((hasScheduledReplayAttempt = true),
	      Scheduler.unstable_scheduleCallback(
	        Scheduler.unstable_NormalPriority,
	        replayUnblockedEvents
	      )));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
	  lastScheduledReplayQueue !== formReplayingQueue &&
	    ((lastScheduledReplayQueue = formReplayingQueue),
	    Scheduler.unstable_scheduleCallback(
	      Scheduler.unstable_NormalPriority,
	      function () {
	        lastScheduledReplayQueue === formReplayingQueue &&
	          (lastScheduledReplayQueue = null);
	        for (var i = 0; i < formReplayingQueue.length; i += 3) {
	          var form = formReplayingQueue[i],
	            submitterOrAction = formReplayingQueue[i + 1],
	            formData = formReplayingQueue[i + 2];
	          if ("function" !== typeof submitterOrAction)
	            if (null === findInstanceBlockingTarget(submitterOrAction || form))
	              continue;
	            else break;
	          var formInst = getInstanceFromNode(form);
	          null !== formInst &&
	            (formReplayingQueue.splice(i, 3),
	            (i -= 3),
	            startHostTransition(
	              formInst,
	              {
	                pending: true,
	                data: formData,
	                method: form.method,
	                action: submitterOrAction
	              },
	              submitterOrAction,
	              formData
	            ));
	        }
	      }
	    ));
	}
	function retryIfBlockedOn(unblocked) {
	  function unblock(queuedEvent) {
	    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
	  }
	  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
	  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
	  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
	  queuedPointers.forEach(unblock);
	  queuedPointerCaptures.forEach(unblock);
	  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
	    var queuedTarget = queuedExplicitHydrationTargets[i];
	    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
	  }
	  for (
	    ;
	    0 < queuedExplicitHydrationTargets.length &&
	    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

	  )
	    attemptExplicitHydrationTarget(i),
	      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
	  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
	  if (null != i)
	    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
	      var form = i[queuedTarget],
	        submitterOrAction = i[queuedTarget + 1],
	        formProps = form[internalPropsKey] || null;
	      if ("function" === typeof submitterOrAction)
	        formProps || scheduleReplayQueueIfNeeded(i);
	      else if (formProps) {
	        var action = null;
	        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
	          if (
	            ((form = submitterOrAction),
	            (formProps = submitterOrAction[internalPropsKey] || null))
	          )
	            action = formProps.formAction;
	          else {
	            if (null !== findInstanceBlockingTarget(form)) continue;
	          }
	        else action = formProps.action;
	        "function" === typeof action
	          ? (i[queuedTarget + 1] = action)
	          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
	        scheduleReplayQueueIfNeeded(i);
	      }
	    }
	}
	function defaultOnDefaultTransitionIndicator() {
	  function handleNavigate(event) {
	    event.canIntercept &&
	      "react-transition" === event.info &&
	      event.intercept({
	        handler: function () {
	          return new Promise(function (resolve) {
	            return (pendingResolve = resolve);
	          });
	        },
	        focusReset: "manual",
	        scroll: "manual"
	      });
	  }
	  function handleNavigateComplete() {
	    null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
	    isCancelled || setTimeout(startFakeNavigation, 20);
	  }
	  function startFakeNavigation() {
	    if (!isCancelled && !navigation.transition) {
	      var currentEntry = navigation.currentEntry;
	      currentEntry &&
	        null != currentEntry.url &&
	        navigation.navigate(currentEntry.url, {
	          state: currentEntry.getState(),
	          info: "react-transition",
	          history: "replace"
	        });
	    }
	  }
	  if ("object" === typeof navigation) {
	    var isCancelled = false,
	      pendingResolve = null;
	    navigation.addEventListener("navigate", handleNavigate);
	    navigation.addEventListener("navigatesuccess", handleNavigateComplete);
	    navigation.addEventListener("navigateerror", handleNavigateComplete);
	    setTimeout(startFakeNavigation, 100);
	    return function () {
	      isCancelled = true;
	      navigation.removeEventListener("navigate", handleNavigate);
	      navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
	      navigation.removeEventListener("navigateerror", handleNavigateComplete);
	      null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
	    };
	  }
	}
	function ReactDOMRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
	  function (children) {
	    var root = this._internalRoot;
	    if (null === root) throw Error(formatProdErrorMessage(409));
	    var current = root.current,
	      lane = requestUpdateLane();
	    updateContainerImpl(current, lane, children, root, null, null);
	  };
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
	  function () {
	    var root = this._internalRoot;
	    if (null !== root) {
	      this._internalRoot = null;
	      var container = root.containerInfo;
	      updateContainerImpl(root.current, 2, null, root, null, null);
	      flushSyncWork$1();
	      container[internalContainerInstanceKey] = null;
	    }
	  };
	function ReactDOMHydrationRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
	  if (target) {
	    var updatePriority = resolveUpdatePriority();
	    target = { blockedOn: null, target: target, priority: updatePriority };
	    for (
	      var i = 0;
	      i < queuedExplicitHydrationTargets.length &&
	      0 !== updatePriority &&
	      updatePriority < queuedExplicitHydrationTargets[i].priority;
	      i++
	    );
	    queuedExplicitHydrationTargets.splice(i, 0, target);
	    0 === i && attemptExplicitHydrationTarget(target);
	  }
	};
	var isomorphicReactPackageVersion$jscomp$inline_1840 = React.version;
	if (
	  "19.2.7" !==
	  isomorphicReactPackageVersion$jscomp$inline_1840
	)
	  throw Error(
	    formatProdErrorMessage(
	      527,
	      isomorphicReactPackageVersion$jscomp$inline_1840,
	      "19.2.7"
	    )
	  );
	ReactDOMSharedInternals.findDOMNode = function (componentOrElement) {
	  var fiber = componentOrElement._reactInternals;
	  if (void 0 === fiber) {
	    if ("function" === typeof componentOrElement.render)
	      throw Error(formatProdErrorMessage(188));
	    componentOrElement = Object.keys(componentOrElement).join(",");
	    throw Error(formatProdErrorMessage(268, componentOrElement));
	  }
	  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
	  componentOrElement =
	    null !== componentOrElement
	      ? findCurrentHostFiberImpl(componentOrElement)
	      : null;
	  componentOrElement =
	    null === componentOrElement ? null : componentOrElement.stateNode;
	  return componentOrElement;
	};
	var internals$jscomp$inline_2347 = {
	  bundleType: 0,
	  version: "19.2.7",
	  rendererPackageName: "react-dom",
	  currentDispatcherRef: ReactSharedInternals,
	  reconcilerVersion: "19.2.7"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (
	    !hook$jscomp$inline_2348.isDisabled &&
	    hook$jscomp$inline_2348.supportsFiber
	  )
	    try {
	      (rendererID = hook$jscomp$inline_2348.inject(
	        internals$jscomp$inline_2347
	      )),
	        (injectedHook = hook$jscomp$inline_2348);
	    } catch (err) {}
	}
	reactDomClient_production.createRoot = function (container, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError;
	  null !== options &&
	    void 0 !== options &&
	    (true === options.unstable_strictMode && (isStrictMode = true),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError));
	  options = createFiberRoot(
	    container,
	    1,
	    false,
	    null,
	    null,
	    isStrictMode,
	    identifierPrefix,
	    null,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    defaultOnDefaultTransitionIndicator
	  );
	  container[internalContainerInstanceKey] = options.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMRoot(options);
	};
	reactDomClient_production.hydrateRoot = function (container, initialChildren, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError,
	    formState = null;
	  null !== options &&
	    void 0 !== options &&
	    (true === options.unstable_strictMode && (isStrictMode = true),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError),
	    void 0 !== options.formState && (formState = options.formState));
	  initialChildren = createFiberRoot(
	    container,
	    1,
	    true,
	    initialChildren,
	    null != options ? options : null,
	    isStrictMode,
	    identifierPrefix,
	    formState,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    defaultOnDefaultTransitionIndicator
	  );
	  initialChildren.context = getContextForSubtree(null);
	  options = initialChildren.current;
	  isStrictMode = requestUpdateLane();
	  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
	  identifierPrefix = createUpdate(isStrictMode);
	  identifierPrefix.callback = null;
	  enqueueUpdate(options, identifierPrefix, isStrictMode);
	  options = isStrictMode;
	  initialChildren.current.lanes = options;
	  markRootUpdated$1(initialChildren, options);
	  ensureRootIsScheduled(initialChildren);
	  container[internalContainerInstanceKey] = initialChildren.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMHydrationRoot(initialChildren);
	};
	reactDomClient_production.version = "19.2.7";
	return reactDomClient_production;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client.exports;
	hasRequiredClient = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  client.exports = requireReactDomClient_production();
	}
	return client.exports;
}

var clientExports = requireClient();
const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

const defaultShortcuts = {
  focusSearch: { key: "/", ctrl: false, shift: false, alt: false, meta: false },
  close: { key: "Escape", ctrl: false, shift: false, alt: false, meta: false },
  playSound: { key: "Control", ctrl: true, shift: false, alt: false, meta: false, doublePress: false },
  playTranslatedSound: { key: "Control", ctrl: true, shift: false, alt: false, meta: false, doublePress: true },
  addToPhrasebook: { key: "b", ctrl: true, shift: false, alt: false, meta: false },
  copy: { key: "c", ctrl: true, shift: false, alt: false, meta: false },
  reTranslate: { key: "Enter", ctrl: true, shift: false, alt: false, meta: false },
  showHistory: { key: "d", ctrl: true, shift: false, alt: false, meta: false },
  showPhrasebook: { key: "v", ctrl: true, shift: false, alt: false, meta: false },
  showSettings: { key: "s", ctrl: true, shift: false, alt: false, meta: false },
  askAI: { key: "a", ctrl: true, shift: false, alt: false, meta: false },
  toggleNeon: { key: "n", ctrl: true, shift: true, alt: false, meta: false },
  toggleGlass: { key: "g", ctrl: true, shift: true, alt: false, meta: false },
  toggleTheme: { key: "l", ctrl: true, shift: true, alt: false, meta: false },
  toggleAutoPopup: { key: "p", ctrl: true, shift: true, alt: false, meta: false }
};

const isRTLLanguage = (lang) => ["Persian", "Arabic"].includes(lang);
const isTypingInTextField = (target) => {
  const el = target instanceof HTMLElement ? target : null;
  if (!el) return false;
  if (el instanceof HTMLTextAreaElement) return true;
  if (el.isContentEditable) return true;
  if (el instanceof HTMLInputElement) {
    const type = el.type.toLowerCase();
    return ["text", "password", "search", "email", "url", "tel", "number", ""].includes(type);
  }
  return false;
};
const getDeepActiveElement = () => {
  let active = document.activeElement;
  while (active instanceof HTMLElement && active.shadowRoot?.activeElement) {
    active = active.shadowRoot.activeElement;
  }
  return active;
};
const shouldSuppressAppShortcuts = (e) => {
  for (const node of e.composedPath()) {
    if (isTypingInTextField(node)) return true;
  }
  return isTypingInTextField(getDeepActiveElement());
};
const attachPopupScrollLock = (container) => {
  const handleWheel = (e) => {
    if (!container.isConnected) return;
    const path = e.composedPath();
    if (!path.includes(container)) return;
    let scrollTarget = null;
    for (const node of path) {
      if (!node || node.nodeType !== 1) continue;
      const element = node;
      const isScrollClass = element.classList && (element.classList.contains("berkut-scroll-contain") || element.classList.contains("custom-scrollbar"));
      let isScrollStyle = false;
      try {
        const { overflowY } = getComputedStyle(element);
        isScrollStyle = overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay";
      } catch (err) {
      }
      const isMainElement = element.tagName === "MAIN";
      if (isScrollClass || isScrollStyle || isMainElement) {
        scrollTarget = element;
        break;
      }
    }
    if (!scrollTarget) {
      const root = container.shadowRoot || container;
      scrollTarget = root.querySelector(".berkut-scroll-contain") || root.querySelector("main");
    }
    if (!scrollTarget) {
      return;
    }
    const hasOverflow = scrollTarget.scrollHeight > scrollTarget.clientHeight + 1;
    const atTop = scrollTarget.scrollTop <= 0;
    const atBottom = scrollTarget.scrollTop + scrollTarget.clientHeight >= scrollTarget.scrollHeight - 1;
    if (!hasOverflow || e.deltaY < 0 && atTop || e.deltaY > 0 && atBottom) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  container.addEventListener("wheel", handleWheel, { capture: true, passive: false });
  return () => container.removeEventListener("wheel", handleWheel, { capture: true });
};
const handleSettingsKeyDown = (e, currentValue, setter, step, min, max, isFloat = false) => {
  if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    e.preventDefault();
    const next = Math.min(max, currentValue + step);
    setter(isFloat ? parseFloat(next.toFixed(1)) : Math.round(next));
  } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
    e.preventDefault();
    const next = Math.max(min, currentValue - step);
    setter(isFloat ? parseFloat(next.toFixed(1)) : Math.round(next));
  }
};
const storage = {
  async get(key, defaultValue) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key] !== void 0 ? result[key] : defaultValue);
      });
    });
  },
  async set(key, value) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, resolve);
    });
  }
};
const truncateText = (text, limit) => {
  if (!text) return "";
  if (text.length <= limit) return text;
  return text.substring(0, limit) + "...";
};
const normalizeKey = (key) => {
  if (key === " ") return "Space";
  return key;
};
const isModifier = (key) => ["Control", "Shift", "Alt", "Meta"].includes(key);
const getPhysicalKey = (e) => {
  if (e.code.startsWith("Key")) return e.code.slice(3).toLowerCase();
  if (e.code.startsWith("Digit")) return e.code.slice(5);
  const codeMap = {
    "Slash": "/",
    "Backslash": "\\",
    "Period": ".",
    "Comma": ",",
    "Semicolon": ";",
    "Quote": "'",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Minus": "-",
    "Equal": "=",
    "Backquote": "`"
  };
  if (e.code in codeMap) {
    return codeMap[e.code];
  }
  return null;
};

const InfoBadge = ({ note, className }) => {
  const [popupPosition, setPopupPosition] = reactExports.useState("top");
  const [popupStyle, setPopupStyle] = reactExports.useState({});
  const containerRef = reactExports.useRef(null);
  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const appBase = containerRef.current.closest(".app-background");
      let position = "top";
      let txVal = "-50%";
      if (appBase) {
        const baseRect = appBase.getBoundingClientRect();
        const relativeTop = rect.top - baseRect.top;
        const spaceBelow = baseRect.height - (rect.bottom - baseRect.top);
        if (relativeTop < 140) {
          position = "bottom";
        } else if (spaceBelow < 160 && relativeTop > 160) {
          position = "top";
        } else {
          position = "top";
        }
        const badgeCenter = rect.left + rect.width / 2 - baseRect.left;
        let popupLeftRelative = badgeCenter - 140;
        const minLeft = 12;
        const maxLeft = baseRect.width - 280 - 12;
        if (popupLeftRelative < minLeft) {
          popupLeftRelative = minLeft;
        } else if (popupLeftRelative > maxLeft) {
          popupLeftRelative = maxLeft;
        }
        const targetLeftRelativeToBadge = popupLeftRelative - (rect.left - baseRect.left);
        const currentLeftRelativeToBadge = rect.width / 2;
        const calculatedTx = targetLeftRelativeToBadge - currentLeftRelativeToBadge;
        txVal = `${calculatedTx}px`;
      } else {
        if (rect.top < 140) {
          position = "bottom";
        } else {
          position = "top";
        }
      }
      setPopupPosition(position);
      setPopupStyle({
        "--popup-tx": txVal
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `info-badge-container ${className || ""}`,
      ref: containerRef,
      onMouseEnter: handleMouseEnter,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-badge-icon", "aria-label": "Information", children: "!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `info-note-popup position-${popupPosition}`,
            style: popupStyle,
            children: note
          }
        )
      ]
    }
  );
};

const LanguageSelector = ({
  targetLanguage,
  onSelect,
  isDarkMode
}) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [activeIndex, setActiveIndex] = reactExports.useState(-1);
  const dropdownRef = reactExports.useRef(null);
  const languages = [
    "Persian",
    "Russian",
    "English",
    "German",
    "Chinese",
    "Arabic",
    "Spanish",
    "Portuguese",
    "Italian",
    "Japanese",
    "Korean",
    "Turkish"
  ];
  const filteredLanguages = languages.filter(
    (lang) => lang.toLowerCase().includes(searchTerm.toLowerCase())
  );
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current) {
        const path = event.composedPath();
        if (!path.includes(dropdownRef.current)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  reactExports.useEffect(() => {
    if (!dropdownRef.current) return;
    const parentCard = dropdownRef.current.closest(".settings-card");
    if (parentCard) {
      if (isOpen) {
        parentCard.classList.add("has-open-dropdown");
      } else {
        parentCard.classList.remove("has-open-dropdown");
      }
    }
    return () => {
      if (parentCard) {
        parentCard.classList.remove("has-open-dropdown");
      }
    };
  }, [isOpen]);
  reactExports.useEffect(() => {
    setActiveIndex(-1);
  }, [isOpen, searchTerm]);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setSearchTerm("");
      return next;
    });
  };
  const handleInputMouseDown = (e) => {
    if (!isOpen) {
      setIsOpen(true);
      setSearchTerm("");
    }
  };
  const handleSelect = (lang) => {
    onSelect(lang);
    setIsOpen(false);
    setSearchTerm("");
  };
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown") {
        setIsOpen(true);
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => prev < filteredLanguages.length - 1 ? prev + 1 : prev);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => prev > 0 ? prev - 1 : 0);
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredLanguages.length) {
          handleSelect(filteredLanguages[activeIndex]);
        } else if (filteredLanguages.length > 0) {
          handleSelect(filteredLanguages[0]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `language-selector-container ${isOpen ? "open" : ""}`, ref: dropdownRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        className: "language-selector-input",
        placeholder: isOpen ? "Search languages..." : targetLanguage,
        value: isOpen ? searchTerm : targetLanguage,
        onMouseDown: handleInputMouseDown,
        onChange: (e) => setSearchTerm(e.target.value),
        onKeyDown: handleKeyDown,
        readOnly: !isOpen
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "language-selector-chevron", onMouseDown: handleToggle, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9l6 6 6-6" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "language-dropdown custom-scrollbar", children: filteredLanguages.length > 0 ? filteredLanguages.map((lang, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `language-dropdown-item ${lang === targetLanguage ? "selected" : ""} ${index === activeIndex ? "active" : ""}`,
        onMouseDown: (e) => {
          e.preventDefault();
          handleSelect(lang);
        },
        children: (() => {
          if (!searchTerm) return lang;
          const matchIdx = lang.toLowerCase().indexOf(searchTerm.toLowerCase());
          if (matchIdx === -1) return lang;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            lang.substring(0, matchIdx),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "language-match-highlight", children: lang.substring(matchIdx, matchIdx + searchTerm.length) }),
            lang.substring(matchIdx + searchTerm.length)
          ] });
        })()
      },
      lang
    )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "language-dropdown-empty", children: "No matching languages" }) })
  ] });
};

const CustomDropdown = ({
  value,
  options,
  onChange,
  isDarkMode,
  placeholder = "Select...",
  onFocus,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [activeIndex, setActiveIndex] = reactExports.useState(-1);
  const dropdownRef = reactExports.useRef(null);
  const itemsRef = reactExports.useRef([]);
  const selectedOption = options.find((opt) => opt.value === value) || { label: value };
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current) {
        const path = event.composedPath();
        if (!path.includes(dropdownRef.current)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  reactExports.useEffect(() => {
    if (!dropdownRef.current) return;
    const parentCard = dropdownRef.current.closest(".settings-card");
    if (parentCard) {
      if (isOpen) {
        parentCard.classList.add("has-open-dropdown");
      } else {
        parentCard.classList.remove("has-open-dropdown");
      }
    }
    return () => {
      if (parentCard) {
        parentCard.classList.remove("has-open-dropdown");
      }
    };
  }, [isOpen]);
  reactExports.useEffect(() => {
    if (isOpen) {
      const currentIdx = options.findIndex((opt) => opt.value === value);
      setActiveIndex(currentIdx >= 0 ? currentIdx : 0);
    } else {
      setActiveIndex(-1);
    }
  }, [isOpen, value, options]);
  reactExports.useEffect(() => {
    if (isOpen && activeIndex >= 0 && itemsRef.current[activeIndex]) {
      itemsRef.current[activeIndex]?.scrollIntoView({
        block: "nearest"
      });
    }
  }, [activeIndex, isOpen]);
  const handleMouseDown = (e) => {
    if (disabled) return;
    if (e.button !== 0) return;
    e.preventDefault();
    setIsOpen((prev) => !prev);
    if (onFocus) {
      onFocus();
    }
  };
  const handleSelect = (val) => {
    onChange(val);
    setIsOpen(false);
  };
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (!isOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
        if (onFocus) onFocus();
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => prev < options.length - 1 ? prev + 1 : prev);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => prev > 0 ? prev - 1 : 0);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < options.length) {
          handleSelect(options[activeIndex].value);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `language-selector-container ${isOpen ? "open" : ""} ${disabled ? "opacity-50 pointer-events-none" : ""}`,
      ref: dropdownRef,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "language-selector-input flex items-center justify-between",
            onMouseDown: handleMouseDown,
            tabIndex: disabled ? -1 : 0,
            onKeyDown: handleKeyDown,
            style: {
              cursor: disabled ? "not-allowed" : "pointer",
              userSelect: "none",
              ...isOpen ? {
                borderColor: "var(--accent-color)",
                boxShadow: "0 0 0 2px color-mix(in srgb, var(--accent-color), transparent 80%)"
              } : {}
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: selectedOption.label })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "language-selector-chevron", onMouseDown: handleMouseDown, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9l6 6 6-6" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "language-dropdown custom-scrollbar", style: { maxHeight: "180px" }, children: options.length > 0 ? options.map((opt, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: (el) => {
              itemsRef.current[index] = el;
            },
            className: `language-dropdown-item ${opt.value === value ? "selected" : ""} ${index === activeIndex ? "active" : ""}`,
            onMouseDown: (e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSelect(opt.value);
            },
            children: opt.label
          },
          opt.value
        )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "language-dropdown-empty", children: "No options available" }) })
      ]
    }
  );
};

const RelatedWords = ({
  title,
  words,
  translations,
  onPlayPronunciation,
  onWordClick,
  speakingWord,
  isDarkMode,
  targetLanguage
}) => {
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const isRTL = isRTLLanguage(targetLanguage);
  if (!words || words.length === 0) {
    return null;
  }
  const getBaseColor = () => {
    const t = title.toLowerCase();
    if (t === "synonyms") return "var(--accent-color)";
    if (t === "antonyms") return isDarkMode ? "#ef4444" : "#b91c1c";
    if (t === "nouns") return isDarkMode ? "#60a5fa" : "#1e40af";
    if (t === "verbs") return isDarkMode ? "#4ade80" : "#15803d";
    if (t === "adjectives") return isDarkMode ? "#fbbf24" : "#b45309";
    if (t === "adverbs") return isDarkMode ? "#a78bfa" : "#6b21a8";
    if (t === "hypernyms") return isDarkMode ? "#2dd4bf" : "#0d9488";
    if (t === "hyponyms") return isDarkMode ? "#f472b6" : "#db2777";
    return "var(--accent-color)";
  };
  const baseColor = getBaseColor();
  const pillStyle = {
    backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
    borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
    color: baseColor,
    borderWidth: "1px",
    borderStyle: "solid"
  };
  const tagBaseClasses = "flex items-center px-3 rounded-full cursor-pointer word-chip-interactive";
  const wordsToShow = isExpanded ? words : words.slice(0, 5);
  const hasMore = words.length > 5;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "4px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      height: "1px",
      width: "100%",
      backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
      marginTop: "10px",
      marginBottom: "10px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-gray-600 dark:text-gray-400", style: { marginBottom: "10px" }, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      wordsToShow.map((word, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "min-w-0",
          onClick: () => onWordClick(word),
          onContextMenu: (e) => {
            e.preventDefault();
            onPlayPronunciation(word);
          },
          title: `${word} (Right-click to pronounce)`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `${tagBaseClasses} ${speakingWord === word ? "animate-pulse-subtle" : ""}`,
              style: {
                ...pillStyle,
                paddingTop: "2px",
                paddingBottom: "2px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "bold", fontSize: "0.875rem" }, children: word }),
                translations && translations[index] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    style: {
                      marginLeft: "5px",
                      opacity: 0.85,
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      fontFamily: isRTL ? "Vazirmatn, sans-serif" : "inherit"
                    },
                    dir: isRTL ? "rtl" : "ltr",
                    children: [
                      "(",
                      translations[index],
                      ")"
                    ]
                  }
                )
              ]
            }
          )
        },
        index
      )),
      hasMore && !isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setIsExpanded(true),
          style: { color: baseColor, background: "transparent", border: "none" },
          className: "px-4 py-2 mt-1 rounded-full transition-colors hover:opacity-70 cursor-pointer",
          "aria-label": `Show all ${words.length} ${title}`,
          children: [
            "+",
            words.length - 5,
            " more"
          ]
        }
      )
    ] })
  ] });
};

const SettingsGroup = ({
  title,
  children,
  isOpen,
  onToggle,
  isDarkMode,
  infoNote,
  infoBadgeClassName,
  glassmorphismEnabled = false
}) => {
  const defaultBgColor = isDarkMode ? "#1f2937" : "#ffffff";
  const defaultBorderColor = isDarkMode ? "rgba(55, 65, 81, 0.8)" : "#e5e7eb";
  const cardBgColor = glassmorphismEnabled ? isDarkMode ? "rgba(31, 41, 55, 0.45)" : "rgba(255, 255, 255, 0.35)" : defaultBgColor;
  const cardBorderColor = glassmorphismEnabled ? isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.55)" : defaultBorderColor;
  const backdropFilter = glassmorphismEnabled ? "blur(10px) saturate(125%)" : "none";
  const contentBgColor = glassmorphismEnabled ? "rgba(255, 255, 255, 0.05)" : isDarkMode ? "rgba(31, 41, 55, 0.5)" : "rgba(249, 250, 251, 0.5)";
  const contentBorderTopColor = glassmorphismEnabled ? isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.3)" : isDarkMode ? "rgba(55, 65, 81, 0.6)" : "#e5e7eb";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl cursor-pointer group mb-3 settings-group-card",
      style: {
        backgroundColor: cardBgColor,
        border: `1px solid ${cardBorderColor}`,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
        e.currentTarget.style.borderColor = "var(--accent-color)";
        if (glassmorphismEnabled) {
          e.currentTarget.style.backgroundColor = isDarkMode ? "rgba(31, 41, 55, 0.55)" : "rgba(255, 255, 255, 0.45)";
        }
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = cardBorderColor;
        if (glassmorphismEnabled) {
          e.currentTarget.style.backgroundColor = cardBgColor;
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onToggle,
            className: "w-full flex justify-between items-center p-4 transition-colors settings-group-header",
            style: { background: "transparent", border: "none", cursor: "pointer" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-semibold text-lg",
                    style: { color: isDarkMode ? "#ffffff" : "#111827" },
                    children: title
                  }
                ),
                infoNote && /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: infoNote, className: infoBadgeClassName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: isDarkMode ? "#9ca3af" : "#6b7280",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  style: {
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              overflow: isOpen ? "visible" : "hidden",
              maxHeight: isOpen ? "1000px" : "0px",
              transform: isOpen ? "none" : "translateY(-8px) scale(0.98)",
              transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "p-4 space-y-4 settings-group-content",
                style: {
                  borderTop: `1px solid ${contentBorderTopColor}`,
                  backgroundColor: contentBgColor
                },
                children
              }
            )
          }
        )
      ]
    }
  );
};

const ShortcutRecorder = ({
  label,
  shortcut,
  onChange,
  isDarkMode,
  onRecordingChange
}) => {
  const [isRecording, setIsRecording] = reactExports.useState(false);
  const [currentKeys, setCurrentKeys] = reactExports.useState([]);
  const recordState = reactExports.useRef({
    held: /* @__PURE__ */ new Set(),
    combo: /* @__PURE__ */ new Set(),
    lastKey: null,
    lastTime: 0,
    timer: null,
    pending: null
  });
  const startRecording = () => {
    setIsRecording(true);
    if (onRecordingChange) onRecordingChange(true);
  };
  const stopRecording = reactExports.useCallback(() => {
    setIsRecording(false);
    if (onRecordingChange) onRecordingChange(false);
    setCurrentKeys([]);
    if (recordState.current.timer) {
      clearTimeout(recordState.current.timer);
      if (recordState.current.pending) {
        onChange(recordState.current.pending);
      }
    }
    recordState.current = {
      held: /* @__PURE__ */ new Set(),
      combo: /* @__PURE__ */ new Set(),
      lastKey: null,
      lastTime: 0,
      timer: null,
      pending: null
    };
  }, [onRecordingChange, onChange]);
  const formatShortcut = (s) => {
    if (!s || !s.key) return "None";
    if (s.doublePress) {
      let sLabel = s.key;
      if (sLabel === " ") sLabel = "Space";
      if (sLabel === "Control") sLabel = "Ctrl";
      return `${sLabel} x2`;
    }
    const parts = [];
    if (s.ctrl) parts.push("Ctrl");
    if (s.shift) parts.push("Shift");
    if (s.alt) parts.push("Alt");
    if (s.meta) parts.push("Meta");
    const keyDisplay = s.key.length === 1 ? s.key.toUpperCase() : s.key === " " ? "Space" : s.key;
    if (!["Control", "Shift", "Alt", "Meta"].includes(keyDisplay)) {
      parts.push(keyDisplay);
    }
    if (parts.length === 0 && ["Control", "Shift", "Alt", "Meta"].includes(s.key)) {
      parts.push(keyDisplay);
    }
    return parts.join(" + ");
  };
  const handleKeyDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.repeat) return;
    if (e.key === "Escape") {
      stopRecording();
      return;
    }
    const key = e.key === " " ? "Space" : e.key;
    const now = Date.now();
    if (recordState.current.held.size === 0 && !recordState.current.timer) {
      if (recordState.current.lastKey !== key) {
        recordState.current.combo = /* @__PURE__ */ new Set();
      }
    }
    if (recordState.current.lastKey === key && now - recordState.current.lastTime < 300) {
      if (recordState.current.timer) clearTimeout(recordState.current.timer);
      const newShortcut = {
        key,
        ctrl: e.ctrlKey,
        shift: e.shiftKey,
        alt: e.altKey,
        meta: e.metaKey,
        doublePress: true
      };
      onChange(newShortcut);
      stopRecording();
      return;
    }
    if (recordState.current.timer) clearTimeout(recordState.current.timer);
    recordState.current.held.add(e.code);
    recordState.current.combo.add(key);
    setCurrentKeys(Array.from(recordState.current.combo));
    recordState.current.lastKey = key;
    recordState.current.lastTime = now;
  };
  const handleKeyUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const key = e.key === " " ? "Space" : e.key;
    recordState.current.held.delete(e.code);
    if (recordState.current.held.size === 0) {
      const isCtrl = recordState.current.combo.has("Control");
      const isShift = recordState.current.combo.has("Shift");
      const isAlt = recordState.current.combo.has("Alt");
      const isMeta = recordState.current.combo.has("Meta");
      let primaryKey = "";
      for (const k of recordState.current.combo) {
        if (!["Control", "Shift", "Alt", "Meta"].includes(k)) {
          primaryKey = k;
        }
      }
      if (!primaryKey) primaryKey = key;
      const pendingShortcut = {
        key: primaryKey,
        ctrl: isCtrl,
        shift: isShift,
        alt: isAlt,
        meta: isMeta,
        doublePress: false
      };
      if (recordState.current.timer) clearTimeout(recordState.current.timer);
      recordState.current.pending = pendingShortcut;
      recordState.current.timer = setTimeout(() => {
        onChange(pendingShortcut);
        recordState.current.timer = null;
        recordState.current.pending = null;
        stopRecording();
      }, 350);
    }
  };
  const renderPreview = () => {
    if (currentKeys.length === 0) return "Press keys...";
    const modifiers = ["Control", "Shift", "Alt", "Meta"];
    const sorted = [...currentKeys].sort((a, b) => {
      const aIsMod = modifiers.includes(a);
      const bIsMod = modifiers.includes(b);
      if (aIsMod && bIsMod) return modifiers.indexOf(a) - modifiers.indexOf(b);
      if (aIsMod) return -1;
      if (bIsMod) return 1;
      return 0;
    });
    return sorted.map((k) => {
      if (k === "Control") return "Ctrl";
      if (k === " ") return "Space";
      return k.length === 1 ? k.toUpperCase() : k;
    }).join(" + ");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", style: { color: isDarkMode ? "#e5e7eb" : "#374151" }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => isRecording ? stopRecording() : startRecording(),
        onKeyDown: isRecording ? handleKeyDown : void 0,
        onKeyUp: isRecording ? handleKeyUp : void 0,
        onBlur: stopRecording,
        style: { backgroundColor: "transparent", borderWidth: isRecording ? "2px" : "1px" },
        className: `px-3 py-1.5 rounded-lg text-sm font-mono transition-all min-w-[100px] text-center outline-none ${isRecording ? "border-accent text-accent bg-accent/10 animate-pulse" : isDarkMode ? "border-gray-600 text-gray-200 hover:border-gray-400" : "border-gray-300 text-gray-700 hover:border-gray-400"}`,
        children: isRecording ? renderPreview() : formatShortcut(shortcut)
      }
    )
  ] });
};

const SendIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-6 h-6 neon-icon-style",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" })
  }
);
const AskAIView = ({ context, isDarkMode }) => {
  const [messages, setMessages] = reactExports.useState([]);
  const [question, setQuestion] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const scrollContainerRef = reactExports.useRef(null);
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };
  reactExports.useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  reactExports.useEffect(() => {
    setMessages([]);
  }, [context]);
  const handleAsk = async () => {
    if (!question.trim()) return;
    const userMsg = question;
    setQuestion("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);
    try {
      const result = await sendMessage("ASK_AI", { context, question: userMsg });
      setMessages((prev) => [...prev, { role: "ai", content: result }]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "ai", content: `Error: ${e.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 fade-in flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold neon-text mb-2", "data-text": "Ask AI", children: "Ask AI" }),
    context ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 italic py-1", style: { borderLeft: "3px solid var(--accent-color)", paddingLeft: "7px", color: isDarkMode ? "#e0e0e0" : void 0 }, children: [
      '"',
      context,
      '"'
    ] }) }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollContainerRef, className: "flex-grow overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar", children: [
      messages.map((msg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${msg.role === "user" ? "text-accent rounded-br-none font-semibold flex items-center justify-center" : "bg-transparent text-gray-800 dark:text-gray-200 rounded-bl-none flex items-center"}`,
          style: msg.role === "user" ? { border: "1px solid var(--accent-color)" } : { border: "1px solid #374151" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap", children: msg.content })
        }
      ) }, idx)),
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-transparent rounded-2xl rounded-bl-none px-4 py-3 shadow-sm", style: { border: "1px solid var(--border-dark)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center h-4", style: { gap: "2.5px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neon-typing-dot", style: { animationDelay: "0ms" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neon-typing-dot", style: { animationDelay: "200ms" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "neon-typing-dot", style: { animationDelay: "400ms" } })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      handleAsk();
    }, className: "mt-auto relative ask-ai-form mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: question,
          onChange: (e) => setQuestion(e.target.value),
          placeholder: "Ask a question...",
          disabled: isLoading,
          className: "ask-ai-input",
          autoFocus: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: !question.trim() || isLoading,
          className: "ask-ai-send-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SendIcon, {})
        }
      )
    ] })
  ] });
};

const HistoryView = ({
  history,
  handleClearHistory,
  clearHistoryStatus,
  isDarkMode,
  onItemClick
}) => {
  const [historySearchTerm, setHistorySearchTerm] = reactExports.useState("");
  const filteredHistory = reactExports.useMemo(() => {
    if (!historySearchTerm) return history;
    const lower = historySearchTerm.toLowerCase();
    return history.filter((word) => word.toLowerCase().includes(lower));
  }, [history, historySearchTerm]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 mb-3 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-800 dark:text-white", children: "History" }),
        history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleClearHistory,
            disabled: clearHistoryStatus !== "idle",
            className: "text-sm px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer",
            style: {
              backgroundColor: clearHistoryStatus === "done" ? "#10b981" : "transparent",
              color: clearHistoryStatus === "done" ? "#ffffff" : "#f87171",
              border: `1.5px solid ${clearHistoryStatus === "done" ? "#10b981" : "#f87171"}`,
              opacity: clearHistoryStatus === "clearing" ? 0.6 : 1
            },
            onMouseEnter: (e) => {
              if (clearHistoryStatus === "idle") {
                e.currentTarget.style.backgroundColor = "rgba(248, 113, 113, 0.15)";
              }
            },
            onMouseLeave: (e) => {
              if (clearHistoryStatus === "idle") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            },
            children: clearHistoryStatus === "idle" ? "Clear" : clearHistoryStatus === "clearing" ? "Clearing..." : "Cleared!"
          }
        )
      ] }),
      history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute pointer-events-none",
            style: { left: "14px", top: "50%", transform: "translateY(-50%)" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: isDarkMode ? "#9ca3af" : "#6b7280",
            strokeWidth: "2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.3-4.3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: historySearchTerm,
            onChange: (e) => setHistorySearchTerm(e.target.value),
            placeholder: "Find in history...",
            className: "history-search-input",
            style: {
              width: "100%",
              paddingLeft: "44px",
              paddingRight: "16px",
              paddingTop: "12px",
              paddingBottom: "12px",
              borderRadius: "24px",
              fontSize: "14px",
              backgroundColor: isDarkMode ? "#1f2937" : "#f3f4f6",
              color: isDarkMode ? "#ffffff" : "#111827",
              border: "1.5px solid rgba(75, 85, 99, 0.5)",
              outline: "none",
              transition: "all 0.2s ease"
            },
            onFocus: (e) => {
              e.currentTarget.style.borderColor = "var(--accent-color)";
              e.currentTarget.style.boxShadow = "0 0 12px color-mix(in srgb, var(--accent-color), transparent 60%)";
            },
            onBlur: (e) => {
              e.currentTarget.style.borderColor = "rgba(75, 85, 99, 0.5)";
              e.currentTarget.style.boxShadow = "none";
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow overflow-y-auto px-4 pb-4 custom-scrollbar", children: history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-gray-400 dark:text-gray-400 py-8 h-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "mb-4 text-gray-300 dark:text-gray-600", style: { width: "72px", height: "72px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6.52 4.86A9 9 0 1 1 3.08 10.83" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 8v5l4 2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-1", children: "No Recent Searches" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm", children: "Words you look up will appear here." })
    ] }) : filteredHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-gray-400 dark:text-gray-400 py-8 h-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "mb-4 text-gray-300 dark:text-gray-600", style: { width: "72px", height: "72px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.3-4.3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-1", children: "No Matches Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm", children: "Try a different search term." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: filteredHistory.map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onItemClick(word),
        className: "px-3 py-1.5 rounded-full text-sm font-medium inline-flex items-center transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-95 cursor-pointer",
        style: {
          backgroundColor: "color-mix(in srgb, var(--accent-color), transparent 85%)",
          color: "var(--accent-color)",
          border: "1px solid var(--accent-color)"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.backgroundColor = "var(--accent-color)";
          e.currentTarget.style.color = "var(--on-accent-text)";
          e.currentTarget.style.boxShadow = "0 0 15px color-mix(in srgb, var(--accent-color), transparent 40%)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--accent-color), transparent 85%)";
          e.currentTarget.style.color = "var(--accent-color)";
          e.currentTarget.style.boxShadow = "none";
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: word })
      },
      i
    )) }) })
  ] });
};

const PhrasebookView = ({
  phrasebook,
  handleClearPhrasebook,
  clearPhrasebookStatus,
  isDarkMode,
  targetLanguage,
  deletePhrase,
  setPhrasebook,
  speakingRelatedWord,
  playSpecificWord,
  handlePlayRelatedWordSound,
  handleRelatedWordClick,
  showPhrasebookPhonetic,
  showPhrasebookMeaning,
  showPhrasebookExamples,
  showPhrasebookSynonyms,
  showPhrasebookAntonyms,
  showPhrasebookNouns,
  showPhrasebookVerbs,
  showPhrasebookAdjectives,
  showPhrasebookAdverbs,
  showPhrasebookHypernyms,
  showPhrasebookHyponyms
}) => {
  const [phrasebookSearchTerm, setPhrasebookSearchTerm] = reactExports.useState("");
  const [expandedPhraseId, setExpandedPhraseId] = reactExports.useState(null);
  const filteredPhrasebook = reactExports.useMemo(() => {
    if (!phrasebookSearchTerm) return phrasebook;
    const lower = phrasebookSearchTerm.toLowerCase();
    return phrasebook.filter(
      (phrase) => phrase.word.toLowerCase().includes(lower) || phrase.translation.toLowerCase().includes(lower)
    );
  }, [phrasebook, phrasebookSearchTerm]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 mb-3 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", style: { color: isDarkMode ? "#ffffff" : "#111827" }, children: "Phrasebook" }),
        phrasebook.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleClearPhrasebook,
            disabled: clearPhrasebookStatus !== "idle",
            className: "text-sm px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer",
            style: {
              backgroundColor: clearPhrasebookStatus === "done" ? "#10b981" : "transparent",
              color: clearPhrasebookStatus === "done" ? "#ffffff" : "#f87171",
              border: `1.5px solid ${clearPhrasebookStatus === "done" ? "#10b981" : "#f87171"}`,
              opacity: clearPhrasebookStatus === "clearing" ? 0.6 : 1
            },
            onMouseEnter: (e) => {
              if (clearPhrasebookStatus === "idle") {
                e.currentTarget.style.backgroundColor = "rgba(248, 113, 113, 0.15)";
              }
            },
            onMouseLeave: (e) => {
              if (clearPhrasebookStatus === "idle") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            },
            children: clearPhrasebookStatus === "idle" ? "Clear All" : clearPhrasebookStatus === "clearing" ? "Clearing..." : "Cleared!"
          }
        )
      ] }),
      phrasebook.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute pointer-events-none",
            style: { left: "14px", top: "50%", transform: "translateY(-50%)" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: isDarkMode ? "#9ca3af" : "#6b7280",
            strokeWidth: "2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.3-4.3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: phrasebookSearchTerm,
            onChange: (e) => setPhrasebookSearchTerm(e.target.value),
            placeholder: "Find in phrasebook...",
            className: "phrasebook-search-input",
            style: {
              width: "100%",
              paddingLeft: "44px",
              paddingRight: "16px",
              paddingTop: "12px",
              paddingBottom: "12px",
              borderRadius: "24px",
              fontSize: "14px",
              backgroundColor: isDarkMode ? "#1f2937" : "#f3f4f6",
              color: isDarkMode ? "#ffffff" : "#111827",
              border: "1.5px solid rgba(75, 85, 99, 0.5)",
              outline: "none",
              transition: "all 0.2s ease"
            },
            onFocus: (e) => {
              e.currentTarget.style.border = "1.5px solid var(--accent-color)";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(var(--accent-rgb), 0.3)";
            },
            onBlur: (e) => {
              e.currentTarget.style.border = "1.5px solid rgba(75, 85, 99, 0.5)";
              e.currentTarget.style.boxShadow = "none";
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow overflow-y-auto px-4 pb-4 custom-scrollbar", style: { display: "flex", flexDirection: "column", gap: "12px" }, children: filteredPhrasebook.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-gray-400 dark:text-gray-400 py-8 h-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "mb-4 text-gray-300 dark:text-gray-600", style: { width: "72px", height: "72px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-1", children: phrasebookSearchTerm ? "No Matches Found" : "Build Your Phrasebook" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm", children: phrasebookSearchTerm ? "Try a different search term." : "Save words by clicking the bookmark icon." })
    ] }) : filteredPhrasebook.map((phrase) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl overflow-hidden cursor-pointer group phrasebook-card flex-shrink-0",
        style: {
          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
          border: `1px solid ${isDarkMode ? "rgba(55, 65, 81, 0.8)" : "#e5e7eb"}`,
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
          e.currentTarget.style.borderColor = "var(--accent-color)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = isDarkMode ? "rgba(55, 65, 81, 0.8)" : "#e5e7eb";
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center p-4",
              onClick: () => setExpandedPhraseId(expandedPhraseId === phrase.id ? null : phrase.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow min-w-0", onContextMenu: (e) => {
                  e.preventDefault();
                  playSpecificWord(phrase.word);
                }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `phrase-word font-bold text-lg capitalize truncate transition-colors duration-300 ${speakingRelatedWord === phrase.word ? "animate-pulse-subtle text-accent" : ""}`,
                      style: { color: isDarkMode ? "#ffffff" : "#111827" },
                      children: phrase.word
                    }
                  ),
                  showPhrasebookPhonetic && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm truncate",
                      style: { color: isDarkMode ? "#9ca3af" : "#6b7280" },
                      children: phrase.phonetic
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex-shrink-0 text-base px-3 max-w-[40%] ${isRTLLanguage(targetLanguage) ? "text-right" : "text-left"}`,
                    dir: isRTLLanguage(targetLanguage) ? "rtl" : "ltr",
                    style: {
                      color: isDarkMode ? "#d1d5db" : "#374151",
                      fontFamily: isRTLLanguage(targetLanguage) ? "Vazirmatn, sans-serif" : "inherit"
                    },
                    children: truncateText(phrase.translation, 20)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      deletePhrase(phrase.id);
                      setPhrasebook((p) => p.filter((x) => x.id !== phrase.id));
                    },
                    className: "p-1.5 transition-all duration-200 hover:scale-125 cursor-pointer",
                    style: { color: isDarkMode ? "#6b7280" : "#9ca3af", background: "transparent", border: "none" },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.color = "#ef4444";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.color = isDarkMode ? "#6b7280" : "#9ca3af";
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }) })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                overflow: "hidden",
                maxHeight: expandedPhraseId === phrase.id ? "600px" : "0px",
                opacity: expandedPhraseId === phrase.id ? 1 : 0,
                transform: expandedPhraseId === phrase.id ? "translateY(0)" : "translateY(-8px)",
                transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-4 pb-8 pt-3 overflow-y-auto custom-scrollbar",
                  style: {
                    maxHeight: "300px",
                    borderTop: `1px solid ${isDarkMode ? "rgba(55, 65, 81, 0.6)" : "#e5e7eb"}`,
                    backgroundColor: isDarkMode ? "rgba(31, 41, 55, 0.5)" : "rgba(249, 250, 251, 0.5)"
                  },
                  children: [
                    showPhrasebookMeaning && phrase.meaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-1 text-gray-600 dark:text-gray-400", children: "Meaning" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed", style: { color: isDarkMode ? "#e5e7eb" : "#374151" }, children: phrase.meaning })
                    ] }),
                    showPhrasebookExamples && phrase.example && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Example" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic py-1", style: { borderLeft: "3px solid var(--accent-color)", paddingLeft: "7px", color: isDarkMode ? "#e0e0e0" : "#4b5563" }, children: [
                        '"',
                        phrase.example,
                        '"'
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: `text-base leading-relaxed mb-4 ${isRTLLanguage(targetLanguage) ? "text-right" : "text-left"}`,
                        dir: isRTLLanguage(targetLanguage) ? "rtl" : "ltr",
                        style: {
                          fontFamily: isRTLLanguage(targetLanguage) ? "Vazirmatn, sans-serif" : "inherit",
                          color: isDarkMode ? "#e5e7eb" : "#374151"
                        },
                        children: phrase.translation
                      }
                    ),
                    showPhrasebookSynonyms && phrase.synonyms && phrase.synonyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Synonyms" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.synonyms.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          onClick: () => handleRelatedWordClick(s),
                          onContextMenu: (e) => {
                            e.preventDefault();
                            handlePlayRelatedWordSound(s);
                          },
                          title: `${s} (Right-click to pronounce)`,
                          className: "px-3 rounded-full text-sm font-medium cursor-pointer word-chip-interactive",
                          style: {
                            paddingTop: "2px",
                            paddingBottom: "4px",
                            backgroundColor: "var(--accent-soft-bg)",
                            color: "var(--accent-color)",
                            border: "1px solid var(--accent-color)"
                          },
                          children: s
                        },
                        i
                      )) })
                    ] }),
                    showPhrasebookAntonyms && phrase.antonyms && phrase.antonyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Antonyms" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.antonyms.map((a, i) => {
                        const baseColor = isDarkMode ? "#ef4444" : "#b91c1c";
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            onClick: () => handleRelatedWordClick(a),
                            onContextMenu: (e) => {
                              e.preventDefault();
                              handlePlayRelatedWordSound(a);
                            },
                            title: `${a} (Right-click to pronounce)`,
                            className: "px-3 rounded-full text-sm font-medium cursor-pointer word-chip-interactive",
                            style: {
                              paddingTop: "2px",
                              paddingBottom: "4px",
                              backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
                              borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
                              color: baseColor,
                              borderWidth: "1px",
                              borderStyle: "solid"
                            },
                            children: a
                          },
                          i
                        );
                      }) })
                    ] }),
                    showPhrasebookNouns && phrase.nouns && phrase.nouns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Nouns" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.nouns.map((n, i) => {
                        const baseColor = isDarkMode ? "#60a5fa" : "#1e40af";
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            onClick: () => handleRelatedWordClick(n),
                            onContextMenu: (e) => {
                              e.preventDefault();
                              handlePlayRelatedWordSound(n);
                            },
                            title: `${n} (Right-click to pronounce)`,
                            className: "px-3 rounded-full text-sm font-medium border cursor-pointer word-chip-interactive",
                            style: {
                              paddingTop: "2px",
                              paddingBottom: "4px",
                              backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
                              borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
                              color: baseColor,
                              borderStyle: "solid"
                            },
                            children: n
                          },
                          i
                        );
                      }) })
                    ] }),
                    showPhrasebookVerbs && phrase.verbs && phrase.verbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Verbs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.verbs.map((v, i) => {
                        const baseColor = isDarkMode ? "#4ade80" : "#15803d";
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            onClick: () => handleRelatedWordClick(v),
                            onContextMenu: (e) => {
                              e.preventDefault();
                              handlePlayRelatedWordSound(v);
                            },
                            title: `${v} (Right-click to pronounce)`,
                            className: "px-3 rounded-full text-sm font-medium border cursor-pointer word-chip-interactive",
                            style: {
                              paddingTop: "2px",
                              paddingBottom: "4px",
                              backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
                              borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
                              color: baseColor,
                              borderStyle: "solid"
                            },
                            children: v
                          },
                          i
                        );
                      }) })
                    ] }),
                    showPhrasebookAdjectives && phrase.adjectives && phrase.adjectives.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Adjectives" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.adjectives.map((adj, i) => {
                        const baseColor = isDarkMode ? "#fbbf24" : "#b45309";
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            onClick: () => handleRelatedWordClick(adj),
                            onContextMenu: (e) => {
                              e.preventDefault();
                              handlePlayRelatedWordSound(adj);
                            },
                            title: `${adj} (Right-click to pronounce)`,
                            className: "px-3 rounded-full text-sm font-medium border cursor-pointer word-chip-interactive",
                            style: {
                              paddingTop: "2px",
                              paddingBottom: "4px",
                              backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
                              borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
                              color: baseColor,
                              borderStyle: "solid"
                            },
                            children: adj
                          },
                          i
                        );
                      }) })
                    ] }),
                    showPhrasebookAdverbs && phrase.adverbs && phrase.adverbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Adverbs" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.adverbs.map((adv, i) => {
                        const baseColor = isDarkMode ? "#a78bfa" : "#6b21a8";
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            onClick: () => handleRelatedWordClick(adv),
                            onContextMenu: (e) => {
                              e.preventDefault();
                              handlePlayRelatedWordSound(adv);
                            },
                            title: `${adv} (Right-click to pronounce)`,
                            className: "px-3 rounded-full text-sm font-medium border cursor-pointer word-chip-interactive",
                            style: {
                              paddingTop: "2px",
                              paddingBottom: "4px",
                              backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
                              borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
                              color: baseColor,
                              borderStyle: "solid"
                            },
                            children: adv
                          },
                          i
                        );
                      }) })
                    ] }),
                    showPhrasebookHypernyms && phrase.hypernyms && phrase.hypernyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Hypernyms" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.hypernyms.map((hyp, i) => {
                        const baseColor = isDarkMode ? "#2dd4bf" : "#0d9488";
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            onClick: () => handleRelatedWordClick(hyp),
                            onContextMenu: (e) => {
                              e.preventDefault();
                              handlePlayRelatedWordSound(hyp);
                            },
                            title: `${hyp} (Right-click to pronounce)`,
                            className: "px-3 rounded-full text-sm font-medium border cursor-pointer word-chip-interactive",
                            style: {
                              paddingTop: "2px",
                              paddingBottom: "4px",
                              backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
                              borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
                              color: baseColor,
                              borderStyle: "solid"
                            },
                            children: hyp
                          },
                          i
                        );
                      }) })
                    ] }),
                    showPhrasebookHyponyms && phrase.hyponyms && phrase.hyponyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Hyponyms" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: phrase.hyponyms.map((hyp, i) => {
                        const baseColor = isDarkMode ? "#f472b6" : "#db2777";
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            onClick: () => handleRelatedWordClick(hyp),
                            onContextMenu: (e) => {
                              e.preventDefault();
                              handlePlayRelatedWordSound(hyp);
                            },
                            title: `${hyp} (Right-click to pronounce)`,
                            className: "px-3 rounded-full text-sm font-medium border cursor-pointer word-chip-interactive",
                            style: {
                              paddingTop: "2px",
                              paddingBottom: "4px",
                              backgroundColor: `color-mix(in srgb, ${baseColor}, transparent 90%)`,
                              borderColor: `color-mix(in srgb, ${baseColor}, transparent 80%)`,
                              color: baseColor,
                              borderStyle: "solid"
                            },
                            children: hyp
                          },
                          i
                        );
                      }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-full" })
                  ]
                }
              )
            }
          )
        ]
      },
      phrase.id
    )) })
  ] });
};

const playText = async (text, lang, timestamp = Date.now(), voiceTarget = "source", sourceLang = "en", targetLang = "fa", settings = {}) => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      type: "PLAY_TTS",
      payload: {
        sourceText: text,
        sourceLang: lang,
        targetText: "",
        targetLang: "",
        voiceTarget: "source",
        timestamp,
        setting: settings
      }
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("TTS Error:", chrome.runtime.lastError);
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
};

const POPUP_WIDTH = 440;
const POPUP_HEIGHT = 580;
const POPUP_MARGIN = 12;
let cachedOverlayCss = null;
let cssLoadedPromise = null;
const loadStyles = () => {
  if (cachedOverlayCss) {
    return Promise.resolve(cachedOverlayCss);
  }
  if (cssLoadedPromise) {
    return cssLoadedPromise;
  }
  const cssUrl = chrome.runtime.getURL("overlay.css");
  const fontRegularUrl = chrome.runtime.getURL("fonts/vazirmatn-regular.woff2");
  const fontBoldUrl = chrome.runtime.getURL("fonts/vazirmatn-bold.woff2");
  cssLoadedPromise = fetch(cssUrl).then((res) => res.text()).then((css) => {
    cachedOverlayCss = css.replace(/url\(['"]?fonts\/vazirmatn-regular\.woff2['"]?\)/g, `url('${fontRegularUrl}')`).replace(/url\(['"]?fonts\/vazirmatn-bold\.woff2['"]?\)/g, `url('${fontBoldUrl}')`);
    return cachedOverlayCss;
  }).catch((err) => {
    console.error("Failed to load styles:", err);
    return "";
  });
  return cssLoadedPromise;
};
const preloadStyles = () => {
  try {
    const fontRegularUrl = chrome.runtime.getURL("fonts/vazirmatn-regular.woff2");
    const fontBoldUrl = chrome.runtime.getURL("fonts/vazirmatn-bold.woff2");
    loadStyles();
    const mainFontStyleId = "berkut-fonts";
    if (!document.getElementById(mainFontStyleId)) {
      const mainFontStyle = document.createElement("style");
      mainFontStyle.id = mainFontStyleId;
      mainFontStyle.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');
                @font-face { font-family: 'Vazirmatn'; src: url('${fontRegularUrl}') format('woff2'); font-weight: 400; font-style: normal; font-display: swap; }
                @font-face { font-family: 'Vazirmatn'; src: url('${fontBoldUrl}') format('woff2'); font-weight: 700; font-style: normal; font-display: swap; }
                @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
                @keyframes neon-border-dance { to { --angle: 360deg; } }
                @keyframes neon-flow { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
                @keyframes neon-pulse-glow { from { opacity: 0.7; } to { opacity: 1; } }
            `;
      document.head.appendChild(mainFontStyle);
    }
  } catch (e) {
    console.error("Error in preloadStyles:", e);
  }
};
preloadStyles();
try {
  const wakeUpPromise = typeof chrome !== "undefined" && chrome.runtime?.sendMessage ? chrome.runtime.sendMessage({ type: "WAKE_UP" }) : null;
  if (wakeUpPromise && typeof wakeUpPromise.catch === "function") {
    wakeUpPromise.catch(() => {
    });
  }
} catch (e) {
}
async function sendMessage(type, payload) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ type, payload }, (response) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }
      if (response?.success) {
        resolve(response.data);
      } else {
        reject(new Error(response?.error || "Unknown error"));
      }
    });
  });
}
let popupScrollLockCleanup = null;
let cachedAutoPopup = false;
if (typeof chrome !== "undefined" && chrome.storage) {
  chrome.storage.local.get(["dictionaryAutoPopup"], (result) => {
    if (result && result.dictionaryAutoPopup !== void 0) {
      cachedAutoPopup = result.dictionaryAutoPopup;
    }
  });
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local" && changes.dictionaryAutoPopup) {
      cachedAutoPopup = changes.dictionaryAutoPopup.newValue;
    }
  });
}
async function getAllPhrases() {
  return sendMessage("GET_ALL_PHRASES");
}
async function addPhrase(phrase) {
  return sendMessage("ADD_PHRASE", { phrase });
}
async function deletePhrase(id) {
  return sendMessage("DELETE_PHRASE", { id });
}
async function clearAllPhrases() {
  return sendMessage("CLEAR_ALL_PHRASES");
}
async function getDictionaryEntry(word) {
  return sendMessage("GET_DICTIONARY_ENTRY", { word });
}
async function addDictionaryEntry(entry) {
  return sendMessage("ADD_DICTIONARY_ENTRY", { entry });
}
async function clearAllDictionaryEntries() {
  return sendMessage("CLEAR_DICTIONARY_CACHE");
}
async function clearAllPronunciations() {
  return Promise.resolve();
}
let popupContainer = null;
let triggerButton = null;
let root = null;
const removePopup = () => {
  if (popupContainer) {
    popupScrollLockCleanup?.();
    popupScrollLockCleanup = null;
    popupContainer.style.opacity = "0";
    popupContainer.style.transform = "scale(0.95)";
    const containerToRemove = popupContainer;
    const rootToRemove = root;
    popupContainer = null;
    root = null;
    setTimeout(() => {
      if (rootToRemove) {
        rootToRemove.unmount();
      }
      if (containerToRemove && containerToRemove.parentNode) {
        containerToRemove.remove();
      }
    }, 350);
  }
};
const removeTrigger = () => {
  if (triggerButton) {
    triggerButton.style.opacity = "0";
    triggerButton.style.transform = "scale(0.95)";
    const triggerToRemove = triggerButton;
    triggerButton = null;
    setTimeout(() => {
      if (triggerToRemove && triggerToRemove.parentNode) {
        triggerToRemove.remove();
      }
    }, 350);
  }
};
const removeAll = () => {
  removePopup();
  removeTrigger();
};
const TAP_THRESHOLD = 300;
const App = ({ initialSearchTerm, onClose, containerElement, initialView = "dictionary", initialGlassEnabled, initialDarkMode, initialVisualEffectsEnabled, initialTheme }) => {
  const [wordData, setWordData] = reactExports.useState(null);
  const [passageData, setPassageData] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(!!initialSearchTerm);
  const [error, setError] = reactExports.useState(null);
  const [searchTerm, setSearchTerm] = reactExports.useState(initialSearchTerm || "");
  const hasInitializedSearch = reactExports.useRef(false);
  const [suggestion, setSuggestion] = reactExports.useState(null);
  const [speakingRelatedWord, setSpeakingRelatedWord] = reactExports.useState(null);
  const [activeView, setActiveView] = reactExports.useState(initialView);
  const [isCopied, setIsCopied] = reactExports.useState(false);
  const [settingsLoaded, setSettingsLoaded] = reactExports.useState(false);
  const [theme, setTheme] = reactExports.useState(initialTheme || "indigo");
  const [isDarkMode, setIsDarkMode] = reactExports.useState(initialDarkMode);
  const [visualEffectsEnabled, setVisualEffectsEnabled] = reactExports.useState(initialVisualEffectsEnabled ?? true);
  const [glassmorphismEnabled, setGlassmorphismEnabled] = reactExports.useState(initialGlassEnabled);
  const [glassBlurPercent, setGlassBlurPercent] = reactExports.useState(40);
  const [isBlurFocusMode, setIsBlurFocusMode] = reactExports.useState(false);
  const [fontSize, setFontSize] = reactExports.useState(16);
  const [showNouns, setShowNouns] = reactExports.useState(true);
  const [showVerbs, setShowVerbs] = reactExports.useState(true);
  const [showAdjectives, setShowAdjectives] = reactExports.useState(true);
  const [showAdverbs, setShowAdverbs] = reactExports.useState(true);
  const [showExamples, setShowExamples] = reactExports.useState(true);
  const [showPhonetic, setShowPhonetic] = reactExports.useState(true);
  const [showMeaning, setShowMeaning] = reactExports.useState(true);
  const [showSynonyms, setShowSynonyms] = reactExports.useState(true);
  const [showAntonyms, setShowAntonyms] = reactExports.useState(true);
  const [showHypernyms, setShowHypernyms] = reactExports.useState(true);
  const [showHyponyms, setShowHyponyms] = reactExports.useState(true);
  const [showSummary, setShowSummary] = reactExports.useState(true);
  const [showKeyConcepts, setShowKeyConcepts] = reactExports.useState(true);
  const [showPhrasebookNouns, setShowPhrasebookNouns] = reactExports.useState(true);
  const [showPhrasebookVerbs, setShowPhrasebookVerbs] = reactExports.useState(true);
  const [showPhrasebookAdjectives, setShowPhrasebookAdjectives] = reactExports.useState(true);
  const [showPhrasebookAdverbs, setShowPhrasebookAdverbs] = reactExports.useState(true);
  const [showPhrasebookExamples, setShowPhrasebookExamples] = reactExports.useState(true);
  const [showPhrasebookPhonetic, setShowPhrasebookPhonetic] = reactExports.useState(true);
  const [showPhrasebookMeaning, setShowPhrasebookMeaning] = reactExports.useState(true);
  const [showPhrasebookSynonyms, setShowPhrasebookSynonyms] = reactExports.useState(true);
  const [showPhrasebookAntonyms, setShowPhrasebookAntonyms] = reactExports.useState(true);
  const [showPhrasebookHypernyms, setShowPhrasebookHypernyms] = reactExports.useState(true);
  const [showPhrasebookHyponyms, setShowPhrasebookHyponyms] = reactExports.useState(true);
  const [uiMode, setUiMode] = reactExports.useState("classic");
  const [showMinNouns, setShowMinNouns] = reactExports.useState(true);
  const [showMinVerbs, setShowMinVerbs] = reactExports.useState(true);
  const [showMinAdjectives, setShowMinAdjectives] = reactExports.useState(true);
  const [showMinAdverbs, setShowMinAdverbs] = reactExports.useState(true);
  const [showMinExamples, setShowMinExamples] = reactExports.useState(true);
  const [showMinPhonetic, setShowMinPhonetic] = reactExports.useState(true);
  const [showMinMeaning, setShowMinMeaning] = reactExports.useState(true);
  const [showMinSynonyms, setShowMinSynonyms] = reactExports.useState(true);
  const [showMinAntonyms, setShowMinAntonyms] = reactExports.useState(true);
  const [showMinHypernyms, setShowMinHypernyms] = reactExports.useState(true);
  const [showMinHyponyms, setShowMinHyponyms] = reactExports.useState(true);
  const [showMinSummary, setShowMinSummary] = reactExports.useState(true);
  const [showMinKeyConcepts, setShowMinKeyConcepts] = reactExports.useState(true);
  const [shortcuts, setShortcuts] = reactExports.useState(defaultShortcuts);
  const [settingsGroupState, setSettingsGroupState] = reactExports.useState({});
  const toggleSettingsGroup = (group) => {
    setSettingsGroupState((prev) => ({ ...prev, [group]: !prev[group] }));
  };
  reactExports.useEffect(() => {
    storage.get("userShortcuts", {}).then((saved) => {
      if (saved) setShortcuts((prev) => ({ ...prev, ...saved }));
    });
  }, []);
  const updateShortcut = (action, s) => {
    const newShortcuts = { ...shortcuts, [action]: s };
    setShortcuts(newShortcuts);
    storage.set("userShortcuts", newShortcuts);
  };
  const [isRecordingAnyShortcut, setIsRecordingAnyShortcut] = reactExports.useState(false);
  const [autoPopup, setAutoPopup] = reactExports.useState(false);
  const [playbackRate, setPlaybackRate] = reactExports.useState(1);
  const [translationEngine, setTranslationEngine] = reactExports.useState("cerebras");
  const [apiKey, setApiKey] = reactExports.useState("");
  const [cerebrasModel, setCerebrasModel] = reactExports.useState("llama3.1-8b");
  const [cerebrasModels, setCerebrasModels] = reactExports.useState(["llama3.1-8b", "llama3.1-70b"]);
  const [loadingModels, setLoadingModels] = reactExports.useState(false);
  const [modelsError, setModelsError] = reactExports.useState("");
  const [cartesiaKey, setCartesiaKey] = reactExports.useState("");
  const [ttsVoiceEn, setTtsVoiceEn] = reactExports.useState("GoogleTranslateTTS");
  const [ttsVoiceFa, setTtsVoiceFa] = reactExports.useState("BingTTS_fa-IR-DilaraNeural");
  const [ttsVoiceRu, setTtsVoiceRu] = reactExports.useState("GoogleTranslateTTS");
  const [availableVoices, setAvailableVoices] = reactExports.useState([]);
  const [focusedVoiceLang, setFocusedVoiceLang] = reactExports.useState(null);
  const [selectedNumericControl, setSelectedNumericControl] = reactExports.useState(null);
  const [targetLanguage, setTargetLanguage] = reactExports.useState("English");
  const [languageDropdownOpen, setLanguageDropdownOpen] = reactExports.useState(false);
  const [languageSearchInput, setLanguageSearchInput] = reactExports.useState("");
  const [clearDataStatus, setClearDataStatus] = reactExports.useState("idle");
  const [selectedClearCategories, setSelectedClearCategories] = reactExports.useState({
    history: false,
    phrasebook: false,
    audio: false,
    keyboard: false,
    dictionary: false
  });
  const [clearCacheStatus, setClearCacheStatus] = reactExports.useState("idle");
  const [clearHistoryStatus, setClearHistoryStatus] = reactExports.useState("idle");
  const [clearPhrasebookStatus, setClearPhrasebookStatus] = reactExports.useState("idle");
  const [isFetchingAudio, setIsFetchingAudio] = reactExports.useState(false);
  const [isSpeaking, setIsSpeaking] = reactExports.useState(false);
  const searchInputRef = reactExports.useRef(null);
  const [history, setHistory] = reactExports.useState([]);
  const [phrasebook, setPhrasebook] = reactExports.useState([]);
  const [speakingPhrasebookWord, setSpeakingPhrasebookWord] = reactExports.useState(null);
  const phrasebookRef = reactExports.useRef(phrasebook);
  reactExports.useEffect(() => {
    phrasebookRef.current = phrasebook;
  }, [phrasebook]);
  const fetchModelsList = reactExports.useCallback(async () => {
    setLoadingModels(true);
    setModelsError("");
    try {
      const modelsList = await sendMessage("FETCH_CEREBRAS_MODELS");
      if (modelsList && Array.isArray(modelsList)) {
        const cleanModels = modelsList.filter((m) => typeof m === "string");
        if (cleanModels.length > 0) {
          setCerebrasModels(cleanModels);
        }
      }
    } catch (err) {
      console.error("Error fetching Cerebras models:", err);
      setModelsError(err.message || "Failed to fetch models");
    } finally {
      setLoadingModels(false);
    }
  }, []);
  const handleCerebrasModelChange = async (model) => {
    setCerebrasModel(model);
    await storage.set("cerebrasModel", model);
  };
  reactExports.useEffect(() => {
    if (activeView === "settings") {
      fetchModelsList();
    }
  }, [activeView, apiKey, fetchModelsList]);
  reactExports.useEffect(() => {
    const loadSettings = async () => {
      const [t, dm, ve, gm, fs, ap, pr, hist, key, cKey, vEn, vFa, vRu, n, v, adj, adv, ex, phon, mean, syn, ant, pbN, pbV, pbAdj, pbAdv, pbEx, pbPhon, pbMean, pbSyn, pbAnt, hyp, hypo, pbHyp, pbHypo, glassBlurPct, tgtLang, sum, kc, transEngine] = await Promise.all([
        storage.get("dictionaryTheme", "indigo"),
        storage.get("dictionaryDarkMode", true),
        storage.get("dictionaryVisualEffects", true),
        storage.get("dictionaryGlassmorphism", false),
        storage.get("dictionaryFontSize", 16),
        storage.get("dictionaryAutoPopup", false),
        storage.get("dictionaryPlaybackRate", 1),
        storage.get("dictionaryHistory", []),
        storage.get("cerebrasApiKey", ""),
        storage.get("cartesiaApiKey", ""),
        storage.get("ttsVoice_en", "GoogleTranslateTTS"),
        storage.get("ttsVoice_fa", "BingTTS_fa-IR-DilaraNeural"),
        storage.get("ttsVoice_ru", "GoogleTranslateTTS"),
        storage.get("showNouns", true),
        storage.get("showVerbs", true),
        storage.get("showAdjectives", true),
        storage.get("showAdverbs", true),
        storage.get("showExamples", true),
        storage.get("showPhonetic", true),
        storage.get("showMeaning", true),
        storage.get("showSynonyms", true),
        storage.get("showAntonyms", true),
        storage.get("showPhrasebookNouns", true),
        storage.get("showPhrasebookVerbs", true),
        storage.get("showPhrasebookAdjectives", true),
        storage.get("showPhrasebookAdverbs", true),
        storage.get("showPhrasebookExamples", true),
        storage.get("showPhrasebookPhonetic", true),
        storage.get("showPhrasebookMeaning", true),
        storage.get("showPhrasebookSynonyms", true),
        storage.get("showPhrasebookAntonyms", true),
        storage.get("showHypernyms", true),
        storage.get("showHyponyms", true),
        storage.get("showPhrasebookHypernyms", true),
        storage.get("showPhrasebookHyponyms", true),
        storage.get("dictionaryGlassBlur", 40),
        storage.get("dictionaryTargetLanguage", "English"),
        storage.get("showSummary", true),
        storage.get("showKeyConcepts", true),
        storage.get("translationEngine", "cerebras")
      ]);
      setTheme(t);
      setIsDarkMode(dm);
      setVisualEffectsEnabled(ve);
      setGlassmorphismEnabled(gm);
      setFontSize(fs);
      setAutoPopup(ap);
      setPlaybackRate(pr);
      setHistory(hist);
      setApiKey(key);
      setCartesiaKey(cKey);
      setTtsVoiceEn(vEn);
      setTtsVoiceFa(vFa);
      setTtsVoiceRu(vRu);
      setShowNouns(n);
      setShowVerbs(v);
      setShowAdjectives(adj);
      setShowAdverbs(adv);
      setShowExamples(ex);
      setShowPhonetic(phon);
      setShowMeaning(mean);
      setShowSynonyms(syn);
      setShowAntonyms(ant);
      setShowSummary(sum !== void 0 ? sum : true);
      setShowKeyConcepts(kc !== void 0 ? kc : true);
      setShowPhrasebookNouns(pbN !== void 0 ? pbN : true);
      setShowPhrasebookVerbs(pbV !== void 0 ? pbV : true);
      setShowPhrasebookAdjectives(pbAdj !== void 0 ? pbAdj : true);
      setShowPhrasebookAdverbs(pbAdv !== void 0 ? pbAdv : true);
      setShowPhrasebookExamples(pbEx !== void 0 ? pbEx : true);
      setShowPhrasebookPhonetic(pbPhon !== void 0 ? pbPhon : true);
      setShowPhrasebookMeaning(pbMean !== void 0 ? pbMean : true);
      setShowPhrasebookSynonyms(pbSyn !== void 0 ? pbSyn : true);
      setShowPhrasebookAntonyms(pbAnt !== void 0 ? pbAnt : true);
      setShowHypernyms(hyp !== void 0 ? hyp : true);
      setShowHyponyms(hypo !== void 0 ? hypo : true);
      if (typeof glassBlurPct === "number") setGlassBlurPercent(glassBlurPct);
      if (tgtLang) setTargetLanguage(tgtLang);
      setTranslationEngine(transEngine === "google" ? "google" : "cerebras");
      const [uMode, minN, minV, minAdj, minAdv, minEx, minPhon, minMean, minSyn, minAnt, minHyp, minHypo, minSum, minKC] = await Promise.all([
        storage.get("dictionaryUiMode", "classic"),
        storage.get("showMinNouns", true),
        storage.get("showMinVerbs", true),
        storage.get("showMinAdjectives", true),
        storage.get("showMinAdverbs", true),
        storage.get("showMinExamples", true),
        storage.get("showMinPhonetic", true),
        storage.get("showMinMeaning", true),
        storage.get("showMinSynonyms", true),
        storage.get("showMinAntonyms", true),
        storage.get("showMinHypernyms", true),
        storage.get("showMinHyponyms", true),
        storage.get("showMinSummary", true),
        storage.get("showMinKeyConcepts", true)
      ]);
      setUiMode(uMode === "minimal" ? "minimal" : "classic");
      setShowMinNouns(minN);
      setShowMinVerbs(minV);
      setShowMinAdjectives(minAdj);
      setShowMinAdverbs(minAdv);
      setShowMinExamples(minEx);
      setShowMinPhonetic(minPhon);
      setShowMinMeaning(minMean);
      setShowMinSynonyms(minSyn);
      setShowMinAntonyms(minAnt);
      setShowMinHypernyms(minHyp);
      setShowMinHyponyms(minHypo);
      setShowMinSummary(minSum);
      setShowMinKeyConcepts(minKC);
      const storedModel = await storage.get("cerebrasModel", "llama3.1-8b");
      setCerebrasModel(storedModel);
      const phrases = await getAllPhrases();
      setPhrasebook(phrases);
      setSettingsLoaded(true);
    };
    loadSettings();
  }, []);
  reactExports.useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);
  const getVoiceOptions = reactExports.useCallback((langCode) => {
    const opts = [];
    if (langCode !== "fa") {
      opts.push({ value: "GoogleTranslateTTS", label: "Google Translate (Network)" });
    }
    if (langCode === "en") {
      opts.push(
        // US
        { value: "BingTTS_en-US-AriaNeural", label: "BingTTS: Aria - English (US)" },
        { value: "BingTTS_en-US-GuyNeural", label: "BingTTS: Guy - English (US)" },
        { value: "BingTTS_en-US-JennyNeural", label: "BingTTS: Jenny - English (US)" },
        // UK
        { value: "BingTTS_en-GB-SoniaNeural", label: "BingTTS: Sonia - English (UK)" },
        { value: "BingTTS_en-GB-RyanNeural", label: "BingTTS: Ryan - English (UK)" },
        // Ireland
        { value: "BingTTS_en-IE-EmilyNeural", label: "BingTTS: Emily - English (Ireland)" },
        { value: "BingTTS_en-IE-ConnorNeural", label: "BingTTS: Connor - English (Ireland)" },
        // Australia
        { value: "BingTTS_en-AU-NatashaNeural", label: "BingTTS: Natasha - English (Australia)" },
        { value: "BingTTS_en-AU-WilliamNeural", label: "BingTTS: William - English (Australia)" },
        // Canada
        { value: "BingTTS_en-CA-ClaraNeural", label: "BingTTS: Clara - English (Canada)" },
        { value: "BingTTS_en-CA-LiamNeural", label: "BingTTS: Liam - English (Canada)" }
      );
    } else if (langCode === "fa") {
      opts.push(
        { value: "BingTTS_fa-IR-DilaraNeural", label: "BingTTS: Dilara - Persian (Iran)" },
        { value: "BingTTS_fa-IR-FaridNeural", label: "BingTTS: Farid - Persian (Iran)" }
      );
    } else if (langCode === "ru") {
      opts.push(
        { value: "BingTTS_ru-RU-SvetlanaNeural", label: "BingTTS: Svetlana - Russian" },
        { value: "BingTTS_ru-RU-DmitryNeural", label: "BingTTS: Dmitry - Russian" }
      );
    }
    let browserVoices = availableVoices.filter((v) => v.lang.startsWith(langCode));
    if (langCode === "en") {
      const allowedEnglishRegions = ["en-US", "en-GB", "en-IE", "en-AU", "en-CA", "en_US", "en_GB", "en_IE", "en_AU", "en_CA"];
      browserVoices = browserVoices.filter(
        (v) => allowedEnglishRegions.some((region) => v.lang.replace("-", "_").startsWith(region.replace("-", "_")))
      );
    }
    browserVoices.forEach((v) => {
      const isOnlineVoice = v.name.toLowerCase().includes("online");
      const prefix = isOnlineVoice ? "Browser (Online)" : "Browser (Local)";
      opts.push({ value: `BrowserTTS_${v.name}`, label: `${prefix}: ${v.name}` });
    });
    if (langCode === "en") {
      opts.push(
        { value: "ChromeTTS_Microsoft David", label: "ChromeTTS (Offline): David - English" },
        { value: "ChromeTTS_Microsoft Zira", label: "ChromeTTS (Offline): Zira - English" },
        { value: "ChromeTTS_Microsoft Mark", label: "ChromeTTS (Offline): Mark - English" }
      );
    } else if (langCode === "ru") {
      opts.push(
        { value: "ChromeTTS_Microsoft Irina", label: "ChromeTTS (Offline): Irina - Russian" },
        { value: "ChromeTTS_Microsoft Pavel", label: "ChromeTTS (Offline): Pavel - Russian" }
      );
    }
    return opts;
  }, [availableVoices]);
  reactExports.useLayoutEffect(() => {
    if (!settingsLoaded) {
      containerElement.style.opacity = "0";
      return;
    }
    containerElement.dataset.theme = theme;
    if (isDarkMode) containerElement.classList.add("dark");
    else containerElement.classList.remove("dark");
    if (visualEffectsEnabled) containerElement.classList.add("effects-enabled");
    else containerElement.classList.remove("effects-enabled");
    if (glassmorphismEnabled) containerElement.classList.add("glassmorphism");
    else containerElement.classList.remove("glassmorphism");
    const blurPx = 4 + glassBlurPercent / 100 * 20;
    containerElement.style.setProperty("--glass-blur", `${blurPx.toFixed(1)}px`);
    const glassOpacity = 0.25 + glassBlurPercent / 100 * 0.6;
    containerElement.style.setProperty("--glass-opacity", glassOpacity.toFixed(2));
    containerElement.style.fontSize = `${fontSize}px`;
    requestAnimationFrame(() => {
      containerElement.style.opacity = "1";
    });
  }, [theme, isDarkMode, visualEffectsEnabled, glassmorphismEnabled, glassBlurPercent, fontSize, containerElement, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryTheme", theme);
    }
  }, [theme, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryDarkMode", isDarkMode);
    }
  }, [isDarkMode, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryVisualEffects", visualEffectsEnabled);
    }
  }, [visualEffectsEnabled, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryGlassBlur", glassBlurPercent);
    }
  }, [glassBlurPercent, settingsLoaded]);
  reactExports.useEffect(() => {
    if (!isBlurFocusMode) return;
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setIsBlurFocusMode(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBlurFocusMode]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryFontSize", fontSize);
    }
  }, [fontSize, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryAutoPopup", autoPopup);
    }
  }, [autoPopup, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryPlaybackRate", playbackRate);
    }
  }, [playbackRate, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryHistory", history);
    }
  }, [history, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("ttsVoice_en", ttsVoiceEn);
    }
  }, [ttsVoiceEn, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("ttsVoice_fa", ttsVoiceFa);
    }
  }, [ttsVoiceFa, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("ttsVoice_ru", ttsVoiceRu);
    }
  }, [ttsVoiceRu, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showNouns", showNouns);
    }
  }, [showNouns, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showVerbs", showVerbs);
    }
  }, [showVerbs, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showAdjectives", showAdjectives);
    }
  }, [showAdjectives, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showAdverbs", showAdverbs);
    }
  }, [showAdverbs, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showExamples", showExamples);
    }
  }, [showExamples, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhonetic", showPhonetic);
    }
  }, [showPhonetic, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMeaning", showMeaning);
    }
  }, [showMeaning, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showSynonyms", showSynonyms);
    }
  }, [showSynonyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showAntonyms", showAntonyms);
    }
  }, [showAntonyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showHypernyms", showHypernyms);
    }
  }, [showHypernyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showHyponyms", showHyponyms);
    }
  }, [showHyponyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showSummary", showSummary);
    }
  }, [showSummary, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showKeyConcepts", showKeyConcepts);
    }
  }, [showKeyConcepts, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookNouns", showPhrasebookNouns);
    }
  }, [showPhrasebookNouns, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookVerbs", showPhrasebookVerbs);
    }
  }, [showPhrasebookVerbs, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookAdjectives", showPhrasebookAdjectives);
    }
  }, [showPhrasebookAdjectives, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookAdverbs", showPhrasebookAdverbs);
    }
  }, [showPhrasebookAdverbs, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookExamples", showPhrasebookExamples);
    }
  }, [showPhrasebookExamples, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookPhonetic", showPhrasebookPhonetic);
    }
  }, [showPhrasebookPhonetic, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookMeaning", showPhrasebookMeaning);
    }
  }, [showPhrasebookMeaning, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookSynonyms", showPhrasebookSynonyms);
    }
  }, [showPhrasebookSynonyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookAntonyms", showPhrasebookAntonyms);
    }
  }, [showPhrasebookAntonyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookHypernyms", showPhrasebookHypernyms);
    }
  }, [showPhrasebookHypernyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showPhrasebookHyponyms", showPhrasebookHyponyms);
    }
  }, [showPhrasebookHyponyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("dictionaryUiMode", uiMode);
    }
  }, [uiMode, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinNouns", showMinNouns);
    }
  }, [showMinNouns, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinVerbs", showMinVerbs);
    }
  }, [showMinVerbs, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinAdjectives", showMinAdjectives);
    }
  }, [showMinAdjectives, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinAdverbs", showMinAdverbs);
    }
  }, [showMinAdverbs, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinExamples", showMinExamples);
    }
  }, [showMinExamples, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinPhonetic", showMinPhonetic);
    }
  }, [showMinPhonetic, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinMeaning", showMinMeaning);
    }
  }, [showMinMeaning, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinSynonyms", showMinSynonyms);
    }
  }, [showMinSynonyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinAntonyms", showMinAntonyms);
    }
  }, [showMinAntonyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinHypernyms", showMinHypernyms);
    }
  }, [showMinHypernyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinHyponyms", showMinHyponyms);
    }
  }, [showMinHyponyms, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinSummary", showMinSummary);
    }
  }, [showMinSummary, settingsLoaded]);
  reactExports.useEffect(() => {
    if (settingsLoaded) {
      storage.set("showMinKeyConcepts", showMinKeyConcepts);
    }
  }, [showMinKeyConcepts, settingsLoaded]);
  reactExports.useEffect(() => {
    if (popupContainer) {
      const isMinimal = uiMode === "minimal";
      const width = isMinimal ? 360 : 440;
      const height = isMinimal ? 320 : 580;
      popupContainer.style.width = `${width}px`;
      popupContainer.style.height = `${height}px`;
      popupContainer.style.borderRadius = "16px";
    }
  }, [uiMode]);
  const handleSearch = reactExports.useCallback(async (overrideTerm, forceRefresh = false) => {
    const term = (overrideTerm || searchTerm).trim();
    if (!term) return;
    if (overrideTerm) {
      setSearchTerm(overrideTerm);
    }
    setIsLoading(true);
    setError(null);
    setWordData(null);
    setPassageData(null);
    setSuggestion(null);
    setActiveView("dictionary");
    const isPassage = term.split(/\s+/).length > 5;
    if (!isPassage && !forceRefresh) {
      try {
        const cachedData = await getDictionaryEntry(term);
        if (cachedData && cachedData.targetLanguage === targetLanguage) {
          setWordData(cachedData);
          setHistory((prev) => {
            const newTerm = term.toLowerCase();
            const filtered = prev.filter((item) => item.toLowerCase() !== newTerm);
            return [newTerm, ...filtered].slice(0, 50);
          });
          setIsLoading(false);
          return;
        }
      } catch (e) {
        console.error("Cache lookup failed", e);
      }
    }
    try {
      if (isPassage) {
        const data = await sendMessage("ANALYZE_PASSAGE", { passage: term, targetLanguage });
        setPassageData(data);
      } else {
        const data = await sendMessage("FETCH_WORD_INFO", { word: term, targetLanguage });
        setWordData(data);
        await addDictionaryEntry(data);
        if (forceRefresh) {
          const existingItem = phrasebookRef.current.find(
            (p) => p.word.toLowerCase() === data.word.toLowerCase()
          );
          if (existingItem) {
            const newItem = {
              id: Date.now().toString(),
              // Update ID/Timestamp
              word: data.word,
              phonetic: data.phonetic,
              translation: data.translation,
              synonyms: data.synonyms,
              synonymsTranslation: data.synonymsTranslation,
              antonyms: data.antonyms,
              antonymsTranslation: data.antonymsTranslation
            };
            await deletePhrase(existingItem.id);
            await addPhrase(newItem);
            setPhrasebook((prev) => prev.map((p) => p.id === existingItem.id ? newItem : p));
          }
        }
        setHistory((prev) => {
          const newTerm = term.toLowerCase();
          const filtered = prev.filter((item) => item.toLowerCase() !== newTerm);
          return [newTerm, ...filtered].slice(0, 50);
        });
      }
    } catch (err) {
      if (!isPassage) {
        try {
          const suggestion2 = await sendMessage("FETCH_SPELLING_SUGGESTION", { word: term });
          if (suggestion2) setSuggestion(suggestion2);
        } catch {
        }
        setError(err.message || "Failed to fetch definition");
      } else {
        setError(err.message || "Failed to analyze passage");
      }
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, targetLanguage]);
  reactExports.useEffect(() => {
    if (settingsLoaded && initialSearchTerm && initialView === "dictionary" && !hasInitializedSearch.current) {
      hasInitializedSearch.current = true;
      handleSearch(initialSearchTerm);
    }
  }, [initialSearchTerm, initialView, settingsLoaded, handleSearch]);
  reactExports.useEffect(() => {
    if (!settingsLoaded) return;
    if (activeView === "dictionary") {
      if (wordData) {
        handleSearch(wordData.word, true);
      } else if (passageData && (searchTerm || initialSearchTerm)) {
        handleSearch(searchTerm || initialSearchTerm, true);
      }
    }
  }, [targetLanguage, settingsLoaded, initialSearchTerm]);
  const playSpecificWord = reactExports.useCallback(async (wordToPlay) => {
    if (isFetchingAudio) return;
    try {
      setIsFetchingAudio(true);
      setIsSpeaking(true);
      setSpeakingRelatedWord(wordToPlay);
      let lang = "en";
      let voiceSetting = ttsVoiceEn;
      if (/[\u0600-\u06FF]/.test(wordToPlay)) {
        lang = "fa";
        voiceSetting = ttsVoiceFa;
      } else if (/[\u0400-\u04FF]/.test(wordToPlay)) {
        lang = "ru";
        voiceSetting = ttsVoiceRu;
      }
      const settings = {
        [`ttsVoice_${lang}`]: voiceSetting,
        voiceVolume: 1,
        voiceRate: playbackRate
        // Use playbackRate state
      };
      await playText(wordToPlay, lang, Date.now(), "source", "en", "fa", settings);
      setTimeout(() => {
        setIsSpeaking(false);
        setSpeakingRelatedWord(null);
      }, 2e3);
    } catch (e) {
      console.error(e);
      setError(`TTS Error: ${e.message || "Failed to play pronunciation"}`);
      setIsSpeaking(false);
      setSpeakingRelatedWord(null);
    } finally {
      setIsFetchingAudio(false);
    }
  }, [isFetchingAudio, speakingRelatedWord, playbackRate, ttsVoiceEn, ttsVoiceFa, ttsVoiceRu]);
  const playTranslatedSound = reactExports.useCallback(async () => {
    if (!wordData || !wordData.translation || isFetchingAudio) return;
    try {
      setIsFetchingAudio(true);
      setIsSpeaking(true);
      let langCode = "fa";
      let voiceSetting = ttsVoiceFa;
      const targetLower = (targetLanguage || "").toLowerCase();
      if (targetLower === "english") {
        langCode = "en";
        voiceSetting = ttsVoiceEn;
      } else if (targetLower === "russian") {
        langCode = "ru";
        voiceSetting = ttsVoiceRu;
      } else if (targetLower === "persian") {
        langCode = "fa";
        voiceSetting = ttsVoiceFa;
      } else {
        if (/[\u0600-\u06FF]/.test(wordData.translation)) {
          langCode = "fa";
          voiceSetting = ttsVoiceFa;
        } else if (/[\u0400-\u04FF]/.test(wordData.translation)) {
          langCode = "ru";
          voiceSetting = ttsVoiceRu;
        } else {
          langCode = "en";
          voiceSetting = ttsVoiceEn;
        }
      }
      const settings = {
        [`ttsVoice_${langCode}`]: voiceSetting,
        voiceVolume: 1,
        voiceRate: playbackRate
      };
      await playText(wordData.translation, langCode, Date.now(), "source", "en", langCode, settings);
      setTimeout(() => {
        setIsSpeaking(false);
      }, 2e3);
    } catch (e) {
      console.error(e);
      setError(`TTS Error: ${e.message || "Failed to play translation"}`);
      setIsSpeaking(false);
    } finally {
      setIsFetchingAudio(false);
    }
  }, [wordData, isFetchingAudio, ttsVoiceEn, ttsVoiceFa, ttsVoiceRu, targetLanguage, playbackRate]);
  const handleRelatedWordClick = reactExports.useCallback((word) => {
    setSearchTerm(word);
    handleSearch(word);
  }, [handleSearch]);
  const handleHistoryItemClick = reactExports.useCallback((word) => {
    setSearchTerm(word);
    handleSearch(word);
  }, [handleSearch]);
  const handlePlayRelatedWordSound = reactExports.useCallback((word) => {
    playSpecificWord(word);
  }, [playSpecificWord]);
  const handlePlaySound = reactExports.useCallback(() => {
    if (wordData?.word) playSpecificWord(wordData.word);
  }, [wordData, playSpecificWord]);
  const isWordInPhrasebook = reactExports.useMemo(() => {
    if (!wordData) return false;
    return phrasebook.some((item) => item.word.toLowerCase() === wordData.word.toLowerCase());
  }, [wordData, phrasebook]);
  const handleAddToPhrasebook = reactExports.useCallback(async () => {
    if (!wordData) return;
    if (isWordInPhrasebook) {
      const item = phrasebook.find((p) => p.word.toLowerCase() === wordData.word.toLowerCase());
      if (item) {
        await deletePhrase(item.id);
        setPhrasebook((prev) => prev.filter((p) => p.id !== item.id));
      }
    } else {
      const newItem = {
        id: Date.now().toString(),
        word: wordData.word,
        phonetic: wordData.phonetic,
        translation: wordData.translation,
        synonyms: wordData.synonyms,
        synonymsTranslation: wordData.synonymsTranslation,
        antonyms: wordData.antonyms,
        antonymsTranslation: wordData.antonymsTranslation,
        nouns: wordData.nouns,
        nounsTranslation: wordData.nounsTranslation,
        verbs: wordData.verbs,
        verbsTranslation: wordData.verbsTranslation,
        adjectives: wordData.adjectives,
        adjectivesTranslation: wordData.adjectivesTranslation,
        adverbs: wordData.adverbs,
        adverbsTranslation: wordData.adverbsTranslation,
        hypernyms: wordData.hypernyms,
        hypernymsTranslation: wordData.hypernymsTranslation,
        hyponyms: wordData.hyponyms,
        hyponymsTranslation: wordData.hyponymsTranslation,
        example: wordData.example,
        meaning: wordData.meaning
      };
      await addPhrase(newItem);
      setPhrasebook((prev) => [newItem, ...prev]);
    }
  }, [wordData, phrasebook, isWordInPhrasebook]);
  const handleCopyToClipboard = reactExports.useCallback(() => {
    if (!wordData) return;
    navigator.clipboard.writeText(wordData.word).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2e3);
    });
  }, [wordData]);
  const handleShowView = reactExports.useCallback((view) => {
    setActiveView((prev) => prev === view ? "dictionary" : view);
  }, []);
  const modifierState = reactExports.useRef({
    key: "",
    count: 0,
    timer: null,
    suppressed: false,
    timestamp: 0
  });
  const keyboardState = reactExports.useRef({
    held: /* @__PURE__ */ new Set(),
    downTime: /* @__PURE__ */ new Map(),
    pressOrder: []
  });
  reactExports.useEffect(() => {
    const executeAction = (actionName) => {
      if (actionName === "focusSearch") {
        searchInputRef.current?.focus();
        return;
      }
      if (actionName === "close") {
        if (activeView !== "dictionary") {
          handleShowView("dictionary");
          setSearchTerm("");
          setWordData(null);
          setPassageData(null);
          setSuggestion(null);
          setError(null);
          setIsLoading(false);
          searchInputRef.current?.focus();
          return;
        }
        if (searchTerm || wordData || passageData || error) {
          setSearchTerm("");
          setWordData(null);
          setPassageData(null);
          setSuggestion(null);
          setError(null);
          setIsLoading(false);
          searchInputRef.current?.focus();
          return;
        }
        onClose();
        return;
      }
      if (actionName === "playSound") {
        if (activeView === "dictionary" && wordData) {
          handlePlaySound();
        } else if (activeView === "settings") {
          const testLang = focusedVoiceLang;
          if (!testLang) return;
          const testPhrases = {
            "en": "Hello, this is a test.",
            "fa": "سلام، این یک تست است.",
            "ru": "Привет, это тест."
          };
          const voiceMap = {
            "en": ttsVoiceEn,
            "fa": ttsVoiceFa,
            "ru": ttsVoiceRu
          };
          let textToPlay = testPhrases[testLang] || testPhrases["en"];
          const isPersian = (text) => /[\u0600-\u06FF]/.test(text);
          const isRussian = (text) => /[\u0400-\u04FF]/.test(text);
          if (wordData?.word) {
            const word = wordData.word;
            if (testLang === "en" && !isPersian(word) && !isRussian(word)) {
              textToPlay = word;
            } else if (testLang === "fa" && isPersian(word)) {
              textToPlay = word;
            } else if (testLang === "ru" && isRussian(word)) {
              textToPlay = word;
            }
          }
          const voice = voiceMap[testLang] || voiceMap["en"];
          const settingsOverride = {
            bypassCache: true,
            voiceVolume: 1,
            voiceRate: playbackRate,
            [`ttsVoice_${testLang}`]: voice
          };
          playText(textToPlay, testLang, Date.now(), "source", "en", "fa", settingsOverride);
        }
      }
      if (actionName === "playTranslatedSound") {
        if (activeView === "dictionary" && wordData) {
          playTranslatedSound();
        }
      }
      if (actionName === "addToPhrasebook") {
        if (activeView === "dictionary" && wordData) {
          handleAddToPhrasebook();
        }
      }
      if (activeView === "dictionary" && wordData) {
        if (actionName === "copy") {
          const selection = window.getSelection();
          if (!selection || selection.toString().length === 0) handleCopyToClipboard();
        }
        if (actionName === "reTranslate") handleSearch(wordData.word, true);
      }
      if (actionName === "showHistory") handleShowView("history");
      if (actionName === "showPhrasebook") handleShowView("phrasebook");
      if (actionName === "showSettings") handleShowView("settings");
      if (actionName === "askAI") handleShowView("ask_ai");
      if (actionName === "toggleNeon") {
        setVisualEffectsEnabled((prev) => {
          const newVal = !prev;
          storage.set("dictionaryVisualEffects", newVal);
          return newVal;
        });
      }
      if (actionName === "toggleGlass") {
        setGlassmorphismEnabled((prev) => {
          const newVal = !prev;
          storage.set("dictionaryGlassmorphism", newVal);
          return newVal;
        });
      }
      if (actionName === "toggleAutoPopup") {
        setAutoPopup((prev) => {
          const newVal = !prev;
          storage.set("dictionaryAutoPopup", newVal);
          return newVal;
        });
      }
      if (actionName === "toggleTheme") {
        setIsDarkMode((prev) => {
          const newVal = !prev;
          storage.set("dictionaryDarkMode", newVal);
          return newVal;
        });
      }
    };
    const handleKeyDown = (e) => {
      if (isRecordingAnyShortcut) {
        if (e.key !== "Escape") {
          e.preventDefault();
        }
        return;
      }
      if (shouldSuppressAppShortcuts(e)) return;
      const key = normalizeKey(e.key);
      const now = Date.now();
      if (e.repeat && isModifier(key)) return;
      keyboardState.current.held.add(e.code);
      if (!keyboardState.current.downTime.has(key)) keyboardState.current.downTime.set(key, now);
      keyboardState.current.pressOrder.push({ key, t: now });
      if (isModifier(key)) {
        if (modifierState.current.key === key) {
          const dt = now - modifierState.current.timestamp;
          if (dt < TAP_THRESHOLD) {
            const entry = Object.entries(shortcuts).find(([_, s]) => s.doublePress && s.key.toLowerCase() === key.toLowerCase());
            if (entry) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              executeAction(entry[0]);
            }
            if (modifierState.current.timer) clearTimeout(modifierState.current.timer);
            modifierState.current = { key: "", count: 0, timer: null, suppressed: false, timestamp: 0 };
            return;
          }
        }
        if (modifierState.current.timer) clearTimeout(modifierState.current.timer);
        modifierState.current = { key, count: 1, timer: null, suppressed: false, timestamp: now };
        return;
      }
      const composed = {
        key: key.length === 1 ? key.toLowerCase() : key,
        ctrl: e.ctrlKey,
        shift: e.shiftKey,
        alt: e.altKey,
        meta: e.metaKey};
      for (const [name, s] of Object.entries(shortcuts)) {
        const physicalKey = getPhysicalKey(e);
        const charMatch = s.key.length === 1 ? s.key.toLowerCase() === composed.key : s.key === key;
        const physicalMatch = physicalKey ? s.key.toLowerCase() === physicalKey : false;
        const matchesKey = charMatch || physicalMatch;
        if (matchesKey && s.ctrl === composed.ctrl && s.shift === composed.shift && s.alt === composed.alt && s.meta === composed.meta) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          executeAction(name);
          if (modifierState.current.key) {
            modifierState.current.suppressed = true;
            if (modifierState.current.timer) clearTimeout(modifierState.current.timer);
            modifierState.current = { key: "", count: 0, timer: null, suppressed: false, timestamp: 0 };
          }
          return;
        }
      }
    };
    const handleKeyUp = (e) => {
      if (isRecordingAnyShortcut) {
        if (e.key !== "Escape") {
          e.preventDefault();
        }
        return;
      }
      if (shouldSuppressAppShortcuts(e)) return;
      const key = normalizeKey(e.key);
      const now = Date.now();
      keyboardState.current.held.delete(e.code);
      keyboardState.current.downTime.delete(key);
      if (isModifier(key) && modifierState.current.key === key && !modifierState.current.suppressed) {
        const holdDuration = now - modifierState.current.timestamp;
        if (holdDuration < 500) {
          if (modifierState.current.timer) clearTimeout(modifierState.current.timer);
          modifierState.current.timer = setTimeout(() => {
            const entry = Object.entries(shortcuts).find(([_, s]) => (s.key === key || s.key.toLowerCase() === key.toLowerCase()) && !s.doublePress);
            if (entry) executeAction(entry[0]);
            modifierState.current = { key: "", count: 0, timer: null, suppressed: false, timestamp: 0 };
          }, 300);
        } else {
          if (modifierState.current.timer) clearTimeout(modifierState.current.timer);
          modifierState.current = { key: "", count: 0, timer: null, suppressed: false, timestamp: 0 };
        }
      }
    };
    const handleGlobalClick = () => {
      modifierState.current = { key: "", count: 0, timer: null, suppressed: false, timestamp: 0 };
      setIsRecordingAnyShortcut(false);
    };
    const handleBlur = () => {
      modifierState.current = { key: "", count: 0, timer: null, suppressed: false, timestamp: 0 };
      keyboardState.current.held.clear();
      keyboardState.current.downTime.clear();
      keyboardState.current.pressOrder = [];
      setIsRecordingAnyShortcut(false);
    };
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
    document.addEventListener("mousedown", handleGlobalClick, true);
    window.addEventListener("blur", handleBlur);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("keyup", handleKeyUp, true);
      document.removeEventListener("mousedown", handleGlobalClick, true);
      window.removeEventListener("blur", handleBlur);
    };
  }, [activeView, wordData, searchTerm, passageData, error, shortcuts, handlePlaySound, handleAddToPhrasebook, handleCopyToClipboard, handleShowView, onClose, playTranslatedSound, focusedVoiceLang, ttsVoiceEn, ttsVoiceFa, ttsVoiceRu, playbackRate, isRecordingAnyShortcut, containerElement]);
  const handleSaveApiKey = async (key) => {
    await sendMessage("SET_API_KEY", { apiKey: key });
    setApiKey(key);
  };
  const handleClearHistory = async () => {
    setClearHistoryStatus("clearing");
    setHistory([]);
    await storage.set("dictionaryHistory", []);
    setClearHistoryStatus("done");
    setTimeout(() => setClearHistoryStatus("idle"), 2e3);
  };
  const handleClearPhrasebook = async () => {
    setClearPhrasebookStatus("clearing");
    await clearAllPhrases();
    await clearAllPronunciations();
    setPhrasebook([]);
    setClearPhrasebookStatus("done");
    setTimeout(() => setClearPhrasebookStatus("idle"), 2e3);
  };
  const handleClearSelectedData = async () => {
    setClearDataStatus("clearing");
    try {
      if (selectedClearCategories.history) {
        setHistory([]);
        await storage.set("dictionaryHistory", []);
      }
      if (selectedClearCategories.phrasebook) {
        await clearAllPhrases();
        setPhrasebook([]);
      }
      if (selectedClearCategories.audio) {
        await sendMessage("CLEAR_TTS_CACHE");
        await clearAllPronunciations();
      }
      if (selectedClearCategories.keyboard) {
        setShortcuts(defaultShortcuts);
        await storage.set("userShortcuts", defaultShortcuts);
      }
      if (selectedClearCategories.dictionary) {
        await clearAllDictionaryEntries();
        setWordData(null);
        setPassageData(null);
      }
      setClearDataStatus("done");
      setTimeout(() => {
        setClearDataStatus("idle");
      }, 1e3);
    } catch (err) {
      console.error("Failed to clear data:", err);
      setClearDataStatus("idle");
    }
  };
  const renderDictionaryView = () => {
    if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center py-10", "aria-label": "Loading content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-spinner" }) });
    if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-red-500 p-4 bg-red-500/10 rounded-xl mx-4", children: error });
    if (passageData) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 fade-in", children: [
      showSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2", children: "Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 dark:text-gray-200 mb-4 text-sm opacity-90", children: passageData.summary })
      ] }),
      showKeyConcepts && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2", children: "Key Concepts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: passageData.keyConcepts.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20", children: c }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2", children: "Translation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: `text-gray-800 dark:text-gray-200 text-lg ${isRTLLanguage(targetLanguage) ? "text-right" : "text-left"}`,
          dir: isRTLLanguage(targetLanguage) ? "rtl" : "ltr",
          style: { fontFamily: isRTLLanguage(targetLanguage) ? "Vazirmatn, sans-serif" : "inherit" },
          children: passageData.summaryTranslation
        }
      )
    ] });
    if (wordData) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pr-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 dark:text-white capitalize truncate", children: wordData.word }),
          showPhonetic && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500 dark:text-gray-400 mt-1 truncate", children: wordData.phonetic })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex items-center space-x-1 text-gray-600 dark:text-gray-400 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handlePlaySound,
              "aria-label": "Play pronunciation",
              title: "Play pronunciation",
              className: `p-2 rounded-full transition-all duration-200 ease-in-out header-icon-btn ${isSpeaking ? "opacity-50" : ""}`,
              style: { background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: `w-6 h-6 neon-icon-style ${isSpeaking ? "opacity-50" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7z" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleAddToPhrasebook,
              "aria-label": isWordInPhrasebook ? "Remove from Phrasebook" : "Save to Phrasebook",
              title: isWordInPhrasebook ? "Remove from Phrasebook" : "Save to Phrasebook",
              className: `p-2 rounded-full transition-all duration-200 ease-in-out header-icon-btn ${isWordInPhrasebook ? "text-accent" : ""}`,
              style: { background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: isWordInPhrasebook ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleCopyToClipboard,
              "aria-label": "Copy to clipboard",
              title: "Copy to clipboard",
              className: `p-2 rounded-full transition-all duration-200 ease-in-out header-icon-btn ${isCopied ? "text-green-500" : ""}`,
              style: { background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" },
              children: isCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", className: "text-green-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6 9 17l-5-5" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => wordData && handleSearch(wordData.word, true),
              "aria-label": "Re-translate",
              title: "Re-translate",
              className: "p-2 rounded-full transition-all duration-200 ease-in-out header-icon-btn",
              style: { background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 2v6h-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 22v-6h6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        showMeaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Meaning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 dark:text-gray-200 leading-relaxed", children: wordData.meaning })
        ] }),
        showExamples && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 italic py-1", style: { borderLeft: "3px solid var(--accent-color)", paddingLeft: "7px", color: isDarkMode ? "#e0e0e0" : void 0 }, children: [
            '"',
            wordData.example,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Translation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-gray-800 dark:text-gray-200 text-lg ${isRTLLanguage(targetLanguage) ? "text-right" : "text-left"}`,
              dir: isRTLLanguage(targetLanguage) ? "rtl" : "ltr",
              style: { fontFamily: isRTLLanguage(targetLanguage) ? "Vazirmatn, sans-serif" : "inherit" },
              children: wordData.translation
            }
          )
        ] })
      ] }),
      showSynonyms && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Synonyms",
          words: wordData.synonyms,
          translations: wordData.synonymsTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      ),
      showAntonyms && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Antonyms",
          words: wordData.antonyms,
          translations: wordData.antonymsTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      ),
      showNouns && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Nouns",
          words: wordData.nouns || [],
          translations: wordData.nounsTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      ),
      showVerbs && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Verbs",
          words: wordData.verbs || [],
          translations: wordData.verbsTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      ),
      showAdjectives && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Adjectives",
          words: wordData.adjectives || [],
          translations: wordData.adjectivesTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      ),
      showAdverbs && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Adverbs",
          words: wordData.adverbs || [],
          translations: wordData.adverbsTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      ),
      showHypernyms && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Hypernyms",
          words: wordData.hypernyms || [],
          translations: wordData.hypernymsTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      ),
      showHyponyms && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RelatedWords,
        {
          title: "Hyponyms",
          words: wordData.hyponyms || [],
          translations: wordData.hyponymsTranslation,
          onPlayPronunciation: handlePlayRelatedWordSound,
          speakingWord: speakingRelatedWord,
          onWordClick: handleRelatedWordClick,
          isDarkMode,
          targetLanguage
        }
      )
    ] });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-400 dark:text-gray-500 flex flex-col items-center justify-center h-full px-4 fade-in effects-enabled", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold select-none neon-text", "data-text": "Berkut", children: "Berkut" }) });
  };
  if (isBlurFocusMode) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-full neon-border rounded-2xl ${isDarkMode ? "dark" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `w-full h-full font-sans flex flex-col items-center justify-end app-background rounded-[calc(1rem-2px)] overflow-hidden cursor-default relative ${isDarkMode ? "dark" : ""}`,
        style: {
          fontFamily: "var(--font-family-main)",
          "--glass-blur": `${(4 + glassBlurPercent / 100 * 20).toFixed(1)}px`,
          "--glass-opacity": (0.25 + glassBlurPercent / 100 * 0.6).toFixed(2)
        },
        onClick: () => setIsBlurFocusMode(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "focus-mode-drag-handle",
              "data-drag-handle": "true",
              onClick: (e) => e.stopPropagation(),
              title: "Drag to move"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "blur-focus-panel mb-16",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium", style: { color: "var(--accent-color)" }, children: "Blur Intensity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-sm font-mono px-2 py-0.5 rounded",
                      style: { color: "var(--accent-color)" },
                      children: [
                        glassBlurPercent,
                        "%"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "5",
                    value: glassBlurPercent,
                    onChange: (e) => setGlassBlurPercent(parseInt(e.target.value)),
                    className: "custom-slider blur-focus-slider",
                    style: {
                      background: `linear-gradient(to right, var(--accent-color) 0%, var(--accent-color) ${glassBlurPercent}%, ${isDarkMode ? "#374151" : "#E5E7EB"} ${glassBlurPercent}%, ${isDarkMode ? "#374151" : "#E5E7EB"} 100%)`,
                      width: "346px",
                      borderRadius: "2px",
                      appearance: "none",
                      cursor: "grab"
                    }
                  }
                )
              ]
            }
          )
        ]
      }
    ) });
  }
  const renderMinimalView = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-full", style: { minHeight: "160px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-spinner" }) });
    }
    if (error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-red-500 p-4 bg-red-500/10 rounded-xl h-full flex flex-col items-center justify-center", style: { minHeight: "160px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "mb-2 opacity-80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: error })
      ] });
    }
    if (passageData) {
      const isTargetRTL = isRTLLanguage(targetLanguage);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in space-y-4 text-left select-text", style: { contentVisibility: "auto" }, children: [
        showMinSummary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 dark:text-gray-200 text-sm leading-relaxed", children: passageData.summary })
        ] }),
        showMinKeyConcepts && passageData.keyConcepts && passageData.keyConcepts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Key Concepts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: passageData.keyConcepts.map((concept, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/20", children: concept }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Translation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-gray-800 dark:text-gray-200 text-sm leading-relaxed ${isTargetRTL ? "text-right" : "text-left"}`,
              dir: isTargetRTL ? "rtl" : "ltr",
              style: { fontFamily: isTargetRTL ? "Vazirmatn, sans-serif" : "inherit" },
              children: passageData.summaryTranslation
            }
          )
        ] })
      ] });
    }
    if (wordData) {
      const isTargetRTL = isRTLLanguage(targetLanguage);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in space-y-4 text-left select-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-gray-200/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-gray-900 dark:text-white capitalize truncate max-w-[220px]", title: wordData.word, children: wordData.word }),
            showMinPhonetic && wordData.phonetic && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-gray-400 dark:text-gray-500 mt-0.5", children: wordData.phonetic })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 flex items-center space-x-1 text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handlePlaySound,
                "aria-label": "Play pronunciation",
                title: "Play pronunciation",
                className: `p-2 rounded-full transition-all duration-200 ease-in-out header-icon-btn ${isSpeaking ? "opacity-50" : ""}`,
                style: { background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: `w-6 h-6 neon-icon-style ${isSpeaking ? "opacity-50" : ""}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7z" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleAddToPhrasebook,
                "aria-label": isWordInPhrasebook ? "Remove from Phrasebook" : "Save to Phrasebook",
                title: isWordInPhrasebook ? "Remove from Phrasebook" : "Save to Phrasebook",
                className: `p-2 rounded-full transition-all duration-200 ease-in-out header-icon-btn ${isWordInPhrasebook ? "text-accent" : ""}`,
                style: { background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: isWordInPhrasebook ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleCopyToClipboard,
                "aria-label": "Copy to clipboard",
                title: "Copy to clipboard",
                className: `p-2 rounded-full transition-all duration-200 ease-in-out header-icon-btn ${isCopied ? "text-green-500" : ""}`,
                style: { background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" },
                children: isCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", className: "text-green-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6 9 17l-5-5" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pr-1", children: [
          showMinMeaning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Meaning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 dark:text-gray-200 leading-relaxed", children: wordData.meaning })
          ] }),
          showMinExamples && wordData.example && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Example" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 dark:text-gray-300 italic py-1", style: { borderLeft: "3px solid var(--accent-color)", paddingLeft: "7px", color: isDarkMode ? "#e0e0e0" : void 0 }, children: [
              '"',
              wordData.example,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400", children: "Translation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-gray-800 dark:text-gray-200 text-lg ${isTargetRTL ? "text-right" : "text-left"}`,
                dir: isTargetRTL ? "rtl" : "ltr",
                style: { fontFamily: isTargetRTL ? "Vazirmatn, sans-serif" : "inherit" },
                children: wordData.translation
              }
            )
          ] }),
          showMinSynonyms && wordData.synonyms && wordData.synonyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Synonyms",
              words: wordData.synonyms,
              translations: wordData.synonymsTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          ),
          showMinAntonyms && wordData.antonyms && wordData.antonyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Antonyms",
              words: wordData.antonyms,
              translations: wordData.antonymsTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          ),
          showMinNouns && wordData.nouns && wordData.nouns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Nouns",
              words: wordData.nouns,
              translations: wordData.nounsTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          ),
          showMinVerbs && wordData.verbs && wordData.verbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Verbs",
              words: wordData.verbs,
              translations: wordData.verbsTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          ),
          showMinAdjectives && wordData.adjectives && wordData.adjectives.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Adjectives",
              words: wordData.adjectives,
              translations: wordData.adjectivesTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          ),
          showMinAdverbs && wordData.adverbs && wordData.adverbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Adverbs",
              words: wordData.adverbs,
              translations: wordData.adverbsTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          ),
          showMinHypernyms && wordData.hypernyms && wordData.hypernyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Hypernyms",
              words: wordData.hypernyms,
              translations: wordData.hypernymsTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          ),
          showMinHyponyms && wordData.hyponyms && wordData.hyponyms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RelatedWords,
            {
              title: "Hyponyms",
              words: wordData.hyponyms,
              translations: wordData.hyponymsTranslation,
              onPlayPronunciation: handlePlayRelatedWordSound,
              speakingWord: speakingRelatedWord,
              onWordClick: handleRelatedWordClick,
              isDarkMode,
              targetLanguage
            }
          )
        ] })
      ] });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-gray-400 dark:text-gray-500 flex flex-col items-center justify-center h-full px-4 py-8 select-none", style: { minHeight: "160px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold neon-text leading-none pb-1", "data-text": "Berkut", children: "Berkut" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Minimal Mode Active" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 dark:text-gray-600 mt-1", children: "Double click to return to Classic mode" })
    ] });
  };
  if (uiMode === "minimal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-full h-full neon-border rounded-2xl ${isDarkMode ? "dark" : ""}`,
        onDoubleClick: () => {
          setUiMode("classic");
          setActiveView("dictionary");
          storage.set("dictionaryUiMode", "classic");
        },
        title: "Double click to switch to Classic UI mode",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-full h-full font-sans flex flex-col app-background rounded-[calc(1rem-2px)] overflow-hidden ${isDarkMode ? "dark" : ""}`,
            style: {
              fontFamily: "var(--font-family-main)",
              "--glass-blur": `${(4 + glassBlurPercent / 100 * 20).toFixed(1)}px`,
              "--glass-opacity": (0.25 + glassBlurPercent / 100 * 0.6).toFixed(2)
            },
            "data-drag-handle": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow overflow-y-auto p-4 custom-scrollbar berkut-scroll-contain", children: renderMinimalView() })
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-full neon-border rounded-2xl ${isDarkMode ? "dark" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `w-full h-full font-sans flex flex-col app-background rounded-[calc(1rem-2px)] overflow-hidden ${isDarkMode ? "dark" : ""}`,
      style: {
        fontFamily: "var(--font-family-main)",
        "--glass-blur": `${(4 + glassBlurPercent / 100 * 20).toFixed(1)}px`,
        "--glass-opacity": (0.25 + glassBlurPercent / 100 * 0.6).toFixed(2)
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-40 flex justify-between items-center mb-4 px-3 pt-3 cursor-grab select-none", "data-drag-handle": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsDarkMode((p) => !p), className: `header-icon-btn`, title: isDarkMode ? "Light mode" : "Dark mode", children: isDarkMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleShowView("history"), className: `header-icon-btn ${activeView === "history" ? "header-icon-active" : ""}`, title: "History", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "neon-icon-style", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6.52 4.86A9 9 0 1 1 3.08 10.83" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 8v5l4 2" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleShowView("phrasebook"), className: `header-icon-btn ${activeView === "phrasebook" ? "header-icon-active" : ""}`, title: "Phrasebook", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleShowView("ask_ai"), className: `header-icon-btn ${activeView === "ask_ai" ? "header-icon-active" : ""}`, title: "Ask AI", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "28", height: "28", viewBox: "0 0 24 24", className: "neon-icon-style", children: /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "12", y: "17", fontSize: "15", fontWeight: "800", textAnchor: "middle", fill: "currentColor", children: "AI" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleShowView("settings"), className: `header-icon-btn ${activeView === "settings" ? "header-icon-active" : ""}`, title: "Settings", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "neon-icon-style", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "header-icon-btn hover:text-red-500", title: "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          ] }) })
        ] }),
        activeView === "dictionary" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative neon-search-bar", style: { backgroundColor: isDarkMode ? "#1F2937" : "#ffffff" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "search-icon", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.3-4.3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: searchInputRef, autoFocus: true, type: "text", value: searchTerm, onChange: (e) => {
            const val = e.target.value;
            setSearchTerm(val);
            if (val.trim() === "") {
              setWordData(null);
              setPassageData(null);
              setSuggestion(null);
              setError(null);
              setActiveView("dictionary");
            }
          }, onKeyDown: (e) => e.key === "Enter" && handleSearch(), placeholder: "Search for a word...", className: "search-input", style: { backgroundColor: "transparent" } })
        ] }) }),
        suggestion && !isLoading && activeView === "dictionary" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
          "Did you mean: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setSearchTerm(suggestion);
            handleSearch(suggestion);
          }, className: "font-semibold text-accent underline", children: suggestion }),
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-grow overflow-y-auto py-4 berkut-scroll-contain", children: [
          activeView === "dictionary" && renderDictionaryView(),
          activeView === "history" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            HistoryView,
            {
              history,
              handleClearHistory,
              clearHistoryStatus,
              isDarkMode,
              onItemClick: handleHistoryItemClick
            }
          ),
          activeView === "phrasebook" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            PhrasebookView,
            {
              phrasebook,
              handleClearPhrasebook,
              clearPhrasebookStatus,
              isDarkMode,
              targetLanguage,
              deletePhrase,
              setPhrasebook,
              speakingRelatedWord: speakingRelatedWord || "",
              playSpecificWord,
              handlePlayRelatedWordSound,
              handleRelatedWordClick,
              showPhrasebookPhonetic,
              showPhrasebookMeaning,
              showPhrasebookExamples,
              showPhrasebookSynonyms,
              showPhrasebookAntonyms,
              showPhrasebookNouns,
              showPhrasebookVerbs,
              showPhrasebookAdjectives,
              showPhrasebookAdverbs,
              showPhrasebookHypernyms,
              showPhrasebookHyponyms
            }
          ),
          activeView === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 fade-in pb-6", onClick: () => setSelectedNumericControl(null), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-800 dark:text-white mb-4", children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              SettingsGroup,
              {
                title: "General & API",
                isOpen: !!settingsGroupState["General & API"],
                onToggle: () => toggleSettingsGroup("General & API"),
                isDarkMode,
                glassmorphismEnabled,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Translation Engine" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: "Choose between high-quality AI lookup (Cerebras) or blazing-fast free translations (Google Translate).", className: "info-badge-offset" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CustomDropdown,
                      {
                        value: translationEngine,
                        options: [
                          { value: "cerebras", label: "Cerebras AI" },
                          { value: "google", label: "Google Translate (Free & Fast)" }
                        ],
                        onChange: async (val) => {
                          const engine = val;
                          setTranslationEngine(engine);
                          await storage.set("translationEngine", engine);
                        },
                        isDarkMode
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Target Language" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: "Choose the language for definitions and translations. (Select by typing and pressing Enter, or by clicking)", className: "info-badge-offset" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LanguageSelector,
                      {
                        targetLanguage,
                        onSelect: (lang) => {
                          setTargetLanguage(lang);
                          storage.set("dictionaryTargetLanguage", lang);
                        },
                        isDarkMode
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl settings-card transition-opacity duration-200 ${translationEngine === "google" ? "opacity-50" : ""}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Cerebras API Key" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: translationEngine === "google" ? "Locked: Google Translate is active." : "Required for definitions.", className: "info-badge-offset" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "password",
                        value: apiKey,
                        onChange: (e) => setApiKey(e.target.value),
                        onBlur: () => handleSaveApiKey(apiKey),
                        placeholder: translationEngine === "google" ? "Not required (Google Translate active)" : "Enter Cerebras API key",
                        disabled: translationEngine === "google",
                        className: `w-full px-3 py-2 border rounded-lg text-sm bg-transparent text-gray-800 dark:text-gray-200 ${translationEngine === "google" ? "border-gray-200 dark:border-gray-700 cursor-not-allowed" : "border-gray-300 dark:border-gray-500"}`,
                        style: { backgroundColor: "transparent" }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl settings-card transition-opacity duration-200 ${translationEngine === "google" ? "opacity-50" : ""}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Cerebras Model" }),
                      loadingModels && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 animate-pulse", children: "Loading..." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: translationEngine === "google" ? "Locked: Google Translate is active." : "Selected AI model for dictionary lookup.", className: "info-badge-offset" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CustomDropdown,
                      {
                        value: cerebrasModel,
                        options: cerebrasModels.map((model) => ({ value: model, label: model })),
                        onChange: handleCerebrasModelChange,
                        isDarkMode,
                        disabled: translationEngine === "google"
                      }
                    ),
                    modelsError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: modelsError })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "UI Mode" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: "Minimal mode hides all extra icons and buttons to create a clean, clutter-free lookup popup. Double click the minimal popup to return to Classic mode.", className: "info-badge-offset" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                      position: "relative",
                      width: "100%",
                      height: "40px",
                      backgroundColor: isDarkMode ? "#1a1d24" : "#f3f4f6",
                      borderRadius: "9999px",
                      border: isDarkMode ? "1px solid #2B3544" : "1px solid #e5e7eb",
                      overflow: "hidden",
                      display: "flex",
                      cursor: "pointer",
                      userSelect: "none"
                    }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => {
                            setUiMode("classic");
                            storage.set("dictionaryUiMode", "classic");
                          },
                          style: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "53%",
                            height: "100%",
                            clipPath: "polygon(0 0, 100% 0, 88.68% 100%, 0 100%)",
                            backgroundColor: uiMode === "classic" ? isDarkMode ? "#3b1c21" : "#fee2e2" : "transparent",
                            color: uiMode === "classic" ? isDarkMode ? "#f87171" : "#b91c1c" : isDarkMode ? "#9ca3af" : "#6b7280",
                            border: "none",
                            outline: "none",
                            cursor: "pointer",
                            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                            fontSize: "11px",
                            fontWeight: "bold",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingRight: "6%",
                            transition: "all 0.2s ease",
                            zIndex: uiMode === "classic" ? 2 : 1
                          },
                          children: "Classic"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => {
                            setUiMode("minimal");
                            storage.set("dictionaryUiMode", "minimal");
                          },
                          style: {
                            position: "absolute",
                            right: 0,
                            top: 0,
                            width: "53%",
                            height: "100%",
                            clipPath: "polygon(11.32% 0, 100% 0, 100% 100%, 0 100%)",
                            backgroundColor: uiMode === "minimal" ? isDarkMode ? "#152b22" : "#d1fae5" : "transparent",
                            color: uiMode === "minimal" ? isDarkMode ? "#34d399" : "#065f46" : isDarkMode ? "#9ca3af" : "#6b7280",
                            border: "none",
                            outline: "none",
                            cursor: "pointer",
                            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                            fontSize: "11px",
                            fontWeight: "bold",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: "6%",
                            transition: "all 0.2s ease",
                            zIndex: uiMode === "minimal" ? 2 : 1
                          },
                          children: "Minimal"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: 3
                      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "line",
                        {
                          x1: "53%",
                          y1: "0",
                          x2: "47%",
                          y2: "100%",
                          stroke: isDarkMode ? "#2B3544" : "#e5e7eb",
                          strokeWidth: "1"
                        }
                      ) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Auto-Popup" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: "Quick translation on selected text — you don’t need to click the popup (berkut) icon for the dictionary to work.", className: "info-badge-offset" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: autoPopup, onChange: (e) => setAutoPopup(e.target.checked), className: "sr-only peer" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-checked:bg-accent rounded-full relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:-translate-y-1/2",
                          style: { backgroundColor: autoPopup ? void 0 : isDarkMode ? "#374151" : "#E5E7EB" }
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card border-t border-gray-100 dark:border-gray-800 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200 mb-3", children: "Clear Data" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                      { id: "history", label: "History" },
                      { id: "phrasebook", label: "Phrasebook" },
                      { id: "audio", label: "Audio" },
                      { id: "keyboard", label: "Keyboard" },
                      { id: "dictionary", label: "Cache" }
                    ].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setSelectedClearCategories((prev) => ({ ...prev, [cat.id]: !prev[cat.id] })),
                        className: "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center border hover:scale-110 hover:shadow-lg active:scale-95 cursor-pointer",
                        style: {
                          backgroundColor: selectedClearCategories[cat.id] ? "var(--accent-color)" : "color-mix(in srgb, var(--accent-color), transparent 85%)",
                          color: selectedClearCategories[cat.id] ? "var(--on-accent-text)" : "var(--accent-color)",
                          borderColor: "var(--accent-color)",
                          boxShadow: selectedClearCategories[cat.id] ? "0 0 15px color-mix(in srgb, var(--accent-color), transparent 40%)" : "none"
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.backgroundColor = "var(--accent-color)";
                          e.currentTarget.style.color = "var(--on-accent-text)";
                          e.currentTarget.style.boxShadow = "0 0 15px color-mix(in srgb, var(--accent-color), transparent 40%)";
                        },
                        onMouseLeave: (e) => {
                          if (!selectedClearCategories[cat.id]) {
                            e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--accent-color), transparent 85%)";
                            e.currentTarget.style.color = "var(--accent-color)";
                            e.currentTarget.style.boxShadow = "none";
                          }
                        },
                        children: cat.label
                      },
                      cat.id
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: handleClearSelectedData,
                        disabled: clearDataStatus !== "idle" || !Object.values(selectedClearCategories).some((v) => v),
                        className: "px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer flex justify-center items-center gap-2 hover:scale-[1.05] active:scale-[0.95] border",
                        style: {
                          backgroundColor: clearDataStatus === "done" ? "#10b981" : clearDataStatus === "clearing" ? "#9ca3af" : "transparent",
                          color: clearDataStatus === "idle" ? "#f87171" : "#ffffff",
                          borderColor: clearDataStatus === "done" ? "#10b981" : clearDataStatus === "clearing" ? "#9ca3af" : "#f87171",
                          borderWidth: "2px",
                          opacity: clearDataStatus === "idle" && !Object.values(selectedClearCategories).some((v) => v) ? 0.5 : 1,
                          boxShadow: clearDataStatus === "done" ? "0 0 15px rgba(16, 185, 129, 0.4)" : "none"
                        },
                        onMouseEnter: (e) => {
                          if (clearDataStatus === "idle" && Object.values(selectedClearCategories).some((v) => v)) {
                            e.currentTarget.style.backgroundColor = "rgba(248, 113, 113, 0.15)";
                            e.currentTarget.style.boxShadow = "0 0 15px rgba(248, 113, 113, 0.2)";
                          }
                        },
                        onMouseLeave: (e) => {
                          if (clearDataStatus === "idle") {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.boxShadow = "none";
                          }
                        },
                        children: clearDataStatus === "idle" ? "Clear Cache" : clearDataStatus === "clearing" ? "Clearing..." : "Cleared!"
                      }
                    ) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SettingsGroup,
              {
                title: "Content Display",
                isOpen: !!settingsGroupState["Content Display"],
                onToggle: () => toggleSettingsGroup("Content Display"),
                isDarkMode,
                infoNote: "Choose which items should be shown in Dictionary and Phrasebook.",
                infoBadgeClassName: "info-badge-header-offset",
                glassmorphismEnabled,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Dictionary View" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBadge, { note: "Summary and Key Concepts are for multi-sentence translations." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                      { label: "Phonetic", state: showPhonetic, setter: setShowPhonetic },
                      { label: "Meaning", state: showMeaning, setter: setShowMeaning },
                      { label: "Examples", state: showExamples, setter: setShowExamples },
                      { label: "Synonyms", state: showSynonyms, setter: setShowSynonyms },
                      { label: "Antonyms", state: showAntonyms, setter: setShowAntonyms },
                      { label: "Nouns", state: showNouns, setter: setShowNouns },
                      { label: "Verbs", state: showVerbs, setter: setShowVerbs },
                      { label: "Adjectives", state: showAdjectives, setter: setShowAdjectives },
                      { label: "Adverbs", state: showAdverbs, setter: setShowAdverbs },
                      { label: "Hypernyms", state: showHypernyms, setter: setShowHypernyms },
                      { label: "Hyponyms", state: showHyponyms, setter: setShowHyponyms },
                      { label: "Summary", state: showSummary, setter: setShowSummary },
                      { label: "Key Concepts", state: showKeyConcepts, setter: setShowKeyConcepts }
                    ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => item.setter(!item.state),
                        className: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border hover:scale-105",
                        style: {
                          backgroundColor: item.state ? "var(--accent-color)" : isDarkMode ? "rgba(55, 65, 81, 0.5)" : "#f3f4f6",
                          color: item.state ? "var(--on-accent-text)" : isDarkMode ? "#d1d5db" : "#4b5563",
                          borderColor: item.state ? "var(--accent-color)" : "transparent",
                          boxShadow: item.state ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
                          cursor: "pointer"
                        },
                        children: item.label
                      },
                      idx
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gray-200 dark:bg-gray-700 opacity-50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium mb-2 text-gray-500 dark:text-gray-400", children: "Phrasebook View" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                      { label: "Phonetic", state: showPhrasebookPhonetic, setter: setShowPhrasebookPhonetic },
                      { label: "Meaning", state: showPhrasebookMeaning, setter: setShowPhrasebookMeaning },
                      { label: "Examples", state: showPhrasebookExamples, setter: setShowPhrasebookExamples },
                      { label: "Synonyms", state: showPhrasebookSynonyms, setter: setShowPhrasebookSynonyms },
                      { label: "Antonyms", state: showPhrasebookAntonyms, setter: setShowPhrasebookAntonyms },
                      { label: "Nouns", state: showPhrasebookNouns, setter: setShowPhrasebookNouns },
                      { label: "Verbs", state: showPhrasebookVerbs, setter: setShowPhrasebookVerbs },
                      { label: "Adjectives", state: showPhrasebookAdjectives, setter: setShowPhrasebookAdjectives },
                      { label: "Adverbs", state: showPhrasebookAdverbs, setter: setShowPhrasebookAdverbs },
                      { label: "Hypernyms", state: showPhrasebookHypernyms, setter: setShowPhrasebookHypernyms },
                      { label: "Hyponyms", state: showPhrasebookHyponyms, setter: setShowPhrasebookHyponyms }
                    ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => item.setter(!item.state),
                        className: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border hover:scale-105",
                        style: {
                          backgroundColor: item.state ? "var(--accent-color)" : isDarkMode ? "rgba(55, 65, 81, 0.5)" : "#f3f4f6",
                          color: item.state ? "var(--on-accent-text)" : isDarkMode ? "#d1d5db" : "#4b5563",
                          borderColor: item.state ? "var(--accent-color)" : "transparent",
                          boxShadow: item.state ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
                          cursor: "pointer"
                        },
                        children: item.label
                      },
                      idx
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gray-200 dark:bg-gray-700 opacity-50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium mb-2 text-gray-500 dark:text-gray-400", children: "Minimal View" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                      { label: "Phonetic", state: showMinPhonetic, setter: setShowMinPhonetic },
                      { label: "Meaning", state: showMinMeaning, setter: setShowMinMeaning },
                      { label: "Examples", state: showMinExamples, setter: setShowMinExamples },
                      { label: "Synonyms", state: showMinSynonyms, setter: setShowMinSynonyms },
                      { label: "Antonyms", state: showMinAntonyms, setter: setShowMinAntonyms },
                      { label: "Nouns", state: showMinNouns, setter: setShowMinNouns },
                      { label: "Verbs", state: showMinVerbs, setter: setShowMinVerbs },
                      { label: "Adjectives", state: showMinAdjectives, setter: setShowMinAdjectives },
                      { label: "Adverbs", state: showMinAdverbs, setter: setShowMinAdverbs },
                      { label: "Hypernyms", state: showMinHypernyms, setter: setShowMinHypernyms },
                      { label: "Hyponyms", state: showMinHyponyms, setter: setShowMinHyponyms },
                      { label: "Summary", state: showMinSummary, setter: setShowMinSummary },
                      { label: "Key Concepts", state: showMinKeyConcepts, setter: setShowMinKeyConcepts }
                    ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => item.setter(!item.state),
                        className: "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border hover:scale-105",
                        style: {
                          backgroundColor: item.state ? "var(--accent-color)" : isDarkMode ? "rgba(55, 65, 81, 0.5)" : "#f3f4f6",
                          color: item.state ? "var(--on-accent-text)" : isDarkMode ? "#d1d5db" : "#4b5563",
                          borderColor: item.state ? "var(--accent-color)" : "transparent",
                          boxShadow: item.state ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
                          cursor: "pointer"
                        },
                        children: item.label
                      },
                      idx
                    )) })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              SettingsGroup,
              {
                title: "Appearance",
                isOpen: !!settingsGroupState["Appearance"],
                onToggle: () => toggleSettingsGroup("Appearance"),
                isDarkMode,
                glassmorphismEnabled,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200 mb-3", children: "Theme Color" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-around", children: ["indigo", "mint", "amber", "crimson", "violet", "neon"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTheme(t), className: `w-10 h-10 rounded-full ${theme === t ? "ring-2 ring-offset-2 ring-gray-800 dark:ring-white" : ""}`, style: { background: t === "neon" ? "conic-gradient(hsl(220,100%,60%),hsl(280,100%,60%),hsl(330,100%,60%),hsl(180,100%,50%),hsl(220,100%,60%))" : t === "indigo" ? "#3a86ff" : t === "mint" ? "#00ffa3" : t === "amber" ? "#ffaa00" : t === "crimson" ? "#ff0055" : "#aa00ff" } }, t)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Neon Effects" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Animated borders and glow" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: visualEffectsEnabled, onChange: (e) => setVisualEffectsEnabled(e.target.checked), className: "sr-only peer" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-checked:bg-accent rounded-full relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:-translate-y-1/2",
                          style: { backgroundColor: visualEffectsEnabled ? void 0 : isDarkMode ? "#374151" : "#E5E7EB" }
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Glassmorphism" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Apply glass-like effect to app" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: glassmorphismEnabled,
                            onChange: (e) => {
                              setGlassmorphismEnabled(e.target.checked);
                              storage.set("dictionaryGlassmorphism", e.target.checked);
                            },
                            className: "sr-only peer"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-checked:bg-accent rounded-full relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:-translate-y-1/2",
                            style: { backgroundColor: glassmorphismEnabled ? void 0 : isDarkMode ? "#374151" : "#E5E7EB" }
                          }
                        )
                      ] })
                    ] }),
                    glassmorphismEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 animate-pop-in", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: "text-sm font-medium cursor-pointer transition-colors",
                            style: { color: isDarkMode ? "#9ca3af" : "#4b5563" },
                            onClick: () => setIsBlurFocusMode(true),
                            title: "Click to enter Focus Mode",
                            onMouseEnter: (e) => {
                              e.currentTarget.style.color = "var(--accent-color)";
                            },
                            onMouseLeave: (e) => {
                              e.currentTarget.style.color = isDarkMode ? "#9ca3af" : "#4b5563";
                            },
                            children: "Blur Intensity"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "text-sm font-mono px-2 py-0.5 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors",
                            style: {
                              color: "var(--accent-color)",
                              backgroundColor: selectedNumericControl === "blur" ? isDarkMode ? "#4b5563" : "#d1d5db" : "transparent"
                            },
                            tabIndex: 0,
                            role: "spinbutton",
                            "aria-valuenow": glassBlurPercent,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            title: "Click to select, use arrow keys to adjust",
                            onClick: (e) => {
                              e.stopPropagation();
                              setSelectedNumericControl(selectedNumericControl === "blur" ? null : "blur");
                            },
                            onMouseEnter: (e) => {
                              if (selectedNumericControl !== "blur") {
                                e.currentTarget.style.backgroundColor = isDarkMode ? "#4b5563" : "#d1d5db";
                              }
                            },
                            onMouseLeave: (e) => {
                              if (selectedNumericControl !== "blur") {
                                e.currentTarget.style.backgroundColor = "transparent";
                              }
                            },
                            onKeyDown: (e) => handleSettingsKeyDown(e, glassBlurPercent, setGlassBlurPercent, 5, 0, 100),
                            children: [
                              glassBlurPercent,
                              "%"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "range",
                          min: "0",
                          max: "100",
                          step: "5",
                          value: glassBlurPercent,
                          onChange: (e) => setGlassBlurPercent(parseInt(e.target.value)),
                          className: "custom-slider",
                          style: {
                            marginTop: "12px",
                            background: `linear-gradient(to right, var(--accent-color) 0%, var(--accent-color) ${glassBlurPercent}%, ${isDarkMode ? "#374151" : "#E5E7EB"} ${glassBlurPercent}%, ${isDarkMode ? "#374151" : "#E5E7EB"} 100%)`
                          }
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Font Size" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-sm font-mono px-2 py-0.5 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors",
                          style: {
                            color: "var(--accent-color)",
                            backgroundColor: selectedNumericControl === "fontSize" ? isDarkMode ? "#4b5563" : "#d1d5db" : "transparent"
                          },
                          tabIndex: 0,
                          role: "button",
                          title: "Click to select, use arrow keys to adjust",
                          onClick: (e) => {
                            e.stopPropagation();
                            setSelectedNumericControl(selectedNumericControl === "fontSize" ? null : "fontSize");
                          },
                          onMouseEnter: (e) => {
                            if (selectedNumericControl !== "fontSize") {
                              e.currentTarget.style.backgroundColor = isDarkMode ? "#4b5563" : "#d1d5db";
                            }
                          },
                          onMouseLeave: (e) => {
                            if (selectedNumericControl !== "fontSize") {
                              e.currentTarget.style.backgroundColor = "transparent";
                            }
                          },
                          onKeyDown: (e) => handleSettingsKeyDown(e, fontSize, setFontSize, 1, 12, 20),
                          children: [
                            fontSize,
                            "px"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "range",
                        min: "12",
                        max: "20",
                        value: fontSize,
                        onChange: (e) => setFontSize(parseInt(e.target.value)),
                        className: "custom-slider",
                        style: {
                          background: `linear-gradient(to right, var(--accent-color) 0%, var(--accent-color) ${(fontSize - 12) / (20 - 12) * 100}%, ${isDarkMode ? "#374151" : "#E5E7EB"} ${(fontSize - 12) / (20 - 12) * 100}%, ${isDarkMode ? "#374151" : "#E5E7EB"} 100%)`
                        }
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              SettingsGroup,
              {
                title: "Voice",
                isOpen: !!settingsGroupState["Voice"],
                onToggle: () => toggleSettingsGroup("Voice"),
                isDarkMode,
                glassmorphismEnabled,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Audio Speed" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Pronunciation playback rate" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-sm font-mono px-2 py-0.5 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors",
                          style: {
                            color: "var(--accent-color)",
                            backgroundColor: selectedNumericControl === "speed" ? isDarkMode ? "#4b5563" : "#d1d5db" : "transparent"
                          },
                          tabIndex: 0,
                          role: "button",
                          title: "Click to select, use arrow keys to adjust",
                          onClick: (e) => {
                            e.stopPropagation();
                            setSelectedNumericControl(selectedNumericControl === "speed" ? null : "speed");
                          },
                          onMouseEnter: (e) => {
                            if (selectedNumericControl !== "speed") {
                              e.currentTarget.style.backgroundColor = isDarkMode ? "#4b5563" : "#d1d5db";
                            }
                          },
                          onMouseLeave: (e) => {
                            if (selectedNumericControl !== "speed") {
                              e.currentTarget.style.backgroundColor = "transparent";
                            }
                          },
                          onKeyDown: (e) => handleSettingsKeyDown(e, playbackRate, setPlaybackRate, 0.1, 0.5, 2, true),
                          children: [
                            playbackRate.toFixed(1),
                            "x"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "range",
                        min: "0.5",
                        max: "2",
                        step: "0.1",
                        value: playbackRate,
                        onChange: (e) => setPlaybackRate(parseFloat(e.target.value)),
                        className: "custom-slider",
                        style: {
                          background: `linear-gradient(to right, var(--accent-color) 0%, var(--accent-color) ${(playbackRate - 0.5) / (2 - 0.5) * 100}%, ${isDarkMode ? "#374151" : "#E5E7EB"} ${(playbackRate - 0.5) / (2 - 0.5) * 100}%, ${isDarkMode ? "#374151" : "#E5E7EB"} 100%)`
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `p-4 rounded-xl settings-card cursor-pointer ${focusedVoiceLang === "en" ? "selected" : ""}`,
                      onClick: () => setFocusedVoiceLang("en"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-medium text-gray-800 dark:text-gray-200 mb-2", children: [
                          "Voice for English ",
                          focusedVoiceLang === "en" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70", children: "(selected)" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CustomDropdown,
                          {
                            value: ttsVoiceEn,
                            options: getVoiceOptions("en"),
                            onChange: (val) => {
                              setTtsVoiceEn(val);
                              storage.set("ttsVoice_en", val);
                            },
                            isDarkMode,
                            onFocus: () => setFocusedVoiceLang("en")
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `p-4 rounded-xl settings-card cursor-pointer ${focusedVoiceLang === "fa" ? "selected" : ""}`,
                      onClick: () => setFocusedVoiceLang("fa"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-medium text-gray-800 dark:text-gray-200 mb-2", children: [
                          "Voice for Persian ",
                          focusedVoiceLang === "fa" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70", children: "(selected)" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CustomDropdown,
                          {
                            value: ttsVoiceFa,
                            options: getVoiceOptions("fa"),
                            onChange: (val) => {
                              setTtsVoiceFa(val);
                              storage.set("ttsVoice_fa", val);
                            },
                            isDarkMode,
                            onFocus: () => setFocusedVoiceLang("fa")
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `p-4 rounded-xl settings-card cursor-pointer ${focusedVoiceLang === "ru" ? "selected" : ""}`,
                      onClick: () => setFocusedVoiceLang("ru"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-medium text-gray-800 dark:text-gray-200 mb-2", children: [
                          "Voice for Russian ",
                          focusedVoiceLang === "ru" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70", children: "(selected)" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CustomDropdown,
                          {
                            value: ttsVoiceRu,
                            options: getVoiceOptions("ru"),
                            onChange: (val) => {
                              setTtsVoiceRu(val);
                              storage.set("ttsVoice_ru", val);
                            },
                            isDarkMode,
                            onFocus: () => setFocusedVoiceLang("ru")
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SettingsGroup,
              {
                title: "Keyboard",
                isOpen: !!settingsGroupState["Keyboard"],
                onToggle: () => toggleSettingsGroup("Keyboard"),
                isDarkMode,
                infoNote: "To set a shortcut, click the button and press your desired keys. Some actions support a double-tap (e.g., 2× Ctrl). Press 'Escape' to cancel recording.",
                infoBadgeClassName: "info-badge-header-offset keyboard-badge-offset",
                glassmorphismEnabled,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl settings-card space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Focus Search", shortcut: shortcuts.focusSearch, onChange: (s) => updateShortcut("focusSearch", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Close / Reset", shortcut: shortcuts.close, onChange: (s) => updateShortcut("close", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gray-200 dark:bg-gray-600 my-2 opacity-50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Play Pronunciation", shortcut: shortcuts.playSound, onChange: (s) => updateShortcut("playSound", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Play Translated", shortcut: shortcuts.playTranslatedSound, onChange: (s) => updateShortcut("playTranslatedSound", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Add to Phrasebook", shortcut: shortcuts.addToPhrasebook, onChange: (s) => updateShortcut("addToPhrasebook", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Copy Definition", shortcut: shortcuts.copy, onChange: (s) => updateShortcut("copy", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Re-translate", shortcut: shortcuts.reTranslate, onChange: (s) => updateShortcut("reTranslate", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gray-200 dark:bg-gray-600 my-2 opacity-50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Show History", shortcut: shortcuts.showHistory, onChange: (s) => updateShortcut("showHistory", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Show Phrasebook", shortcut: shortcuts.showPhrasebook, onChange: (s) => updateShortcut("showPhrasebook", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Show Settings", shortcut: shortcuts.showSettings, onChange: (s) => updateShortcut("showSettings", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Ask AI", shortcut: shortcuts.askAI, onChange: (s) => updateShortcut("askAI", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gray-200 dark:bg-gray-600 my-2 opacity-50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Neon Effect", shortcut: shortcuts.toggleNeon, onChange: (s) => updateShortcut("toggleNeon", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Glass Effect", shortcut: shortcuts.toggleGlass, onChange: (s) => updateShortcut("toggleGlass", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Dark/Light Theme", shortcut: shortcuts.toggleTheme, onChange: (s) => updateShortcut("toggleTheme", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShortcutRecorder, { label: "Auto-Popup", shortcut: shortcuts.toggleAutoPopup, onChange: (s) => updateShortcut("toggleAutoPopup", s), isDarkMode, onRecordingChange: setIsRecordingAnyShortcut })
                ] })
              }
            )
          ] }),
          activeView === "ask_ai" && /* @__PURE__ */ jsxRuntimeExports.jsx(AskAIView, { context: (searchTerm || "").trim(), isDarkMode })
        ] })
      ]
    }
  ) });
};
const createPopup = async (selectedText, rangeRect, initialView = "dictionary") => {
  if (typeof removeAll !== "undefined") removeAll();
  else removePopup();
  const { dictionaryGlassmorphism, dictionaryDarkMode, dictionaryVisualEffects, dictionaryTheme, dictionaryUiMode } = await new Promise((resolve) => {
    chrome.storage.local.get(["dictionaryGlassmorphism", "dictionaryDarkMode", "dictionaryVisualEffects", "dictionaryTheme", "dictionaryUiMode"], (result) => {
      resolve({
        dictionaryGlassmorphism: result.dictionaryGlassmorphism ?? false,
        dictionaryDarkMode: result.dictionaryDarkMode ?? true,
        dictionaryVisualEffects: result.dictionaryVisualEffects ?? true,
        dictionaryTheme: result.dictionaryTheme ?? "indigo",
        dictionaryUiMode: result.dictionaryUiMode ?? "classic"
      });
    });
  });
  popupContainer = document.createElement("div");
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const isMinimal = dictionaryUiMode === "minimal";
  const popupWidth = isMinimal ? 360 : POPUP_WIDTH;
  const popupHeight = isMinimal ? 320 : POPUP_HEIGHT;
  let top = rangeRect.bottom + POPUP_MARGIN + popupHeight < viewportHeight ? scrollY + rangeRect.bottom + POPUP_MARGIN : scrollY + rangeRect.top - popupHeight - POPUP_MARGIN;
  if (top < scrollY) top = scrollY + POPUP_MARGIN;
  let left = rangeRect.left + rangeRect.width / 2 - popupWidth / 2;
  if (left + popupWidth > viewportWidth) left = viewportWidth - popupWidth - POPUP_MARGIN;
  if (left < 0) left = POPUP_MARGIN;
  left += scrollX;
  Object.assign(popupContainer.style, {
    position: "absolute",
    left: `${left}px`,
    top: `${top}px`,
    zIndex: "2147483647",
    width: `${popupWidth}px`,
    height: `${popupHeight}px`,
    borderRadius: "16px",
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    // Animation styles - Use only scale transform to preserve backdrop-filter visibility from frame 1
    // Removing opacity animation prevents the glass effect delay (backdrop-filter requires fully opaque container)
    opacity: "1",
    transform: "scale(0.92)",
    transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)"
  });
  document.body.appendChild(popupContainer);
  popupScrollLockCleanup?.();
  popupScrollLockCleanup = attachPopupScrollLock(popupContainer);
  let isDragging = false, startX = 0, startY = 0, initialLeft = 0, initialTop = 0;
  popupContainer.addEventListener("mousedown", (e) => {
    const path = e.composedPath();
    const header = path.find((el) => el.tagName === "HEADER" || el.dataset?.dragHandle === "true");
    const interactive = path.find((el) => ["BUTTON", "INPUT", "A", "TEXTAREA", "P", "SPAN", "H1", "H2", "LI"].includes(el.tagName));
    const inScrollable = path.some((el) => el.tagName === "MAIN" || el.classList && el.classList.contains("berkut-scroll-contain"));
    if (header && !interactive && !inScrollable) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = popupContainer.getBoundingClientRect();
      initialLeft = rect.left + window.scrollX;
      initialTop = rect.top + window.scrollY;
      e.preventDefault();
    }
  });
  const onMouseMove = (e) => {
    if (!isDragging || !popupContainer) return;
    popupContainer.style.left = `${initialLeft + e.clientX - startX}px`;
    popupContainer.style.top = `${initialTop + e.clientY - startY}px`;
  };
  const onMouseUp = () => {
    isDragging = false;
  };
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
  const shadowRoot = popupContainer.attachShadow({ mode: "open" });
  const fontRegularUrl = chrome.runtime.getURL("fonts/vazirmatn-regular.woff2");
  const fontBoldUrl = chrome.runtime.getURL("fonts/vazirmatn-bold.woff2");
  const css = await loadStyles();
  const fontStyleEl = document.createElement("style");
  fontStyleEl.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');
        @font-face { font-family: 'Vazirmatn'; src: url('${fontRegularUrl}') format('woff2'); font-weight: 400; font-style: normal; font-display: swap; }
        @font-face { font-family: 'Vazirmatn'; src: url('${fontBoldUrl}') format('woff2'); font-weight: 700; font-style: normal; font-display: swap; }
    `;
  shadowRoot.appendChild(fontStyleEl);
  const styleEl = document.createElement("style");
  if (css) {
    styleEl.textContent = css;
  } else {
    const cssUrl = chrome.runtime.getURL("overlay.css");
    const linkEl = document.createElement("link");
    linkEl.rel = "stylesheet";
    linkEl.href = cssUrl;
    shadowRoot.appendChild(linkEl);
  }
  shadowRoot.appendChild(styleEl);
  const appRoot = document.createElement("div");
  appRoot.id = "root";
  appRoot.style.width = "100%";
  appRoot.style.height = "100%";
  if (dictionaryDarkMode) appRoot.classList.add("dark");
  if (dictionaryGlassmorphism) appRoot.classList.add("glassmorphism");
  if (dictionaryVisualEffects) appRoot.classList.add("effects-enabled");
  appRoot.dataset.theme = dictionaryTheme;
  shadowRoot.appendChild(appRoot);
  root = ReactDOM.createRoot(appRoot);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      App,
      {
        initialSearchTerm: selectedText,
        onClose: removeAll,
        containerElement: appRoot,
        initialView,
        initialGlassEnabled: dictionaryGlassmorphism,
        initialDarkMode: dictionaryDarkMode,
        initialVisualEffectsEnabled: dictionaryVisualEffects,
        initialTheme: dictionaryTheme
      }
    ) })
  );
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (popupContainer) {
        popupContainer.style.transform = "scale(1)";
      }
    });
  });
};
const createTrigger = (selectedText, rangeRect) => {
  removeAll();
  const container = document.createElement("div");
  Object.assign(container.style, {
    position: "absolute",
    zIndex: "2147483646",
    top: `${window.scrollY + rangeRect.bottom + 8}px`,
    left: `${window.scrollX + rangeRect.right}px`,
    // Animation styles
    opacity: "0",
    transform: "scale(0.95)",
    transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
  });
  document.body.appendChild(container);
  triggerButton = container;
  requestAnimationFrame(() => {
    if (container) {
      container.style.opacity = "1";
      container.style.transform = "scale(1)";
    }
  });
  const shadow = container.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `
    @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
    @keyframes neon-border-dance { to { --angle: 360deg; } }
    .trigger-container { display: flex; gap: 8px; }
    .neon-trigger-btn { background: #111827; padding: 6px 12px; border-radius: 9999px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); cursor: pointer; border: 1px solid rgba(255,255,255,0.1); transition: transform 0.2s; user-select: none; display: flex; align-items: center; justify-content: center; }
    .neon-trigger-btn:hover { transform: scale(1.05); }
    .neon-text { background: conic-gradient(from var(--angle), hsl(220,100%,60%), hsl(280,100%,60%), hsl(330,100%,60%), hsl(180,100%,50%), hsl(220,100%,60%)); background-clip: text; -webkit-background-clip: text; color: transparent; font-size: 0.875rem; font-weight: 700; animation: neon-border-dance 6s linear infinite; }
  `;
  shadow.appendChild(style);
  const wrapper = document.createElement("div");
  wrapper.className = "trigger-container";
  const dictBtn = document.createElement("div");
  dictBtn.className = "neon-trigger-btn";
  dictBtn.innerHTML = `<span class="neon-text" data-text="Berkut">Berkut</span>`;
  dictBtn.onclick = (e) => {
    e.stopPropagation();
    createPopup(selectedText, rangeRect, "dictionary");
    removeTrigger();
  };
  const aiBtn = document.createElement("div");
  aiBtn.className = "neon-trigger-btn";
  aiBtn.innerHTML = `<span class="neon-text" data-text="AI">AI</span>`;
  aiBtn.onclick = (e) => {
    e.stopPropagation();
    createPopup(selectedText, rangeRect, "ask_ai");
    removeTrigger();
  };
  wrapper.appendChild(dictBtn);
  wrapper.appendChild(aiBtn);
  shadow.appendChild(wrapper);
};
document.addEventListener("mouseup", async (event) => {
  if (popupContainer && event.composedPath().includes(popupContainer)) return;
  if (triggerButton && event.composedPath().includes(triggerButton)) return;
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim();
  if (selectedText && selectedText.length > 1 && selectedText.length < 5e3) {
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    if (rect.width > 0 || rect.height > 0) {
      if (cachedAutoPopup) {
        createPopup(selectedText, rect, "dictionary");
      } else {
        createTrigger(selectedText, rect);
      }
    }
  } else {
    removeAll();
  }
});
if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "TOGGLE_POPUP") {
      if (popupContainer) {
        removeAll();
      } else {
        const viewportW = window.innerWidth;
        const viewportH = window.innerHeight;
        const targetTop = Math.max(0, (viewportH - POPUP_HEIGHT) / 2);
        const targetLeft = Math.max(0, (viewportW - POPUP_WIDTH) / 2);
        const dummyRect = {
          bottom: targetTop - 8,
          left: targetLeft + POPUP_WIDTH / 2,
          width: 0,
          top: targetTop - 8};
        createPopup("", dummyRect, "dictionary");
      }
    }
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && triggerButton) removeAll();
});
console.log("Berkut Dictionary content script loaded");
