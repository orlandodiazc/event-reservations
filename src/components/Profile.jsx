import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useGetMissionsQuery, useGetRocketsQuery } from '../redux/api/apiSlice';

// const MOCK_MY_MISSIONS = [
//   { id: 0, name: 'asdfasrf' },
//   { id: 1, name: 'asdfasrf' },
// ];
// const MOCK_MY_ROCKETS = [
//   { id: 0, name: 'asdfasrf' },
//   { id: 1, name: 'asdfasrf' },
//   { id: 2, name: 'asdfasrf' },
// ];

const Profile = () => {
  const { data: rockets, isSuccess: isSuccessRockets } = useGetRocketsQuery();
  const { data: missions, isSuccess: isSuccessMissions } = useGetMissionsQuery();
  return (
    <Container>
      <Row>
        <Col>
          <h1>My Missions</h1>
          <ListGroup>
            {isSuccessMissions &&
              missions.map(
                (mission) =>
                  mission.reserved && (
                    <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
                  ),
              )}
          </ListGroup>
        </Col>
        <Col>
          <h1>My Rockets</h1>
          <ListGroup>
            {isSuccessRockets &&
              rockets.map(
                (rocket) =>
                  rocket.reserved && <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>,
              )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
