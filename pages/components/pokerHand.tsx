import { useEffect, useState } from "react";
import { getAnalysedPokerHand } from "../services"
import Image from 'next/image'

// const getCards = () => {
//     const { hand, handType } = getAnalysedPokerHand()
//     return { hand, handType }
// }

const getCards = () => { return getAnalysedPokerHand()}
  

// const { hand, handType } = getAnalysedPokerHand()

export const PokerHand = () => {

    const [hand, setHand] = useState<string[] | null>(null);
    const [handType, setHandType] = useState<string | null>(null)

    useEffect(() => {
        setCardsToState()
    }, []);

    const setCardsToState = () => {
        const { hand, handType } = getCards()
        setHand(hand)
        setHandType(handType)
    }

    // Hydration fix
    const [rendered, setRendered] = useState(false);
    useEffect(() => {
        setRendered(true);
    }, [])
    if (!rendered) return null


    return (
        <>
            {hand &&
                <>
                    <h1 className="m-10 text-3xl font-bold text-center" >Finn pokerhånden</h1>

                    <div
                        className="flex items-center justify-center gap-5">
                        <div className="relative w-24 h-36"><Image src={`/${hand[0]}.png`} alt={hand[0]} fill sizes="33vw" priority /></div>
                        <div className="relative w-24 h-36"><Image src={`/${hand[1]}.png`} alt={hand[1]} fill sizes="33vw" priority /></div>
                        <div className="relative w-24 h-36"><Image src={`/${hand[2]}.png`} alt={hand[2]} fill sizes="33vw" priority /></div>
                        <div className="relative w-24 h-36"><Image src={`/${hand[3]}.png`} alt={hand[3]} fill sizes="33vw" priority /></div>
                        <div className="relative w-24 h-36"><Image src={`/${hand[4]}.png`} alt={hand[4]} fill sizes="33vw" priority /></div>
                    </div>


                    <div className="flex items-center justify-center">
                        <div className="flex flex-col gap-5">
                            {/* <p>{hand[0]} - {hand[1]} - {hand[2]} - {hand[3]} - {hand[4]}</p> */}
                            <p className="font-bold text-center">{handType}</p>
                            <button
                                className="p-2 bg-gray-400 rounded-sm"
                                onClick={() => setCardsToState()}
                                autoFocus
                                >
                                Deal New Cards
                            </button>
                        </div>
                    </div>
                </>
            }
        </>

    )
}
