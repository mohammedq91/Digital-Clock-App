let time = document.getElementById("clock")

function clock(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  time.textcontent = `${hours}:${minutes}:${seconds}`

};
clock();
setInterval(clock, 1000);
