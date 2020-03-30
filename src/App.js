import React from 'react';
import './scss/style.scss'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";



function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about"  component={About}/>
            <Redirect to = '/' />
          </Switch>
        </Layout>
      </BrowserRouter>

  );
}

export default App;
