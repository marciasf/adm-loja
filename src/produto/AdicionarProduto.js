import React from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdicionarProduto(){
    return (
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
                    Inserir Produto
                </h1>
                <Form>
                    <Form.Group className="mb-3" controlId="nomeproduto">
                        <Form.Label>Produto</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descricao">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ean">
                        <Form.Label>Ean</Form.Label>
                        <Form.Control type="numbur"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </>
    )
}