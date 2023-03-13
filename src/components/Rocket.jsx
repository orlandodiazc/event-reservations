import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useUpdateReservation from '../hooks/useUpdateReservation';

const Rocket = ({ rocket }) => {
  const handleReservation = useUpdateReservation();
  return (
    <Card className="flex-md-row mb-3" border="secondary" bg="dark" text="light">
      <Card.Img
        src={rocket.flickr_images[0]}
        style={{ maxWidth: '18rem' }}
        className="h-100 m-auto"
        alt="Rocket Image"
      />
      <Card.Body>
        <Card.Title>{rocket.name}</Card.Title>
        <Card.Text className="mb-3">
          {rocket.reserved && <Badge className="me-1">Reserved</Badge>}
          {rocket.description}
        </Card.Text>
        <Button
          className={rocket.reserved ? 'text-bg-dark border border-secondary' : ''}
          onClick={() => handleReservation(rocket.id, 'getRockets')}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Rocket;
