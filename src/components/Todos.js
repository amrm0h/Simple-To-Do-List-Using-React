import React from "react";
import Todo from "./Todo";


const Todos = (props) => (
    <div className="todos__cont">
        <header>
            <p>Your Todos</p>
            <button className="button" 
                onClick={props.handleDeleteAllTodos} 
                disabled={props.todos.length == 0}
                >Remove All</button>
        </header>
        {props.todos.length == 0 && <p className="empty_list">Nothing To do, Add Some!!</p>}
        {
            props.todos.map((todo, index) => (
            <Todo 
                key={todo} 
                optiontext={todo} 
                optionIndex={index + 1}
                handleDeleteSingleTodo={props.handleDeleteSingleTodo} />
            ))
        }
    </div>
);




export default Todos;