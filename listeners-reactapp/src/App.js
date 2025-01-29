import './App.css';
import IncrementButtons from './IncrementBtns';
import GenerateFormulario from './Formulario';
import Visibilidad from './Visibilidad';
import Tareas from './ListaTareas';
import EncontrarProducto from './ListaProductos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IncrementButtons/>
        <GenerateFormulario/>
        <Visibilidad/>
        <Tareas/>
        <EncontrarProducto producto="manzana"/>
      </header>
    </div>
  );
}

export default App;
