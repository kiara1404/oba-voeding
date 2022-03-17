
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
export function deleteResults() {
    let itemH2 = document.querySelector('.markup h2');
    let itemsA = document.querySelectorAll('.markup a');

    itemH2.remove()

    itemsA.forEach(item => {
        item.remove();
    })
}