
var audio = new Audio('AUD-20240803-WA0012.opus');
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


