// Share Button to save


const shareButton = document.getElementById("shareButton");
const popup = document.getElementById("popup");
const popupBackground =
    document.getElementById("popupBackground");

// Function to close the popup
const closePopup = () => {
  popup.style.display = "none";
  popupBackground.style.display = "none";
};

// Function to open the popup
const openPopup = () => {
  popup.style.display = "block";
  popupBackground.style.display = "block";
};

// Event listener for the share button
shareButton.addEventListener("click", (event) => {
  // Toggle the display of the popup
  if (
      popup.style.display === "none" ||
      popup.style.display === ""
  ) {
    openPopup();
  } else {
    closePopup();
  }

  // Prevent the click event from propagating further
  event.stopPropagation();
});

// Event listener to close the popup when clicking outside of it
document.body.addEventListener("click", (event) => {
  // Check if the clicked element is not within the popup
  if (
      !popup.contains(event.target) &&
      popup.style.display === "block"
  ) {
    closePopup();
  }
});

document
    .getElementById("exploreButton")
    .addEventListener("click", function () {
      document.getElementById("sidePanel").style.left = "0"; // Slide in the side panel from the left
    });

// Close the side panel when clicking outside of it
document.addEventListener("click", function (event) {
  const sidePanel = document.getElementById("sidePanel");
  const exploreButton = document.getElementById("exploreButton");
  const closeButton = document.getElementById("sideCloseButton"); // Get the close button

  if (
      !sidePanel.contains(event.target) &&
      event.target !== exploreButton &&
      event.target !== closeButton // Check if the click event target is the close button
  ) {
    sidePanel.style.left = "-600px"; // Slide out the side panel
  }
});

// Add event listener to close button to close the side panel when clicked
document.getElementById("sideCloseButton").addEventListener("click", function (event) {
  const sidePanel = document.getElementById("sidePanel");
  sidePanel.style.left = "-600px"; // Slide out the side panel
});


// var auth0 = new auth0.WebAuth({
//     domain: 'YOUR_AUTH0_DOMAIN',
//     clientID: 'YOUR_CLIENT_ID',
//     redirectUri: 'http://localhost:3000/callback', // Update with your callback URL
//     audience: 'dev-buqpcafx3kbf8ic1.au.auth0.com',
//     responseType: 'token id_token',
//     scope: 'openid profile email'
// });

// document.getElementById('loginBtn').addEventListener('click', function () {
//     auth0.authorize({
//         connection: 'google-oauth2'
//     });
// });

// auth0.parseHash(function (err, authResult) {
//     if (authResult && authResult.accessToken && authResult.idToken) {
//         // User is authenticated
//         auth0.client.userInfo(authResult.accessToken, function(err, user) {
//             if (err) {
//                 // Handle error
//                 console.log("Error fetching user info: ", err);
//                 return;
//             }
//             // Display user information
//             document.getElementById('profile').innerHTML = '<p>Welcome, ' + user.name + '</p>';
//         });
//     } else if (err) {
//         // Handle error
//         console.log("Error authenticating user: ", err);
//     }
// });
var googleUser = {};
var startApp = function () {
  gapi.load("auth2", function () {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: "4NezrgL0AgEz9fooWP8X9fUmc4FCZUfD",
      cookiepolicy: "",
    });
    attachSignin(document.getElementById("customBtn"));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(
      element,
      {},
      function (googleUser) {
        document.getElementById("name").innerText =
            "Signed in: " + googleUser.getBasicProfile().getName();
        // Redirect the user to another webpage
        window.location.href = "./newpage.html";
      },
      function (error) {

      }
  );
}


// function toggleDirection() {
//   var content = document.getElementById("content1");
//   var arrow = document.getElementById("dropdown-arrow");
//   if (content.style.display === "none") {
//     content.style.display = "block";
//     arrow.innerHTML = "‹";
//   } else {
//     content.style.display = "none";
//     arrow.innerHTML = "›";
//   }
// }
// function toggleDirection() {
//   var content1 = document.getElementById("content1");
//   var dropdownMenu = document.querySelector(".dropdown-menu");

//   if (content1.style.display === "none") {
//     content1.style.display = "block";
//     dropdownMenu.style.display = "block";
//   } else {
//     content1.style.display = "none";
//     dropdownMenu.style.display = "none";
//   }
// }


let directionMapVisible = false;


