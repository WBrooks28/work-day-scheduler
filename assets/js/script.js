// global variables
var hour = moment().hours();
var userInput;
var indexId;


// runs at beginning of app
currentDate();
newDay(makeArray());
saveBtn();
backgroundColor();
clearDay();

// display current time
function currentDate() {
    var date = moment().format("dddd, MMMM Do");
    $("#currentDay").text(date);
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
function newDay(array) {
    array.each(function (i) {
      array[i] = JSON.parse(localStorage.getItem(i));
      this.val(array[i]);
      this.css('color', 'black');
    });
  }

// save input to local storage
function saveBtn() {
    $('.saveBtn').on('click', function () {
      userInput = $(this)
        .siblings('.form-control')
        .val()
        .trim();
      indexId = $(this).attr('data-id');
      localStorage.setItem(indexId, JSON.stringify(userInput));
    });
  };

// change background color
function backgroundColor() {
    $(".form-control").each(function() {
        var block = parseInt($(this).attr('id'));
        hour = parseInt(hour);

        if (hour > block) {
            $(this).addClass('past');
        } else if (hour < block) {
            $(this).addClass('future');
        } else {
            $(this).addClass('present');
        }
    });
};
