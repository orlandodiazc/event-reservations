import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import useUpdateReservation from '../hooks/useUpdateReservation';

const Mission = ({ mission }) => {
  const handleReservation = useUpdateReservation();
  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        <Badge className={mission.reserved ? '' : 'bg-secondary'}>
          {mission.reserved ? 'MEMBER' : 'NOT A MEMBER'}
        </Badge>
      </td>
      <td>
        <Button onClick={() => handleReservation(mission.mission_id, 'getMissions')}>
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

export default Mission;
