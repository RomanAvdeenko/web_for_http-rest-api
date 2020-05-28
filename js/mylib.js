(() => {
  'use strict;'

  let App = window.App || {};

  let MyLib = {
    post: url => {
      if (!MyLib.validateData()) return;

      let request = {
        email: login.value,
        password: password.value
      }
      fetch(url, {
          method: 'POST',
          headers: {
                      'Content-Type': 'application/json',
            'Cache': 'no-cache'
          },
          credentials: 'include',
          body: JSON.stringify(request)
        })
        .then(
          response => {
            response.text()
              .then(
                msg => {
                  if (msg) console.log(msg)
                }
              )
          },
          err => console.log(`${err}, ${err.message}`)
        )
    },
    get: url => {
      if (!MyLib.validateData()) return;


      fetch(url, {
          method: "GET",
          headers: {
            
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
          },
          credentials: 'include'
        })
        .then(
          response => {
            response.json()
              .then(json => console.log(json))
          },
          err => console.log(`${err}, ${err.message}`)
        )
    },
    validateData: function() {
      return true;
    }
  }

  App.MyLib = MyLib;
  window.App = App;
})(window)
