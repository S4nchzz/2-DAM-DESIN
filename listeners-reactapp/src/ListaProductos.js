import { useState } from "react";

const productos = [
    {Producto: 'manzana'},
    {Producto: 'coche'},
    {Producto: 'sierra de calar'},
    {Producto: 'raton'},
    {Producto: 'pomada'},
];

function EncontrarProducto() {
    const [foundInfo, setFoundInfo] = useState("")

    const findItem = (e) => {
        e.preventDefault();
        let found = false;

        productos.forEach(element => {
            if (element.Producto === e.target[0].value) {
                setFoundInfo("Producto " + element.Producto + " existe")
                found = true;
                return;
            }
        })

        if (!found) {
            setFoundInfo("Producto " + e.target[0].value + " no existe")
        }

    }

    return (
        <div className="products">
            <form onSubmit={e => findItem(e)}>
                Producto:
                <input id="product" type="text"></input>
                <button className="sendProduct" type="submit">Enviar producto</button>
            </form>
            <h5>{foundInfo}</h5>
        </div>
    )
}

export default EncontrarProducto;