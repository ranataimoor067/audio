  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KC2Y0L0QPT');
    
     var audio = new Audio('AUD-20240806-WA0003.mp3');
    window.addEventListener('load', function() {
        audio.loop = true;
        audio.play();
      });
    
    audio.addEventListener('canplaythrough', function() {
        audio.loop = true;
        audio.play();
        });  
