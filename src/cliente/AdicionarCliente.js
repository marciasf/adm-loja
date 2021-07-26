import React from 'react';
import { Container, Form, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdicionarCliente(){
    return(
        <>
            <Navbar bg="dark"variant="dark">
                <Container>
                    <Navbar.Brand href="/">Adm Loja</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/">
                            Home
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/adicionarcliente">
                                Adicionar Cliente
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/adicionarproduto">
                                Adicionar Produto
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/adicionarendereco">
                                Adicionar Endereco
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <h1>
                    Inserir Cliente
                </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nomeCliente" onChange={this.change} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control name="telefonecliente" onChange={this.change} type="phone"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>email</Form.Label>
                        <Form.Control name="emailcliente" onChange={this.change} type="email"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
            
        </>
    )
}