$(document).ready(function () {
  $("form#language").submit(function (event) {
    let language = [
      "whyProgramming",
      "skillLevel",
      "typeOfProgram",
      "newOrOld",
      "smart",
    ];
    let userAnswer = 0;

    language.forEach(function (language) {
      userAnswer += parseInt($("select#" + language).val());
    });

    if (userAnswer <= 7) {
      $("#python").show();
      $("#javaScript").hide();
      $("#ruby").hide();
    } else if (userAnswer >= 12) {
      $("#javaScript").show();
      $("#python").hide();
      $("#ruby").hide();
    } else if (userAnswer >= 8 || userAnswer <= 11){
      $("#ruby").show();
      $("#python").hide();
      $("#javaScript").hide();
    }
    event.preventDefault();
  });
});
