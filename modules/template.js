module.exports = {
    HTML: (body) => {
        return `
            <!doctype html>
            <html>
            <head>
              <title>Study</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1>Hi Hoosa!</h1>
              ${body}
              <br>
              <br>
              <br>
              <br>
              <a href="/">Go Home</a>
            </body>
            </html>
          `
    }
}