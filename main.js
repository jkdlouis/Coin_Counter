'use strict';

(function () {
    document.addEventListener('DOMContentLoaded', function() {
      var total = 0;

      var circleList = document.getElementsByClassName('circle');
      var coinOne = document.getElementById('coinOne');
      var coinTwo = document.getElementById('coinTwo');
      var coinThree = document.getElementById('coinThree');
      var coinFour = document.getElementById('coinFour');

      var coinArray = [];
      coinArray.push(coinOne.value, coinTwo.value, coinThree.value, coinFour.value);
      coinArray.sort(function(a, b) {
        return b-a
      });

      function setupTotalHandler(element) {
        element.addEventListener('click', function() {
          var number = Number(element.firstElementChild.value);
          total += Number(number);
          document.getElementById('total').value = total;
        });
      }

      document.getElementById('calculate').addEventListener('click', function(count) {
        var remainder = 0;

        if(coinArray[0] > 0) {
          count = Math.floor(total / coinArray[0]);
          remainder = total - count * coinArray[0];
          total = remainder;
          coinOne.nextElementSibling.firstElementChild.innerText = count;
        }
        if(coinArray[1] > 0) {
          count = Math.floor(total / coinArray[1]);
          remainder = total - count * coinArray[1];
          total = remainder;
          coinTwo.nextElementSibling.firstElementChild.innerText = count;
        }
        if(coinArray[2] > 0) {
          count = Math.floor(total / coinArray[2]);
          remainder = total - count * coinArray[2];
          total = remainder;
          coinThree.nextElementSibling.firstElementChild.innerText = count;
        }
        if(coinArray[3] > 0) {
          count = total;
          coinFour.nextElementSibling.firstElementChild.innerText = count;
        }
      });

      function setupNotification(element) {
        document.getElementById('calculate').addEventListener('click', function() {
          if(element.lastElementChild.firstElementChild.innerText) {
              element.lastElementChild.classList.remove('hidden');
          }
        });
      }
      for (var i =0; i < circleList.length; i++) {
        var element = circleList[i];
        setupTotalHandler(element);
        setupNotification(element);
      }
    });
  }
)();