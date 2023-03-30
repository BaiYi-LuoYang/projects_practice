const panels = document.querySelectorAll('.panel')

panels.forEach( p => {
    p.addEventListener( 'click' , () => {
        removeActiveClasses()
        p.classList.add('active')
    })
})

const removeActiveClasses = () => {
    panels.forEach( p => {
        p.classList.remove('active')
    })
}