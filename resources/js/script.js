const sideNav = document.getElementById('sidenav');
const mainContent = document.getElementById('main-content');
const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    sideNav.style.width = "20%";
    mainContent.style.marginLeft = "20%";
    openButton.style.display = 'none';
}
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    sideNav.style.width = "0";
    mainContent.style.marginLeft = "0";
    openButton.style.display = 'block';
}

openButton.onclick = openNav;
closeButton.onclick = closeNav;