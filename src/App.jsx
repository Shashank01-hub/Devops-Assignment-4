import TodoInput from './components/TodoInput'
import TodoListSection from './components/TodoListSection'
import useTodos from './hooks/useTodos'
import './App.css'

function App() {
  const { todos, addTodo, deleteTodo, toggleTodoDone } = useTodos()

  const pendingTodos = todos.filter((todo) => !todo.done)
  const completedTodos = todos.filter((todo) => !todo.done)

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Productivity Desk</p>
        <h1>Todo List</h1>
        <p className="subtitle">Track your tasks, finish them, and review your completed work.</p>
      </header>

      <TodoInput onAddTodo={addTodo} />

      <section className="lists-grid" aria-label="Task sections">
        <TodoListSection
          title="All Tasks"
          tasks={pendingTodos}
          emptyMessage="No active tasks. Add one above."
          onDelete={deleteTodo}
          onToggleDone={toggleTodoDone}
        />

        <TodoListSection
          title="Completed Tasks"
          tasks={completedTodos}
          emptyMessage="Nothing completed yet."
          onDelete={deleteTodo}
          onToggleDone={toggleTodoDone}
          completed
        />
      </section>
    </main>
  )
}

export default App