// Add event listener for checkbox change
document.getElementById("handle1").addEventListener("change", function() {
  if (this.checked) {
      // Checkbox is checked, call the toggleDirection2 function
      toggleDirection2();
  } else {
      // Checkbox is unchecked, do something else if needed
  }
});

function toggleDirection2() {
  const directionMapContainer = document.getElementById("mapContainer");

  if (directionMapVisible) {
    directionMapContainer.style.display = "none"; // Hide the direction map
    directionMapVisible = false;
  } else {
    showDirectionMap(); // Show direction map
    directionMapContainer.style.display = "block"; // Display the direction map container
    directionMapVisible = true;
  }
}

// Add event listener for the Saturday button
// document.getElementById("saturdayBtn").addEventListener("click", function() {
//     // Call the showDirectionMap function
//     showDirectionMap();
// });


//Showdirection using JSON FILE
async function fetchCoordinates() {
  try {
    const response = await fetch('/static/direction.json'); // assuming coordinates.json is the name of your JSON file
    if (!response.ok) {
      throw new Error('Failed to fetch coordinates');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function showDirectionMap() {
  const coordinates = await fetchCoordinates();

  if (coordinates.length === 0) {
    console.error('No coordinates data available');
    return;
  }

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: {lat: coordinates[0].lat, lng: coordinates[0].lng}, // Center the map on the first coordinate
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true, // Suppress default markers
  });

  // Add click event listeners to each name
  coordinates.forEach(coord => {
    const element = document.createElement('span');
    element.textContent = coord.name;
    element.style.cursor = 'pointer';
    element.addEventListener('click', () => {
      // Show the image when name is clicked
      const imageToShow = document.getElementById('imageToShow');
      imageToShow.src = coord.image;
      document.getElementById('imageContainer').style.display = 'block';
    });
    document.body.appendChild(element);
  });

  // Close the image when clicked outside
  document.getElementById('imageContainer').addEventListener('click', (event) => {
    if (event.target === document.getElementById('imageContainer')) {
      document.getElementById('imageContainer').style.display = 'none';
    }
  });

  // Set up waypoints
  const waypoints = coordinates.slice(1, coordinates.length - 1).map(coord => ({
    location: new google.maps.LatLng(coord.lat, coord.lng),
    stopover: true
  }));

  const origin = new google.maps.LatLng(coordinates[0].lat, coordinates[0].lng);
  const destination = new google.maps.LatLng(coordinates[coordinates.length - 1].lat, coordinates[coordinates.length - 1].lng);

  // Request directions
  directionsService.route({
    origin: origin,
    destination: destination,
    waypoints: waypoints,
    travelMode: google.maps.TravelMode.DRIVING,
  }, function (response, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

  // Add markers with labels
  for (let i = 0; i < coordinates.length; i++) {
    const marker = new google.maps.Marker({
      position: coordinates[i],
      map: map,
      label: coordinates[i].name,
    });
  }
}

showDirectionMap();
// function showDirectionMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 2,
//         center: { lat: 37.9746507, lng: 23.7219716 }, // Center the map on one of the coordinates
//     });

//     const directionsService = new google.maps.DirectionsService();
//     const directionsRenderer = new google.maps.DirectionsRenderer({
//         map: map,
//         suppressMarkers: true, // Suppress default markers
//     });

//     // Array of coordinates
//     const coordinates = [
//     { lat: 37.9356467, lng: 23.9484156, name: "1", image: "image1.jpg" },
//     { lat: 37.9746507, lng: 23.7219716, name: "2", image: "image2.jpg" },
//     { lat: 37.9759204, lng: 23.7260321, name: "3", image: "image3.jpg" },
//     { lat: 37.9743749, lng: 23.7255435, name: "4", image: "image4.jpg" },
//     { lat: 37.9703658, lng: 23.7278553, name: "5", image: "image5.jpg" },
//   ];

//   // Add click event listeners to each name
//   coordinates.forEach(coord => {
//     const element = document.createElement('span');
//     element.textContent = coord.name;
//     element.style.cursor = 'pointer';
//     element.addEventListener('click', () => {
//       // Show the image when name is clicked
//       const imageToShow = document.getElementById('imageToShow');
//       imageToShow.src = coord.image;
//       document.getElementById('imageContainer').style.display = 'block';
//     });
//     document.body.appendChild(element);
//   });

//   // Close the image when clicked outside
//   document.getElementById('imageContainer').addEventListener('click', (event) => {
//     if (event.target === document.getElementById('imageContainer')) {
//       document.getElementById('imageContainer').style.display = 'none';
//     }
//   });

//     // Set up waypoints
//     const waypoints = coordinates.slice(1, coordinates.length - 1).map(coord => ({
//         location: new google.maps.LatLng(coord.lat, coord.lng),
//         stopover: true
//     }));

//     const origin = new google.maps.LatLng(coordinates[0].lat, coordinates[0].lng);
//     const destination = new google.maps.LatLng(coordinates[coordinates.length - 1].lat, coordinates[coordinates.length - 1].lng);

//     // Request directions
//     directionsService.route({
//         origin: origin,
//         destination: destination,
//         waypoints: waypoints,
//         travelMode: google.maps.TravelMode.DRIVING,
//     }, function(response, status) {
//         if (status === 'OK') {
//             directionsRenderer.setDirections(response);
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//     });

//     // Add markers with labels
//     for (let i = 0; i < coordinates.length; i++) {
//         const marker = new google.maps.Marker({
//             position: coordinates[i],
//             map: map,
//             label: coordinates[i].name,
//         });
//     }
// }


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {lat: 37.9356467, lng: 23.9484156}, // Center the map on one of the coordinates
  });

  // Fetch JSON data
  fetch('/static/location.json')
      .then(response => response.json())
      .then(data => {
        // Add markers with labels and info windows
        data.forEach(info => createMarker(info, map));
      })
      .catch(error => console.error('Error fetching data:', error));
}


