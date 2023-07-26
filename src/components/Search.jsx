import React from 'react';
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        // Переход по ссылке, формируемой по введеному в input параметру по событию submit
        navigate("/searched/" + input );
        setInput('');
    }
    return (
        <FormStyled onSubmit={ e => submitHandler(e)}>
                <FaSearch/>
                <input
                    type='text'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
        </FormStyled>
    );
};

const FormStyled = styled.form`
 
  position: relative;

  input{
    border: none;
    border-radius: 2rem;
    background:  linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    width: 100%;
    margin-bottom: 2rem;
  }
  svg{
    position: absolute;
   
    left: 0;
   
    transform: translate(135%, 135%) scale(1.5);
    color: white;
  }
`;

export default Search;