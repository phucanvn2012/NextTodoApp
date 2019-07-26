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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
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
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, users;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('localhost:4000/user');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                users = _context.sent;
                console.log("This is users", users);
                return _context.abrupt("return", {
                  users: users
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var users;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                users = this.getInitialProps();
                this.setState({
                  users: this.props.users
                });
                console.log(this.props.users);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() // renderTableHeader(){
    //     var myData = Object.assign({}, this.state.users[0]);
    //     let header = Object.keys(myData)
    //     return header.map((key,index)=>{
    //         return (
    //             <th key={index} >{key.toUpperCase()}</th>
    //         )
    //     })
    // }

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
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, id), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, email), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, yob), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, role));
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.users);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, this.state.name, " List Table"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        id: "userData",
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.renderTableData())));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=users.js.1e67c217bd7b9f43d75c.hot-update.js.map