function createMarker(info, map) {
  // Define colors for different days
  const clusterColors = {
    1: "#66aa00", // Blue color for Day 1
    2: "#109618", // Green color for Day 2
    3: "#ff9900", // Orange color for Day 3
    4: "#316395", // Red color for Day 4
    5: "#990099", // Purple color for Day 5
    6: "#0099c6", // Light blue color for Day 6
    7: "#dd4477", // Pink color for Day 7
    8: "#3366cc", // Lime color for Day 8
    9: "#b82e2e", // Brown color for Day 9
    0: "#dc3912", // Dark blue color for Day 10
    // Add more colors as needed
  };

  // Create the marker with custom SVG icon
  var customMarker = new google.maps.Marker({
    position: {lat: info.lat, lng: info.long},
    map: map,
    icon: {
      url:
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' +
              clusterColors[info.cluster] + // Use cluster color
              '" width="48px" height="48px">' +
              '<path d="M12 0c-4.4 0-8 3.6-8 8 0 7 8 16 8 16s8-9 8-16c0-4.4-3.6-8-8-8zm0 11.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>' +
              // Text element for cluster number
              '<text x="50%" y="75%" text-anchor="middle" alignment-baseline="middle" fill="white" font-size="12px">' +
              info.cluster +
              "</text>" +
              "</svg>"
          ),
      scaledSize: new google.maps.Size(30, 30), // Set the size of the icon
      origin: new google.maps.Point(0, 0), // Set the origin point
      anchor: new google.maps.Point(12, 40), // Set the anchor point
    },
  });

  // Info window content
  var contentString =
      "Cluster: " + info.cluster + ", Days: " + info.days;

  // Info window
  var infowindow = new google.maps.InfoWindow({
    content:
        "<div>" +
        "<h5>" +
        info.name +
        "</h5>" +
        "<p>Day: " +
        info.days +
        "</p>" +
        "</div>",
  });

  // Add click event listener to marker
  customMarker.addListener("click", function () {
    infowindow.open(map, customMarker);
  });
}



// initMap();


 // Define leftClick and rightClick functions inline
 function leftClick() {
  var btn = document.getElementById('btn');
  var impression = document.getElementById('hotel');
  var history = document.getElementById('resturant');

  btn.style.left = '0';
  impression.style.display = 'block';
  history.style.display = 'none';
}

function rightClick() {
  var btn = document.getElementById('btn');
  var impression = document.getElementById('hotel');
  var history = document.getElementById('resturant');

  btn.style.left = '110px';
  impression.style.display = 'none';
  history.style.display = 'block';
}

// add new 
 // JavaScript to toggle visibility of content
//  document.getElementById('handle1').addEventListener('change', function() {
//   var content = document.getElementById('content1');
//   if (this.checked) {
//     content.style.display = 'block';
//   } else {
//     content.style.display = 'none';
//   }
// })