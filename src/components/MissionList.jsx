import Table from 'react-bootstrap/Table';
import Mission from './Mission';

const MOCK_MISSIONS = [
  {
    mission_id: '0',
    mission_name: 'bereta',
    description: 'very cool',
  },
];

const MissionList = () => (
  <>
    <Table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {MOCK_MISSIONS.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </Table>
  </>
);

export default MissionList;
