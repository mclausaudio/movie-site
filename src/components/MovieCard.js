import React from 'react'

const MovieCard = ({title, rating, overview, release, image}) => {
    let style = {
        width: "18rem"
    }

    let imageUrl = `https://image.tmdb.org/t/p/w500${image}`

    return (
    <div className="card ml-auto mr-auto mb-3" style={style}>
        <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Release Date: {release}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Avg. Rating: {rating}</h6>
            <p className="card-text">{overview}</p>
            <a href="#" className="btn btn-primary">Nothing</a>
        </div>
    </div>
    )
}

export default MovieCard;