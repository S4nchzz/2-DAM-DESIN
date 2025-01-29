import { useState } from "react";

function Tareas() {
    const [showCheckbox, setCheckboxInfo] = useState("")
    const showCheckBoxSelected = (e) => {
        setCheckboxInfo(e.target.id)
    }

    return (
        <div className="to-do">
            <input id="A" className="todoInput" type="checkbox" value={"AAA"} onChange={showCheckBoxSelected}/> A
            <input id="B" className="todoInput" type="checkbox" value={"BBB"} onChange={showCheckBoxSelected}/> B
            <input id="C" className="todoInput" type="checkbox" value={"CCC"} onChange={showCheckBoxSelected}/> C
            <h5>Checkbox: {showCheckbox}</h5>
        </div>
    );
}


export default Tareas;