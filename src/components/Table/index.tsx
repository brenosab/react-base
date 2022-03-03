import React, { TableHTMLAttributes } from 'react';
import { Row, Col, Button, Container } from "react-bootstrap";
import '../../App.css';

interface TableProps {
    title: string;
    cols: any[];
    list: any[];
}

const Table: React.FC<TableProps> = (props) => {
    const {
        title,
        cols = [],
        list = [],
    } = props;

    return (
        <Row>
            <Row className='header'>
                <Col md={{ offset: 4, span:4 }}>{props.title}</Col>
            </Row>
            <Row className='header'>
                {props.cols.map((collumn, index) => (
                    <Col md={2} key={index} className="col-header" >
                        {collumn.Header}
                    </Col>
                ))}
            </Row>
            <Row>
                {props.list.map((data, index) => (
                    <Row key={index}>
                        <Col md={2} className="col-header" >
                            {data.id}
                        </Col>
                        <Col md={2} className="col-header" >
                            {data.nome}
                        </Col>
                    </Row>
                ))}
            </Row>
        </Row>
      );
}

export default Table;
