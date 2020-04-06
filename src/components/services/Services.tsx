import React from 'react';

interface IServicesProps {
}

interface IServicesState {
}


class Services extends React.Component <IServicesProps, IServicesState>{
    constructor(props : IServicesProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>List Of Services:</h2>
                <ul>
                    <li>we do this</li>
                    <li>and that</li>
                    <li>and this</li>
                    <li>bla bla</li>
                    <li>bla bla bla</li>
                </ul>
            </div>
        );
    }
}

export default Services;