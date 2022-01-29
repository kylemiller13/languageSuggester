$(document).ready(function() {
  $("form#language").submit(function(event){
    let language = ["whyProgramming", "skillLevel", "typeOfProgram", "newOrOld", "smart"];
    let userAnswer = 0;

    language.forEach(function(language){
      userAnswer += parseInt($("select#" + language).val());
    });

    
    
    
    
    event.preventDefault();
  
  
  
  
  });
});