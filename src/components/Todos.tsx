import styles from './Todos.module.css';
import { Trash } from 'phosphor-react'
import { ITodo } from '../App';
import { CheckCircle } from 'phosphor-react'


interface Props {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;

}

export function Todos({ todo, deleteTodo, toggleTodo }: Props) {

  // const completed = true

  return (
    <div className={styles.container}>
      <button
        onClick={() => toggleTodo(todo.id)}
        className={styles.checkBox}>
        {todo.completed ? <CheckCircle size={28} /> : <div />}
      </button>

      <p
        className={todo.completed ? styles.lineThrough : ""}
      >
        {todo.title}
      </p>
      <button
        onClick={() => deleteTodo(todo.id)}
        className={styles.delete}>
        <Trash size={20} />
      </button>
    </div>
  )
}
