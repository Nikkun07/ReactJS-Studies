import ProfilePic from './assets/LoliSuiSui.jpg'

function Card()
{
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="Suiseggs"></img>
            <h2 className='card-title'>Nikkun</h2>
            <p className='card-text'>"I want to die."</p>
        </div>
    );
}

export default Card;