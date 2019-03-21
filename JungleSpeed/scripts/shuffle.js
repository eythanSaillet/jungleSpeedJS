function deckShuffle(deck) { // c'est du gros vol (Fisher-Yates shuffle)
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap elements
  }
  return deck;
}

function deckDistribution(deck, nb_players){ // on obtient une liste de longueur nb_players contenant le deck divisé entre ces joueurs (précedemment mélangé)
  let allPlayerDecks = [], cardsLeft, count
  for (var i = 0; i < nb_players; i++) {
    let playerDeck = []
    let cardsLeft = deck.length - (parseInt(deck.length/nb_players))*nb_players
    // eg : pour un deck de 80 cartes avec 3 joueurs
    // 80 - (26*3) = 2
    for (var x = i*parseInt((deck.length/nb_players)); x < ((i+1)*parseInt((deck.length/nb_players))); x++) {
      playerDeck.push(deck[x])
    }
    allPlayerDecks.push(playerDeck)
  }
  count = 0
  // gestion des cartes restantes
  for (var i = deck.length; i > deck.length-cardsLeft; i--) {
    allPlayerDecks[count].push(deck[i-1])
    count++
  }
  return allPlayerDecks
}
