function Names()
{
    const name1 = "Sakuya";
    const name2 = "Renti";
    const name3 = "None";
    return(
        <ul>
            <li>Nikkun</li>
            <li>{name1}</li>
            <li>{name2.toUpperCase()}</li>
        </ul>
    );
}

export default Names