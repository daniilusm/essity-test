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
        this.burgerMenu.children[0].classList.add('menu-open');
        this.burgerMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.rootElement.style.pointerEvents = 'none';
      });
      if (this.burgerCross) {
        this.burgerCross.addEventListener('click', () => {
          this.burgerMenu.children[0].classList.remove('menu-open');
          this.burgerMenu.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          this.rootElement.style.pointerEvents = 'all';
        });
      }
    }
  }
}

export default BurgerMenu;
