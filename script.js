let currPos = 1;
setInterval(function(){
    if (currPos!=5){
        next();
    }
}, 2000);


function next(){
    let x =  -currPos * 350;
    document.querySelector('.slides').style.transform = `translateX(${x}px)`;
    currPos++;
    resetNav();
    document.querySelector(`.img${currPos}`).style.background = "green";
}

function prev(){
    let x = -(currPos-2) * 350;
    document.querySelector('.slides').style.transform = `translateX(${x}px)`;
    currPos--;
    resetNav();
    document.querySelector(`.img${currPos}`).style.background = "green";
}

function resetNav(){
    for (let i = 1; i <= 5; i++){
        document.querySelector(`.img${i}`).style.background = "red";
    }
}

//Next and Previous Button
document.querySelector('.nextBtn').addEventListener('click', ()=>{
    if (currPos != 5) next();
});

document.querySelector('.prevBtn').addEventListener('click', ()=>{
    if (currPos != 1) prev();
});

//NavBar Div Button
for (let i = 1; i <= 5; i++){
    document.querySelector(`.img${i}`).addEventListener('click', ()=>{
        currPos = i;
        let x = -(i-1)*350;
        document.querySelector('.slides').style.transform = `translateX(${x}px)`;
        resetNav();
        document.querySelector(`.img${currPos}`).style.background = "green";
    });
}