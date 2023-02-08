const React = require('react')
const Default = require('./layouts/Default')

function Show ({tvshow}) {
    // confirmation that tvshow data is appearing in terminal
    // console.log(tvshow.name)
        return (
            <Default>
                <h2>Show Page</h2>
                <h3>{tvshow.name}</h3>
                <img src={tvshow.image} alt={tvshow.name} />
            </Default>
        )
}

module.exports = Show 