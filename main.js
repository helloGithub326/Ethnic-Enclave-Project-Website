btn1 = document.getElementById("btn1");

//Hover
btn1.addEventListener("mouseover", () => {
    btn1.querySelector("#btn1T").innerText = "Topic 1 Description"
});

btn1.addEventListener("mouseover", () => {
    btn1.querySelector("#btn2T").innerText = "Topic 2 Description"
});

btn1.addEventListener("mouseover", () => {
    btn1.querySelector("#btn3T").innerText = "Topic 3 Description"
});

btn1.addEventListener("mouseover", () => {
    btn1.querySelector("#btn4T").innerText = "Topic 4 Description"
});
  
//Hover off
btn1.addEventListener("mouseout", () => {
    btn1.querySelector("#btn1T").innerText = "Topic 1"
});

btn1.addEventListener("mouseout", () => {
    btn1.querySelector("#btn2T").innerText = "Topic 2"
});

btn1.addEventListener("mouseout", () => {
    btn1.querySelector("#btn3T").innerText = "Topic 3"
});

btn1.addEventListener("mouseout", () => {
    btn1.querySelector("#btn4T").innerText = "Topic 4"
});