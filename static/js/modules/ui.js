
export function updateUI(route) {
    const sections = document.querySelectorAll('section');
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log(activeSection)
    sections.forEach(section => {
        section.classList.remove('active')
    });

    activeSection.classList.add('active')
}

// bron: https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/examples/modules/static/js/modules/ui.js


// functie en hulp van jron https://github.com/jornveltrop/project-1-2021/blob/main/static/js/modules/ui.js
export function deleteResults(section) {
    
    // let itemsA = document.querySelectorAll('.markup a');
    let items = document.querySelectorAll(`.${section}`)
    //  itemH2.remove()

    items.forEach(item => item.remove())

    console.log('succesfully deleted', `${section}`)
}

export function deleteTitle(){
     let itemH2 = document.querySelector('.results h2');
     itemH2.remove()
     console.log('succesfully deleted h2')
}

export function goBack() {
    const backBtn = document.querySelector('.goBack')

    backBtn.addEventListener('click', () => {
        history.back()
        
    })
}

export function showBackBtn(){
    const backBtn = document.querySelector('.goBack')
    backBtn.classList.add('active')
}

export function deleteBackBtn(){
    const backBtn = document.querySelector('.goBack')
    backBtn.classList.remove('active')
}