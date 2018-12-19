import './flash-message.scss';
import toastr from 'toastr';

(function($) {

  'use strict';

  const InnovedFlashMessage = function() {

    /**
     * Public methods
     */
    this.create = function(type, title, message, options) {
      if(!message && !title) { return false; } //if no message and title given, exit now
      type = type || 'info'; //set info to default type if none is set
      options = options || ''; //set not extra options if not passed
      toastr[type](message, title, options); //show message
    }

    this.init = function() {
      toastr.options = {
          "closeButton": true,
          "positionClass": "toast-top-right",
          "extendedTimeOut": "0"
      }
    }

  };

  //return the object for global use
  $.innovedFlashMessage = function() {
    return new InnovedFlashMessage();
  }

})(jQuery);

//export for package
export default $.innovedFlashMessage();