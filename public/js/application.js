// $(document).ready(function(){
//   $("#btn-login").on ("click", function(){
//     event.preventDefault();
//     console.log("click")
//     $.ajax({
//       url:"https://api.spotify.com/v1/me",
//       method: "POST",
//       data: "7a4280c69bd540d588a6540f043ffa48"
//     }).done(function(response){
//       console.log(response)
//     })
//   });

// });
(function() {

    function login(callback) {
        var CLIENT_ID = '7a4280c69bd540d588a6540f043ffa48';
        var REDIRECT_URI = 'http://localhost:9393/auth/spotify/callback';
        function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
              '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
              '&scope=' + encodeURIComponent(scopes.join(' ')) +
              '&response_type=code';
        }

        var url = getLoginURL([
            'user-read-email'
        ]);

        var width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);

        window.addEventListener("message", function(event) {
            var hash = JSON.parse(event.data);
            if (hash.type == 'access_token') {
                callback(hash.access_token);
            }
        }, false);

        var w = window.open(url,
                            'Spotify',
                            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                           );

    }

    function getUserData(accessToken) {
        return $.ajax({
            url: 'https://api.spotify.com/v1/me',
            headers: {
               'Authorization': 'Bearer ' + accessToken
            }
        });
    }

    var templateSource = document.getElementById('result-template').innerHTML,
        template = Handlebars.compile(templateSource),
        resultsPlaceholder = document.getElementById('result'),
        loginButton = document.getElementById('btn-login');

    loginButton.addEventListener('click', function() {
        login(function(accessToken) {
            getUserData(accessToken)
                .then(function(response) {
                    loginButton.style.display = 'none';
                    resultsPlaceholder.innerHTML = template(response);
                });
            });
    });

})();
