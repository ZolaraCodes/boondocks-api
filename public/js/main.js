document.querySelector('button').addEventListener('click', apiRequest);
async function apiRequest() {
    const characterName = document.querySelector('input').value
    try {
        const response = await fetch(`https://boondocks-main-api.herokuapp.com/api/${characterName}`)
        const data = await response.json()
        console.log(data)
        document.querySelctor('h2').innerText = data.gender
    }

catch (error) {
    console.log('Somethings wrong');
} 
}