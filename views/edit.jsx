const React = require('react')
const Default = require('./layouts/Default')

function Edit ({tvshow, index}) {
     return (
        <Default title={tvshow.name}>
            <h2>Edit {tvshow.name}</h2>
            <form action={`/tvshows/${index}?_method=PUT`} method='POST'>
                <label htmlFor='name'>Name</label>
                <input 
                type='text'
                name='name'
                id='name'
                required
                defaultValue={tvshow.name}
                />
                <label htmlFor='year'>Year</label>
                <input 
                type='number'
                name='year'
                id='image'
                defaultValue={tvshow.year}
                />
                <label htmlFor='streamsOn'>Streams on</label>
                <input 
                type='text'
                name='streamsOn'
                id='streamsOn'
                defaultValue={tvshow.streamsOn}
                />
                <label htmlFor='genre'>Genre</label>
                <input 
                type='text'
                name='genre'
                id='genre'
                defaultValue={tvshow.genre}
                />
                <label htmlFor='description'>Description</label>
                <input 
                type='text'
                name='description'
                id='description'
                defaultValue={tvshow.description}
                />
                <label htmlFor='image'>Image</label>
                <input 
                type='text'
                name='image'
                id='image'
                defaultValue={tvshow.image}
                />
               <br />
               <input type='submit' value='Submit' /> 
            </form>
            <div className='backButton'>
                <a href='/tvshows'>
                    <button>Back to Shows</button>
                </a>
            </div>
        </Default>
     )
}

module.exports = Edit