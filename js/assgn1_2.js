function change(){

  function popup(){
     document.querySelector("#form-section").style.display = "none";
 document.querySelector("#pop-up").style.display = "block";

  document.querySelector("body").style.background = "url('https://i.giphy.com/media/cIzl4HcJoDQBKVJ75h/200w.webp')";


  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundSize = "cover";

  var x = document.querySelector(".username").value;
   document.querySelector("#pop-up").innerHTML = x+":kisama no kobushi dato kadi nimo kinanwae <br> ME:Omae wa mou Shindeiru <br><i>" + x + "</i>:NANI!";
  }
  var x = document.querySelector(".username").value;
          var y = document.querySelector(".password").value;


          if(x=="" || x=="undefined" || y=="" || y=="undefined"){
              alert("Woah Woah Woah!!...let me stop you right there...you forgot to enter your Username & Password. I can't let you proceed without that.");
          }
          else{
           popup();
     }

}
