import './vendor/routie.min.js'
import { updateUI, deleteResults, deleteTitle, goBack, showBackBtn, deleteBackBtn } from './ui.js'
import { render, renderHome, renderDetails } from './render.js'
import { getURL, getData, getId } from './getData.js'

export function handleRoutes() {

    routie(
        {
            '': () => {
                updateUI('home')
                deleteBackBtn()
                deleteResults('item-list');
                deleteResults('detail');
                if (document.querySelector('.results h2')) {
                    deleteTitle()
                }
                
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
                    goBack()
                    showBackBtn()

                    
                    
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
                    goBack()
                    showBackBtn()

                    
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