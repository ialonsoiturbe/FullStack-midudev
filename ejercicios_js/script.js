/*Para devolver varios elementos no podemos utilizar querySelector ya que nos da uno
const boton = document.querySelector('#boton-importante')
querySelectorAll nos devuelve una lista
Para pasar una función a varios elementos, necesitamos iterar
Podemos cambiar los estilos directamente pero es mejor hacerlo con clases en el css
    boton.style.backgroundColor = #bdfff7

const boton = document.querySelectorAll('.boton-apply-job')

botones.forEach(boton=>{
    boton.addEventListener('click', function() {
        boton.textContent = '¡Aplicado!'
        boton.classList.add('is-applied')
        boton.disabled = true

    
    })
})

devuelve un NodeList(array-like) o una lista vacía si no encuentra botones */


//Se puede hacer con Event Bubbling (burbujeo de eventos) es un mecanismo del navegador donde los eventos se propagan desde el elemento más específico hacia los elementos padre.

const jobListingSection = document.querySelector('.job-listings')

jobListingSection.addEventListener('click', function(event){
    //event.target nos va a dar el elemento que ha dado el click
    //console.log(event.target)
    const element = event.target

    if (element.classList.contains('button-apply-job')){
        //console.log('es el boton') para saber que se ejecuta el boton
        boton.textContent = '¡Aplicado!'
        boton.classList.add('is-applied')
        boton.disabled = true
    }
})