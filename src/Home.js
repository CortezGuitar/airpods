import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import LogoImg from './images/logo.png';
import MainImage from './images/airpods1.jpg';
import Catalog from './components/Catalog';
import {
    ContainerWrap,
    Container,
    ImgWrap,
    Button,
} from './components/General/';
import Delivery1 from './images/delivery.jpg';
import NovaPochta from './images/nova_pochta.png';
import Medal from './images/medal.png';
import Protection from './images/protection.jpg';
import Gear from './images/gear.svg';
import Zakaz from './images/zakaz.jpg';
import OrderForm from './components/Form';
import Popup from './components/Popup';
import { css } from 'styled-components';

const Header = styled.div`
    background-color: #000;
    width: 100%;
    min-height: 50px;
    color: #fff;
    position: sticky;
    top: 0;
    padding: 0.5rem 0;
    z-index: 99;
    opacity: 0.9;
`;

const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled(ImgWrap)`
    width: 53px;
    height: 66px;
    cursor: pointer;
    @media all and (max-width: 767px) {
        display: none;
    }
`;

const LogoMobile = styled(Logo)`
    display: none;
    @media all and (max-width: 767px) {
        display: block;
    }
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    max-width: 600px;
    width: 100%;
    align-items: center;

    @media all and (max-width: 768px) {
        max-width: 460px;
    }
    @media all and (max-width: 767px) {
        display: none;
    }
`;

const NavItem = styled.div`
    cursor: pointer;
    :hover {
        color: rgb(232, 53, 135);
    }

    @media all and (max-width: 767px) {
        font-size: 2rem;
    }
`;

const HeaderContact = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
`;

const MainSection = styled.section``;

const MainSectionContainer = styled(Container)``;

const MainSectionContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 48px;

    @media all and (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 1rem;
        height: 100vh;
    }
`;

const MainSectionImage = styled(ImgWrap)`
    width: 440px;
    height: 600px;

    @media all and (max-width: 768px) {
        height: 460px;
    }
    @media all and (max-width: 767px) {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 320px;
        padding-top: 2rem;
    }
`;

const MainSectionTitleWrap = styled.div`
    padding: 150px 0;
    font-weight: bold;
    text-align: center;

    @media all and (max-width: 767px) {
        padding: 0;
    }
`;

const MainSectionTitle = styled.div`
    font-size: 4rem;
    margin-bottom: 1rem;
    max-width: 560px;

    @media all and (max-width: 768px) {
        font-size: 3rem;
    }
    @media all and (max-width: 767px) {
        font-size: 2rem;
    }
`;

const MainButton = styled(Button)``;

const MainSectionFooter = styled.div`
    text-align: center;
    font-size: 3rem;
    padding: 4rem 0 1rem 0;
    font-weight: bold;

    @media all and (max-width: 768px) {
        font-size: 2.5rem;
    }
    @media all and (max-width: 767px) {
        display: none;
    }
`;

const DeliverySection = styled.section`
    padding: 1rem 0;
`;

const DeliveryContainer = styled(Container)`
    text-align: center;
`;

const DeliveryTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media all and (max-width: 767px) {
        font-size: 2rem;
    }
`;

const DeliveryImg = styled(ImgWrap)`
    width: 600px;
    height: 244px;

    @media all and (max-width: 767px) {
        height: auto;
    }
`;

const DeliveryPochta = styled(ImgWrap)`
    width: 320px;
    height: 54px;
    margin-top: 1rem;
