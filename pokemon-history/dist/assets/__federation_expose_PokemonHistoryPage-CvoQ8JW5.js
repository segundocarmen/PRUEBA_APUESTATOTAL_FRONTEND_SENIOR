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

const remotesMap = {
'ShellStore':{url:'http://localhost:3000/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                const currentImports = {};

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'react':{'undefined':{get:()=>get(new URL('__federation_shared_react-Bfaz99l3.js', import.meta.url).href), loaded:1}},'react-dom':{'undefined':{get:()=>get(new URL('__federation_shared_react-dom-C8HiEUq4.js', import.meta.url).href), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule();
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const __federation_var_ShellStorestoreHistory = await __federation_method_getRemote("ShellStore" , "./storeHistory");
 let {usePokemonHistoryStore} = __federation_var_ShellStorestoreHistory;
const PokemonDetailPage = () => {
  const { history } = usePokemonHistoryStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-pokemon-history", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "align-center", children: "Historial de búsqueda" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-list", children: [
      history.length < 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "align-center", children: "No hay elementos para mostrar" }),
      history.map((item) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-img-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-detail", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            " ",
            item.name,
            " "
          ] }) })
        ] });
      })
    ] })
  ] });
};

const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PokemonDetailPage, {}) });
};

export { App as default, jsxRuntimeExports as j };
