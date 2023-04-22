import { Button, Card, Form } from 'react-bootstrap';

function SecondStep({ nextStep, prevStep, changeInput, values }) {
  const submitForm = (e) => {
    e.preventDefault();
    if (values.age && values.email) {
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
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                defaultValue={values.age}
                onChange={(e) => changeInput(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={values.email}
                onChange={(e) => changeInput(e)}
                className="mb-3"
              />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button onClick={prevStep} variant="secondary">
                Previous
              </Button>
              <Button
                disabled={!values.age || !values.email}
                onClick={nextStep}
                variant="dark"
                type="submit"
              >
                Continue
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SecondStep;
