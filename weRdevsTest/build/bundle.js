/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OPEN_MODAL = exports.OPEN_MODAL = 'OPEN_MODAL';
var CLOSE_MODAL = exports.CLOSE_MODAL = 'CLOSE_MODAL';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutUsPage = __webpack_require__(19);

var _AboutUsPage2 = _interopRequireDefault(_AboutUsPage);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _AboutUsPage2.default, {
        path: '/about'

    })]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = {
    width: '510px',
    height: '140px',
    backgroundColor: "#FBFBFB",
    position: "absolute",
    top: "40%",
    left: "10%",
    zIndex: "500"
};
var input = {
    border: "2px solid #FDD000",
    marginLeft: "25px",
    marginRight: "20px",
    color: 'rgba(61, 61, 61, 0.6)',
    fontSize: "16px",
    fontWeight: '500',
    fontFamily: "Rubik"
};

var cross = {
    backgroundColor: "#FDD000",
    width: "28px",
    height: "28px",
    textAlign: "center",
    position: "absolute",
    top: "0",
    right: "0",
    cursor: "pointer"
};
var span = {
    position: "absolute",
    top: "-24px",
    right: "217px",
    color: "rgba(61, 61, 61, 0.4)"

};
var span2 = {
    position: "absolute",
    top: "-24px",
    right: "436px",
    color: "rgba(61, 61, 61, 0.4)"
};

var Form = function Form(_ref) {
    var close = _ref.close,
        props = _ref.props;

    return _react2.default.createElement(
        'div',
        { style: wrapper },
        _react2.default.createElement(
            'div',
            { style: { marginTop: "50px", position: "relative" } },
            _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement(
                        'span',
                        { style: span2 },
                        ' Month '
                    ),
                    _react2.default.createElement('input', { style: input, type: 'text', name: 'month', value: "  " + props.date.date })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement(
                        'span',
                        { style: span },
                        ' Day '
                    ),
                    _react2.default.createElement('input', { style: input, type: 'text', name: 'day', value: "  " + props.date.number + "th " + props.date.name })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { style: cross, onClick: function onClick() {
                    close();
                } },
            'X'
        )
    );
};
exports.default = Form;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(13);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(24);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = 3000;
app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });
    Promise.all(promises).then(function () {
        var content = (0, _renderer2.default)(req, store);
        res.send(content);
    });
});
app.listen(PORT, function () {
    console.log('Listening on port 3000');
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderingToString = __webpack_require__(23).renderToString;

exports.default = function (req, store) {
    var content = renderingToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();
    return '\n<html>\n<head>\n<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" \nintegrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" \ncrossorigin="anonymous">\n<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap" rel="stylesheet">\n' + helmet.title.toLocaleString() + '\n' + helmet.meta.toString() + '\n</head>\n<body>\n<div id="root">' + content + '</div>\n<script >\nwindow.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n</script>\n<script src="bundle.js"></script>\n</body>\n</html>\n';
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Calendar = __webpack_require__(15);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Form = __webpack_require__(6);

var _Form2 = _interopRequireDefault(_Form);

var _reactHelmet = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calendar = {
    color: "white",
    backgroundColor: "#272829",
    width: "40%",
    height: "100%",
    zIndex: "120",
    position: "absolute",
    top: "0",
    right: "0"
};
var hText = {
    color: "#FDD000",
    fontSize: "32px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "500",
    textTransform: "uppercase",
    width: "40%",
    position: "absolute",
    top: "29%",
    left: "40%"
};
var pText = {
    color: "#DFDFDF",
    fontSize: "30px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "300",
    textAlign: "right",
    position: "absolute",
    top: "46%",
    left: "30%"

};

var HomePage = function HomePage(_ref) {
    var modal = _ref.modal,
        openModal = _ref.openModal,
        closeModal = _ref.closeModal;


    function head() {
        return _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
                "title",
                null,
                "We Are Devs - Web Studio"
            ),
            _react2.default.createElement("meta", { property: "og:title", content: "We Are Devs - Web Studio" })
        );
    }
    return _react2.default.createElement(
        "div",
        { style: { position: "relative", zIndex: "100" } },
        head,
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("img", { style: { width: "100%", height: "auto" }, src: "/assets/mainImg.jpeg" }),
            _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    { style: hText },
                    " Choose the day ",
                    _react2.default.createElement("br", null),
                    " for the meeting "
                ),
                _react2.default.createElement(
                    "p",
                    { style: pText },
                    " We encourage you to book your ",
                    _react2.default.createElement("br", null),
                    " appointment online. ",
                    _react2.default.createElement("br", null),
                    " This will save you time. "
                )
            ),
            _react2.default.createElement(
                "div",
                { style: calendar },
                _react2.default.createElement(
                    "div",
                    { style: { width: "460px", height: "490px", margin: "20% auto" } },
                    _react2.default.createElement(_Calendar2.default, { select: function select(date) {
                            openModal(date);
                        } })
                )
            ),
            modal.opened === true ? _react2.default.createElement(_Form2.default, { props: modal.props, close: function close() {
                    closeModal();
                } }) : false
        )
    );
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        modal: state.modal
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        openModal: function openModal(date) {
            return dispatch({
                type: _actions.OPEN_MODAL,
                payload: {
                    props: { date: date }
                }
            });
        },
        closeModal: function closeModal() {
            return dispatch({
                type: _actions.CLOSE_MODAL
            });
        }
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(17);

