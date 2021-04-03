// grab clock ID from html (done)
//make clock (done)
function clock(){
const clockContainer = document.getElementById('Clock');
const today = new Date();




// shorter way
const militaryHours = addLeadingZero(today.getHours());
const minutes = addLeadingZero(today.getMinutes());
const seconds = addLeadingZero(today.getSeconds());
const time = `${militaryHours}:${minutes}:${seconds}`;
//console.log(militaryHours);
//const hours = date.getHours();


//const time =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//clockContainer.textContent = time;

}
clock();

//clock tick (done)
setInterval(clock,1000);

