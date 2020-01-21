import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { initializeIcons } from '@uifabric/icons'
import * as microsoftTeams from '@microsoft/teams-js'
import 'office-ui-fabric-react/dist/css/fabric.css'
import { loadCurrentUserData } from './loadCurrentUserData'

loadCurrentUserData()
microsoftTeams.initialize()
initializeIcons(undefined, { disableWarnings: true })
ReactDOM.render(<App />, document.getElementById('root'))
