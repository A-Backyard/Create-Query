import React from 'react'
import LogoItem from '../assets/img/home/logo.png'
import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <section className="aboutUs">
            <div className="container">
                <div className="aboutUs__content">
                    <div className="aboutUs__content-logo">
                        <div className="aboutUs__logo">
                            <NavLink to="/"><img src={LogoItem} alt=""/></NavLink>
                        </div>
                        <div className="aboutUs__logo-name">
                            <div className="logo_name1">Create</div>
                            <div className="logo_name2">Query</div>
                        </div>
                    </div>
                    <div className="aboutUs__content-info">
                        <div className="aboutUs__title">О компании</div>
                        <div className="aboutUs__description"> Проектируем, придумываем, разрабатываем, а порой и
                            настаиваем на внедрении тех решений и технологий, которые появились
                            в процессе работы над проектом. Особое внимание уделяем чистоте интерфейса и потребностям
                            пользователей, создавая корпоративные сайты, интернет-магазины
                            и помогая реализовать потенциал стартапам различной тематики.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About