import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useGetMissionsQuery } from '../redux/api/apiSlice';
import Mission from './Mission';

// const MOCK_MISSIONS = [
//   {
//     mission_id: '0',
//     mission_name: 'bereta',
//     description: 'very cool',
//   },
// ];

const MissionList = () => {
  const { data: missions, isSuccess } = useGetMissionsQuery();
  return (
    <Container className="py-4">
      <Table className="text-white" responsive>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {isSuccess &&
            missions.map((mission) => <Mission key={mission.mission_id} mission={mission} />)}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionList;
