import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo , removeAllTodo} from '../../store/todos';
import { removeBasket } from '../../store/basket';
import { removeOkTodos } from '../../store/okTodos';

export default function ToDoInput() {
    const todoText = useRef(null)
    const dispatch = useDispatch();

    useEffect(() => {
      if (todoText.current){
        todoText.current=''
      }
    
    }, [])
    

    const handleChange = e =>{
        todoText.current = e.target.value;

    }

    const handleAddTodo = ()=>{
        if (todoText.current.trim() === '') {
            alert('Поле не может быт пустым')
            return;
        }
            dispatch(addTodo({text: todoText.current}))
            todoText.current= ''
            document.getElementById('todoInput').value = ''
            document.getElementById('todoInput').focus();
    
    }

    const handleKeyDown = e =>{
        if (e.key === 'Enter'){
            handleAddTodo()
        }
    }

    const handleRemoveAll = ()=>{
        dispatch(removeAllTodo())
        dispatch(removeBasket())
        dispatch(removeOkTodos())

    }
  return ( 
    <div>
        <input id="todoInput" autoFocus ref={todoText} type="text" onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Новая задача'required/>
        <button onClick={handleAddTodo}>Создать</button>
        <button onClick={handleRemoveAll}>Очистить все</button>
    </div>
  )
}
