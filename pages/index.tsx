import { getAnalysedPokerHand } from "./services"

const {hand, handType} = getAnalysedPokerHand()

console.log(hand)
console.log(handType)


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-10" >Hello World!</h1>
    </div>
  )
}
