import logo from './logo.svg';
import './App.css';
import fotos from './data.json'
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <img src="/food-photographer-jennifer-pallian-Z5tfVSjDeIk-unsplash.jpg" alt="" style={{ width: "200px" }} />
      {/* hier in dem img tag beziehen wir uns auf den public Ordner  */}
      <div className="background"></div>
      {fotos.map(foto => <div key={foto.id} style={{ height: "50vh", background: `url(${foto.img})` }}>
        {/* Auch hier beziehen wir uns auf den public Ordner! ACHTET DARAUF, DASS DIE DATEIEN KEINE LEERTASTEN HABEN*/}
      </div>)}
      {fotos.map(foto => <img key={foto.id} src={foto.img} style={{ width: "200px" }} />)}
      <Card />
    </div>
  );
}

export default App;
