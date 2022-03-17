export function render(data, topic) {
  const markup = document.querySelector('.markup')
  const titleResults = ` <h2> Resultaten voor <span>${topic}</span> </h2>`
  markup.insertAdjacentHTML("afterbegin", titleResults);


  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
        <a href=":id">
            <article>
              <h3>${item.titles[0]}</h3>
              <img src="${
      item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
      }">
            </article>
          </a href=":id">
          `;
    markup.insertAdjacentHTML('beforeend', html)

  });
}

export function renderHome(data) {
  const markup = document.querySelector('.discover-container')
  const results = data.results;
  results.forEach((item, i) => {
    const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <img src="${
      item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
      }">
            </article>
          `;
    markup.insertAdjacentHTML('beforeend', html);
  });

}
