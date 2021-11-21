// 21-11-2021

// fixed menu
const menu = document.getElementById('menu')

// logo
const logo = document.getElementById('logo')

window.addEventListener('scroll', () => {
    if(window.pageYOffset < 65){

        menu.className = ''
        logo.className = ''
    } else if(window.pageYOffset > 70) {

        setTimeout( () => {
            
            menu.className = 'fixed'
            logo.className = 'fixed'
        }, 10)
    }
});

// slider 
