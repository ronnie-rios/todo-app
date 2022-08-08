import { useState } from 'react';

export default function Form() {
    const [form, setForm] = useState(null);

    function formHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    function submitForm(e) {
        e.preventDefault();
        let todoData = {
            title: form.title,
            body: form.body
        }
        fetch('http://localhost:9004/todo' ,{
            method: 'POST',
            body: JSON.stringify(todoData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        setForm('')
    }

  return (
    <div>
        <h3>create post</h3>
        <form onChange={formHandler} onSubmit={submitForm}>     
            <input 
                type='text'
                placeholder='enter the title'
                value='title'
            />
            <input 
                type='text'
                placeholder='enter the body'
                value='body'
            />
            <button type='submit'>submit!</button>
        </form>
    </div>
  )
}
