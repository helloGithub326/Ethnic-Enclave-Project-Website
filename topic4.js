var captions = {
    "distEthnicBtn": "A map showing the Asian percentage in neighborhoods including Chicago Chinatown.",
    "ecl1": "The picture shows a building built with Chinese architecture, which depicts Chinese cultural beliefs. (Ethnic Enclave Impact on The Cultural Landscape)",
    "ecl2": "The picture shows a dragon, which is a symbolic to Chinese culture. (Ethnic Enclave Impact on The Cultural Landscape)",
    "gcl1": "The picture shows a Buddhist temple, which have different gender spaces and roles. (Gender Impact on The Cultural Landscape)",
    "gcl2": "The picture shows a salon in Chicago Chinatown that is specifically for females. (Gender Impact on The Cultural Landscape)"
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
