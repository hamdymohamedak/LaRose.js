import React from 'react';

const Table = ({ data, columns, edit, RoseID, RoseName }) => (
    <table style={edit} className={RoseName} id={RoseID}>
        <thead>
            <tr>
                {columns.map((col, index) => (
                    <th key={index}>{col.header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((col, colIndex) => (
                        <td key={colIndex}>{row[col.accessor]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;


