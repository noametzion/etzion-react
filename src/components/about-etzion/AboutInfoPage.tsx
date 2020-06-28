import React from 'react';
import InfoProp from "../info/InfoProp";
import Info from "../info/Info";
import "../etzion-app/App.css"

interface IAboutInfoPageProps {
    content?: InfoProp;
}

interface IAboutInfoPageState {
}


class AboutInfoPage extends React.Component <IAboutInfoPageProps, IAboutInfoPageState>{
    constructor(props : IAboutInfoPageProps) {
        super(props);
        this.state = {};
        // this.displayName = "AboutInfoPage"
    }

    render() {
        return (
            <div>
                <Info info={this.props.content}></Info>
            </div>
        );
    }
}

export default AboutInfoPage;