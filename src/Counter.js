import React, { useState } from 'react';

function Counter() {
  const [count, setKount] = useState(0);
// Mise K au lieu de C pour vérifier si c'est 
//une fonction prédéfinie.

  return (
    <div>
      <p>Le compteur est  à : {count}</p>
      
      <label htmlFor='init-count'>Initial Value : </label>
      <input 
      id='init-count'
      type='number'
      // value={count}
      onChange={k=>setKount(Number(k.target.value))} />
      <button onClick={() => setKount(count + 1)}>
        +1
      </button>    
      <button onClick={() => setKount(count - 1)}>
        -1
      </button>  
    </div>
  );
}

export default Counter;
