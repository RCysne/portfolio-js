const menuHamburger = document.getElementById('btn-menu-closed')

function toggleMenu() {
  const nav = document.getElementById('menu').classList.toggle('active')
}

menuHamburger.addEventListener('click', toggleMenu)
