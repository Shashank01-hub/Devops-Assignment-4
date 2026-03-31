import { useEffect, useState } from 'react'

const TODOS_STORAGE_KEY = 'todo-app.tasks'

function useTodos() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY)

      if (!savedTodos) {
        return []
      }

      const parsedTodos = JSON.parse(savedTodos)

      return Array.isArray(parsedTodos) ? parsedTodos : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const normalizedText = text.trim()

    if (!normalizedText) {
      return
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: normalizedText,
      done: false,
      createdAt: Date.now(),
    }

    setTodos((currentTodos) => [newTodo, ...currentTodos])
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id === id))
  }

  const toggleTodoDone = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id !== id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodoDone,
  }
}

export default useTodos
