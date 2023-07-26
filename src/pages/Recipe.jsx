import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import {motion} from "framer-motion";

const Recipe = () => {

    const params = useParams();
    const[details, setDetails] = useState({});
    const[activeTab, setActiveTab] = useState('ingredients');


    const getDetails= async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        console.log(detailData);
        setDetails(detailData);
    }

    useEffect( ()=> {
        getDetails(params.name);
    }, [params.name])
    console.log(details);
    return (
      <DetailWrapper>
          <div>
              <h2>{details.title}</h2>
              <ImageWrapper
                  animate={{opacity:1}}
                  initial={{opacity:0}}
                  exit={{opacity:0}}
                  transition={{duration: 0.5}}
              >
                <img src={details.image} alt={details.title}/>
              </ImageWrapper>
          </div>
          <Info>
              <Button onClick = {() => setActiveTab('instruction')}
                      className={activeTab === 'instruction' ? 'active' : ''}
              >Instruction
              </Button>
              <Button onClick = {() => setActiveTab('ingredients')}
                      className={activeTab === 'ingredients' ? 'active' : ''}
              >Ingredients
              </Button>
              {activeTab === 'instruction'
                  ? <div className='text-wrapper'>
                      <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                      <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                  </div>
                  : <div className='text-wrapper'>
                      {
                      details.extendedIngredients
                          ? <ul>
                              {
                                  details.extendedIngredients.map((ingredient) => (
                                      <li>{ingredient.original}</li>
                                  ))
                              }
                          </ul>
                          : <div></div>
                      }
                  </div>
              }
          </Info>
      </DetailWrapper>
            

    );
};

const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 50% 50%;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1rem;
    line-height: 1.2rem;
  }
  ul{
    margin-top: 2rem;
   
  }
  p{
    margin-top: 2rem;
    line-height: 1.2rem;
    text-align: justify;
    
  }
`;

const ImageWrapper = styled(motion.div)`
  img{
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`;



 


const Button = styled.button`
  padding: 1rem 0;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
  width: 20%;
  
`;

const Info = styled.div`
  margin-left: 2rem;
  div.text-wrapper{
   max-width :100%;
  }
`;



export default Recipe;