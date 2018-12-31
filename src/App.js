import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'

import BookShelfer from './components/bookshelf/BookShelfer'

class BooksApp extends React.Component {

  render() {
    return (
    <div>
      <Route exact path='/' component={BookShelfer} />
    </div>
      )
    }
  }

export default BooksApp
