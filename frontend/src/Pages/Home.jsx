import React from 'react'
import useTodoData from '../hooks/FetchPost';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [todos] = useTodoData();
  const navigate = useNavigate();

  return (
    <div>
        {todos.map((todo) => (
          <div key={todo._id}>
            <h4>Title: {todo.title}</h4>
            <button onClick={() => navigate(`/${todo._id}`)}> view details</button>
          </div>
        ))}
    </div>
  )
}
