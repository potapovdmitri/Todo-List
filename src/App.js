import React, { useEffect, useState } from 'react';
import './styles/App.css'
import { AuthContext } from './context';
import Wrapper from './components/UI/wrapper/Wrapper';

function App () {
  const [isAuth, setIsAuth] = useState(false)

  useEffect (() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  },[])
  return (
    <AuthContext.Provider value={
      {
        isAuth,
        setIsAuth
      }
    }>
      <Wrapper/>
    </AuthContext.Provider>
  )
}

export default App;