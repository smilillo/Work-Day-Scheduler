// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // let workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  // let containerEl = document.getElementsByClassName("timeblockContainer");
  
// Failed attempt at creating time blocks using jquery
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

// Event listener for save button click to save time-block id and description to local storage
    $(".saveBtn").on("click", function(event) {
      event.preventDefault();
      let timeBlock = $(this).parent().attr("id");
      let taskInfo = $(this).siblings("textarea").val();

      // Save time and description together in local storage
      localStorage.setItem(timeBlock, taskInfo);
      console.log(localStorage);
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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
// Get user input from localStorage and set to time-block descriptions
  $("textarea").each(function() {
    $(this).val(localStorage.getItem($(this).parent().attr("id")))
  });
  
  // $("#hour-9 textarea").val(localStorage.getItem("hour-9"));
  // $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
  // $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
  // $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
  // $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
  // $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
  // $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
  // $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
  // $("#hour-17 textarea").val(localStorage.getItem("hour-17"));



// Display the current date in the header of the page.
  let today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D"));

});

