import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import useUpdateReservation from '../hooks/useUpdateReservation';

const Rocket = ({ rocket }) => {
  const handleReservation = useUpdateReservation();
  return (
    <>
      <img src={rocket.flickr_images[0]} alt="" />

      <h1>{rocket.name}</h1>
      <p>
        {rocket.reserved && <Badge>Reserved</Badge>}
        {rocket.description}
      </p>
      <Button
        className={rocket.reserved ? 'text-bg-light' : ''}
        onClick={() => handleReservation(rocket.id, 'getRockets')}
      >
        {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </Button>
    </>
  );
};

export default Rocket;
