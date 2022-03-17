import './vendor/routie.min.js'
import { updateUI, deleteResults } from './ui.js'
import { render, renderHome, getIdFromItem } from './render.js'
import { getURL, getData, getId } from './getData.js'

export function handleRoutes() {

    routie(
        {
            '': () => {
                updateUI('home')
                deleteResults();
               // getIdFromItem()


                let url = getURL()
                getData(url).then(data => {

                    console.log(data)
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
            },
            'collectie/:id': id => {
                getId(id).then(console.log(id)
                )
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