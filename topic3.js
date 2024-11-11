var captions = {
    "rcl1": "This picture shows a church in Chinatown that has chinese writing on it, which is not seen in most other churches in Chicago; Therefore, this church shows how the Chinese people in Chinatown have infused with the broader society.",
    "rcl2": "This picture shows a union church found in Chinatown, showing how Chinese-Americans in Chinatown have implemented Chinese architecture into churches in Chicago.",
    "rcl3": "This picture depicts how churches and Christianity have had a large impact on the young generation living in Chinatown. It shows the children going to a Christian school; this can greatly influence their beliefs in the future."
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