export {}


// 1. Identifisering av kort
const tallverdi = ["2", "3", "4", "5", "6", "7", "8", "9", "t", "c", "d", "k", "e"]
const kortfarge = ["k", "r", "h", "s"]



// 2. Funksjon for å generere ny hånd med 5 vilkårlige kort
const generatePokerHand = () => { // Denne må dobbeltsjekkes
  // Genrerer 5 tilfeldige kort med map()
  const hånd = Array(5)
    .fill(0)
    .map(() => {
      // Generer tilfeldig kortfarge og verdi
      const farge = kortfarge[Math.floor(Math.random() * kortfarge.length)]
      const verdi = tallverdi[Math.floor(Math.random() * tallverdi.length)]

      // Returner kortet som en string
      return verdi + farge;
    })

  return hånd;
}

// Helper that converts the ranks to numbers
const getNum = (ranks: any[]) => {
  return ranks.map((element) => {
    if (element === 't') return 10
    if (element === 'c') return 11
    if (element === 'd') return 12
    if (element === 'k') return 13
    if (element === 'e') return 14
    else return Number(element)
  })
}


// Funksjon som tar inn 5 kort og returnerer en analyse av dem
const getPokerHandType = (hand: any[]) => {

  // Create arrays of the suits and ranks of the cards in the hand
  const suits = hand.map(card => card[1])
  const ranks = hand.map(card => card[0])

  // Check for Flush
  const isFlush = (suits: any[]) => suits.every(suit => suit === suits[0])

  // Check for Straight
  const isStraight = (ranks: any[]) => {
    let num = getNum(ranks)
    num.sort((a, b) => a - b)
    const straight = (num[4] - 1) == num[3] && (num[3] - 1) == num[2] && (num[2] - 1) == num[1] && (num[1] - 1) == num[0]
    return straight
  }

  // Check for Four of a Kind
  const isFourOfAKind = (ranks: any[]) => {
    ranks = getNum(ranks)
      .sort((a, b) => a - b)
    const fourFirst = ranks[0] === ranks[1] && ranks[1] === ranks[2] && ranks[2] === ranks[3]
    const fourLast = ranks[1] === ranks[2] && ranks[2] === ranks[3] && ranks[3] === ranks[4]
    return fourFirst || fourLast
  }

  // Check for Full House
  const isFullHouse = (ranks: any[]) => {
    let array = getNum(ranks)
    array.sort((a, b) => a - b)
    const fullHouseLowPair = array[0] === array[1] && array[2] === array[3] && array[3] === array[4]
    const fullHouseHighPair = array[0] === array[1] && array[1] === array[2] && array[3] === array[4]
    return fullHouseLowPair || fullHouseHighPair
  }

  // Check for Three of a Kind
  const isThreeOfAKind = (ranks: any[]) => {
    let array = getNum(ranks)
    array = array.sort((a, b) => a - b)
    const threeFirst = array[0] === array[1] && array[1] === array[2]
    const threeMiddle = array[1] === array[2] && array[2] === array[3]
    const threeLast = array[2] === array[3] && array[3] === array[4]
    return threeFirst || threeMiddle || threeLast
  }

  // Check for Two Pair
  const isTwoPair = (ranks: any[]) => {
    ranks = getNum(ranks)
    let sortedRanks = ranks.sort((a, b) => a - b)
    const firsttwo = sortedRanks[0] === sortedRanks[1]
    const secondtwo = sortedRanks[1] === sortedRanks[2]
    const thirdtwo = sortedRanks[2] === sortedRanks[3]
    const fourthtwo = sortedRanks[3] === sortedRanks[4]
    return firsttwo && thirdtwo || firsttwo && fourthtwo || secondtwo && fourthtwo
  }


  // Check for One Pair
  const isOnePair = (ranks: any[]) => [...new Set(ranks)].length === 4

  // Return the type of hand based on the criteria above
  if (isFlush(suits) && isStraight(ranks)) return "Straight Flush" // OK
  if (isFourOfAKind(ranks)) return "Four of a Kind" // OK
  if (isFullHouse(ranks)) return "Full House" // OK
  if (isFlush(suits)) return "Flush" // OK
  if (isStraight(ranks)) return "Straight" // OK
  if (isThreeOfAKind(ranks)) return "Three of a Kind" // OK
  if (isTwoPair(ranks)) return "Two Pair" // OK
  if (isOnePair(ranks)) return "One Pair" // OK
  return "High Card"
}

  // export const getAnalysedPokerHand = () => {
  //   const hand = generatePokerHand()
  //   const handType = getPokerHandType(hand)
  //   return { hand, handType }
  // }

  const isValidHand = (hand: any) => {
    const unique = [...new Set(hand)]
    if (unique.length === 5) { return true } else return false
}

  export const getAnalysedPokerHand = () => {
    let hand
    do { hand = generatePokerHand() }
    while (!isValidHand(hand))
    const handType = getPokerHandType(hand)
    return { hand, handType }
  }

