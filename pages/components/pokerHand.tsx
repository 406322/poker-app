import { useEffect, useState } from "react";
import { getAnalysedPokerHand } from "../services"

const getCards = () => {
    const { hand, handType } = getAnalysedPokerHand()
    return { hand, handType }
}

const { hand, handType } = getAnalysedPokerHand()

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
                    <h1 className="text-3xl font-bold text-center m-10" >Poker Hand!</h1>

                    <div className="flex items-center justify-center">
                        <div className="flex flex-col gap-5">
                            <p>{hand[0]} - {hand[1]} - {hand[2]} - {hand[3]} - {hand[4]}</p>
                            <p className="text-center font-bold">{handType}</p>
                            <button
                                className="bg-gray-400 rounded-sm p-2"
                                onClick={() => setCardsToState() }
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
