import { toggleMenuHeader } from "./modules/header-menu-toggle";
import { rebuildMenu } from "./modules/header-menu-toggle";
import { scroller } from "./modules/scroller";
import { employersBtnToggle } from "./modules/employersBtn-toggle";
import { collectionLoad } from "./modules/collection-viewAll";
import { nftLoad } from "./modules/nft-view";

toggleMenuHeader();
window.addEventListener('DOMContentLoaded', rebuildMenu);

// Вызов функции при изменении размера окна
window.addEventListener('resize', rebuildMenu);
// Бесконечная лента
scroller();
// Тогл кнопок
employersBtnToggle();
// Секция Collection -> кнопка выгрузки
collectionLoad();
// Секция NFT -> кнопка выгрузки
nftLoad();