import styled from 'styled-components'
import AddCustomer from "./Component/AddCustomer"
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([
    {
      id:230001,
      firstName: "Ram",
      lastName:"Kumar",
      mobileNumber: 9876543210,
      aadharNumber:123443211234,
    }, {
      id:230002,
      firstName: "Lakshman",
      lastName:"Kumar",
      mobileNumber: 9876543211,
      aadharNumber:123443211235,
    }, {
      id:230003,
      firstName: "Sita",
      lastName:"",
      mobileNumber: 9876543212,
      aadharNumber:123443211236,
    },
  ]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
    <Container>
      <Header>
          <Logo><Icon>C</Icon></Logo>
          <Tittle>Customer App</Tittle>
      </Header>
      <InnerDiv>
        <SearchInput placeholder='Search'/>
        <Button onClick={toggleModal}>Add Customer</Button>
      </InnerDiv>
      <Table>
        <tr>
          <th>Unique ID</th>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Aadhar</th>
          <th>Action</th>
        </tr>
        {customers.map((customer) => (
          <tr key={customer.id}>
             <td>{customer.id}</td>
             <td>{customer.firstName} {customer.lastName}</td>
             <td>+91 {customer.mobileNumber}</td>
             <td>{customer.aadharNumber}</td>
             <td>Edit</td>
          </tr>
        ))}
      </Table>
      {showModal && (
          <AddCustomer onClose={toggleModal} setCustomers={setCustomers} customers={customers}/>
      )}
    </Container>
    </>
  );
}

export default App;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:5rem;
  `
const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    height: 60px;
    width: 60px;
    border-radius: 50%;
  `
const Icon = styled.h1``
const Tittle = styled.h3`
  color:green
`
const InnerDiv = styled.div`
  margin: 1rem;
`
const SearchInput = styled.input`
  width: 20rem;
  padding: 10px;
  border: 1px solid #ccc;
`
const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`
const Button = styled.button`
  border-radius: 3px;
  border: none;
  background-color: green;
  color: white;
  font-weight: 700;
  margin: 0 1em;
  padding: 10px;
`