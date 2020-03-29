
import React from 'react'

const Header = () => {
    return(
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <div className="header__logo-img">
                        <a href="index.html"><img src="img/logo.png" alt="" /></a>
                    </div>
                    <div className="header__logo-name">
                        <a href="#" className="logoname-1" id="ln1">Create</a>
                        <a href="#" className="logoname-2" id="ln2"> Query</a>
                    </div>
                </div>

                <div className="header__menu">
                    <nav className="menu">
                        <div className="header__btn"><span className="icon-bars"></span></div>
                        <ul>
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Услуги</a></li>
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