var captions = {
    "streetMap": "A street map of Chicago Chinatown.",
    "satMap": "A satellite map of Chicago Chinatown.",
    "raceMap": "A map of Chicago Chinatown showing the majority race of neighborhoods.",
    "lc1": "The picture shows people in Chicago Chinatown celebrating Chinese Lunar New Year. (Local Culture)",
    "lc2": "The picture shows the architecture that Chinatown is made up of, which greatly differs from the architecture of other places in Chicago. (Local Culture)",
    "pc1": "The picture shows a walgreens in Chinatown that resembles pop culture since Walgreens pharmacies are seen widely across the world. (Popular Culture)",
    "pc2": "The picture shows the architecture of the hotel, which represents the modern architecture we have today that is seen all around the world. (Popular Culture)"
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
