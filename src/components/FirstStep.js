import { Button, Card, Form } from 'react-bootstrap';

function FirstStep({ nextStep, changeInput, values }) {
  const submitForm = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName) {
      nextStep();
    } else {
      console.log('error');
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 80 }}>
        <Card.Body>
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                defaultValue={values.firstName}
                onChange={(e) => changeInput(e)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                defaultValue={values.lastName}
                onChange={(e) => changeInput(e)}
                type="text"
              />
            </Form.Group>
            <Button
              disabled={!values.firstName || !values.lastName}
              type="submit"
              className="btn btn-dark"
            >
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FirstStep;
