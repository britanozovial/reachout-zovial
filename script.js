function callemwhite() {
    console.log("5000")
    document.getElementById("ace").style.backgroundColor = "white"
    document.getElementById("ace").style.color = "black"
    document.getElementById("ivy").style.backgroundColor = "white"
    document.getElementById("ivy").style.color = "black"
    document.getElementById("britano").style.backgroundColor = "white"
    document.getElementById("britano").style.color = "black"
    
}

function callemred(){
    document.getElementById("ace").style.backgroundColor = "white"
    document.getElementById("ace").style.color = "red"
    document.getElementById("ivy").style.backgroundColor = "white"
    document.getElementById("ivy").style.color = "red"
    document.getElementById("britano").style.backgroundColor = "white"
    document.getElementById("britano").style.color = "red"
}

function callemblue(){
    document.getElementById("ace").style.backgroundColor = "white"
    document.getElementById("ace").style.color = "blue"
    document.getElementById("ivy").style.backgroundColor = "white"
    document.getElementById("ivy").style.color = "blue"
    document.getElementById("britano").style.backgroundColor = "white"
    document.getElementById("britano").style.color = "blue"
}




function timedwhite() {
    (callemwhite,2000)
    setInterval(callemwhite, 2000)
}

function timedred(){
    setInterval(callemred, 4000)
}

function timedblue(){
    setInterval(callemblue, 6000)
}

window.addEventListener("load", timedwhite);

window.addEventListener("load", timedred);

window.addEventListener("load", timedblue);