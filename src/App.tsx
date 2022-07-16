import { useState } from 'react';
import { Header } from './components/Header'
import { Todo } from './components/Todo';
import { v4 as uuidv4 } from 'uuid';

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}


function App() {

  const [todos, setTodos] = useState<ITodo[]>([
    // { id: uuidv4(), title: 'Tarefa 1', completed: false },
    // { id: uuidv4(), title: 'Tarefa 2', completed: true },
    // { id: uuidv4(), title: 'Tarefa 3', completed: true },
    // { id: uuidv4(), title: 'Tarefa 4', completed: false },
  ])

  function addNewTodo(title: string) {

    const newTodo: ITodo = {
      id: uuidv4(),
      title,
      completed: false,
    }

    setTodos([...todos, newTodo])

  }

  function deleteTodo(id: string) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    console.log(newTodos);
  }

  function toggleTodo(id: string) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }
    ))
  }

  return (
    <>
      <Header
        addTodo={addNewTodo}
      />
      <Todo
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}

        todo={todos}
      />
    </>
  )
}

export default App;

