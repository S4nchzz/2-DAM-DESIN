let show = true;

function Visibilidad() {
    return (
        <div className="visibility">
            <p id="dissapear">Hola</p>
            <button type="button" onClick={(e) => hide(document.getElementById("dissapear"))}>PULSAME</button>
        </div>
    );
}

function hide(e) {
    if (show) {
        e.style.visibility = "hidden"
        show = !show
    } else {
        e.style.visibility = "visible"
        show =! show
    }
}

export default Visibilidad;