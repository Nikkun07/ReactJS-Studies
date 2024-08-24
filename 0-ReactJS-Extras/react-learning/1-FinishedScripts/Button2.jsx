// Click Event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing
//               a callback to the onClick event handler.

function Button()
{
    // const handleClick = () => console.log("Bruh");
    // const handleClick2 = (name) => console.log(`${name}, Stop it`);

    //Conditional:
    /* let count = 0;
    const handleClick = (name) =>
    {
        if(count < 3)
        {
            count++;
            console.log(`${name}, You clicked me ${count} time/s`)
        }
        else{
            console.log(`${name}, fuckin sTOP IT.`)
        }
    } */

    //Event Handlers
    const handleClick = (e) => 
    {
        console.log(e);
        e.target.textContent = "Bruh";
    };

    return(<button onDoubleClick={(e) =>handleClick(e)}>Touch me</button>)
}

export default Button;