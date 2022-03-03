import React from 'react';

import { Container, Content } from './styles';
import Table from '../../components/Table';

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
    ];
    const list = [
        {
            id: "1",
            nome: "cel1"
        },
        {
            id: "2",
            nome: "cel2"
        }
    ];
    return (
        <Container>
            <Content>
                <Table
                    cols={columns}
                    list={list}
                    title={"Formulário"}
                />
            </Content>
        </Container>
    );
}

export default Form;
