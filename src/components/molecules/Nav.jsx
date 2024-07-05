import './nav.css'
import logo from "../../assets/logo.svg"
function Nav() {
    return(
        <nav className='Navigation'>
            <div className='NavLeft'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='Btn'>
                <a href="#">Try it Free</a>
            </div>
        </nav>
    )
}

export default Nav;