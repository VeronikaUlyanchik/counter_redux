import React, {useEffect, useState} from 'react';
import './App.css';
import s from './counter1.module.css'
import {Counter} from "./Counter";
import {InstallValues} from "./InstallValues";
import {CounterPropsType} from "./RoutesList";


function Counter1(props: CounterPropsType) {
    const {
        state,
        setMinLocal,
        setMaxLocal,
        setMaxMin,
        incCount,
        resetCount
    } = props;

    let [inactiveCounter, setInactiveCounter] = useState(false);
    let [disable, setAble] = useState(true);


    const activateCounter = (value: boolean) => {
        setInactiveCounter(value)
    }
    const error = ((state.maxValue < 0 || state.startValue < 0) || state.maxValue === state.startValue || state.maxValue < state.startValue) && true;

    return (
        <div className={s.counter1}>
            <InstallValues error={error} activateCounter={activateCounter} setMinLocal={setMinLocal}
                           setMaxLocal={setMaxLocal} min={state.startValue} max={state.maxValue} setMaxMin={setMaxMin}
                           disable={disable}
                           setAble={setAble}/>
            <Counter error={error} count={state.count} disabled={inactiveCounter} maxValue={state.maxValue}
                     incCount={incCount}
                     resetCount={resetCount} startValue={state.startValue}/>
        </div>
    );
}

export default Counter1;
