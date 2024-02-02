import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const Formulario = () => {
  return (
    <Form className="text-white formulario p-4 rounded">
      <div className="row">
        <div className="col-lg-6 mb-3">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>País:</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </div>
        <div className="col-lg-6 mb-3">
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Ciudad:</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </div>
      </div>
      <Button variant="info">Consultar</Button>
    </Form>
  );
};

export default Formulario;
