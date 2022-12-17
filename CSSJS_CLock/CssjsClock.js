const  secondHand=document.querySelector(".second-hand")
const minHand=document.querySelector(".min-hand")
const hourHand = document.querySelector('.hour-hand');

function GetDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const min =now.getMinutes();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minDegree =((min / 60) * 360)+90;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360)+ 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

} 

setInterval(GetDate,1000)