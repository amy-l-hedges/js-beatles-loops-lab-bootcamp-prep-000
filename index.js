
function theBeatlesPlay(musicians, instruments) {
  var clauses = []
  for (var i = 0; i < musicians.length; i++) {
    clauses.push(musicians[i] + " plays " + instruments[i])
  }
  return clauses
}

const johnFacts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He was raised by his aunt Mimi"]

function johnLennonFacts(array) {
  var superJohnFacts = []
  var i = 0
  while (i > johnFacts.length) {
    superJohnFacts.push(johnFacts[i] + "!!! ")
    i++
  }
  return superJohnFacts
}