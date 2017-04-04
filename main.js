setTimeout(function() {
  $('#top').slideUp();
}, 3000);

// $(window).scroll(function(){
//   $('#bar').slideUp();
// })

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('#bottom').slideDown();
   } else {
      $('#bottom').slideUp();
   }
   lastScrollTop = st;
});

var poetry, books, alliteration, gertrude, meep, lyricism, enjambment, page, anaphora, whitespace;

var explosions = ['mov/explo1.gif', 'mov/explo2.gif', 'mov/explo3.gif', 'mov/explo4.gif'];
var sounds = ['mov/sound1.mp3', 'mov/sound2.mp3', 'mov/sound3.mp3', 'mov/sound4.mp3'];

Mousetrap.bind('a', function() {
  randExplo();
});

Mousetrap.bind('s', function() {
  randExplo();
});

Mousetrap.bind('d', function() {
  randExplo();
});

Mousetrap.bind('f', function() {
  randExplo();
});

Mousetrap.bind('g', function() {
  randExplo();
});

Mousetrap.bind('h', function() {
  randExplo();
});

Mousetrap.bind('j', function() {
  randExplo();
});

Mousetrap.bind('k', function() {
  randExplo();
});

Mousetrap.bind('l', function() {
  randExplo();
});

function randExplo() {
    var audio = new Audio(sounds[getRandomInt(0, 4)]);
    console.log(audio);
    audio.play();

    // vary size for fun
    var size = ((Math.random()*100) + Math.random()*100 + 100).toFixed();
    var source = explosions[getRandomInt(0, 4)];

    explo = $("<img id='gif' src='"+source+"'>");
    explo.attr("src", source+"?a="+Math.random());
    explo.css({
        'width':size+'px',
        'height':size+'px',
    });

    // make position sensitive to size and document's width
    var posx = getRandomInt(0, $(window).width() - size)
    // var posy = (Math.random() * ($(window).height() - size)).toFixed();
    var posy = getRandomInt($(window).scrollTop(), $(window).scrollTop() + $(window).height() - size);

    console.log($(window).scrollTop());
    console.log($(window).height());
    console.log($(window).width());
    console.log($(document).height());

    explo.css({
        'position': 'absolute', 
        'left':posx+'px',
        'top':posy+'px',
    }).appendTo( 'body' ).delay(1000).fadeOut(500, function(){
      $(this).remove();
    }); 
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//MOBILE STUFF

document.addEventListener("touchstart", touch, true);

function touch() {
  randExplo();
}

// Mousetrap.bind('q', function() { 
//   if ($('#bg').find('#poetry').length) {
//     poetry = document.getElementById('poetry');
//     poetry.currentTime = 0;
//   } else {
//     $("#hold").html("<video id='poetry' src='mov/poetry.mp4'></video>");
//     $('#poetry').attr('autoplay', 'autoplay');
//   }

//   $('#poetry').on('ended',function(){
//     $('#poetry').remove();
//   });
// });



















