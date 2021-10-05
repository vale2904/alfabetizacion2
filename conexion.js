let doctor1=document.getElementById("doctor1");
let fotodoctor1=document.getElementById("fotodoctor1");
let doctor2=document.getElementById("doctor2");
let fotodoctor2=document.getElementById("fotodoctor2");
let cientifico1=document.getElementById("cientifico1");
let fotocientifico1=document.getElementById("fotocientifico1");
let cientifico2=document.getElementById("cientifico2");
let fotocientifico2=document.getElementById("fotocientifico2");
let contadorDoctor=0;
let contadorCient=0;

doctor1.addEventListener("click",activarDoctor)
doctor2.addEventListener("click",activarDoctor2)
cientifico1.addEventListener("click",activarCientifico)
cientifico2.addEventListener("click",activarCientifico2)

function activarDoctor(){

    console.log("hola")
    doctor1.classList.remove("bg-dark");
    fotodoctor1.classList.remove("invisible")
    contadorDoctor++;

    setTimeout(function(){

        if(contadorDoctor !=2){
            
        doctor1.classList.add("bg-dark");
        fotodoctor1.classList.add("invisible")
        contadorDoctor--;

        }else{

            let audio=new Audio('audio/audio.mp3')
            audio.play();

            let resultadodoctor=document.getElementById("resultadodoctor");
            resultadodoctor.classList.remove("invisible")
            resultadodoctor.classList.add("visible")

        }

      
    },3000)
}
function activarDoctor2(){

    console.log("hola")
    doctor2.classList.remove("bg-dark");
    fotodoctor2.classList.remove("invisible")
    contadorDoctor++;

    setTimeout(function(){


        if(contadorDoctor !=2){
            
            doctor1.classList.add("bg-dark");
            fotodoctor1.classList.add("invisible")
            contadorDoctor--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
           let resultadodoctor=document.getElementById("resultadodoctor");
            resultadodoctor.classList.remove("invisible")
            resultadodoctor.classList.add("visible")

            }
    

    },3000)
}
function activarCientifico(){

    console.log("hola")
    cientifico1.classList.remove("bg-dark");
    fotocientifico1.classList.remove("invisible")
    contadorCient++;

    setTimeout(function(){

        if(contadorCient !=2){
            
        cientifico1.classList.add("bg-dark");
        fotocientifico1.classList.add("invisible")
        contadorCient--;

        }else{

            let audio=new Audio('audio/audio.mp3')
            audio.play();

            let resultadocient=document.getElementById("resultadocient");
            resultadocient.classList.remove("invisible")
            resultadocient.classList.add("visible")

        }

      
    },3000)
}
function activarCientifico2(){

    console.log("hola")
    cientifico2.classList.remove("bg-dark");
    fotocientifico2.classList.remove("invisible")
    contadorCient++;

    setTimeout(function(){


        if(contadorCient !=2){
            
            cientifico1.classList.add("bg-dark");
            fotocientifico1.classList.add("invisible")
            contadorCient--;
    
            }else{
    
                let audio=new Audio('audio/audio.mp3')
                audio.play();
                
          
           
            let resultadocient=document.getElementById("resultadocient");
            resultadocient.classList.remove("invisible")
            resultadocient.classList.add("visible")

            }
    

    },3000)
}