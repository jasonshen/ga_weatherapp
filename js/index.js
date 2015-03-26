
$(function () {

	var city = "London"
	$("#getweather").click(function () {
   
		$.ajax("http://api.openweathermap.org/data/2.5/weather?q="+city, {
		    dataType: "jsonp",
		    success: function (weatherData) {
		        console.log(weatherData.main.temp_max);
		        console.log("Something!")

		    }
		})
	})
	


});