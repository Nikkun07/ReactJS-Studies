// Conditional Rendering = Allows you to control what gets renderd
//                         in your application based on certain conditions
//                         (Show, Hide, or Change Components)
import PropTypes from 'prop-types';

function UserGreet(props)
{
    /* if(props.isLoggedIn)
    {
        return <h2 className="logged-in">Welcome {props.username}</h2>
    }
    else
    {
        return <h2 className="logged-out">Please Log-In.</h2>
    } */

    //Better way to use conditions
    const welcomeMessage =  <h2 className="logged-in">
                            Welcome {props.username}
                            </h2>

    const logInPrompt =     <h2 className="logged-out">
                            Please Log-In.
                            </h2>

    return(props.isLoggedIn ? welcomeMessage : logInPrompt)
}

UserGreet.proptypes =
{
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreet;