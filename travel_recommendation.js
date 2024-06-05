function searchDestination() {
    const input = document.getElementById('destination-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const condition = data.destinations.find(item => item.name.toLowerCase() === input);
            console.log("Input:", input);
            console.log("First Destination:", data.destinations[0]);

            if (destination) {
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;
                resultDiv.innerHTML += `<h2>${destination.name}</h2>`;

                resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
                resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
                resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
                resultDiv.innerHTML = 'Destination not found.';
            }
        })
        
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function thankyou() {
    alert('Thank you for contacting us!');
}

searchBtn.addEventListener('click', searchDestination);
contactBtn.addEventListener('click', thankyou);