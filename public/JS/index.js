
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charactersName = document.querySelector('input').value
    try{
        const response = await fetch('https://boondocks-main-api.herokuapp.com/api/${charactersName}')
        const data = await response.json()
    
        console.log(data)
        document.querySelector('.gender').innerText = data.gender
    }catch(error){
        console.log(error)
    }
}
