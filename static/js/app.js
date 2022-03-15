/*** Fetching data -> refactor into module later ***/

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'voedingsleer';
const key = '17a9c4d4d56a41b55abc2d3096e94be4';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'default';

//const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`;

const config = {
  Authorization: `Bearer ${secret}`
};

async function getData(url) {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data;
}


function getURL(event) {
  event.preventDefault()
  topic = document.querySelector('#zoekveld').value
  console.log(topic)
  if (topic) {
    url = `${cors}${endpoint}${query}%${topic}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`
  } else {
    url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`;
  }
  console.log(topic)
  getData(url)
}


const form = document.querySelector('form')
form.addEventListener('submit', getURL)

