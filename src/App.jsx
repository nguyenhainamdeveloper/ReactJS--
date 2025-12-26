import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
function App() {
  const [todoList, setTodoList] = useState([{ id: 1, name: "Learning Reat" }, { id: 2, name: 'Wathching Youtube' }])
  const nguyenhainam = "Kaizin";
  const age = "22";
  const address = {
    city: "Ha Noi",
    country: "Viet Nam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }


  // addNewTodo();

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>

      <TodoNew
        // không phải thực thi
        addNewTodo={addNewTodo} //không có dấu đóng mở ngoặc là truyền 1 function sang bên kia
      />
      <TodoData
        name={nguyenhainam}
        age={age}
        address={address}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  );
}

export default App;
