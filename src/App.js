
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Button  from '@material-ui/core/Button';

function App() {
  const darBienvenida =()=> alert ("Bienvenido a nuestra tienda");

  return (
    <>
      <div className="App">
        <NavBar
          nombreDeLaTienda="Brocoli3d"
          darBienvenida= {darBienvenida} 
        />
        <h1>HOLA BROCOLI</h1>
      </div>
    </>  
  );
}

export default App;
