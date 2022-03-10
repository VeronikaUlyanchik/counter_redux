import React, {useState} from 'react';
import './App.css';
import s from './counter2.module.css'
import {Counter} from "./Counter";
import {InstallValues} from "./InstallValues";
import {CounterPropsType} from "./RoutesList";


function Counter2(props: CounterPropsType) {
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
    let [displays, setIDisplays] = useState(false);

    const setMinMax = (min: number, max: number) => {
        setMaxMin(min, max)
        setIDisplays(true)
    };

    const activateCounter = (value: boolean) => {
        setInactiveCounter(value)
    }
    const error = ((state.maxValue < 0 || state.startValue < 0) || state.maxValue === state.startValue || state.maxValue < state.startValue) && true;

    const onClickSettings = () => {
        setIDisplays(false);
        setAble(false);
    };
    return (
        <div className={s.counter2}>
            <InstallValues error={error}  activateCounter= {activateCounter} setMinLocal={setMinLocal} setMaxLocal={setMaxLocal} min={state.startValue} max={state.maxValue} setMaxMin={setMinMax} display={displays} disable={disable} setAble={setAble}/>
            <Counter error={error} count={state.count} disabled={inactiveCounter} maxValue={state.maxValue} incCount={incCount} resetCount={resetCount} startValue={state.startValue} settings={true} display={displays} onClickSettings={onClickSettings}/>
        </div>
    );
}


export default Counter2;
