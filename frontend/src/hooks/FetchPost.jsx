import { useEffect, useState } from 'react';

function useTodoData() {;
    const [todos, setTodos] = useState([]);

    async function fetchTodos() {
        try {
            const response = await fetch('http://localhost:9004/todo/');
            const data = await response.json();
            setTodos(data);
        } catch {
            console.log('err');
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return [todos]
};

export default useTodoData;