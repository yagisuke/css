import App from 'next/app'
import Router from 'next/router'
const withGA = require('next-ga')

export default withGA('UA-154562499-1', Router)(App)
