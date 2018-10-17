import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Card = (props) => {
    let {title, rating, overview, release, image, id} = props
    
    let style = {
        width: "18rem"
    }

    let imageUrl = `https://image.tmdb.org/t/p/w500${image}`
    let movieRoute = `movies/${id}`

    // `https://api.themoviedb.org/3/movie/${id}?api_key=8767ba99f89d915e78f296b1a16b13bb`


    return (
    <div className="card ml-auto mr-auto mb-3" style={style}>
        <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Release Date: {release}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Avg. Rating: {rating}</h6>
            <p className="card-text">{overview}</p>
            {/* <button onClick={props.history.push(movieRoute)}>View</button> */}
            <Link to={movieRoute} className="btn btn-primary">View</Link>
        </div>
    </div>
    )
}

export default Card;