var _moment2 = _interopRequireDefault(_moment);

var _CalendarDay = __webpack_require__(18);

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var day = {
    color: "#FFFFFF",
    fontSize: "20px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "500",
    marginRight: "55px",
    marginTop: "20px"

};
var cMonth = {
    color: "#DFDFDF",
    opacity: "1",
    fontSize: "23px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "500",
    textTransform: "uppercase"
};

var Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

        _this.state = {
            month: (0, _moment2.default)(),
            selected: (0, _moment2.default)().startOf('day')
        };
        _this.previous = _this.previous.bind(_this);
        _this.next = _this.next.bind(_this);
        return _this;
    }

    _createClass(Calendar, [{
        key: 'previous',
        value: function previous() {
            var month = this.state.month;


            this.setState({
                month: month.subtract(1, 'month')
            });
        }
    }, {
        key: 'next',
        value: function next() {
            var month = this.state.month;


            this.setState({
                month: month.add(1, 'month')
            });
        }
    }, {
        key: 'select',
        value: function select(day) {
            this.setState({
                selected: day.date,
                month: day.date.clone()
            });
        }
    }, {
        key: 'renderWeeks',
        value: function renderWeeks() {
            var _this2 = this;

            var weeks = [];
            var done = false;
            var date = this.state.month.clone().startOf("month").add("w" - 1).day("Sunday");
            var count = 0;
            var monthIndex = date.month();

            var _state = this.state,
                selected = _state.selected,
                month = _state.month;


            while (!done) {
                weeks.push(_react2.default.createElement(Week, { key: date,
                    date: date.clone(),
                    month: month,
                    select: function select(date) {
                        return _this2.props.select(date);
                    },
                    selected: selected }));

                date.add(1, "w");

                done = count++ > 2 && monthIndex !== date.month();
                monthIndex = date.month();
            }

            return weeks;
        }
    }, {
        key: 'renderMonthLabel',
        value: function renderMonthLabel() {
            var month = this.state.month;


            return _react2.default.createElement(
                'span',
                { style: cMonth },
                month.format("MMMM YYYY")
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                    'div',
                    { style: { marginTop: "40px", paddingBottom: "15px", borderBottom: "1px solid grey" } },
                    _react2.default.createElement(
                        'header',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'month-display row' },
                            _react2.default.createElement(
                                'div',
                                { onClick: this.previous },
                                _react2.default.createElement('img', { style: { width: "100%", height: "auto" }, src: '/assets/arrowLeft.png' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { margin: "0 auto" } },
                                this.renderMonthLabel()
                            ),
                            _react2.default.createElement(
                                'div',
                                { onClick: this.next },
                                _react2.default.createElement('img', { style: { width: "100%", height: "auto" }, src: '/assets/arrowRight.png' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    this.renderWeeks()
                ),
                _react2.default.createElement(
                    'div',
                    { style: { borderTop: "1px solid grey", borderBottom: "1px solid grey" } },
                    _react2.default.createElement(
                        'div',
                        { style: { margin: "10px" } },
                        _react2.default.createElement(
                            'span',
                            { style: day },
                            'S'
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: day },
                            'M'
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: day },
                            'T'
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: day },
                            'W'
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: day },
                            'T'
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: day },
                            'F'
                        ),
                        _react2.default.createElement(
                            'span',
                            { style: day },
                            'S'
                        )
                    )
                )
            );
        }
    }]);

    return Calendar;
}(_react.Component);

var Week = function (_Component2) {
    _inherits(Week, _Component2);

    function Week() {
        _classCallCheck(this, Week);

        return _possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).apply(this, arguments));
    }

    _createClass(Week, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            var days = [];
            var date = this.props.date;
            var _props = this.props,
                month = _props.month,
                selected = _props.selected,
                select = _props.select;


            for (var i = 0; i < 7; i++) {
                var _day = {
                    name: date.format("dddd"),
                    number: date.date(),
                    isCurrentMonth: date.month() === month.month(),
                    isToday: date.isSame(new Date(), "day"),
                    date: date.format('MMMM')
                };
                days.push(_react2.default.createElement(_CalendarDay2.default, { day: _day,
                    select: function select(date) {
                        _this4.props.select(date);
                    }
                }));

                date = date.clone();
                date.add(1, "day");
            }

            return _react2.default.createElement(
                'div',
                { className: 'row week', key: days[0] },
                days
            );
        }
    }]);

    return Week;
}(_react.Component);

