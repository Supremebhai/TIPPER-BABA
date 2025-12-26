
let time = 10;
const timer = document.getElementById("timer");
const link = "https://t.me/+tWDNGZeRFO4wMDQ1";

const interval = setInterval(()=>{
  time--;
  timer.textContent = time;
  if(time <= 0){
    clearInterval(interval);
    window.location.href = link;
  }
},1000);
