"use strict"

$(document).ready(function(){
  console.log("All elements loaded");
  hideForms();
  startTimer(5);
  $("#vote").click(displayLogin);
  $("#register").click(displayRegister);
})

function hideForms(){
  $("#R").hide();
  $("#L").hide();
}

function displayLogin(){
  $("#L").show(500);
  $("#R").hide(500);
}

function displayRegister(){
  $("#R").show(500);
  $("#L").hide(500);
}

function startTimer(minutes){

    var min = minutes - 1;
    var sec = 59;

    var stopTime = setInterval(function(){

      if(sec < 10)
      $("#time").text(min + ":0" + sec);
      else
      $("#time").text(min + ":" + sec);
      sec--;
      if((sec == -1) && (min > 0)){
        sec = 59;
        min--;
      }

      if((min == 0) && (sec == -1))
          clearInterval(stopTime);

    }, 1000);


}
