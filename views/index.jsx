const React = require('react')
const Default = require('./layouts/Default')

function Index ({tvshows}) {
    return (
        <Default>
            <h1>Index Page 🗂️</h1>
            <ul>
                {
                    tvshows.map((TvShow, index) => {
                        return (
                            <li key={index}>
                                <a href={`/tvshows/${index}`}>
                                    {TvShow.name}
                                </a>
                            </li>
                               )
                    })
                }
            </ul>
            {/* <h2>{tvshows[0].name}</h2> */}
        </Default>
    )
}

module.exports = Index 