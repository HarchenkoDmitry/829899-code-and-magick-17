'use strict';

(function () {
  var util = {
    errorHandler: function (errorMessage) {
      var massage = document.createElement('div');
      massage.textContent = errorMessage;
      massage.style.cssText = 'background-color: red;' +
        'color: white;' +
        'position: fixed;' +
        'z-index: 100;' +
        'top: 0; left: 0; right: 0;' +
        'padding: 5px;' +
        'font-family: monospace;' +
        'font-size: 20px;' +
        'text-align: center';
      document.body.appendChild(massage);
    }
  };

  window.util = util;
})();
