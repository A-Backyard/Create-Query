
import React, {useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import LogoItem from '../assets/img/home/logo.png'
import anime from 'animejs/lib/anime.es.js'



const Header = () => {

    useEffect(() => {
        let textWrapper = document.querySelector('.ln1');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false})
            .add({
                targets: '.ln1  .letter',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70*i

            });




    },  []);


    return(
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <div className="header__logo-img">
                        <NavLink to="/"><img src={LogoItem} alt="" /></NavLink>
                    </div>
                    <div className="header__logo-name">
                        <NavLink to="/"  class="ln1">Create </NavLink>
                        <NavLink to="/"  сlass="ln2">Query</NavLink>
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