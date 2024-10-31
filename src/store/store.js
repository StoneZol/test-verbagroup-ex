import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todos'
import basketReducer from './basket'
import okTodosReducer from './okTodos'
import authSlaveReducer from './auth'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const todosPersistConfig = {
    key: 'todos',
    storage,
};

const basketPersistConfig = {
    key: 'basket',
    storage,
};

const okTodosPersistsConfig = {
    key: 'okTodos',
    storage,
}

const authPersistConfig = {
    key: 'auth',
    storage,
}

const persistedTodos = persistReducer(todosPersistConfig, todosReducer);
const persistedBasket = persistReducer(basketPersistConfig, basketReducer);
const persistedOkTodo = persistReducer(okTodosPersistsConfig, okTodosReducer);
const persistedAuth = persistReducer(authPersistConfig, authSlaveReducer )


export const store = configureStore({
    reducer: {
        todos: persistedTodos,
        basket: persistedBasket,
        okTodos: persistedOkTodo,
        auth: persistedAuth,
    }
})

export default store;

export const persistor = persistStore(store)