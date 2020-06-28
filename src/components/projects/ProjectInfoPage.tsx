import React from 'react';
import InfoProp from "../info/InfoProp";
import Info from "../info/Info";

// TODO: fix css usages

interface IProjectInfoPageProps {
    content?: InfoProp;
}

interface IProjectInfoPageState {
}

class ProjectInfoPage extends React.Component <IProjectInfoPageProps, IProjectInfoPageState>{
    constructor(props : IProjectInfoPageProps) {
        super(props);
        this.state = {};
        // TODO: fix display name
        // this.displayName = "ProjectInfoPage"
    }

    render() {
        return (
            <div>
                <Info info={this.props.content}></Info>
            </div>
        );
    }
}

export default ProjectInfoPage;