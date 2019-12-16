import React from "react";



const Action = (props) => (
    <div>
        <button 
            className="button big__button" 
            disabled={!props.hasTodos} 
            onClick={props.handlePick}
        >What To Do !!</button>
    </div>
);




export default Action;