import './App.css';
import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Nav>
                <GiKnifeFork />
                <Logo Link to={'/'} >Main page</Logo>
            </Nav>
            <Category/>
            <Search/>
            <Pages/>
        </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;
export default App;
