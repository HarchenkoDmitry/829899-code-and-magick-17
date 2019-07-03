'use strict';

(function () {
  var input = document.querySelector('.setup-user input[type="file"]');
  var img = document.querySelector('.setup-user-pic');

  function renderImg(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('loadend', function () {
      img.src = reader.result;
    });
  }

  input.addEventListener('change', function () {
    var file = input.files[0];
    if (~file.type.indexOf('image')) {
      renderImg(file);
    } else {
      input.value = '';
    }
  });
})();
