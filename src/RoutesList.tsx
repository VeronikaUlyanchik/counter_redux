import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import {initialStateType} from "./components/redux/reducers";

export const PATH = {
    counter1: "/counter1",
    counter2: "/counter2"
}

export type CounterPropsType = {
    state: initialStateType
    setMinLocal: (num:number) => void
    setMaxLocal: (num:number) => void
    setMaxMin: (min:number, max:number)=> void
    incCount : () => void
    resetCount : () => void
}

export const RoutesList = (props: CounterPropsType) =>{
    return (
        <div>
          <Routes>
              <Route path={'/'} element={<Navigate  to={PATH.counter1}/>} />
              <Route path={PATH.counter1} element={ <Counter1 {...props}/>}/>
              <Route path={PATH.counter2} element={ <Counter2 {...props} />}/>
          </Routes>
        </div>
    )

}