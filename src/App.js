import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import ListGroup from "react-bootstrap/ListGroup";

// bostrapp 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// styled 
import styled from "styled-components";



const Header = styled.div`
  padding-top: 10px;
  display: flex;
  margin: 30px 0;
  align-items: center;
  background-color: #e9ebee;
  padding: 30px;
  justify-content: space-between;
  img {
    width: 45px;
  } 
  padding-bottom: 50px;
  border-bottom: 1px solid #e9ebee;
  margin-bottom: 50px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 12px;
  }
`;

const Sidebar = styled.div`
  margin-bottom: 50px;
  .list-group-item {
    :hover {
      background-color: #e9ebee;
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  `

const Footer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  background-color: #e9ebee;
`

const TableStyle = styled.div`
  table {
    background-color: #f6e5f5;
    border-radius: 3px;
  }
  td {
    font-weight: bold;
  }
`;

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setData(json));
  }, [])

  console.log(data)
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col>
          <Header>
            <Logo> Logo </Logo>
            <Avatar>
              <div> Muhammad Arham </div>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                rounded
              />
            </Avatar>
          </Header>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <p>Sidebar</p>
          <Sidebar>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Sidebar>
        </Col>
        <Col xs={12} md={8}>
          <TableStyle>
            <Table striped borderless hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data ? (
                  data.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))
                ) : (
                  <p> No data </p>
                )}
              </tbody>
            </Table>
          </TableStyle>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer> Footer , muhammad arham , 2020</Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
