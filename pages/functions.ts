

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "t", "c", "d", "k", "e"]
const suits = ["k", "r", "h", "s"]

export const isFourOfAKind = (values: number[]) => {
  values.sort((a, b) => a - b)
  const fourFirst = values[0] === values[1] && values[1] === values[2] && values[2] === values[3]
  const fourLast = values[1] === values[2] && values[2] === values[3] && values[3] === values[4]
  return fourFirst || fourLast
}

export const isFullHouse = (values: number[]) => {
  values.sort((a, b) => a - b)
  const fullHouseLowPair = values[0] === values[1] && values[2] === values[3] && values[3] === values[4]
  const fullHouseHighPair = values[0] === values[1] && values[1] === values[2] && values[3] === values[4]
  return fullHouseLowPair || fullHouseHighPair
}

export const isFlush = (suits: string[]) => suits.every(suit => suit === suits[0])

export const isStraight = (values: number[]) => {
  values.sort((a, b) => a - b)
  const straight = (values[4] - 1) == values[3] && (values[3] - 1) == values[2] && (values[2] - 1) == values[1] && (values[1] - 1) == values[0]
  return straight
}

export const isThreeOfAKind = (values: number[]) => {
  values.sort((a, b) => a - b)
  const threeFirst = values[0] === values[1] && values[1] === values[2]
  const threeMiddle = values[1] === values[2] && values[2] === values[3]
  const threeLast = values[2] === values[3] && values[3] === values[4]
  return threeFirst || threeMiddle || threeLast
}

export const isTwoPair = (values: number[]) => {
  values.sort((a, b) => a - b)
  const firstTwo = values[0] === values[1]
  const secondTwo = values[1] === values[2]
  const thirdTwo = values[2] === values[3]
  const fourthTwo = values[3] === values[4]
  return firstTwo && thirdTwo || firstTwo && fourthTwo || secondTwo && fourthTwo
}

export const isOnePair = (values: number[]) => [...new Set(values)].length === 4






export const generatePokerHand = () => {
  const hand = Array(5)
    .fill(0)
    .map(() => {
      const suit = suits[Math.floor(Math.random() * suits.length)]
      const value = values[Math.floor(Math.random() * values.length)]
      return value + suit
    })
  return hand
}

export const convertToNumbers = (values: string[]) => {
  return values.map((value) => {
    switch (value) {
      case 't':
        return 10;
      case 'c':
        return 11;
      case 'd':
        return 12;
      case 'k':
        return 13;
      case 'e':
        return 14;
      default:
        return Number(value);
    }
  })
}

const getRank = (hand: string[]) => {
  const suits = hand.map(card => card[1])
  const values = hand.map(card => card[0])
  const numValues = convertToNumbers(values)

  if (isFlush(suits) && isStraight(numValues)) return "Straight Flush"
  if (isFourOfAKind(numValues)) return "Four of a Kind"
  if (isFullHouse(numValues)) return "Full House"
  if (isFlush(suits)) return "Flush"
  if (isStraight(numValues)) return "Straight"
  if (isThreeOfAKind(numValues)) return "Three of a Kind"
  if (isTwoPair(numValues)) return "Two Pair"
  if (isOnePair(numValues)) return "One Pair"
  return "High Card"
}

const isValidHand = (hand: string[]) => {
  const unique = [...new Set(hand)]
  if (unique.length === 5) { return true } else return false
}

export const getAnalysedPokerHand = () => {
  let hand
  do { hand = generatePokerHand() }
  while (!isValidHand(hand))
  const rank = getRank(hand)
  return { hand, rank }
}



// Implementere dette?

// const generateDeck = () => { // map and flatten it down to a single array?
//   const suits = ["c", "d", "h", "s"]
//   const values = ["2", "3", "4", "5", "6", "7", "8", "9", "t", "j", "d", "k", "e"]
//   const deck = []
//   suits.forEach(suit => {
//       values.forEach(value => {
//           deck.push(value + suit)
//       })
//   })
//   return deck
// }

// const shuffleDeck = (deck) => {
//   deck.map((card, index) => {
//       const randomIndex = Math.floor(Math.random() * deck.length)
//       const temp = deck[index] // can be card
//       deck[index] = deck[randomIndex] // can be card?
//       deck[randomIndex] = temp
//   })
//   return deck
// }

// const getPokerHand = (shuffledDeck) => { return shuffledDeck.slice(0, 5) }

// const pokerHand = getPokerHand(shuffleDeck(generateDeck()))