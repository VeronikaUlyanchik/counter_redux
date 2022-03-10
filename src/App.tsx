import React from 'react';
import './App.css';
import {PATH, RoutesList} from "./RoutesList";
import {HashRouter, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./components/redux/store";
import {IncValueAC, initialStateType, resetValueAC, setMaxValueAC, setMinValueAC} from "./components/redux/reducers";

function App() {
    const dispatch = useDispatch();
    const state = useSelector<RootReducerType, initialStateType>((store)=> store.counter);

    const setMinLocal = (min: number) => {
        dispatch(setMinValueAC(min))
    };
    const setMaxLocal = ( max: number) => {
        dispatch(setMaxValueAC(max))
    };

    const setMinMax = (min: number, max: number) => {
        dispatch(setMinValueAC(min))
        dispatch(setMaxValueAC(max))
    };
    const incCount = () => {
        dispatch(IncValueAC())
    };

    const resetCount = () => {
        dispatch(resetValueAC())
    };

    return (
        <div className="App">
            <HashRouter>
                <div>
                    <NavLink to={PATH.counter1} className={({isActive})=> isActive ? 'linksActive' : 'links'}> First Counter </NavLink>
                    <NavLink to={PATH.counter2} className={({isActive})=> isActive ? 'linksActive' : 'links'}> Second Counter </NavLink>
                </div>
                <RoutesList state={state} incCount={incCount} resetCount={resetCount} setMaxLocal={setMaxLocal} setMinLocal={setMinLocal} setMaxMin={setMinMax}/>
            </HashRouter>
        </div>
    );
}

export default App;
