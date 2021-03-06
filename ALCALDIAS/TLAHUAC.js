const button = document.getElementById('button')

button.addEventListener('click', () => { 
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsfot.XMLHTTP")

    xhr.open('GET', 'https://api.hsbc.com.mx/x-open-banking/v1.0/atms/country/mx/town/tlahuac')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.responseText)  // cuando se use console.log(JSON.parse(data.target.responseText)) se  tendra que comentar todo este bloque
        const list = document.getElementById('list')
        var n = 0;
        for(var f=0; f>=n; f++)
        {
            list.innerHTML +=`<br> Número de cajero: ${dataJSON.data['0'].Brand['0'].ATM[f].Branch.Identification}
            <br> Sucursal:  ${dataJSON.data['0'].Brand['0'].ATM[f].Location.Site.Name}            
            <br> Dirección: <br> Calle:  ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.StreetName}
            <br> Número: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.BuildingNumber}
            <br> Alcaldía: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.TownName}
            <br> Ciudad: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.Country}
            <br> CP: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.PostCode}</br>`
        } 
    })
    xhr.send()
})





