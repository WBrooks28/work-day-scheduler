// global variables
var hour = moment().hours();
var userInput;
var indexId;


// runs at beginning of app
currentDate();

// display current time
function currentDate() {
    var date = moment().format("dddd, MMMM Do");
    $("#currentDay").html(date);
    console.log(date);
};

