var index=0;
var bild=["2.jpg","3.jpg","1.jpg"];
var intervalId;
var text=["This is a website we made for a design company who decided to make their store an E-bussiness","This is a website-improvement we made a for a company before the release of a new product."
          ,"This is one of our employees in work doing an ER-model which is a important park of a system-development project."];

function bilder(){

intervalId=setInterval(
   function(){
    if(index===bild.length){
   index=0;  
}

 $("#textDescription").html(text[index]);
document.getElementById("imgGame").setAttribute("src",bild[index]); 

index++;

},3000);
}
 function stopInterval(){
    clearInterval(intervalId);

}  


$(function() {
      ändring=true;
      $('.vilka').on('click', function() {
      $(".column2").slideToggle(1500);
      $('.column2').show();
                });
      ///storage data 
        $("textarea").focusout(function regText(){
        var textData=document.getElementById("meddelande").value;
        localStorage.setItem("text",textData);
      
      })
////storage data
      $("input").focusout(function regData(){

        var namnData=document.getElementById("name").value;
        localStorage.setItem("namn",namnData);
        var emailData=document.getElementById("email").value;
        localStorage.setItem("email",emailData);
        var nummerData=document.getElementById("number").value;
        localStorage.setItem("nummer",nummerData);
        
    
        
        
    
    

});
///remove data
$("#bk1").on("click",function(){
localStorage.removeItem("namn");
localStorage.removeItem("email");
localStorage.removeItem("nummer");
localStorage.removeItem("text");
});

     
      
       jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });
      
      $("#knapp").on("click",function(){
        if(ändring===false){
            $("#knapp").html("stop");
            bilder();
            ändring=true;
        }else{
            $("#knapp").html("start");
            stopInterval();
            ändring=false;   
        }
    });
           $('.vilka').on("mouseover", function(){
        $('.vilka').css("color","purple");
    });
    $('.vilka').on("mouseout", function(){
        $('.vilka').css("color","white");
    });
     
     $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      
 $('#name').keyup(() => { //valedera vad det står i namn text fältet//
        valderaNamn();
    });
    $("#email").keyup(()=>{
        valederaEpost();
    });
    $("#number").keyup(()=>{
        valederaTelefonnummer();
    });
    $("#meddelande").keyup(()=>{
        valederaMeddelande();
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
function valderaNamn(){

    var namn=document.getElementById("name").value;


if (namn == '')
{
    $(".nameText").html("fyll i ditt namn");
    $(".nameText").css("color","red");
}
     else if(namn.length < 3){
        $('.nameText').html("Det måste vara minst 3 tecken");
        $('.nameText').css("color", "red");
}
else if (/^[0-9]+$/.test(namn)){
    $('.nameText').html("skriv bokstäver i namn fältet");
    $('.nameText').css("color", "red");
}
else{
    $('.nameText').html("O.K");
    $('.nameText').css("color", "green");
}

}
function valederaEpost(){

var epost=document.getElementById("email").value;

if(epost==""){
$(".emailText").html("fyll i e-post fältet");    
$(".emailText").css("color","red");
}
else if(!epost.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
$(".emailText").html("skriv in rätt epost format");
$(".emailText").css("color","red");
}
else{
    $(".emailText").html("o.k");
    $(".emailText").css("color","green");
}
}
function valederaTelefonnummer(){
    var telefonnummer=document.getElementById("number").value;
   if(telefunnummer=0){
        $(".nummerText").html("skriv in ditt telefonnummer med 10 siffror");
        $(".nummerText").css("color","red");
    }
       else if(!telefonnummer.match(/^[0-9\-\+]{9,10}$/)){
        $(".nummerText").html("måste innehålla bara siffror");
        $(".nummerText").css("color","red");
    }
    else  if(telefonnummer.length<=13){
        $(".nummerText").html("o.k");
        $(".nummerText").css("color","green");
    }
    else{
        (".nummerText").html("o.k");
        $(".nummerText").css("color","green");
    }
}

function valederaMeddelande(){
var text=document.getElementById("meddelande").value;
if(text==""){
    $(".meddelandeText").html("beskriv ditt meddelande");
    $(".meddelandeText").css("color","red");
}
else if(text.length < 20){
    $(".meddelandeText").html("beskriv mera");
    $(".meddelandeText").css("color","red");
}
else{
    $(".meddelandeText").html("O.K");
    $(".meddelandeText").css("color","green");
}
}
function validering(){
     var namn=document.getElementById("name").value;
     var email=document.getElementById("email").value;
     var nummer=document.getElementById("number").value;
     var text=document.getElementById("meddelande").value;

     if (namn == '' && email == '' && nummer == '' &&text=='')
      {
        alert("fyll i alla fälet för att skicka formläret");
      }
    }
//upload data from localstorage//
 function loadData(){
        var sparatNamn=localStorage.getItem("namn");
        var  sparatEmail=localStorage.getItem("email");
        var sparatNummer=localStorage.getItem("nummer");
        var sparatText=localStorage.getItem("text");
   
    if(sparatNamn == null || sparatEmail== null ||sparatNummer==null
        ||sparatText==null){}
        else{
        if(sparatNamn ){
            document.getElementById("name").value=sparatNamn;
        }
        if(sparatEmail){
            document.getElementById("email").value=sparatEmail;
        }
        if(sparatNummer){
            document.getElementById("number").value=sparatNummer;
        }
        if(sparatText){
            document.getElementById("meddelande").value=sparatText;
        }
    }
}



  
