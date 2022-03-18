import './vendor/routie.min.js'
import { updateUI, deleteResults, deleteTitle, goBack, showBackBtn, deleteBackBtn } from './ui.js'
import { render, renderHome, renderDetails, renderStagingAPI } from './render.js'
import { getURL, getData, getId, stagingAPI, getStagingURL, getStagingId } from './getData.js'

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

                let url = getStagingURL()
                stagingAPI(url).then(data => {
                    console.log(data)
                    renderHome(data)
                })

            },

            'search/:topic':

                topic => {
                    let topicURL = getURL(topic)
                    let stagingTopic = getStagingURL(topic)
                    console.log(topicURL)

                    getData(topicURL).then(data => {
                        updateUI('results')
                        deleteResults('detail')
                        showBackBtn()
                        goBack()
                        render(data, topic)
                    })

                    stagingAPI(stagingTopic).then(data => {
                        updateUI('results')
                        renderStagingAPI(data)
                    })
                },
            'collectie/:id': id => {
                getId(id).then(data => {
                    console.log(data)
                    updateUI('list')
                    deleteResults('item-list')

                    if (document.querySelector('.results h2')) {
                        deleteTitle()
                    }
                    goBack()
                    showBackBtn()


                    renderDetails(data)
                }

                )

            },
            'collectie/artikelen/:id': id => {
                getStagingId(id).then(data => {
                    console.log(data)
                })
            }

        }
    )
}
// Hulp & functie van Jorn
function searchField(event) {
    event.preventDefault();

    let searchValue = document.querySelector('input').value;
    routie(`search/${searchValue}`);
}

const form = document.querySelector('form');
form.addEventListener('submit', searchField);