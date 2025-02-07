import { data } from "./data.js";
import { loadCards } from "./func.js";
import { clickEvent } from "./handler.js";

// 초기화면 (전체 데이터)
loadCards(data);
clickEvent();
