'use strict';

(function () {
    document.addEventListener('DOMContentLoaded', function() {
      var circleList = document.getElementsByClassName('circle');

      function setupClickHandler(element) {
        var count = 0;
        element.addEventListener('click', function() {
          count++;
          this.lastElementChild.firstElementChild.innerText = count;
        });
      }
      function setupTotalHandler(element) {
        element.addEventListener('click', function() {
          total += Number(element.firstElementChild.value);
          document.getElementById('total').value = total;
        });
      }
      function setupNotification(element) {
        document.getElementById('calculate').addEventListener('click', function() {
          element.lastElementChild.classList.remove('hidden');
          console.log(element.lastElementChild.classList);
        });
      }
      //document.getElementById('total').addEventListener('click', function() {
      //  console.log('works');
      //});
      for (var i =0; i < circleList.length; i++) {
        var total = 0;
        var element = circleList[i];
        setupClickHandler(element);
        setupTotalHandler(element);
        setupNotification(element);
      }
    });
  }
)();