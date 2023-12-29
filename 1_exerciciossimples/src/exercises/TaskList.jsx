
export default function TaskList( { tasks } ) {
    if (tasks.length === 0) {
        return (
        <>
            <h1>Exerc</h1>
            <p>Não há tarefas para</p>
        </>
        )        
    }

    return (
        <>
            <h1>Exercício 3</h1>
        <ul>
        {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
        ))}   
        </ul>
        </>
    )
}