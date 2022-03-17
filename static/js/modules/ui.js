
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


// functie van jron https://github.com/jornveltrop/project-1-2021/blob/main/static/js/modules/ui.js
export function deleteResults(section){
  let items =  document.querySelectorAll(`${section}`);

  items.forEach(item => {
      item.remove();
  })
}