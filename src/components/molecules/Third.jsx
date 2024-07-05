import './third.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import Email from "../../assets/icon-email.svg"
import Location from "../../assets/icon-location.svg"
import Phone from "../../assets/icon-phone.svg"
function Third() {
    return(
        <div className='Container'>
            <div className='getStarted'>
                <div>
                    <h2>Ready To Build Your Community?</h2>
                    <a href="#">Get Started For Free</a>
                </div>
            </div>
            <div className='Left'>
                <div>
                    <FontAwesomeIcon icon={faComment} className='Huddle' />
                    <h1>Huddle</h1>
                </div>
                <div>
                    <img src={Location} alt="Location" />
                    <p>168 Idoro Road opposite Berger Yard, Uyo, Nigeria.</p>
                </div>
                <div>
                    <img src={Email} alt="Email" />
                    <p>franklinsolaty@gmail.com</p>
                </div>
                <div>
                    <img src={Phone} alt="Phone" />
                    <p>+234-903-498-4899</p>
                </div>
            </div>
            <div className='Center'>
                <div>
                    <a href="#">About Us</a>
                    <a href="#">What We Do</a>
                    <a href="#">FAQ</a>
                </div>
                <div>
                    <a href="#">Career</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className='Right'>
                <div className='Socials'>
                    <a href="#"><FontAwesomeIcon  icon={faFacebook} className='Facebook'></FontAwesomeIcon></a>
                    <a href="#"><FontAwesomeIcon  icon={faTwitter} className='Twitter'></FontAwesomeIcon></a>
                    <a href="#"><FontAwesomeIcon  icon={faWhatsapp} className='Whatsapp'></FontAwesomeIcon></a>
                    <a href="#"><FontAwesomeIcon  icon={faInstagram} className='Instagram'></FontAwesomeIcon></a>
                </div>
                <div>
                    <p className='Copyright'>© Copyright 2024 Huddle. All rights reserved.</p>
                    <a href="https://github.com/FRANKLIN-Intellisence" className='Profile'>2024 FRANKDEV</a>
                </div>
            </div>
        </div>
    )
}

export default Third;