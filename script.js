/*Código aplicável somente a três slides*/
const imgA="./images/img1.jpg";
const imgB="./images/img2.jpg";
const imgC="./images/img3.jpg";

let img1El=document.querySelector("#primaria");
let img2El=document.querySelector("#secundaria");

let br=1;//Contador de variação

img1El.style.zIndex=5;
img2El.style.zIndex=1;
img1El.src=imgA;
img2El.src=imgB;

doit();

function doit(){
    setTimeout(transition, 12000);
}

function swapall(element){
    switch(br){
        case 1:
                element.src=imgC;
                br++;
            break;
        case 2:
                element.src=imgA;
                br++;
            break;
        case 3:
                element.src=imgB;
                br=1;
            break;
    }
}

function transition(){
    if(img1El.style.zIndex>img2El.style.zIndex){
        img1El.classList.add('invisible');

        setTimeout(function(){
            img2El.style.zIndex=5;
            img1El.style.zIndex=1;
            img1El.classList.remove('invisible');

            swapall(img1El);

        }, 2000);
        
    }else{
        img2El.classList.add('invisible');

        setTimeout(function(){
            img1El.style.zIndex=5;
            img2El.style.zIndex=1;
            img2El.classList.remove('invisible');

            swapall(img2El);

        }, 2500);
        
    }

    doit();
}

/**********************/

let maisEl=document.querySelector("#mais");

maisEl.addEventListener('click', function(){
    if(maisEl.style.display=='block')expand(); else retract();
}
);

retract();

function expand(){
    maisEl.style.display="none";
    let expanded=document.querySelectorAll("#mais ~ li:not(:last-child)");
    
    for(let i=0; i<expanded.length; i++){
        expanded[i].style.display='list-item';
    }
}

function retract(){
    maisEl.style.display="block";
    let expanded=document.querySelectorAll("#mais ~ li:not(:last-child)");
    
    for(let i=0; i<expanded.length; i++){
        expanded[i].style.display='none';
    }
}