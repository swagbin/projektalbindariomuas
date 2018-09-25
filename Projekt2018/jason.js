$(function() {
      $('.vilka').on('click', function() {
      $(".column2").slideToggle(1500);
      $('.column2').show();;
      
     
      });
     
     
     $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      


      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      });

});

      

});
function validering(){
      var validera=true;
      var namn=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var nummer=document.getElementById("number").value;
      var emailValidering=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      if (namn !== '' && email !== '' && nummer !== '')
       {
      validera=true;
    
   
      if (!/^[A-Za-z]+$/.test(namn)) {
           alert('Your name can only contain charachers A-Z');
          validera = false; 
      }
      if ( !/^[0-9]+$/.test(nummer)&& nummer.length < 7 ) 
      {
          alert('The phone-number must contain at least 7 digits');
          validera = false;
      }
      if(!emailValidering.test(String(email).toLowerCase()))
      {
          alert("Please insert a valid email-adress");
          validera=false;
      }
  
      }    
  else{
      alert("Please fill all fields to send your message");
  }
  return validera;
  }

  var i = 0, imgsrc = new Array(), preload = new Array();
imgsrc[0]="photo1.jpg";
imgsrc[1]="photo2.jpg";
imgsrc[2]="photo3.jpg";
imgsrc[3]="photo4.jpg";
imgsrc[4]="photo5.jpg";
imgsrc[5]="photo6.jpg";
for (var j=0;j<imgsrc.length;j++)
{
preload[j] = new Image;
preload[j].src = imgsrc[j];
}
function mode(param)
{
smode=param;
}
function startSlideshow()
{
if(smode=="play")
{
document.getElementById("play").disabled="disabled";
document.getElementById("pause").disabled="";
document.getElementById("stop").disabled="";
document.getElementById("slideshow").src=imgsrc[i];
i++;
setTimeout("startSlideshow()",1000);
}
else if(smode=="pause")
{
document.getElementById("pause").disabled="disabled";
document.getElementById("play").disabled="";
document.getElementById("play").value="Resume";
}
else if(smode=="stop")
{
document.getElementById("play").disabled="";
document.getElementById("play").value="Play";
document.getElementById("pause").disabled="disabled";
document.getElementById("stop").disabled="disabled";
document.getElementById("slideshow").src=imgsrc[0];
i=0;
}
if(i==imgsrc.length)
{
i=0;
}
}

      

  
