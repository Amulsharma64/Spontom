import React, { useState } from 'react';
import styled from 'styled-components';


const CustomerForm = ({ onClose,customers, setCustomers }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');

  const addCustomer = () => {

    for(const obj of customers){
        if(obj.aadharNumber===aadharNumber){
            return alert("Pls Enetr Valid Aadhar Number");
        }
    }

    const newCustomer = {
      id: 230000+customers.length + 1, // Generate a unique ID
      firstName,
      lastName,
      mobileNumber,
      aadharNumber,
    };

    setCustomers([...customers, newCustomer]);
    // Clear input fields after adding a customer
    setFirstName('');
    setLastName('');
    setMobileNumber('');
    setAadharNumber('');
    onClose();
  };

  return (
    <ModalWrapper>
        <Container>
      <h2>Add Customer</h2>
      <InputWrapper>
        <Label>First Name:</Label>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Last Name:</Label>
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Mobile Number:</Label>
        <Input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Aadhar Number:</Label>
        <Input
          type="text"
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
        />
      </InputWrapper>
      <Button onClick={addCustomer}>Add Customer</Button>
    </Container>
    </ModalWrapper>
  );
};

export default CustomerForm;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 5rem;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const InputWrapper = styled.div`
  margin: 0 10px 10px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
