import React, {PropTypes} from "react";
import Header from '../../components/common/Header';
import CommonTable from "../../components/CommonTable"

const App = (props) => {
    const EMPLOYEES = [
        {name: 'Joe Biden', age: 45, years: 5},
        {name: 'President Obama', age: 54, years: 8},
        {name: 'Crystal Mac', age: 34, years: 12},
        {name: 'James Henry', age: 33, years: 2}
    ];

    return (
        <div>
            <Header />
        </div>
        /*<div>
            <h1>Hello, World!</h1>
            <div>
                <CommonTable employees={EMPLOYEES} />
            </div>
        </div>*/
    );
};

export default App;

