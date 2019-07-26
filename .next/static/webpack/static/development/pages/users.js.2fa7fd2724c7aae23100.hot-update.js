webpackHotUpdate("static/development/pages/users.js",{

/***/ "./components/usertable.js":
/*!*********************************!*\
  !*** ./components/usertable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/phucan/Desktop/Job/Btaskee/testing/next-todo-app/components/usertable.js";


var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).call(this, props));
    _this.state = {
      users: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var _this2 = this;

      var res = fetch('http://localhost:4000/user').then(function (res) {
        return res.json();
      }).then(function (result) {
        console.log(result);

        _this2.setState({
          isLoaded: true,
          users: result
        });
      } // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      )["catch"](function (e) {
        console.log(e);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var users = this.getInitialProps();
      this.setState({
        users: users
      });
      console.log(this.state.users);
    }
  }, {
    key: "renderTableHeader",
    value: function renderTableHeader() {
      var myData = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, this.state.users[1]);

      var header = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(myData);

      return header.map(function (key, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, key.toUpperCase());
      });
    }
  }, {
    key: "renderTableData",
    value: function renderTableData() {
      if (!this.state.users) {
        return null;
      }

      return this.state.users.map(function (data, index) {
        var id = data.id,
            name = data.name,
            email = data.email,
            yob = data.yob,
            role = data.role;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          key: id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, id), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, email), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, yob), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, role));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "List Table"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        id: "userData",
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
        className: "thead-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.renderTableHeader())), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.renderTableData())));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=users.js.2fa7fd2724c7aae23100.hot-update.js.map