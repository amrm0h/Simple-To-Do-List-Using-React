import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todos from "./Todos";
import Action from "./Action";
import AddTodo from "./AddTodo";
import OptionModal from "./TodoModal";



class MyToDoApp extends React.Component {

    state = {
        todos: ["Go shopping", "Read book"],
        selectedToDo: undefined
    };

    handleDeleteAllTodos = () => {
        this.setState(() => ({ todos: [] }));

    };

    handlePick = () => {
        let ranNum = Math.floor(Math.random() * this.state.todos.length);
        const todo = (this.state.todos)[ranNum];

        this.setState(() => ({
            selectedToDo: todo
        }));
    };


    handleDeleteSingleTodo = (removedToDo) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => removedToDo != todo)
        }));
    };


    handleAddTodo = (addedTodo) => {
        if (!addedTodo) {
            return "Please Enter Valid ToDo to Add !!";
        } else if (this.state.todos.indexOf(addedTodo) > -1) {
            return "This ToDo Already Exist !!";
        } else if (undefined) {
            return undefined;
        }

        this.setState((prevState) => ({
            todos: prevState.todos.concat(addedTodo)
        }));
    };

    handleCloseModal = () => {
        this.setState(() => ({
            selectedToDo: undefined
        }));
    };
    render() {
        return (
        <div>
            
            <Header />

            <div className="app_container">
                <Action 
                    hasTodos={this.state.todos.length > 0}
                    handlePick={this.handlePick}/>

                <Todos
                    todos={this.state.todos}
                    handleDeleteAllTodos={this.handleDeleteAllTodos}
                    handleDeleteSingleTodo={this.handleDeleteSingleTodo} />


                <AddTodo handleAddTodo={this.handleAddTodo} />


            </div>

            <OptionModal 
                hasSelectedToDo={this.state.selectedToDo} 
                handleCloseModal={this.handleCloseModal} />

            <Footer />
        </div>
        );
    }

};

export default MyToDoApp;