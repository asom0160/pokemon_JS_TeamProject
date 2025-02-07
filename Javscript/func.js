import { makeArticle } from "./components/card.js";

const cardbox = document.querySelector("#cardbox");
const moreBtn = document.querySelector("#moreBtn");

// ✅ 카드 생성 함수
const makeLinkCard = (v) => ` 
  <a href="${v.link}">
    ${makeArticle(v)}
  </a>`;

export const loadCards = (filteredData) => {
  cardbox.innerHTML = "";
  moreBtn.style.display = filteredData.length > 8 ? "block" : "none";

  const addMoreCards = () => {
    const currentCount = cardbox.childElementCount; // 현재 표시된 카드 개수
    const nextCards = filteredData
      .slice(currentCount, currentCount + 8)
      .map(makeLinkCard)
      .join("");

    cardbox.insertAdjacentHTML("beforeend", nextCards);

    if (cardbox.childElementCount >= filteredData.length) {
      moreBtn.style.display = "none";
    }
  };

  addMoreCards();
  moreBtn.onclick = addMoreCards;
};
