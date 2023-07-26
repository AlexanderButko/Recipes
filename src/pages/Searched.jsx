import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
    const[searched, setSearched] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        console.log(recipes);
        setSearched(recipes.results);
    }

    useEffect( ()=> {
        getSearched(params.searched);
    }, [params.searched])
    return (
        <Grid>
            {searched.map((item) => {
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
const Grid = styled.div`
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
export default Searched;