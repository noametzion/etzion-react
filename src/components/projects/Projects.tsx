import React from 'react';

interface IProjectsProps {
}

interface IProjectsState {
}


class Projects extends React.Component <IProjectsProps, IProjectsState>{
    constructor(props : IProjectsProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>List Of Projects:</h2>
                <ul>
                    <li> project </li>
                    <li> project </li>
                    <li> project </li>
                </ul>
            </div>
        );
    }
}

export default Projects;