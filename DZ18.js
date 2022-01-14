var places = document.getElementsByClassName('place');

var button = document.getElementById('button');

var video = document.getElementById('video');

var booked = 0;

button.onclick = function(){
   var number = prompt("Введите место которое будем бронировать");
   number = parseInt(number);
   number--;
   
   places[number].style.backgroundColor = 'red'

   booked++;

   alert("Забронированно:" + booked);

   if(booked >= 5){
       video.style.display = 'block';

   }

}