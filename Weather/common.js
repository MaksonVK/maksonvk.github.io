
$(document).ready(function() {

    $(".row").css("height", $(window).height()-100);

  var cels = true,
  clear = false,
  temp = 0,
  city = ["London", "New-York", "Los-Angeles", "Paris", "Singapore", "Washington", "San-Francisco", "Berlin", "Kiev", "Tokyo", "Seattle", "Melbourne,AU", "Capetown", "Moscow", "Seoul", "Shanghai", "Abu-Dhabi"];

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        location ("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&APPID=061f24cf3cde2f60644a8240302983f2");
      }, 
      function (error){
        $.getJSON("https://ip-api.com/json", function (json) {
          location ("http://api.openweathermap.org/data/2.5/weather?lat=" + json.lat + "&lon=" + json.lon + "&units=metric&APPID=061f24cf3cde2f60644a8240302983f2");
          $("footer>p").html("Located by your IP");

        }).fail(function(){
          $(".Sorry").html("Sorry, we aren't able to determine your location, so we have shown the weather in a random city");
         location ("https://api.openweathermap.org/data/2.5/weather?q=" + city[Math.floor(Math.random()*city.length)] + "&units=metric&APPID=061f24cf3cde2f60644a8240302983f2");
        });
      });
  }

  

  $("#cels").on("click", function (){
    cels = !cels;
    if (cels)
    {
      $("#cels").html("C");
      $("#degrees").html(temp + "°");
    }
    else
    {
      $("#cels").html("F");
      $("#degrees").html(Math.round(temp*1.8 + 32) + "°");
    }
  });

  function location (url){
    $(".icon").hide();
    clear = false;
    $(".randCity, .forecast").show();
    $.getJSON(url, function(json) {
      $(".message").html(json.name + ", " + json.sys.country);
      temp = Math.round(json.main.temp);
      if (cels)
        $("#degrees").html(temp  + "°");
      else
        $("#degrees").html(Math.round(temp*1.8 + 32)  + "°");
      if(json.weather[0].main == "Clear")
        clear = true;
      $("." + json.weather[0].main).show();
      localTime ("https://maps.googleapis.com/maps/api/timezone/json?location=" + json.coord.lat + "," + json.coord.lon + "&timestamp=1478880000&key=AIzaSyDJzCmUpU2iw6i9LmCRkkqtRg9twoMxnOE");
      $(".desc").html(json.weather[0].description);
      $("#cels").show();
    });
  }

  function localTime (url) {
    $.getJSON(url, function (json){
      var date = new Date();
      var hours = date.getUTCHours() + json.rawOffset/3600;
      if (hours > 23)
        hours = hours - 24;
      if (hours < 0)
        hours = date.getUTCHours() + 24 + hours;
      if (clear)
        if (hours > 19 || hours < 6 && clear)
        {
          $(".Clear").hide();
          $(".Night").show();
        }
      if (hours < 10)
        hours = "0" + hours;
      var minutes = date.getUTCMinutes();
      if (date.getUTCMinutes() < 10)
        minutes = "0" + minutes;
      $("#time").html("Local time: " + hours + ":" + minutes);
    });
  }

  $(".randCity").on("click", function(){
    location ("https://api.openweathermap.org/data/2.5/weather?q=" + city[Math.floor(Math.random()*city.length)] + "&units=metric&APPID=061f24cf3cde2f60644a8240302983f2");
  });

  $(".forecast").on("click", function(){
    var str = $("h2").split(", ");
  });
  });
