$(document).ready(function () {
  // Add Day and Time
  let today = dayjs();
  $("#currentDay").text(today.format("D MMM YYYY"));

  let timeCard = $(".list-group").children("div").children("li");
  let saveButton = $(".list-group").children("div").children("button");

  setUp();
  saveMessage();

  function setUp() {
    // Label HTML Elements
    
    console.log(timeCard.length);

    for (let i = 0; i < timeCard.length; i++) {
      let input = $("<textarea>").addClass("col-lg-7");

      timeCard
        .eq(i)
        .attr("id", "time" + (9 + i))
        .attr("data-time", 9 + i)
        .text(9 + i + " O'clock     ");
      console.log(timeCard.eq(i).attr("data-time"));
      saveButton
        .eq(i)
        .text("Save")
        .attr("data-save", 9 + i)
        .attr("id", "save" + (9 + i));

      // Add input box  
      input.addClass("input" + (9 + i));
      timeCard.eq(i).append(input);
      

      // Decide colour code time blocks
    if (timeCard.eq(i).attr("data-time") == today.hour()) {
        timeCard.eq(i).addClass("active");
    } else if (timeCard.eq(i).attr("data-time") < today.hour()) {
        timeCard.eq(i).css("background-color", "red");
    } else {
        timeCard.eq(i).css("background-color", "green");
    };
    };
  };

  function saveMessage() {
    let savedMess = [];
    for (let i = 0; i < timeCard.length; i++) {
      // Save typed message in Local Storage
      let input = $(".input" + (9 + i));
      let saveButton = $("#save" + (9 + i));

      saveButton.on("click", function() {
        saved = localStorage.setItem(
          "input" + (9 + i),
          JSON.stringify(input.val())
        );
      });

      input.text(localStorage.getItem("input" + (9 + i)));
      console.log(savedMess);
    };
  };
});

