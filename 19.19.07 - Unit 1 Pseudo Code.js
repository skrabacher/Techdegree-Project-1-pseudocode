var quotes = [
    {
        quote: 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
        source: 'Marcus Aurelius'
     },
    {
        quote: "I am an expression of the divine, just like a peach is, just like a fish is. I have a right to be this way... I can't apologize for that, nor can I change it, nor do I want to... We will never have to be other than who we are in order to be successful... We realize that we are as ourselves unlimited and our experiences valid. It is for the rest of the world to recognize this, if they choose.",
        source: 'Alice Walker, The Color Purple' //add italics with css
    },
    {
        quote: 'When you blame others, you give away your power.',
        source: 'Cate Huisman'
    },
    {
        quote: 'If it sounds good, it is good.',
        source: 'Duke Ellington'
    },
    {
        quote: "This process of the good life is not, I am convinced, a life for the faint-hearted. It involves the stretching and growing of becoming more and more of one's potentialities. It involves the courage to be. It means launching oneself fully into the stream of life." ,
        source: 'Carl Rogers'
    },
    {
        quote: "Everything can be taken from a person but one thing: the last of the human freedoms -- to choose one's attitude in any given set of circumstances, to choose one's own way.",
        source: 'Viktor Frankl'
    },
    {
        quote: 'You’re imperfect and you’re wired for struggle but you are worthy of love and belonging.',
        source: 'Brené Brown'
    },
    {
        quote: 'I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight.',
        source: 'Malcolm X, The Autobiography of Malcolm X'
    },
    {
        quote: "If you have come here to help me, you are wasting our time. But if you have come because your liberation is bound up with mine, then let us work together.",
        source: 'Aboriginal activists group, Queensland, 1970s'
    },
    {
        quote: 'When we choose to love we choose to move against fear—against alienation and separation. The choice to love is a choice to connect—to find ourselves in the other.',
        source: 'bell hooks'
    },
    {
        quote: 'It is not difference that immobilizes us, but silence. And there are so many silences to be broken.',
        source: 'Audre Lorde'
    },
];

    

//function below returns a random integer from zero to eleven
function getRandomQuote() {
var randomNumber = Math.floor( Math.random() * 12 ); 
return quotes[randomNumber]; //use the random number and box notation to grab a random item from the quotes array
// return the random item
};
console.log(getRandomQuote);


//function getRandomQuote() {
//    window.alert( quotes[randomNumber]); //***/should this be document.write instead of window.alert?? need to add to html file or js file?
//};