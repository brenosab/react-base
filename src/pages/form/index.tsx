import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Container, Content } from './styles';
import Table from '../../components/Table';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Form: React.FC = () => {
    const columns = [
        {
            Header: "Id",
            width: 60,
            accessor: "id",
        },
        {
            Header: "Nome",
            width: 60,
            accessor: "nome",
        },
        {
            Header: "Idade",
            width: 60,
            accessor: "idade",
        },
        {
            Header: "Profissão",
            width: 60,
            accessor: "profissao",
        }
    ];
    const list = [
        {
            id: "1",
            nome: "Nome 1",
            idade: 15,
            profisao: 'estudante'
        },
        {
            id: "2",
            nome: "Nome 2",
            idade: 32,
            profisao: 'gerente de vendas'
        },
        {
            id: "3",
            nome: "Nome 3",
            idade: 25,
            profisao: 'analista de produto'
        },
        {
            id: "4",
            nome: "Nome 4",
            idade: 35,
            profisao: 'telemarketing'
        },
        {
            id: "5",
            nome: "Nome 5",
            idade: 50,
            profisao: 'professor'
        },
    ];

    const [filter, setFilter] = useState({ nome: "", idade: "" });


    return (
        <Container>
            <Content>
                <Row className="filtros">
                    <Col md={6} className="col">
                        <div>Nome: </div>
                        <Input name='nome'
                            input={["nome", filter, setFilter]}
                        />
                    </Col>
                    <Col md={6} className="col">
                        <div>Idade:</div>
                        <Input name='idade'
                            input={["idade", filter, setFilter]}
                        />
                    </Col>
                    <Button 
                        type='button'
                        text='text' 
                        onClick={() => { 
                            console.log(filter.idade);
                        }}
                        children = "Acessar"
                    />
                </Row>
                <Table
                    cols={columns}
                    list={list}
                    title={"Formulário"}
                    headers={columns}
                />
            </Content>
        </Container>
    );
}

export default Form;
