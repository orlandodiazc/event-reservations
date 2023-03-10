import Button from 'react-bootstrap/Button';

const Rocket = ({ rocket }) => (
  <>
    <img src={rocket.flickr_images} alt="" />
    <h1>{rocket.rocket_name}</h1>
    <p>{rocket.description}</p>
    <Button>Reserve Rocket</Button>
  </>
);

export default Rocket;
