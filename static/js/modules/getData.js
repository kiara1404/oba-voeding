const secret = '4289fec4e962a33118340c888699438d';
const config = {
    Authorization: `Bearer ${secret}`
};


export function getURL(topic, id) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = 'voedingsleer';
    const key = '17a9c4d4d56a41b55abc2d3096e94be4';
    const detail = 'default';
    let url = ''

    if (topic) {
        url = `${cors}${endpoint}${query}%${topic}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`
    } else {
        url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`;
    }
    return url;
    
}



export async function getData(url) {

    const response = await fetch(url, config)
    const data = await response.json()
    return data;
}

export function getDataId(id){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = 'voedingsleer';
    const key = '17a9c4d4d56a41b55abc2d3096e94be4';
    const detail = 'default';
    let url = ''
    id
        ? url = `${cors}${endpoint}${id}&authorization=${key}&output=json`
        : url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`
        
        fetch(url)
        .then(data => console.log(id, data))
    }