import { toggleMenuHeader } from "./modules/header-menu-toggle";
import { rebuildMenu } from "./modules/header-menu-toggle";

toggleMenuHeader();
window.addEventListener('DOMContentLoaded', rebuildMenu);

// Вызов функции при изменении размера окна
window.addEventListener('resize', rebuildMenu);