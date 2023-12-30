theme.addEventListener('click',function(){
    navbar.classList.toggle('bg-dark')
    apple_navbar.classList.toggle('text-light')
    titles.forEach( item =>  {item.classList.toggle('text-light')})
    card_titles.forEach(item => (item.classList.toggle('text-light')))
    texts.forEach(item => (item.classList.toggle('text-light')))
    body_site.classList.toggle('bg-dark')
    body_site.animate([
        {opacity: 0},
        {filter: 'blur(10px)'},
        {opacity: 1},
        {filter: 'blur(0px)'}
    ],500)
})

tog.addEventListener('click' , function(){
    menu.classList.toggle('change')
})

