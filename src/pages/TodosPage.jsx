import React, { useState } from 'react'
import ToDoInput from '../modules/ToDoInput/ToDoInput'
import {AllTodos, ToDosBasket, ToDosList, ToDosOk} from '../modules/ToDosList/ToDosList'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import {logout} from '../store/auth';
import {useDispatch} from 'react-redux';

export default function TodosPage() {
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todos.todos)
    const basket = useSelector((state) => state.basket.basket)
    const okTodos = useSelector((state) => state.okTodos.okTodos)
    const auth = useSelector((state) => state.auth.auth)

    const [currentList, setCurrentList] = useState('current');

    const handleListChange = (list) => {
        setCurrentList(list);
    };

    return (
        <div className='ToDosPage'>
            <button
                onClick={() => {
                    dispatch(logout())
                }}>Выход</button>
            <ToDoInput/>
            <div className='ColumnTodos'>
                <button onClick={() => handleListChange('current')}>
                    Текущие ({todos.length})
                </button>
                <button onClick={() => handleListChange('completed')}>
                    Выполненные ({okTodos.length})
                </button>
                <button onClick={() => handleListChange('basket')}>
                    Корзина ({basket.length})
                </button>
                <button onClick={() => handleListChange('all')}>
                    Всего ({todos.length + okTodos.length + basket.length})
                </button>
            </div>
            {currentList === 'current' && <ToDosList todos={todos} />}
            {currentList === 'completed' && <ToDosOk okTodos={okTodos} />}
            {currentList === 'basket' && <ToDosBasket basket={basket} />}
            {currentList === 'all' && <AllTodos todos={todos} basket={basket} okTodos={okTodos} />}
        </div>
    )
}
