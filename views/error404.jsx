const React = require('react')
const Default = require('./layouts/Default')

function error404 ({tvshow}) {
        return (
            <Default>
                <div className='error'>error: 404</div>
                <div className='pnf'>page not found</div>
            </Default>
        )
}

module.exports = error404