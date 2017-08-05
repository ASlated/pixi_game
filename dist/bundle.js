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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ({

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _pixi = __webpack_require__(20);\n\nvar _pixi2 = _interopRequireDefault(_pixi);\n\nvar _animation_manager = __webpack_require__(193);\n\nvar _animation_manager2 = _interopRequireDefault(_animation_manager);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Player = function (_Sprite) {\n  _inherits(Player, _Sprite);\n\n  function Player() {\n    _classCallCheck(this, Player);\n\n    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, new _pixi.Texture.fromImage('/assets/img/player.png')));\n\n    _this.animations = new _animation_manager2.default('/assets/img/player.png', 16, 15, _this);\n    // this.animations.add('walk', [0, 1, 0, 2]);\n    return _this;\n  }\n\n  return Player;\n}(_pixi.Sprite);\n\nexports.default = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wbGF5ZXIuanM/YTUwOCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJmcm9tSW1hZ2UiLCJhbmltYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osb0JBQWM7QUFBQTs7QUFBQSxnSEFDTixJQUFJLGNBQVFDLFNBQVosQ0FBc0Isd0JBQXRCLENBRE07O0FBRVosVUFBS0MsVUFBTCxHQUFrQixnQ0FBcUIsd0JBQXJCLEVBQStDLEVBQS9DLEVBQW1ELEVBQW5ELFFBQWxCO0FBQ0E7QUFIWTtBQUliOzs7OztrQkFHWUYsTSIsImZpbGUiOiIxOTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUElYSSBmcm9tICdwaXhpLmpzJ1xuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlLCBCYXNlVGV4dHVyZSB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IEFuaW1hdGlvbk1hbmFnZXIgZnJvbSAnLi9hbmltYXRpb25fbWFuYWdlci5qcyc7XG5cbmNsYXNzIFBsYXllciBleHRlbmRzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG5ldyBUZXh0dXJlLmZyb21JbWFnZSgnL2Fzc2V0cy9pbWcvcGxheWVyLnBuZycpKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBuZXcgQW5pbWF0aW9uTWFuYWdlcignL2Fzc2V0cy9pbWcvcGxheWVyLnBuZycsIDE2LCAxNSwgdGhpcyk7XG4gICAgLy8gdGhpcy5hbmltYXRpb25zLmFkZCgnd2FsaycsIFswLCAxLCAwLCAyXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGxheWVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///192\n");

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _pixi = __webpack_require__(20);\n\nvar _pixi2 = _interopRequireDefault(_pixi);\n\nvar _animation = __webpack_require__(194);\n\nvar _animation2 = _interopRequireDefault(_animation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AnimationManager = function () {\n  function AnimationManager(source, frameWidth, frameHeight, object) {\n    _classCallCheck(this, AnimationManager);\n\n    this.object = object;\n    this.frames = [];\n    var image = _pixi.BaseTexture.fromImage(source);\n    for (var i = 0; i < image.width / frameWidth; i++) {\n      var rect = new _pixi.Rectangle(i * frameWidth, 0, frameWidth, frameHeight);\n      var frame = new _pixi.Texture(image, rect);\n      this.frames.push(frame);\n    }\n    this.add = this.add.bind(this);\n    this.play = this.play.bind(this);\n  }\n\n  _createClass(AnimationManager, [{\n    key: 'add',\n    value: function add(name, frames) {\n      this[name] = new _animation2.default(frames);\n    }\n  }, {\n    key: 'play',\n    value: function play(animation) {\n      // this[animation].next_frame();\n      this.object.texture = this.frames[animation.active];\n    }\n  }]);\n\n  return AnimationManager;\n}();\n\nexports.default = AnimationManager;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hbmltYXRpb25fbWFuYWdlci5qcz8wZTVjIl0sIm5hbWVzIjpbIkFuaW1hdGlvbk1hbmFnZXIiLCJzb3VyY2UiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJvYmplY3QiLCJmcmFtZXMiLCJpbWFnZSIsImZyb21JbWFnZSIsImkiLCJ3aWR0aCIsInJlY3QiLCJmcmFtZSIsInB1c2giLCJhZGQiLCJiaW5kIiwicGxheSIsIm5hbWUiLCJhbmltYXRpb24iLCJ0ZXh0dXJlIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7O0lBRU1BLGdCO0FBQ0osNEJBQVlDLE1BQVosRUFBb0JDLFVBQXBCLEVBQWdDQyxXQUFoQyxFQUE2Q0MsTUFBN0MsRUFBcUQ7QUFBQTs7QUFDbkQsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxRQUFJQyxRQUFRLGtCQUFZQyxTQUFaLENBQXNCTixNQUF0QixDQUFaO0FBQ0EsU0FBSyxJQUFJTyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQU1HLEtBQU4sR0FBY1AsVUFBbEMsRUFBOENNLEdBQTlDLEVBQW1EO0FBQ2pELFVBQUlFLE9BQU8sb0JBQWNGLElBQUlOLFVBQWxCLEVBQThCLENBQTlCLEVBQWlDQSxVQUFqQyxFQUE2Q0MsV0FBN0MsQ0FBWDtBQUNBLFVBQUlRLFFBQVEsa0JBQVlMLEtBQVosRUFBbUJJLElBQW5CLENBQVo7QUFDQSxXQUFLTCxNQUFMLENBQVlPLElBQVosQ0FBaUJELEtBQWpCO0FBQ0Q7QUFDRCxTQUFLRSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTQyxJQUFULENBQWMsSUFBZCxDQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUQsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNEOzs7O3dCQUVHRSxJLEVBQU1YLE0sRUFBUTtBQUNoQixXQUFLVyxJQUFMLElBQWEsd0JBQWNYLE1BQWQsQ0FBYjtBQUNEOzs7eUJBRUlZLFMsRUFBVztBQUNkO0FBQ0EsV0FBS2IsTUFBTCxDQUFZYyxPQUFaLEdBQXNCLEtBQUtiLE1BQUwsQ0FBWVksVUFBVUUsTUFBdEIsQ0FBdEI7QUFDRDs7Ozs7O2tCQUdZbkIsZ0IiLCJmaWxlIjoiMTkzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBJWEkgZnJvbSAncGl4aS5qcyc7XG5pbXBvcnQgeyBTcHJpdGUsIFRleHR1cmUsIEJhc2VUZXh0dXJlLCBSZWN0YW5nbGUgfSBmcm9tICdwaXhpLmpzJztcbmltcG9ydCBBbmltYXRpb24gZnJvbSAnLi9hbmltYXRpb24uanMnO1xuXG5jbGFzcyBBbmltYXRpb25NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3Ioc291cmNlLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgb2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5mcmFtZXMgPSBbXTtcbiAgICBsZXQgaW1hZ2UgPSBCYXNlVGV4dHVyZS5mcm9tSW1hZ2Uoc291cmNlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2Uud2lkdGggLyBmcmFtZVdpZHRoOyBpKyspIHtcbiAgICAgIGxldCByZWN0ID0gbmV3IFJlY3RhbmdsZShpICogZnJhbWVXaWR0aCwgMCwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQpO1xuICAgICAgbGV0IGZyYW1lID0gbmV3IFRleHR1cmUoaW1hZ2UsIHJlY3QpO1xuICAgICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gICAgfVxuICAgIHRoaXMuYWRkID0gdGhpcy5hZGQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFkZChuYW1lLCBmcmFtZXMpIHtcbiAgICB0aGlzW25hbWVdID0gbmV3IEFuaW1hdGlvbihmcmFtZXMpO1xuICB9XG5cbiAgcGxheShhbmltYXRpb24pIHtcbiAgICAvLyB0aGlzW2FuaW1hdGlvbl0ubmV4dF9mcmFtZSgpO1xuICAgIHRoaXMub2JqZWN0LnRleHR1cmUgPSB0aGlzLmZyYW1lc1thbmltYXRpb24uYWN0aXZlXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25NYW5hZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYW5pbWF0aW9uX21hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///193\n");

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Animation = function () {\n  function Animation(frames) {\n    _classCallCheck(this, Animation);\n\n    this.frames = frames;\n    this.active = 0;\n    this.next_frame = this.next_frame.bind(this);\n  }\n\n  _createClass(Animation, [{\n    key: \"next_frame\",\n    value: function next_frame() {\n      if (this.active == this.frames.length - 1) {\n        this.active = 0;\n      } else {\n        this.active++;\n      }\n    }\n  }]);\n\n  return Animation;\n}();\n\nexports.default = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hbmltYXRpb24uanM/NTdmMyJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJmcmFtZXMiLCJhY3RpdmUiLCJuZXh0X2ZyYW1lIiwiYmluZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTO0FBQ0oscUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxVQUFJLEtBQUtGLE1BQUwsSUFBZSxLQUFLRCxNQUFMLENBQVlJLE1BQVosR0FBcUIsQ0FBeEMsRUFBMkM7QUFDekMsYUFBS0gsTUFBTCxHQUFjLENBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxNQUFMO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZRixTIiwiZmlsZSI6IjE5NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZyYW1lcykge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICB0aGlzLm5leHRfZnJhbWUgPSB0aGlzLm5leHRfZnJhbWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5leHRfZnJhbWUoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09IHRoaXMuZnJhbWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUrKztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYW5pbWF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///194\n");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/ASlate/src/pixi_game/node_modules/pixi.js/lib/index.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(89);\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar game = new _game2.default();\ngame.start();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9lbnRyeS5qcz8wZGZkIl0sIm5hbWVzIjpbImdhbWUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxvQkFBWDtBQUNBQSxLQUFLQyxLQUFMIiwiZmlsZSI6Ijg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lLmpzJ1xuXG52YXIgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9lbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///88\n");

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _pixi = __webpack_require__(20);\n\nvar _pixi2 = _interopRequireDefault(_pixi);\n\nvar _player = __webpack_require__(192);\n\nvar _player2 = _interopRequireDefault(_player);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n_pixi.SCALE_MODES.DEFAULT = _pixi.SCALE_MODES.NEAREST;\n\nvar Game = function (_Application) {\n  _inherits(Game, _Application);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 256, 240, { view: document.getElementById('canvas'), backgroundColor: 0x1099bb, resolution: 2, roundPixels: false, antialias: false }));\n\n    document.body.appendChild(_this.view);\n    _this.player = new _player2.default();\n    _this.player.x = 0;\n    _this.player.y = 0;\n    _this.stage.addChild(_this.player);\n    _this.update = _this.update.bind(_this);\n    _this.ticker.add(_this.update);\n    return _this;\n  }\n\n  _createClass(Game, [{\n    key: 'update',\n    value: function update() {\n      // this.player.texture = this.player.frames[Math.ceil(Math.random() * this.player.frames.length - 1)];\n      this.player.x += 1;\n      // this.player.animations.play('walk');\n    }\n  }]);\n\n  return Game;\n}(_pixi.Application);\n\nexports.default = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzPzliNWYiXSwibmFtZXMiOlsiREVGQVVMVCIsIk5FQVJFU1QiLCJHYW1lIiwidmlldyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZXNvbHV0aW9uIiwicm91bmRQaXhlbHMiLCJhbnRpYWxpYXMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJwbGF5ZXIiLCJ4IiwieSIsInN0YWdlIiwiYWRkQ2hpbGQiLCJ1cGRhdGUiLCJiaW5kIiwidGlja2VyIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLGtCQUFZQSxPQUFaLEdBQXNCLGtCQUFZQyxPQUFsQzs7SUFFTUMsSTs7O0FBRUosa0JBQWE7QUFBQTs7QUFBQSw0R0FDTCxHQURLLEVBQ0EsR0FEQSxFQUNLLEVBQUNDLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBUCxFQUEwQ0MsaUJBQWlCLFFBQTNELEVBQXFFQyxZQUFZLENBQWpGLEVBQW9GQyxhQUFhLEtBQWpHLEVBQXdHQyxXQUFXLEtBQW5ILEVBREw7O0FBRVhMLGFBQVNNLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixNQUFLUixJQUEvQjtBQUNBLFVBQUtTLE1BQUwsR0FBYyxzQkFBZDtBQUNBLFVBQUtBLE1BQUwsQ0FBWUMsQ0FBWixHQUFnQixDQUFoQjtBQUNBLFVBQUtELE1BQUwsQ0FBWUUsQ0FBWixHQUFnQixDQUFoQjtBQUNBLFVBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixNQUFLSixNQUF6QjtBQUNBLFVBQUtLLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFVBQUtDLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixNQUFLSCxNQUFyQjtBQVJXO0FBU1o7Ozs7NkJBRVE7QUFDUDtBQUNBLFdBQUtMLE1BQUwsQ0FBWUMsQ0FBWixJQUFpQixDQUFqQjtBQUNBO0FBQ0Q7Ozs7OztrQkFJWVgsSSIsImZpbGUiOiI4OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQSVhJIGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlLCBBcHBsaWNhdGlvbiwgU3ByaXRlc2hlZXQsIEJhc2VUZXh0dXJlLCBTQ0FMRV9NT0RFUyB9IGZyb20gJ3BpeGkuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci5qcydcblxuU0NBTEVfTU9ERVMuREVGQVVMVCA9IFNDQUxFX01PREVTLk5FQVJFU1Q7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigyNTYsIDI0MCwge3ZpZXc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSwgYmFja2dyb3VuZENvbG9yOiAweDEwOTliYiwgcmVzb2x1dGlvbjogMiwgcm91bmRQaXhlbHM6IGZhbHNlLCBhbnRpYWxpYXM6IGZhbHNlfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy5wbGF5ZXIueCA9IDA7XG4gICAgdGhpcy5wbGF5ZXIueSA9IDA7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLnVwZGF0ZSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gdGhpcy5wbGF5ZXIudGV4dHVyZSA9IHRoaXMucGxheWVyLmZyYW1lc1tNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmZyYW1lcy5sZW5ndGggLSAxKV07XG4gICAgdGhpcy5wbGF5ZXIueCArPSAxO1xuICAgIC8vIHRoaXMucGxheWVyLmFuaW1hdGlvbnMucGxheSgnd2FsaycpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2dhbWUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///89\n");

/***/ })

/******/ });