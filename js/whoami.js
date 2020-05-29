(() => {
    let MyLib = window.App.MyLib;

    let url = whoamiURL;

    MyLib.get(url)
      .then(res => {
        if (res == undefined) return;
        document.getElementById('id').innerHTML = res.id;
        document.getElementById('email').innerHTML = res.email;
      })

  }

)(window)
