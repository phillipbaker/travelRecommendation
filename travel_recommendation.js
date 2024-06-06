const searchBtn = document.getElementById('search-btn');
const contactBtn = document.getElementById('contact-btn');
const clearBtn = document.getElementById('clear-btn');

function searchDestination() {
    const input = document.getElementById('destination-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const countries = ['country', 'countries'];
            const beaches = ['beach', 'beaches'];
            const temples = ['temple', 'temples'];

            if (countries.includes(input.toLowerCase())) {
                for (let i = 0; i < data.countries.length; i++) {
                    for (let j = 0; j < data.countries[i].cities.length; j++) {
                        resultDiv.innerHTML += `<img src="${data.countries[i].cities[j].imageUrl}" width="400" height="200" alt="">`;
                        resultDiv.innerHTML += `<h2>${data.countries[i].cities[j].name}</h2>`;
                        resultDiv.innerHTML += `<p>${data.countries[i].cities[j].description}</p>`;
                    }
                }
            } else if (beaches.includes(input.toLowerCase())) {
                for (let i = 0; i < data.beaches.length; i++) {
                    resultDiv.innerHTML += `<img src="${data.beaches[i].imageUrl}" width="400" height="200" alt="">`;
                    resultDiv.innerHTML += `<h2>${data.beaches[i].name}</h2>`;
                    resultDiv.innerHTML += `<p>${data.beaches[i].description}</p>`;
                }
            } else if (temples.includes(input.toLowerCase())) {
                for (let i = 0; i < data.temples.length; i++) {
                    resultDiv.innerHTML += `<img src="${data.temples[i].imageUrl}" width="400" height="200" alt="">`;
                    resultDiv.innerHTML += `<h2>${data.temples[i].name}</h2>`;
                    resultDiv.innerHTML += `<p>${data.temples[i].description}</p>`;
                }
            } else {
                resultDiv.innerHTML = 'Destination not found.';
            }
        })
        
        .catch(error => {
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

searchBtn.addEventListener('click', searchDestination);

function thankyou() {
    alert('Thank you for contacting us!');
}

contactBtn.addEventListener('click', thankyou);

function clear() {
    const input = document.getElementById('destination-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    input = "";
    resultDiv.innerHTML = "";
}

clearBtn.addEventListener('click', clear);