const button = document.getElementById('button')

button.addEventListener('click', () => { 
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsfot.XMLHTTP")

    xhr.open('GET', 'https://api.hsbc.com.mx/x-open-banking/v1.0/atms/postcode/16620')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.stringify(data.target.responseText)  // cuando se use console.log(JSON.parse(data.target.responseText)) se  tendra que comentar todo este bloque
        const list = document.getElementById('list').innerHTML = dataJSON //solo se agrego el innerHTML = dataJSON
    })
    xhr.send()
})




