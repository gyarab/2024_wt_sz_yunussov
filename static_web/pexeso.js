/*
console.log('START')

let karty = [
    { src: 'https:placecats.com/bella/100/100' },
    { src: 'https:placecats.com/millie/100/100' },
    { src: 'https:placecats.com/neo/100/100' },
]
let pole = [0,1,2,1,2,0]

el = document.getElementById('pexeso')

el.innerHTML = ""
pole.forEach((prvek) => {
    const karta = document.createElement('img')
    karta.src = karty[prvek].src
    el.appendChild(karta)
})
console.log('END')
*/
let cards = [];
let flippedCards = [];
let score = 0;

function initializeGame(pairCount) {
    score = 0;
    cards = [];
    flippedCards = [];

    for (let i = 0; i < pairCount; i++) {
        cards.push({ id: i, image: `img${i}.jpg`, matched: false });
        cards.push({ id: i, image: `img${i}.jpg`, matched: false });
    }
    cards.sort(() => Math.random() - 0.5);
    renderGame();
}
function renderGame() {
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";
    cards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        if (card.matched || flippedCards.includes(index)) {
            cardElement.style.backgroundImage = `url(images/${card.image})`;
        } else {
            cardElement.style.backgroundImage = "url('images/back.jpg')";
        }
        cardElement.addEventListener("click", () => flipCard(index));
        gameBoard.appendChild(cardElement);
    });
    document.getElementById("score").textContent = score;
}
let timeoutId = null;

function flipCard(index) {
    if (cards[index].matched || flippedCards.includes(index)) return;
    flippedCards.push(index);

    if (flippedCards.length === 2) {
        const [first, second] = flippedCards;

        if (cards[first].id === cards[second].id) {
            cards[first].matched = true;
            cards[second].matched = true;
            score++;
        }

        timeoutId = setTimeout(() => {
            flippedCards = [];
            renderGame();
            timeoutId = null;
        }, 1000);
    } else renderGame();
}

document.addEventListener("click", () => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        flippedCards = [];
        renderGame();
        timeoutId = null;
    }
});

function checkMatch() {
    const [first, second] = flippedCards;
    if (cards[first].id === cards[second].id) {
        cards[first].matched = true;
        cards[second].matched = true;
        score++;
    }
    flippedCards = [];
    setTimeout(renderGame, 1000);
}
document.getElementById("resetBtn").addEventListener("click", () => location.reload());
initializeGame(8)