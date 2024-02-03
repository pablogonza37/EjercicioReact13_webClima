import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import InfoClima from "./InfoClima";

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
          const weather = data;
          setInfoClima(weather);
          setPais("");
          setCiudad("");
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
      <Form className="text-white formulario p-4 rounded"  onSubmit={obtenerClima}>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>País:</Form.Label>
              <Form.Control
                type="text"    
                placeholder="País"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                minLength={3}
                maxLength={50}
                pattern="[a-zA-Z\s]+" title="Solo se permiten letras y espacios"
                required
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
                minLength={3}
                maxLength={50}
                pattern="[a-zA-Z\s]+" title="Solo se permiten letras y espacios"
                required
              />
            </Form.Group>
          </div>
        </div>
        <div className="text-center mt-3">
          <Button variant="primary" type="submit">
            {" "}
            Consultar
          </Button>
        </div>
      </Form>
      <div>
        {error && <div className="alert alert-danger my-2">{error}</div>}
        {infoClima && <InfoClima datosClima={infoClima} />}
      </div>
    </>
  );
};

export default Formulario;
