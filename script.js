const music = document.getElementById("Bishtar Bishtar.mp3");

const startScreen = document.getElementById("startScreen");

const startButton = document.getElementById("startButton");

const message = document.getElementById("message");

const loveMessage = document.getElementById("loveMessage");

const floatingHearts = document.getElementById("floatingHearts");

const heartContainer = document.getElementById("heartContainer");



/*============================
Floating Hearts
=============================*/

for(let i=0;i<25;i++){

    const heart=document.createElement("span");

    heart.innerHTML="💙";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.animationDuration=(8+Math.random()*10)+"s";

    heart.style.animationDelay=(Math.random()*8)+"s";

    floatingHearts.appendChild(heart);

}



/*============================
Start Music
=============================*/

function startExperience(){

    startScreen.style.display="none";

    music.play();

}

startButton.addEventListener("click",startExperience);



/*============================
Try Auto Play
=============================*/

window.addEventListener("load",()=>{

music.play()

.then(()=>{

startScreen.style.display="none";

})

.catch(()=>{

startScreen.style.display="flex";

});

});



/*============================
After 80 Seconds
=============================*/

setTimeout(()=>{

message.style.opacity="0";

message.style.transition="1.5s";

setTimeout(()=>{

document.querySelector(".glassCard").style.display="none";

showLove();

},1500);

},80000);
/*============================
Show Final Message
=============================*/

function showLove() {

    // نمایش متن دوم
    loveMessage.style.opacity = "1";
    loveMessage.style.transform = "translate(-50%,-50%) scale(1)";
    loveMessage.style.animation = "heartbeat 1.6s infinite";

    explodeHearts();

}


/*============================
Heart Explosion
=============================*/

function explodeHearts(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML=Math.random()>0.5?"💙":"🤍";

        heart.style.position="absolute";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=(12+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        const angle=Math.random()*Math.PI*2;

        const distance=200+Math.random()*450;

        const x=Math.cos(angle)*distance;

        const y=Math.sin(angle)*distance;

        heart.style.transition="all 2s ease-out";

        heartContainer.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translate(${x}px,${y}px)
             rotate(${Math.random()*720}deg)
             scale(${0.5+Math.random()*1.5})`;

            heart.style.opacity="0";

        },20);

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}
