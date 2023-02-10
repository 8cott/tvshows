const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
        <Default title='Add Show'>
            <h2>Add Show</h2>
            <form action='/tvshows' method='POST'>
                <label htmlFor='name'>Name</label>
                <input 
                type='text'
                name='name'
                id='name'
                required
                />
                <label htmlFor='year'>Year</label>
                <input 
                type='number'
                name='year'
                id='image'
                />
                <label htmlFor='streamsOn'>Streams on</label>
                <input 
                type='text'
                name='streamsOn'
                id='streamsOn'
                />
                <label htmlFor='genre'>Genre</label>
                <input 
                type='text'
                name='genre'
                id='genre'
                />
                <label htmlFor='description'>Description</label>
                <input 
                type='text'
                name='description'
                id='description'
                />
                <label htmlFor='image'>Image</label>
                <input 
                type='url'
                name='image'
                id='image'
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

module.exports = New