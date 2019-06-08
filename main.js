"use strict";

(function(){

  var plusIcon = document.getElementsByClassName("plus");
Array.from(plusIcon).forEach(function(element){
  element.addEventListener('click', function(){
    var img = this.children;
    img[0].src = "images/minus.svg";
    var parentNode = this.parentNode;
    var children = parentNode.children;
    var content = children[1];
    var getHideText = content.querySelectorAll(".content-open");
    if(!this.hasAttribute('isToggle')){
        getHideText[0].style.display = "block";
        this.setAttribute('isToggle', 'yep');
    }else{
      getHideText[0].style.display = "none";
      img[0].src = "images/plus.svg";
      this.removeAttribute('isToggle');
    }

  })
})


})();
