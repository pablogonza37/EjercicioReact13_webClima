import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage"></Container>
      <Footer></Footer>
    </>
  );
}

export default App;
