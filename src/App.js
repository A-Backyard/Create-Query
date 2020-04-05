import React, {useContext} from 'react';
import './scss/style.scss'
import {Switch, Route, Redirect, __RouterContext} from 'react-router-dom'
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import {useTransition, animated} from 'react-spring'
import Wrapper from "./components/wrapper";
//icons
import { library, } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


library.add(faBars, faTimesCircle);

function App() {

    const {location} = useContext(__RouterContext)


    const transitions = useTransition(location, location => location.pathname, {
        from: {opacity: 0, transform: 'translate(100%,0)'},
        enter: {opacity: 1, transform: 'translate(0,0)'},
        leave: {opacity: 0, transform: 'translate(-50%,0)'}
    })


    return (
        <Layout>
            {transitions.map(({item, props, key}) => (
                <animated.div key = {key} style = {props}>
                    <Wrapper>
                        <Switch location = {item}>
                            <Route path = '/' exact component = {Home}/>
                            <Route path = '/services' render = {Services}/>
                            <Route path = '/about' component = {About}/>
                            <Redirect to = '/' />
                        </Switch>
                    </Wrapper>
                </animated.div>
            ))}
        </Layout>
  );
}

export default App;
