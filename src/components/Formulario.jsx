import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Formulario = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [infoClima, setInfoClima] = useState("");
  const [error, setError] = useState("");

  const apiKey = "8cf3a9cda49e980bbdb2d1fe8ed452c7";

  const obtenerClima = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.cod === "404") {
          setError("No se encontraron datos de la ciudad ingresada.");
          setInfoClima("");
        } else {
          const weather = `Clima en ${data.name}: ${data.weather[0].description}. Temperatura: ${data.main.temp}°C`;
          setInfoClima(weather);
          setPais('');
          setCiudad('');
          setError(null);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el clima:", error);
        setError("Hubo un error al obtener el clima.");
        setInfoClima("");
      });
  };

  return (
    <>
      <Form className="text-white formulario p-4 rounded">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>País:</Form.Label>
              <Form.Control
                type="text"
                placeholder="País"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-lg-6 mb-3">
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Ciudad:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
        <Button variant="info" onClick={obtenerClima} type="submit">
          Consultar
        </Button>
      </Form>
      <div>
        {error && <div className="error-message">{error}</div>}
        {infoClima && <div className="weather-info">{infoClima}</div>}
      </div>
    </>
  );
};

export default Formulario;
