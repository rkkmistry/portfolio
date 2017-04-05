setTimeout(function() {
  $('#top').slideUp();
}, 3000);

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

var words = ['mov/alliteration.mp3', 'mov/anaphora.mp3', 'mov/books.mp3', 'mov/enjambment.mp3', 'mov/gertrude.mp3', 'mov/lyricism.mp3', 'mov/poetry.mp3', 'mov/whitespace.mp3'];
var explosions = ['mov/explo1.gif', 'mov/explo2.gif', 'mov/explo3.gif', 'mov/explo4.gif'];
var sounds = ['mov/sound1.mp3', 'mov/sound2.mp3', 'mov/sound3.mp3', 'mov/sound4.mp3'];

Mousetrap.bind(['a', 'q', 'w', 'e', 'r', 'y', 'u', 'i', 'o', 'p', 'a', 'g', 'h', 'l', 'z', 'x', 'c', 'v', 'b', 'm'], function() {
  randExplo();  
});

Mousetrap.bind(['d'], function() {
    var audio = new Audio(words[0]);
    audio.volume=0.7;
    audio.play();
});

Mousetrap.bind(['t'], function() {
    var audio = new Audio(words[1]);
    audio.volume=0.7;
    audio.play();
});

Mousetrap.bind(['j'], function() {
    var audio = new Audio(words[2]);
    audio.volume=0.7;
    audio.play();
});

Mousetrap.bind(['v'], function() {
    var audio = new Audio(words[3]);
    audio.volume=0.7;
    audio.play();
});

Mousetrap.bind(['n'], function() {
    var audio = new Audio(words[4]);
    audio.volume=0.7;
    audio.play();
});

Mousetrap.bind(['k'], function() {
    var audio = new Audio(words[5]);
    audio.volume=0.7;
    audio.play();
});

Mousetrap.bind(['f'], function() {
    var audio = new Audio(words[6]);
    audio.volume=0.7;
    audio.play();
});

Mousetrap.bind(['s'], function() {
    var audio = new Audio(words[7]);
    audio.volume=0.7;
    audio.play();
});


 


function randExplo() {
    var audio = new Audio(sounds[getRandomInt(0, 4)]);
    audio.volume=0.2;
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
  var choice = getRandomInt(0, 2);
  if (choice==0) {
    randExplo();  
  } else {
    var audio = new Audio(words[getRandomInt(0, words.length)]);
    audio.volume=0.7;
    audio.play();
  }
  
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



















