'use strict';

(function() {
    document.addEventListener('DOMContentLoaded', function() {
      var total = 0;

      var circleList = document.getElementsByClassName('circle');

      var coinArray = [];

      var coinOne   = document.getElementById('coinOne'),
          coinTwo   = document.getElementById('coinTwo'),
          coinThree = document.getElementById('coinThree'),
          coinFour  = document.getElementById('coinFour');

      function sortCoinArray() {
        coinArray.sort(function(a, b) {
          return b - a;
        });
      }

      function setupCoinArray(element) {
        coinArray.push(Number(element.firstElementChild.value));
        sortCoinArray();
      }

      function coinArrayHandler(element) {
        setupCoinArray(element);
        element.firstElementChild.addEventListener('blur', function() {
          var number = Number(element.firstElementChild.value);

          if(number >= coinArray[0]) {
            coinArray.splice(0, 1, number);

          }else if(number >= coinArray[1]) {
            coinArray.splice(1, 1, number);

          }else if(number >= coinArray[2]) {
            coinArray.splice(2, 1, number);
          }
          sortCoinArray();
        });
      }

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
          count = remainder;
          coinFour.nextElementSibling.firstElementChild.innerText = count;
        }
      });

      function setupNotification(element) {
        document.getElementById('calculate').addEventListener('click', function() {
          var count = Number(element.lastElementChild.firstElementChild.innerText);
          if(count != 0) {
            element.lastElementChild.classList.remove('hidden');
          }
        });
      }

      for(var i = 0; i < circleList.length; i++) {
        var element = circleList[i];
        coinArrayHandler(element);
        setupTotalHandler(element);
        setupNotification(element);
      }
    });
  })();