import React from 'react';
import {COUNTER_INCREAMENT, COUNTER_DECREAMENT} from '../redux/store';
import { connect } from "react-redux";


function Test(props){
    return(
        <div>
            <h1>WELCOME TO OUR SITE</h1>
            <h3>Current Count: {props.count}</h3>
            <button onClick={props.increase}>Increase Count</button>
            <button onClick={props.decrease}>Decrease Count</button>
        </div>
    );
}
const mapStateToProps = (state) => ({
    count: state.count,
});
const mapDispatchToProps = (dispatch) => {
    return{
        increase: () => {
            dispatch({type: COUNTER_INCREAMENT})
        },
        decrease: () => {
            dispatch({type: COUNTER_DECREAMENT})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);