import React, {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Card, Gradient, Wrapper} from '../styles/appStyles.js'
import {Link} from "react-router-dom";

const Veggie = () => {
        const [veggie, setVeggie] = useState([]);
        const check = localStorage.getItem('veggie');

        const getVeggie = async () => {
            if(check){
                setVeggie(JSON.parse(check));
            }else{
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
                const data = await api.json();
                localStorage.setItem('veggie',JSON.stringify(data.recipes))
                setVeggie(data.recipes);
            }

        }

        useEffect(() => {
            getVeggie();
        }, []);
    return (
        <div>
            <Wrapper>
                <h3>Popular picks</h3>
                {/*Splide - создаем карусель из библиотеки react-splide*/}
                {/*options - настройка карусели*/}
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    gap: '5rem',
                    drag: 'free',
                }}>
                    {veggie.map((recipe) => {
                        return (
                            //SplideSlide - указание отдельного слайда в карусели
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Gradient/>
                                        <Link to = {'/recipes/' + recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title}/>
                                        </Link>
                                    <Gradient/>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
};

export default Veggie;