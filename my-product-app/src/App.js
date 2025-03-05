// src/App.js

import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "X"; // Change ton prénom ici ou laisse vide

function App() {
  return (
    <div className="App" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <Card style={{ 
        width: '18rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
          <Image />
        </Card.Body>
      </Card>
      <div style={{
        fontSize: '1.2rem',
        color: '#333',
        textAlign: 'center'
      }}>
        {firstName ? `Salut, ${firstName}!` : "Salut, there!"}
      </div>
    </div>
  );
}

export default App;
