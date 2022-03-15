import './vendor/routie.min.js'
import { updateUI } from './ui.js'
import { render } from './render.js'
import { getURL, getData } from './getData.js'

export function handleRoutes() {

    routie(
        {
            '': updateUI('home'),
            
            'search/:topic': topic => {
                let topicURL = getURL(topic)
                console.log(topicURL)

                getData(topicURL).then(data => {
                    updateUI('markup')
                    render(data)
                    console.log(data)
                })

            }
        }
    )
}

function searchField(event) {
    event.preventDefault();

    let searchValue = document.querySelector('input').value;
    routie(`search/${searchValue}`);
}

const form = document.querySelector('form');
form.addEventListener('submit', searchField);