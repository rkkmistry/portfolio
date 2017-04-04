var poetry, books, alliteration, gertrude, meep, lyricism, enjambment, page, anaphora, whitespace;

var explosions = ['mov/explo1.gif', 'mov/explo2.gif', 'mov/explo3.gif', 'mov/explo4.gif'];
var sounds = ['mov/sound1.mp3', 'mov/sound2.mp3', 'mov/sound3.mp3', 'mov/sound4.mp3'];

$('body').click(function(){ 
  document.location.href = 'file:///Users/rkkmistry/Desktop/portfolio/portfolio.html';
});

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

Mousetrap.bind('q', function() { 
  if ($('#bg').find('#poetry').length) {
    poetry = document.getElementById('poetry');
    poetry.currentTime = 0;
  } else {
    $("#hold").html("<video id='poetry' src='mov/poetry.mp4'></video>");
    $('#poetry').attr('autoplay', 'autoplay');
  }

  $('#poetry').on('ended',function(){
    $('#poetry').remove();
  });
});

Mousetrap.bind('w', function() { 
  if ($('#bg').find('#books').length) {
    books = document.getElementById('books');
    books.currentTime = 0;
  } else {
    $("#hold").html("<video id='books' src='mov/books.mp4'></video>");
    $('#books').attr('autoplay', 'autoplay');
  }

  $('#books').on('ended',function(){
    $('#books').remove();
  });
});

Mousetrap.bind('e', function() { 
  if ($('#bg').find('#alliteration').length) {
    alliteration = document.getElementById('alliteration');
    alliteration.currentTime = 0;
  } else {
    $("#hold").html("<video id='alliteration' src='mov/alliteration.mp4'></video>");
    $('#alliteration').attr('autoplay', 'autoplay');
  }

  $('#alliteration').on('ended',function(){
    $('#alliteration').remove();
  });
});

Mousetrap.bind('r', function() { 
  if ($('#bg').find('#gertrude').length) {
    gertrude = document.getElementById('gertrude');
    gertrude.currentTime = 0;
  } else {
    $("#hold").html("<video id='gertrude' src='mov/gertrude.mp4'></video>");
    $('#gertrude').attr('autoplay', 'autoplay');
  }

  $('#gertrude').on('ended',function(){
    $('#gertrude').remove();
  });
});

Mousetrap.bind('t', function() { 
  if ($('#bg').find('#meep').length) {
    meep = document.getElementById('meep');
    meep.currentTime = 0;
  } else {
    $("#hold").html("<video id='meep' src='mov/meep.mp4'></video>");
    $('#meep').attr('autoplay', 'autoplay');
  }

  $('#meep').on('ended',function(){
    $('#meep').remove();
  });
});

Mousetrap.bind('y', function() { 
  if ($('#bg').find('#lyricism').length) {
    lyricism = document.getElementById('lyricism');
    lyricism.currentTime = 0;
  } else {
    $("#hold").html("<video id='lyricism' src='mov/lyricism.mp4'></video>");
    $('#lyricism').attr('autoplay', 'autoplay');
  }

  $('#lyricism').on('ended',function(){
    $('#lyricism').remove();
  });
});

Mousetrap.bind('u', function() { 
  if ($('#bg').find('#enjambment').length) {
    enjambment = document.getElementById('enjambment');
    enjambment.currentTime = 0;
  } else {
    $("#hold").html("<video id='enjambment' src='mov/enjambment.mp4'></video>");
    $('#enjambment').attr('autoplay', 'autoplay');
  }

  $('#enjambment').on('ended',function(){
    $('#enjambment').remove();
  });
});

Mousetrap.bind('i', function() { 
  if ($('#bg').find('#page').length) {
    page = document.getElementById('page');
    page.currentTime = 0;
  } else {
    $("#hold").html("<video id='page' src='mov/page.mp4'></video>");
    $('#page').attr('autoplay', 'autoplay');
  }

  $('#page').on('ended',function(){
    $('#page').remove();
  });
});

Mousetrap.bind('o', function() { 
  if ($('#bg').find('#anaphora').length) {
    anaphora = document.getElementById('anaphora');
    anaphora.currentTime = 0;
  } else {
    $("#hold").html("<video id='anaphora' src='mov/anaphora.mp4'></video>");
    $('#anaphora').attr('autoplay', 'autoplay');
  }

  $('#anaphora').on('ended',function(){
    $('#anaphora').remove();
  });
});

Mousetrap.bind('p', function() { 
  if ($('#bg').find('#whitespace').length) {
    whitespace = document.getElementById('whitespace');
    whitespace.currentTime = 0;
  } else {
    $("#hold").html("<video id='whitespace' src='mov/whitespace.mp4'></video>");
    $('#whitespace').attr('autoplay', 'autoplay');
  }

  $('#whitespace').on('ended',function(){
    $('#whitespace').remove();
  });
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























