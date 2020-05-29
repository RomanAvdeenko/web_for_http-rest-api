(() => {
  'use strict;'

  let MyLib = window.App.MyLib;

  let url = registrateURL;

  let login = document.getElementById('login');
  let password = document.getElementById('password');

  // add eventListeners
  document.getElementById('send').onclick = MyLib.post.bind(null, url);
  login.addEventListener("keyup", () => IfEnterPressed(MyLib.post, url));
  password.addEventListener("keyup", () => IfEnterPressed(MyLib.post, url));

  function IfEnterPressed(callback, url) {
    if (event.which == 13 || event.keyCode == 13) {
      event.preventDefault();
      callback(url);
    }
  }

})(window)
