const TodoData = (props) => {
    console.log(">>>> Check props: ", props)
    const { name, age, address: { country, city } } = props;
    return (
        <div className="todo-data">
            <div>My name is: {name}</div>
            <div>Address: {country}, {city}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    );
}

export default TodoData;