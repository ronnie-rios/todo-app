import React from 'react'
import useTodoData from '../hooks/FetchPost';
import CreatePost from './CreatePost';

export default function Home() {
  const [todos] = useTodoData();

  return (
    <div>
        {todos.map((todo) => (
          <div>
            <h4>Title: {todo.title}</h4>
            <p>Body: {todo.body}</p>
          </div>
        ))}
    </div>
  )
}
