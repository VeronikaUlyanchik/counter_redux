 export type initialStateType = {
    count: number
    maxValue: number
    startValue: number
    disable: boolean
}
// typeof initialState
const initialState:initialStateType = {
    count: 0,
    maxValue: 1,
    startValue: 0,
    disable: true
};

type ActionsType= IncValueACType | resetValueACType | setMaxValueACType | setMinValueACType

export const counterReducer = (state=initialState, action: ActionsType) => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, count: ++state.count}
        case 'RESET-VALUE':
            return {...state, count: state.startValue}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET-MIN-VALUE':
            return {...state, startValue: action.minValue, count: action.minValue}
        default:
            return state
    }
};

export const IncValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const setMaxValueAC = (maxValue:number) => ({type: 'SET-MAX-VALUE', maxValue } as const)
export const setMinValueAC = (minValue:number) => ({type: 'SET-MIN-VALUE', minValue } as const)

export type IncValueACType = ReturnType<typeof IncValueAC>
export type resetValueACType = ReturnType<typeof resetValueAC>
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export type setMinValueACType = ReturnType<typeof setMinValueAC>



