import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'

import Menu from '../templates/menu'
import Routes from './routes'
import '../templates/custom.css'

export default props => (
  <div className='container'>
    <Menu></Menu>
    <Routes></Routes>
  </div>
)