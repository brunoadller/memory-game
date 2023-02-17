import React, { useEffect, useState } from "react"
import imagesObj from '../../RequestImgs'

const Game = () => {
    const pairOfCards = [...imagesObj, ...imagesObj]
    const [openCard, setOpenCard] = useState([])
    const [matched, setMatched] = useState([])

   
    useEffect(() => {
        if (openCard < 2) return;

        const firstmatch = pairOfCards[openCard[0]]
        const secondmatch = pairOfCards[openCard[1]]

        if(secondmatch && firstmatch.id === secondmatch.id){
            setMatched([...matched, firstmatch.id])
        }
        if(openCard.length === 2) setTimeout(() => setOpenCard([]), 1000);
        
       
    }, [openCard])

    const handleFlipp = (index) => {
        setOpenCard((opened) => [...opened, index])
       
    }
    
    return(
        <div className="app">
            <div className="cards">
                {
                    pairOfCards?.map( (img, index) => {

                        let flippedCard 
                        flippedCard = false
                        if(openCard.includes(index)) flippedCard = true;
                        if(matched.includes(img.id)) flippedCard = true;

                        return(
                            <div  key = {index} className={`card ${flippedCard ? "flipped": ""}`} 
                                onClick = {() => handleFlipp(index)}>
                                <div className="inner">
                                    <div className="front">
                                        <img src={img.imagesUrl} alt="" />
                                    </div>
                                    <div className="back">

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Game