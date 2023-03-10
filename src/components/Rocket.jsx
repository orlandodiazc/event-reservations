import Button from 'react-bootstrap/Button';

const Rocket = ({ rocket }) => (
  <>
    <img src={rocket.flickr_images[0]} alt="" />
    <h1>{rocket.name}</h1>
    <p>{rocket.description}</p>
    <Button>Reserve Rocket</Button>
  </>
);

export default Rocket;
