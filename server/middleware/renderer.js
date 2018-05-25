import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter';
// import our main App component
import AppRouter from '../../src/Components/AppRouter/AppRouter';
const path = require("path");
const fs = require("fs");
export default (req, res, next) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error in read!', err);
            return res.status(404).end()
        }
        // render the app as a string
        const context = {};
        const html = ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <AppRouter />
          </StaticRouter>
        );
        // inject the rendered app into our html and send it
        htmlData.replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div>`
        )
        return res.send(
            htmlData
        );
    });
}
