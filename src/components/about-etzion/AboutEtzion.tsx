import React from 'react';

interface IAboutEtzionProps {
}

interface IAboutEtzionState {
}


class AboutEtzion extends React.Component <IAboutEtzionProps, IAboutEtzionState>{
    constructor(props : IAboutEtzionProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p>
                very long text about the company and it's history.. bla bla bla.

                no one will ever read it anyway.. bla bla bla bla.

                some more unnecessary information..bla bla bla bla.
            </p>
        );}
}

export default AboutEtzion;