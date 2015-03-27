
$(function () {

	var city = "London"

	city = $("#location").val()
	console.log(city)

	$("#get-weather").click(function () {
    	if ($("#location").val() != null) {
	    	city = $("#location").val()

			$.ajax("http://api.openweathermap.org/data/2.5/weather?q="+city, {
			    dataType: "jsonp",
			    success: function (weatherData) {
			        console.log(weatherData.main.temp_max);
			        console.log("Something!")
			        console.log(weatherData.weather[0].description);
			        $("#weather-status").text(weatherData.weather[0].description);
			        $("#current-temp").text(weatherData.main.temp);
			        $("#wind-speed").text(weatherData.wind.speed);
			        console.log(convertK(weatherData.main.temp))
			    }

			})

		}


	})

	function convertK (k) {
		return ((k - 273.15)* 1.8000 + 32.00)
	}
	


});