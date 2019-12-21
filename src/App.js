import React, {useState} from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Maintain from "./components/Maintain"
import Post from "./components/Post"


function App() {
  const [ready,setReady] = useState(false)
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/maintain" component={Maintain} />
        <Route path="/:user_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;

