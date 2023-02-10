const React = require('react')
const Default = require('./layouts/Default')

function Show ({tvshow, index}) {
    // confirmation that tvshow data is appearing in terminal
    // console.log(tvshow.name)
        return (
            <Default>
                <h2>Show Page</h2>
                <h3>{tvshow.name} ({tvshow.year})</h3>
                <img src={tvshow.image} alt={tvshow.name} />
                <h3>{tvshow.genre} | {tvshow.streamsOn}</h3>
                <p>{tvshow.description}</p>
                <form action={`/tvshows/${index}?_method=DELETE`} method='POST'>
                    <input type='submit' value='DELETE' />
                </form>
                <a href={`/tvshows/${index}/edit`}><button>Edit</button></a>
            </Default>
        )
}

module.exports = Show 