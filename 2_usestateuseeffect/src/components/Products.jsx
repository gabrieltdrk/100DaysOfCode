"use client";

import React, { useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);

// 1- RENDERIZACAO TERNARIO COM NULL
//   return (
//     
//     <div>
//         {products.length > 0 ? "Há produtos no estoque!" : null}
//     </div>
//   )

// 2- RENDERIZACAO TERNARIO COM > 0

// return (
//     <div>
//         {!!products.length && "Há produtos no estoque!"}
//     </div>
// )

// 3- RENDERIZACAO COM && E !! (SEM !! FICA 0, COM !! FUNCIONA CORRETO)

return (
    
    <div>
        <h1>3- RENDERIZACAO TERNARIO COM NULL</h1>
        {products.length ? "Há produtos no estoque!" : "Não há produtos no estoque!"}
    </div>
)}
