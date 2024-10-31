import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../store/todos';
import { addToBasket } from '../../store/basket';
import { addToOkTodos } from '../../store/okTodos';

//Активные задачи
export const ToDosList  = React.memo(function ToDosList({todos}) {
    return (
        <div className='ToDosList'> <span>Текущие задачи ({todos.length})</span>
            {
                todos.length > 0
                    ? (<ToDosNotEmpty todos={todos} />)
                    : (<Empty/>)
            }</div>
    )
})
//Корзина
export const ToDosBasket = React.memo(function ToDosBasket({basket}) {
    return (
        <div className='ToDosList'> <span>Корзина({basket.length})</span>
            {
                basket.length > 0
                    ? (<BasketNotEmpty basket={basket} />)
                    : (<Empty/>)
            }
        </div>
    )
})
//Выполненные
export const ToDosOk = React.memo(function ToDosOk({okTodos}) {
    return (
        <div className='ToDosList'>
            <span>Выполенные ({okTodos.length})</span>
            {
                okTodos.length > 0
                    ? (<OkTodosNotEmpty okTodos={okTodos}/>)
                    : (<Empty/>)
            }</div>
    )
})

//Все задачи
export function AllTodos({okTodos, basket, todos}) {
    return (
        <div className='ToDosList'>
            <span>Всего ({okTodos.length + basket.length + todos.length})</span>
            {todos.length > 0 && <ToDosNotEmpty todos={todos}/>}
            {okTodos.length > 0 && <OkTodosNotEmpty okTodos={okTodos}/>}
            {basket.length > 0 && <BasketNotEmpty basket={basket}/>}
        </div>
    )
}

//Части Выполненных
export function OkTodosItem ({todo}){
    return(
        <div className='OkTodosItem'>
            <span>&#10004;{todo.text}</span>
        </div>
    )
}

export const OkTodosNotEmpty = React.memo(function OkTodosNotEmpty({okTodos}){
    return (
        <div>
            {okTodos.map((todo, index) => (<OkTodosItem todo={todo} key={index}/>))}
        </div>
    )
})

// Части удаленных
export function BasketItem ({todo}){
    return (
        <div className='BasketItem'> 
            <span>&times; {todo.text}</span>
        </div>
    )
}

export const BasketNotEmpty = React.memo(function BasketNotEmpty({basket}) {
    return (
        <div>
            {basket.map((todo, index) => (<BasketItem todo={todo} key={index}/>))}
        </div>
    )
})

// Части активных
export function ToDoItem({todo}) {
    const dispatch = useDispatch();

    function handleDeleteTodo() {
        dispatch(addToBasket(todo))
        dispatch(removeTodo(todo))
    }

    function handleMadeOkTodo(){
        dispatch(addToOkTodos(todo))
        dispatch(removeTodo(todo))

    }


    return (
        <div className='ToDoItem'>
            <span>{todo.text}</span>
            <button onClick={handleMadeOkTodo}>&#10004;</button>
            <button onClick={handleDeleteTodo}>Удалить</button>
        </div>
    )
}

export const ToDosNotEmpty = React.memo(function ToDosNotEmpty({todos}) {
    return (
        <div>
            {todos.map((todo, index) => (<ToDoItem todo={todo} key={index}/>))}
        </div>
    )
})

//Заглушка
export function Empty(){
    return(
        <div>Нет задач</div>
    )
}
