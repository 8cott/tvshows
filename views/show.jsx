const React = require('react')
const Default = require('./layouts/Default')

function Show ({tvshow, index}) {
    // confirmation that tvshow data is appearing in terminal
    // console.log(tvshow.name)
        return (
            <Default>
                <h2>Show Page</h2>
                <h3>{tvshow.name}</h3>
                <img src={tvshow.image} alt={tvshow.name} />
                <form action={`/tvshows/${index}?_method=DELETE`} method='POST'>
                    <input type='submit' value='DELETE' />
                </form>
            </Default>
        )
}

module.exports = Show 