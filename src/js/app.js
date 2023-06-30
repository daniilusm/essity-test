import {
  isWebp,
  togglePopupWindows,
  fixedNavPage,
  swiper,
  gallerySwiper,
} from './modules';

import BurgerMenu from './modules/BurgerMenu';
import DropDown from './modules/DropDown';

import Tabs from './modules/Tabs';

isWebp();
const burger = new BurgerMenu().init();
const dropdown = new DropDown().init();

swiper.init();
gallerySwiper.init();

console.info(burger);

togglePopupWindows();
fixedNavPage();

const tabs = new Tabs('stories-page', {});
