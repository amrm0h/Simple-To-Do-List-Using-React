import React from "react";

class AddTodo extends React.Component {
    state = {
        error: undefined
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = e.target.elements.todo.value.trim();
        const error = this.props.handleAddTodo(newTodo);

        e.target.elements.todo.value = "";

        this.setState(() => ({error}));
    };

    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <input autoFocus type="text" name="todo" placeholder="Write Some Todos..." />
                    <button className="button">ADD</button>
                </form>
                {this.state.error && <p className="err_msg">{this.state.error}</p>}
            </div>
        );
    }
};

export default AddTodo;