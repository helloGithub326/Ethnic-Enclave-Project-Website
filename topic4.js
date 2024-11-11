var captions = {
    "distEthnicBtn": "A map showing the Asian percentage in neighborhoods including Chicago Chinatown.",
    "ecl1": "",
    "ecl2": "",
    "gcl1": "",
    "gcl2": ""
}

logo = document.getElementById("logo");

logo.onclick = function() {
    location.replace("./index.html")
}

mouseOver = function(img) {
    document.getElementById(img).innerText = captions[img]
}

mouseOut = function(img) {
    document.getElementById(img).innerText = ""
}