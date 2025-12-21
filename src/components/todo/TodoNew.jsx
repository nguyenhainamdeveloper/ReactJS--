const TodoNew = (props) => {
    console.log(props)

    const { addNewTodo } = props;
    const handleClick = () => {
        alert("Click me!")
    }

    const hanldeOnChange = (event) => {
        console.log(">>> handleOnChange", event.target.value)
    }

    // addNewTodo("nguyen nam");
    return (
        <div className="todo-new">
            <input type="text"
                onChange={hanldeOnChange} />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    );
}

export default TodoNew;