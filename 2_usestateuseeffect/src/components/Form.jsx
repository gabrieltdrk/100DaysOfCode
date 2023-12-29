// ESTADO COMO OBJETO
import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setForm({
        ...form,
        [e.target.name] : e.target.value,
    })
    console.log(form)
  }

  return (
    <form>
        <input
         type="text"
         placeholder="Digite o nome completo..."
         name="fullName"
         onChange={handleChange} />

         <input
         type="email"
         placeholder="Digite o email completo..."
         name="email"
         onChange={handleChange} />

         <input
         type="password"
         placeholder="Digite sua senha..."
         name="password"
         onChange={handleChange} />
    </form>
  )
}
