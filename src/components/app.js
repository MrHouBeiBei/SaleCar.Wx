(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth < 1024) {
          docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        } else {
          docEl.style.fontSize = 34.13 + 'px'
        }
        // console.log(clientWidth);
        // console.log(docEl.style.fontSize);
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);


  // 防止页面左右滑动
  // document.body.addEventListener('touchmove', function (event) {
  //   event.preventDefault();}, true);



export const countDown = function  (data) {
    // console.log(data)
}