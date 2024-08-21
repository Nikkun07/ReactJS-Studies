import PropTypes from 'prop-types';

function Artist(props)
{
    return(
        <div className="artist">
            <p>Name: {props.name}</p>
            <p>Title: {props.title}</p>
            <p>Retar: {props.isRetar ? "Absolutely Real and True" : "Nah"}</p>
        </div>
    );
}


Artist.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    isRetar: PropTypes.bool
}

Artist.defaultProps =
{
    name: "Anon",
    title: "none",
    isRetar: false
}
export default Artist;