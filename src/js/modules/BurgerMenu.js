class BurgerMenu {
  constructor() {
    this.burgerButton = document.querySelector('.burger-button');
    this.burgerMenu = document.querySelector('.burger-menu');
    this.burgerCross = document.getElementById('burger-cross');
    this.rootElement = document.querySelector('.root');
  }

  init() {
    if (this.burgerButton) {
      this.burgerButton.addEventListener('click', () => {
        this.burgerMenu.firstElementChild.classList.add('menu-open');
        this.burgerMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      });
      if (this.burgerCross) {
        this.burgerCross.addEventListener('click', () => {
          this.burgerMenu.firstElementChild.classList.remove('menu-open');
          this.burgerMenu.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
      }
    }
  }
}

export default BurgerMenu;
