import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import scoresReducer from '../src/reducers/scores-reducer'
import App from '../src/App'
import { renderToString } from 'react-dom/server'

const app = Express()
const port = 8000

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
	const store = createStore(scoresReducer)

	// Render the component to a string
	const html = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	)

	const preloadedState = store.getState()
	res.send(renderFullPage(html, preloadedState))
}
function renderFullPage(html, preloadedState) {
	return `
    <!doctype html>
    <html>
      <head>
		<title>Redux Universal Example</title>
		
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.4/antd.css"/>
	  </head>
      <body>
		<div id="root">${html}</div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.4/antd.js"></scrtip>
		<script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
		/</g,
		'\\u003c'
	)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)