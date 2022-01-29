$(document).ready(function() {
  $("form#language").submit(function(event){
    let language = ["whyProgramming", "skillLevel", "typeOfProgram", "newOrOld", "smart"];
    let userAnswer = 0;

    language.forEach(function(language){
      userAnswer += parseInt($("select#" + language).val());
    });

    if (userAnswer <= 3){
      $("#javaScript").show();
    } else if (userAnswer === 4 && userAnswer === 8 && userAnswer === 9) {
      $("#python").show();
    } else if (userAnswer === 0 && userAnswer === 5 && userAnswer === 7 && userAnswer === 9) {
      $("#ruby").show();
    }

    
    
    
    
    event.preventDefault();
  
  
  
  
  });
});