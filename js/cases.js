export function stats() {

    var request = new XMLHttpRequest()

    request.open('GET', 'https://api.covid19api.com/live/country/ir', true)

    request.onload = function() {
        var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        var t = data.pop()
        document.getElementById("total").innerText = t.Confirmed

        document.getElementById("deaths").innerText = t.Deaths 

        document.getElementById("recovered").innerText = t.Recovered

    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
    }

    request.send()

}