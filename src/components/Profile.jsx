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
    <Container className="py-4">
      <Row>
        <Col md>
          <h1 className="mb-3">My Missions</h1>
          <ListGroup className="mb-3">
            {isSuccessMissions &&
              missions.map(
                (mission) =>
                  mission.reserved && (
                    <ListGroup.Item
                      className="text-bg-dark border-secondary"
                      key={mission.mission_id}
                    >
                      {mission.mission_name}
                    </ListGroup.Item>
                  ),
              )}
          </ListGroup>
        </Col>
        <Col md>
          <h1 className="mb-3">My Rockets</h1>
          <ListGroup className="mb-3">
            {isSuccessRockets &&
              rockets.map(
                (rocket) =>
                  rocket.reserved && (
                    <ListGroup.Item className="text-bg-dark border-secondary" key={rocket.id}>
                      {rocket.name}
                    </ListGroup.Item>
                  ),
              )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
