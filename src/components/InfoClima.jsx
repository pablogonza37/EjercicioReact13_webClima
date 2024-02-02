
import Card from 'react-bootstrap/Card';

const InfoClima = ({item}) => {
    
    return (
        <section className='mt-4'>
            <Card className="text-center">
      <Card.Header>{item.name}</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </section>
    );
};

export default InfoClima;