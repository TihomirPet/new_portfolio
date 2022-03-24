
$('.Slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:$('.nextA'),
    prevArrow:$('.prevA'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
$('.SliderA').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });