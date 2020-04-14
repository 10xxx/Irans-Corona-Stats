export function stats() {

    var request = new XMLHttpRequest()

    request.open('GET', 'https://api.covid19api.com/live/country/ir', true)

    request.onload = function() {
        var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        var y = document.createElement("p")
        y.innerHTML = data[0].Confirmed + "  &nbsp; </br> "
        y.className = "statstxt confirmedtxt"
        document.getElementById("confirmed").appendChild(y)

        var z = document.createElement("p")
        z.innerHTML = data[0].Deaths + "  	&nbsp; </br> "
        z.className = "statstxt deathstxt"
        document.getElementById("deaths").appendChild(z)

        var x = document.createElement("p")
        x.innerHTML = data[0].Recovered + "  	&nbsp; </br> "
        x.className = "statstxt recoveredtxt"
        document.getElementById("recovered").appendChild(x)
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
    }

    request.send()

}