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
            <div>
                <h1>Etzion Electrical Engineering LTD – Company Profile</h1>
                <p>
                    Etzion Electrical Engineering ltd was founded in 1970 and operates in a wide range of activities in the area of industrial electricity construction, power generation and cathodic protection.
                </p>
                <p>
                    - Cathodic protection systems. – Design, measurements, surveys, installation and commissioning of CP systems.
                    - Generator sets – Design and Installation of generator sets including fuel tanks, fuel systems, exhaust pipes, silence systems and all the electromechanical systems.
                    - Electrical work Power distribution - High voltage and low voltage power distribution for industrial facilities, pumping stations (water, fuel, etc.), desalination plants, gas PRMS etc.
                    - Low voltage switchboards – Design and manufacture of low voltage switchboards. The company factory certified by The Standards Institution of Israel (SII) To Manufacture low-voltage electrical boards for distribution and control switchgear up to 3200A in accordance with the Israeli standard 61439 part 2.
                    - Control and instrumentation – Installation and commissioning of control and instrumentation systems.
                </p>
                <p>
                    The company have a focus on complex technology projects, where the high engineering and professional abil
                    ities of the company staff can be expressed and giving extra value for the customers.
                </p>
                <h2>Company policy</h2>
                <p>
                    Professionality, innovation, dealing with technologic challenges and high quality level of manufacture, construction and service.
                </p>

                <h1>Certifications</h1>
                <h2>Contractor Registry - Ministry of contracting and housing</h2>
                <p>
                    160 A4 - Electrical construction
                    240 A1 - Communication lines
                    250 A2 - Electrical lines
                    270 A1 - Road lighting
                    410 A1 – Pipelines construction
                    Recognized contractor for government construction.
                </p>
                <h2>The Standard Institution of Israel (SII)</h2>
                <p>
                    Israeli Standard 61439-2 - Power switchgear and control gear assemblies up to 3200 amps.
                    ISO 9001 - Quality Management System
                </p>
                <h2>NACE International</h2>
                <p>
                    Ofer Etzion – CP3 - Cathodic Protection Technologist
                    Nissim Shkori – CIP1 - Coating inspector Level 1
                </p>

                <h1>Key personnel</h1>
                <h2>Mr. Amos Etzion -  CEO  & COFOUNDER -</h2>
                <p>
                    BSc in Electrical Engineering (Technion - Israel institute of technology 1953)
                    More than 60 years of experience in the field of electricity, generator sets and cathodic protection.
                </p>
                <h2>Mr. Ofer Etzion  - CEO</h2>
                <p>
                    BSc in Electrical Engineering (Technion - Israel institute of technology 1953)
                    MBA   - Master of business administration
                    CP3 – Cathodic Protection Technologist (NACE International Certification)
                    More than 25 years of experience in the field of electricity, generator sets and cathodic protection
                </p>

                <h1>Main customers</h1>
                <p>
                    Israel Aerospace Industries (IAI)
                    Ministry of Defense (MOD)
                    IMI Systems
                    MEKOROT   - Israel National Water Co.
                    Israel natural gas lines (INGL)
                    Petroleum & Energy Infrastructures Ltd
                    Oil products pipeline Ltd
                    Eilat Ashkelon Pipelines Co. Ltd (EAPC)
                    PAZ Ashdod Oil Refinery
                    Israel Airports Authority
                </p>
            </div>
        );}
}

export default AboutEtzion;