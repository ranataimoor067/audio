
var audio = new Audio('PTT-20240729-WA0006.opus');
audio.addEventListener('canplaythrough', function() {
audio.loop = true;
audio.play();
});  

audio.play();

var no = document.getElementById("clickme");
no.addEventListener("click", function (event){
    audio.loop = true;
    audio.play();
});

var king = document.getElementById("king");
king.addEventListener("click", function (event){
    audio.loop = true;
    audio.play();
});


