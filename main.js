var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var date2 = new Date();
var weekday2 = new Array(7)
weekday[0] = "To chillax";
weekday[1] = "Monday morning blues";
weekday[2] = "Taco Time!";
weekday[3] = "Two more days to the weekend.";
weekday[4] = "The weekend is almost here...";
weekday[5] = "Weekend is here! ";
weekday[6] = "time to party!.";

var n = weekday[d.getDay()];
var n2 = weekday2[date2.getDay()];

var displayWeekday = document.getElementById('weekday');
var phrase = document.getElementById('phrase');

whatDayIsIt();

function whatDayIsIt(){
    
    displayWeekday.innerText = n ;
    phrase.innerText = n2;

}

