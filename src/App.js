import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import {AppRoutes} from "./routes/AppRoutes";
import {AppHeader} from "./components/AppHeader";

export default () => {
    //componentWillMount
    useEffect(() => {
        //Codigo
        console.log('componente montado')
        return () => {
            //componentWillUnmount
            console.log('componente desmontado')
        }
    }, []);
    //ComponentWillUpdate

    return (
        <BrowserRouter>
            <AppHeader/>
            <AppRoutes/>
        </BrowserRouter>
    );
}
