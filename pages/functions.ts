

const tallverdi = ["2", "3", "4", "5", "6", "7", "8", "9", "t", "c", "d", "k", "e"]
const kortfarge = ["k", "r", "h", "s"]

export const isFourOfAKind = (ranks: any[]) => { // Her måtte konvertert ranks til numbers helt i starten, endre på mye greier...
  ranks = getNum(ranks)
    .sort((a, b) => a - b)
  const fourFirst = ranks[0] === ranks[1] && ranks[1] === ranks[2] && ranks[2] === ranks[3]
  const fourLast = ranks[1] === ranks[2] && ranks[2] === ranks[3] && ranks[3] === ranks[4]
  return fourFirst || fourLast
}

export const isFullHouse = (ranks: string[]) => {
  let array = getNum(ranks)
  array.sort((a, b) => a - b)
  const fullHouseLowPair = array[0] === array[1] && array[2] === array[3] && array[3] === array[4]
  const fullHouseHighPair = array[0] === array[1] && array[1] === array[2] && array[3] === array[4]
  return fullHouseLowPair || fullHouseHighPair
}

export const isFlush = (suits: string[]) => suits.every(suit => suit === suits[0])

export const isStraight = (ranks: string[]) => {
  let num = getNum(ranks)
  num.sort((a, b) => a - b)
  const straight = (num[4] - 1) == num[3] && (num[3] - 1) == num[2] && (num[2] - 1) == num[1] && (num[1] - 1) == num[0]
  return straight
}

export const isThreeOfAKind = (ranks: string[]) => {
  let array = getNum(ranks)
  array = array.sort((a, b) => a - b)
  const threeFirst = array[0] === array[1] && array[1] === array[2]
  const threeMiddle = array[1] === array[2] && array[2] === array[3]
  const threeLast = array[2] === array[3] && array[3] === array[4]
  return threeFirst || threeMiddle || threeLast
}

export const isTwoPair = (ranks: any[]) => { // Her måtte konvertert ranks til numbers helt i starten, endre på mye greier...
  ranks = getNum(ranks)
  let sortedRanks = ranks.sort((a, b) => a - b)
  const firsttwo = sortedRanks[0] === sortedRanks[1]
  const secondtwo = sortedRanks[1] === sortedRanks[2]
  const thirdtwo = sortedRanks[2] === sortedRanks[3]
  const fourthtwo = sortedRanks[3] === sortedRanks[4]
  return firsttwo && thirdtwo || firsttwo && fourthtwo || secondtwo && fourthtwo
}

export const isOnePair = (ranks: string[]) => [...new Set(ranks)].length === 4



export const generatePokerHand = () => {
  const hånd = Array(5)
    .fill(0)
    .map(() => {
      const farge = kortfarge[Math.floor(Math.random() * kortfarge.length)]
      const verdi = tallverdi[Math.floor(Math.random() * tallverdi.length)]
      return verdi + farge;
    })
  return hånd;
}



// Helper that converts the ranks to numbers
const getNum = (ranks: string[]) => {
  return ranks.map((element) => {
    if (element === 't') return 10
    if (element === 'c') return 11
    if (element === 'd') return 12
    if (element === 'k') return 13
    if (element === 'e') return 14
    else return Number(element)
  })
}



// Funksjon som returnerer analyse av hånden
const getPokerHandType = (hand: string[]) => {
  const suits = hand.map(card => card[1])
  const ranks = hand.map(card => card[0])

  if (isFlush(suits) && isStraight(ranks)) return "Straight Flush"
  if (isFourOfAKind(ranks)) return "Four of a Kind"
  if (isFullHouse(ranks)) return "Full House"
  if (isFlush(suits)) return "Flush"
  if (isStraight(ranks)) return "Straight"
  if (isThreeOfAKind(ranks)) return "Three of a Kind"
  if (isTwoPair(ranks)) return "Two Pair"
  if (isOnePair(ranks)) return "One Pair"
  return "High Card"
}


// Funksjon som sjekker om hånden er gyldig (5 forskjellige kort)
const isValidHand = (hand: string[]) => {
  const unique = [...new Set(hand)]
  if (unique.length === 5) { return true } else return false
}

// Funksjon som returnerer en hånd og analysen av den
export const getAnalysedPokerHand = () => {
  let hand
  do { hand = generatePokerHand() }
  while (!isValidHand(hand))
  const handType = getPokerHandType(hand)
  return { hand, handType }
}