`;

const DeliveryTitleWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;

    @media all and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const DeliveryDesc = styled.div`
    font-size: 1.5rem;
    box-shadow: 0 0 9px -3px rgb(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2rem 1rem 2rem 8rem;
    position: relative;
    justify-content: flex-start;
    margin: 1rem 0;
    text-align: left;
`;

const DeliveryDescTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;

    @media all and (max-width: 767px) {
        font-size: 1.5rem;
    }
`;

const DeliveryDescImg = styled(ImgWrap)`
    width: 72px;
    height: 107px;
    position: absolute;
    left: 1.5rem;
`;

const DeliveryDescText = styled.div`
    font-size: 1.05rem;
    @media all and (max-width: 767px) {
        font-size: 1rem;
    }
`;

const ProtectionSection = styled.section`
    margin-bottom: 1rem;
`;

const ProtectionContainer = styled(Container)``;

const ProtectionTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0 2rem;

    @media all and (max-width: 767px) {
        margin: 0 0 2rem;
    }
`;

const ProtectionCard = styled.div`
    box-shadow: 0 0 9px -3px rgb(0, 0, 0, 0.5);
    padding: 2rem 1rem;
    display: flex;
    margin-bottom: 3rem;

    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const ProtectionImgWrap = styled(ImgWrap)`
    width: 447px;
    height: 324px;

    @media all and (max-width: 767px) {
        height: 260px;
    }
`;

const ProtectionCardTitleImg = styled(ImgWrap)`
    width: 43px;
    height: 43px;
    margin-right: 1rem;
`;

const ProtectionItemsWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProtectionCardItem = styled.div`
    margin-bottom: 1rem;
`;

const ProtectionCardTitleWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media all and (max-width: 767px) {
    }
`;

const ProtectionCardTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;

    @media all and (max-width: 767px) {
        font-size: 1rem;
    }
`;
const ProtectionCardDesc = styled.div`
    padding-left: 4rem;
    max-width: 600px;

    @media all and (max-width: 767px) {
        padding: 0;
    }
`;

const DeliveryFormWrap = styled(Container)`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    padding-bottom: 4rem;

    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
    @media all and (max-width: 768px) {
        padding-bottom: 2rem;
    }
`;

const DeliveryFormTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;

    @media all and (max-width: 767px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

const DeliveryFormImg = styled(ImgWrap)`
    max-width: 600px;

    @media all and (max-width: 767px) {
        margin-top: 1rem;
    }
`;

const DeliveryFormDesc = styled.div`
    font-size: 1.1rem;
    margin-bottom: 2rem;

    @media all and (max-width: 767px) {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`;

const DeliveryForm = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 60%;
    align-items: center;

    @media all and (max-width: 767px) {
        max-width: 100%;
    }
`;

const FormWrap = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: center;
`;

const Footer = styled.div`
    background-color: #000;
    width: 100%;
`;

const FooterContainer = styled(HeaderContainer)`
    justify-content: space-around;
    padding: 3rem 0;
    @media all and (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

const Overlay = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    z-index: 99;
    position: absolute;
    ${({ show }) =>
        show &&
        css`
            display: block;
        `}
`;

const OverlayWrap = styled.div`
    ${({ show }) => {
        return (
            show &&
            css`
                z-index: 0;
                width: 100%;
                filter: blur(6px);
                overflow-y: hidden;
                transition: filter 500ms ease-in;
            `
        );
    }}
`;

const HomeWrapper = styled.div`
    ${({ overlay }) => {
        return (
            overlay &&
            css`
                position: relative;
                overflow-y: hidden;
                width: 100%;
                height: 100vh;
            `
        );
    }}
`;

const MobileNav = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 6rem 3rem;
    animation: 200ms ease-in mobilenav;

    @keyframes mobilenav {
        from {
            left: -100%;
        }
        to {
            left: 0;
        }
    }
`;

const scrollToRef = (ref) =>
    window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth',
    });

function Home(props) {
    const [overlay, setShowOverlay] = useState(false);
    const [positionY, setPositionY] = useState(0);
    const [mobileNav, setShowMobileNav] = useState(false);

    const catalogRef = useRef(null);
    const deliveryRef = useRef(null);
    const protectionRef = useRef(null);

    const executeScroll = (itemRef) => {
        if (mobileNav === true) {
            setShowMobileNav(false);
        }
        scrollToRef(itemRef);
    };

    const navItems = [
        {
            label: 'Каталог',
            ref: catalogRef,
        },
        {
            label: 'Доставка',
            ref: deliveryRef,
        },
        {
            label: 'Гарантия',
            ref: protectionRef,
        },
        { label: 'Заказать звонок' },
    ];

    const handleOrderButton = () => {
        setPositionY(window.scrollY);
        setShowOverlay(true);
    };

    const handleHideOverlay = () => {
        if (overlay === true) {
            setShowOverlay(false);
            setTimeout(() => {
                window.scrollTo({
                    top: positionY,
                    behavior: 'smooth',
                });
            });
        }
    };

    const handleScrollTop = () => {
        return () =>
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
    };

    const handleShowMobileNav = () => {
        setShowMobileNav(!mobileNav);
        if (mobileNav === true) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <HomeWrapper overlay={overlay}>
            {overlay && <Popup hideOverlay={handleHideOverlay} />}

            <Overlay show={overlay} onClick={handleHideOverlay} />
            <OverlayWrap show={overlay}>
                <Header>
                    {mobileNav && (
                        <MobileNav>
                            <LogoMobile onClick={handleShowMobileNav}>
                                <img src={LogoImg} alt="" />
                            </LogoMobile>
                            {navItems.map((item, index) => {
                                if (index === navItems.length - 1) {
                                    return (
                                        <MainButton
                                            key={item.label}
                                            onClick={handleOrderButton}
                                        >
                                            {item.label}
                                        </MainButton>
                                    );
                                }
                                return (
                                    <NavItem
                                        key={item.label}
                                        onClick={() => executeScroll(item.ref)}
                                    >
                                        {item.label}
                                    </NavItem>
                                );
                            })}
                        </MobileNav>
                    )}
                    <HeaderContainer>
                        <Logo onClick={handleScrollTop()}>
                            <img src={LogoImg} alt="" />
                        </Logo>
                        <LogoMobile onClick={handleShowMobileNav}>
                            <img src={LogoImg} alt="" />
                        </LogoMobile>
                        <NavBar>
                            {navItems.map((item, index) => {
                                if (index === navItems.length - 1) {
                                    return (
                                        <MainButton
                                            key={item.label}
                                            onClick={handleOrderButton}
                                        >
                                            {item.label}
                                        </MainButton>
                                    );
                                }
                                return (
                                    <NavItem
                                        key={item.label}
                                        onClick={() => executeScroll(item.ref)}
                                    >
                                        {item.label}
                                    </NavItem>
                                );
                            })}
                        </NavBar>
                        <HeaderContact>38 (093) 336-45-78</HeaderContact>
                    </HeaderContainer>
                </Header>

                <ContainerWrap>
                    <MainSection>
                        <MainSectionContainer>
                            <MainSectionContent>
                                <MainSectionImage>
                                    <img src={MainImage} alt="" />
                                </MainSectionImage>
                                <MainSectionTitleWrap>
                                    <MainSectionTitle>
                                        Лучшие цены на Apple AirPods
                                    </MainSectionTitle>
                                    <MainButton
                                        onClick={() =>
                                            executeScroll(catalogRef)
                                        }
                                    >
                                        Узнать подробнее
                                    </MainButton>
                                </MainSectionTitleWrap>
                            </MainSectionContent>
                            <MainSectionFooter>
                                Список моделей Apple AirPods
                            </MainSectionFooter>
                        </MainSectionContainer>
                    </MainSection>

                    <Catalog
                        ref={catalogRef}
                        orderHandler={handleOrderButton}
                    />

                    <DeliverySection ref={deliveryRef}>
                        <DeliveryTitleWrap>
                            <DeliveryTitle>
                                Доставка наушников AirPods
                                <br />
                                без предоплаты
                                <DeliveryPochta>
                                    <img src={NovaPochta} alt="" />
                                </DeliveryPochta>
                            </DeliveryTitle>
                            <DeliveryImg>
                                <img src={Delivery1} alt="" />
                            </DeliveryImg>
                        </DeliveryTitleWrap>

                        <DeliveryContainer>
                            <DeliveryDescTitle>
                                Условия и оплата
                            </DeliveryDescTitle>
                            <DeliveryDesc>
                                <DeliveryDescImg>
                                    <img src={Medal} alt="" />
                                </DeliveryDescImg>

                                <DeliveryDescText>
                                    Доставка Новой Почтой в день получения
                                    заказа, оплата наложенным платежом. Прежде
                                    чем оплатить покупку, вы сможете
                                    синхронизировать наушники с вашим смартфоном
                                    и послушать звучание, что бы убедиться в их
                                    оригинальности и подлинности.
                                </DeliveryDescText>
                            </DeliveryDesc>
                        </DeliveryContainer>
                    </DeliverySection>

                    <ProtectionSection ref={protectionRef}>
                        <ProtectionContainer>
                            <ProtectionTitle>Гарантия</ProtectionTitle>
                            <ProtectionCard>
                                <ProtectionImgWrap>
                                    <img src={Protection} alt="" />
                                </ProtectionImgWrap>
                                <ProtectionItemsWrap>
                                    <ProtectionCardItem>
                                        <ProtectionCardTitleWrap>
                                            <ProtectionCardTitleImg>
                                                <img src={Gear} alt="" />
                                            </ProtectionCardTitleImg>
                                            <ProtectionCardTitle>
                                                14 дней на возврат
                                            </ProtectionCardTitle>
                                        </ProtectionCardTitleWrap>
                                        <ProtectionCardDesc>
                                            В случае выявления заводского
                                            дефекта в первые две недели
                                            использования, покупатель в праве
                                            вернуть денежные средства или
                                            обменять устройство на аналогичный
                                            товар при условии сохранении
                                            товарного вида.
                                        </ProtectionCardDesc>
                                    </ProtectionCardItem>
                                    <ProtectionCardItem>
                                        <ProtectionCardTitleWrap>
                                            <ProtectionCardTitleImg>
                                                <img src={Gear} alt="" />
                                            </ProtectionCardTitleImg>
                                            <ProtectionCardTitle>
                                                Бесплатное гарантийное
                                                <br />
                                                обслуживание 1 год
                                            </ProtectionCardTitle>
                                        </ProtectionCardTitleWrap>
                                        <ProtectionCardDesc>
                                            В случае выявления брака
                                            производителя вы обращаетесь в наш
                                            сервисный центр с гарантийным
                                            талоном где вам окажут бесплатный
                                            ремонт.
                                        </ProtectionCardDesc>
                                    </ProtectionCardItem>
                                </ProtectionItemsWrap>
                            </ProtectionCard>
                        </ProtectionContainer>
                    </ProtectionSection>
                    <DeliveryFormWrap>
                        <DeliveryForm>
                            <DeliveryFormTitle>
                                Закажите обратный звонок
                            </DeliveryFormTitle>
                            <DeliveryFormDesc>
                                Для оформления заказа и получения дополнительной
                                информации укажите Ваш номер телефона. Менеджер
                                свяжется с вами в ближайшее время.
                            </DeliveryFormDesc>
                            <FormWrap>
                                <OrderForm />
                            </FormWrap>
                        </DeliveryForm>
                        <DeliveryFormImg>
                            <img src={Zakaz} alt="" />
                        </DeliveryFormImg>
                    </DeliveryFormWrap>
                </ContainerWrap>
                <Footer>
                    <FooterContainer>
                        <Logo>
                            <img src={LogoImg} alt="" />
                        </Logo>
                        <MainButton onClick={handleOrderButton}>
                            Заказать звонок
                        </MainButton>
                        <HeaderContact>38 (093) 336-45-78</HeaderContact>
                    </FooterContainer>
                </Footer>
            </OverlayWrap>
        </HomeWrapper>
    );
}

export default Home;
