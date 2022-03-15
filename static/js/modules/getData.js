const config = {
    Authorization: `Bearer ${secret}`
};

function setURL(topic) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = 'voedingsleer';
    const key = '17a9c4d4d56a41b55abc2d3096e94be4';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'default';

    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json&refine=true`;

}


async function getData(url) {
    fetch(url, config)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

