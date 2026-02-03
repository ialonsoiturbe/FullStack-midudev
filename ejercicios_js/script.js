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
/*
//Se pueden escuchar también los filtros
const filter = document.querySelector('#filter-technology')

//Cada vez que cambia un filtro de ubicación, puedo recuperar el valor
filter.addEventListener('change', function(){
    console-log(filter.value)
})
*/ 

//Cada vez que cambie el filtro, llamaré al evento y cambia los resultados
//Utilizaremos el evento change para detectar el cambio del elemento select
const filter = document.querySelector('#filter-ubicacion')
const mensaje = document.querySelector('#filter-selected-value')
const jobs = document.querySelectorAll('.job-listong-card')

filter.addEventListener('change', function(){
    const selectedValue = filter.value

    if(selectedValue){
        mensaje.textContent = 'Has seleccionado: ${selectedValue}'
    }
    else {
        mensaje.textContent = ''
    }

    jobs.forEach(job => {
        //const modalidad = job.dataset.modalidad forma nativa de hacerlo, es más común getattribute
        const modalidad = job.getAttribute('data-modalidad')
        //console.log(job.dataset.modalidad)
        if (selectedValue === '' || selectedValue === modalidad){
            job.style.display = 'flex'
        } else{
            job.style.display = 'none'
        }
    })
})

/*
const searchInput = document.querySelector('empleos-search-input')

searchInput.addEventListener('input', function(){
    console-log(searchInput.value)
})

const searchForm = document.querySelector('empleos-search-form')

searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    //Haz todo lo que ponga previniendo el comportamiento predefinido de los form en HTML
    console.log('submit')
})

//Para saber qué teclas hemos presionado usamos
document.addEventListener('keydown', function(event){
    console.log("Tecla presionada:", event.key)
    console.log("Está presionada la tecla shift?", event.shiftkey)
    console.log("Está presionada la tecla control?", event.ctrlkey)
    //Y más...
})
*/

//Sigamos  desde línea 48
