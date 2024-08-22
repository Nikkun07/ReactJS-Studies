import PropTypes from 'prop-types';
function List(props)
{

    const category = props.category;
    const itemList = props.items;
    // artists.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
    //artists.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
    //artists.sort((a,b) => a.level - b.level); //Numeric

    //const lowLvl = artists.filter(artists => artists.level >= 50) //Filter Method
    //const lowLvl = artists.filter(artists => artists.level <= 50)
    
    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                {item.level}
                                             </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>

    );
}

List.PropTypes =
{
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              level: PropTypes.number
    }))
}
List.defaultProps =
{
    category: "Category",
    items: [],
}
export default List;