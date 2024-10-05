import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
  background-image: linear-gradient( 86.3deg,  rgba(0,119,182,1) 3.6%, rgba(8,24,68,1) 87.6% );
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #030235;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #6c5ce7;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #030235;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #5a4dcd;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  color: #888;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container class="bgcontact">
      <FormContainer>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        <Message>Don't have an account? Sign up</Message>
      </FormContainer>
    </Container>
  );
};

export default Login;
