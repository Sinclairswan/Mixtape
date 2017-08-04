// var client_id = '7a4280c69bd540d588a6540f043ffa48'; // Your client id
// var client_secret = 'b07dd2e7bab84c498c5e804b64a267eb'; // Your secret
// var redirect_uri = 'http://localhost:9393/user/'; // Your redirect uri

// const app = {};

// app.apiUrl = 'https://api.spotify.com/v1';

// //allow the user to enter artist names
// app.events = function(){
// 	$('form').on('submit', function(e){
//      e.preventDefault();
//      let artists = $('input[type=search]').val();
//      artists = artists.split(',');
//      let search = artists.map(artistName =>app.searchArtist(artistName));
//      console.log(search);
// 	});
// };
// //get artist from spotify
// app.searchArtist =(artistName) => $.ajax({
//    url: `${app.apiUrl}search/`,
//    method: 'GET',
//    dataType: 'json',
//    data: { 
//    	q: artistName,
//    	type: 'artist'
//    	 }
// });
// // get albums
// app.init = function(){
//    app.events();
// };

// $(app.init);

     var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 9
        });
           infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }