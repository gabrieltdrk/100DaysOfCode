import React, { useReducer } from "react";

export default function Contador() {
  const estadoInicial = { contador: 0 };
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  function reducer(estado, acao) {
    switch (acao.tipo) {
      case "INCREMENTAR":
        return { contador: estado.contador + 1 };
      case "DECREMENTAR":
        return { contador: estado.contador - 1 };
      case "ZERAR":
        return { contador: 0 };
      default:
        throw new Error("Tipo de Ação Inválida!");
    }
  }

  return (
    <div>
      <p>Contagem: {estado.contador}</p>
      <button onClick={() => dispatch({ tipo: "INCREMENTAR" })}>Incrementar</button>
      <button onClick={() => dispatch({ tipo: "DECREMENTAR" })}>Decrementar</button>
      <button onClick={() => dispatch({ tipo: "ZERAR" })}>Zerar</button>
    </div>
  );
}
