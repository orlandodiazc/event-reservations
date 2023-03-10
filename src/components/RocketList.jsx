import Rocket from './Rocket';

const MOCK_ROCKETS = [
  {
    id: 0,
    rocket_name: 'astro',
    description: 'big',
    flickr_images: 'https://picsum.photos/200',
  },
  {
    id: 1,
    rocket_name: 'astro',
    description: 'big',
    flickr_images: 'https://picsum.photos/200',
  },
];

const RocketList = () => (
  <>
    {MOCK_ROCKETS.map((rocket) => (
      <Rocket key={rocket.id} rocket={rocket} />
    ))}
  </>
);

export default RocketList;
