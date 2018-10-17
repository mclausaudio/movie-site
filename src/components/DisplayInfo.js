import React from 'react'

const DisplayInfo = (props) => {
    let {poster, overview, homepage, release_date, production_companies} = props
    let posterImage = `https://image.tmdb.org/t/p/w500${poster}`
    
    let productionCompanies = "hi"
    if(production_companies !== undefined  ){
        productionCompanies = production_companies.forEach(c => {
            let companyImage = `https://image.tmdb.org/t/p/w500${c.logo_path}`;
            console.log(c)
            return (
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src={companyImage} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
    }
// console.log(props.movie)
    return (
        <div className="display-section container">
        <div className="row pt-3">
            <div className="col-md-4 img-thumbnail">
                <img src={posterImage} className="poster-image"/>
            </div>
            <div className="col-md-7">
                <div className="pl-3">
                    <h1 className="display-5 text-center">Overview</h1>
                    <p><strong>Synopsis:</strong> {overview}</p>
                    <p><strong>Release Date:</strong> {release_date}</p>
                    <p><strong>Website:</strong> <a href={homepage} target="_blank">{homepage}</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default DisplayInfo;