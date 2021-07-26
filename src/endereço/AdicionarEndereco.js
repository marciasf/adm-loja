import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdicionarEndereco(){
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
            <h1>
                adcionarendereco
            </h1>
        </>
        
    )
}