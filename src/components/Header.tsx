import styles from './Header.module.css';
import Logo from '../assets/Logo.svg';

import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react';
interface Props {
    addTodo: (title: string) => void;


}

export function Header({ addTodo }: Props) {
    const [title, setTitle] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        //not allow to add empty title
        if (title.trim().length > 0) {
            addTodo(title);
        } else {
            alert("Por favor, digite um título")
        }
        setTitle("");
    }


    return (
        <header className={styles.header}>
            <img src={Logo} />

            <form className={styles.form} onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
                <button type="submit">criar
                    <PlusCircle size={20} />
                </button>

            </form>
        </header>
    )
}
