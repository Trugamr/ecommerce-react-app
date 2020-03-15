import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.scss'
import App from './App'

import { store, persistor } from './redux/store'

const Router = ({ children }) => {
  const isDevMode = process.env.NODE_ENV === 'development'

  return (
    <>
      {isDevMode ? (
        <BrowserRouter>{children}</BrowserRouter>
      ) : (
        <HashRouter basename="/ecommerce-react-app">{children}</HashRouter>
      )}
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
)
