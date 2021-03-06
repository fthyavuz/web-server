const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    const endpoint = '/weather?address=' + location
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(endpoint).then((response)=>{
    response.json().then((data)=>{
        if(data.errorMessage){
            messageOne.textContent = data.errorMessage 
        } else {
            messageOne.textContent = data.location 
            messageTwo.textContent = data.forecast 

        } 
    })
})

})


