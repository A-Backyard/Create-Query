
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Layout from "../components/layout";
import Home from '../pages/home'
import About from '../pages/about'

const app = (
    <BrowserRouter>
            <Layout>
                <Switch>
                        <Route path='/' component = {Home} exact/>
                        <Route path='/about' component = {About} />
                        <Redirect to='/' />
                </Switch>
            </Layout>
    </BrowserRouter>

)



ReactDOM.render(app, document.getElementById("root"));


