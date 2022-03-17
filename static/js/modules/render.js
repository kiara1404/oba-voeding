export function render(data, topic) {
  const markup = document.querySelector('.markup')
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
        <section>
        <h2> Resultaten voor <span>${topic}</span> </h2>
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${
      item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
      }">
            </article>
          </section>
          `;
    markup.insertAdjacentHTML('beforeend', html);
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
