import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { StepProvider } from './components/context/StepContext';
import Steps from './components/Steps';

function App() {
  return (
    <div>
      <StepProvider>
        <Navbar />
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Steps />
            </Col>
          </Row>
        </Container>
        <Footer />
      </StepProvider>
    </div>
  );
}

export default App;
