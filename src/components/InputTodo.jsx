import { useState } from "react";
import { FaPlusCircle } from 'react-icons/fa';
import { useTodosContext } from '@/context/TodosContext';
import { useTodosStore } from '@/store';
const InputTodo = () => {
  // const { addTodoItem } = useTodosContext();
  const addTodoItem = useTodosStore((state) => state.addTodoItem)

  const [title, setTitle] = useState('');
  const handleChange = (evt) => {
    setTitle(evt.target.value);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(title.trim()) {
      addTodoItem(title);
      setTitle('');
    }
    else {
      alert('Please add Item!')
    }
  }
  return (
    <form 
      className="form-container"
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        className="input-text"
        placeholder="add a Todo..."
        value={title}
        onChange={handleChange}
      />
      <button className="input-submit">
        <FaPlusCircle 
          style={{
            color: "#5e5e5e",
            fontSize:"20px",
            marginTop: '2px'
          }}
        />
      </button>
    </form>
  )
}

export default InputTodo;