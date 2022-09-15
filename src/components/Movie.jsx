function Movie (props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props

  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {
          poster === 'N/A' ?
            <img className="activator" alt="{title} poster" src={`https://via.placeholder.com/300x150?text=${title}`} /> :
            <img className="activator" alt="{title} poster" src={poster} />
        }
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year} <span className="rigth">{type}</span></p>
      </div>
    </div>
  )
}

export {Movie}
