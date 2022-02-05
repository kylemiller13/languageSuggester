$(document).ready(function () {
  $("form#language").submit(function (event) {
    let language = [
      "whyProgramming",
      "skillLevel",
      "typeOfProgram",
      "newOrOld",
      "smart"
    ];
    let userAnswer = 0;

    language.forEach(function (language) {
      userAnswer += parseInt($("select#" + language).val());
    });
    $("#python").hide();
    $("#javaScript").hide();
    $("#ruby").hide();
    if (userAnswer <= 7) {
      $("#python").show();
    } else if (userAnswer >= 12) {
      $("#javaScript").show();
    } else if (userAnswer >= 8 || userAnswer <= 11){
      $("#ruby").show();
    }
    event.preventDefault();
  });
});
