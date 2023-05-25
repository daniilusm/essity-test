class DropDown {
  constructor() {
    this.dropdownItems = document.querySelectorAll('.dropdown');
  }

  init() {
    if (this.dropdownItems.length > 0) {
      this.dropdownItems.forEach((item) => {
        item.firstElementChild.addEventListener('click', ({ target }) => {
          if (target.nextElementSibling.style.display === 'none') {
            target.nextElementSibling.style.display = 'block';
            target.classList.add('rotate180');
          } else {
            target.nextElementSibling.style.display = 'none';
            target.classList.remove('rotate180');
          }
        });
      });
    }
  }
}

export default DropDown;
