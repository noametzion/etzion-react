import React from 'react';
import {Button, Col, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

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
                <Navbar sticky="top" bg="dark" variant="dark">
                    <Navbar.Brand href="/about">ETZION</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/about" >About</Nav.Link>
                        <Nav.Link href="/services" >Services</Nav.Link>
                        <Nav.Link href="/projects" >Projects</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
        );
    }
}

export default NavigationBar;