var feedbackSwiper1 = new Swiper('.swiper-container1', {
  autoplay: {
    delay: 4000
  },
  loop: true,
  effect : 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
var feedbackSwiper2 = new Swiper('.swiper-container2', {
  autoplay: false,
  loop: true,
  effect : 'slide',
  pagination: {
    el: '#reviews-center',
    clickable: 'true',
    bulletElement : 'a',
    renderBullet: function (index, className) {
      var img = '<img src="images/thenextweb-black.svg">';
      switch (index) {
        case 0: img='<img src="images/thenextweb-black.svg">';break;
        case 1: img='<img src="images/appleworldtoday-black.svg">';break;
        case 2: img='<img src="images/appstorm-black.svg">';break;
      }
      return '<a href="javascript:;" class="' + className + '">' + img + '</a>';
    },
    bulletClass: 'n',
    bulletActiveClass: 'active'
  }
})

function macPosition () {
  if ($(document).scrollTop() <= 2900) {
    $('#iMac').css('top', 0);
  } else if ($(document).scrollTop() >= 2900 && $(document).scrollTop() <=3350) {
    $('#iMac').css('top', $(document).scrollTop() - 2900);
  } else {
    $('#iMac').css('top', 450);
  }
}

function macbook () {
  if ($(document).scrollTop() >= 3350) {
    if ($('#multiply-left').css('left') == '-400px') {
      $('#multiply-left').animate({left: "-200px", opacity: '1'},500);
    }
  } else if ($(document).scrollTop() < 3350) {
    if ($('#multiply-left').css('left') == '-200px') {
      $('#multiply-left').animate({left: "-400px", opacity: '0'},500);
    }
  }
}

var timer = null;
function myTimer (second) {
  $('#seconds').text(second);
  if (second == 0) {
    changeImg();
    clearTimeout(timer);
    second = 7;
  }
  timer = setTimeout(function () {
    myTimer(--second);
  },1000);
}

function changeImg () {
  var imgPrev = $(".show-image:first > img");
  var imgNow = $("#next-image > img:first");
  $("#next-image").append(imgPrev);
  $(".show-image").empty().append(imgNow);
  clearTimeout(timer)
  myTimer(7);
}

$(function () {
  $('#topper-bg').css('transform','rotate(-20deg)');
  macPosition();
  macbook();
  $(document).scroll(function () {
    macPosition();
    macbook();
  });
  myTimer(7);
  $('.player-right').click(changeImg);
})