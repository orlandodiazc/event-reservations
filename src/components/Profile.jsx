import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

const MOCK_MY_MISSIONS = [
  { id: 0, name: 'asdfasrf' },
  { id: 1, name: 'asdfasrf' },
];
const MOCK_MY_ROCKETS = [
  { id: 0, name: 'asdfasrf' },
  { id: 1, name: 'asdfasrf' },
  { id: 2, name: 'asdfasrf' },
];

const Profile = () => (
  <Container>
    <Row>
      <Col>
        <h1>My Missions</h1>
        <ListGroup>
          {MOCK_MY_MISSIONS.map((mission) => (
            <ListGroup.Item key={mission.id}>{mission.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <h1>My Rockets</h1>
        <ListGroup>
          {MOCK_MY_ROCKETS.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default Profile;
