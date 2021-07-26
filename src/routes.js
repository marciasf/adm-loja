import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdicionarCliente from './cliente/AdicionarCliente';
import AdicionarEndereco from './endereço/AdicionarEndereco';
import Home from './home/Home';
import AdicionarProduto from './produto/AdicionarProduto';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route
                    path='/' exact component={Home}
                />
                <Route
                    path='/adicionarproduto' component={AdicionarProduto}
                />
                <Route
                    path='/adicionarcliente' component={AdicionarCliente}
                />
                <Route
                    path='/adicionarendereco' component={AdicionarEndereco}
                />
            </Switch>
        </BrowserRouter>
    )
} 