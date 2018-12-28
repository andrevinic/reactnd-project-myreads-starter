import React from 'react'
import './App.css'

import * as BooksAPI from '../../services/BooksAPI';
import Home from '../home/Home'

class BooksApp extends React.Component {

  render() {
    
    return (
    <div>

      <Route exact path='/' component={bookcomponent} />
      <Route path='/search' component={ searchbooks} />

    </div>
    
      )
    }
  }

export default BooksApp
