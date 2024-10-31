import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../store/auth'
import { useSelector } from 'react-redux'

export default function LoginForm() {
    const auth = useSelector((state)=>state.auth.auth)

    const dispatch = useDispatch()
    
    const loginRef = useRef(null)
    const passwordRef = useRef(null)
    
    console.log(auth);

    // useEffect(() => {
    //     if (auth) {
    //         // Очищаем поля, если авторизация прошла успешно
    //         loginRef.current.value = '';
    //         passwordRef.current.value = '';
    //     }
    // }, [auth]);

    const loginChange = e =>{
        loginRef.current = e.target.value
    }

    const passwordChange = e =>{
        passwordRef.current= e. target.value
    }
    

    const handleLogin = () => {
        const loginValue = loginRef.current;
        const passwordValue = passwordRef.current
        console.log(loginValue, passwordValue);
        dispatch(login({ name: loginValue, password: passwordValue }));
        if (auth===true){
            loginRef.current=''
            passwordRef.current=''
            document.getElementById('login').value = ''
            document.getElementById('password').value = ''
        }
        else return
    };

    const handleLogout = ()=>{
        dispatch(logout())
    }

  return (
    <div className='LoginForm'>
        {auth ? (<button onClick={handleLogout}> Выход</button>)
        :(<>        
        <input id='login' ref={loginRef}  type="text" placeholder='admin' onChange={loginChange}/>
        <input id='password' ref={passwordRef}  type="password" placeholder='admin' onChange={passwordChange}/>
        <button onClick={handleLogin}>Вход</button>
        </>)}   
    </div>
  )
}
