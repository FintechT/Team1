const button = document.getElementById('button')

button.addEventListener('click', () => { 
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsfot.XMLHTTP")

    xhr.open('GET', 'https://api.hsbc.com.mx/x-open-banking/v1.0/atms/country/mx/town/Azcapotzalco')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.responseText) //cambiar stringify por parse
        const list = document.getElementById('list')
        var n = 0;
        for(var f=0; f>=n; f++)
        {            
            list.innerHTML +=`<br> Número de cajero: ${dataJSON.data['0'].Brand['0'].ATM[f].Branch.Identification}
            IDHWIDHFHDFHFDCHADSC`
        } 
    })
    xhr.send()
})
