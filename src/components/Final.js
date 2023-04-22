import { Card } from 'react-bootstrap';

function Final({ values }) {
  return (
    <div>
      <Card style={{ marginTop: 80 }}>
        <Card.Body>
          <div>First Name: {values.firstName}</div>
          <div>Last Name: {values.lastName}</div>
          <div>Age: {values.age}</div>
          <div>Email: {values.email}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Final;
