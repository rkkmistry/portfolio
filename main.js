setTimeout(function() {
  $('#top').slideUp();
}, 10000);

setTimeout(function() {
  $('#bottom').slideDown();
}, 2000);

// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        $('#bottom').slideDown();
//    } else {
//       $('#bottom').stop(true, true).slideUp();
//    }
//    lastScrollTop = st;
// });

var words = ['alliteration', 'anaphora', 'books', 'enjambment', 'gertrude stein', 'lyricism', 'poetry', 'whitespace'];
var explosions = ['mov/explo1.gif', 'mov/explo2.gif', 'mov/explo3.gif', 'mov/explo4.gif'];
var sounds = ['mov/sound1.mp3', 'mov/sound2.mp3', 'mov/sound3.mp3', 'mov/sound4.mp3'];

Mousetrap.bind(['a', 'q', 'e', 'y', 'u', 'o', 'g', 'h', 'l', 'z', 'c', 'v', 'm'], function() {
  randExplo();  
});

Mousetrap.bind(['d', 'p'], function() {
    var audio = new Audio("mov/"+words[0]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[0])
});

Mousetrap.bind(['t'], function() {
    var audio = new Audio("mov/"+words[1]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[1])
});

Mousetrap.bind(['j', 'r'], function() {
    var audio = new Audio("mov/"+words[2]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[2])
});

Mousetrap.bind(['v', 'i'], function() {
    var audio = new Audio("mov/"+words[3]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[3])
});

Mousetrap.bind(['n', 'w'], function() {
    var audio = new Audio("mov/"+words[4]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[4])
});

Mousetrap.bind(['k', 'x'], function() {
    var audio = new Audio("mov/"+words[5]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[5])
});

Mousetrap.bind(['f', 'b'], function() {
    var audio = new Audio("mov/"+words[6]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[6])
});

Mousetrap.bind(['s'], function() {
    var audio = new Audio("mov/"+words[7]+".mp3");
    audio.volume=0.5;
    audio.play();
    textAppear(words[7])
});

 function textAppear(text) {
    // vary size for fun
    var size = 2 + Math.random();

    output = $("<p class='text'>"+text+"</p>");
    output.css({
        'font-size':size+'em',
    });

    // make position sensitive to size and document's width
    var posx = getRandomInt(0, $(window).width() - 100)
    var posy = getRandomInt($(window).scrollTop(), $(window).scrollTop() + $(window).height() - 100);

    // output.addClass('animated zoomIn')
    output.css({
        'position': 'absolute', 
        'left':posx+'px',
        'top':posy+'px'
    }).appendTo( 'body' );

    output.addClass('animated zoomIn').delay(3500).fadeOut(500, function(){
      $(this).remove();
    }); 
}

function randExplo() {
    var audio = new Audio(sounds[getRandomInt(0, 4)]);
    audio.volume=0.5;
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
    var posy = getRandomInt($(window).scrollTop(), $(window).scrollTop() + $(window).height() - size);

    explo.css({
        'position': 'absolute', 
        'left':posx+'px',
        'top':posy+'px'
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
  setTimeout(function(){
    randExplo();  
  }, getRandomInt(300, 700));
  
  // var theword = words[getRandomInt(0, words.length)];
  // var audio = new Audio("mov/"+ theword +".mp3");
  // audio.volume=0.5;
  // audio.play();
  // textAppear(theword);
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



















