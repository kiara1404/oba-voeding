export function render(data, topic) {
  const markup = document.querySelector('.results')
  const titleResults = ` <h2> Resultaten voor <span>${topic}</span> </h2>`
  markup.insertAdjacentHTML("afterbegin", titleResults);


  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
      <section data-route="item-list" class="item-list">
        <a href="#collectie/${item.id}">
            <article>
              <h3>${item.titles[0]}</h3>
              <img src="${
      item.coverimages ? item.coverimages[1] : ''
      }">
            </article>
          </a>
          `;
    markup.insertAdjacentHTML('beforeend', html)

  });
}
export function renderStagingAPI(data){
  const markup = document.querySelector('.results')

  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
      <section data-route="item-list" class="item-list">
        <a href="#collectie/${item.id}">
            <article>
              <h3>${item.titles[0]}</h3>
              <img src="https://шпаковскаярб.рф/images/no_photo.png" class="no-photo  ">
            </article>
          </a>
          `;
    markup.insertAdjacentHTML('beforeend', html)

  });
}

export function renderHome(data) {
  const markup = document.querySelector('.discover-container')
  const results = data.results;
  results.forEach((item) => {
    const html = `
          <a href="#collectie/artikelen/${item.id}">
            <article>
              <h2>${item.titles[0]}</h2>
              <ul>
              <li>${item.authors}</li>
                <li>${item.publisher}</li>
                </ul>
              <p>${item.summaries}</p>
            </article>
          </a>
          `;
    markup.insertAdjacentHTML('beforeend', html);
  });

}

export function renderDetails(data) {
  const markup = document.querySelector('.list')
  const html = `
      <article class="detail" data-route="detail">
        <div>
          <h2>${data.record.titles[0]}</h2>
          <p>${data.record.authors}<p>
          <p>${data.record.year}</p>
          <p>${data.record.summaries ? data.record.summaries[0] : 'Geen samenvatting'}</p>
          </div>
          <div>
         <img src="${data.record.coverimages[1]}">
        </div<
    
      </article>  


  `
  markup.insertAdjacentHTML('beforeend', html);
}