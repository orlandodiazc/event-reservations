import { useDispatch } from 'react-redux';
import { apiSlice, useGetRocketsQuery } from '../redux/api/apiSlice';
import Rocket from './Rocket';

// const MOCK_ROCKETS = [
//   {
//     id: 0,
//     rocket_name: 'astro',
//     description: 'big',
//     flickr_images: 'https://picsum.photos/200',
//   },
//   {
//     id: 1,
//     rocket_name: 'astro',
//     description: 'big',
//     flickr_images: 'https://picsum.photos/200',
//   },
// ];

const RocketList = () => {
  const { data: rockets, isSuccess } = useGetRocketsQuery();
  console.log(rockets);
  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(
      apiSlice.util.updateQueryData('getRockets', undefined, (rockets) =>
        rockets.map((rocket) => {
          if (rocket.id !== id) return rocket;
          return { ...rocket, reserved: !rocket.reserved };
        }),
      ),
    );
  };
  return (
    <>
      {isSuccess &&
        rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} clickHandler={handleReservation} />
        ))}
    </>
  );
};

export default RocketList;
