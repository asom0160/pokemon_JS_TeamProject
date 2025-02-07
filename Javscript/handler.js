import { data } from "./data.js";
import { loadCards } from "./func.js";

// 카테고리별로 필터
const dataFilter = (x) => data.filter((v) => v.category === x);
// 카테고리 이동
const elements = [
  { btnId: "#all" },
  { btnId: "#news", category: "공지" },
  { btnId: "#game", category: "게임" },
  { btnId: "#cardgame", category: "카드 게임" },
  { btnId: "#event", category: "이벤트" },
  { btnId: "#movie", category: "애니 & 영화" },
  { btnId: "#goods", category: "상품" },
];

// 카테고리 분류 및 언더바 색깔
export const clickEvent = () => {
  const elementsObjArr = elements;
  elementsObjArr.forEach((v) => {
    const choice = document.querySelector(v.btnId);

    choice.addEventListener("click", () => {
      loadCards(v.btnId === "#all" ? data : dataFilter(v.category));

      elementsObjArr.forEach((v) => {
        resetCategory(document.querySelector(v.btnId));
      });
      chooseCategory(choice);
    });
  });
};

const resetCategory = (category) => {
  category.style.borderBottom = "4px solid white";
  category.style.color = "#b3b3b3";
};

const chooseCategory = (category) => {
  category.style.borderBottom = "4px solid red";
  category.style.color = "black";
};

document.getElementById("category").addEventListener("change", (e) => {
  const selectorValue = e.target.value;
  loadCards(selectorValue === "전체" ? data : dataFilter(selectorValue));
});
