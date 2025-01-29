import { useState } from "react";


function IncrementButtons() {
    const [contador, setContador] = useState(0);

    return (
        <div className="countButtons">
            <h1 id="count">Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => {
                contador > 0 ? (
                    setContador(contador - 1)
                ) : (
                    setContador(contador)
                )
            }}>Decrementar</button>
        </div>
    )
}

export default IncrementButtons;