import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from "framer-motion";

const Pages = () => {
    //AnimatePresence
    const location = useLocation();
    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key = {location.pathname}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/cuisine/:type'} element={<Cuisine/>}/>
                    <Route path={'/searched/:searched'} element={<Searched/>}/>
                    <Route path={'/recipes/:name'} element={<Recipe/>} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default Pages;