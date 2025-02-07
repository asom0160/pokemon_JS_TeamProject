const makeTitle = (title) => `<h2>${title}</h2>`;
const makeCategory = (category, date, color) => `        
        <div>
          <span>${category}</span><span id="date">${date}</span>
          <button style="background-color: ${color}; color: white;"><i class="fa-solid fa-arrow-right-long"></i></button>
        </div>`;
const makeImage = (image) => `<img src="${image}" alt="">`;

export const makeArticle = (v) => `
  <article style="border-bottom: 4px solid ${v.color};">
      ${makeImage(v.image)}
      <div>
        ${makeTitle(v.title)}
        ${makeCategory(v.category, v.date, v.color)}
      </div>
    </article>`;
