import { h, render } from 'preact'
import App from './app'
import './index.html'
import './vendor/suprstylin.css'

render(<App />, document.querySelector('.app'))
