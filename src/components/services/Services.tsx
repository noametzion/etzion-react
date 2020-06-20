import React from 'react';
import InfoProp from "../info/InfoProp";
import Info from "../info/Info";
import {Nav} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

interface IServicesProps {
}

interface IServicesState {
    companyServices: InfoProp[];
}


class Services extends React.Component <IServicesProps, IServicesState>{
    constructor(props : IServicesProps) {
        super(props);
        this.state = {
            companyServices: [
                // TODO: ask dad about routes(path)
                new InfoProp(
                    "Cathodic Protection",
                    "CathodicProtection",
                    [
                        "Design of Cathodic Protection systems for tanks & pipelines.",
                        "Cathodic protection measurements according to the relative standards.",
                        "CIPS & DCVG surveys for pipelines and interpretation of the data.",
                        "AC/DC Stray current interference measurements & mitigation.",
                        "Cathodic protection systems construction & commissioning. (Impressed current & sacrificial anodes)",
                        "Deep anode bed construction (including replaceable deep anode systems).",
                        "Consulting in the area of Cathodic Protection systems.",
                        "Supply of Cathodic protection equipment.",
                        "Manufacture and supply of Cathodic Protection Rectifiers."
                    ]
                ), new InfoProp(
                    "Medium voltage & low voltage electrical construction",
                    "MediumLowVoltage",
                    [
                        "Medium voltage construction",
                        "Construction of medium voltage infrastructures & installations, power distribution stations & transformation stations.",
                        "Maintenance of medium voltage systems.",
                        "Locate & repair of medium cables faults.",
                        "Construction of apron lighting.",
                        "",
                        "Low voltage construction",
                        "Construction of low voltage installations for industrial plants.",
                        "Underground electrical infrastructures.",
                        "Construction of electrical installations for pump stations (fuel, water & sewage), desalination plants and sewage treatment.",
                        "Construction of explosion proof electrical installations for petroleum and natural gas industry.",
                        "Electrical installations for generator sets and power generation.",
                        "",
                        "Certification 160 A4 (electrical installations) from the contractors registry."
                    ]
                ) , new InfoProp(
                    "Design and manufacture of low voltage electrical switchboards",
                    "Switchboards",
                    [
                        "Design of distribution and control switchboards.",
                        "Manufacture of electrical switchboards up to 3200 amps.",
                        "Manufacture of control switchboards for pump stations (fuel, water & sewage).",
                        "Manufacture of PLC switchboards.",
                        "All the switchboards are manufactured according to Israeli standard 61439-2.",
                        "Experience of more than 45 years in the design and manufacture of low voltage electrical switchboards."
                    ]
                ), new InfoProp(
                    "Generator sets, fuel tanks end electromechanical installations",
                    "Generators",
                    [
                        "Installation of generator sets including electrical and electromechanical systems exhaust piping and silence systems.",
                        "Supply and installation of weekly and daily fuel tanks for diesel generators.",
                        "Supply and installation of aboveground and underground fuel pipes for diesel generators.",
                        "Installation of synchronization systems for diesel generators.",
                        "Testing generator sets with dummy loads.",
                        "Design and installation of cathodic protection systems for underground fuel tanks.",
                        "Installation of leakage monitoring systems for underground fuel tanks according to the regulation of the ministry of environmental protection."
                    ]
                ), new InfoProp(
                    "Instrumentation and control",
                    "InstrumentationAndControl",
                    [
                        "Installation and connect of industrial instrumentation for industry process.",
                        "Design and manufacture of PLC’s switchboards.",
                        "Design and programming of programming logic controllers (PLC) for industrial plants and pump stations.",
                        "Design and programming of HMI and SCADA systems."
                    ]
                )
            ]
        };
    }

    render() {
        return (
            <div>
                <Router>
                    {/*TODO: add default for /services route*/}
                    <Nav defaultActiveKey={'/services/' + this.state.companyServices[0] } className="flex-column">
                        { this.state.companyServices.map(service =>
                            <Nav.Link href={'/services/' + service.path} >{service.title}</Nav.Link>
                        )}
                    </Nav>
                    <Switch>
                        { this.state.companyServices.map(service =>
                            <Route path= {'/services/' + service.path}>
                                <Info info={service} />
                            </Route>
                        )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Services;