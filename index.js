document.addEventListener("DOMContentLoaded", function () {
const quote = document.getElementById("quoteElement");
const author = document.getElementById("authorElement");
const api_url = "https://api.quotable.io/random"

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author

}

newQuoteButton.addEventListener("click", function() {
    getQuote(api_url)
})

    getQuote(api_url)


});