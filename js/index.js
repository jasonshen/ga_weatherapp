
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
			        $("#city-name").text(weatherData.name);
			        $("#weather-status").text(weatherData.weather[0].description);
			        $("#current-temp").text(weatherData.main.temp);
			        $("#wind-speed").text(weatherData.wind.speed);
			        $("#current-temp").text(convertK(weatherData.main.temp));
			    }
			})


			$.ajax("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city,
			 {
			    dataType: "jsonp",
			    success: function (weatherForecast) {
			        $("#tomorrow").text(weatherForecast.list[0].weather[0].description);
			        $("#2-days").text(weatherForecast.list[1].weather[0].description);
			    }


			})

		}


	})

	function convertK (k) {
		temp = ((k - 273.15)* 1.8 + 32);	
		return temp.toFixed(1);
	}
	


});