webpackJsonp([1],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(247);





__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__app__["a" /* default */], null), document.getElementById('root'));

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_pull_down_to_refresh__ = __webpack_require__(122);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            displayFlag: true
        };
        return _this;
    }

    _createClass(App, [{
        key: 'pullDownHandler',
        value: function pullDownHandler() {
            var _this2 = this;

            this.setState({ displayFlag: true });
            setTimeout(function () {
                _this2.setState({ displayFlag: false });
            }, 1500);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!this.state.displayFlag) {
                this.setState({ displayFlag: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var pullDownProps = {
                displayFlag: this.state.displayFlag,
                pullDownHandler: this.pullDownHandler.bind(this),
                loadingContent: 'Loading...'
            };
            var list = [];
            for (var i = 0; i < 200; i++) {
                list.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { key: i },
                    i
                ));
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__src_pull_down_to_refresh__["a" /* default */],
                pullDownProps,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    null,
                    list
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ })

},[147]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvc3RyaW5nL2FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGlzcGxheUZsYWciLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJwdWxsRG93blByb3BzIiwicHVsbERvd25IYW5kbGVyIiwiYmluZCIsImxvYWRpbmdDb250ZW50IiwibGlzdCIsImkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlEQUFBQSxDQUFTQyxNQUFULENBQ0ksNERBQUMscURBQUQsT0FESixFQUVJQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRkosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0lBRU1DLEc7OztBQUVGLGlCQUFZQyxLQUFaLEVBQTJCO0FBQUE7O0FBQUEsOEdBQ2pCQSxLQURpQjs7QUFFdkIsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHlCQUFhO0FBREosU0FBYjtBQUZ1QjtBQUsxQjs7OzswQ0FNaUI7QUFBQTs7QUFDZCxpQkFBS0MsUUFBTCxDQUFjLEVBQUVELGFBQWEsSUFBZixFQUFkO0FBQ0FFLHVCQUNJLFlBQU07QUFBRSx1QkFBS0QsUUFBTCxDQUFjLEVBQUVELGFBQWEsS0FBZixFQUFkO0FBQXdDLGFBRHBELEVBRU0sSUFGTjtBQUlIOzs7NkNBRW9CO0FBQ2pCLGdCQUFJLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxXQUFoQixFQUE2QjtBQUN6QixxQkFBS0MsUUFBTCxDQUFjLEVBQUVELGFBQWEsSUFBZixFQUFkO0FBQ0g7QUFDSjs7O2lDQUVRO0FBQ0wsZ0JBQU1HLGdCQUFnQjtBQUNsQkgsNkJBQWEsS0FBS0QsS0FBTCxDQUFXQyxXQUROO0FBRWxCSSxpQ0FBaUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FGQztBQUdsQkMsZ0NBQWdCO0FBSEUsYUFBdEI7QUFLQSxnQkFBTUMsT0FBTyxFQUFiO0FBQ0EsaUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEdBQXBCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUMxQkQscUJBQUtFLElBQUwsQ0FBVTtBQUFBO0FBQUEsc0JBQUksS0FBS0QsQ0FBVDtBQUFhQTtBQUFiLGlCQUFWO0FBQ0g7QUFDRCxtQkFDSTtBQUFDLDBGQUFEO0FBQXVCTCw2QkFBdkI7QUFDSTtBQUFBO0FBQUE7QUFBS0k7QUFBTDtBQURKLGFBREo7QUFLSDs7OztFQTFDYSxnRDs7QUE2Q2xCLHlEQUFlVixHQUFmLEUiLCJmaWxlIjoic3RyaW5nLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcCAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZXMvc3RyaW5nL2luZGV4LmpzIiwiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHVsbERvd25Ub1JlZnJlc2ggZnJvbSAnLi4vLi4vc3JjL3B1bGxfZG93bl90b19yZWZyZXNoJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBPYmplY3QpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlzcGxheUZsYWc6IHRydWUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgZGlzcGxheUZsYWc6IGJvb2xlYW47XG4gICAgfVxuXG4gICAgcHVsbERvd25IYW5kbGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUZsYWc6IHRydWUgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5RmxhZzogZmFsc2UgfSk7IH1cbiAgICAgICAgICAgICwgMTUwMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRpc3BsYXlGbGFnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUZsYWc6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHB1bGxEb3duUHJvcHMgPSB7XG4gICAgICAgICAgICBkaXNwbGF5RmxhZzogdGhpcy5zdGF0ZS5kaXNwbGF5RmxhZyxcbiAgICAgICAgICAgIHB1bGxEb3duSGFuZGxlcjogdGhpcy5wdWxsRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGxvYWRpbmdDb250ZW50OiAnTG9hZGluZy4uLicsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwMDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0LnB1c2goPGxpIGtleT17aX0+e2l9PC9saT4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHVsbERvd25Ub1JlZnJlc2ggey4uLnB1bGxEb3duUHJvcHN9PlxuICAgICAgICAgICAgICAgIDx1bD57bGlzdH08L3VsPlxuICAgICAgICAgICAgPC9QdWxsRG93blRvUmVmcmVzaD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3N0cmluZy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9