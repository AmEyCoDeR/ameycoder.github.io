var openo = false;
var imgstage = 1;

document.getElementById("hamburger").addEventListener("click",function(){
    if(openo === false){
    document.getElementById("nav-links-mob").style.display = "block";
    openo = true;
    }else if(openo){
    document.getElementById("nav-links-mob").style.display = "none";
    openo = false;
    }else{
        console.log("myau");
    }
});

function imginc(){
imgstage += 1;
}

function decinc(){
imgstage -= 1;
}

setInterval(()=>{
console.log(imgstage);
},1);
