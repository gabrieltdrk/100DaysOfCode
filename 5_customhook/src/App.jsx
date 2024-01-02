import { useState } from 'react'
import './App.css'
import UserInfo from './components/UserInfo'
import Fibonacci from './components/Fibonacci'
import Online from './components/Online'

function App() {
  // EXERCICIO 1
  const userInfo = {name: "Gabriel", job: "Desenvolvedor"}
  // EXERCICIO 3

  return (
    <>
      {/* EXERCICIO 1 */}
      <UserInfo userInfo={userInfo} />
      {/* EXERCICIO 2 */}
      <Fibonacci n={9} />
      {/* EXERCICIO 3 */}
      <Online />
    </>
  )
}

export default App
