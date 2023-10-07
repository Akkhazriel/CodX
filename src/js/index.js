import { toggleMenuHeader } from "./modules/header-menu-toggle";
import { rebuildMenu } from "./modules/header-menu-toggle";
import { scroller } from "./modules/scroller";
import { employersBtnToggle } from "./modules/employersBtn-toggle";

toggleMenuHeader();
window.addEventListener('DOMContentLoaded', rebuildMenu);

// Вызов функции при изменении размера окна
window.addEventListener('resize', rebuildMenu);

scroller();
employersBtnToggle();