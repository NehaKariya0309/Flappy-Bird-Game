let hole=document.getElementById('hole');
let block=document.getElementById('block');
let character=document.getElementById('character');
let jumping=0;
let score=0;
hole.addEventListener('animationiteration',()=>{
    var random=-(Math.random()*300 +150);
    hole.style.top= random + "px";
})
setInterval(function(){
    score++;
    let chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top= (chartop +3) + "px";
    }
    let blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let ctop=-(500-chartop);
    let holetop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    // console.log(blockleft);
    // console.log(ctop);
    // console.log(holetop);
    if((chartop>480) || ((blockleft>-10) && (blockleft<20) && ((ctop>holetop+130) || (ctop<holetop)))){
        alert("Game Over . Score is " + score);
        character.style.top=100 + "px";
        score=0;

    }
},10);

function jump(){
    jumping =1;
    let jumpcount=0;
    let jumpinterval=setInterval(function(){
    let chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(chartop>6 && jumpcount<15){
    character.style.top= (chartop -5) + "px";
        
    }
    if(jumpcount>20){
        clearInterval(jumpinterval);
        jumping=0;
        jumpcount=0;
    }
    jumpcount++;

    },10)

   


}