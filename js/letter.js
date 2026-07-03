gsap.from(".paper",{

opacity:0,

y:50,

duration:1

});

document.getElementById("continueBtn").onclick = () => {

    gsap.to(".paper",{

        opacity:0,

        y:-40,

        duration:.7,

        onComplete:()=>{

            window.location.href="video.html";

        }

    });

}

