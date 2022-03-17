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
   //const extra = '+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization='
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

// export function getDataNew(url) {

//     const cors = 'https://cors-anywhere.herokuapp.com/';    
//    // let url = 'https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voedingsleer+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0'

//     const response = await fetch(url, config)
//     const data = await response.json()
//     return data;
// }

export async function getOtherData(){
    const cors = 'https://cors-anywhere.herokuapp.com/';
   
    const query = 'voedingsleer';
    const key = '17a9c4d4d56a41b55abc2d3096e94be4';
     let url = `${cors}https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${query}+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=${key}`

    const response = await fetch(url)
    const data = await response.json()
    return data;
}