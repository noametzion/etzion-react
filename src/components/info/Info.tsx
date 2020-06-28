import React from 'react';
import InfoProp from "./InfoProp";

interface IInfoProps {
    info?: InfoProp;
}

interface IInfoState {
}


class Info extends React.Component <IInfoProps, IInfoState>{
    constructor(props : IInfoProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>{ this.props.info ? this.props.info.title : '' }</h1>
                { this.props.info ? this.props.info.description.map(paragraph =>
                    <p>{paragraph}</p>
                ) : ''}
            </div>
        );
    }
}

export default Info;