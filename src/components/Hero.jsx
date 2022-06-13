//
import heroImg from './hero-img.png'

export default function Hero() {
    return (
        <div className="container hero">
            <div className="hero__img">
                <img src={heroImg} alt="Hero Img" />
            </div>
            <div className="hero__body">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}