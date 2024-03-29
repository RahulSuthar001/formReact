import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

export default function MyHome() {
  // Get the location object using useLocation hook
  const location = useLocation();

  // Extract form data from location state
  const { state } = location;
  const { email, password } = state || {};

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '300px' }}>
        <Card.Body>
          <Card.Title>Welcome to My Home Page!</Card.Title>
          {email && (
            <Card.Text>
              <strong>Email:</strong> {email}
            </Card.Text>
          )}
          {password && (
            <Card.Text>
              <strong>Password:</strong> {password}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
