import { isWebp, togglePopupWindows, fixedNavPage } from './modules';

import BurgerMenu from './modules/BurgerMenu';
import DropDown from './modules/DropDown';

import Tabs from './modules/Tabs';
isWebp();
new BurgerMenu().init();
new DropDown().init();

togglePopupWindows();
fixedNavPage();

const tabs = new Tabs('stories-page', {});
