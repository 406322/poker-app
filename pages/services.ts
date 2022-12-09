export {}


// 1. Identifisering av kort
const tallverdi = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const kortfarge = ["C", "D", "H", "S"]

// 2. Funksjon for å generere ny hånd med 5 vilkårlige kort
export const generatePokerHand = () => {
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


// Funksjon som tar inn 5 kort og returnerer en analyse av dem
export const getPokerHandType = (hand: any[]) => {
    // Create arrays of the suits and ranks of the cards in the hand
    const suits = hand.map(card => card[1])
    const ranks = hand.map(card => card[0])
  
    // Check if the hand contains five cards of the same suit (flush)
    const isFlush = suits.every(suit => suit === suits[0])
  
    // Check if the hand contains five cards in a row (straight)
    // First, sort the ranks in ascending order
    const sortedRanks = ranks.slice().sort((a, b) => a - b)
    // Then, check if each consecutive pair of cards has a rank that is exactly one apart
    const isStraight = sortedRanks.every((rank, i) => i === 0 || rank === sortedRanks[i - 1] + 1)
  
    // Check if the hand contains four cards of the same rank (four of a kind)
    const fourOfAKind = ranks.filter(rank => ranks.indexOf(rank) !== ranks.lastIndexOf(rank)).length === 4
  
    // Check if the hand contains three cards of the same rank and two cards of another rank (full house)
    const fullHouse = ranks.filter(rank => ranks.indexOf(rank) !== ranks.lastIndexOf(rank)).length === 3
  
    // Check if the hand contains three cards of the same rank (three of a kind)
    const threeOfAKind = ranks.filter(rank => ranks.indexOf(rank) !== ranks.lastIndexOf(rank)).length === 3
  
    // Check if the hand contains two pairs of cards with the same rank (two pair)
    const pairs = ranks.filter(rank => ranks.indexOf(rank) !== ranks.lastIndexOf(rank)).length === 2
  
    // Check if the hand contains a pair of cards with the same rank (one pair)
    const onePair = ranks.filter(rank => ranks.indexOf(rank) !== ranks.lastIndexOf(rank)).length === 1
  
    // Return the type of hand based on the criteria above
    if (isFlush && isStraight) return "Straight Flush"
    if (fourOfAKind) return "Four of a Kind"
    if (fullHouse) return "Full House"
    if (isFlush) return "Flush"
    if (isStraight) return "Straight"
    if (threeOfAKind) return "Three of a Kind"
    if (pairs) return "Two Pair"
    if (onePair) return "One Pair"
    return "High Card"
  }

  export const getAnalysedPokerHand = () => {
    const hand = generatePokerHand()
    const handType = getPokerHandType(hand)
    return { hand, handType }
  }