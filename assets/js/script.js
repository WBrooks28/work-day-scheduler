// global variables
var hour = moment().hours();
var userInput;
var indexId;


// runs at beginning of app
currentDate();
startDay(makeArray());
saveBtn();

// display current time
function currentDate() {
    var date = moment().format("dddd, MMMM Do");
    $("#currentDay").html(date);
    console.log(date);
};

// create array to hold timeblocks
function makeArray() {
    var array = [];
    array = $('textarea').map((i, element) => {
        return $(element);
    });
    console.log(array);
    return array;
};

// populate timeblocks from local storage
function startDay(arr) {
    arr.each(function (i) {
      arr[i] = JSON.parse(localStorage.getItem(i));
      this.val(arr[i]);
      this.css('color', 'black');
    });
  }

// save input to local storage
function saveBtn() {
    $('.saveBtn').on('click', function () {
      userInput = $(this).siblings('.form-control').val().trim();
      indexId = $(this).attr('data-id');
      localStorage.setItem(indexId, JSON.stringify(userInput));
    });
  };