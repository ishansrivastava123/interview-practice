// Question: https://www.reactprep.dev/react-challenges/todo-list-manager

// Solution

import React, { useState } from 'react';

const TodoList = () => {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const newTodo = { value: input, isChecked: false };
    
    setItems((todo) => [
      ...todo,
      newTodo
    ])
    setInput('');
  }

  const removeTodo = (delTodo) => {
    const filteredTodo = items.filter((item) => item.value !== delTodo.value);
    setItems(filteredTodo);
  }

  const manageTodo = (updtTodo) => {
    setItems((items) =>
      items.map((item) =>
        (item.value === updtTodo.value) ? {
          ...item,
          isChecked: !item.isChecked
        } : item
      )
    )
  }
  
  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="todo-input"
          value={input}
          onChange={((e) => setInput(e.target.value))}
        />
        
        <button
          data-testid="add-button"
          disabled={!input.length}
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      
      <div style={{ margin: '20px 0' }} data-testid="todo-count">
        {items.reduce((acc, item) => acc + (item.isChecked ? 0 : 1), 0)} items remaining
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items?.map((item) => (
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type='checkbox' data-testid="todo-checkbox-{id}" value={item.isChecked} onChange={() => manageTodo(item)} />
            
            <span>
              {item.value}
            </span>
            
            <button style={{ border: 'none', background: 'transparent' }} data-testid="todo-delete-{id}" onClick={() => removeTodo(item)}>
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
