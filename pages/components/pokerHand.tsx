import { useEffect, useState } from "react";
import { getAnalysedPokerHand } from "../functions"
import Image from 'next/image'

export const PokerHand = () => {

    const [hand, setHand] = useState<string[] | null>(null);
    const [rank, setHandType] = useState<string | null>(null)
    useEffect(() => {
        setCardsToState()
    }, []);

    const setCardsToState = () => {
        const { hand, rank } = getAnalysedPokerHand()
        setHand(hand)
        setHandType(rank)
    }

    return (
        <>
            {hand &&
                <>
                    <h1 className="m-10 text-3xl font-bold text-center" >Finn pokerhånden</h1>
                    <div
                        className="flex items-center justify-center gap-5">

                        {hand.map((card, index) => {
                            return (
                                <div className="relative w-24 h-36" key={index}><Image src={`/${card}.png`} alt={card} fill sizes="33vw" priority suppressHydrationWarning /></div>
                            )
                        })}
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col gap-5">
                            <p className="font-bold text-center">{rank}</p>
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
