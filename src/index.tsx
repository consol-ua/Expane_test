import ReactDOM from 'react-dom'
import { App } from './App'
import 'assets/index.css'
import { initApp } from 'logic/app'

initApp()

ReactDOM.render(<App />, document.getElementById('root'))
