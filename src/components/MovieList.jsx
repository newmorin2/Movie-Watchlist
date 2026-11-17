function MovieList(props){
    const allMovies = props.movies.map((dis) => (
        <div className="col-12 col-sm-6 col-md-6" key={dis.id}>
            <div className="card h-100 shadow-sm p-2">
                <h5>{dis.title}</h5>
                <h6>{dis.genre}</h6>
                <h6>{dis.year}</h6>
                <h6>
                    <span className={dis.watched === true ? 'text-success':'text-warning'}>
                        {dis.watched === true ? 'Watched':'Not watched'}
                    </span>
                </h6>
            </div>
        </div>
    ))
    return(
        <div className="container py-4">
            <div className="row g-4">
                {allMovies}
            </div>
        </div>
    )
}
export default MovieList