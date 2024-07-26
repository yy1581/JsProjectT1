const clock = document.querySelector("#clock");

function getCurTime(){
  const date = new Date();
  clock.textContent = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

getCurTime();
setInterval(getCurTime, 1000);