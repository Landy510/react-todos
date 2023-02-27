import { 
  createContext, 
  useContext, 
  useState, 
  useEffect 
} from "react";
import {v4 as uuidv4} from 'uuid';


const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(getInitialTodos());

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    }

    setTodos((preState) => [...preState, newTodo])
  }

  const delTodo = (id) => {
    setTodos((prevState) => prevState.filter(todo => todo.id !== id))
  }

  const setUpdate = (updateTitle, id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      })
    )
  }

  function getInitialTodos () {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos])

  const handleChange = (id) => {
    setTodos((prevProp) => 
      prevProp.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  return (
    <TodosContext.Provider 
      value={{
        todos,
        handleChange,
        delTodo,
        addTodoItem,
        setUpdate
      }}
    >
      { children }
    </TodosContext.Provider>
  )
}

// export { TodosContext };
export const useTodosContext = () => useContext(TodosContext);