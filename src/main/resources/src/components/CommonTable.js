import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    Table,
    TableHeaderColumn,
    TableRow,
    TableHeader,
    TableRowColumn,
    TableBody
} from 'material-ui/Table';

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});

class CommonTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px',
        };
    }

    render() {
        const {list} = this.props;
        const columnKeys = Object.keys(list);

        const header = columnKeys.map((key) => {
            const col = list[key];
            return (
                <TableHeaderColumn key={`col_${key}`}>{col}</TableHeaderColumn>
            )
        });
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Table>
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                    >
                        <TableRow>
                            {header}
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                    >
                        {this.props.employees.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.age}</TableRowColumn>
                                <TableRowColumn>{row.years}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
    }
}

export default CommonTable;