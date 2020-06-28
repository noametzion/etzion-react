import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

interface IInfoFooterProps {
}

interface IInfoFooterState {
}

class InfoFooter extends React.Component <IInfoFooterProps, IInfoFooterState>{
    constructor(props : IInfoFooterProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            // TODO: stick to bottom
            <footer style={{background: '#645d62'}}>
                <Container>
                    <Row>
                        <Col>
                            <h3>Contact</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Etzion Electrical engineering ltd <br/>
                                Hamashbir 26 St. <br/>
                                Holon, 58859, Israel <br/>
                            </p>
                        </Col>
                        <Col>
                            <p>
                                Tel: 972-3-5507450, 972-3-5504226 <br/>
                                Fax: 972-3-5591057 <br/>
                                E-mail: etzionel@netvision.net.il
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default InfoFooter;