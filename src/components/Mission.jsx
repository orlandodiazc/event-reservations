import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Mission = ({ mission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>
      <Badge>MEMBER</Badge>
    </td>
    <td>
      <Button>Join Mission</Button>
    </td>
  </tr>
);

export default Mission;
