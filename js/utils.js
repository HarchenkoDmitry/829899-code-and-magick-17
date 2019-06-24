'use strict';

(function () {
  var utils = {
    errorHandler: function (errorMessage) {
      var massage = document.createElement('div');
      massage.textContent = errorMessage;
      massage.classList.add('error-massage');
      document.body.appendChild(massage);
    }
  };

  window.utils = utils;
})();
