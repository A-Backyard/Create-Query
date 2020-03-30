
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import LogoItem from '../assets/img/home/logo.png'

const Header = () => {
    return(
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <div className="header__logo-img">
                        <NavLink to="/"><img src={LogoItem} alt="" /></NavLink>
                    </div>
                    <div className="header__logo-name">
                        <NavLink to="/" className="logoname-1" id="ln1">Create</NavLink>
                        <NavLink to="/" className="logoname-2" id="ln2"> Query</NavLink>
                    </div>
                </div>

                <div className="header__menu">
                    <nav className="menu">
                        <div className="header__btn"><span className="icon-bars"></span></div>
                        <ul>
                            <li><NavLink to='/about'>О компании</NavLink></li>
                            <li><NavLink to="/service">Услуги</NavLink></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__phone"><a href="">+380 50 98 34 900</a></div>

                <div className="header__button"><a href="#">Оформить заказ</a></div>
            </div>
        </header>
    )
};


export default Header