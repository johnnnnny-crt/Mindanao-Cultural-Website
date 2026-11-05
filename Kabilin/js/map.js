const locations = [
    {
        name: "Britania Islands",
        lat: 8.17,
        lng: 126.47,
        description: "A group of beautiful islands with white sand beaches in San Agustin, Surigao del Sur.",
        image: "../assets/images/Britania_Islands.jpg"
    },
    {
        name: "Dahican Beach",
        lat: 6.922,
        lng: 126.274,
        description: "A popular beach in Mati, Davao Oriental, known for its white sand and surfing.",
        image: "../assets/images/Dahican_Beach.jpg"
    },
    {
        name: "Enchanted River",
        lat: 8.459,
        lng: 126.354,
        description: "A famous crystal-blue river located in Hinatuan, Surigao del Sur.",
        image: "../assets/images/Enchanted_River.jpg"
    },
    {
        name: "Fort Pilar",
        lat: 6.904,
        lng: 122.083,
        description: "A historic Spanish-era fortress and cultural landmark in Zamboanga City.",
        image: "../assets/images/Fort_Pilar.jpg"
    },
    {
        name: "Lake Mainit",
        lat: 9.43,
        lng: 125.52,
        description: "One of the largest natural lakes in the Philippines, located between Surigao del Norte and Agusan del Norte.",
        image: "../assets/images/Lake_Mainit.jpg"
    },
    {
        name: "Mount Apo",
        lat: 6.987,
        lng: 125.271,
        description: "The highest mountain in the Philippines, located in Mindanao.",
        image: "../assets/images/Mount_Apo.webp"
    },
    {
        name: "Santa Cruz Island",
        lat: 6.87,
        lng: 122.06,
        description: "An island near Zamboanga City famous for its pink sand beach.",
        image: "../assets/images/Santa_Cruz_Island.jpg"
    },
    {
        name: "Siargao Island",
        lat: 9.85,
        lng: 126.05,
        description: "A tropical island in Surigao del Norte known for surfing, beaches, and natural attractions.",
        image: "../assets/images/Siargao_Island.avif"
    },
    {
        name: "Tinago Falls",
        lat: 8.161,
        lng: 124.188,
        description: "A scenic waterfall near Iligan City, surrounded by lush greenery.",
        image: "../assets/images/Tinago_Falls.jpg"
    }
];

function createMap(elementId, zoomLevel, showAllLocations) {
    const map = L.map(elementId).setView([7.7, 124.8], zoomLevel);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    const displayedLocations = showAllLocations
        ? locations
        : locations.slice(0, 3);

    displayedLocations.forEach(function(location) {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(
                "<div class='map-popup'>" +
                "<img src='" + location.image + "' alt='" + location.name + "'>" +
                "<h3>" + location.name + "</h3>" +
                "<p>" + location.description + "</p>" +
                "</div>"
            );
    });
}

if (document.getElementById("homeMap")) {
    createMap("homeMap", 7, false);
}

if (document.getElementById("fullMap")) {
    createMap("fullMap", 7, true);
}

function toggleFullscreen(mapId) {
    const mapElement = document.getElementById(mapId);

    if (!document.fullscreenElement) {
        mapElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}