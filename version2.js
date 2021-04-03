function displayClock(){
  const today_ = new Date();

  const day = getDayByIndex(today_.getDay());
  const month = getMonthByIndex(today_.getMonth());
  const date = addDateSuffix(today_.getDate());
  const year = today_.getFullYear();

  let dateDisplay = document.getElementById('date');
  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;

  const militaryHours = addLeadZero(today_.getHours());
  const standarHours = getStandardHours(militaryHours);
  const minute = addLeadingZero(today_.getMinutes());
  const second = addLeadingZero(today_.getSeconds());

  let timeDisplay = document.getElementById('time');
  timeDisplay.textContent = `${standardHours}: ${minute}: ${second} ${militaryHours > 12? 'PM' : 'AM'}`;
}

function addLeadingZero(time){
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}  

function getStandardHours(militaryHours){
  if (militaryHours === 12){
    return 0
  } else if (militaryHours > 12) {
    return militaryHours - 12
  } else {
    return MilitaryHours
  }
}

function addDateSuffix(date){
  if (date === 1 || date === 21 || date === 31){
    return date + "st";
  } else if (date === 2 || date == 22){
    return date + "nd";
  } else if (date === 3 || date === 23) {
    return date + "rd";
  } else {
    return date + "th";
  }
}

function getMonthByIndex(index) {
  const months = [
    "January",
    "Februray", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September",
    "October", 
    "November",
    "December" 
  ];
  return months[index];
}

function getDayByIndex(index) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[index];
}

setInterval(displayClock, 1000);
displayClock();
