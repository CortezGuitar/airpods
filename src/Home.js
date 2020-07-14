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
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    max-width: 600px;
    width: 100%;
    align-items: center;
`;

const NavItem = styled.div`
    cursor: pointer;
    :hover {
        color: rgb(232, 53, 135);
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
`;

const MainSectionImage = styled(ImgWrap)`
    width: 440px;
    height: 600px;
`;

const MainSectionTitleWrap = styled.div`
    padding: 150px 0;
    font-weight: bold;
    text-align: center;
`;

const MainSectionTitle = styled.div`
    font-size: 4rem;
    margin-bottom: 1rem;
    max-width: 560px;
`;

// const MainSectionSubtitle = styled.div`
//     font-size: 1.5rem;
//     margin-bottom: 2rem;
// `;

const MainButton = styled(Button)``;

const MainSectionFooter = styled.div`
    text-align: center;
    font-size: 3rem;
    padding: 4rem 0 1rem 0;
    font-weight: bold;
`;

const DeliverySection = styled.section`
    padding: 1rem 0;
`;

const DeliveryContainer = styled(Container)``;

const DeliveryTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DeliveryImg = styled(ImgWrap)`
    width: 600px;
    height: 244px;
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
`;

const DeliveryDesc = styled.div`
    font-size: 1.5rem;
    box-shadow: 0 0 9px -3px rgb(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem 1rem 2rem 8rem;
    position: relative;
    justify-content: flex-end;
    margin: 1rem 0;
`;

const DeliveryDescTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

const DeliveryDescImg = styled(ImgWrap)`
    width: 72px;
    height: 107px;
    position: absolute;
    left: 1.5rem;
`;

const DeliveryDescText = styled.div`
    font-size: 1.05rem;
`;

const ProtectionSection = styled.section`
    margin-bottom: 1rem;
`;

const ProtectionContainer = styled(Container)``;

const ProtectionTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0 3rem;
`;

const ProtectionCard = styled.div`
    box-shadow: 0 0 9px -3px rgb(0, 0, 0, 0.5);
    padding: 2rem 1rem;
    display: flex;
    margin-bottom: 3rem;
`;

const ProtectionImgWrap = styled(ImgWrap)`
    width: 447px;
    height: 324px;
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
`;

const ProtectionCardTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;
const ProtectionCardDesc = styled.div`
    padding-left: 4rem;
    max-width: 600px;
`;

const DeliveryFormWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;

const DeliveryFormTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

const DeliveryFormImg = styled(ImgWrap)`
    max-width: 600px;
`;

const DeliveryFormDesc = styled.div`
    font-size: 1.1rem;
    margin-bottom: 2rem;
`;

const DeliveryForm = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 60%;
    align-items: center;
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
    ${({ show }) =>
        show &&
        css`
            z-index: 0;
            width: 100%;
            filter: blur(6px);
            overflow-y: hidden;
            transition: filter 500ms ease-in;
        `}
`;

const HomeWrapper = styled.div`
    ${({ overlay }) =>
        overlay &&
        css`
            position: relative;
            overflow-y: hidden;
            width: 100%;
            height: 100vh;
        `}
`;

const scrollToRef = (ref) =>
    window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth',
    });

function Home() {
    const [overlay, setShowOverlay] = useState(false);
    const [positionY, setPositionY] = useState(0);

    const catalogRef = useRef(null);
    const deliveryRef = useRef(null);
    const protectionRef = useRef(null);
    const executeScroll = (itemRef) => scrollToRef(itemRef);

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

    return (
        <HomeWrapper overlay={overlay}>
            {overlay && <Popup />}
            <Overlay show={overlay} onClick={handleHideOverlay} />
            <OverlayWrap show={overlay}>
                <Header>
                    <HeaderContainer>
                        <Logo onClick={handleScrollTop()}>
                            <img src={LogoImg} alt="" />
                        </Logo>
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
                        <HeaderContact>38(000)123-12-32</HeaderContact>
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
                                Список моделей Apple AipPods
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
                            <DeliveryDesc>
                                <DeliveryDescImg>
                                    <img src={Medal} alt="" />
                                </DeliveryDescImg>
                                <DeliveryDescTitle>
                                    Условия и оплата
                                </DeliveryDescTitle>
                                <DeliveryDescText>
                                    Доставка Новой Почтой в день получения
                                    заказа, оплата наложенным платежем. Прежде
                                    чем оплатить покупку, вы сможете
                                    синхронизировать наушники с вашим смартфоном
                                    и послушать звучание, что бы убедиться в их
                                    оригинальности и подлинности.
                                </DeliveryDescText>
                            </DeliveryDesc>
                            <DeliveryFormWrap>
                                <DeliveryForm>
                                    <DeliveryFormTitle>
                                        Закажите обратный звонок
                                    </DeliveryFormTitle>
                                    <DeliveryFormDesc>
                                        Для оформления заказа и получения
                                        дополнительной информации укажите Ваш
                                        номер телефона. Менеджер свяжеться с
                                        вами в ближайщее время.
                                    </DeliveryFormDesc>
                                    <FormWrap>
                                        <OrderForm />
                                    </FormWrap>
                                </DeliveryForm>
                                <DeliveryFormImg>
                                    <img src={Zakaz} alt="" />
                                </DeliveryFormImg>
                            </DeliveryFormWrap>
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
                </ContainerWrap>
                <Footer>
                    <FooterContainer>
                        <Logo>
                            <img src={LogoImg} alt="" />
                        </Logo>
                        <MainButton onClick={handleOrderButton}>
                            Заказать звонок
                        </MainButton>
                        <HeaderContact>38(000)123-12-32</HeaderContact>
                    </FooterContainer>
                </Footer>
            </OverlayWrap>
        </HomeWrapper>
    );
}

export default Home;
