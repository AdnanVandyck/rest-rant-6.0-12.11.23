const React = require('react')
const Default = require('./layouts/default')

function Index ({places, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <div className='col-sm-6'>
        <ul>
            {
                places.map((place, index) => {
                    return(<li key={index}>
                        <h3>
                        <a href={`/places/${index}`}>
                        {place.name}
                        </a>
                        </h3>
                        <p>
                            {place.cuisines}
                        </p>
                        <img src={place.image} alt={place.name}/>
                        <p>
                            Located in {place.city}, {place.state}
                        </p>
                    </li>)
                })
            }
        </ul>

        </div>

      </Default>
    )
}

module.exports = Index
