const quoteEl = document.getElementById("quoteEl");
const authorEl = document.getElementById("authorEl");
const refreshBtn = document.getElementById("refreshBtn");

function loadQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => showQuote(data));
}

function showQuote(quote) {
  quoteEl.innerHTML = quote.content;
  authorEl.innerText = quote.author;
}

loadQuote();
refreshBtn.addEventListener("click", loadQuote);