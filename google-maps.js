script(async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1NoA2BqGki3O7b9SUJVhCCLU-1uCFKKs&callback=initMap") // так подключать в HTML

window.initMap = function() {
        var place = {lat: 47.225190, lng: 39.662033};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: place,       /// ЗАМЕНА МАРКЕРА ВНИЗУ
          styles: [
      {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "-23"
            },
            {
                "weight": "1.15"
            },
            {
                "gamma": "1.30"
            }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "gamma": "1.00"
            }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "gamma": "1.41"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [
            {
                "gamma": "1.52"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-20"
            },
            {
                "gamma": "1.30"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "63"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "0.63"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "28"
            },
            {
                "visibility": "simplified"
            },
            {
                "gamma": "0.67"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
            ]
            }
      ]
        });
        var imageMarker = 'images/label.png'
        var marker = new google.maps.Marker({
          position: place,
          map: map,
          icon: imageMarker
        });
      }
