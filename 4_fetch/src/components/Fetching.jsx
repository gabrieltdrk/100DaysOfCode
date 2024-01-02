import { useState, useEffect } from 'react'

export default function Fetching( { id } ) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const buscarUsuario = async () => {
          const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          const dadosUsuario = await resposta.json();
          setUsuario(dadosUsuario)
        }
        if(id) {
          buscarUsuario();
        }
    }, [id])

  return (
    <div>
      {usuario ? ( 
      <div>
        <h2> Name: {usuario.name}</h2>
        <p> E-mail: {usuario.email}</p>
      </div>

      ) : 
      <p>"Não há usuários"</p>}
      
    </div>
  )
}
