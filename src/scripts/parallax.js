var parallax = (function () {
  var bg = document.querySelector('.parallax__layer-sky');
  var bg2 = document.querySelector('.parallax__layer-mountains');
  var bg3 = document.querySelector('.parallax__layer-locomotive');
  var bg4 = document.querySelector('.parallax__layer-grass');
  var bg5 = document.querySelector('.parallax__layer-fon');
  



  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformString = 'translate3d(0,' + strafe + ', 0)';

      var style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;
    },

    init: function (wScroll) {
      this.move(bg, wScroll, 80);
      this.move(bg2, wScroll, 60);
      this.move(bg3, wScroll, 40);
      this.move(bg4, wScroll, 35);
      this.move(bg5, wScroll, 35);
    }
    
  }


}());

window.onscroll = function () {

  if (window.innerWidth > 768){
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);
  }
  
}
