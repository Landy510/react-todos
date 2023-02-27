import InputTodo from '@/components/InputTodo';
import TodoList from '@/components/TodoList';
import { TodosProvider } from '@/context/TodosContext';
const TodosLogic = () => {

  return (
    <div>
      <InputTodo></InputTodo>
      <TodoList></TodoList>
    </div>
  )
}

export default TodosLogic;