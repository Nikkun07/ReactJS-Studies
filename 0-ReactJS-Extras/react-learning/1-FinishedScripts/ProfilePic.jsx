function ProfilePic()
{
    const imageUrl = './src/assets/LoliSuiSui.jpg';


    const handleClick = (e) =>
    {
        console.log("Touched");
        e.target.style.display = "none";
    }
    return(
        <img onClick={(e) => handleClick(e)} className="profilePic"src={imageUrl} alt="LoliSui" />
    );
}

export default ProfilePic;