const quotes = [
  "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
  "Don’t Let Yesterday Take Up Too Much Of Today.",
  "One more quote",
  "Second more quote",
  "Three more quote",
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);

  document.getElementById("text").innerHTML = quotes[randomNumber];
}

function handleTweet() {
  const quote = document.querySelector("#text").innerHTML;
  const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&text=${quote}`;

  var link = document.getElementById("tweet-quote");
  link.setAttribute("href", tweetLink);
}
