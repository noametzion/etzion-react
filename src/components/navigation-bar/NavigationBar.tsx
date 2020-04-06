import React from 'react';

interface INavigationBarProps {
}

interface INavigationBarState {
}


class NavigationBar extends React.Component <INavigationBarProps, INavigationBarState>{
    constructor(props : INavigationBarProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <h1>
                ETZION!!!!!!
            </h1>
        );
    }
}

export default NavigationBar;