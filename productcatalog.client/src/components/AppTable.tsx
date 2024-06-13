import {
    Table
} from "reactstrap";

import {
    TableColumn
} from "../interfaces";

interface Props<T> {
    data: T[];
    columns: TableColumn<T>[];
}

const AppTable = <T,>({
    data,
    columns
}: Props<T>) => {
    return (
        <Table
            striped
            bordered
            hover
            responsive
        >
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.title}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column, index) => (
                            <td key={index}>
                                {row[column.field] as React.ReactNode}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AppTable;