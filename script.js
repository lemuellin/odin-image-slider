let currPos = 1;
const auto = setInterval(function(){
    if (currPos!=5){
        next();
    }
}, 5000);

document.querySelector(".img1").style.display = "block";

function next(){
    // let x =  -currPos * 350;
    // document.querySelector('.slides').style.transform = `translateX(${x}px)`;
    document.querySelector(`.img${currPos}`).style.display = "none";
    currPos++;
    document.querySelector(`.img${currPos}`).style.display = "block";
    renewNav();
}

function prev(){
    // let x = -(currPos-2) * 350;
    // document.querySelector('.slides').style.transform = `translateX(${x}px)`;
    document.querySelector(`.img${currPos}`).style.display = "none";
    currPos--;
    document.querySelector(`.img${currPos}`).style.display = "block";
    renewNav();
}

function renewNav(){
    for (let i = 1; i <= 5; i++){
        document.querySelector(`.imgNav${i}`).style.background = "red";
    }
    document.querySelector(`.imgNav${currPos}`).style.background = "green";
    clearInterval(auto);
    console.log(currPos);
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
    document.querySelector(`.imgNav${i}`).addEventListener('click', ()=>{
        document.querySelector(`.img${currPos}`).style.display = "none";
        currPos = i;
        // let x = -(i-1)*350;
        // document.querySelector('.slides').style.transform = `translateX(${x}px)`;
        document.querySelector(`.img${currPos}`).style.display = "block";
        renewNav();
    });
}