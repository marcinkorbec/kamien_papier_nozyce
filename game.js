// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0
};

const game = {
  playerHand: "",
  aiHand: "",
  playerHandHTML: ""
};

const hands = [...document.querySelectorAll('.select img')];

//Pierwsza funkcja

function handSelection() {
  console.log(this);
}
hands.forEach(hand => hand.addEventListener('click', handSelection))