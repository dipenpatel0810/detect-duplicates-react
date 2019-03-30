import React from 'react';
import DataService from '../services/DataService';
import DataRows from "./DataRows";
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duplicateData: '',
            uniqueData: '',

        }
    }

    processNormalFile = () => {
        console.log("Process Normal File");
        this.dataService = new DataService();
        this.dataService.findDuplicateForNormal().then(
            response =>
                this.setState({
                                  duplicateData: response
                              })
        )

        this.dataService.findUniqueForNormal().then(
            response => this.setState({
                                          uniqueData: response
                                      })
        )

    };

    processAdvancedFile = () => {
        console.log("Process Advanced File");
        this.dataService = new DataService();
        this.dataService.findDuplicateForAdvanced().then(
            response =>
                this.setState({
                                  duplicateData: response
                              })
        )

        this.dataService.findUniqueForAdvanced().then(
            response => this.setState({
                                          uniqueData: response
                                      })
        )
    };

    clearResults = () =>
        this.setState({
                          duplicateData: '',
                          uniqueData: ''
                      });

    render() {
        return (
            <div className={"container-fluid"}>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary"
                            onClick={this.processNormalFile}>
                        Process normal.csv File
                    </button>
                    <button type="button" className="btn btn-secondary"
                            onClick={this.processAdvancedFile}>
                        Process advanced.csv File
                    </button>
                    <button type="button" className="btn btn-secondary"
                            onClick={this.clearResults}>
                        Clear Results
                    </button>
                </div>

                <div>
                    {
                        this.state.duplicateData !== '' &&
                        <div>
                            <h3>The Duplicate Data :</h3>
                            <ul className={"list-group my-2"}>
                                {
                                    this.state.duplicateData.map((record, key) =>
                                                                       <DataRows record={record}/>
                                    )
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.uniqueData !== '' &&
                        <div>
                            <h3>The Unique Data :</h3>
                            <ul className={"list-group my-2"}>
                                {
                                    this.state.uniqueData.map((record, key) =>
                                                                    <DataRows record={record}/>
                                    )
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        );
    }

}

export default Home;
