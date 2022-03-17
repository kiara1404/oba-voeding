import './vendor/routie.min.js'
import { updateUI, deleteResults, deleteTitle } from './ui.js'
import { render, renderHome, renderDetails } from './render.js'
import { getURL, getData, getId } from './getData.js'

export function handleRoutes() {

    routie(
        {
            '': () => {
                updateUI('home')
                deleteResults('item-list');
                deleteResults('detail')
               // getIdFromItem()


                let url = getURL()
                getData(url).then(data => {

                    console.log(data)
                    renderHome(data)
                })

            },

            'search/:topic': 
            
            topic => {
                let topicURL = getURL(topic)
                console.log(topic)
                

                getData(topicURL).then(data => {
                    updateUI('results')
                    deleteResults('detail')
                    
                    
                    render(data, topic)
                    console.log(data)
                })
            },
            'collectie/:id': id => {
                getId(id).then(data => {console.log(data)
                    updateUI('list')
                    deleteResults('item-list')
                    if(document.querySelector('.results h2')){
                        deleteTitle()
                    }
                    
                renderDetails(data)}

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