"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toastr = _interopRequireDefault(require("toastr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './flash-message.scss';
(function ($) {
  'use strict';

  var InnovedFlashMessage = function InnovedFlashMessage() {
    /**
     * Public methods
     */
    InnovedFlashMessage.create = function (type, title, message, options) {
      if (!message && !title) {
        return false;
      } //if no message and title given, exit now


      type = type || 'info'; //set info to default type if none is set

      options = options || ''; //set not extra options if not passed

      _toastr.default[type](message, title, options); //show message

    };

    InnovedFlashMessage.init = function () {
      _toastr.default.options = {
        "closeButton": true,
        "positionClass": "toast-top-right",
        "extendedTimeOut": "0"
      };
    };
  }; //return the object for global use


  $.innovedFlashMessage = function () {
    return new InnovedFlashMessage();
  };
})(jQuery); //export for package


var _default = $.innovedFlashMessage();

exports.default = _default;
