const secret = '4289fec4e962a33118340c888699438d';
const config = {
    Authorization: `Bearer ${secret}`
};




export function getURL(topic) {
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


export async function getId(id) {

    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/details/?id=';
    const key = '8854ebaac6d5b76ab5a25a372d249680';
    // hulp van Jorn
    let url = `${cors}${endpoint}${id}&authorization=${key}&output=json`;

    const response = await fetch(url, config)
    const data = await response.json()
    return data;

}

export async function getStagingId(id){
    let url = `http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/?id=${id}&authorization=${key}&output=json`
    console.log(url)
    const response = await fetch(url, config)
    const data = await response.json()
    console.log('test')
    return data;
}

export function getStagingURL(topic){
    const query = 'voeding';
    const key = '17a9c4d4d56a41b55abc2d3096e94be4';
    let url = ''

    if(topic) {
        url = `http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+${topic}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`

     } else {
        url = `http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}&output=json`
    }
    console.log(url)
    return url;
}


// hulp van Jody gkregen  https://github.com/jody29/project-1-2021/blob/main/src/js/modules/getData.js
export async function stagingAPI(url) {

    const response = await fetch(url, config)
    const data = await response.json()
    return data;
}
    