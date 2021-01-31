'use strict'

const basicUrl = "https://developer.nps.gov/api/v1/parks"
const apiKey = "trljqBfEwdUdQqQu8TpVQdjnKEedC16GS6J7oRyf"

function formatQueryParams(params) {
  const queryItems = Object.keys(params).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

function displayResults(responseJson) {
   const numberChoice = $('#jsNumberChoice').val();
  $('#resultsList').empty();


  for(let i = 0; i < responseJson.data.length && i < numberChoice; i++) {
    $('#resultsList').append(`
      <li><h2>${responseJson.data[i].fullName}</h2></li>
      <li><p>${responseJson.data[i].description}</p></li>
      <li><a href ="${responseJson.data[i].url}">Click here to learn more directly from the website.</a></li>
      <hr>
    `)
  }
  $('.results').removeClass('hidden')
}

function getPark(query, maxResults=10) {
  const params = {
    api_key: apiKey,
    q: query,
    maxResults
  }

  const queryString = formatQueryParams(params);
  const url = basicUrl + "?" + queryString;
  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Oops! Looks like something went wrong.'))
}

function clickSearchButton() {
    $('form').submit(event => {
        event.preventDefault();
        const stateChoice = $('#jsStateChoice').val();
        const numberChoice = $('#jsNumberChoice').val();
        getPark(stateChoice, numberChoice);
    });
}

$(clickSearchButton);