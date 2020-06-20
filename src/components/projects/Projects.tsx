import React from 'react';
import InfoProp from "../info/InfoProp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Nav} from "react-bootstrap";
import Info from "../info/Info";

interface IProjectsProps {
}

interface IProjectsState {
    selectedProjects: InfoProp[];
}


class Projects extends React.Component <IProjectsProps, IProjectsState>{
    constructor(props : IProjectsProps) {
        super(props);
        this.state = {
            selectedProjects: [
                // TODO: ask dad about routes(path)
                new InfoProp(
                    "Cathodic Protection - Selected Projects",
                    "CathodicProtectionProjects",
                    [
                        "DORAD power station – Ashkelon",
                        "Installation of sacrificial and impressed current Cathodic Protection to all the pipelines and tanks in the power station including:",
                        "    • Natural Gas Pipelines",
                        "    • Fuel Pipelines",
                        "    • Different purpose  underground Pipelines",
                        "    • 24 underground tanks",
                        "    • 3 Aboveground Tanks",
                        "    • Pile sheet & seawater cooling pipelines.",
                        "",
                        "Petroleum & Energy Infrastructures ltd.  – DCVG & CIPS SURVEYS",
                        "Preforming of DCVG & CIPS surveys for fuel pipelines including interpretation of the measurements, reports and recommendations.",
                    ]
                ), new InfoProp(
                    "Electrical construction - Selected Projects",
                    "ConstructionProjects",
                    [
                       "IAI (Israel Aerospace Industries) MABAT PLANT YAHUD – Medium voltage constructions and transformation stations",
                       "    • Underground Medium voltage infrastructures including horizontal drillings, Polyethylene conduits, Concrete Pits and about 3500 meters medium voltage cables.",
                       "    • Replacing of 3 old medium voltage switchboards with new ones.",
                       "    • Construction of new transformation station including 2 transformers 1600 KVA each, Medium voltage switchboard and 2500 Amps low voltage switchboard.",
                       "",
                       "INGL (Israel Natural Gas Lines) Eastern Gas Pipeline",
                       "Construction of low voltage electrical systems for valve stations along the eastern gas pipeline."
                    ]
                ), new InfoProp(
                    "Electrical switchboards - Selected Projects",
                    "SwitchboardsProjects",
                    [
                        "IAI (Israel Aerospace Industries)  MABAT PLANT YAHUD -#200 Energy center - 2500 Amps Main Switchboard.",
                        "Design and manufacture of 2500 Amps main switchboard supplied from 2 transformers 1600 KVA each and 1 diesel generator 1000 KVA ."
                    ]
                ), new InfoProp(
                    "Generator sets and fuel tanks - Selected Projects",
                    "GeneratorsProjects",
                    [
                        "The first international bank of Israel - Soreq business area Rishon Lezion",
                        "Installation of 4 Diesel generator sets (DUPS) 1500KW each.",
                        "320 meters 16” exhaust pipes.",
                        "Silence and cooling systems to the 4 DUPS.",
                        "2 underground fuel tanks 50,000 liters each.",
                        "5 daily aboveground fuel tanks 2,000 liter each.",
                        "Underground and aboveground fuel pipes between the tanks and the diesel generators.",
                        "Control and level monitoring switchboards for all the fuel systems.",
                        "Underground secondary containment, cathodic protection & Leakage monitoring facilities according to the Israel Ministry of Environmental Protection regulation."
                    ]
                ), new InfoProp(
                    "Instrumentation and control - Selected projects",
                    "InstrumentationAndControlProjects",
                    [
                        "IAI (Israel Aerospace Industries) Commercial aircraft division – Plating line",
                        "Control system of plating line including:",
                        "    • 24 plating containers",
                        "    • Air ventilation system",
                        "    • Water tanks and pipes",
                        "    • Acid containers",
                        "    • General Alarms",
                        "    • Automatic activation according to time schedule.",
                        "    • HMI stations for operator supervising and activation."
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
                    <Nav defaultActiveKey={'/projects/' + this.state.selectedProjects[0] } className="flex-column">
                        { this.state.selectedProjects.map(service =>
                            <Nav.Link href={'/projects/' + service.path} >{service.title}</Nav.Link>
                        )}
                    </Nav>
                    <Switch>
                        { this.state.selectedProjects.map(service =>
                            <Route path= {'/projects/' + service.path}>
                                <Info info={service} />
                            </Route>
                        )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Projects;