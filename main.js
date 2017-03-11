'use strict';

(function () {
    document.addEventListener('DOMContentLoaded', function() {
      var circleList = document.getElementsByClassName('circle');

      function setupClickHandler(element){
        var count = 0;
        element.addEventListener('click', function() {
          count++;
          this.lastElementChild.firstElementChild.innerText = count;
          console.log(count);
        });
      }
      for (var i =0; i < circleList.length; i++) {
        var element = circleList[i];
        setupClickHandler(element);
        console.log(this.lastElementChild.innerText);
      }
    });
  }
)();