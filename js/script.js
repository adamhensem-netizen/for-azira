const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");


let count=0;

window.onload=()=>{

setTimeout(()=>{

gsap.to("#loading",{

opacity:0,

duration:1,

onComplete:()=>{

document.getElementById("loading").remove();

}

});

},1800);

gsap.from(".container",{

opacity:0,

y:50,

duration:1,

delay:2

});

}

const loveScene=document.getElementById("loveScene");

yesBtn.onclick=()=>{

gsap.to(".container",{

opacity:0,

scale:.8,

duration:.6,

onComplete:()=>{

document.querySelector(".container").style.display="none";

loveScene.style.display="flex";

function createHeart(){

const heart=document.createElement("div");

heart.className="loveHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,500);

}

});

}

noBtn.onclick=()=>{

count++;

if(count<4){

const x=Math.random()*(window.innerWidth-170);

const y=Math.random()*(window.innerHeight-80);

gsap.to(noBtn,{

left:x,

top:y,

position:"fixed",

duration:.35

});

}else{

document.querySelector(".container").style.display="none";

document.getElementById("sadScene").style.display="flex";

}

}

const envelope=document.getElementById("envelope");


envelope.onclick = () => {

    music.play().catch(() => {});
    playing = true;
    musicBtn.innerHTML = "🎵";

    gsap.to(".loveCard", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            window.location.href = "letter.html";
        }
    });

}

setTimeout(confetti,500);



const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="🎵";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🔇";

playing=false;

}

}

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(Math.random()*5+5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,400);

const continueBtn=document.getElementById("continueBtn");

continueBtn.onclick=()=>{

document.getElementById("sadScene").style.display="none";

loveScene.style.display="flex";

gsap.from(".loveCard",{

opacity:0,

y:60,

duration:.8

});

}

function confetti(){

for(let i=0;i<80;i++){

const c=document.createElement("div");

c.innerHTML="❤️";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(Math.random()*20+15)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform=`translateY(${window.innerHeight+50}px) rotate(720deg)`;

},100);

setTimeout(()=>{

c.remove();

},4500);

}

}

function createHeart(){

const heart=document.createElement("div");

heart.className="loveHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,500);

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.transition="1s";

heart.style.fontSize="25px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-100px) scale(2)";

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1000);

});