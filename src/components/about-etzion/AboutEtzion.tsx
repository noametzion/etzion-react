import React from 'react';
import InfoProp from "../info/InfoProp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Nav} from "react-bootstrap";
import Info from "../info/Info";

interface IAboutEtzionProps {
}

interface IAboutEtzionState {
    abouts: InfoProp[];
}


class AboutEtzion extends React.Component <IAboutEtzionProps, IAboutEtzionState>{
    constructor(props : IAboutEtzionProps) {
        super(props);
        this.state = {
            abouts: [
                // TODO: ask dad about routes(path)
                new InfoProp(
                    "Etzion Electrical Engineering LTD – Company Profile",
                    "CompanyProfile",
                    [
                        "Etzion Electrical Engineering ltd was founded in 1970 and operates in a wide range of activities in the area of industrial electricity construction, power generation and cathodic protection.",
                        //TODO: fix
                        "    - Cathodic protection systems. – Design, measurements, surveys, installation and commissioning of CP systems.\n" +
                        "    - Generator sets – Design and Installation of generator sets including fuel tanks, fuel systems, exhaust pipes, silence systems and all the electromechanical systems.\n" +
                        "    - Electrical work Power distribution - High voltage and low voltage power distribution for industrial facilities, pumping stations (water, fuel, etc.), desalination plants, gas PRMS etc.\n" +
                        "    - Low voltage switchboards – Design and manufacture of low voltage switchboards. The company factory certified by The Standards Institution of Israel (SII) To Manufacture low-voltage electrical boards for distribution and control switchgear up to 3200A in accordance with the Israeli standard 61439 part 2.\n" +
                        "    - Control and instrumentation – Installation and commissioning of control and instrumentation systems.",
                        "The company have a focus on complex technology projects, where the high engineering and professional abilities of the company staff can be expressed and giving extra value for the customers.",
                        "",
                        "Company policy",
                        "Professionality, innovation, dealing with technologic challenges and high quality level of manufacture, construction and service.\n"
                    ]
                ), new InfoProp(
                    "Certifications",
                    "Certifications",
                    [
                        "Contractor Registry - Ministry of contracting and housing",
                        "                   160 A4 - Electrical construction\n" +
                        "                    240 A1 - Communication lines\n" +
                        "                    250 A2 - Electrical lines\n" +
                        "                    270 A1 - Road lighting\n" +
                        "                    410 A1 – Pipelines construction\n" +
                        "                    Recognized contractor for government construction.",
                        "",
                        "The Standard Institution of Israel (SII)",
                        "                    Israeli Standard 61439-2 - Power switchgear and control gear assemblies up to 3200 amps.\n" +
                        "                    ISO 9001 - Quality Management System",
                        "",
                        "NACE International",
                        "                    Ofer Etzion – CP3 - Cathodic Protection Technologist\n" +
                        "                    Nissim Shkori – CIP1 - Coating inspector Level 1"
                    ]
                ), new InfoProp(
                    "Key Personnel",
                    "KeyPersonnel",
                    [
                        "Mr. Amos Etzion -  CEO  & COFOUNDER -",
                        "                    BSc in Electrical Engineering (Technion - Israel institute of technology 1953)\n" +
                        "                    More than 60 years of experience in the field of electricity, generator sets and cathodic protection.",
                        "",
                        "Mr. Ofer Etzion  - CEO",
                        "                    BSc in Electrical Engineering (Technion - Israel institute of technology 1953)\n" +
                        "                    MBA   - Master of business administration\n" +
                        "                    CP3 – Cathodic Protection Technologist (NACE International Certification)\n" +
                        "                    More than 25 years of experience in the field of electricity, generator sets and cathodic protection",

                    ]
                ), new InfoProp(
                    "Main Customers",
                    "MainCustomers",
                    [
                        "                    Israel Aerospace Industries (IAI)\n" +
                        "                    Ministry of Defense (MOD)\n" +
                        "                    IMI Systems\n" +
                        "                    MEKOROT   - Israel National Water Co.\n" +
                        "                    Israel natural gas lines (INGL)\n" +
                        "                    Petroleum & Energy Infrastructures Ltd\n" +
                        "                    Oil products pipeline Ltd\n" +
                        "                    Eilat Ashkelon Pipelines Co. Ltd (EAPC)\n" +
                        "                    PAZ Ashdod Oil Refinery\n" +
                        "                    Israel Airports Authority"
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
                    {/*TODO: fix logo disappear*/}
                    <Nav defaultActiveKey={'/about/' + this.state.abouts[0] } className="flex-column">
                        { this.state.abouts.map(about =>
                            <Nav.Link href={'/about/' + about.path} >{about.title}</Nav.Link>
                        )}
                    </Nav>
                    <Switch>
                        { this.state.abouts.map(about =>
                            <Route path= {'/about/' + about.path}>
                                <Info info={about} />
                            </Route>
                        )}
                    </Switch>
                </Router>
            </div>
        );}
}

export default AboutEtzion;