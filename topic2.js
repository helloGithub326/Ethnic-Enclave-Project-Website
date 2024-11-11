var captions = {
    "lcl1": "The picture shows the clearly depicted in Mandarin entrance sign of Chinatown.",
    "lcl2": "The picture shows signs for shops written in Mandarin which typically would not be shown that way elsewhere.",
    "lcl3": "The picture shows street names in Chinatown written in Mandarin and English, which is not common in other places."
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