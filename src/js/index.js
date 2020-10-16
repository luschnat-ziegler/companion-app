// DOM Elements

const navBar = document.querySelector('#navBar');

// Event listeners

navBar.addEventListener('click', (event) => {
    const clickedID = event.target.attributes.id.value;
    return navHandler(clickedID);
});

// NavBar logic

function navHandler(pageName) {
    let contentArea = document.querySelector('#content');
    switch (pageName) {
        case 'indexPage': 
            let currentPage = document.querySelector('#indexPage');
            contentArea.innerHTML = currentPage.innerHTML;
            break;
    
        default:
            break;
    }
};