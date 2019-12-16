import React from "react";

const Todo = (props) => (
    <div className="s_todo">
        <span>{props.optionIndex}. <span className="text">{props.optiontext}</span></span>
        <div>
            <button className="button" onClick={() => 
                {
                    props.handleDeleteSingleTodo(props.optiontext)
                }
                }
                >Remove</button>
        </div>
    </div>
);


export default Todo;
