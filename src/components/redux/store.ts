import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers";
import {loadState, saveState} from "../utilits/localstorage-ut";

export type RootReducerType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
        counter: counterReducer
})

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
        saveState({
                counter: store.getState().counter
        });
});

// export const useTypedSelectorHook:TypedUseSelectorHook<RootReducerType>= useSelector;

