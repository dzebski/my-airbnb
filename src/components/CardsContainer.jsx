//
import Card from "./Card"
// Images
import img1 from "./katie-zaferis.jpg"
import img2 from "./wedding.jpg"
import img3 from "./bike.jpg"

export default function CardsContainer() {
    return (
        <div className="container cards">
            <Card
                status = 'sold out'
                img = {img1}
                rating = {5.0}
                reviews = {6}
                country = 'USA'
                text = 'Life lessons with Katie Zaferes'
                price = {136}
            />
            <Card
                status = 'online'
                img = {img2}
                rating = {4.2}
                reviews = {42}
                country = 'Online'
                text = 'Learn wedding photography'
                price = {125}
            />
            <Card
                status = 'sale'
                img = {img3}
                rating = {4.8}
                reviews = {2}
                country = 'Alaska'
                text = 'Group Mountain Biking'
                price = {50}
            />
        </div>
    )
}