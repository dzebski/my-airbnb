//
import Card from "./Card"
// import CardsData from "./data/CardsData"
import ScrimbaCardsData from "./data/ScrimbaCardsData"


export default function CardsContainer() {
    // const data = CardsData.map(card => {
    //     return <Card
    //         status = {card.status}
    //         img = {card.img}
    //         rating = {card.rating}
    //         reviews = {card.reviews}
    //         country = {card.country}
    //         text = {card.text}
    //         price = {card.price}
    //     />
    // })

    const scrimbaData = ScrimbaCardsData.map(card => {
        return <Card
            key={card.id}
            item={card}
            // ES6 Cool Stuff here
            {...card}


            // status={card.openSpots}
            // img={card.coverImg}
            // rating={card.stats.rating}
            // reviews={card.stats.reviewCount}
            // country={card.location}
            // text={card.title}
            // price={card.price}
        />
    })

    return (
        <div className="container cards">
            {scrimbaData}
        </div>
    )
}