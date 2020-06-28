import React from 'react';
import InfoProp from "../info/InfoProp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Col, Nav, Row} from "react-bootstrap";
import "./WithSideBar.css"

interface IWithSideBarProps {
    mainRoute: string;
    subRoutes: InfoProp[];
}

interface IWithSideBarState {
}

function WithSideBar<TProps>(WrappedComponent : React.ComponentType<TProps>) {
    return class extends React.Component <TProps & IWithSideBarProps, IWithSideBarState>{
        constructor(props : TProps & IWithSideBarProps) {
            super(props);
            this.state = {};
            // this.displayName = `${WrappedCompomemt.displayName}WithSideBar`
        }

        render() {
            let fullMainRoute = '/' + this.props.mainRoute + '/';
            return (
                <div>
                    <Router>
                        <Row>
                            <Col xs={3} className="nav-col">
                                <Nav defaultActiveKey={ fullMainRoute + this.props.subRoutes[0].path } className="flex-column">
                                    { this.props.subRoutes.map(route =>
                                        <Nav.Link href={ fullMainRoute + route.path } key={route.title}>{ route.title }</Nav.Link>
                                    )}
                                </Nav>
                            </Col>
                            <Col>
                                <Switch>
                                    { this.props.subRoutes.map(route =>
                                        <Route path= { fullMainRoute + route.path } key={route.title}>
                                            <WrappedComponent content={route} {...this.props} />;
                                        </Route>
                                    )}
                                </Switch>
                            </Col>
                        </Row>
                    </Router>
                </div>
            );
        }
    };
}

export default WithSideBar;