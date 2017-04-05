var lines;
var markov;
var display = '';
var length = 2000;

lines = "Please buy my poems they are very good you should totally pay me for poems because I write high quality poems fast that bring very good satisfaction to people they are always delivered on time and people are always very excited about them because they are high quality poems delivered fast to you on time and always fresh out of my mind and I am Krishan the poet mistry and I am ready to write you a poem because you deserve great hot fresh poems from me a master poet Krishan mistry poem master poet god ready to write you the best poems serving these poems up fresh ready for you to consume because I am a poet and I am ready here for you to get ready for my poems because they are excellent poems and I think that you will really enjoy them because I am poet mistry and I am here to save the day with my poems that everyone likes and so will you for just a small fee just a very small fee that isn’t a lot for which you can get great poems poems that will blow your mind and make you so happy these poems don’t lie to you and I would never lie to you because I am just a craftsman who enjoys the wonderful works of art that I produce and I want to give to you my beautiful customer who deserves nothing more than some amazing poems that I will produce for you for a very very small fee and I hope that you enjoy my poems as much as I enjoy writing them for you which I really do in fact I would say it is something that brings me great joy you know you would never really expect how much of a great time this is for me the poet mistry here to write you some poems that I’m thinking of all day poems that are fantastic and really just an excellent part of my day and an excellent part of your day and they are just for you and me and we’re all going to have a really good time and I hope you like my poems and they are awesome and together we can write some of the best poems that have ever been written by humans or even by me yes that is right I actually need your help to write my poems so if you could help me write poems then there would be more poems which would be even better for everyone here including myself and including you yes I hope that we can all have the most poems possible more poems than have ever been before more poems than have ever been written in the history of the world I’m here to make a change and so can you together we will write poems and have a really good time and I’m Krishan and I’m here to write the best poems which I will give to you not quite free of charge but for a very small fee which you can send me in whatever way you want because there are poems and I am going to write them for you and I think that there will be great poems which we can all have poems that are not that short or long but the perfect length that encourages us all to live together in harmony to know and think in better ways that are encouraged by the kinds of rituals that make us better people because amongst the worlds of poems in the heart of poetry there lies something that could make us happier and better and together with my craft and my pure intention of heart we could make something better for all of us and that is because I have the best poems which I know you will really enjoy hearing and reading and in the future you will look back and think about what a wonderful time it was to just live amongst the amazing poems which I will construct for you for a small fee but they are really wonderful poems that I hope we can all live together and love and you and I will make great poems together which will always be the best part of exactly everything that happens in the world and the poems will be there for all of us and together poetry will save the world and you will buy poems from me which I will write for you using my skills and craft and time because I am here and dedicated to looking out for you and figuring out the best possible way to use my skills to craft the best poems that will be things that we can all enjoy for a low low price that you can get to me at some point but I will be here ready and waiting for this great poetry time that we will all have together so again I should add that you should buy my poems because they are some of the best poems you will ever read and I think that you will really enjoy them and have a wonderful time living and breathing and reading amongst these poems that have made people fall in love with not just me but also other people and the best part is that you can get this poems now in just a short time because I work very fast and am happy to deliver these poems to you for just a small fee that can be paid in many ways and I’m happy that everyone is able to come to my home and receive poems from me which I will write and learn and use my best possible skills to craft for you thank you so much for what you are doing in the world and I will be the one to write you poems which you will love "
lines = lines.toLowerCase();
markov = new MarkovGenerator(10, length);
beginnings = ["please buy", "i hope tha", "i am poet ", "i have the", "i want to ", "i will wri", "i am krish"];

Array.prototype.choice = function() {
  var i = getRandomInt(0, this.length);
  return this[i];
}

// Feed all the lines from the text file into the generator
markov.feed(lines);

while (display.length < length) {
  display = markov.generate();
}

$('#markov-text').html(markov.generate());

// A MarkovGenerate object
function MarkovGenerator(n, max) {
  // Order (or length) of each ngram
  this.n = n;
  // What is the maximum amount we will generate?
  this.max = max;
  // An object as dictionary
  // each ngram is the key, a list of possible next elements are the values
  this.ngrams = {};
  // A separate array of possible beginnings to generated text
  this.beginnings = [];

  // A function to feed in text to the markov chain
  this.feed = function(text) {

    // Discard this line if it's too short
    if (text.length < this.n) {
      return false;
    }

    // Store the first ngram of this line
    // var beginning = text.substring(0, this.n);
    // this.beginnings.push(beginning);

    // Now let's go through everything and create the dictionary
    for (var i = 0; i < text.length - this.n; i++) {
      var gram = text.substring(i, i + this.n);
      // this.beginnings.push(gram);
      var next = text.charAt(i + this.n);
      // Is this a new one?
      if (!this.ngrams.hasOwnProperty(gram)) {
        this.ngrams[gram] = [];
      }
      // Add to the list
      this.ngrams[gram].push(next);
    }
  }

  // Generate a text from the information ngrams
  this.generate = function() {

    // Get a random  beginning
    var current = beginnings.choice();
    var output = current;


    // Generate a new token max number of times
    for (var i = 0; i < this.max; i++) {
      // If this is a valid ngram
      if (this.ngrams.hasOwnProperty(current)) {
        // What are all the possible next tokens
        var possible_next = this.ngrams[current];
        // Pick one randomly
        var next = possible_next.choice();
        // Add to the output
        output += next;
        // Get the last N entries of the output; we'll use this to look up
        // an ngram in the next iteration of the loop
        current = output.substring(output.length - this.n, output.length);
      } else {
        break;
      }
    }
    // Here's what we got!
    return output;
  }
}