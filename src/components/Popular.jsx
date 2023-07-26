import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Card, Gradient, Wrapper} from '../styles/appStyles.js'
import {Link} from "react-router-dom";

const Popular = () => {

    const [popular, setPopular] = useState([]);
    const check = localStorage.getItem('popular');

    const getPopular = async () => {
        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes))
            setPopular(data.recipes);
        }

    }

    useEffect(() => {
        getPopular();
    }, []);


    return (
        <div>
          <Wrapper>
              <h3>Veggie picks</h3>
              {/*Splide - создаем карусель из библиотеки react-splide*/}
              {/*options - настройка карусели*/}
              <Splide options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  gap: '5rem',
                  drag: 'free',
              }}>
                  {popular.map((recipe) => {
                      return (
                          //SplideSlide - указание отдельного слайда в карусели
                          <SplideSlide key={recipe.id}>
                              <Card>
                                  <Link to = {'/recipes/' + recipe.id}>
                                    <Gradient>
                                         <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}/>
                                    </Gradient>
                                  </Link>
                              </Card>
                          </SplideSlide>
                      );
                  })}
              </Splide>
          </Wrapper>
        </div>
    );
};



export default Popular;