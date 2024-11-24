(function () {
  if (window.postMessage) return;
  var name, counter = 0;
  function pm(context, data) {
    context.name = 'pm' + (++counter) + ',' + JSON.stringify(data);
  }

  HTMLIFrameElement.prototype.postMessage = function (data) {
    pm(this.contentWindow, data);
  };

  Window.prototype.postMessage = parent.constructor.prototype.postMessage = function (data) {
    pm(this, data);

  }
  function poll() {
    if (name === (name = window.name) || name === (name = name.replace(/^pm\d+,/))) {
      return;
    }
    var e = document.createEvent('HTMLEvents');
    if(e.initEvent) {
      e.initEvent('message', false, true);
    }
    e.data = JSON.parse(name);

    if (window.onmessage) window.onmessage(e);
    target.dispatchEvent(e);
  }
  setInterval(poll, 100);
}());
