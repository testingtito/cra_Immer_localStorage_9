import React, { useState } from 'react'
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms';
import CreatePost from './components/CreatePost';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import ViewSinglePost from './components/ViewSinglePost';
import FlashMessage from './components/FlashMessage';
Axios.defaults.baseURL = "http://localhost:9876";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));
  const [flashMessages, setFlashMessages] = useState([]);

  const addFlashMessage = msg => {
    setFlashMessages(prev => prev.concat(msg))
  }

  return (
    <BrowserRouter>
      <FlashMessage flashMessages={flashMessages} />
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path='/' component='' exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path='/post/:id'>
          <ViewSinglePost />
        </Route>
        <Route path='/create-post'>
          <CreatePost addFlashMessage={addFlashMessage} />
        </Route>
        <Route path='/about-us'>
          <About />
        </Route>
        <Route path='/terms'>
          <Terms />
        </Route>
      </Switch>
      <Footer />

    </BrowserRouter>
  )
}

export default App
