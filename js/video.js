const intro = document.getElementById("intro");

const introText = document.getElementById("introText");

const videoCard = document.getElementById("videoCard");

const video = document.getElementById("ourVideo");

const tl = gsap.timeline();

tl.to("#introText",{

opacity:1,

duration:1

})

.to("#introText",{

duration:2

})

.to("#introText",{

opacity:0,

duration:1,

onComplete:()=>{

introText.innerHTML="I want you to remember us...";

}

})

.to("#introText",{

opacity:1,

duration:1

})

.to("#introText",{

duration:2

})

.to("#introText",{

opacity:0,

duration:1,

onComplete:()=>{

introText.innerHTML="One Last Time ❤️";

}

})

.to("#introText",{

opacity:1,

duration:1

})

.to("#introText",{

duration:2

})

.to("#intro",{

opacity:0,

duration:1,

onComplete:()=>{

intro.remove();

videoCard.style.display="block";

gsap.from("#videoCard",{

opacity:0,

y:40,

duration:1

});

video.play().catch(()=>{});

}

});

document.getElementById("nextBtn").onclick=()=>{

window.location.href="ending.html";

}