class BurgerMenu {
  constructor() {
    this.burgerButton = document.getElementById('burger-icon');
  }

  init() {
    if (this.burgerButton) {
      this.burgerButton.addEventListener('click', ({ target }) => {
        if (target.closest('#burger-icon')) {
          target.nextElementSibling.classList.add('menu-open');
        }
      });
      if (this.burgerButton.nextElementSibling) {
        const crossElem = this.burgerButton.nextElementSibling.children[0];
        crossElem.addEventListener('click', ({ target }) => {
          const burgerMenu = target.parentElement.parentElement;
          burgerMenu.classList.remove('menu-open');
        });
      }
    }
  }
}

export default BurgerMenu;
