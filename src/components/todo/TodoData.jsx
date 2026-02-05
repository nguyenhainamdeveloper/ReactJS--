const TodoData = (props) => {

    const { todoList, deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className="todo-data">
            {todoList.map((item) => {
                return (
                    <div className="todo-item" key={item.id}>
                        {item.name}
                        <button
                            style={{ marginLeft: "10px", cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoData;
