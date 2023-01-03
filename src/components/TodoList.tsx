import React from 'react'
import './TodoList.css'

interface TodoListProps {
    items: { id: string, text: string }[],
    deleteToDoHandler: (todoId: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {

    return (

        <ul>
            {props.items.map(todo => {
                return (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => props.deleteToDoHandler(todo.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>

    )
}

export default TodoList