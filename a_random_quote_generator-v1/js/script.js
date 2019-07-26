 /******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
      quote: 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
      source: 'Marcus Aurelius',
      tag: 'philosophy'
   },
  {
      quote: "I am an expression of the divine, just like a peach is, just like a fish is. I have a right to be this way... I can't apologize for that, nor can I change it, nor do I want to... We will never have to be other than who we are in order to be successful... We realize that we are as ourselves unlimited and our experiences valid. It is for the rest of the world to recognize this, if they choose.",
      source: 'Alice Walker', 
      citation: 'The Color Purple',
      year: '1982',
      tag: 'religion'
  },
  {
      quote: 'When you blame others, you give away your power.',
      source: 'Cate Huisman',
      tag: 'psychology'
  },
  {
      quote: 'If it sounds good, it is good.',
      source: 'Duke Ellington',
      tag: 'music'
  },
  {
      quote: "This process of the good life is not, I am convinced, a life for the faint-hearted. It involves the stretching and growing of becoming more and more of one's potentialities. It involves the courage to be. It means launching oneself fully into the stream of life." ,
      source: 'Carl Rogers',
      citation: 'On Becoming a Person',
      year: '1961',
      tag: 'psychology'
  },
  {
      quote: "Everything can be taken from a person but one thing: the last of the human freedoms -- to choose one's attitude in any given set of circumstances, to choose one's own way.",
      source: 'Viktor Frankl',
      citation: "Man's Search for Meaning",
      year: '1946',
      tag: 'psychology'
  },
  {
      quote: 'You’re imperfect and you’re wired for struggle but you are worthy of love and belonging.',
      source: 'Brené Brown',
      citation: 'The Power of Vulnerability - TEDxHouston',
      year: '2010',
      tag: 'psychology'
  },
  {
      quote: 'I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight.',
      source: 'Malcolm X',
      citation: 'The Autobiography of Malcolm X',
      year: '1965',
      tag: 'sociology'
  },
  {
      quote: "If you have come to help me, you are wasting our time. But if you have come because your liberation is bound up with mine, then let us work together.",
      source: 'Aboriginal activists group',
      citation: 'Queensland',
      year: "1970s'",
      tag: 'sociology'
  },
  {
      quote: 'When we choose to love we choose to move against fear—against alienation and separation. The choice to love is a choice to connect—to find ourselves in the other.',
      source: 'bell hooks',
      citation: 'All About Love',
      year: "2000",
      tag: 'love'
  },
  {
      quote: 'It is not difference that immobilizes us, but silence. And  are so many silences to be broken.',
      source: 'Audre Lorde',
      citation: 'The Cancer Journals',
      year: "1980",
      tag: 'sociology'
  },
  {
    quote: 'Coding is a humbling trade. The better you get at coding, the dumber you realize you are.',
    source: 'Matt Krabacher',
    year: "2019",
    tag: 'humor'
},
];



  // Function below generates random integer no greater than the length of the Quotes Array.
  // It then returns the object in the Quotes Array that corresponds with the randomly generated number.

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length ); 
  return (quotes[randomNumber]); 
};


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var randomQuotesArrayObject = getRandomQuote();
  var htmlString = '<p class="quote">' 
    htmlString+= randomQuotesArrayObject.quote + '</p><p class="source">'
    htmlString+= randomQuotesArrayObject.source + '<span class="citation">' 
    if (randomQuotesArrayObject.citation) { 
      htmlString+= randomQuotesArrayObject.citation + '</span><span class="year">'; 
    } 
    if (randomQuotesArrayObject.year) { 
    htmlString+= randomQuotesArrayObject.year + '</span>' ;
    }
    if (randomQuotesArrayObject.tag) { 
      htmlString+= randomQuotesArrayObject.tag + '</span>' ;
      }
    '</p>';
  document.getElementById('quote-box').innerHTML = htmlString;
};



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.