const bar = document.getElementById('bar');
const close = document.getElementById('close');
const sideMenu = document.getElementById('sideMenu');

// Open menu
if (bar) {
  bar.addEventListener('click', (e) => {
    e.preventDefault();
    sideMenu.classList.add('active');
  });
}

// Close menu
if (close) {
  close.addEventListener('click', (e) => {
    e.preventDefault();
    sideMenu.classList.remove('active');
  });
}

// Close when clicking outside
document.addEventListener('click', (e) => {
  const isClickInside = sideMenu.contains(e.target);
  const isClickOnBar = bar.contains(e.target);
  const isNavLink = e.target.closest('.navlink');

  if (!sideMenu.classList.contains('active')) return;

  if (!isClickInside && !isClickOnBar) {
    sideMenu.classList.remove('active');
  }

  if (isClickInside && isNavLink) {
    sideMenu.classList.remove('active');
  }
});
