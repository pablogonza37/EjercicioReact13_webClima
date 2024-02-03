import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InfoClima = ({ datosClima }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${datosClima.weather[0].icon}.png`;

  return (
    <section className="mt-4">
      <Card className="text-white mb-3 text-bg-secondary shadow-lg">
        <Card.Header className="text-center">
          {datosClima.name}, {datosClima.sys.country}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={6} className="mb-3 text-center">
              <div className="bg-info p-3 rounded ">
                <Card.Title>
                  <p>{datosClima.weather[0].description}</p>
                  <div className="d-flex justify-content-center">
                    <img
                      src={iconUrl}
                      alt="Icono del clima"
                      className="img-fluid"
                    />
                    <h3 className="display-3">{datosClima.main.temp}°C</h3>
                  </div>

                  <p>Sensación térmica: {datosClima.main.feels_like}°C </p>
                </Card.Title>
              </div>
            </Col>
            <Col lg={6} className="mb-3 p-3 rounded text-center">
              <Row>
                <Col lg={6} className="mb-3 lead">
                  <p>Máxima: {datosClima.main.temp_max}°C </p>
                  <p>Mínima: {datosClima.main.temp_min}°C</p>
                  <p>Humedad: {datosClima.main.humidity}% </p>
                  <p className="m-0">Presión: {datosClima.main.pressure} hpa</p>
                </Col>
                <Col lg={6} className="mb-3 lead">
                  <p>Vientos: {datosClima.wind.speed} (km/h)</p>
                  <p>Dirección: {datosClima.wind.speed} °</p>
                  <p>Longitud: {datosClima.coord.lon}</p>
                  <p>Latitud: {datosClima.coord.lat}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </section>
  );
};

export default InfoClima;
