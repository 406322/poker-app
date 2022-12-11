import { useEffect, useState } from "react";
import { getAnalysedPokerHand } from "../services"
import Image from 'next/image'

// import {as} from "./cards"

// const bilde = '/2R.png'
// console.log(bilde)

// console.log(as)


const getCards = () => {
    const { hand, handType } = getAnalysedPokerHand()
    return { hand, handType }
}

const { hand, handType } = getAnalysedPokerHand()

export const PokerHand = () => {


    const [hand, setHand] = useState<string[] | null>(null);
    const [handType, setHandType] = useState<string | null>(null)

    // console.log(hand)

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

    const hallo = '2R'


    return (
        <>
            {hand &&
                <>
                    <h1 className="m-10 text-3xl font-bold text-center" >Poker Hand!</h1>

                    <div className="flex items-center justify-center gap-5">
                        <Image src={`/${hand[0]}.png`} alt={hallo} width="96" height="96" />
                        <Image src={`/${hand[1]}.png`} alt={hallo} width="96" height="96" />
                        <Image src={`/${hand[2]}.png`} alt={hallo} width="96" height="96" />
                        <Image src={`/${hand[3]}.png`} alt={hallo} width="96" height="96" />
                        <Image src={`/${hand[4]}.png`} alt={hallo} width="96" height="96" />
                    </div>


                    <div className="flex items-center justify-center">
                        <div className="flex flex-col gap-5">
                            <p>{hand[0]} - {hand[1]} - {hand[2]} - {hand[3]} - {hand[4]}</p>
                            <p className="font-bold text-center">{handType}</p>
                            <button
                                className="p-2 bg-gray-400 rounded-sm"
                                onClick={() => setCardsToState()}
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
