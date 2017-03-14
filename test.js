'use strict';

(function () {
    document.addEventListener('DOMContentLoaded', function() {
      var total = 0;
      var remainder;
      var count;

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

        document.getElementById('calculate').addEventListener('click', function() {
        while(coinArray[0] > 0) {
            count = Math.floor(total / coinArray[0]);
            coinTwo.nextElementSibling.firstElementChild.innerText = count;
          remainder = total % coinArray[0];
          if(remainder > 0) {
            count = Math.floor(remainder / coinArray[1]);
            remainder = total % coinArray[1];
            coinOne.nextElementSibling.firstElementChild.innerText = count;
            if(remainder > 0) {
              count = Math.floor(remainder / coinArray[2]);
              remainder = total % coinArray[2];
              coinFour.nextElementSibling.firstElementChild.innerText = count;
              if(remainder > 0) {
                count = Math.floor(remainder / coinArray[3]);
                remainder = total % coinArray[3];
                coinThree.nextElementSibling.firstElementChild.innerText = count;
              } else if(remainder === 0) {
                coinThree.nextElementSibling.firstElementChild.innerText = '';
              }
            }
          }
          break;
        }
      });

      function setupNotification(element) {
        document.getElementById('calculate').addEventListener('click', function() {
          //setupNotificationValue(element);
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