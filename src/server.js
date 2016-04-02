const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const HomePage = require('./js/home-page');


app.get('/', (req, res) => {
    // res.send('Hello World!');

    // ReactDOM.render(<HomePage name="Sebastian" />, mountNode);

    // res.render('layout', {
    //     reactHtml: React.renderToString(<App />)
    // });

    // const render = React.renderToString(<HomePage name="Sebastian" />);
    const render = ReactDOMServer.renderToString(<HomePage name="Sebastian" />);
    // response.send(ReactDOMServer.renderToString(<App />));

    res.send(render);

});

app.listen(8000, () => console.log('listening on port 8000!'));
