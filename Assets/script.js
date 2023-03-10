// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
dayjs.extend(window.dayjs_plugin_advancedFormat);
$(function () {

// Event listener for save button click to save time-block id and description to local storage
    $(".saveBtn").on("click", function(event) {
      event.preventDefault();
      let timeBlock = $(this).parent().attr("id");
      let taskInfo = $(this).siblings("textarea").val();

      // Save time block id and description together in local storage
      localStorage.setItem(timeBlock, taskInfo);
    })

// Checks current hour against time-block hour to set background for past, present, or future events
  function checkCurrentHour() {
    // Gets current hour
    let currentHour = dayjs().hour();

    // Split hour from each time-block id as an integer to compare to current hour
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
    
    // If statement to assign past, present, or future class
    if (blockHour < currentHour) {
      $(this).removeClass("present future");
      $(this).addClass("past");
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass("past future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present past");
      $(this).addClass("future");
    }
    });
  }

  checkCurrentHour();

// Get user input from localStorage and set to time-block descriptions
  $("textarea").each(function() {
    $(this).val(localStorage.getItem($(this).parent().attr("id")))
  });


// Display the current date in the header of the page. 
  let today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM Do"));
});


// Failed attempt at creating time blocks using jquery
// Keeping for now because I would like to return to it at a later date
  // let workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  // let containerEl = document.getElementsByClassName("timeblockContainer");
  
  // Create Calendar Time Blocks and Columns
  // function createTimeBlocks() {
  //   for (i = 0; i < workHoursArr.length; i++) {
  //     let row = $("div").addClass("row time-block");
  //     let timeCol = $("div").addClass("hour col-2 col-md-1 text-center py-3").text(workHoursArr[i]);
  //     let inputCol = $("textarea").addClass("description col-8 col-md-10").attr("placeholder", "Type event info here!");
  //     let saveBtn = $("button").addClass("saveBtn btn col-2 col-md-1").text("save");
  //     $(row).append(timeCol).append(inputCol).append(saveBtn);
  //     $(containerEl).append(row);
  //   }
  // }