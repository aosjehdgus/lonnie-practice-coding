import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export function AddTodoForm ({addTodo} : AddTodoFormProps) {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return(
        <form>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}

/* NOTE: 왜 React.FC<P>를 회피해야 할까?
 매개 변수에 직접 props를 사용하면 구성 요소를보다 정확하게 입력하고 오탐을 방지하는 동시에 유연성을 높일 수 있다 
*/