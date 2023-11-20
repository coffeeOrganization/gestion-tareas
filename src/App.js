import './App.css';
import GestionTareas from './componentes/GestionTareas';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Administrador de tareas</h1>
      </header>
      <div className='body'>
        <GestionTareas />
      </div>
    </div>
  );
}

export default App;
