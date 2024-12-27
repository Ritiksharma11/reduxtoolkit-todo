import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from './redux/todoSlice'

const App = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos)

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleAddTodo = (e) => {
    if (text) {
      dispatch(addTodo(text));
      setText('');
    } else {
      alert('Please enter something');
    }
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <div className='bg-slate-950 w-full min-h-screen flex justify-center '>
      <div className='mt-10'>
        <div className='flex'>
          <input type="text" value={text} onChange={handleInputChange} className='border-none outline-none py-1 px-3 text-lg font-medium' />
          <button onClick={handleAddTodo} className='text-white bg-blue-600 py-1 px-3 font-semibold'>Add Todo</button>
        </div>
        <div className='text-white'>
          {
            todos.length ? (
              todos.map((todo) => (
                <li key={todo.id} className='text-white mt-5 flex items-center font-medium gap-5'>
                  {todo.text}
                  <button onClick={() => handleDeleteTodo(todo.id)} className='bg-red-600 text-white py-1 px-3'>Delete</button>
                </li>
              ))
            ) :
              (
                <h1 className='mt-5'>No Todos</h1>
              )
          }
        </div>
      </div>
    </div >
  )
}

export default App