import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {COUNTER_RESET} from '../redux/store';

function Display(){
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch();
    return(
        <div>
            <h3>Increased/Decreased Count : {counter}</h3>
            <button onClick={() => dispatch({ type: COUNTER_RESET })}>Reset Count</button>
        </div>
    );
}
export default Display;
