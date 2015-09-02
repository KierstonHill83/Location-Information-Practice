// add scripts

$(document).on('ready', function() {
  $("p").hide();
});

$("form").on("submit", function(event) {
  event.preventDefault();
  var city = $("#city").val();
  $("p").show();
  getResults(city);
});


function getResults(city) {
  var request = $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial",
    method: "GET",
    dataType: "json",
  });


  request.done(function(response) {
    var weather = response.weather.main;
    var display = "";
    var tempCurrent = response.main.temp;
    var tempMin = response.main.temp_min;
    var tempMax = response.main.temp_max;
    display += "<li><p>The Current Temperature: " + tempCurrent + "</p><p>The Minimum Temperature: " + tempMin + "</p><p>The Maxiumum Temperature: " + tempMax + "</p></li>";
    $(".results").html(display);
  });
  request.fail(function(error) {
    alert("Something went wrong!");
  });
 }


 // function getInstagram() {
 //  var request = $.ajax({
 //    url: ;
 //  });
 // }

// api key = 65332c346ee77bbdcabc9c12d9125837
