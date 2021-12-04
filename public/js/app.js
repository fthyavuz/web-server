// console.log('The client side javascript code has been loaded...')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'comes from javascript'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    const endpoint = 'http://localhost:3000/weather?address=' + location
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(endpoint).then((response)=>{
    response.json().then((data)=>{
        if(data.errorMessage){
            messageOne.textContent = data.errorMessage //console.log(data.errorMessage)
        } else {
            messageOne.textContent = data.location //console.log(data.location)
            messageTwo.textContent = data.forecast //console.log(data.forecast)

        } 
    })
})

})


