function clock(){
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  let timeDisplay = document.getElementById("clock");

  const day = date.getDay();
  const month = date.getMonth();
  const date = date.getDate();
  const year = date.getFullYear();

  let timeString = `Today is : ${hour}:${minute}:${second}+'/' 
                      ${day}, ${month} ${date}+'th' ${year}`
  let dateDisplay = document.getElementById("date")
  time.append(clock);
};
clock();
setInterval(clock, 1000);
