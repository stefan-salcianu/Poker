const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");
const player5 = document.getElementById("player5");
const player6 = document.getElementById("player6");
const player7 = document.getElementById("player7");
const player8 = document.getElementById("player8");
const sideButton = document.getElementById("side-button");
const sidePot = document.getElementById("side-pot");
const dealerButton = document.getElementById("dealer-button");
const dealerDisc = document.getElementById("dealer-disck");
const smallBlindDisc = document.getElementById("small-blind-disc");
const bigBlindDisc = document.getElementById("big-blind-disc");

sideButton.addEventListener("click", () => {
  sidePot.classList.toggle("hidden");
});

const playerPositions = [
  { left: "15%", top: "70%" },
  { left: "35%", top: "71%" },
  { left: "66%", top: "71%" },
  { left: "80%", top: "70%" },
  { left: "80%", top: "50%" },
  { left: "66%", top: "36%" },
  { left: "35%", top: "36%" },
  { left: "15%", top: "50%" },
];

let currentPlayerIndex = 0;

function updatePositions() {
  // Calculate indices for small and big blinds
  const smallBlindIndex = (currentPlayerIndex + 1) % playerPositions.length;
  const bigBlindIndex = (currentPlayerIndex + 2) % playerPositions.length;

  // Update dealer position
  dealerDisc.style.left = playerPositions[currentPlayerIndex].left;
  dealerDisc.style.top = playerPositions[currentPlayerIndex].top;

  // Update small blind position
  smallBlindDisc.style.left = playerPositions[smallBlindIndex].left;
  smallBlindDisc.style.top = playerPositions[smallBlindIndex].top;

  // Update big blind position
  bigBlindDisc.style.left = playerPositions[bigBlindIndex].left;
  bigBlindDisc.style.top = playerPositions[bigBlindIndex].top;
}

dealerButton.addEventListener("click", () => {
  currentPlayerIndex = (currentPlayerIndex + 1) % playerPositions.length;
  updatePositions();
});

// Initialize positions
updatePositions();
