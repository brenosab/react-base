import React, { TableHTMLAttributes } from 'react';
import { Table } from "react-bootstrap";
import '../../App.css';

type PrimitiveType = string | Symbol | number | boolean;
interface TableProps{
    title: string;
    cols: any[];
    list: any[];
    headers: any[];
}
interface MinTableItem {
    id: PrimitiveType;
}

function objectValues<T extends {}>(obj: T){
    return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

const TablePagination: React.FC<TableProps> = (props) => {
    const {
        title,
        cols = [],
        list = [],
        headers = []
    } = props;

    return (
        <Table className='react-table' striped bordered={true} hover>
            <thead>
                {objectValues(props.headers).map((header) => (
                    <th>{header.Header}</th>
                ))}
            </thead>
            <tbody>
                {props.list.map((item) => (
                    <tr>
                        {objectValues(item).map((entry) => (
                            <td>{entry}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
      );
}

export default TablePagination;
