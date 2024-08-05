  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KC2Y0L0QPT');
    
     var audio = new Audio('PTT-20240805-WA0006.opus');
    window.addEventListener('load', function() {
        audio.loop = true;
        audio.play();
      });
    
    audio.addEventListener('canplaythrough', function() {
        audio.loop = true;
        audio.play();
        });  
