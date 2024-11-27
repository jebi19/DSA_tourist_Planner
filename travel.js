const graph = {
    'Chennai': { 'Madurai': 450, 'Coimbatore': 500, 'Kanyakumari': 700, 'Ooty': 550, 'Pondicherry': 150, 'Tiruchirapalli': 320, 'Salem': 210, 'Thiruchendur': 660, 'Thanjavur': 350, 'Mayiladuthurai': 430, 'Cuddalore': 190, 'Tenkasi': 560, 'Kodaikanal': 550, 'Mahabalipuram': 60, 'Ramanathapuram': 580, 'Dhanushkodi': 670 },
    'Madurai': { 'Chennai': 450, 'Coimbatore': 170, 'Kanyakumari': 240, 'Ooty': 290, 'Pondicherry': 320, 'Tiruchirapalli': 130, 'Salem': 240, 'Thiruchendur': 320, 'Thanjavur': 120, 'Mayiladuthurai': 220, 'Cuddalore': 290, 'Tenkasi': 150, 'Kodaikanal': 200, 'Mahabalipuram': 470, 'Ramanathapuram': 200, 'Dhanushkodi': 300 },
    'Coimbatore': { 'Chennai': 500, 'Madurai': 170, 'Kanyakumari': 250, 'Ooty': 85, 'Pondicherry': 400, 'Tiruchirapalli': 150, 'Salem': 190, 'Thiruchendur': 550, 'Thanjavur': 250, 'Mayiladuthurai': 320, 'Cuddalore': 270, 'Tenkasi': 370, 'Kodaikanal': 240, 'Mahabalipuram': 460, 'Ramanathapuram': 300, 'Dhanushkodi': 500 },
    'Kanyakumari': { 'Chennai': 700, 'Madurai': 240, 'Coimbatore': 250, 'Ooty': 340, 'Pondicherry': 550, 'Tiruchirapalli': 300, 'Salem': 370, 'Thiruchendur': 120, 'Thanjavur': 310, 'Mayiladuthurai': 390, 'Cuddalore': 340, 'Tenkasi': 120, 'Kodaikanal': 370, 'Mahabalipuram': 660, 'Ramanathapuram': 130, 'Dhanushkodi': 150 },
    'Ooty': { 'Chennai': 550, 'Madurai': 290, 'Coimbatore': 85, 'Kanyakumari': 340, 'Pondicherry': 450, 'Tiruchirapalli': 250, 'Salem': 130, 'Thiruchendur': 580, 'Thanjavur': 300, 'Mayiladuthurai': 380, 'Cuddalore': 340, 'Tenkasi': 350, 'Kodaikanal': 140, 'Mahabalipuram': 500, 'Ramanathapuram': 340, 'Dhanushkodi': 400 },
    'Pondicherry': { 'Chennai': 150, 'Madurai': 320, 'Coimbatore': 400, 'Kanyakumari': 550, 'Ooty': 450, 'Tiruchirapalli': 280, 'Salem': 320, 'Thiruchendur': 520, 'Thanjavur': 270, 'Mayiladuthurai': 340, 'Cuddalore': 120, 'Tenkasi': 460, 'Kodaikanal': 440, 'Mahabalipuram': 160, 'Ramanathapuram': 430, 'Dhanushkodi': 550 },
   'Tiruchirapalli': { 'Chennai': 320, 'Madurai': 130, 'Coimbatore': 150, 'Kanyakumari': 300, 'Ooty': 250, 'Pondicherry': 280, 'Salem': 90, 'Thiruchendur': 620, 'Thanjavur': 60, 'Mayiladuthurai': 140, 'Cuddalore': 230, 'Tenkasi': 340, 'Kodaikanal': 230, 'Mahabalipuram': 340, 'Ramanathapuram': 280, 'Dhanushkodi': 310 },
    'Salem': { 'Chennai': 210, 'Madurai': 240, 'Coimbatore': 190, 'Kanyakumari': 370, 'Ooty': 130, 'Pondicherry': 320, 'Tiruchirapalli': 90, 'Thiruchendur': 580, 'Thanjavur': 180, 'Mayiladuthurai': 260, 'Cuddalore': 250, 'Tenkasi': 330, 'Kodaikanal': 220, 'Mahabalipuram': 320, 'Ramanathapuram': 290, 'Dhanushkodi': 370 },
    'Thiruchendur': { 'Chennai': 660, 'Madurai': 320, 'Coimbatore': 550, 'Kanyakumari': 120, 'Ooty': 580, 'Pondicherry': 520, 'Tiruchirapalli': 620, 'Salem': 580, 'Thanjavur': 450, 'Mayiladuthurai': 480, 'Cuddalore': 470, 'Tenkasi': 120, 'Kodaikanal': 540, 'Mahabalipuram': 670, 'Ramanathapuram': 90, 'Dhanushkodi': 110 },
    'Thanjavur': { 'Chennai': 350, 'Madurai': 120, 'Coimbatore': 250, 'Kanyakumari': 310, 'Ooty': 300, 'Pondicherry': 270, 'Tiruchirapalli': 60, 'Salem': 180, 'Thiruchendur': 450, 'Mayiladuthurai': 80, 'Cuddalore': 140, 'Tenkasi': 260, 'Kodaikanal': 270, 'Mahabalipuram': 360, 'Ramanathapuram': 130, 'Dhanushkodi': 250 },
    'Mayiladuthurai': { 'Chennai': 430, 'Madurai': 220, 'Coimbatore': 320, 'Kanyakumari': 390, 'Ooty': 380, 'Pondicherry': 340, 'Tiruchirapalli': 140, 'Salem': 260, 'Thiruchendur': 480, 'Thanjavur': 80, 'Cuddalore': 50, 'Tenkasi': 300, 'Kodaikanal': 320, 'Mahabalipuram': 430, 'Ramanathapuram': 230, 'Dhanushkodi': 340 },
    'Cuddalore': { 'Chennai': 190, 'Madurai': 290, 'Coimbatore': 270, 'Kanyakumari': 340, 'Ooty': 340, 'Pondicherry': 120, 'Tiruchirapalli': 230, 'Salem': 250, 'Thiruchendur': 470, 'Thanjavur': 140, 'Mayiladuthurai': 50, 'Tenkasi': 280, 'Kodaikanal': 310, 'Mahabalipuram': 190, 'Ramanathapuram': 280, 'Dhanushkodi': 350 },
    'Tenkasi': { 'Chennai': 560, 'Madurai': 150, 'Coimbatore': 370, 'Kanyakumari': 120, 'Ooty': 350, 'Pondicherry': 460, 'Tiruchirapalli': 340, 'Salem': 330, 'Thiruchendur': 120, 'Thanjavur': 260, 'Mayiladuthurai': 300, 'Cuddalore': 280, 'Kodaikanal': 90, 'Mahabalipuram': 470, 'Ramanathapuram': 150, 'Dhanushkodi': 220 },
    'Kodaikanal': { 'Chennai': 550, 'Madurai': 200, 'Coimbatore': 240, 'Kanyakumari': 370, 'Ooty': 140, 'Pondicherry': 440, 'Tiruchirapalli': 230, 'Salem': 220, 'Thiruchendur': 540, 'Thanjavur': 270, 'Mayiladuthurai': 320, 'Cuddalore': 310, 'Tenkasi': 90, 'Mahabalipuram': 470, 'Ramanathapuram': 250, 'Dhanushkodi': 300 },
    'Mahabalipuram': { 'Chennai': 60, 'Madurai': 470, 'Coimbatore': 460, 'Kanyakumari': 660, 'Ooty': 500, 'Pondicherry': 160, 'Tiruchirapalli': 340, 'Salem': 320, 'Thiruchendur': 670, 'Thanjavur': 360, 'Mayiladuthurai': 430, 'Cuddalore': 190, 'Tenkasi': 470, 'Kodaikanal': 470, 'Ramanathapuram': 480, 'Dhanushkodi': 560 },
    'Ramanathapuram': { 'Chennai': 580, 'Madurai': 200, 'Coimbatore': 300, 'Kanyakumari': 130, 'Ooty': 340, 'Pondicherry': 430, 'Tiruchirapalli': 280, 'Salem': 290, 'Thiruchendur': 90, 'Thanjavur': 130, 'Mayiladuthurai': 230, 'Cuddalore': 280, 'Tenkasi': 150, 'Kodaikanal': 250, 'Mahabalipuram': 480, 'Dhanushkodi': 200 },
    'Dhanushkodi': { 'Chennai': 670, 'Madurai': 300, 'Coimbatore': 500, 'Kanyakumari': 150, 'Ooty': 400, 'Pondicherry': 550, 'Tiruchirapalli': 310, 'Salem': 370, 'Thiruchendur': 110, 'Thanjavur': 250, 'Mayiladuthurai': 340, 'Cuddalore': 350, 'Tenkasi': 220, 'Kodaikanal': 300, 'Mahabalipuram': 560, 'Ramanathapuram': 200 }
};

function dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const nodes = new Set(Object.keys(graph));

    nodes.forEach(node => {
        distances[node] = Infinity;
        previous[node] = null;
     });

    distances[start] = 0;

    while (nodes.size > 0) {
        const closestNode = Array.from(nodes).reduce((closest, node) =>
                    distances[node] < distances[closest] ? node : closest);
        nodes.delete(closestNode);

                if (distances[closestNode] === Infinity) break;

                for (const neighbor in graph[closestNode]) {
                    const alternative = distances[closestNode] + graph[closestNode][neighbor];
                    if (alternative < distances[neighbor]) {
                        distances[neighbor] = alternative;
                        previous[neighbor] = closestNode;
                    }
                }
            }

            const path = [];
            let currentNode = end;
            while (previous[currentNode]) {
                path.unshift(currentNode);
                currentNode = previous[currentNode];
            }
            path.unshift(start);

            return { path, distance: distances[end] };
        }

        function initMap() {
            const map = L.map('map').setView([10.9, 78.1], 7); 

            const bounds = [[7.9, 76.0], [13.5, 80.5]];

            map.setMaxBounds(bounds);
            map.fitBounds(bounds);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            const markerPositions = {
                'Chennai': [13.0827, 80.2707],
                'Madurai': [9.9399, 78.1197],
                'Coimbatore': [11.0168, 76.9558],
                'Kanyakumari': [8.0883, 77.5385],
                'Ooty': [11.4064, 76.6932],
                'Pondicherry': [11.9416, 79.8083],
                'Tiruchirapalli': [10.7905, 78.7047],
                'Salem': [11.6643, 78.1460],
                'Thiruchendur': [8.4560, 77.4237],
                'Thanjavur': [10.7905, 79.1386],
                'Mayiladuthurai': [11.1100, 79.6486],
                'Cuddalore': [11.7461, 79.7644],
                'Tenkasi': [8.9704, 77.2700],
                'Kodaikanal': [10.2387, 77.4891],
                'Mahabalipuram': [12.6204, 80.1805],
                'Ramanathapuram': [9.3588, 78.5846],
                'Dhanushkodi': [9.2514, 79.1621]
            };

            for (const location in markerPositions) {
                L.marker(markerPositions[location])
                    .addTo(map)
                    .bindPopup(location);
            }
           
            document.getElementById('find-route').addEventListener('click', () => {
                const start = document.getElementById('start-location').value.trim();
                const end = document.getElementById('end-location').value.trim();

                if (graph[start] && graph[end]) {
                    const { path: shortestPath, distance } = dijkstra(start, end);

                    document.getElementById('route-info').innerHTML =
                        `<p>Shortest path: ${shortestPath.join(' -> ')}</p><p>Distance: ${distance} km</p>`;

                    const shortestPathCoordinates = shortestPath.map(location => markerPositions[location]);
                    const directPathCoordinates = [markerPositions[start], markerPositions[end]];

                    L.polyline(shortestPathCoordinates, { color: 'red' }).addTo(map);

                    L.polyline(directPathCoordinates, { color: 'blue' }).addTo(map);
                    
                } else {
                    document.getElementById('route-info').innerHTML = `<p>Invalid locations. Please ensure the locations are correct.</p>`;
                }
            });
        }

window.onload = initMap;