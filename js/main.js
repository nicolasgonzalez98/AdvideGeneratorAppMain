function extraerDatos(){
    fetch('https://api.adviceslip.com/advice')
    .then(request => request.json())
    .then(dataAdvice => {
        const ContadorId = document.querySelector('.id')
        const lugarFrase = document.querySelector('.frase')

        let frase = dataAdvice.slip.advice
        let id = dataAdvice.slip.id
        ContadorId.innerText = id
        lugarFrase.innerText = frase
        console.log('Cargado correctamente')
    })
}

extraerDatos()

document.querySelector('.buscar').addEventListener('click',() => {
    extraerDatos()
})

