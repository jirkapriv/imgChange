
const boxe = document.getElementsByClassName("box");
const main = document.getElementById("main");

[...boxe].forEach((img) => {
  img.onclick = () => {

   main.src = img.src;
    
  }
});
