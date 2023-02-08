const React = require('react')

function Default(html) {
    return (
        <html>
        <head>
            <title>{html.title || 'Default'}</title>
            <link rel='stylesheet' href='/main.css' />
        </head>
        <body>
            <h1>TV Shows! 📺</h1>
            <div className='container'>
                {html.children}
            </div>
        </body>
        </html>
    )
}

module.exports = Default 