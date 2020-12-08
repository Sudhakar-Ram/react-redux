import React from 'react';
import { connect } from "react-redux";

function Display(props){
    return(
        <div>
            <h3>Increased/Decreased Count : {props.count}</h3>
        </div>
    );
}
const mapStateToProps = (state) => ({
    count: state.count
});
export default connect(mapStateToProps, null)(Display);