

import React from 'react'
import NameItem from '../assets/img/home/title-icon.png'
import StrategyItem from '../assets/img/home/strategy.jpg'
import SiteItem from '../assets/img/home/site.svg'
import MarketItem from '../assets/img/home/market.svg'
import DesignItem from '../assets/img/home/design.svg'
import Port1Item from '../assets/img/home/port1.PNG'
import Port2Item from '../assets/img/home/port2.PNG'
import FacebookItem from '../assets/img/home/facebook.png'
import WhatsappItem from '../assets/img/home/whatsapp.png'
import InstagramItem from '../assets/img/home/instagram.png'
import TelegramItem from '../assets/img/home/telegram.png'

const Home = () => {



    return(
        <>
            <section className="section_top">
                <div className="container">
                    <div className="site">
                        <div className="site__title">Create
                            <br />Query<img src={NameItem} alt="" /></div>
                        <div className="site__slogan">Комплексная разработка сайтов, оформление соц. сетей, айдентика, а так
                            же дизайн чего-то там кого-то там.
                        </div>
                    </div>
                    <div className="advantage__block">
                        <div className="advantage__content">
                            <div className="advantage__content-title">
                                Наша компания предлагает
                            </div>
                            <div className="advantage__content-img"><img src={StrategyItem} alt="" /></div>
                            <div className="advantage__content-description">
                                <ul>
                                    <li><span className="icon-circle"></span><a href="">Высокое качество работ</a></li>
                                    <li><span className="icon-circle"></span><a href="">Широкий спектр услуг</a></li>
                                    <li><span className="icon-circle"></span><a href="">Доступные цены</a></li>
                                    <li><span className="icon-circle"></span><a href="">Профессиональная команда специалистов</a></li>
                                    <li><span className="icon-circle"></span><a href="">Полное сопровождение клиентов </a></li>
                                    <li><span className="icon-circle"></span><a href="">что-то там ещё</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service">
                <div className="service__block">
                    <div className="service__content">
                        <div className="service__container">
                            <div className="service__logo"><img src={SiteItem} alt="" /></div>
                            <div className="service__name">Создание сайтов</div>
                            <div className="service__description">Создание сайта с нуля — один из важных этапов в
                                построении успешного бизнеса и его развитии, ведь именно он — тот самый маркетинговый
                                инструмент, который позволяет привлекать новых клиентов, повышать
                                продажи
                                и
                                достойным образом представить ваш бизнес общественности.
                                Обратившись к нам, вы получите не просто качественный программинг,
                                красивый и эргономичный дизайн, но и комплексный подход к решению всех возложенных на
                                нас бизнес-задач.
                            </div>
                        </div>
                    </div>
                    <div className="service__content">
                        <div className="service__container">
                            <div className="service__logo"><img src={MarketItem} alt="" /></div>
                            <div className="service__name">Маркетинг</div>
                            <div className="service__description">Комплексный системный подход учитывает кратко- и
                                долгосрочные цели бизнеса, использует все инструменты и каналы для получения целевых
                                заявок. Мы разрабатываем маркетинговый план и шаг за шагом его реализуем
                                — не вслепую, а с четкими микро- и макроцелями. Системный онлайн-маркетинг учитывает
                                сезонность, изменение спроса, тенденции и много других факторов. Это дает возможность
                                корректировать сочетание разных рекламных инструментов под
                                изменения текущей маркетинговой стратегии компании.
                            </div>
                        </div>
                    </div>
                    <div className="service__content">
                        <div className="service__container">
                            <div className="service__logo"><img src={DesignItem} alt="" /></div>
                            <div className="service__name">Дизайн</div>
                            <div className="service__description">Профессиональный дизайн сайта — в первую очередь
                                логическая цепочка из индивидальной цветовой гаммы, графических изображений и самого
                                текста, которые в свою очередь формируют ваш собственный фирменный
                                стиль. Мы стараемся выстраивать работу над дизайном так, что бы он создавался и работал
                                в первую очередь в комплексе с вашими потребностями и потребностями конечных
                                пользователей. То есть вы говорите свои желания и цели, а мы формируем
                                образ вашего будущего сайта, что бы он был не только привлекательнм но и эффективным!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="about__block">
                        <div className="about__title">Немного о нас</div>
                        <div className="about__description">Проектируем, придумываем, разрабатываем, а порой и
                            настаиваем на внедрении тех решений и технологий, которые появились в процессе работы над
                            проектом. Особое внимание уделяем чистоте интерфейса и потребностям
                            пользователей, создавая корпоративные сайты, интернет-магазины и помогая реализовать
                            потенциал стартапам различной тематики.
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio">
                <div className="portfolio__title">Свежие работы
                </div>
                <div className="portfolio__wrapper">
                    <figure>
                        <img src={Port1Item} alt="" />
                        <figcaption>
                            <h2>LUXURY AZUR</h2>
                            <p>Сайт разработанный специально для компании "Luxury Azur", которая занимается продажой
                                и арендой элитной недвижимости во Франции, Италии, Испании и прочих странах
                                Европы.</p>
                            <a href="">View more</a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={Port2Item} alt="" />
                        <figcaption>
                            <h2>EUROPASSGROUP</h2>
                            <p>Работа для компании "EUROPASSGROUP", по созданию небольшого проэкта направленного на
                                помощь в получении гражданства Румынии, жителям разных стран.</p>
                            <a href="">View more</a>
                        </figcaption>
                    </figure>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="social">
                        <a href="#"><img src={FacebookItem} alt=""/></a>
                        <a href="#"><img src={WhatsappItem} alt=""/></a>
                        <a href="#"><img src={InstagramItem} alt=""/></a>
                        <a href="#"><img src={TelegramItem} alt="" /></a>
                    </div>
                    <div className="phone"><a href="">+380 50 983 49 00</a></div>
                </div>
            </section>
            <section className="footer">
                <div className="container">
                    <div className="privacy"><a href="">Политика конфиденциальности</a></div>
                    <div className="agreement"><a href="">Соглашение на обработку персональных данных</a></div>
                    <div className="copyright">Copyright © CREATEQUERY, 2019. All rights reserved.</div>
                </div>
            </section>
        </>
    )
}

export default Home