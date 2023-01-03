import React, { useRef } from 'react';
import './NewTodo.css'

type NewToDoProps = {
    todoAddHandler: (todoText: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const text = textInputRef.current!.value;
        props.todoAddHandler(text)
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type="text" id='todo-text' ref={textInputRef} />
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    )
}

export default NewToDo