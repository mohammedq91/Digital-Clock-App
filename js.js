/*function clock() {
  console.log('clock');
}

setTimeout(clock, 1000);*/
time = document.getElementById("clock");

function clock(){
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  time.textContent = '${getSeconds}:${getMinutes}'
  /*console.log(date.getMinutes);
  console.log(date.getHours);
  console.log(date.getDay);
  console.log(date.getFullYear);*/
  
}
clock();
setInterval(clock, 1000);
