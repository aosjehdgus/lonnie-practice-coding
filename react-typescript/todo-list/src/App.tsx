import { useState } from 'react';
import { createGlobalStyle} from 'styled-components';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

const initialTodos: Array<Todo> = [
  {text: "Walk the dog", complete: false},
  {text: "Write app", complete: false}
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo =>{
      if (todo === selectedTodo){
        return{
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}])
  }

  return (
  <>
   <GlobalStyle />
   <TodoList todos={todos} toggleTodo={toggleTodo} />
   <AddTodoForm addTodo={addTodo}/>
  </>
  )
}

export default App;
