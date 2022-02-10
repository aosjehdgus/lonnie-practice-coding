import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export function TodoList ({todos, toggleTodo} : TodoListProps){
    return(
        <ul>
            {todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            })}
        </ul>
    )
}

// export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
//     return(
//         <ul>
//             {todos.map(todo => {
//                 return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
//             })}
//         </ul>
//     )
// }