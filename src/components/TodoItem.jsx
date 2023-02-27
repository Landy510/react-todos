import styles from '@/styles/TodoItem.module.css';
import { useRef, useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosContext } from '@/context/TodosContext';
import { useTodosStore } from '@/store';
import { useAuthContext } from '@/context/AuthContext';
const TodoItem = ({ itemProp }) => {
  const {user} = useAuthContext();

  const [editing, setEditing] = useState(false);
  // const { handleChange, delTodo, setUpdate } = useTodosContext();

  const handleChange = useTodosStore((state) => state.handleChange);
  const delTodo = useTodosStore((state) => state.delTodo);
  const setUpdate = useTodosStore((state) => state.setUpdate);

  let viewMode = {};
  let editMode = {};
  if(editing) {
    viewMode['display'] = 'none';
  } else {
    editMode['display'] = 'none';
  }

  const editInputRef = useRef(null);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through'
  }

  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdatedDone = (evt) => {
    if(evt.code === 'Enter') {
      // setUpdate(updateInput, itemProp.id);
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  }

  return (
    <li className={styles.item}>
      <div 
        className={styles.content}
        style={viewMode}
      >
        <input 
          type="checkbox" 
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {
          user && (
            <button onClick={handleEditing}>
              <AiFillEdit style={{'color': '#5e5e5e', 'fontSize': '16px'}}></AiFillEdit>
            </button>
          )
        }
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash></FaTrash>
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          { itemProp.title }
        </span>
      </div>
      <input 
        type="text" 
        ref={editInputRef}
        defaultValue={itemProp.title}
        // value={updateInput}
        className={styles.textInput}
        style={editMode}
        // onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={(e) => handleUpdatedDone(e)}
      />
    </li>
  )
}

export default TodoItem;