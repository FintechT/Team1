const button = document.getElementById('button')

button.addEventListener('click', () => { 
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsfot.XMLHTTP")

    xhr.open('GET', 'https://api.hsbc.com.mx/x-open-banking/v1.0/atms/country/mx/town/cuauhtemoc')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.responseText) //cambiar stringify por parse
        const list = document.getElementById('list')
        var n = 0;
        for(var f=0; f>=n; f++)
        {
            list.innerHTML +=`<br> Número de cajero: ${dataJSON.data['0'].Brand['0'].ATM[f].Branch.Identification}
            <br> Sucursal:  ${dataJSON.data['0'].Brand['0'].ATM[f].Location.Site.Name}
            <br>Número de cajero: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.BuildingNumber}
            <br> Dirección: <br> Calle:  ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.StreetName}
            <br> Alcaldía: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.TownName}
            <br> Ciudad: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.Country}
            <br> CP: ${dataJSON.data['0'].Brand['0'].ATM[f].Location.PostalAddress.PostCode}</br>`
        } 
    })
    xhr.send()
})