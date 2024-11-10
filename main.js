var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

//Hover
btn1.addEventListener("mouseover", () => {
    btn1.querySelector("#btn1T").innerText = "Topic 1 Description"
});

btn2.addEventListener("mouseover", () => {
    btn2.querySelector("#btn2T").innerText = "Topic 2 Description"
});

btn3.addEventListener("mouseover", () => {
    btn3.querySelector("#btn3T").innerText = "Topic 3 Description"
});

btn4.addEventListener("mouseover", () => {
    btn4.querySelector("#btn4T").innerText = "Topic 4 Description"
});
  
//Hover off
btn1.addEventListener("mouseout", () => {
    btn1.querySelector("#btn1T").innerText = "Topic 1"
});

btn2.addEventListener("mouseout", () => {
    btn2.querySelector("#btn2T").innerText = "Topic 2"
});

btn3.addEventListener("mouseout", () => {
    btn3.querySelector("#btn3T").innerText = "Topic 3"
});

btn4.addEventListener("mouseout", () => {
    btn4.querySelector("#btn4T").innerText = "Topic 4"
});

//On click
btn1.addEventListener("onclick", () => {
    location.replace("./topic1.html")
});