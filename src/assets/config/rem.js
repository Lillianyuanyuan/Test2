(function(doc,win){
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function(){
		var clientWidth = docEl.clientWidth;
		if(!clientWidth) return;
		docEl.style.fontSize = (clientWidth/100)+"px";
		if(!doc.addEventListener) return;

		win.addEventListener(resizeEvt,recalc,false);
		doc.addEventListener('DOMContentLoaded',recalc,false);

	}
	  
 
})(document,window)

/*var dpr = window.devicePixelRatio;
	  var meta = document.createElement('meta');

	  // dpr
	  meta.setAttribute('content', 'initial-scale=' + 1/dpr + ', maximum-scale=' + 1/dpr + ', minimum-scale=' + 1/dpr + ', user-scalable=no'); 
	  document.getElementsByTagName('head')[0].appendChild(meta);

	  // rem
	  document.addEventListener('DOMContentLoaded', function (e) {
	    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px';
	  }, false);*/
