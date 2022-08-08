import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import useTodoData from '../hooks/FetchPost'

export default function SinglePost() {
  
  const [singleTodo, setSingleTodo] = useState([]);
  const [loading, setLoading] = useState(true)
  const id = useParams().id;
  console.log(id);
  
  async function getData(id) {
    try {
        const response = await fetch(`http://localhost:9004/todo/${id}`)
        const data = await response.json();
        setSingleTodo(data)
        console.log(singleTodo);
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <div>loading . . . </div>
    )
  } else {

  return (
    <div>
      <h3>post details</h3>
      {/* <h4>{singleTodo.title}</h4>
      <p>{singleTodo.body}</p> */}
    </div>
  )
  }
}
