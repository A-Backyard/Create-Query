
import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import LogoItem from '../assets/img/home/logo.png'
import {Navbar, Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {


    const [mobileActive, setMobile] = useState(false);

    const toggleMobileNav = () => {
        setMobile(!mobileActive);
    };

    const renderMobileNav = () => {
        return (
            <div className='mobile-nav-container'>
                <div className="mobile-nav">
                    <div className="title-container">
                        <FontAwesomeIcon icon={'times-circle'} onClick = {() => {toggleMobileNav()}}/>
                    </div>
                    <div className='nav-links-container'>

                        <NavLink to='/services' className={'header__button'}>Услуги</NavLink>
                        <NavLink to='/about'>О нас</NavLink>
                        <NavLink to='/contacts'>Контакты</NavLink>
                    </div>
                    <hr />
                    <div className='additional-options-container'>
                        <div className="header__phone"><a href="tel:+380509834900">+380 50 98 34 900</a></div>
                        <div className="header__button"><a href={"#"}>Оформить заказ</a></div>
                    </div>
                    <hr />
                    <div className='footer-menu-container'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi blanditiis corporis distinctio itaque iusto nisi, recusandae reiciendis. Debitis, esse.</p>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <header>
            <Navbar expand="lg" bg={'primary-dark'}>
                <Navbar.Brand>
                        <Link to = '/' className="header__logo">
                            <div className="header__logo-img">
                                <img src={LogoItem} alt="" />
                            </div>
                            <div className="header__logo-name">
                                <span className="logoname-1" id="ln1">Create</span>
                                <span to="/" className="logoname-2" id="ln2"> Query</span>
                            </div>
                        </Link>
                </Navbar.Brand>
                <FontAwesomeIcon
                    icon={'bars'}
                    className = 'menu-toggler'
                    onClick = {() => {toggleMobileNav()}}
                />
                {mobileActive ? renderMobileNav() : null}
                <Navbar.Collapse>
                    <Nav className="nav-container">
                        <div className='nav-links-container d-flex flex-row'>
                                <NavLink to='/services'>Услуги</NavLink>
                                <NavLink to='/about'>О нас</NavLink>
                                <NavLink to='/contacts'>Контакты</NavLink>
                        </div>
                        <div>
                            <div className="header__phone"><a href="tel:+380509834900">+380 50 98 34 900</a></div>
                            <div className="header__button"><a href={"#"}>Оформить заказ</a></div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
};


export default Header