import './second.css'
import Grow from "../../assets/illustration-grow-together.svg"
import Flow from "../../assets/illustration-flowing-conversation.svg"
import Users from "../../assets/illustration-your-users.svg"
function Second() {
    return(
        <div className='Info'>
            <div>
                <div className='Explanation'>
                    <h2>Grow Together</h2>
                    <p>Generate meaningful discussions with your audience and build a strong, loyal community.
                        Think of the insightful conversation you miss out on with a feedback form.
                    </p>
                </div>
                <div>
                    <img src={Grow} alt="Grow-together" />
                </div>
            </div>
            <div>
                <div>
                    <img src={Flow} alt="Flowing-conversation" />
                </div>
                <div className='Explanation'>
                    <h2>Flowing Conversations</h2>
                    <p>You would not paginate a real life, so why do it online? 
                        Our threads have just-in time loading for a more natural flow.
                    </p>
                </div>
            </div>
            <div>
                <div className='Explanation'>
                    <h2>Your Users</h2>
                    <p>It takes no time at all to integrate Huddle with your app authentication solution.
                        This means, once signed in to your app, your users can start chatting immediately.
                    </p>
                </div>
                <div>
                    <img src={Users} alt="Your-users" />
                </div>
            </div>
        </div>
    )
}

export default Second;