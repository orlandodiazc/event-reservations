import { Container } from 'react-bootstrap';
import { useGetRocketsQuery } from '../redux/api/apiSlice';
import Rocket from './Rocket';

// const MOCK_ROCKETS = [
//   {
//     id: 0,
//     rocket_name: 'astro',
//     description: 'big',
//     flickr_images: ['https://picsum.photos/200'],
//     reserved: true,
//   },
//   {
//     id: 1,
//     rocket_name: 'astro',
//     description: 'big',
//     flickr_images: ['https://picsum.photos/200'],
//     reserved: false,
//   },
// ];

const RocketList = () => {
  const { data: rockets, isSuccess } = useGetRocketsQuery();
  return (
    <Container className="py-4">
      {isSuccess && rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
    </Container>
  );
};
export default RocketList;
