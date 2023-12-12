const React = require('react')
const Default = require('./layouts/default')

function Show ({place}) {
  console.log(place.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{place.name}</h3>
        <img src={place.image} alt={place.name}/>
      </Default>
    )
}

module.exports = Show
