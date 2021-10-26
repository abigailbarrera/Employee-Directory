import React from 'react';
import styled from 'styled-components';
import Employees from './components/Employees';

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;


function App() {
  return (
    <Container>
      <Employees />
    </Container>
  );
}

export default App;
