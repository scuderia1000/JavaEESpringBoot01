import React from "react";

export default class Table extends React.Component {
    render() {
        const {list} = this.props;
        const columnKeys = Object.keys(list);

        const header = columnKeys.map((key) => {
            const col = list[key];
            return (
                <th key={`col_header_${key}`}>{col}</th>
            )
        });

        const rows = [];


        return (
            <div>
                <table>
                    <tr>
                        {header}
                    </tr>
                </table>
            </div>
        )
    }
}