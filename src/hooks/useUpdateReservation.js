import { useDispatch } from 'react-redux';
import { updateReservation } from '../redux/api/apiSlice';

export default function useUpdateReservation() {
  const dispatch = useDispatch();
  function handleReservation(id, endpoint) {
    dispatch(updateReservation(id, endpoint));
  }
  return handleReservation;
}
