//----------------------------------------
// import
//----------------------------------------

import { mdcAutoInit } from '@material/auto-init';
import { MDCBanner } from '@material/banner';
import { MDCComponent, MDCFoundation } from '@material/base';
import { MDCCheckbox } from '@material/checkbox';
import { MDCChip } from '@material/chips';
import { MDCCircularProgress } from '@material/circular-progress';
import { MDCDataTable } from '@material/data-table';
import { MDCDialog } from '@material/dialog';
import * as ponyfill from '@material/dom/ponyfill';
import { MDCDrawer } from '@material/drawer';
import { MDCFloatingLabel } from '@material/floating-label';
import { MDCFormField } from '@material/form-field';
import { MDCLineRipple } from '@material/line-ripple';
import { MDCLinearProgress } from '@material/linear-progress';
import { MDCList } from '@material/list';
import { MDCMenuSurface } from '@material/menu-surface';
import { MDCMenu } from '@material/menu';
import { MDCNotchedOutline } from '@material/notched-outline';
import { MDCRadio } from '@material/radio';
import { MDCRipple } from '@material/ripple';
import { MDCSegmentedButton } from '@material/segmented-button';
import { MDCSelect } from '@material/select';
import { MDCSlider } from '@material/slider';
import { MDCSnackbar } from '@material/snackbar';
import { MDCSwitch } from '@material/switch';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTabIndicator } from '@material/tab-indicator';
import { MDCTabScroller } from '@material/tab-scroller';
import { MDCTab } from '@material/tab';
import { MDCTextField } from '@material/textfield';
import { MDCTooltip } from '@material/tooltip';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCIconButtonToggle } from '@material/icon-button';
import './scss/styles.scss';

//----------------------------------------
// instantiation
//----------------------------------------

// Drawer
//----------------------------------------

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const listEl = document.querySelector('.mdc-drawer .mdc-deprecated-list');
const mainContentEl = document.querySelector('.main-content');

listEl.addEventListener('click', (event) => {
  drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  mainContentEl.querySelector('input, button').focus();
});

// Menu
//----------------------------------------

const menuEls = Array.from(document.querySelectorAll('.mdc-menu'));
menuEls.forEach((menuEl) => {
  const menu = new MDCMenu(menuEl);
  const dropdownToggle = menuEl.parentElement.querySelector('#menu-button');
  dropdownToggle.addEventListener('click', () => {
    menu.open = !menu.open;
  });
});

// Tab bar
//----------------------------------------

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// Top app bar
//----------------------------------------

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

// Ripple
//----------------------------------------

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el);
});
ripples.unbounded = true;

// List
//----------------------------------------

const list = new MDCList(document.querySelector('.mdc-deprecated-list'));

// Related site drawer
//----------------------------------------

const appBarEl = document.querySelector('.global-sub-header-drawer');
const appBar = MDCTopAppBar.attachTo(appBarEl);
const toggleButton = document.querySelector('.link-drawer-button');
const iconToggle = new MDCIconButtonToggle(
  document.querySelector('.link-drawer-button')
);

toggleButton.addEventListener('click', function () {
  appBarEl.classList.toggle('is-shown');
});

// Scroll to top button
//----------------------------------------

const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
const scrollToButton = document.getElementById('back-to-top');

window.addEventListener('scroll', (event) => {
  if (window.scrollY > 50) {
    scrollToButton.classList.remove('mdc-fab--exited');
  } else {
    scrollToButton.classList.add('mdc-fab--exited');
  }
});

scrollToButton.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});

//
//----------------------------------------

const listItemRipples = list.listElements.map(
  (listItemEl) => new MDCRipple(listItemEl)
);
