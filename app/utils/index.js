
/*
  Object.byString(object, string)

  let foo = {
    trackmatches: {
      track: [1, 2, 3 ]
    }
  }

  Object.byString(foo, 'trackmatches.track[1]') === 2


*/
Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

window.dump = (obj) => {
  console.log(`dump: ${JSON.stringify(obj)}`)
}
