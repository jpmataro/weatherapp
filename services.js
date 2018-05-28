weatherApp.service('cityService', function() {

    this.city = "Barcelona";

});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource ("https://api.openweathermap.org/data/2.5/forecast?APPID=a236bda596c8f858376ac515a50b8913&q=:q&cnt=:cnt", {q:'@city',cnt:'@cnt'});
    
        return weatherAPI.get({q: city, cnt: days});
    }
}]);