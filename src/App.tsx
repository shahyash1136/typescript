import React, { useState } from 'react';
import NewToDo from './components/NewToDo';
import TodoList from './components/TodoList';
import { ToDo } from './todo.modal';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Date.now().toString(), text: text }])
  }

  const deleteToDoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(el => {
      return el.id !== todoId;
    }))
  }

  return (
    <div className="App">
      <NewToDo todoAddHandler={todoAddHandler} />
      <TodoList items={todos} deleteToDoHandler={deleteToDoHandler} />
    </div>
  );
}

export default App;
