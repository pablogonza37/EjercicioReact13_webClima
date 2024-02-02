import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import InfoClima from "./components/InfoClima";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage">
        <Formulario></Formulario>
        
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