exports.default = Calendar;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cDate = {
    fontSize: "16px",
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "500",
    width: "52px",
    height: "51px",
    margin: "8px",
    textAlign: "center",
    lineHeight: "3em"

};

var CalendarDay = function (_Component) {
    _inherits(CalendarDay, _Component);

    function CalendarDay() {
        _classCallCheck(this, CalendarDay);

        return _possibleConstructorReturn(this, (CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).apply(this, arguments));
    }

    _createClass(CalendarDay, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                day = _props.day,
                _props$day = _props.day,
                date = _props$day.date,
                isCurrentMonth = _props$day.isCurrentMonth,
                isToday = _props$day.isToday,
                number = _props$day.number;

            function hoverOn(e) {
                e.target.style.color = '#FDD000';
                if (isToday) {
                    e.target.style.color = '#3D3D3D';
                }
            }
            function hoverOff(e) {
                e.target.style.color = '#DFDFDF';
                if (!isCurrentMonth) {
                    e.target.style.color = '#3D3D3D';
                }
                if (isToday) {
                    e.target.style.color = '#3D3D3D';
                }
            }

            return _react2.default.createElement(
                "div",
                { style: cDate },
                _react2.default.createElement(
                    "div",
                    { style: isToday ? { backgroundColor: '#FDD000' } : { backgroundColor: '#272829' } },
                    _react2.default.createElement(
                        "span",
                        { onMouseOver: hoverOn, onMouseLeave: hoverOff,
                            key: date.toString(),
                            style: isCurrentMonth ? { color: 'white', cursor: "pointer" } : { color: 'rgba(223, 223, 223, 0.4)', cursor: "pointer" },
                            onClick: function onClick() {
                                _this2.props.select(day);
                            } },
                        number
                    )
                )
            );
        }
    }]);

    return CalendarDay;
}(_react.Component);

exports.default = CalendarDay;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pText = {
    color: "#3D3D3D",
    fontSize: "18px",
    lineHeight: '1.5em',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "300",
    paddingTop: "7px"
};
var h2Text = {
    color: "#3D3D3D",
    fontSize: "34px",
    lineHeight: '1.5em',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: "700"
};
var AboutUsPage = function AboutUsPage() {
    return _react2.default.createElement(
        "div",
        { style: { margin: "2% 15%" } },
        _react2.default.createElement(
            "h2",
            { style: h2Text },
            "Lorem ipsum creation timelines"
        ),
        _react2.default.createElement(
            "p",
            { style: pText },
            "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."
        ),
        _react2.default.createElement(
            "p",
            { style: pText },
            "It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."
        ),
        _react2.default.createElement(
            "p",
            { style: pText },
            "And anyways, as Cecil Adams reasoned, \u201C[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201D Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset."
        ),
        _react2.default.createElement(
            "p",
            { style: pText },
            "McClintock wrote to Before & After to explain his discovery; \u201CWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201D (The editors published his letter in a correction headlined \u201CLorem Oopsum\u201D)."
        )
    );
};
exports.default = {
    component: AboutUsPage
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(21);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        { style: { overflow: "hidden " } },
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = {
    textTransform: "uppercase",
    height: "130px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center"
};
var li = {
    color: "#3D3D3D",
    fontSize: "28px",
    fontFamily: "Rubik",
    textTransform: "uppercase",
    display: "block",
    paddingTop: "40px",
    paddingRight: "110px",
    marginLeft: "-40px"
};

var Header = function Header() {
    return _react2.default.createElement(
        'div',
        { style: nav },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                _react2.default.createElement('img', { style: { marginTop: "24px", marginLeft: "110px" }, src: '/assets/logoSmall.jpeg', alt: 'logo' })
            )
        ),
        _react2.default.createElement(
            'div',
            { style: { textAlign: "center" } },
            _react2.default.createElement(
                'ul',
                { style: { display: "flex" } },
                _react2.default.createElement(
                    'li',
                    { style: li },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { style: { color: "#3D3D3D", textDecoration: "none" }, to: '/' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: li },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { style: { color: "#3D3D3D", textDecoration: "none" }, to: '/about' },
                        'About Us'
                    )
                )
            )
        )
    );
};

exports.default = Header;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return store;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _modalReducer = __webpack_require__(31);

var _modalReducer2 = _interopRequireDefault(_modalReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    modal: _modalReducer2.default

});

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _index.OPEN_MODAL:
            return _extends({}, state, { opened: true,
                props: action.payload.props

            });
        case _index.CLOSE_MODAL:
            return _extends({}, state, { opened: false });
        default:
            return state;
    }
};

var _index = __webpack_require__(1);

var initialState = {
    opened: false,
    props: {}
};

/***/ })
/******/ ]);