
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire5680"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire5680"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $66G66 = parcelRequire("66G66");
(0, $66G66.render)(/*#__PURE__*/ (0, $228IU.jsx)((0, $d4J5n.StrictMode), {
    children: /*#__PURE__*/ (0, $228IU.jsx)("div", {
        children: "Bar"
    })
}), document.getElementById("root"));


//# sourceMappingURL=bar.67b35129.js.map
