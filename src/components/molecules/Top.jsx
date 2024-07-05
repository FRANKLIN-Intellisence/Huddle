import './top.css'
import Mock from '../../assets/Mock.svg'
function Top() {
    return(
        <div className='Top'>
            <div className='TopLeft'>
                <h1>Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. 
                    You have a voice, but so does your audience. 
                    Create connections with your users as you engage in genuine discussion.
                </p>
                <a href="#">Get Started For Free</a>
            </div>
            <div className='TopRight'>
                <img src={Mock} alt="Mock-Up" />
            </div>
        </div>
    )
}

export default Top;