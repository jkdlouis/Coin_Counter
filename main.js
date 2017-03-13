'use strict';

(function () {
    document.addEventListener('DOMContentLoaded', function() {
      var circleList = document.getElementsByClassName('circle');

      function setupTotalHandler(element) {
        element.addEventListener('click', function() {
          total += Number(element.firstElementChild.value);
          document.getElementById('total').value = total;
        });
      }
      function setupNotificationValue(element) {
        document.getElementById('calculate').addEventListener('click', function() {
          var number = Number(element.firstElementChild.value);
          var sum = Number(document.getElementById('total').value);
          var remainder;

          if(sum === number && sum % number == 0) {
            element.lastElementChild.firstElementChild.innerText = '1';
          }

          while(remainder !== number) {
            remainder = sum % number;
            element.lastElementChild.firstElementChild.innerText = remainder;
            break;
          }
        });
      }
      function setupNotification(element) {
        document.getElementById('calculate').addEventListener('click', function() {
          //setupNotificationValue(element.firstElementChild.value);
          if(element.lastElementChild.firstElementChild.innerText) {
              element.lastElementChild.classList.remove('hidden');
          }
        });
      }
      for (var i =0; i < circleList.length; i++) {
        var total = 0;
        var element = circleList[i];
        setupTotalHandler(element);
        setupNotificationValue(element);
        setupNotification(element);
      }
    });
  }
)();