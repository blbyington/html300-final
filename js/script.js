$(function () {
  'use strict';
  
  var rsvpInfo =[];
  var rsvpName = $('#name').val();
  var rsvpAttend = $('#attend').val();
  var rsvpOption = $('#option').val();
  var rsvpPlus = $('#plus').val();
  var rsvpPhone = $('#phone').val();
  
  
  $('#submitBtn').on('click', addRow);
  $('#rsvpBtn').on('click', showForm);
  
  function addRow (evt) {
    var row = '<tr><td>' + rsvpName + '</td><td>' + rsvpAttend + '</td><td>' + rsvpOption + '</td><td>' + rsvpPlus + '</td><td>' + rsvpPhone + '</tr>';  
    $('#tableArea').append(row);
    $('#rsvpForm').hide();
    evt.preventDefault();
  }
  
  function showForm () {
    var rsvpName = $('#name').val('');
    var rsvpAttend = $('#attend').val('');
    var rsvpOption = $('#option').val('');
    var rsvpPlus = $('#plus').val('');
    var rsvpPhone = $('#phone').val('');
    $('#rsvpForm').show();
  }
  

});
  

var end = new Date('08/26/2017 5:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Just Married!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + 'days ';
        document.getElementById('countdown').innerHTML += hours + 'hrs ';
        document.getElementById('countdown').innerHTML += minutes + 'mins ';
        document.getElementById('countdown').innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
