let time = document.getElementById("clock")
time.append(p)

function clock(){
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const date = date.getDate();
  const year = date.getFullYear();
  time.textcontent = `${hour}:${minute}:${second}+'/' 
                      ${day}, ${month} ${date}+'th' ${year} `

};
clock();
setInterval(clock, 1000);
