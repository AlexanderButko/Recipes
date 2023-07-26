import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import React from 'react';
import {NavLink} from "react-router-dom";//Не исп в react <a>, жмак по такой ссылке приводит к перезагрузке страницы, что наруш принцип SPA

const Category = () => {
    return (
        <List>
            <SLink to={'cuisine/Italian'}>
                <h3>Italian</h3>
                <FaPizzaSlice/>
            </SLink>
            <SLink to={'cuisine/American'}>
                <h3>American</h3>
                <FaHamburger/>
            </SLink>
            <SLink to={'cuisine/Thai'}>
                <h3>Thai</h3>
                <GiNoodles/>
            </SLink >
            <SLink to={'cuisine/Japanese'}>
                <h3>Japanese</h3>
                <GiChopsticks/>
            </SLink>
        </List>
    );
};




export default Category;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

//Таким образом создаем стилизованный компонент
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  cursor: pointer;
  
  h3{
    color: white;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }
  /*Псевдокласс*/
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;