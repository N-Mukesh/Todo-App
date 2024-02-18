import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditSubmit = () => {
    if (editValue.trim() !== '') {
      onEdit(editValue);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editValue} onChange={handleEditChange} />
          <button onClick={handleEditSubmit}>Save</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;

