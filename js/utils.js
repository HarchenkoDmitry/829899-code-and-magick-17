'use strict';

(function () {
  var utils = {

    errorHandler: function (errorMessage) {
      var massage = document.createElement('div');
      massage.textContent = errorMessage;
      massage.classList.add('error-massage');
      document.body.appendChild(massage);
    },

    debounce: function debounce(functionName) {
      var timerId;
      return function (delayTime) {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(functionName, delayTime);
        return timerId;
      };
    }

  };

  window.utils = utils;
})();
