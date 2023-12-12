$(document).ready(function () {

    // Add Day and Time
    let today = dayjs();
    console.log(today);
    $("#currentDay").text(today.format("D MMM YYYY"));


    // Label HTML Elements
    let timeCard = $(".list-group").children("div").children("li");
    let saveButton = $(".list-group").children("div").children("button");
    console.log(timeCard.length);

    for (let i = 0; i < timeCard.length; i++) {
        let input = $("<textarea>");

        timeCard
          .eq(i)
          .attr("id", "time" + (9 + i))
          .attr("data-time", (9 + i))
          .text((9 + i) + " O'clock");
        console.log(timeCard.eq(i),saveButton);
        saveButton
          .eq(i)
          .text("Save")
          .attr("data-save", (9 + i))
          .attr("id", "save" + (9 + i));
        input.addClass("input" + (9 + i));
        timeCard.eq(i).append(input);
    }
});

