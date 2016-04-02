// const jade = require('jade');
const path = require('path');
const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const HomePage = require('./js/home-page');

console.log('  ---------------------------  ');
console.log('  ' + __dirname);
console.log('  ---------------------------  ');

app.set('view engine', 'jade');
app.set('views', __dirname);
// app.use(express.static(path.resolve(__dirname, './dist')));
app.use(express.static('main'));
app.get('/', (req, res) => {
    // res.send('Hello World!');

    // ReactDOM.render(<HomePage name="Sebastian" />, mountNode);

    // res.render('layout', {
    //     reactHtml: React.renderToString(<App />)
    // });



    // response.render('app', {
    //     app: ReactDOMServer.renderToString(<App />)
    // });

    const title = 'this is a title';
    const desc = 'this is a description';
    const content = ReactDOMServer.renderToString(<HomePage name="Sebastian" />);

    const html = (
        `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <div id="app" class="app">${content}</div>

                <script src="/client.js"></script>
            </body>
        </html>`
    );

    // res.render('./scaffold.jade', {title, desc, content});

    res.send(html);

});

app.listen(8000, () => console.log('listening on port 8000!'));
