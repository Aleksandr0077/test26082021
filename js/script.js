 $(document).ready(function() {
     $('.otziv__inner').slick({
         arrows: true,
         dots: true,
         slidesToShow: 3,
         slidesToScroll: 2,
         speed: 1000,
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [{
                 breakpoint: 1210,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                     infinite: true,
                     dots: true
                 }
             },
             {
                 breakpoint: 844,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 2
                 }
             },
             {
                 breakpoint: 744,
                 settings: {
                     arrows: false,
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }

         ]
     })
 });





 let time = 1800;
 const countDownEl = document.getElementById('countdown');

 setInterval(updateCountdown, 1000);

 function updateCountdown() {
     const minutes = Math.floor(time / 60);
     let seconds = time % 60;

     seconds = seconds < 10 ? "0" + seconds : seconds;
     countDownEl.innerHTML = `${minutes}:${seconds}`;
     time--;
 }