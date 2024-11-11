var captions = {
    "streetMap": "A street map of Chicago Chinatown",
    "satMap": "A satellite map of Chicago Chinatown",
    "raceMap": "A map of Chicago Chinatown showing the majority race of neighborhoods",
    "lc1": "People in Chicago Chinatown celebrating Chinese Lunar New Year",
    "lc2": "The architecture that Chinatown is made up of, which greatly differs from the architecture of other places in Chicago",
    "pc1": "A walgreens in Chinatown shows pop culture as Walgreens pharmacies are seen widely across the world",
    "pc2": "The architecture in the picture shown of the hotel represents the modern architecture we have today that is seen all around the world"
}

logo = document.getElementById("logo");

logo.onclick = function() {
    location.replace("./index.html")
}

mouseOver = function(img) {
    document.getElementById(img).querySelector(img + "T").innerText = captions[img]
}

mouseOut = function(img) {
    document.getElementById(img).innerText = ""
}