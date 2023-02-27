// import { useTodosContext } from '@/context/TodosContext.jsx';
import { useTodosStore } from '@/store';
import TodoItem from '@/components/TodoItem';

const TodoList = () => {
  // const { todos } = useTodosContext();
  const todos = useTodosStore((state) => state.todos);

  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            itemProp={todo}
          ></TodoItem>
        ))
      }
    </ul>
  )
}

export default TodoList;