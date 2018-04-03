
function theBeatlesPlay(musicians, instruments) {
  var clauses = []
  for (var i = 0; i < musicians.length; i++) {
    clauses.push(musicians[i] + " plays " + instruments[i])
  }
  return clauses
}

const johnFacts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts() {
  var superJohnFacts = []
  var i = 0
  while (i > johnFacts.length) {
    superJohnFacts.push(johnFacts[i] + "!!!")
    i++
  }
  return superJohnFacts
}

function iLoveTheBeatles(num) {
  var thisMuch = []
  do {
    thisMuch.push("I Love the Beatles!")
    num++
  } while (thisMuch.length < )
  return thisMuch
}