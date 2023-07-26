import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import {motion} from 'framer-motion';

const Cuisine = () => {
    //Вернет объект текущих параметров, исп в роутинге (:type)
    const params = useParams();
    const [cuisine, setCuisine] = useState([]);
    //Из ссылки, по которой совершен переход достаем параметр и добавляем в URL запроса, АPI отреагирует и вернет только те посты, которые содержат cuisine=${name}
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(() => {
      getCuisine(params.type);
      console.log(cuisine);
    }, [params.type]);


    return (
        <Grid
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration: 0.5}}
        >
            {cuisine.map((item) => {
                return(
                    <Card key={item.id}>
                        <Link to = {'/recipes/' + item.id}>
                            <h4>{item.title}</h4>
                            <img src={item.image} alt={item.title}/>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
};
//Минимальная ширина столбца - 20rem. Если строка одна, то все элементы будут растянуты на всю строку в равной пропрции
//styled(motion.div) - стилизованный блок с анимациями
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

//text-decoration - подчеркивания, надчеркивания, зачеркивания текста
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;