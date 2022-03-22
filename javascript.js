document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "70px";

    document.getElementById("box").style.width = "70px";

    document.getElementById("box").style.padding = "140px";
});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity -= 0.1;

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style="height: 50px; width: 50px; background-color:orange; opacity: 1; margin:25px; padding:70px;";

});

document.getElementById("button5").addEventListener("click", function(){

    document.getElementById("button1").remove();
    document.getElementById("button2").remove();
    document.getElementById("button3").remove();
    document.getElementById("button4").remove();
    document.getElementById("button5").remove();
    document.getElementById("p").remove();
    document.getElementById("box").remove();

    var img = document.createElement("img")
    img.src = 'microDeath.png'
    document.body.appendChild(img);
});

function mOver1(obj) {
    obj.innerHTML = "!!!!!!!!STOP!!!!!!!!";
  }
  
function mOut1(obj) {
    obj.innerHTML = "DO NOT PRESS";
  }

function mOver(obj) {
    obj.innerHTML = "Surprise!!";
  }
  
function mOut(obj) {
    obj.innerHTML = "";
  }
