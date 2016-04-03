const express = require('express');
const port = 8000;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fetchData = require('./js/page-data');
const HomePage = require('./js/home-page');
const ShowPage = require('./js/show-page');
const EpisodePage = require('./js/episode-page');

const app = express();

app.use(express.static('static'));

app.get('/*', (req, res) => {

    const json = fetchData(req.url);

    console.log('** ------------- **');
    console.log(json);
    console.log('** ------------- **');

    const views = {
        '/' : () => ReactDOMServer.renderToString(<HomePage json={json} />),
        '/fruit' : () => ReactDOMServer.renderToString(<ShowPage json={json} />),
        '/fruit/banana' : () => ReactDOMServer.renderToString(<EpisodePage json={json} />)
    };

    const error = (
        `<ul>
            <li>There</li>
            <li>Has</li>
            <li>Been</li>
            <li>An</li>
            <li>Error</li>
        </ul>`
    );

    const title = null; // = 'this is a title';
    const desc = null; // = 'this is a description';

    const content = views[req.url] ? views[req.url]() : error;

    const html = (
        `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>${title || 'This is a title'}</title>
                <meta name="description" content="${desc || 'This is a description'}">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="apple-touch-icon" href="apple-touch-icon.png">
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <div id="app" class="app">${content}</div>
                <script src="/client.js"></script>
            </body>
        </html>`
    );

    res.send(html);

});

app.listen(port, () => console.log(`listening on port ${port}!`));

// const jade = require('jade');
// const path = require('path');
// const ReactEngine = require('react-engine');
// const docType = '<!DOCTYPE html>';

// console.log('  ---------------------------  ');
// console.log('  ' + __dirname);
// console.log('  ---------------------------  ');

// var engine = ReactEngine.server.create({
//   /*
//     see the complete server options spec here:
//     https://github.com/paypal/react-engine#server-options-spec
//   */
// });

// app.engine('.jsx', engine);
// app.set('view engine', 'jsx');
// app.set('view engine', 'jade');
// app.set('views', __dirname + '/views');
// app.set('view', require('react-engine/lib/expressView'));
// app.use(express.static(path.resolve(__dirname, './dist')));

// path = '/foo/bar';
// let html;
// if (req.url === '/foo/bar') html =

// res.send('Hello World!');

// ReactDOM.render(<HomePage name="Sebastian" />, mountNode);

// res.render('layout', {
//     reactHtml: React.renderToString(<App />)
// });

// response.render('app', {
//     app: ReactDOMServer.renderToString(<App />)
// });

// console.log('  ---------------------------  ');
// console.log('  ---------------------------  ');
// console.log('  ---------------------------  ');
// console.log(req.url);
// console.log('  ---------------------------  ');
// console.log('  ---------------------------  ');
// console.log('  ---------------------------  ');
// console.log(res);

// const content = ReactDOMServer.renderToString(<HomePage name="Sebastian" />);

// const html = ReactDOMServer.renderToString(
//     <html>
//         <head>
//             <meta charset="utf-8" />
//             <meta http-equiv="x-ua-compatible" content="ie=edge" />
//             <title>{title}</title>
//             <meta name="viewport" content="width=device-width, initial-scale=1" />
//             <link rel="stylesheet" href="/style.css" />
//         </head>
//         <body>
//             <div id="app" className="app">
//                 <HomePage name="Sebastian" />
//             </div>
//             <script src="/client.js"></script>
//         </body>
//     </html>
// );

// const routes = (
// 	<Route path="/">
// 		<IndexRoute component={Counter} />
// 		<Route path="/banana">
// 			<IndexRoute component={Banana} foo={'bar'}/>
// 		</Route>
// 	</Route>
// );
//
// const render = () => {
//
// 	ReactDOM.render(
// 		<Router history={browserHistory}>
// 			{routes}
// 		</Router>,
// 		document.getElementById('app')
// 	);
//
// };

// const html = ReactDOMServer.renderToString(
//     <Router history={browserHistory}>
//         <Route path="/">
//             <IndexRoute component={Counter} />
//             <Route path="/banana">
//                 <IndexRoute component={Banana} foo={'bar'}/>
//             </Route>
//         </Route>
//     </Router>
// );

// res.render('./scaffold.jade', {title, desc, content});

// res.send(`${docType}${html}`);