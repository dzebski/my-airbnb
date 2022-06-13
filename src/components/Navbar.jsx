//
import logo from './airbnb-logo.svg'

export default function Navbar() {
    return (
        <div className="container header">
            <div className="logo">
                <img src={logo} alt="Airbnb Logo" />
            </div>
        </div>
    )
}