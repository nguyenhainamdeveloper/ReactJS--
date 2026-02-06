import './todo.css'
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';
import TodoNew from './TodoNew';
import TodoData from './TodoData';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning Reat" }, { id: 2, name: 'Wathching Youtube' }
    ])


    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }

        setTodoList([...todoList, newTodo])
    }

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteTodo = (id) => {
        const newTodoList = todoList.filter(item => item.id !== id);
        setTodoList(newTodoList);
    };

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>

            <TodoNew
                // không phải thực thi
                addNewTodo={addNewTodo} //không có dấu đóng mở ngoặc là truyền 1 function sang bên kia
            />

            {todoList.length > 0 ? (
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
            ) : (
                <div className="todo-image">
                    <img src={reactLogo} className="logo" />
                </div>
            )}

        </div>
    )
}

export default TodoApp;