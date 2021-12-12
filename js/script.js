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
const slider = document.querySelectorAll('#slider li')

let counter = 0

setInterval(() => {
    
    if(counter < slider.length-1){

        counter++
    } else {

        counter = 0
    }

    for(let i = 0; i < slider.length; i++){

        for(let k = 0; k< slider.length; k++){
            
            slider[k].className = ''

            slider[counter].className = 'active'
        }
    }

}, 8000)

const body = document.getElementsByTagName('body')[0]

const close = document.getElementById('close')

// menu
const navButton = document.getElementById('nav-button')
const nav = document.getElementById('nav')

navButton.addEventListener('click', () => {

    nav.className = 'active'
    close.className = 'active'
    body.className = 'fixed'
})

// search
const searchButton = document.getElementById('search-button')
const search = document.getElementById('search')

searchButton.addEventListener('click', () => {

    search.className = 'active'
    close.className = 'active'
    body.className = 'fixed'
})

// закриваємо вікно по натисканню на хрестик
close.addEventListener('click', () => {

    nav.className = ''
    search.className = ''
    close.className = ''
    body.className = ''
})

// закриваємо вікно ескейпом
document.addEventListener('keydown', event => {

    if(event.code === 'Escape' || event.key === 'Escape'){
        nav.className = ''
        search.className = ''
        close.className = ''
        body.className = ''
    }
    
})

// https://lvivduncan.github.io/levus-skills/
// 20-09-2020 levus-skills
{
    const skills = document.querySelectorAll('.levus-skills')

    if(skills.length > 0){
    
        const start = document.documentElement.clientHeight
    
        window.addEventListener('scroll', () => {
    
            const change = Math.floor(skills[0].getBoundingClientRect().top)
    
            const sum = Math.floor(start - change + 10)
    
            if (sum === 0 || sum === 1 || sum === 2 || sum === 3 || sum === 4 || sum === 5 || sum === 6 || sum === 7) {
                skills.forEach(skill => delay(skill, skill.dataset.result, skill.dataset.speed))
            }
        });
    
        function delay(selector, num = 2, speed = 1){
    
            for (let index = 0; index <= num; index++) {
    
                setTimeout( () => {
                    selector.innerHTML = index          
                }, index * speed * 30)
            }
        }

    }
}

// scroll - services
{
    // scroll
    const scroll = document.querySelectorAll('.levus-horizontal-scroll')

    scroll.forEach(item => {
        const ul = item.querySelector('ul')

        // elements
        let li = ul.querySelectorAll('li')

        // if less than 4, cloned 
        if (li.length <= 4) {

            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)))

            // new nodelist
            li = item.querySelectorAll('li')
        }

        item.innerHTML += '<div class="levus-nav"><span class="left"></span><span class="right"></span></div>'

        item.addEventListener('click', e => {

            const ul = item.querySelector('ul')

            if (e.target.className == 'left') {
                
                // move last element
                const last = ul.lastElementChild

                ul.prepend(last)

                // destroy transition
                ul.style.transition = 'none'

                ul.classList.add('to-right')
                
                setTimeout(() => {
                    ul.classList.remove('to-right')
                    ul.style.transition = '.5s'
                }, 50)
            }
        });

        item.addEventListener('click', e => {

            const ul = item.querySelector('ul')

            if (e.target.className == 'right') {

                // move first element
                const first = ul.firstElementChild

                ul.append(first)

                // destroy transition
                ul.style.transition = 'none'

                ul.classList.add('to-left')

                setTimeout(() => {

                    ul.classList.remove('to-left')

                    ul.style.transition = '.5s'
                }, 50);
            }
        });

        setInterval(() => {

            const ul = item.querySelector('ul')

            // move first element
            const first = ul.firstElementChild

            ul.append(first)

            // destroy transition
            ul.style.transition = 'none'

            ul.classList.add('to-left')

            setTimeout(() => {
                ul.classList.remove('to-left')

                ul.style.transition = '.5s'
            }, 50)
         
        }, 3500)
        
    })
}


// https://lvivduncan.github.io/levus-up/
{
    const levusUp = document.createElement('div')

    levusUp.setAttribute('id', 'levus-up')

    document.body.append(levusUp)

    // show/hide
    window.addEventListener('scroll', () => {
        
        if(window.pageYOffset < 50){

            levusUp.className = ''
        } else if(window.pageYOffset > 100) {

            setTimeout( () => {

                levusUp.className = 'active'
            }, 10)
        }
    });

    // click to up
    levusUp.addEventListener('click', () => {

        document.documentElement.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
}


// https://lvivduncan.github.io/levus-table/
{
    const table = document.querySelectorAll('table');

    if (table.length > 0) {
        table.forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.className = 'levus-table-wrapper';
            const table = item.cloneNode(true);
            item.replaceWith(wrapper);
            wrapper.append(table);
        });
    }
}