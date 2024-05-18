

    function initMap() {
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 37.9715285, lng: 23.7267166 }, // Center the map on one of the coordinates
});

fetch('/static/map.json')
    .then(response => response.json())
    .then(data => {
        // Iterate through JSON data
        const coordinates = data;
        // Add markers with labels and info windows
        coordinates.forEach(info => createMarker(info, map));
    })
    .catch(error => console.error('Error fetching data:', error));
}

function createMarker(info, map) {
// Define colors for different days
const singleColor = "#3366cc";

// Create the marker with custom SVG icon
var customMarker = new google.maps.Marker({
    position: { lat: info.lat, lng: info.lng },
    map: map,
    icon: {
        url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' +
                singleColor +
                '" width="48px" height="48px">' +
                '<path d="M12 0c-4.4 0-8 3.6-8 8 0 7 8 16 8 16s8-9 8-16c0-4.4-3.6-8-8-8zm0 11.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>' +
                '<path d="M18 9v7h-2V9H8V7h8l2-2"/>' + // A simple rectangle shape representing a save icon
                '<path d="M12 2.5l1.66 5.05h5.34l-4.3 3.12 1.64 5.07-4.3-3.12-4.3 3.12 1.63-5.07-4.3-3.12h5.34z" fill="#ffffff"/>' + // A star shape representing a save icon
                "</svg>"
            ),
        scaledSize: new google.maps.Size(20, 20), // Set the size of the icon
        origin: new google.maps.Point(0, 0), // Set the origin point
        anchor: new google.maps.Point(12, 40), // Set the anchor point
    },
});

// Info window content
var contentString = "Cluster: " + info.cluster + ", Days: " + info.days;

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

//
const selectedAmenities = {};

            function toggleHotelSelection(index) {
                const amenity = document.querySelectorAll('.button1')[index].textContent;
                if (selectedAmenities[amenity]) {
                    delete selectedAmenities[amenity];
                } else {
                    selectedAmenities[amenity] = true;
                }
                console.log(selectedAmenities);
            }

            function sendData() {
                const formData = new FormData();
                for (const amenity in selectedAmenities) {
                    formData.append('amenities', amenity);
                }

                fetch('http://127.0.0.1:5000/map2', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }