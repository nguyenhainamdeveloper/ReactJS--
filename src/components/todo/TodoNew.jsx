import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("kaizin");
    const { addNewTodo } = props;

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const hanldeOnChange = (name) => {

        setValueInput(name)
    }

    // addNewTodo("nguyen nam");
    return (
        <div className="todo-new">
            <input type="text"
                // Khi nào sự kiện onChange xảy ra nó mới thực thi func handleOnChange
                onChange={(event) => hanldeOnChange(event.target.value)}
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;