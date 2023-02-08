const React = require('react')

function Default(html) {
    return (
        <html lang='en'>
        <head>
            <title>TV Shows! 📺</title>
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