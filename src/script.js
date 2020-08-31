var button_audio = new Audio("https://monoame.com/awi_class/ballsound/click14.wav")
var screen_audio = new Audio("https://monoame.com/awi_class/ballsound/click18.wav")
var wiggle_audio = new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3")

$(".i5").click(
  // phonew(300px){
  // }
  function(){
    $(".phone").css("width","");
    $(".screen").css("height","");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

$(".i5s").click(
  // phonew(300px){
  // }
  function(){
    $(".phone").css("width","250px");
    $(".screen").css("height","420px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

$(".i6").click(
  // phonew(300px){
  // }
  function(){
    $(".phone").css("width","270px");
    $(".screen").css("height","440px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);

$(".i6s").click(
  // phonew(300px){
  // }
  function(){
    $(".phone").css("width","300px");
    $(".screen").css("height","460px");
    $(".phonename").text($(this).text());
    button_audio.play();
  }
);
var page = 0;
$(".screen").click(
  function(){
    page += 1;
    if (page > 2){
      page = 0;
    }
    $(".pages").css("left","-"+page*100+"%");
    screen_audio.play();
  }
);
$(".button").click(
  function(){
    page=0;
    $(".pages").css("left","0px");
    screen_audio.play();
  }
);
var turn = 0
$(".turn").click(
  function(){
    turn += 1;
    console.log(turn);
    $(".phone").css("transform","rotate("+turn*360+"deg)");
    button_audio.play();
  }
);

$(".wiggle").click(
  function(){
    wiggletime = 0;
    wiggle_audio.play();
  }
);

var wiggletime = 11;
setInterval(
  function(){
    if (wiggletime < 10){
      wiggletime += 1;
      console.log(wiggletime);
      if (wiggletime%2 == 0){
        $(".phone").css("left","-30px");
      }
      else{
        $(".phone").css("left","30px");
      }
      if(wiggletime == 10){
        $(".phone").css("left","");        
      }
    }
  }
  ,100);