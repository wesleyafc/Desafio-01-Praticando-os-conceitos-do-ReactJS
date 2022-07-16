import { ITodo } from '../App';
import styles from './Todo.module.css';
import { Todos } from './Todos';
import { BookOpen } from 'phosphor-react'
import emptyBook from '../assets/Clipboard.svg'

interface Props {
  todo: ITodo[]
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void

}

export function Todo({ todo, deleteTodo, toggleTodo }: Props) {
  const totalTodos = todo.length;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <p className={styles.blueText}>Tarefas criadas</p>
          <span>{totalTodos}</span>
        </div>

        <div >
          <p className={styles.purpleText}>Concluídas</p>
          <span>
            {todo.filter(todo => todo.completed).length} de {totalTodos}
          </span>
        </div>
      </header>

      <div className={styles.tasks}>
        {todo.map((todo) => (
          <Todos
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
          />
        ))}

        {todo.length <= 0 && (
          <div className={styles.emptyBook}>
            <img src={emptyBook} alt="" />
            <p> Você ainda não tem tarefas cadastradas
              Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

      </div>

    </main>
  )
}
