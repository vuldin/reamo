import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'mobx-react'
import App from './App'
import '../node_modules/normalize.css/normalize.css'
import '../node_modules/opinionate.css/opinionate.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Store from './Store'

const store = new Store()

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
