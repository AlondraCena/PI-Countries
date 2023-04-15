import './App.css';
import { Route, useLocation } from "react-router-dom"
import { Home, Landing, Form, Detail} from "./views"
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Route exact path ="/" component = {Landing} />
      <Route path ="/home" render={() => <Home />}/>
      <Route exact path ="/create" component = {Form} />
      <Route exact path ="/detail/:id" component = {Detail} />
    </div>
  );
}

export default App;
