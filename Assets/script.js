// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let saveBtnEl = document.getElementsByClassName("saveBtn");
  // let workHoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  // let containerEl = document.getElementsByClassName("timeblockContainer");
  
  // Create Calendar Time Blocks and Columns
  // function createTimeBlocks() {
  //   for (i = 0; i < workHoursArr.length; i++) {
  //     let row = $("div").addClass("row time-block");
  //     let timeCol = $("div").addClass("hour").text(workHoursArr[i]);
  //     let inputCol = $("textarea").addClass("description").attr("placeholder", "Type event info here!");
  //     let saveBtn = $("button").addClass("saveBtn").text("save");
  //     $(row).append(timeCol).append(inputCol).append(saveBtn);
  //     $(containerEl).append(row);
  //   }
  // }

  // createTimeBlocks();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

    // saveBtnEl.addEventListener("click", function() {

    // })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function checkCurrentHour() {
    let currentHour = dayjs().format(H);

  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
  // TODO: Add code to display the current date in the header of the page.
  let today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D"));
});

