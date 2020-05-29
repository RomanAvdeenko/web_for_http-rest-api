(() => {
    let MyLib = window.App.MyLib;

    let url = statusURL;
    //let url = 'www.hl.ua';
    MyLib.get(url)
      .then(res => {
        if (res == undefined) return;
        //console.log(res);
        document.getElementById('status').innerHTML = res.status;
      })
  }

)(window)
