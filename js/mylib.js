(() => {
  'use strict;'

  let App = window.App || {};

  let MyLib = {
    //
    post: url => {
      if (!MyLib.validateData())
        return Promise.reject(new Error("Validate error"));

      let request = {
        email: login.value,
        password: password.value
      }
      return fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
          },
          credentials: 'include',
          cache: 'no-cache',
          body: JSON.stringify(request)
        })
        .then(response => {
          console.log(`response status ${response.status}`)
          if (response.status == 200)
            return response.json()
          else
            return new Error(`fetch error: ${response.status}, ${response.statusText}`)
        })
        .then(response => {
          console.log(response)
          return response
        })
        .catch(err => console.log(`error: ${err}`))
    },

    get: url => {
      if (!MyLib.validateData())
        return Promise.reject(new Error("Validate error"));
      return fetch(url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
          },
          credentials: 'include',
          cache: 'no-cache',
        })
        .then(response => {
          console.log(`response status ${response.status}`)
          if (response.status == 200)
            return response.json()
          else
            return new Error(`fetch error: ${response.status}, ${response.statusText}`)
        })
        .then(response => {
          console.log(response)
          return response
        })
        .catch(err => console.log(`error: ${err}`))
    },

    validateData: function() {
      return true;
    },

  }

  App.MyLib = MyLib;
  window.App = App;
})(window)
