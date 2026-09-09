import { UseState } from "react";
import './App.css'

//Definimos el componente principal de la app
function App() {
    //Usamos usestate porque ya no necesitamos un contador global, sino que cada componente puede tener su propio estado
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  )
}

//exportamos el componente para poder usarlo en otros archivos como main.jsx
export default App