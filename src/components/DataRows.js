import React from 'react';

class DataRows extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className={"list-group-item"}>
                {this.props.record}
            </li>
        );
    }

}

export default DataRows;
