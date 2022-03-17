import './vendor/routie.min.js'
import { updateUI, deleteResults } from './ui.js'
import { render, renderHome } from './render.js'
import { getURL, getData } from './getData.js'

export function handleRoutes() {

    routie(
        {
            '': () => {
                updateUI('home')
                deleteResults();

                let url = getURL()
                getData(url).then(data => {
                    renderHome(data)
                })

            },

            'search/:topic': topic => {
                let topicURL = getURL(topic)
                console.log(topic)

                getData(topicURL).then(data => {
                    updateUI('markup')
                    render(data, topic)
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