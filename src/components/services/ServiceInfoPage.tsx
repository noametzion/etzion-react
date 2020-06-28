import React from 'react';
import InfoProp from "../info/InfoProp";
import Info from "../info/Info";

interface IServiceInfoPageProps {
    content?: InfoProp;
}

interface IServiceInfoPageState {
}


class ServiceInfoPage extends React.Component <IServiceInfoPageProps, IServiceInfoPageState>{
    constructor(props : IServiceInfoPageProps) {
        super(props);
        this.state = {};
        // this.displayName = "ServiceInfoPage"
    }

    render() {
        return (
            <div>
                <Info info={this.props.content}></Info>
            </div>
        );
    }
}

export default ServiceInfoPage;