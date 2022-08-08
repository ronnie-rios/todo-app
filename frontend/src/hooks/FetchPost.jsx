import { useEffect, useState } from 'react';

function useTodoData() {;
    const [todos, setTodos] = useState([]);
  //  const [singleTodo, setSingleTodo] = useState([]);
    async function fetchTodos() {
        try {
            const response = await fetch('http://localhost:9004/todo/');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    }
    // async function fetchSingleTodo(id) {
    //     try {
    //         const response = await fetch(`http://localhost:9004/todo/${id}`)
    //         const data = await response.json();
    //         setSingleTodo(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        fetchTodos();
    }, []);

    return [todos]
};

export default useTodoData;