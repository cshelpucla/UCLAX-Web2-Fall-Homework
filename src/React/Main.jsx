import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Components ---------------------------*/
import Header from './Shared/Header.jsx';
import Nav from './Shared/Nav.jsx';
import Content from './Shared/Content.jsx';
import Footer from './Shared/Footer.jsx';

/* Data ------------------------------- */
// import auction from '../common/static-data/auction.js';

const Main = () => {
    //console.log('Main', auction.id);
    return (
        <MainStyled className='Main'>
            <BrowserRouter>
                <h1>In Class</h1>
                <Header />
                <Nav />
                <Content />
                <Footer />
            </BrowserRouter>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div `
    background-color: white;
    max-width: 1200px;
    width: 100%;
    margin: auo;
    box-shadow: 0px 0px 10px rgba(0,0,0,.2);
`;