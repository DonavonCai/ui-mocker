import { useCallback, useReducer, type FC } from "react";

type Reducer = (state: IState, action: any) => IState;

const reducer: Reducer = (state: IState, newCount: number) => {
    return {
        ...state,
        count: newCount,
    };
}

type Initializer = (state: IState) => IState;
const initializer: Initializer = (state: IState) => {
    return state;
}

interface IState {
    count: number;
}

export const VanillaCounter: FC = () => {

    const [state, dispatch] = useReducer<Reducer, IState>(reducer, {count: 0}, initializer);

    console.log(state)
    
    const onClick = useCallback(() => {
        dispatch(state.count + 1);
    }, [state.count])

    return (
        <>
            <p>{state.count}</p>
            <button onClick={onClick}>Click me!</button>
        </>
    );
}